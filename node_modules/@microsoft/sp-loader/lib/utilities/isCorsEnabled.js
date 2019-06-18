export default function isCorsEnabled(src) {
    if (!src) {
        return false;
    }
    var host = new URL(src).host;
    var AKAMAI_HOST_ENDS_WITH = '.akamaihd.net';
    return host.substring(host.length - AKAMAI_HOST_ENDS_WITH.length, host.length) ===
        AKAMAI_HOST_ENDS_WITH;
}
