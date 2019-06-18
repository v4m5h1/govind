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
var SpinButton_1 = require("office-ui-fabric-react/lib/SpinButton");
var positioning_1 = require("office-ui-fabric-react/lib/utilities/positioning");
var telemetry = require("../../common/telemetry");
var PropertyFieldSpinButtonHost = (function (_super) {
    __extends(PropertyFieldSpinButtonHost, _super);
    function PropertyFieldSpinButtonHost(props, state) {
        var _this = _super.call(this, props) || this;
        telemetry.track('PropertyFieldSpinButton', {
            disabled: props.disabled
        });
        _this.state = {
            errorMessage: undefined
        };
        return _this;
    }
    PropertyFieldSpinButtonHost.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(SpinButton_1.SpinButton, { label: this.props.label, labelPosition: positioning_1.Position.top, value: this.props.value, onValidate: this.props.onValidate, onIncrement: this.props.onIncrement, onDecrement: this.props.onDecrement, disabled: this.props.disabled, incrementButtonIcon: { iconName: this.props.incrementIconName }, decrementButtonIcon: { iconName: this.props.decrementIconName } })));
    };
    return PropertyFieldSpinButtonHost;
}(React.Component));
exports.default = PropertyFieldSpinButtonHost;

//# sourceMappingURL=PropertyFieldSpinButtonHost.js.map
