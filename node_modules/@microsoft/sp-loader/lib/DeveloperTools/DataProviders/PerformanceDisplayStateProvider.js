import { Text } from '@microsoft/sp-core-library';
import { _PerformanceLogger } from '@ms/sp-telemetry';
import strings from './../Components/DeveloperModules/PerformanceDisplay/PerformanceDisplay.resx';
export function getState() {
    var perfItems = [];
    var toReturn = {
        perfItems: perfItems,
        startTime: 0,
        eupl: 0
    };
    try {
        var data = _PerformanceLogger.getPerformanceData(); 
        if (!data || !data.W3cNavigationStart || !data.EUPL) {
            toReturn.errorMessage = strings.ErrorAccessingPerfDataErrorMessage;
            console.debug(toReturn.errorMessage); 
            return toReturn;
        }
        toReturn.startTime = 0;
        toReturn.eupl = data.EUPL;
        var euplBreakdown = void 0;
        try {
            euplBreakdown = JSON.parse(data.EUPLBreakdown);
        }
        catch (error) {  }
        if (!euplBreakdown) {
            toReturn.errorMessage = strings.ErrorParsingPercievedLatencyErrorMessage;
            console.debug(toReturn.errorMessage); 
            return toReturn;
        }
        var apiCallsData = void 0;
        try {
            apiCallsData = JSON.parse(data.APICalls);
        }
        catch (error) {  }
        if (!apiCallsData) {
            toReturn.errorMessage = strings.ErrorParsingApiDataErrorMessage;
            console.debug(toReturn.errorMessage); 
            return toReturn;
        }
        if (data.W3cRedirectStart && data.W3cRedirectEnd) {
            perfItems.push({
                id: 'RedirectResponse',
                name: strings.RedirectResponseLabel,
                startVal: data.W3cRedirectStart - data.W3cNavigationStart,
                duration: (data.W3cRedirectEnd - data.W3cRedirectStart),
                breakdown: undefined
            });
        }
        perfItems.push({
            id: 'w3cResponseEnd',
            name: strings.ServerResponseLabel,
            startVal: data.W3cRequestStart - data.W3cNavigationStart,
            duration: data.W3cResponseEnd - data.W3cRequestStart,
            breakdown: undefined
        });
        if (euplBreakdown.appStart) {
            perfItems.push({
                id: 'appStart',
                name: strings.ApplicationInitializationLabel,
                startVal: data.W3cResponseEnd - data.W3cNavigationStart,
                duration: euplBreakdown.appStart - (data.W3cResponseEnd - data.W3cNavigationStart),
                breakdown: undefined
            });
        }
        if (euplBreakdown.spLoaderStart) {
            perfItems.push({
                id: 'scriptFetchEval',
                name: strings.ScriptFetchEvalLabel,
                startVal: data.W3cResponseEnd - data.W3cNavigationStart,
                duration: euplBreakdown.spLoaderStart - (data.W3cResponseEnd - data.W3cNavigationStart),
                breakdown: undefined
            });
        }
        if (euplBreakdown.spLoaderStart && euplBreakdown.appStart) {
            perfItems.push({
                id: 'spLoaderStart',
                name: strings.SpLoaderStartLabel,
                startVal: euplBreakdown.spLoaderStart,
                duration: euplBreakdown.appStart - euplBreakdown.spLoaderStart,
                breakdown: undefined
            });
        }
        var apiCalls = {};
        var endVals = {};
        for (var _i = 0, apiCallsData_1 = apiCallsData; _i < apiCallsData_1.length; _i++) {
            var apiCall = apiCallsData_1[_i];
            if (apiCall.name && apiCall.name.indexOf('WebPart') > -1) {
                if (!apiCalls[apiCall.name]) {
                    apiCalls[apiCall.name] = [];
                    endVals[apiCall.name] = 0;
                }
                apiCalls[apiCall.name].push({
                    startVal: apiCall.startTime,
                    duration: apiCall.duration
                });
                endVals[apiCall.name] = Math.max(apiCall.startTime + apiCall.duration, endVals[apiCall.name]);
            }
        }
        for (var i = 1; i <= 10; i++) {
            var webPart = data["Control" + i + "Id"];
            var renderEnd = data["Control" + i + "RenderTime"];
            var renderStart = euplBreakdown[webPart + ".start"];
            if (!webPart || isNaN(renderStart) || isNaN(renderEnd)) {
                continue;
            }
            var initTime = euplBreakdown[webPart + ".init"];
            var moduleLoadedTime = euplBreakdown[webPart + ".modulesLoaded"];
            var loadingDelayed = euplBreakdown[webPart + ".loadingDelayed"];
            var inViewportLoading = euplBreakdown[webPart + ".inViewportLoading"];
            var wpBreakdown = {
                dataFetch: apiCalls[webPart] || [],
                render: {
                    startVal: inViewportLoading || initTime || moduleLoadedTime || renderStart,
                    duration: renderEnd - (inViewportLoading || initTime || moduleLoadedTime || renderStart)
                }
            };
            if (moduleLoadedTime && initTime) {
                if (!isNaN(moduleLoadedTime)) {
                    wpBreakdown.modulesLoaded = {
                        startVal: renderStart,
                        duration: moduleLoadedTime - renderStart
                    };
                }
                if (!isNaN(initTime)) {
                    wpBreakdown.init = {
                        startVal: inViewportLoading || moduleLoadedTime,
                        duration: initTime - (inViewportLoading || moduleLoadedTime)
                    };
                }
                if (!isNaN(inViewportLoading) && !isNaN(loadingDelayed)) {
                    wpBreakdown.lazyLoading = {
                        startVal: loadingDelayed,
                        duration: inViewportLoading - loadingDelayed
                    };
                }
            }
            perfItems.push({
                id: webPart,
                name: "" + _getReadableWebpartName(webPart.replace('Load.', '')),
                startVal: renderStart,
                duration: renderEnd - renderStart,
                breakdown: wpBreakdown
            });
        }
        return toReturn;
    }
    catch (error) {
        toReturn.errorMessage = Text.format(strings.UnkownPerformanceDataErrorMessage, error);
        console.debug(toReturn.errorMessage); 
        return toReturn;
    }
}
function _getReadableWebpartName(id) {
    if (id.indexOf('WebPart.') === -1) {
        return id;
    }
    try {
        var readableWebPartName = id.split('.')[1];
        return readableWebPartName;
    }
    catch (error) {
        return id;
    }
}
