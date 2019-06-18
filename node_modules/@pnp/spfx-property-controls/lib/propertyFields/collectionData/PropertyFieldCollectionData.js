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
var _1 = require(".");
/**
 * Property Field Collection Data Builder Class
 */
var PropertyFieldCollectionDataBuilder = (function () {
    function PropertyFieldCollectionDataBuilder(_targetProperty, _properties) {
        this.type = sp_webpart_base_1.PropertyPaneFieldType.Custom;
        this.targetProperty = _targetProperty;
        this.properties = _properties;
        this.properties.onRender = this.render.bind(this);
        this.properties.onDispose = this.dispose.bind(this);
    }
    PropertyFieldCollectionDataBuilder.prototype.render = function (elem, context, changeCallback) {
        var props = this.properties;
        var element = React.createElement(_1.PropertyFieldCollectionDataHost, __assign({}, props, { onChanged: this.onChanged.bind(this) }));
        ReactDOM.render(element, elem);
        if (changeCallback) {
            this._onChangeCallback = changeCallback;
        }
    };
    /**
     * Dispose the property field
     */
    PropertyFieldCollectionDataBuilder.prototype.dispose = function (elem) {
        ReactDOM.unmountComponentAtNode(elem);
    };
    /**
     * On field change event handler
     * @param value
     */
    PropertyFieldCollectionDataBuilder.prototype.onChanged = function (value) {
        if (this._onChangeCallback) {
            this._onChangeCallback(this.targetProperty, value);
        }
    };
    return PropertyFieldCollectionDataBuilder;
}());
/**
 * Property field
 * @param targetProperty
 * @param properties
 */
function PropertyFieldCollectionData(targetProperty, properties) {
    return new PropertyFieldCollectionDataBuilder(targetProperty, __assign({}, properties, { onRender: null, onDispose: null }));
}
exports.PropertyFieldCollectionData = PropertyFieldCollectionData;

//# sourceMappingURL=PropertyFieldCollectionData.js.map
