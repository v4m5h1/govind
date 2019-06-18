import { _SPFlight, Text } from '@microsoft/sp-core-library';
import { confirmDebugAllowed, dangerouslyEnableDebug } from './confirmDebugAllowed';
import ManifestStore from './../stores/ManifestStore';
import showDebugError from './showDebugError';
import strings from './DebugManager.resx';
var SPFX_DEBUG_SESSION_VAR_ID = 'spfx-debug';
var DEBUG_MANIFESTS_FILE_QUERY_PARAM_NAME = 'debugManifestsFile';
var LOADER_QUERY_PARAM_NAME = 'loader';
var RESET_QUERY_PARAM_NAME = 'reset';
var LOADER_EXPORTS_NAME = 'spModuleLoader';
var EMPTY_DEBUG_LOAD_RESULT = {
    debugLoader: undefined,
    debugManifests: undefined,
    registerAsNonDebug: false
};
var DebugManager =  (function () {
    function DebugManager() {
    }
    DebugManager.initialize = function (componentLoader, debugData) {
        if (debugData) {
            dangerouslyEnableDebug();
            DebugManager._registerManifests(debugData.debugManifests || [], debugData.registerAsNonDebug);
            return Promise.resolve(EMPTY_DEBUG_LOAD_RESULT);
        }
        if (!DebugManager._initializationPromise) {
            var spfxDebugSessionVarData_1 = {};
            var isSpfxDebugEnabled = _SPFlight.isDebugFlightEnabled;
            var queryParameters = new URL(window.location.href).searchParams;
            try {
                spfxDebugSessionVarData_1 = JSON.parse(sessionStorage.getItem(SPFX_DEBUG_SESSION_VAR_ID) || '{}');
            }
            catch (e) {
            }
            DebugManager._initializationPromise = DebugManager._handleDebugParameters(componentLoader, spfxDebugSessionVarData_1, queryParameters, isSpfxDebugEnabled).then(function (debugLoadResult) {
                spfxDebugSessionVarData_1.loaderUrl = DebugManager._debugLoaderUrl;
                spfxDebugSessionVarData_1.manifestsFileUrl = DebugManager._debugManifestsFileUrl;
                try {
                    var serializedDebugSessionData = JSON.stringify(spfxDebugSessionVarData_1);
                    if (serializedDebugSessionData !== '{}') {
                        sessionStorage.setItem(SPFX_DEBUG_SESSION_VAR_ID, serializedDebugSessionData);
                    }
                    else {
                        sessionStorage.removeItem(SPFX_DEBUG_SESSION_VAR_ID);
                    }
                }
                catch (e) {
                }
                return debugLoadResult;
            });
        }
        return DebugManager._initializationPromise;
    };
    DebugManager.loadAndRegisterManifestsFile = function (componentLoader, manifestsFileUrl, registerAsNonDebug) {
        return componentLoader.loadScript(manifestsFileUrl).then(function (manifestScript) {
            var manifests = manifestScript.getManifests();
            DebugManager._registerManifests(manifests, registerAsNonDebug);
            return manifests;
        });
    };
    DebugManager._handleDebugParameters = function (componentLoader, spfxDebugSessionVarData, queryParameters, isSpfxDebugEnabled) {
        return new Promise(function (resolve) {
            if (queryParameters.get(RESET_QUERY_PARAM_NAME) !== null) {
                spfxDebugSessionVarData.testMode = undefined;
                sessionStorage.removeItem(SPFX_DEBUG_SESSION_VAR_ID);
                resolve(EMPTY_DEBUG_LOAD_RESULT);
            }
            else if (isSpfxDebugEnabled && spfxDebugSessionVarData.testMode) {
                dangerouslyEnableDebug();
                DebugManager._debugManifestsFileUrl = spfxDebugSessionVarData.manifestsFileUrl;
                DebugManager._debugLoaderUrl = spfxDebugSessionVarData.loaderUrl;
                DebugManager._getDebugScripts(componentLoader, resolve,  false);
            }
            else {
                DebugManager._handleNonTestModeDebugParameters(componentLoader, spfxDebugSessionVarData, queryParameters, isSpfxDebugEnabled, resolve);
            }
        });
    };
    DebugManager._handleNonTestModeDebugParameters = function (componentLoader, spfxDebugSessionVarData, queryParameters, isSpfxDebugEnabled, resolve) {
        var debugManifestsFileUrl = queryParameters.get(DEBUG_MANIFESTS_FILE_QUERY_PARAM_NAME) ||
            spfxDebugSessionVarData.manifestsFileUrl ||
            undefined;
        var debugLoaderUrl = isSpfxDebugEnabled
            ? (queryParameters.get(LOADER_QUERY_PARAM_NAME) || spfxDebugSessionVarData.loaderUrl || undefined)
            : undefined;
        if (debugLoaderUrl || debugManifestsFileUrl) {
            confirmDebugAllowed({
                loaderRequested: !!debugLoaderUrl,
                manifestsRequested: !!debugManifestsFileUrl
            }).then(function (allowed) {
                if (allowed) {
                    DebugManager._debugLoaderUrl = debugLoaderUrl;
                    DebugManager._debugManifestsFileUrl = debugManifestsFileUrl;
                    DebugManager._getDebugScripts(componentLoader, resolve,  false);
                }
                else {
                    resolve(EMPTY_DEBUG_LOAD_RESULT);
                }
            });
        }
        else {
            resolve(EMPTY_DEBUG_LOAD_RESULT);
        }
    };
    DebugManager._getDebugScripts = function (componentLoader, resolve, registerAsNonDebug) {
        var loaderUrl = DebugManager._debugLoaderUrl;
        var manifestFileUrl = DebugManager._debugManifestsFileUrl;
        var debugLoaderPromise = loaderUrl
            ? DebugManager._loadLoader(componentLoader, loaderUrl)
            : Promise.resolve(undefined);
        var debugManifestsFilePromise = manifestFileUrl
            ? DebugManager.loadAndRegisterManifestsFile(componentLoader, manifestFileUrl, registerAsNonDebug)
            : Promise.resolve(undefined);
        debugLoaderPromise = debugLoaderPromise.catch(function (error) {
            throw { errorSource: 'loader', error: error };
        });
        debugManifestsFilePromise = debugManifestsFilePromise.catch(function (error) {
            throw { errorSource: 'manifestsFile', error: error };
        });
        Promise.all([debugLoaderPromise, debugManifestsFilePromise])
            .then(function (_a) {
            var debugLoader = _a[0], debugManifests = _a[1];
            resolve({ debugLoader: debugLoader, debugManifests: debugManifests, registerAsNonDebug: registerAsNonDebug });
        })
            .catch(function (error) {
            if (error instanceof Error) {
                showDebugError(error, strings.errorLoadingDebugScriptUnknown, strings.errorLoadingUnknownTitle);
            }
            else {
                var errorText = strings.errorLoadingDebugScriptUnknown;
                var title = strings.errorLoadingUnknownTitle;
                switch (error.errorSource) {
                    case 'loader':
                        errorText = DebugManager._getUrlErrorText(loaderUrl || '', LOADER_QUERY_PARAM_NAME);
                        title = strings.errorLoadingDebugLoaderTitle;
                        break;
                    case 'manifestsFile':
                        errorText = DebugManager._getUrlErrorText(manifestFileUrl || '', DEBUG_MANIFESTS_FILE_QUERY_PARAM_NAME);
                        title = strings.errorLoadingDebugManifestTitle;
                        break;
                }
                showDebugError(error.error, errorText, title);
            }
        });
    };
    DebugManager._loadLoader = function (componentLoader, loaderUrl) {
        delete window[LOADER_EXPORTS_NAME];
        return componentLoader.loadScript(loaderUrl, { globalExportsName: LOADER_EXPORTS_NAME });
    };
    DebugManager._getUrlErrorText = function (url, paramName) {
        var isMalformed = !url.match(/^https?\:\/\//);
        var isHttps = !isMalformed && !!url.match(/^https/);
        return isMalformed
            ? Text.format(strings.errorLoadingDebugScriptMalformed, url)
            : Text.format(isHttps ? strings.errorLoadingDebugScriptHTTPS : strings.errorLoadingDebugScriptHTTP, paramName);
    };
    DebugManager._registerManifests = function (manifests, registerAsNonDebug) {
        if (registerAsNonDebug) {
            ManifestStore.instance.registerManifests(manifests, false);
        }
        else {
            ManifestStore.instance.registerDebugManifests(manifests);
        }
    };
    return DebugManager;
}());
export { DebugManager };
