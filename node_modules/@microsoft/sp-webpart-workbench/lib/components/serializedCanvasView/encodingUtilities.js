import * as React from 'react';
export function htmlEncode(str) {
    if (str) {
        return str
            .replace(/\&/g, '&amp;')
            .replace(/\</g, '&lt;')
            .replace(/\>/g, '&gt;');
    }
    else {
        return str;
    }
}
export function getReactLines(str) {
    if (str) {
        if (typeof str === 'string') {
            str = str.split('\n');
        }
        var encodedLines = str.map(function (line) { return htmlEncode(line).replace(/\s/g, '&nbsp;'); });
        return (React.createElement("div", { dangerouslySetInnerHTML: { __html: encodedLines.join('<br />') } }));
    }
}
