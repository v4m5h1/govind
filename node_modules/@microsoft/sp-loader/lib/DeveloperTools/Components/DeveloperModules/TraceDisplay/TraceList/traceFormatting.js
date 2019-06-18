import { Text } from '@microsoft/sp-core-library';
import strings from './../TraceDisplay.resx';
export function formatTimestamp(time) {
    var date = new Date(time);
    return Text.format(strings.TimestampFormat, 
 date.getUTCFullYear(), 
 leftPadZeros(date.getUTCMonth() + 1, 2), 
 leftPadZeros(date.getUTCDate(), 2), 
 leftPadZeros(date.getUTCHours(), 2), 
 leftPadZeros(date.getUTCMinutes(), 2), 
 leftPadZeros(date.getUTCSeconds(), 2), 
 leftPadZeros(date.getUTCMilliseconds(), 3));
}
function leftPadZeros(value, minLength) {
    var result = value.toString();
    for (var i = result.length; i < minLength; i++) {
        result = "0" + result;
    }
    return result;
}
