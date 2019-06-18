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
var Button_1 = require("office-ui-fabric-react/lib/components/Button");
var PlaceholderWithCallout_1 = require("../../common/placeholderWithCallout/PlaceholderWithCallout");
var telemetry = require("../../common/telemetry");
/**
 * Renders the control for PropertyFieldButtonWithCallout component
 */
var PropertyFieldButtonHost = (function (_super) {
    __extends(PropertyFieldButtonHost, _super);
    function PropertyFieldButtonHost(props) {
        var _this = _super.call(this, props) || this;
        telemetry.track('PropertyFieldButton', {
            disabled: props.disabled
        });
        return _this;
    }
    PropertyFieldButtonHost.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(PlaceholderWithCallout_1.default, __assign({}, this.props),
                React.createElement(Button_1.Button, __assign({}, this.props)))));
    };
    return PropertyFieldButtonHost;
}(React.Component));
exports.default = PropertyFieldButtonHost;

//# sourceMappingURL=PropertyFieldButtonWithCalloutHost.js.map
