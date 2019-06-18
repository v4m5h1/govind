import { Text } from '@microsoft/sp-core-library';
import { _QosMonitor, _TraceLogger } from '@microsoft/sp-diagnostics';
import { isEmpty } from '@microsoft/sp-lodash-subset';
import ErrorBuilder from './error/ErrorBuilder';
import strings from './SPLoader.resx';
import ComponentStore from './stores/ComponentStore';
import ManifestStore from './stores/ManifestStore';
import { resolvePath } from './utilities/resolveAddress';
import ResourceUrlChecker from './utilities/ResourceUrlChecker';
import * as telemetryConstants from './utilities/telemetryConstants';
var FIRST_RETRY = 1;
var MAX_NUMBER_RETRIES = 3;
var LOAD_COMPONENT_IMPL_EVENT_NAME = 'loadComponentImpl';
export default function loadComponent(manifest, moduleLoader) {
    if (!manifest) {
        return Promise.reject(new Error(Text.format(strings.isUndefinedValidateError, 'manifest')));
    }
    var cachedModule = ComponentStore.instance.tryGetComponent(manifest.id, manifest.version);
    if (cachedModule) {
        return cachedModule;
    }
    var componentPromise = _loadComponentRetryStrategy(manifest, FIRST_RETRY, MAX_NUMBER_RETRIES, moduleLoader).catch(function (error) {
        ComponentStore.instance.deleteComponent(manifest.id, manifest.version);
        throw error;
    });
    ComponentStore.instance.storeComponent(manifest.id, manifest.version, componentPromise);
    return componentPromise;
}
function _loadComponentRetryStrategy(manifest, currentRetryNumber, maxNumberRetries, moduleLoader) {
    if (currentRetryNumber === 1) {
        _TraceLogger.logVerbose(telemetryConstants.loadComponentLogSource, Text.format(strings.loadComponentLog, manifest.id, manifest.alias, manifest.version));
    }
    else {
        _TraceLogger.logVerbose(telemetryConstants.loadComponentLogSource, Text.format(strings.loadComponentRetryLog, manifest.id, manifest.alias, currentRetryNumber, maxNumberRetries));
    }
    return _loadComponentImpl(manifest, moduleLoader)
        .then(function (component) {
        _TraceLogger.logVerbose(telemetryConstants.loadComponentLogSource, Text.format(strings.loadComponentEndLog, manifest.id, manifest.alias, manifest.version));
        return component;
    })
        .catch(function (error) {
        moduleLoader.delete(manifest);
        if (currentRetryNumber < maxNumberRetries) {
            return _loadComponentRetryStrategy(manifest, currentRetryNumber + 1, maxNumberRetries, moduleLoader);
        }
        else {
            _TraceLogger.logError(telemetryConstants.loadComponentLogSource, new Error(Text.format(strings.loadComponentMaxRetriesError, manifest.id, manifest.alias, maxNumberRetries)));
            throw error;
        }
    });
}
function _loadComponentImpl(manifest, moduleLoader) {
    try {
        moduleLoader.configure(manifest);
    }
    catch (error) {
        _TraceLogger.logVerbose(telemetryConstants.loadComponentLogSource, error.message, LOAD_COMPONENT_IMPL_EVENT_NAME);
        return Promise.reject(error);
    }
    var componentDeps = [];
    var pathDeps = [];
    try {
        componentDeps = _loadComponentDependencies(manifest, moduleLoader);
    }
    catch (error) {
        _TraceLogger.logVerbose(telemetryConstants.loadComponentLogSource, error.message, LOAD_COMPONENT_IMPL_EVENT_NAME);
        return Promise.reject(error);
    }
    try {
        pathDeps = _loadPathDependencies(manifest, moduleLoader);
    }
    catch (error) {
        _TraceLogger.logVerbose(telemetryConstants.loadComponentLogSource, error.message, LOAD_COMPONENT_IMPL_EVENT_NAME);
        return Promise.reject(error);
    }
    return Promise.all(componentDeps.concat(pathDeps)).then(function (components) {
        if (!manifest.loaderConfig.entryModuleId) {
            moduleLoader.ensure(manifest, {});
            return {};
        }
        return _loadEntryPoint(manifest, moduleLoader).then(function (entryPoint) {
            _validateComponentIsNotEmptyOrThrow(entryPoint, manifest);
            return entryPoint;
        });
    }).catch(function (e) {
        throw ErrorBuilder.buildLoadComponentError(manifest, e);
    });
}
function _validateComponentIsNotEmptyOrThrow(component, manifest) {
    if (isEmpty(component)) {
        throw ErrorBuilder.buildLoadComponentReturnsEmptyError(manifest);
    }
    var defaultObject = component.default; 
    if (defaultObject && isEmpty(defaultObject) && !defaultObject.prototype) {
        throw ErrorBuilder.buildLoadComponentReturnsDefaultEmptyError(manifest);
    }
}
function _loadComponentDependencies(manifest, moduleLoader) {
    var depPromises = [];
    var resources = manifest.loaderConfig.scriptResources;
    var _loop_1 = function (name_1) {
        if (resources[name_1].type === 'component' && !resources[name_1].shouldNotPreload) {
            var moduleConfiguration_1 = resources[name_1];
            var resourceManifest = ManifestStore.instance.tryGetManifest(moduleConfiguration_1.id, moduleConfiguration_1.version);
            if (resourceManifest) {
                var dep = loadComponent(resourceManifest, moduleLoader).catch(function (e) {
                    throw ErrorBuilder.buildLoadComponentDependencyError(manifest, e);
                });
                depPromises.push(dep);
            }
            else { 
                if (moduleConfiguration_1.failoverPath) {
                    var dep = moduleLoader.loadFromFailoverPath(name_1)
                        .catch(function (e) {
                        return _processLoadErrors(manifest, name_1, [ResourceUrlChecker.checkResourceUrl].concat(moduleLoader.loadComponentDependencyErrorProcessors), function () { return ErrorBuilder.buildLoadComponentDependencyFailoverPathError(manifest, name_1, resolvePath(moduleConfiguration_1.failoverPath), e); });
                    });
                    depPromises.push(dep);
                }
                else { 
                    var dep = ManifestStore.instance.requestManifest(moduleConfiguration_1.id, moduleConfiguration_1.version)
                        .then(function (m) { return loadComponent(m, moduleLoader); })
                        .catch(function (e) { return Promise.reject(ErrorBuilder.buildManifestNotFoundError(moduleConfiguration_1)); });
                    depPromises.push(dep);
                }
            }
        }
    };
    for (var name_1 in resources) {
        _loop_1(name_1);
    }
    return depPromises;
}
function _loadPathDependencies(manifest, moduleLoader) {
    var resources = manifest.loaderConfig.scriptResources;
    var loadedPathDependencies = new Map();
    for (var name_2 in resources) {
        if ((resources[name_2].type === 'path' || resources[name_2].type === 'localizedPath')
            && !resources[name_2].shouldNotPreload) {
            if (name_2 !== manifest.loaderConfig.entryModuleId) {
                _loadPathDependency(manifest, name_2, loadedPathDependencies, moduleLoader);
            }
        }
    }
    var loadedPathDependenciesValues = [];
    loadedPathDependencies.forEach(function (value) {
        loadedPathDependenciesValues.push(value);
    });
    return loadedPathDependenciesValues;
}
function _loadPathDependency(manifest, name, loadedPathDependencies, moduleLoader) {
    var loadedPathDependency = loadedPathDependencies.get(name);
    if (loadedPathDependency) {
        return loadedPathDependency;
    }
    var qosMonitor = new _QosMonitor(telemetryConstants.loadPathDependencyQosScenarioName);
    var qosExtraData = {
        name: name,
        manifestId: manifest.id,
        version: manifest.version,
        alias: manifest.alias,
        isInternal: manifest.isInternal
    };
    _TraceLogger.logVerbose(telemetryConstants.loadComponentLogSource, Text.format(strings.loadPathDependencyLog, name, manifest.id, manifest.alias));
    var resources = manifest.loaderConfig.scriptResources;
    var pathConfig = resources[name];
    if (!pathConfig) {
        return Promise.reject(ErrorBuilder.buildMissingPathDependencyError(manifest, name));
    }
    var loadPromise;
    if (pathConfig.globalDependencies) {
        var depPromises = pathConfig.globalDependencies
            .map(function (dep) { return _loadPathDependency(manifest, dep, loadedPathDependencies, moduleLoader); });
        loadPromise = Promise.all(depPromises).then(function () {
            return _moduleLoaderLoadPathDependency(manifest, name, moduleLoader);
        }, function () {
            throw ErrorBuilder.buildLoadPathDependencyBlockedError(manifest, name);
        });
    }
    else {
        loadPromise = _moduleLoaderLoadPathDependency(manifest, name, moduleLoader);
    }
    loadedPathDependencies.set(name, loadPromise);
    return loadPromise.then(function (load) {
        qosMonitor.writeSuccess(qosExtraData);
        return load;
    }, function (error) {
        qosMonitor.writeUnexpectedFailure(undefined, error, qosExtraData);
        throw error;
    });
}
function _moduleLoaderLoadPathDependency(manifest, name, moduleLoader) {
    var globalName = manifest.loaderConfig.scriptResources[name].globalName;
    return moduleLoader.load(manifest, name, globalName)
        .catch(function (e) {
        return _processLoadErrors(manifest, name, [ResourceUrlChecker.checkResourceUrl].concat(moduleLoader.loadPathDependencyErrorProcessors), function () { return ErrorBuilder.buildLoadPathDependencyError(manifest, name, e); });
    });
}
function _loadEntryPoint(manifest, moduleLoader) {
    return moduleLoader.load(manifest).catch(function (e) {
        return _processLoadErrors(manifest, manifest.loaderConfig.entryModuleId, [ResourceUrlChecker.checkResourceUrl].concat(moduleLoader.loadEntryPointErrorProcessors), function () { return ErrorBuilder.buildLoadEntryPointError(manifest, e); });
    });
}
function _processLoadErrors(manifest, name, errorProcessors, buildDefaultError) {
    return Promise.all(errorProcessors.map(function (errorProcessor) { return errorProcessor(manifest, name); }))
        .then(
    function () {
        throw buildDefaultError();
    }, function (e) { throw e; });
}
