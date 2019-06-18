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
var IProgress_1 = require("./IProgress");
var Action_1 = require("./Action");
var ProgressIndicator_1 = require("office-ui-fabric-react/lib/ProgressIndicator");
var Progress_module_scss_1 = require("./Progress.module.scss");
var telemetry = require("../../common/telemetry");
/**
* Component to show progress of multiple SEQUENTIALLY executed actions
*/
var Progress = (function (_super) {
    __extends(Progress, _super);
    function Progress(props) {
        var _this = _super.call(this, props) || this;
        telemetry.track('ReactProgress', {});
        _this.state = {
            showLongRunningText: props.longRunningText && !props.longRunningTextDisplayDelay
        };
        return _this;
    }
    /**
     * componentDidUpdate lifecycle hook
     */
    Progress.prototype.componentDidUpdate = function () {
        var _this = this;
        // Check if we need to start a timer to display long running text
        if (this.props.longRunningText && this.props.longRunningTextDisplayDelay && this.props.currentActionIndex === 0) {
            setTimeout(function () {
                _this.setState({
                    showLongRunningText: true
                });
            }, this.props.longRunningTextDisplayDelay);
        }
        // long running text should be hidden if all the actions have been executed
        if (this.state.showLongRunningText && this.props.currentActionIndex >= this.props.actions.length) {
            this.setState({
                showLongRunningText: false
            });
        }
    };
    /**
     * shouldComponentUpdate lifecycle hook
     *
     * @param nextProps
     */
    Progress.prototype.shouldComponentUpdate = function (nextProps) {
        if (this.props.currentActionIndex !== nextProps.currentActionIndex ||
            this.props.showOverallProgress !== nextProps.showOverallProgress ||
            this.props.title !== nextProps.title ||
            !this._areActionsEqual(this.props.actions, nextProps.actions)) {
            return true;
        }
    };
    /**
     * Default React render method
     */
    Progress.prototype.render = function () {
        var _a = this.props, currentActionIndex = _a.currentActionIndex, showOverallProgress = _a.showOverallProgress, showIndeterminateOverallProgress = _a.showIndeterminateOverallProgress, hideNotStartedActions = _a.hideNotStartedActions, title = _a.title, actions = _a.actions, height = _a.height, longRunningText = _a.longRunningText, className = _a.className, headerClassName = _a.headerClassName, actionClassName = _a.actionClassName, actionsContainerClassName = _a.actionsContainerClassName, successIconName = _a.successIconName, errorIconName = _a.errorIconName, inProgressIconName = _a.inProgressIconName;
        // correcting action index if props contain incorrect one
        var actionIndex = currentActionIndex;
        if (actionIndex > actions.length) {
            actionIndex = actions.length;
        }
        // getting actions to be rendered based on hideNotStartedActions flag
        var actionsToRender = hideNotStartedActions ? actions.filter(function (a, index) {
            return index <= currentActionIndex;
        }) : actions;
        var actionEls = actionsToRender.map(function (a, index) {
            var state = IProgress_1.ProgressActionState.notStarted; // by default the state is not started
            if (a.hasError && index <= actionIndex) {
                state = IProgress_1.ProgressActionState.errored;
            }
            else if (actionIndex === index) {
                state = IProgress_1.ProgressActionState.inProgress;
            }
            else if (index < actionIndex) {
                state = IProgress_1.ProgressActionState.finished;
            }
            return React.createElement(Action_1.Action, __assign({}, a, { state: state, key: index, className: actionClassName, successIconName: successIconName, errorIconName: errorIconName, inProgressIconName: inProgressIconName }));
        });
        // calculating progress and progressSubText based on parameters
        var progress = 0;
        var progressSubTtext = '';
        if (showIndeterminateOverallProgress) {
            if (actionIndex || actionIndex < actions.length) {
                progress = null;
                progressSubTtext = (actionIndex / actions.length * 100).toFixed(0) + "%";
            }
        }
        else {
            progress = actionIndex ? actionIndex / actions.length : 0;
            progressSubTtext = actionIndex ? (progress * 100).toFixed(0) + "%" : '';
        }
        //   header is displayed if title, showOverallProgress, or showLongRunnungText are set
        //   progress indicator is shown if showOverallProgress is set to true
        //   progress indicator subtext is shown if showOverallProgress is set to true and there is a text to display (see if section above)
        //   long running text is shown if there is a text and we waited needed delay time
        return (React.createElement("div", { className: Progress_module_scss_1.default.progress + " " + (className || ""), style: { height: height || 'auto' } },
            (title || showOverallProgress || this.state.showLongRunningText) && (React.createElement("div", { className: Progress_module_scss_1.default.header + " " + (headerClassName || "") },
                React.createElement("div", { className: Progress_module_scss_1.default.title }, title),
                showOverallProgress && (React.createElement("div", { className: Progress_module_scss_1.default.progressIndicator },
                    React.createElement(ProgressIndicator_1.ProgressIndicator, { percentComplete: progress }))),
                (showOverallProgress && progressSubTtext) && React.createElement("span", { className: Progress_module_scss_1.default.progressSubtext }, progressSubTtext),
                this.state.showLongRunningText && React.createElement("div", { className: Progress_module_scss_1.default.longRunningText }, longRunningText))),
            React.createElement("div", { className: Progress_module_scss_1.default.actionsContainer + " " + (actionsContainerClassName || "") }, actionEls)));
    };
    Progress.prototype._areActionsEqual = function (actions, nextActions) {
        if (actions.length !== nextActions.length) {
            return false;
        }
        for (var i = 0, len = actions.length; i < len; i++) {
            var action = actions[i];
            var nextAction = nextActions[i];
            // comparing error state only,
            // assuming that actions can't be changed during the progress execution
            if (action.hasError !== nextAction.hasError) {
                return false;
            }
        }
        return true;
    };
    return Progress;
}(React.Component));
exports.Progress = Progress;

//# sourceMappingURL=Progress.js.map
