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
var PropertyFieldNumberHost_1 = require("./PropertyFieldNumberHost");
var PropertyFieldNumberBuilder = (function () {
    function PropertyFieldNumberBuilder(_targetProperty, _properties) {
        this.type = sp_webpart_base_1.PropertyPaneFieldType.Custom;
        this.targetProperty = _targetProperty;
        this.properties = _properties;
        this.properties.onRender = this._render.bind(this);
        this.properties.onDispose = this._dispose.bind(this);
    }
    PropertyFieldNumberBuilder.prototype._render = function (elem, context, changeCallback) {
        var props = this.properties;
        var element = React.createElement(PropertyFieldNumberHost_1.default, __assign({}, props, { onChanged: this._onChanged.bind(this) }));
        ReactDOM.render(element, elem);
        if (changeCallback) {
            this._onChangeCallback = changeCallback;
        }
    };
    PropertyFieldNumberBuilder.prototype._dispose = function (elem) {
        ReactDOM.unmountComponentAtNode(elem);
    };
    PropertyFieldNumberBuilder.prototype._onChanged = function (value) {
        if (this._onChangeCallback) {
            this._onChangeCallback(this.targetProperty, value);
        }
    };
    return PropertyFieldNumberBuilder;
}());
function PropertyFieldNumber(targetProperty, properties) {
    return new PropertyFieldNumberBuilder(targetProperty, __assign({}, properties, { onRender: null, onDispose: null }));
}
exports.PropertyFieldNumber = PropertyFieldNumber;

//# sourceMappingURL=PropertyFieldNumber.js.map
