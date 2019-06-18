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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ITermsActions_1 = require("./ITermsActions");
var ButtonTermAction = (function (_super) {
    __extends(ButtonTermAction, _super);
    function ButtonTermAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Prepares the command bar button
         */
        _this.prepareCommandBarButton = function (termAction) {
            var name = "";
            var text = "";
            var iconName = "";
            var btnTitle = "";
            if ((_this.props.displayStyle && (_this.props.displayStyle === ITermsActions_1.TermActionsDisplayStyle.text || _this.props.displayStyle === ITermsActions_1.TermActionsDisplayStyle.textAndIcon))) {
                name = termAction.title;
                text = termAction.title;
            }
            if (_this.props.displayStyle && (_this.props.displayStyle === ITermsActions_1.TermActionsDisplayStyle.icon || _this.props.displayStyle === ITermsActions_1.TermActionsDisplayStyle.textAndIcon)) {
                iconName = termAction.iconName;
            }
            btnTitle = termAction.title;
            return { name: name, text: text, iconName: iconName, btnTitle: btnTitle };
        };
        /**
         * Gets the action button styling
         */
        _this.getTermActionActionButtonStyle = function () {
            var result = {
                backgroundColor: "transparent",
                width: _this.props.displayStyle === ITermsActions_1.TermActionsDisplayStyle.icon ? "32px" : null,
                height: "32px"
            };
            return result;
        };
        /**
         * On action execution
         */
        _this.onActionExecute = function (termAction) { return __awaiter(_this, void 0, void 0, function () {
            var updateAction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, termAction.actionCallback(this.props.spTermService, this.props.term)];
                    case 1:
                        updateAction = _a.sent();
                        this.props.termActionCallback(updateAction);
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    /**
     * componentWillMount lifecycle hook
     */
    ButtonTermAction.prototype.componentWillMount = function () {
        this.checkForImmediateInvocations();
    };
    /**
     * Check if there are action to immediatly invoke
     */
    ButtonTermAction.prototype.checkForImmediateInvocations = function () {
        var termActions = this.props.termActions;
        for (var _i = 0, termActions_1 = termActions; _i < termActions_1.length; _i++) {
            var action = termActions_1[_i];
            if (action.invokeActionOnRender) {
                this.onActionExecute(action);
            }
        }
    };
    /**
     * Default React render method
     */
    ButtonTermAction.prototype.render = function () {
        var _this = this;
        var _a = this.props, term = _a.term, termActions = _a.termActions;
        // Check if there are actions to show
        var actionsToShow = termActions.filter(function (a) { return !a.hidden; });
        if (actionsToShow && actionsToShow.length === 0) {
            return null;
        }
        return (React.createElement("div", { style: { display: 'flex', alignItems: 'stretch', height: '32px' } }, termActions &&
            termActions.map(function (termAction) {
                var _a = _this.prepareCommandBarButton(termAction), name = _a.name, text = _a.text, iconName = _a.iconName, btnTitle = _a.btnTitle;
                return (termAction.hidden ? (null) : (React.createElement("div", null,
                    React.createElement(Button_1.CommandBarButton, { split: true, onClick: function () { _this.onActionExecute(termAction); }, iconProps: {
                            iconName: iconName || null,
                            style: { display: iconName ? null : "none" }
                        }, text: text, title: btnTitle, name: name, key: term.Id, style: _this.getTermActionActionButtonStyle() }))));
            })));
    };
    return ButtonTermAction;
}(React.Component));
exports.default = ButtonTermAction;

//# sourceMappingURL=ButtonTermAction.js.map
