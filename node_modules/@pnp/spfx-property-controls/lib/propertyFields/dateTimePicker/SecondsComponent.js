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
 * Seconds component, renders the seconds dropdown
 */
var SecondsComponent = (function (_super) {
    __extends(SecondsComponent, _super);
    function SecondsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecondsComponent.prototype.render = function () {
        var seconds = [];
        for (var k = 0; k < 60; k++) {
            var digitSec = void 0;
            if (k < 10) {
                digitSec = '0' + k;
            }
            else {
                digitSec = k.toString();
            }
            var selected = false;
            if (k === this.props.value) {
                selected = true;
            }
            seconds.push({ key: k, text: digitSec, isSelected: selected });
        }
        return (React.createElement(Dropdown_1.Dropdown, { disabled: this.props.disabled, label: '', options: seconds, onChanged: this.props.onChange }));
    };
    return SecondsComponent;
}(React.Component));
exports.default = SecondsComponent;

//# sourceMappingURL=SecondsComponent.js.map
