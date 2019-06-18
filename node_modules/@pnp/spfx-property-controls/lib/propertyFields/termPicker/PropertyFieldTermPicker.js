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
var PropertyFieldTermPickerHost_1 = require("./PropertyFieldTermPickerHost");
var SPTermStorePickerService_1 = require("../../services/SPTermStorePickerService");
/**
 * Represents a PropertyFieldTermPicker object.
 * NOTE: INTERNAL USE ONLY
 * @internal
 */
var PropertyFieldTermPickerBuilder = (function () {
    /**
     * Constructor method
     */
    function PropertyFieldTermPickerBuilder(_targetProperty, _properties) {
        // Properties defined by IPropertyPaneField
        this.type = sp_webpart_base_1.PropertyPaneFieldType.Custom;
        this.allowMultipleSelections = false;
        this.initialValues = [];
        this.excludeSystemGroup = false;
        this.limitByGroupNameOrID = null;
        this.limitByTermsetNameOrID = null;
        this.disabled = false;
        this.deferredValidationTime = 200;
        this.render = this.render.bind(this);
        this.targetProperty = _targetProperty;
        this.properties = _properties;
        this.properties.onDispose = this.dispose;
        this.properties.onRender = this.render;
        this.label = _properties.label;
        this.context = _properties.context;
        this.onPropertyChange = _properties.onPropertyChange;
        this.customProperties = _properties.properties;
        this.key = _properties.key;
        this.onGetErrorMessage = _properties.onGetErrorMessage;
        this.panelTitle = _properties.panelTitle;
        this.limitByGroupNameOrID = _properties.limitByGroupNameOrID;
        this.limitByTermsetNameOrID = _properties.limitByTermsetNameOrID;
        this.hideTermStoreName = _properties.hideTermStoreName;
        this.isTermSetSelectable = _properties.isTermSetSelectable;
        this.disabledTermIds = _properties.disabledTermIds;
        this.termService = _properties.termService;
        if (_properties.disabled === true) {
            this.disabled = _properties.disabled;
        }
        if (_properties.deferredValidationTime) {
            this.deferredValidationTime = _properties.deferredValidationTime;
        }
        if (typeof _properties.allowMultipleSelections !== 'undefined') {
            this.allowMultipleSelections = _properties.allowMultipleSelections;
        }
        if (typeof _properties.initialValues !== 'undefined') {
            this.initialValues = _properties.initialValues;
        }
        if (typeof _properties.excludeSystemGroup !== 'undefined') {
            this.excludeSystemGroup = _properties.excludeSystemGroup;
        }
    }
    PropertyFieldTermPickerBuilder.prototype.onPropertyChange = function (propertyPath, oldValue, newValue) { };
    /**
     * Renders the SPListPicker field content
     */
    PropertyFieldTermPickerBuilder.prototype.render = function (elem, ctx, changeCallback) {
        // Construct the JSX properties
        var element = React.createElement(PropertyFieldTermPickerHost_1.default, {
            label: this.label,
            targetProperty: this.targetProperty,
            panelTitle: this.panelTitle,
            allowMultipleSelections: this.allowMultipleSelections,
            initialValues: this.initialValues,
            excludeSystemGroup: this.excludeSystemGroup,
            limitByGroupNameOrID: this.limitByGroupNameOrID,
            limitByTermsetNameOrID: this.limitByTermsetNameOrID,
            hideTermStoreName: this.hideTermStoreName,
            isTermSetSelectable: this.isTermSetSelectable,
            disabledTermIds: this.disabledTermIds,
            context: this.context,
            onDispose: this.dispose,
            onRender: this.render,
            onChange: changeCallback,
            onPropertyChange: this.onPropertyChange,
            properties: this.customProperties,
            key: this.key,
            disabled: this.disabled,
            onGetErrorMessage: this.onGetErrorMessage,
            deferredValidationTime: this.deferredValidationTime,
            termService: this.termService
        });
        // Calls the REACT content generator
        ReactDom.render(element, elem);
    };
    /**
     * Disposes the current object
     */
    PropertyFieldTermPickerBuilder.prototype.dispose = function (elem) {
    };
    return PropertyFieldTermPickerBuilder;
}());
exports.PropertyFieldTermPickerBuilder = PropertyFieldTermPickerBuilder;
/**
 * Helper method to create a SPList Picker on the PropertyPane.
 * @param targetProperty - Target property the SharePoint list picker is associated to.
 * @param properties - Strongly typed SPList Picker properties.
 */
function PropertyFieldTermPicker(targetProperty, properties) {
    // Calls the PropertyFieldTermPicker builder object
    // This object will simulate a PropertyFieldCustom to manage his rendering process
    return new PropertyFieldTermPickerBuilder(targetProperty, __assign({}, properties, { targetProperty: targetProperty, onRender: null, onDispose: null, termService: new SPTermStorePickerService_1.default(properties, properties.context) }));
}
exports.PropertyFieldTermPicker = PropertyFieldTermPicker;

//# sourceMappingURL=PropertyFieldTermPicker.js.map
