import { _BrowserDetection } from '@microsoft/sp-core-library';
import strings from '../SPLoader.resx';
var BrowserSupport =  (function () {
    function BrowserSupport() {
    }
    BrowserSupport.getBrowserCompatibility = function () {
        var browserInfo = _BrowserDetection.getBrowserInformation();
        if (browserInfo.browser === 4  &&
            browserInfo.browserVersion && browserInfo.browserVersion.major <= 9) {
            return {
                supportLevel: 3 ,
                warning: strings.ie9OrOlderNotSupportedError
            };
        }
        if (browserInfo.browser === 3  &&
            browserInfo.browserVersion && browserInfo.browserVersion.major <= 43) {
            return {
                supportLevel: 3 ,
                warning: strings.firefox43OrOlderNotSupportedError
            };
        }
        if (typeof Headers !== 'undefined' &&
            typeof Headers.prototype.forEach === 'undefined') {
            return {
                supportLevel: 3 ,
                warning: undefined
            };
        }
        return {
            supportLevel: 0 ,
            warning: undefined
        };
    };
    return BrowserSupport;
}());
export default BrowserSupport;
