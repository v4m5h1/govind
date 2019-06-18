import { _SPFlight, _SPKillSwitch, Guid } from '@microsoft/sp-core-library';
var SPLoaderFlights =  (function () {
    function SPLoaderFlights() {
    }
    SPLoaderFlights._useNewBootSequence = function () {
        var skipFlightValidationForSPD = !_SPKillSwitch.isActivated(Guid.parse('e413f087-b95f-4d63-8c6f-56f02f29fd01'), '2/20/2019', 'Temporarily Skip Connected SPA Flight for SPD') && (navigator.userAgent.indexOf('SharePointDesktop') !== -1);
        return skipFlightValidationForSPD || _SPFlight.isEnabled(182 );
    };
    return SPLoaderFlights;
}());
export default SPLoaderFlights;
