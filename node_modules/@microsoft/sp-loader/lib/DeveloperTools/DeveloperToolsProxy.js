var DeveloperToolsProxy =  (function () {
    function DeveloperToolsProxy() {
    }
    DeveloperToolsProxy.initialize = function (developerToolsLoader) {
        DeveloperToolsProxy._instance = developerToolsLoader;
        DeveloperToolsProxy._instance.initialize();
    };
    DeveloperToolsProxy.registerDeveloperToolsTab = function (developerToolsTab) {
        DeveloperToolsProxy._instance.registerDeveloperToolsTab(developerToolsTab);
    };
    return DeveloperToolsProxy;
}());
export default DeveloperToolsProxy;
