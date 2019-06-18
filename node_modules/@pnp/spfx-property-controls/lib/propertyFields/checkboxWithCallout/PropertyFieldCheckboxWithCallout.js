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
var React = require("react");
var ReactDOM = require("react-dom");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var PropertyFieldCheckboxWithCalloutHost_1 = require("./PropertyFieldCheckboxWithCalloutHost");
/**
 * Represents a PropertyFieldCheckboxWithCallout object
 */
var PropertyFieldCheckboxWithCalloutBuilder = (function () {
    function PropertyFieldCheckboxWithCalloutBuilder(_targetProperty, _properties) {
        this.type = sp_webpart_base_1.PropertyPaneFieldType.Custom;
        this.targetProperty = _targetProperty;
        this.properties = _properties;
        this.properties.onRender = this._render.bind(this);
        this.properties.onDispose = this._dispose.bind(this);
    }
    PropertyFieldCheckboxWithCalloutBuilder.prototype._render = function (elem, context, changeCallback) {
        var props = this.properties;
        var element = React.createElement(PropertyFieldCheckboxWithCalloutHost_1.default, __assign({}, props, { onChange: this._onChange.bind(this) }));
        ReactDOM.render(element, elem);
        if (changeCallback) {
            this._onChangeCallback = changeCallback;
        }
    };
    PropertyFieldCheckboxWithCalloutBuilder.prototype._dispose = function (elem) {
        ReactDOM.unmountComponentAtNode(elem);
    };
    PropertyFieldCheckboxWithCalloutBuilder.prototype._onChange = function (e, value) {
        if (this._onChangeCallback) {
            this._onChangeCallback(this.targetProperty, value);
        }
    };
    return PropertyFieldCheckboxWithCalloutBuilder;
}());
/**
 * Helper method to create a Checkbox with Callout component on the PropertyPane.
 * @param targetProperty - Target property the Checkbox with Callout component is associated to.
 * @param properties - Strongly typed Checkbox with Callout component properties.
 */
function PropertyFieldCheckboxWithCallout(targetProperty, properties) {
    return new PropertyFieldCheckboxWithCalloutBuilder(targetProperty, __assign({}, properties, { onRender: null, onDispose: null }));
}
exports.PropertyFieldCheckboxWithCallout = PropertyFieldCheckboxWithCallout;

//# sourceMappingURL=PropertyFieldCheckboxWithCallout.js.map
