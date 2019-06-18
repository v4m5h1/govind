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
var RteColorPicker_module_scss_1 = require("./RteColorPicker.module.scss");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var FocusZone_1 = require("office-ui-fabric-react/lib/FocusZone");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var SwatchColorPickerGroup = (function (_super) {
    __extends(SwatchColorPickerGroup, _super);
    function SwatchColorPickerGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwatchColorPickerGroup.prototype.render = function () {
        var _this = this;
        var colorRows = sp_lodash_subset_1.chunk(this.props.groupColors, 5);
        return (React.createElement("div", null,
            React.createElement(Label_1.Label, { htmlFor: this.props.groupText, className: RteColorPicker_module_scss_1.default.pickerLabel }, this.props.groupText),
            React.createElement("div", { key: this.props.groupText },
                React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.horizontal, handleTabKey: 1 /* all */, isCircularNavigation: true, className: RteColorPicker_module_scss_1.default.focusedContainer },
                    React.createElement("table", { className: RteColorPicker_module_scss_1.default.tableRoot },
                        React.createElement("tbody", null, colorRows.map(function (cr, rowIndex) {
                            return (React.createElement("tr", { role: "row" }, cr.map(function (gc, index) {
                                return (React.createElement("td", { role: "presentation", className: RteColorPicker_module_scss_1.default.tableCell },
                                    React.createElement(Button_1.ActionButton, { className: RteColorPicker_module_scss_1.default.colorCell, role: "gridCell", title: gc.label, "aria-label": gc.label, "aria-selected": _this.props.selectedColor === gc.color, "data-index": index, "data-is-focusable": true, id: _this.props.groupText + "-" + gc.id + "-" + index, onClick: function () { return _this.handleColorChanged(gc.color); } },
                                        React.createElement("svg", { className: RteColorPicker_module_scss_1.default.svg + " " + (_this.props.selectedColor.toUpperCase() === gc.color.toUpperCase() ? RteColorPicker_module_scss_1.default.selected : ""), viewBox: "0 0 20 20", fill: gc.color, focusable: "false" },
                                            React.createElement("rect", { width: "100%", height: "100%" })))));
                            })));
                        })))))));
    };
    SwatchColorPickerGroup.prototype.handleColorChanged = function (color) {
        this.props.onColorChanged(color);
    };
    return SwatchColorPickerGroup;
}(React.Component));
exports.default = SwatchColorPickerGroup;

//# sourceMappingURL=SwatchColorPickerGroup.js.map
