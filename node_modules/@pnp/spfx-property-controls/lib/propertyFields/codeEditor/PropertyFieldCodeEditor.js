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
var ReactDom = require("react-dom");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var PropertyFieldCodeEditorHost_1 = require("./PropertyFieldCodeEditorHost");
/**
 * Represents a PropertyFieldCodeEditor object
 */
var PropertyFieldCodeEditorBuilder = (function () {
    /**
     * Constructor method
     */
    function PropertyFieldCodeEditorBuilder(_targetProperty, _properties) {
        // Properties defined by IPropertyPaneField
        this.type = sp_webpart_base_1.PropertyPaneFieldType.Custom;
        this.disabled = false;
        this.deferredValidationTime = 200;
        this.render = this.render.bind(this);
        this.targetProperty = _targetProperty;
        this.properties = _properties;
        this.properties.onDispose = this.dispose;
        this.properties.onRender = this.render;
        this.label = _properties.label;
        this.onPropertyChange = _properties.onPropertyChange;
        this.customProperties = _properties.properties;
        this.key = _properties.key;
        this.panelTitle = _properties.panelTitle;
        this.language = _properties.language;
        this.initialValue = _properties.initialValue;
        if (_properties.disabled === true) {
            this.disabled = _properties.disabled;
        }
        if (_properties.deferredValidationTime) {
            this.deferredValidationTime = _properties.deferredValidationTime;
        }
    }
    PropertyFieldCodeEditorBuilder.prototype.onPropertyChange = function (propertyPath, oldValue, newValue) { };
    /**
     * Renders the SPListPicker field content
     */
    PropertyFieldCodeEditorBuilder.prototype.render = function (elem, ctx, changeCallback) {
        // Construct the JSX properties
        var element = React.createElement(PropertyFieldCodeEditorHost_1.default, {
            label: this.label,
            targetProperty: this.targetProperty,
            panelTitle: this.panelTitle,
            language: this.language,
            initialValue: this.initialValue,
            onDispose: this.dispose,
            onRender: this.render,
            onChange: changeCallback,
            onPropertyChange: this.onPropertyChange,
            properties: this.customProperties,
            key: this.key,
            disabled: this.disabled,
            deferredValidationTime: this.deferredValidationTime
        });
        // Calls the REACT content generator
        ReactDom.render(element, elem);
    };
    /**
     * Disposes the current object
     */
    PropertyFieldCodeEditorBuilder.prototype.dispose = function (elem) {
    };
    return PropertyFieldCodeEditorBuilder;
}());
/**
 * Helper method to create a SPList Picker on the PropertyPane.
 * @param targetProperty - Target property the SharePoint list picker is associated to.
 * @param properties - Strongly typed SPList Picker properties.
 */
function PropertyFieldCodeEditor(targetProperty, properties) {
    // Calls the PropertyFieldCodeEditor builder object
    // This object will simulate a PropertyFieldCustom to manage his rendering process
    return new PropertyFieldCodeEditorBuilder(targetProperty, __assign({}, properties, { targetProperty: targetProperty, onRender: null, onDispose: null }));
}
exports.PropertyFieldCodeEditor = PropertyFieldCodeEditor;

//# sourceMappingURL=PropertyFieldCodeEditor.js.map
