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
var IProgress_1 = require("./IProgress");
var Progress_module_scss_1 = require("./Progress.module.scss");
var Spinner_1 = require("office-ui-fabric-react/lib/Spinner");
var Icon_1 = require("office-ui-fabric-react/lib/Icon");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var Action = (function (_super) {
    __extends(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Default React render method
     */
    Action.prototype.render = function () {
        var _a = this.props, state = _a.state, subActionsTitles = _a.subActionsTitles, errorMessage = _a.errorMessage, title = _a.title, className = _a.className, successIconName = _a.successIconName, errorIconName = _a.errorIconName, inProgressIconName = _a.inProgressIconName;
        var inactive = state === IProgress_1.ProgressActionState.notStarted;
        var labelClassName = inactive ? Utilities_1.css(Progress_module_scss_1.default.label, Progress_module_scss_1.default.inactive) : Progress_module_scss_1.default.label;
        var iconName = '';
        var iconClassName = '';
        switch (state) {
            case IProgress_1.ProgressActionState.finished:
                iconName = successIconName || 'CheckMark';
                iconClassName = Progress_module_scss_1.default.successIcon;
                break;
            case IProgress_1.ProgressActionState.notStarted:
                iconName = successIconName || 'CheckMark';
                iconClassName = Progress_module_scss_1.default.inactiveIcon;
                break;
            case IProgress_1.ProgressActionState.errored:
                iconName = errorIconName || 'Error';
                iconClassName = Progress_module_scss_1.default.errorIcon;
                break;
            case IProgress_1.ProgressActionState.inProgress:
                iconName = inProgressIconName;
                break;
        }
        return (React.createElement("div", { className: Utilities_1.css(Progress_module_scss_1.default.actionContainer, className) },
            React.createElement("div", { className: Progress_module_scss_1.default.actionHeader },
                iconName ? (React.createElement(Icon_1.Icon, { className: Utilities_1.css(Progress_module_scss_1.default.actionIcon, iconClassName), iconName: iconName })) : (React.createElement(Spinner_1.Spinner, { className: Utilities_1.css(Progress_module_scss_1.default.actionIcon, Progress_module_scss_1.default.spinner), size: Spinner_1.SpinnerSize.small })),
                React.createElement("div", { className: labelClassName }, title)),
            subActionsTitles && (React.createElement("div", { className: Progress_module_scss_1.default.subActionsContainer }, subActionsTitles.map(function (saTitle, index) { return (React.createElement("div", { className: labelClassName, key: index }, saTitle)); }))),
            state === IProgress_1.ProgressActionState.errored && (React.createElement("div", { className: Progress_module_scss_1.default.errorContainer },
                React.createElement(Label_1.Label, { className: Progress_module_scss_1.default.errorMessage }, errorMessage)))));
    };
    return Action;
}(React.Component));
exports.Action = Action;

//# sourceMappingURL=Action.js.map
