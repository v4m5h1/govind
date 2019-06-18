"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var color_1 = require("office-ui-fabric-react/lib/utilities/color");
var React = require("react");
var ReactDom = require("react-dom");
var IPropertyFieldColorPicker_1 = require("./IPropertyFieldColorPicker");
var PropertyFieldColorPickerHost_1 = require("./PropertyFieldColorPickerHost");
var PropertyFieldColorPickerBuilder = (function () {
    function PropertyFieldColorPickerBuilder(_targetProperty, _properties) {
        //Properties defined by IPropertyPaneField
        this.type = sp_webpart_base_1.PropertyPaneFieldType.Custom;
        this.targetProperty = _targetProperty;
        this.properties = {
            key: _properties.key,
            label: _properties.label,
            onPropertyChange: _properties.onPropertyChange,
            selectedColor: _properties.selectedColor,
            disabled: _properties.disabled,
            isHidden: _properties.isHidden,
            alphaSliderHidden: _properties.alphaSliderHidden,
            properties: _properties.properties,
            style: _properties.style,
            iconName: _properties.iconName,
            onRender: this.onRender.bind(this)
        };
        if (typeof _properties.selectedColor === 'undefined') {
            this.color = '#ffffff';
        }
        else {
            if (typeof _properties.selectedColor === 'string') {
                this.color = _properties.selectedColor;
            }
            else {
                this.color = _properties.selectedColor.str;
            }
        }
        this.valueAsObject = _properties.valueAsObject;
    }
    PropertyFieldColorPickerBuilder.prototype.render = function () {
        if (!this.elem) {
            return;
        }
        this.onRender(this.elem);
    };
    PropertyFieldColorPickerBuilder.prototype.onRender = function (elem, ctx, changeCallback) {
        if (!this.elem) {
            this.elem = elem;
        }
        this.changeCB = changeCallback;
        var element = React.createElement(PropertyFieldColorPickerHost_1.default, {
            label: this.properties.label,
            alphaSliderHidden: this.properties.alphaSliderHidden,
            disabled: this.properties.disabled,
            isHidden: this.properties.isHidden,
            selectedColor: this.color,
            style: this.properties.style || IPropertyFieldColorPicker_1.PropertyFieldColorPickerStyle.Inline,
            iconName: this.properties.iconName || 'Color',
            onColorChanged: this.onColorChanged.bind(this)
        });
        ReactDom.render(element, elem);
    };
    PropertyFieldColorPickerBuilder.prototype.onColorChanged = function (newColor) {
        if (this.properties.onPropertyChange && newColor !== null) {
            var newValue = (this.valueAsObject ? color_1.getColorFromString(newColor) : newColor);
            var oldValue = (this.valueAsObject ? color_1.getColorFromString(this.color) : this.color);
            this.color = newColor;
            this.properties.onPropertyChange(this.targetProperty, oldValue, newValue);
            this.properties.properties[this.targetProperty] = newValue;
            if (typeof this.changeCB !== 'undefined' && this.changeCB !== null) {
                this.changeCB(this.targetProperty, newValue);
            }
        }
    };
    return PropertyFieldColorPickerBuilder;
}());
function PropertyFieldColorPicker(targetProperty, properties) {
    return new PropertyFieldColorPickerBuilder(targetProperty, properties);
}
exports.PropertyFieldColorPicker = PropertyFieldColorPicker;

//# sourceMappingURL=PropertyFieldColorPicker.js.map
