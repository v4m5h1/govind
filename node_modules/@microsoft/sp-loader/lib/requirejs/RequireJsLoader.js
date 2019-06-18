import { ServiceKey, Guid, Version, Log, _SPFlight } from '@microsoft/sp-core-library';
import { _TraceLogger } from '@microsoft/sp-diagnostics';
import ManifestStore from '../stores/ManifestStore';
import AddressStore from '../stores/AddressStore';
import resolveAddress from '../utilities/resolveAddress';
import isCorsEnabled from '../utilities/isCorsEnabled';
import normalizeName, { normalizeFailoverPathName } from './normalizeName';
import ErrorBuilder from '../error/ErrorBuilder';
import * as telemetryConstants from '../utilities/telemetryConstants';
var REQUIREJS_LOAD_TIMEOUT_IN_SECONDS = 90;
var RequireJsLoader =  (function () {
    function RequireJsLoader(serviceScope) {
        this._configuredFailoverPaths = [];
        this._duplicateModuleNames = new Map();
        this._checkDependencies = this._checkDependencies.bind(this);
        this._initialize();
    }
    Object.defineProperty(RequireJsLoader.prototype, "loadEntryPointErrorProcessors", {
        get: function () {
            return [this._checkDependencies];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequireJsLoader.prototype, "loadComponentDependencyErrorProcessors", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequireJsLoader.prototype, "loadPathDependencyErrorProcessors", {
        get: function () {
            return [this._checkDependencies];
        },
        enumerable: true,
        configurable: true
    });
    RequireJsLoader.prototype.ensure = function (manifest, module) {
        var name = normalizeName(manifest);
        return this._ensure(name, module);
    };
    RequireJsLoader.prototype.requireConfig = function (config) {
        this._requirejs.config(config);
    };
    RequireJsLoader.prototype.load = function (manifest, name, globalName) {
        return this.requireLoad(normalizeName(manifest, name), globalName)
            .then(function (module) {
            if (!name && manifest.loaderConfig.exportName) { 
                return module[manifest.loaderConfig.exportName];
            }
            else {
                return module;
            }
        });
    };
    RequireJsLoader.prototype.loadFromFailoverPath = function (name) {
        return this.requireLoad(normalizeFailoverPathName(name));
    };
    RequireJsLoader.prototype.requireLoad = function (name, globalName) {
        var _this = this;
        if (this._duplicateModuleNames.has(name)) {
            name = this._duplicateModuleNames.get(name);
        }
        try {
            return this._requirePromise(name).then(function (module) {
                return _this._ensureProperModuleLoaded(name, module, globalName);
            }).catch(function (error) {
                return _this._handleRequireJsError(name, error, globalName);
            });
        }
        catch (error) {
            _TraceLogger.logError(telemetryConstants.loadComponentLogSource, error, RequireJsLoader._requireEventName);
            return Promise.reject(error);
        }
    };
    RequireJsLoader.prototype.delete = function (manifest) {
        return this.requireDelete(manifest);
    };
    RequireJsLoader.prototype.requireDelete = function (manifest) {
        var normalizedName = normalizeName(manifest);
        this._requirejs.undef(normalizedName);
        var scriptTags = document.getElementsByTagName('script');
        for (var i = 0; i < scriptTags.length; i++) {
            var scriptTag = scriptTags[i];
            if (normalizedName === scriptTag.getAttribute('data-requiremodule')) {
                scriptTag.parentNode.removeChild(scriptTag);
                break;
            }
        }
    };
    RequireJsLoader.prototype.getConfiguredUrl = function (name) {
        return this.requireContext.config.paths[name];
    };
    RequireJsLoader.prototype.configure = function (manifest) {
        var resources = manifest.loaderConfig.scriptResources;
        var pathConfig = {};
        var currentMapConfig = {};
        var shimConfig = {};
        for (var name_1 in resources) {
            if (resources.hasOwnProperty(name_1)) {
                this._configureResource(name_1, resources[name_1], manifest, pathConfig, currentMapConfig, shimConfig);
            }
        }
        var normalizedName = normalizeName(manifest);
        var mapConfig = {};
        mapConfig[normalizedName] = currentMapConfig;
        this.requireConfig({
            paths: pathConfig,
            map: mapConfig,
            shim: shimConfig
        });
        if (RequireJsLoader._window.define &&
            RequireJsLoader._window.__spfxPreloadedModules &&
            RequireJsLoader._window.__spfxPreloadedModules.hasOwnProperty(normalizedName)) {
            var args = RequireJsLoader._window.__spfxPreloadedModules[normalizedName];
            RequireJsLoader._window.define(args.id, args.deps, args.f);
            delete RequireJsLoader._window.__spfxPreloadedModules[normalizedName];
        }
    };
    RequireJsLoader.prototype.getMissingDependencies = function (moduleName) {
        var registryEntry = this.requireContext.registry[moduleName];
        var missingDependencies = [];
        if (registryEntry) {
            for (var _i = 0, _a = registryEntry.depMaps; _i < _a.length; _i++) {
                var dependency = _a[_i];
                if (this.requireContext.defined.hasOwnProperty(dependency.id) &&
                    this.requireContext.defined[dependency.id] === undefined) {
                    _TraceLogger.logError(telemetryConstants.loadComponentLogSource, new Error("Dependency \"" + dependency.id + "\" not found for module \"" + moduleName + "\""), RequireJsLoader._requireEventName);
                    missingDependencies.push(dependency.id);
                }
            }
        }
        return missingDependencies;
    };
    RequireJsLoader.prototype._ensure = function (name, module) {
        this._requirejs.undef(name);
        this._define(name, [], function () { return module; });
        this._requirejs([name]);
    };
    RequireJsLoader.prototype._configureResource = function (name, resource, manifest, pathConfig, mapConfig, shimConfig) {
        if (resource.type === 'component') {
            var componentResource = resource;
            this._configureComponentResource(name, componentResource, manifest, pathConfig, mapConfig, shimConfig);
        }
        else { 
            this._configurePathResource(name, resource, manifest, pathConfig, mapConfig, shimConfig);
        }
    };
    RequireJsLoader.prototype._configurePathResource = function (name, resource, manifest, pathConfig, mapConfig, shimConfig) {
        var normalizedName;
        if (name === manifest.loaderConfig.entryModuleId) { 
            normalizedName = normalizeName(manifest);
        }
        else {
            normalizedName = normalizeName(manifest, name);
            mapConfig[name] = normalizedName;
        }
        var address = this._resolveAddress(manifest, name);
        var existingNormalizedNameForAddress = AddressStore.instance.getNormalizedName(address);
        if (existingNormalizedNameForAddress) {
            mapConfig[name] = existingNormalizedNameForAddress;
            this._duplicateModuleNames.set(normalizedName, existingNormalizedNameForAddress);
        }
        else {
            pathConfig[normalizedName] = address;
            AddressStore.instance.set(normalizedName, address);
        }
        var pathResource = resource;
        if (pathResource) {
            this._fixUpJQueryKnownIssues(name, manifest, pathResource, manifest.loaderConfig.scriptResources);
            this._fixUpYammerKnownIssues(name, manifest, pathResource);
            if (pathResource.globalName) {
                shimConfig[normalizedName] = {
                    exports: pathResource.globalName,
                    deps: pathResource.globalDependencies
                };
            }
        }
    };
    RequireJsLoader.prototype._configureComponentResource = function (name, moduleConfiguration, manifest, pathConfig, mapConfig, shimConfig) {
        var resourceManifest = ManifestStore.instance.tryGetManifest(moduleConfiguration.id, moduleConfiguration.version);
        if (resourceManifest) {
            mapConfig[name] = normalizeName(resourceManifest);
        }
        if (moduleConfiguration.failoverPath) {
            if (this._configuredFailoverPaths.indexOf(name) === -1) {
                var normalizedName = normalizeFailoverPathName(name);
                pathConfig[normalizedName] = this._resolveAddress(manifest, name);
                AddressStore.instance.set(normalizedName, this._resolveAddress(manifest, name));
                this._configuredFailoverPaths.push(name);
            }
        }
    };
    RequireJsLoader.prototype._fixUpJQueryKnownIssues = function (name, manifest, resource, resources) {
        var jqueryString = 'jquery';
        var jQueryString = 'jQuery';
        var jqueryuiString = 'jqueryui';
        this._fixWrongGlobalName(name, jqueryString, jqueryString, jQueryString, manifest, resource);
        if (name.toLowerCase() === jqueryuiString &&
            (!resource.globalDependencies || resource.globalDependencies.length === 0)) {
            _TraceLogger.logVerbose(telemetryConstants.loadComponentLogSource, "Fixing up JQueryUI path dependency for component \"" + manifest.id + "\" (" + manifest.alias + ")");
            if (resources[jqueryString]) {
                resource.globalDependencies = [jqueryString];
            }
            else if (resources[jQueryString]) {
                resource.globalDependencies = [jQueryString];
            }
            else {
                _TraceLogger.logVerbose(telemetryConstants.loadComponentLogSource, "Didn't find JQuery path dependency in \"" + manifest.id + "\" (" + manifest.alias + ") to fix JQuery UI");
            }
        }
    };
    RequireJsLoader.prototype._fixUpYammerKnownIssues = function (name, manifest, resource) {
        var yammerString = 'yammer';
        var yamString = 'yam';
        this._fixWrongGlobalName(name, yammerString, yammerString, yamString, manifest, resource);
    };
    RequireJsLoader.prototype._fixWrongGlobalName = function (name, expectedName, knownBadName, expectedGlobalName, manifest, resource) {
        if ((name.toLowerCase() === expectedName && !resource.globalName)
            || resource.globalName === knownBadName) {
            _TraceLogger.logVerbose(telemetryConstants.loadComponentLogSource, "Fixing up wrong \"" + name + "\" path dependency for component \"" + manifest.id + "\" (" + manifest.alias + ")");
            resource.globalName = expectedGlobalName;
        }
    };
    Object.defineProperty(RequireJsLoader.prototype, "requireContext", {
        get: function () {
            return this._requirejs.s.contexts._; 
        },
        enumerable: true,
        configurable: true
    });
    RequireJsLoader.prototype._requirePromise = function (moduleName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._requirejs([moduleName], function (module) { return resolve(module); }, function (error) { return reject(error); });
        });
    };
    RequireJsLoader.prototype._initialize = function () {
        if (!this._isRequireJsLoaded()) {
            this._loadRequireJs();
        }
        else {
            this._setRequireJsLocalVariables();
        }
        var config = { waitSeconds: REQUIREJS_LOAD_TIMEOUT_IN_SECONDS };
        if (_SPFlight.isEnabled(1106 )) {
            config.onNodeCreated = function (node, c, moduleName, url) {
                if (isCorsEnabled(url)) {
                    node.setAttribute('crossorigin', 'anonymous');
                }
            };
        }
        this.requireConfig(config);
    };
    RequireJsLoader.prototype._loadRequireJs = function () {
        var requirejs = DEPRECATED_UNIT_TEST
            ? require('./test/RequireJsMock')
            : require('exports-loader?requirejs,require,define!../../../../blobs/requirejs/2.1.20/require.min');
        RequireJsLoader._window.requirejs = requirejs.requirejs;
        RequireJsLoader._window.require = requirejs.require;
        RequireJsLoader._window.define = requirejs.define;
        var requireJsConfig = {
            baseUrl: RequireJsLoader._invalidBaseUrl
        };
        this._setRequireJsLocalVariables();
        this.requireConfig(requireJsConfig);
    };
    RequireJsLoader.prototype._isRequireJsLoaded = function () {
        return (RequireJsLoader._window.requirejs !== undefined &&
            RequireJsLoader._window.require !== undefined &&
            RequireJsLoader._window.define !== undefined);
    };
    RequireJsLoader.prototype._setRequireJsLocalVariables = function () {
        this._requirejs = RequireJsLoader._window.requirejs;
        this._define = RequireJsLoader._window.define;
    };
    RequireJsLoader.prototype._resolveAddress = function (manifest, resourceName) {
        var address = resolveAddress(manifest, resourceName);
        address = address.replace(/.js$/, '');
        return address;
    };
    RequireJsLoader.prototype._ensureProperModuleLoaded = function (moduleName, module, globalName) {
        if (globalName) {
            if (window.hasOwnProperty(globalName)) {
                var returnValue = window[globalName]; 
                this._ensure(moduleName, returnValue);
                return Promise.resolve(returnValue);
            }
            else {
                var error = ErrorBuilder.buildScriptFailedToCreateGlobalError(globalName, this.getConfiguredUrl(moduleName));
                _TraceLogger.logError(telemetryConstants.loadComponentLogSource, error);
                Log.warn(telemetryConstants.loadComponentLogSource.id, error.message);
                return Promise.resolve({});
            }
        }
        else if (module === undefined && this._isSpfxComponent(moduleName)) {
            return this._requireLoadForDifferentVersion(moduleName);
        }
        else {
            return Promise.resolve(module);
        }
    };
    RequireJsLoader.prototype._handleRequireJsError = function (moduleName, error, globalName) {
        if (globalName && window.hasOwnProperty(globalName)) {
            var returnValue = window[globalName]; 
            this._ensure(moduleName, returnValue);
            return Promise.resolve(returnValue);
        }
        else if (this._isOrphanedVersionLoaded(moduleName)) {
            return this._requireLoadForDifferentVersion(moduleName, error);
        }
        else {
            return Promise.reject(error);
        }
    };
    RequireJsLoader.prototype._isOrphanedVersionLoaded = function (moduleName) {
        var _this = this;
        var componentId = this._extractComponentIdFromModuleName(moduleName);
        var registry = this.requireContext.registry;
        var registryIds = Object.keys(registry);
        return registryIds
            .map(function (id) { return moduleName !== id && id.indexOf(componentId) === 0 && _this._isSpfxComponent(id); })
            .reduce(function (prev, curr) { return prev || curr; }, false);
    };
    RequireJsLoader.prototype._isSpfxComponent = function (moduleName) {
        if (moduleName.split('/').length > 1) {
            return false; 
        }
        var substrings = moduleName.split('_');
        return substrings.length === 2 && Guid.isValid(substrings[0]) && Version.isValid(substrings[1]);
    };
    RequireJsLoader.prototype._extractComponentIdFromModuleName = function (moduleName) {
        return moduleName.split('_')[0];
    };
    RequireJsLoader.prototype._requireLoadForDifferentVersion = function (moduleName, error) {
        var registry = this.requireContext.registry;
        var requirejsInternalConfig = this.requireContext.config;
        var requestedComponentId = this._extractComponentIdFromModuleName(moduleName);
        for (var _i = 0, _a = Object.keys(registry); _i < _a.length; _i++) {
            var loadedModuleName = _a[_i];
            var loadedComponentId = this._extractComponentIdFromModuleName(loadedModuleName);
            if (requestedComponentId === loadedComponentId && moduleName !== loadedModuleName) {
                var map = {}; 
                map[loadedModuleName] = requirejsInternalConfig.map[moduleName];
                var paths = {};
                paths[loadedModuleName] = requirejsInternalConfig.paths[moduleName];
                this._requirejs.config({
                    map: map,
                    paths: paths
                });
                this._requirejs.undef(moduleName);
                this._requirejs.undef(loadedModuleName);
                requirejsInternalConfig.paths[moduleName] = "SPFx: Use " + loadedModuleName + " instead";
                return this._requirePromise(loadedModuleName);
            }
        }
        return Promise.reject(error ? error : new Error("Unknown error when loading module \"" + moduleName + "\""));
    };
    RequireJsLoader.prototype._checkDependencies = function (manifest, name) {
        var moduleName = normalizeName(manifest, name);
        var missingDependencies = this.getMissingDependencies(moduleName);
        if (missingDependencies.length > 0) {
            return Promise.reject(ErrorBuilder.buildModuleHasFailedDependencyError(moduleName, missingDependencies.join(', ')));
        }
        return Promise.resolve();
    };
    RequireJsLoader.serviceKey = ServiceKey.create('sp-loader:RequireJsLoader', RequireJsLoader);
    RequireJsLoader._requireEventName = 'RequireJS.require';
    RequireJsLoader._invalidBaseUrl = 'https://relative-path.invalid/';
    RequireJsLoader._window = window;
    return RequireJsLoader;
}());
export default RequireJsLoader;
