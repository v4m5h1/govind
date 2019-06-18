"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var React = require("react");
var ReactDom = require("react-dom");
var PropertyFieldOrderHost_1 = require("./PropertyFieldOrderHost");
var PropertyFieldOrderBuilder = (function () {
    function PropertyFieldOrderBuilder(_targetProperty, _properties) {
        //Properties defined by IPropertyPaneField
        this.type = sp_webpart_base_1.PropertyPaneFieldType.Custom;
        this.targetProperty = _targetProperty;
        this.properties = {
            key: _properties.key,
            label: _properties.label,
            onPropertyChange: _properties.onPropertyChange,
            disabled: _properties.disabled,
            properties: _properties.properties,
            items: _properties.items,
            textProperty: _properties.textProperty,
            moveUpIconName: _properties.moveUpIconName,
            moveDownIconName: _properties.moveDownIconName,
            disableDragAndDrop: _properties.disableDragAndDrop,
            removeArrows: _properties.removeArrows,
            maxHeight: _properties.maxHeight,
            onRenderItem: _properties.onRenderItem,
            onRender: this.onRender.bind(this)
        };
        this.items = _properties.items;
    }
    PropertyFieldOrderBuilder.prototype.render = function () {
        if (!this.elem) {
            return;
        }
        this.onRender(this.elem);
    };
    PropertyFieldOrderBuilder.prototype.onRender = function (elem, ctx, changeCallback) {
        if (!this.elem) {
            this.elem = elem;
        }
        this.changeCB = changeCallback;
        var element = React.createElement(PropertyFieldOrderHost_1.default, {
            label: this.properties.label,
            disabled: this.properties.disabled,
            items: this.items,
            textProperty: this.properties.textProperty,
            moveUpIconName: this.properties.moveUpIconName || 'ChevronUpSmall',
            moveDownIconName: this.properties.moveDownIconName || 'ChevronDownSmall',
            disableDragAndDrop: this.properties.disableDragAndDrop,
            removeArrows: this.properties.removeArrows,
            maxHeight: this.properties.maxHeight,
            onRenderItem: this.properties.onRenderItem,
            valueChanged: this.onValueChanged.bind(this)
        });
        ReactDom.render(element, elem);
    };
    PropertyFieldOrderBuilder.prototype.onValueChanged = function (newValue) {
        if (this.properties.onPropertyChange && newValue !== null) {
            this.properties.onPropertyChange(this.targetProperty, this.items, newValue);
            this.items = newValue;
            this.properties.properties[this.targetProperty] = newValue;
            if (typeof this.changeCB !== 'undefined' && this.changeCB !== null) {
                this.changeCB(this.targetProperty, newValue);
            }
        }
    };
    return PropertyFieldOrderBuilder;
}());
function PropertyFieldOrder(targetProperty, properties) {
    return new PropertyFieldOrderBuilder(targetProperty, properties);
}
exports.PropertyFieldOrder = PropertyFieldOrder;

//# sourceMappingURL=PropertyFieldOrder.js.map
