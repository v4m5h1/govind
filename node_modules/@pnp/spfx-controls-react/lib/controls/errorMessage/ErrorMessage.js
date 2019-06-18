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
var ErrorMessage_module_scss_1 = require("./ErrorMessage.module.scss");
var Icon_1 = require("office-ui-fabric-react/lib/Icon");
/**
 * Component that shows an error message when something went wront with the property control
 */
var FieldErrorMessage = (function (_super) {
    __extends(FieldErrorMessage, _super);
    function FieldErrorMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldErrorMessage.prototype.render = function () {
        if (this.props.errorMessage !== 'undefined' && this.props.errorMessage !== null && this.props.errorMessage !== '') {
            return (React.createElement("div", { "aria-live": "assertive" },
                React.createElement("p", { className: "ms-TextField-errorMessage " + ErrorMessage_module_scss_1.default.errorMessage },
                    React.createElement(Icon_1.Icon, { iconName: 'Error', className: ErrorMessage_module_scss_1.default.errorIcon }),
                    React.createElement("span", { "data-automation-id": "error-message" }, this.props.errorMessage))));
        }
        else {
            return null;
        }
    };
    return FieldErrorMessage;
}(React.Component));
exports.default = FieldErrorMessage;

//# sourceMappingURL=ErrorMessage.js.map
