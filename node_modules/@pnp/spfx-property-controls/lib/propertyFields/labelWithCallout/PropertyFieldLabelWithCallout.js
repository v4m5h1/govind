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
var PropertyFieldLabelWithCalloutHost_1 = require("./PropertyFieldLabelWithCalloutHost");
/**
 * Represents a PropertyFieldLabelWithCallout object
 */
var PropertyFieldLabelWithCalloutBuilder = (function () {
    function PropertyFieldLabelWithCalloutBuilder(_targetProperty, _properties) {
        this.type = sp_webpart_base_1.PropertyPaneFieldType.Custom;
        this.targetProperty = _targetProperty;
        this.properties = _properties;
        this.properties.onRender = this._render.bind(this);
        this.properties.onDispose = this._dispose.bind(this);
    }
    PropertyFieldLabelWithCalloutBuilder.prototype._render = function (elem, context, changeCallback) {
        var props = this.properties;
        var element = React.createElement(PropertyFieldLabelWithCalloutHost_1.default, __assign({}, props));
        ReactDOM.render(element, elem);
    };
    PropertyFieldLabelWithCalloutBuilder.prototype._dispose = function (elem) {
        ReactDOM.unmountComponentAtNode(elem);
    };
    return PropertyFieldLabelWithCalloutBuilder;
}());
/**
 * Helper method to create a Label with Callout component on the PropertyPane.
 * @param targetProperty - Target property the Label with Callout component is associated to.
 * @param properties - Strongly typed Label with Callout component properties.
 */
function PropertyFieldLabelWithCallout(targetProperty, properties) {
    return new PropertyFieldLabelWithCalloutBuilder(targetProperty, __assign({}, properties, { onRender: null, onDispose: null }));
}
exports.PropertyFieldLabelWithCallout = PropertyFieldLabelWithCallout;

//# sourceMappingURL=PropertyFieldLabelWithCallout.js.map
