"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var telemetry_js_1 = require("@pnp/telemetry-js");
var version_1 = require("./version");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var CONTROL_TYPE = "react";
/**
 * Track control information
 *
 * @param componentName
 * @param properties
 */
function track(componentName, properties) {
    if (properties === void 0) { properties = {}; }
    var telemetry = telemetry_js_1.default.getInstance();
    telemetry.trackEvent(componentName, __assign({ version: version_1.version, controlType: CONTROL_TYPE, debug: DEBUG ? "true" : "false", environment: sp_core_library_1.EnvironmentType[sp_core_library_1.Environment.type] }, properties));
}
exports.track = track;

//# sourceMappingURL=index.js.map
