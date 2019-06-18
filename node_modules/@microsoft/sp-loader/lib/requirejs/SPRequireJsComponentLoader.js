var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Validate } from '@microsoft/sp-core-library';
import { _QosMonitor, _TraceLogger } from '@microsoft/sp-diagnostics';
import { BaseComponentLoader } from '../BaseComponentLoader';
import ErrorBuilder from '../error/ErrorBuilder';
import SPLoaderError from '../error/SPLoaderError';
import ComponentStore from '../stores/ComponentStore';
import LoadComponentExecutor from '../utilities/LoadComponentExecutor';
import * as telemetryConstants from '../utilities/telemetryConstants';
import ComponentOverrider from '../ComponentOverrider';
import _loadComponent from '../loadComponent';
import RequireJsLoader from './RequireJsLoader';
var SPRequireJsComponentLoader =  (function (_super) {
    __extends(SPRequireJsComponentLoader, _super);
    function SPRequireJsComponentLoader(serviceScope, systemJsFallbackLoader) {
        var _this = _super.call(this, serviceScope) || this;
        _this._requireJsLoader = serviceScope.consume(RequireJsLoader.serviceKey);
        _this._systemJsFallbackLoader = systemJsFallbackLoader;
        _this._loadComponentExecutor = new LoadComponentExecutor(_this._loadComponentWithExecutor.bind(_this));
        _this._loadComponentExecutor.setAlternativeExecutor(systemJsFallbackLoader.executor);
        systemJsFallbackLoader.executor.setAlternativeExecutor(_this._loadComponentExecutor);
        return _this;
    }
    SPRequireJsComponentLoader.prototype.loadScript = function (url, options) {
        var _a;
        try {
            Validate.isNonemptyString(url, 'url');
        }
        catch (error) {
            return Promise.reject(error);
        }
        var qosMonitor = new _QosMonitor(telemetryConstants.loadScriptQosScenarioName);
        if (options === undefined) {
            options = {};
        }
        if (typeof options === 'string') {
            var error = ErrorBuilder.buildLoadScriptWithStringError();
            qosMonitor.writeExpectedFailure('OptionsAsString', error);
            return Promise.reject(error);
        }
        if (options.globalExportsName) {
            this._requireJsLoader.requireConfig({
                shim: (_a = {},
                    _a[url.replace(/\.js$/, '')] = {
                        exports: options.globalExportsName
                    },
                    _a)
            });
        }
        return this._requireJsLoader.requireLoad(url, options.globalExportsName)
            .then(function (module) {
            qosMonitor.writeSuccess();
            return module;
        })
            .catch(function (e) {
            qosMonitor.writeUnexpectedFailure('RequireLoad', e);
            throw e;
        });
    };
    SPRequireJsComponentLoader.prototype.loadComponent = function (manifest) {
        var _this = this;
        var qosMonitor = new _QosMonitor(telemetryConstants.loadComponentQosScenarioName);
        var qosExtraData = this._buildQosExtraData(manifest);
        return this._loadComponentExecutor.loadComponent(manifest)
            .then(function (component) {
            qosMonitor.writeSuccess(qosExtraData);
            return component;
        })
            .catch(function (error) {
            return _this._handleLoadComponentError(error, manifest, qosMonitor, qosExtraData);
        });
    };
    SPRequireJsComponentLoader.prototype._overrideComponent = function (componentId, componentModule) {
        ComponentOverrider.overrideComponent(componentId, componentModule, this._serviceScope, RequireJsLoader.serviceKey);
    };
    SPRequireJsComponentLoader.prototype._unloadComponent = function (manifest) {
        if (ComponentStore.instance.tryGetComponent(manifest.id, manifest.version)) {
            ComponentStore.instance.deleteComponent(manifest.id, manifest.version);
            this._requireJsLoader.requireDelete(manifest);
        }
    };
    SPRequireJsComponentLoader.prototype._loadComponentWithExecutor = function (manifest) {
        var _this = this;
        return _loadComponent(manifest, this._requireJsLoader)
            .catch(function (requireJsError) {
            _TraceLogger.logVerbose(telemetryConstants.loadComponentLogSource, "RequireJS failed to load component \"" + manifest.id + "\". Trying again with SystemJS.");
            ComponentStore.instance.deleteComponent(manifest.id, manifest.version);
            return _this._systemJsFallbackLoader.loadComponent(manifest).catch(function (systemJsError) {
                throw requireJsError;
            });
        });
    };
    SPRequireJsComponentLoader.prototype._buildQosExtraData = function (manifest) {
        return {
            manifestId: manifest.id,
            version: manifest.version,
            alias: manifest.alias,
            isInternal: manifest.isInternal,
            isDebug: manifest._isDebug,
            loader: 'requirejs'
        };
    };
    SPRequireJsComponentLoader.prototype._handleLoadComponentError = function (error, manifest, qosMonitor, qosExtraData) {
        if (error instanceof SPLoaderError && error.isExpected) {
            qosMonitor.writeExpectedFailure(undefined, error, qosExtraData);
        }
        else {
            qosMonitor.writeUnexpectedFailure(undefined, error, qosExtraData);
        }
        ComponentStore.instance.deleteComponent(manifest.id, manifest.version);
        throw error;
    };
    return SPRequireJsComponentLoader;
}(BaseComponentLoader));
export default SPRequireJsComponentLoader;
