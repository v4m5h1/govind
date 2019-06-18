import { _TraceLogger } from '@microsoft/sp-diagnostics';
import { ServiceKey, Validate, _SPFlight } from '@microsoft/sp-core-library';
import ManifestStore from '../stores/ManifestStore';
import AddressStore from '../stores/AddressStore';
import resolveAddress from '../utilities/resolveAddress';
import isCorsEnabled from '../utilities/isCorsEnabled';
import normalizeName, { normalizeFailoverPathName } from './normalizeName';
import strings from '../SPLoader.resx';
import * as telemetryConstants from '../utilities/telemetryConstants';
import ErrorBuilder from '../error/ErrorBuilder';
var SystemJsLoader =  (function () {
    function SystemJsLoader(serviceScope) {
        this._configuredFailoverPaths = [];
        this._checkEntryPointDependenciesError = this._checkEntryPointDependenciesError.bind(this);
        this._initialize();
    }
    Object.defineProperty(SystemJsLoader.prototype, "loadEntryPointErrorProcessors", {
        get: function () {
            return [this._checkEntryPointDependenciesError];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SystemJsLoader.prototype, "loadComponentDependencyErrorProcessors", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SystemJsLoader.prototype, "loadPathDependencyErrorProcessors", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    SystemJsLoader.prototype.ensure = function (manifest, module) {
        var name = normalizeName(manifest);
        return this._ensure(name, module);
    };
    SystemJsLoader.prototype._ensure = function (name, module) {
        var system = this._system;
        if (!system.has(name)) {
            system.set(name, system.newModule(module));
        }
    };
    SystemJsLoader.prototype.delete = function (manifest) {
        return this._delete(normalizeName(manifest));
    };
    SystemJsLoader.prototype._delete = function (name) {
        var system = this._system;
        if (system.has(name)) {
            system.delete(name);
        }
    };
    SystemJsLoader.prototype.systemConfig = function (config) {
        this._originalSystemConfig.call(this._system, config);
    };
    SystemJsLoader.prototype.load = function (manifest, name, globalName) {
        var _this = this;
        return this.systemImport(normalizeName(manifest, name))
            .then(function (module) {
            var retValue = module;
            if (!name && manifest.loaderConfig.exportName) {
                retValue = module[manifest.loaderConfig.exportName];
                _this._ensure(normalizeName(manifest, manifest.loaderConfig.exportName), retValue);
            }
            return retValue;
        });
    };
    SystemJsLoader.prototype.loadFromFailoverPath = function (name) {
        return this.systemImport(normalizeFailoverPathName(name));
    };
    SystemJsLoader.prototype.systemImport = function (name) {
        try {
            return this._system.import(name);
        }
        catch (error) {
            _TraceLogger.logError(telemetryConstants.loadComponentLogSource, error, SystemJsLoader.systemImportEventName);
            return Promise.reject(error);
        }
    };
    SystemJsLoader.prototype.systemDelete = function (manifest) {
        this._system.delete(normalizeName(manifest));
    };
    SystemJsLoader.prototype.configure = function (manifest) {
        var resources = manifest.loaderConfig.scriptResources;
        var depsMap = {};
        var globalDepsMap = {};
        for (var name_1 in resources) {
            if (resources[name_1].type === 'component') {
                var moduleConfiguration = resources[name_1];
                var resourceManifest = ManifestStore.instance.tryGetManifest(moduleConfiguration.id, moduleConfiguration.version);
                if (resourceManifest) {
                    depsMap[name_1] = normalizeName(resourceManifest);
                }
                if (moduleConfiguration.failoverPath) {
                    if (this._configuredFailoverPaths.indexOf(name_1) === -1) {
                        var normalizedName = normalizeFailoverPathName(name_1);
                        AddressStore.instance.set(normalizedName, resolveAddress(manifest, name_1));
                        globalDepsMap[name_1] = normalizedName;
                        this._configuredFailoverPaths.push(name_1);
                    }
                }
            }
            else { 
                var normalizedName = void 0;
                if (name_1 === manifest.loaderConfig.entryModuleId) { 
                    normalizedName = normalizeName(manifest);
                }
                else {
                    normalizedName = normalizeName(manifest, name_1);
                    depsMap[name_1] = normalizedName;
                }
                var address = resolveAddress(manifest, name_1);
                AddressStore.instance.set(normalizedName, address);
                var resource = resources[name_1];
                this._configureMetadata(normalizedName, address, resource);
            }
        }
        var packages = {};
        packages[normalizeName(manifest)] = {
            map: depsMap,
            defaultExtension: false
        };
        var config = {
            packages: packages
        };
        this.systemConfig(config);
        if (Object.keys(globalDepsMap).length) {
            this.systemConfig({
                map: globalDepsMap
            });
        }
    };
    SystemJsLoader.prototype.getDependencies = function (manifest) {
        Validate.isNotNullOrUndefined(manifest, 'manifest');
        var defined = this._system.defined; 
        var definedName = this.getDefinedId(manifest);
        var componentDefinition = defined[definedName];
        if (!componentDefinition) {
            return [];
        }
        return componentDefinition.deps;
    };
    SystemJsLoader.prototype._baseSystemConfig = function (pluginName, scriptLoad) {
        var systemConfig = {
            meta: {
                '*': {
                    loader: pluginName,
                    scriptLoad: scriptLoad
                }
            }
        };
        this.systemConfig(systemConfig);
    };
    SystemJsLoader.prototype._initialize = function () {
        this._system = this._loadSystemJs();
        this._setCustomLoader(SystemJsLoader.pluginName, this._system);
        var systemConfig = {
            baseURL: SystemJsLoader._invalidBaseUrl,
            defaultJsExtensions: false
        };
        this.systemConfig(systemConfig);
        this._baseSystemConfig(SystemJsLoader.pluginName, true);
    };
    SystemJsLoader.prototype._loadSystemJs = function () {
        var system = DEPRECATED_UNIT_TEST
            ? require('./test/SystemJsMock')
            : require('@microsoft/loader-raw-script!../../../../blobs/systemjs/0.19.25/dist/system.spfx');
        this._originalSystemConfig = system.config;
        system.config = function (config) {
            throw new Error(strings.systemConfigDisabledError);
        };
        return system;
    };
    SystemJsLoader.prototype._setCustomLoader = function (pluginName, system) {
        var loader = {
            locate: function (module) {
                var address = AddressStore.instance.tryGetAddress(module.name);
                if (address) {
                    return address;
                }
                else {
                    _TraceLogger.logVerbose(telemetryConstants.loadComponentLogSource, "Address not found for module name: " + module.name + ". Using it as absolute URL.");
                    return module.name;
                }
            }
        };
        system.set(pluginName, system.newModule(loader));
    };
    SystemJsLoader.prototype.getDefinedId = function (manifest) {
        return SystemJsLoader._invalidBaseUrl + manifest.id + '_' + manifest.version;
    };
    SystemJsLoader.prototype._configureMetadata = function (normalizedName, address, resource) {
        if (_SPFlight.isEnabled(1106 )) {
            var meta = {};
            if (resource.globalName) {
                meta[normalizedName] = {
                    format: 'global',
                    exports: resource.globalName
                };
            }
            if (isCorsEnabled(address)) {
                (meta[normalizedName] || (meta[normalizedName] = {})).crossOrigin = 'anonymous';
            }
            var globalConfig = {
                meta: meta
            };
            this.systemConfig(globalConfig);
        }
        else {
            if (resource && resource.globalName) {
                var meta = {};
                meta[normalizedName] = {
                    format: 'global',
                    exports: resource.globalName
                };
                var globalConfig = {
                    meta: meta
                };
                this.systemConfig(globalConfig);
            }
        }
    };
    SystemJsLoader.prototype._checkEntryPointDependenciesError = function (manifest, name) {
        var dependencies = this.getDependencies(manifest);
        var resources = manifest.loaderConfig.scriptResources;
        dependencies.forEach(function (depName) {
            if (!resources[depName]) {
                throw ErrorBuilder.buildModuleHasUndeclaredDependencyError(manifest, depName);
            }
        });
        return Promise.resolve();
    };
    SystemJsLoader.serviceKey = ServiceKey.create('sp-loader:SystemJsLoader', SystemJsLoader);
    SystemJsLoader.pluginName = 'sp-loader-resolver';
    SystemJsLoader.systemImportEventName = 'System.import';
    SystemJsLoader._invalidBaseUrl = 'https://relative-path.invalid/';
    return SystemJsLoader;
}());
export default SystemJsLoader;
