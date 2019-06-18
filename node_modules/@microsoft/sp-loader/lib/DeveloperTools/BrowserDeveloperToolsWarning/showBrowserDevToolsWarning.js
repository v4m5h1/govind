import { _BrowserDetection, Text } from '@microsoft/sp-core-library';
import strings from './BrowserDeveloperToolsWarning.resx';
var WARNING_URL = 'https://technet.microsoft.com/en-us/library/bb794823.aspx';
export function showBrowserDevToolsWarning() {
    var browserInfo = _BrowserDetection.getBrowserInformation();
    var warningHeading = strings.warningHeading;
    var warningLine1 = strings.warningLine1;
    var warningLine2 = Text.format(strings.warningLine2, WARNING_URL);
    if (browserInfo.browser === 1  ||
        browserInfo.browser === 3  ||
        browserInfo.browser === 5 ) {
        var stylesCss = DEPRECATED_UNIT_TEST
            ? require('./BrowserDeveloperToolsWarning.css')
            : require('!!raw-loader!./BrowserDeveloperToolsWarning.css');
        var headingCss = (stylesCss.match(/\.heading\s*{([^}]+)}/) || [])[1];
        var otherLinesCss = (stylesCss.match(/\.otherLines\s*{([^}]+)}/) || [])[1];
        console.log("\n%c" + warningHeading + "%c\n" + warningLine1 + "\n\n" + warningLine2 + "\n\n", headingCss, otherLinesCss);
    }
    else {
        console.log("\n" + warningHeading + "\n" + warningLine1 + "\n\n" + warningLine2 + "\n\n");
    }
}
