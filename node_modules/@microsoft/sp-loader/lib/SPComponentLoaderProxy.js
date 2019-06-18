import { cloneDeep } from '@microsoft/sp-lodash-subset';
var SPComponentLoaderProxy =  (function () {
    function SPComponentLoaderProxy() {
    }
    SPComponentLoaderProxy._initialize = function (componentLoader) {
        SPComponentLoaderProxy._instance = componentLoader;
    };
    SPComponentLoaderProxy._startApplication = function (preloadedData) {
        return SPComponentLoaderProxy._instance._startApplication(preloadedData);
    };
    SPComponentLoaderProxy.loadCss = function (url) {
        return SPComponentLoaderProxy._instance.loadCss(url);
    };
    SPComponentLoaderProxy.loadScript = function (url, options) {
        return SPComponentLoaderProxy._instance.loadScript(url, options);
    };
    SPComponentLoaderProxy.loadComponent = function (manifest) {
        return SPComponentLoaderProxy._instance.loadComponent(manifest);
    };
    SPComponentLoaderProxy.loadComponentById = function (id, version) {
        return SPComponentLoaderProxy._instance.loadComponentById(id, version);
    };
    SPComponentLoaderProxy.registerManifests = function (manifests) {
        return SPComponentLoaderProxy._instance.registerManifests(manifests);
    };
    SPComponentLoaderProxy._getManifestReferences = function () {
        return SPComponentLoaderProxy._instance._manifestReferences;
    };
    SPComponentLoaderProxy.getManifests = function () {
        var retVal = [];
        SPComponentLoaderProxy._instance._manifestReferences.forEach(function (manifest) {
            retVal.push(cloneDeep(manifest));
        });
        return retVal;
    };
    SPComponentLoaderProxy.tryGetLoadedComponent = function (manifest) {
        return SPComponentLoaderProxy._instance.tryGetLoadedComponent(manifest);
    };
    SPComponentLoaderProxy.tryGetManifestById = function (id, version) {
        return SPComponentLoaderProxy._instance.tryGetManifestById(id, version);
    };
    SPComponentLoaderProxy.requestManifest = function (id, version) {
        return SPComponentLoaderProxy._instance.requestManifest(id, version);
    };
    SPComponentLoaderProxy._loadDebugManifestsForWorkbench = function (manifestsFileUrl) {
        return SPComponentLoaderProxy._instance._loadDebugManifestsForWorkbench(manifestsFileUrl);
    };
    return SPComponentLoaderProxy;
}());
export default SPComponentLoaderProxy;
