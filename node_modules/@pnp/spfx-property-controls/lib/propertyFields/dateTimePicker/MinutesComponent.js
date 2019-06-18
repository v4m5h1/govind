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
var Dropdown_1 = require("office-ui-fabric-react/lib/components/Dropdown");
/**
 * Minutes component, renders the minutes dropdown
 */
var MinutesComponent = (function (_super) {
    __extends(MinutesComponent, _super);
    function MinutesComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MinutesComponent.prototype.render = function () {
        var minutes = [];
        for (var j = 0; j < 60; j++) {
            var digitMin = void 0;
            if (j < 10) {
                digitMin = '0' + j;
            }
            else {
                digitMin = j.toString();
            }
            var selected = false;
            if (j === this.props.value) {
                selected = true;
            }
            minutes.push({ key: j, text: digitMin, isSelected: selected });
        }
        return (React.createElement(Dropdown_1.Dropdown, { disabled: this.props.disabled, label: '', options: minutes, onChanged: this.props.onChange }));
    };
    return MinutesComponent;
}(React.Component));
exports.default = MinutesComponent;

//# sourceMappingURL=MinutesComponent.js.map
