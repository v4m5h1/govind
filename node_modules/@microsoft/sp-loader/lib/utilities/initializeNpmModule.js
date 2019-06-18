import ManifestStore from './../stores/ManifestStore';
import * as componentConstants from './componentConstants';
export function initializeNpmModule() {
    var spTelemetryComponentId = componentConstants.spTelemetryComponentId;
    var spLoadThemedStylesComponentId = componentConstants.spLoadThemedStylesComponentId;
    ManifestStore.instance.registerManifests([
        require("@ms/sp-telemetry/dist/" + spTelemetryComponentId + ".manifest.json"),
        require("@ms/sp-load-themed-styles/dist/" + spLoadThemedStylesComponentId + ".manifest.json")
    ], false);
}
