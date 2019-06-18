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
var IPropertyFieldDateTimePicker_1 = require("./IPropertyFieldDateTimePicker");
var Dropdown_1 = require("office-ui-fabric-react/lib/components/Dropdown");
/**
 * Hours component, this renders the hours dropdown
 */
var HoursComponent = (function (_super) {
    __extends(HoursComponent, _super);
    function HoursComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HoursComponent.prototype.render = function () {
        // Constructs a Date type object from the initalDate string property
        var hours = [];
        for (var i = 0; i < 24; i++) {
            var digit = void 0;
            if (this.props.timeConvention === IPropertyFieldDateTimePicker_1.TimeConvention.Hours24) {
                // 24 hours time convention
                if (i < 10) {
                    digit = '0' + i;
                }
                else {
                    digit = i.toString();
                }
            }
            else {
                // 12 hours time convention
                if (i === 0) {
                    digit = '12 am';
                }
                else if (i < 12) {
                    digit = i + ' am';
                }
                else {
                    if (i === 12) {
                        digit = '12 pm';
                    }
                    else {
                        digit = (i % 12) + ' pm';
                    }
                }
            }
            var selected = false;
            if (i === this.props.value) {
                selected = true;
            }
            hours.push({ key: i, text: digit, isSelected: selected });
        }
        return (React.createElement(Dropdown_1.Dropdown, { disabled: this.props.disabled, label: '', options: hours, onChanged: this.props.onChange, dropdownWidth: 110 }));
    };
    return HoursComponent;
}(React.Component));
exports.default = HoursComponent;

//# sourceMappingURL=HoursComponent.js.map
