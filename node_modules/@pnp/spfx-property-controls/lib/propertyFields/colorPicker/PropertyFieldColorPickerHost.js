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
var React = require("react");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var ColorPicker_1 = require("office-ui-fabric-react/lib/ColorPicker");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var PropertyFieldColorPickerHost_module_scss_1 = require("./PropertyFieldColorPickerHost.module.scss");
var strings = require("PropertyControlStrings");
var IPropertyFieldColorPicker_1 = require("./IPropertyFieldColorPicker");
var telemetry = require("../../common/telemetry");
var PropertyFieldColorPickerHost = (function (_super) {
    __extends(PropertyFieldColorPickerHost, _super);
    function PropertyFieldColorPickerHost(props, state) {
        var _this = _super.call(this, props) || this;
        telemetry.track('PropertyFieldColorPicker', {
            disabled: props.disabled
        });
        _this.state = {
            errorMessage: undefined,
            inlinePickerShowing: false
        };
        _this.onTogglePicker = _this.onTogglePicker.bind(_this);
        return _this;
    }
    PropertyFieldColorPickerHost.prototype.render = function () {
        return (React.createElement("div", { className: PropertyFieldColorPickerHost_module_scss_1.default.pfColorPicker + " " + (this.props.isHidden ? PropertyFieldColorPickerHost_module_scss_1.default.hidden : "") },
            this.props.label && React.createElement(Label_1.Label, null, this.props.label),
            this.props.style === IPropertyFieldColorPicker_1.PropertyFieldColorPickerStyle.Inline &&
                React.createElement("table", { className: PropertyFieldColorPickerHost_module_scss_1.default.cpInlineTable },
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { style: { width: "100%" } },
                                this.state.inlinePickerShowing &&
                                    React.createElement("div", { className: "ms-slideDownIn20" },
                                        React.createElement(ColorPicker_1.ColorPicker, { color: this.props.selectedColor, onColorChanged: this.props.onColorChanged, alphaSliderHidden: this.props.alphaSliderHidden })),
                                !this.state.inlinePickerShowing &&
                                    React.createElement("div", { className: "ms-slideUpIn20 ms-borderColor-neutralDark", style: { backgroundColor: this.props.selectedColor, border: "1px solid" } }, "\u00A0")),
                            React.createElement("td", { className: PropertyFieldColorPickerHost_module_scss_1.default.cpInlineRow },
                                React.createElement(Button_1.IconButton, { title: strings.ColorPickerButtonTitle, disabled: this.props.disabled, iconProps: { iconName: this.props.iconName, ariaLabel: strings.ColorPickerButtonTitle }, onClick: this.onTogglePicker }))))),
            this.props.style === IPropertyFieldColorPicker_1.PropertyFieldColorPickerStyle.Full && !this.props.disabled &&
                React.createElement("div", null,
                    React.createElement("div", { style: { width: 0, height: 0, overflow: 'hidden' } },
                        React.createElement("input", null)),
                    React.createElement(ColorPicker_1.ColorPicker, { color: this.props.selectedColor, onColorChanged: this.props.onColorChanged, alphaSliderHidden: this.props.alphaSliderHidden })),
            this.props.style === IPropertyFieldColorPicker_1.PropertyFieldColorPickerStyle.Full && this.props.disabled &&
                React.createElement("fieldset", { disabled: true, className: PropertyFieldColorPickerHost_module_scss_1.default.disabledCP },
                    React.createElement(ColorPicker_1.ColorPicker, { color: this.props.selectedColor, alphaSliderHidden: this.props.alphaSliderHidden }))));
    };
    PropertyFieldColorPickerHost.prototype.onTogglePicker = function () {
        this.setState({
            inlinePickerShowing: !this.state.inlinePickerShowing
        });
    };
    return PropertyFieldColorPickerHost;
}(React.Component));
exports.default = PropertyFieldColorPickerHost;

//# sourceMappingURL=PropertyFieldColorPickerHost.js.map
