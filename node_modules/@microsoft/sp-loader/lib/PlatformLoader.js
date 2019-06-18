import { Guid, Text, Validate, _SPKillSwitch } from '@microsoft/sp-core-library';
import { _LogSource, _QosMonitor, _TraceLogger } from '@microsoft/sp-diagnostics';
import SPComponentLoaderProxy from './SPComponentLoaderProxy';
import strings from './SPLoader.resx';
import ComponentStore from './stores/ComponentStore';
import ManifestStore from './stores/ManifestStore';
import * as componentConstants from './utilities/componentConstants';
import SPLoaderFlights from './utilities/SPLoaderFlights';
var TIMEOUT_IN_MILLISECONDS = 10000;
var startApplicationQosScenarioName = 'SPApplicationLoader.startApplication';
var platformFailedToLoadFailure = 'PlatformFailedToLoad';
var invalidPlatformFailure = 'InvalidPlatform';
var applicationManagerStartFailure = 'ApplicationManager.Start';
var navigatorFailure = 'Navigator.navigateToApplication';
var timeoutExpectedFailure = 'Timeout';
var startLogSource = _LogSource.create('SPApplicationLoader.start');
var PlatformLoader =  (function () {
    function PlatformLoader() {
    }
    PlatformLoader.startApplication = function (preloadedData, serviceScope) {
        Validate.isNonemptyString(preloadedData.clientSideApplicationId, 'preloadedData.clientSideApplicationId');
        var qosMonitor = new _QosMonitor(startApplicationQosScenarioName);
        setTimeout(function () {
            if (!qosMonitor.hasEnded) {
                qosMonitor.writeExpectedFailure(timeoutExpectedFailure);
            }
        }, TIMEOUT_IN_MILLISECONDS);
        return PlatformLoader._startApplication(preloadedData, serviceScope, qosMonitor);
    };
    PlatformLoader._startApplication = function (preloadedData, serviceScope, qosMonitor) {
        var _this = this;
        function error(message, failureId) {
            var err = new Error(message);
            _TraceLogger.logError(startLogSource, err);
            qosMonitor.writeUnexpectedFailure(failureId, err);
            throw err;
        }
        try {
            if (!_SPKillSwitch.isActivated(Guid.parse('fa9cc715-c765-4161-a202-dff5e2a3e0af'), '2018/2/26', 'Load platform synchronously')) {
                var spAppBaseManifest = ManifestStore.instance.tryGetManifest(componentConstants.spApplicationBaseComponentId);
                if (spAppBaseManifest) {
                    var assemblySpAppBase = ComponentStore.instance.tryGetComponentReference(spAppBaseManifest.id, spAppBaseManifest.version);
                    if (assemblySpAppBase) {
                        return this._executePlatformCode(assemblySpAppBase, preloadedData, serviceScope, qosMonitor, error);
                    }
                }
            }
            return this._loadSpApplicationBase(error).then(function (spApplicationBase) {
                return _this._executePlatformCode(spApplicationBase, preloadedData, serviceScope, qosMonitor, error);
            }, function (err) {
                return error(Text.format(strings.platformFailedToLoadError, componentConstants.spApplicationBaseComponentId, componentConstants.spApplicationBaseName), platformFailedToLoadFailure);
            });
        }
        catch (error) {
            qosMonitor.writeUnexpectedFailure('SyncError', error);
            return Promise.reject(error);
        }
    };
    PlatformLoader._executePlatformCode = function (spApplicationBase, preloadedData, serviceScope, qosMonitor, error) {
        if (SPLoaderFlights._useNewBootSequence()) {
            return this._navigateToApplication(spApplicationBase, preloadedData, serviceScope, qosMonitor, error);
        }
        else {
            return this._runApplicationManager(spApplicationBase, preloadedData, serviceScope, qosMonitor, error);
        }
    };
    PlatformLoader._runApplicationManager = function (spApplicationBase, preloadedData, serviceScope, qosMonitor, error) {
        if (spApplicationBase && spApplicationBase._ApplicationManager) {
            var applicationManager = new spApplicationBase._ApplicationManager(serviceScope);
            return applicationManager.startApplication(preloadedData).then(function (result) {
                qosMonitor.writeSuccess();
                return result;
            }).catch(function (e) {
                var err = new Error(Text.format(strings.applicationFailedToInitializeError, e));
                _TraceLogger.logError(startLogSource, err);
                qosMonitor.writeExpectedFailure(applicationManagerStartFailure, err);
                throw err;
            });
        }
        else {
            return Promise.resolve().then(function () { return error(Text.format(strings.platformFailedToLoadError, componentConstants.spApplicationBaseComponentId, componentConstants.spApplicationBaseName), invalidPlatformFailure); });
        }
    };
    PlatformLoader._navigateToApplication = function (spApplicationBase, preloadedData, serviceScope, qosMonitor, error) {
        if (spApplicationBase && spApplicationBase._Navigator) {
            var applicationManager = new spApplicationBase._Navigator(serviceScope);
            return applicationManager.navigateToApplication(preloadedData).then(function (result) {
                qosMonitor.writeSuccess();
                return result;
            }).catch(function (e) {
                var err = new Error(Text.format(strings.applicationFailedToInitializeError, e));
                _TraceLogger.logError(startLogSource, err);
                qosMonitor.writeExpectedFailure(navigatorFailure, err);
                throw err;
            });
        }
        else {
            return Promise.resolve().then(function () { return error(Text.format(strings.platformFailedToLoadError, componentConstants.spApplicationBaseComponentId, componentConstants.spApplicationBaseName), invalidPlatformFailure); });
        }
    };
    PlatformLoader._loadSpApplicationBase = function (error) {
        return SPComponentLoaderProxy.loadComponentById(componentConstants.spApplicationBaseComponentId)
            .catch(function (e) {
            return error(Text.format(strings.platformFailedToLoadWithMessageError, componentConstants.spApplicationBaseComponentId, componentConstants.spApplicationBaseName, e.message), platformFailedToLoadFailure);
        });
    };
    return PlatformLoader;
}());
export default PlatformLoader;
