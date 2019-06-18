import { _TraceLogger } from '@microsoft/sp-diagnostics';
import SPLoaderError, { SPLoaderErrorCode } from './SPLoaderError';
import * as telemetryConstants from '../utilities/telemetryConstants';
import strings from '../SPLoader.resx';
var loadComponentImplEventName = 'loadComponentImpl';
var ErrorBuilder =  (function () {
    function ErrorBuilder() {
    }
    ErrorBuilder.buildLoadComponentError = function (manifest, error) {
        return this.buildErrorWithVerboseLog(SPLoaderErrorCode.loadComponentError, error, false, telemetryConstants.loadComponentLogSource, loadComponentImplEventName, manifest.id, manifest.alias, error.message);
    };
    ErrorBuilder.buildLoadComponentReturnsEmptyError = function (manifest) {
        return this.buildErrorWithVerboseLog(SPLoaderErrorCode.loadComponentReturnsEmptyError, undefined, false, telemetryConstants.loadComponentLogSource, loadComponentImplEventName, manifest.id, manifest.alias);
    };
    ErrorBuilder.buildLoadComponentReturnsDefaultEmptyError = function (manifest) {
        return this.buildErrorWithVerboseLog(SPLoaderErrorCode.loadComponentReturnsDefaultEmptyError, undefined, false, telemetryConstants.loadComponentLogSource, loadComponentImplEventName, manifest.id, manifest.alias);
    };
    ErrorBuilder.buildLoadComponentDependencyError = function (manifest, error) {
        return this.buildErrorWithVerboseLog(SPLoaderErrorCode.loadComponentDependencyError, error, false, telemetryConstants.loadComponentLogSource, loadComponentImplEventName, manifest.id, manifest.alias, error.message);
    };
    ErrorBuilder.buildManifestNotFoundError = function (moduleConfiguration) {
        return this.buildErrorWithVerboseLog(SPLoaderErrorCode.manifestNotFoundError, undefined, false, telemetryConstants.loadComponentLogSource, undefined, moduleConfiguration.id, moduleConfiguration.version);
    };
    ErrorBuilder.buildLoadPathDependencyBlockedError = function (manifest, name) {
        return this.buildErrorWithVerboseLog(SPLoaderErrorCode.loadPathDependencyBlockedByAnotherDependencyError, undefined, false, telemetryConstants.loadComponentLogSource, undefined, name, manifest.id, manifest.alias);
    };
    ErrorBuilder.buildModuleHasUndeclaredDependencyError = function (manifest, dependencyName) {
        return this.buildErrorWithErrorLog(SPLoaderErrorCode.moduleHasUndeclaredDependencyError, undefined, true, 
        telemetryConstants.loadComponentLogSource, undefined, manifest.id, manifest.alias, dependencyName);
    };
    ErrorBuilder.buildLoadEntryPointError = function (manifest, error) {
        return this.buildErrorWithVerboseLog(SPLoaderErrorCode.loadEntryPointError, error, false, telemetryConstants.loadComponentLogSource, undefined, manifest.id, manifest.alias, error.message);
    };
    ErrorBuilder.buildLoadPathDependencyError = function (manifest, dependencyName, error) {
        return this.buildErrorWithVerboseLog(SPLoaderErrorCode.loadPathDependencyError, error, false, telemetryConstants.loadComponentLogSource, undefined, dependencyName, manifest.id, manifest.alias, error.message);
    };
    ErrorBuilder.buildMissingPathDependencyError = function (manifest, dependencyName) {
        return this.buildErrorWithVerboseLog(SPLoaderErrorCode.missingPathDependencyError, undefined, true, telemetryConstants.loadComponentLogSource, undefined, dependencyName, manifest.id, manifest.alias, Object.keys(manifest.loaderConfig.scriptResources).join(strings.listSeparator));
    };
    ErrorBuilder.buildLoadComponentDependencyFailoverPathError = function (manifest, dependencyName, failoverPath, error) {
        return this.buildErrorWithVerboseLog(SPLoaderErrorCode.loadComponentDependencyFailoverPathError, error, false, telemetryConstants.loadComponentLogSource, undefined, dependencyName, failoverPath, manifest.id, manifest.alias, error.message);
    };
    ErrorBuilder.buildLoadScriptWithStringError = function () {
        return this.buildErrorWithErrorLog(SPLoaderErrorCode.loadScriptWithStringError, undefined, true, 
        telemetryConstants.loadScriptLogSource, undefined);
    };
    ErrorBuilder.buildUrlStatusLocalhostFileNotFoundError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(SPLoaderErrorCode.urlStatusLocalhostFileNotFoundError, undefined, true, 
        telemetryConstants.loadScriptLogSource, undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusFileNotFoundError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(SPLoaderErrorCode.urlStatusFileNotFoundError, undefined, true, 
        telemetryConstants.loadScriptLogSource, undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusForbiddenError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(SPLoaderErrorCode.urlStatusForbiddenError, undefined, true, 
        telemetryConstants.loadScriptLogSource, undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusClientErrorError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(SPLoaderErrorCode.urlStatusClientErrorError, undefined, false, 
        telemetryConstants.loadScriptLogSource, undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusServerErrorError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(SPLoaderErrorCode.urlStatusServerErrorError, undefined, false, 
        telemetryConstants.loadScriptLogSource, undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusLocalhostNetworkErrorError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(SPLoaderErrorCode.urlStatusLocalhostNetworkErrorError, undefined, true, 
        telemetryConstants.loadScriptLogSource, undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusDocLibNetworkErrorError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(SPLoaderErrorCode.urlStatusDocLibNetworkErrorError, undefined, true, 
        telemetryConstants.loadScriptLogSource, undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusHttpsNetworkErrorError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(SPLoaderErrorCode.urlStatusHttpsNetworkErrorError, undefined, false, 
        telemetryConstants.loadScriptLogSource, undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusNetworkErrorError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(SPLoaderErrorCode.urlStatusNetworkErrorError, undefined, false, 
        telemetryConstants.loadScriptLogSource, undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusUndefinedError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(SPLoaderErrorCode.urlStatusUndefinedError, undefined, false, 
        telemetryConstants.loadScriptLogSource, undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildScriptFailedToCreateGlobalError = function (globalName, scriptUrl) {
        return this.buildErrorWithErrorLog(SPLoaderErrorCode.failedToCreateGlobalVariable, undefined, false, telemetryConstants.loadScriptLogSource, undefined, globalName, scriptUrl);
    };
    ErrorBuilder.buildModuleHasFailedDependencyError = function (resource, dependency) {
        return this.buildErrorWithErrorLog(SPLoaderErrorCode.dependencyLoadError, undefined, true, 
        telemetryConstants.loadScriptLogSource, undefined, resource, dependency);
    };
    ErrorBuilder.buildErrorWithVerboseLog = function (errorCode, innerError, isExpected, source, eventName) {
        var params = []; 
        for (var _i = 5 
        ; _i < arguments.length 
        ; _i++ 
        ) {
            params[_i - 5] = arguments[_i]; 
        }
        var error = new (SPLoaderError.bind.apply(SPLoaderError, [void 0, errorCode, innerError, isExpected].concat(params)))();
        _TraceLogger.logVerbose(source, error.message, eventName);
        return error;
    };
    ErrorBuilder.buildErrorWithErrorLog = function (errorCode, innerError, isExpected, source, eventName) {
        var params = []; 
        for (var _i = 5 
        ; _i < arguments.length 
        ; _i++ 
        ) {
            params[_i - 5] = arguments[_i]; 
        }
        var error = new (SPLoaderError.bind.apply(SPLoaderError, [void 0, errorCode, innerError, isExpected].concat(params)))();
        _TraceLogger.logError(source, error, eventName);
        return error;
    };
    return ErrorBuilder;
}());
export default ErrorBuilder;
