"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var SwatchColorPicker_1 = require("office-ui-fabric-react/lib/SwatchColorPicker");
var strings = require("PropertyControlStrings");
var React = require("react");
var telemetry = require("../../common/telemetry");
var IPropertyFieldSwatchColorPicker_1 = require("./IPropertyFieldSwatchColorPicker");
var PropertyFieldSwatchColorPickerHost_module_scss_1 = require("./PropertyFieldSwatchColorPickerHost.module.scss");
var PropertyFieldSwatchColorPickerHost = (function (_super) {
    __extends(PropertyFieldSwatchColorPickerHost, _super);
    function PropertyFieldSwatchColorPickerHost(props, state) {
        var _this = _super.call(this, props) || this;
        telemetry.track('PropertyFieldSwatchColorPicker', {
            disabled: props.disabled
        });
        _this.state = {
            errorMessage: undefined,
            inlinePickerShowing: false
        };
        _this.onTogglePicker = _this.onTogglePicker.bind(_this);
        return _this;
    }
    PropertyFieldSwatchColorPickerHost.prototype.render = function () {
        return (React.createElement("div", { className: PropertyFieldSwatchColorPickerHost_module_scss_1.default.pfSwatchColorPicker },
            this.props.label && React.createElement(Label_1.Label, null, this.props.label),
            this.props.style === IPropertyFieldSwatchColorPicker_1.PropertyFieldSwatchColorPickerStyle.Inline &&
                React.createElement("table", { className: PropertyFieldSwatchColorPickerHost_module_scss_1.default.cpInlineTable },
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { style: { width: "100%" } },
                                this.state.inlinePickerShowing &&
                                    React.createElement("div", { className: 'ms-slideDownIn20 ' + PropertyFieldSwatchColorPickerHost_module_scss_1.default.cpSwatchRow }, this.renderSwatchColorPicker()),
                                !this.state.inlinePickerShowing &&
                                    React.createElement("div", { className: "ms-slideUpIn20 ms-borderColor-neutralDark", style: { backgroundColor: this.props.selectedColor, border: "1px solid" } }, "\u00A0")),
                            React.createElement("td", { className: PropertyFieldSwatchColorPickerHost_module_scss_1.default.cpInlineRow },
                                React.createElement(Button_1.IconButton, { title: strings.ColorPickerButtonTitle, disabled: this.props.disabled, iconProps: { iconName: this.props.iconName, ariaLabel: strings.ColorPickerButtonTitle }, onClick: this.onTogglePicker }))))),
            this.props.style === IPropertyFieldSwatchColorPicker_1.PropertyFieldSwatchColorPickerStyle.Full && this.renderSwatchColorPicker()));
    };
    PropertyFieldSwatchColorPickerHost.prototype.renderSwatchColorPicker = function () {
        var colorCells = this.props.colors.map(function (value, index) {
            return {
                id: index.toString(),
                label: value.label,
                color: value.color
            };
        });
        return (React.createElement(SwatchColorPicker_1.SwatchColorPicker, { disabled: this.props.disabled, columnCount: this.props.columnCount, selectedId: this.selectedColorId().toString(), colorCells: colorCells, cellShape: this.props.showAsCircles ? 'circle' : 'square', onColorChanged: this.props.onColorChanged }));
    };
    PropertyFieldSwatchColorPickerHost.prototype.onTogglePicker = function () {
        this.setState({
            inlinePickerShowing: !this.state.inlinePickerShowing
        });
    };
    PropertyFieldSwatchColorPickerHost.prototype.selectedColorId = function () {
        for (var i = 0; i < this.props.colors.length; i++) {
            if (this.props.colors[i].color === this.props.selectedColor) {
                return i;
            }
        }
        return -1;
    };
    return PropertyFieldSwatchColorPickerHost;
}(React.Component));
exports.default = PropertyFieldSwatchColorPickerHost;

//# sourceMappingURL=PropertyFieldSwatchColorPickerHost.js.map
