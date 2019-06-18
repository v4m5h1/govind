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
var PropertyFieldTermPicker_1 = require("./PropertyFieldTermPicker");
var PnPTermStorePickerService_1 = require("../../services/PnPTermStorePickerService");
/**
 * Helper method to create a Enterprise Term Picker on the PropertyPane.
 * @param targetProperty - Target property the Term Picker is associated to.
 * @param properties - Strongly typed Term Picker Picker properties.
 */
function PropertyFieldEnterpriseTermPicker(targetProperty, properties) {
    // Calls the PropertyFieldEnterpriseTermPicker builder object
    // This object will simulate a PropertyFieldCustom to manage its rendering process
    var termPickerInternalProps = properties;
    return new PropertyFieldTermPicker_1.PropertyFieldTermPickerBuilder(targetProperty, __assign({}, termPickerInternalProps, { targetProperty: targetProperty, onRender: null, onDispose: null, termService: new PnPTermStorePickerService_1.default(properties, properties.context) }));
}
exports.PropertyFieldEnterpriseTermPicker = PropertyFieldEnterpriseTermPicker;

//# sourceMappingURL=PropertyFieldEnterpriseTermPicker.js.map
