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
var ITermsActions_1 = require("./ITermsActions");
var DropdownTermAction_1 = require("./DropdownTermAction");
var ButtonTermAction_1 = require("./ButtonTermAction");
var TermActionsControl = (function (_super) {
    __extends(TermActionsControl, _super);
    function TermActionsControl(props) {
        var _this = _super.call(this, props) || this;
        var termActions = _this.props.termActions;
        var displayMode = termActions.termActionsDisplayMode ? termActions.termActionsDisplayMode : ITermsActions_1.TermActionsDisplayMode.buttons;
        var displayStyle = termActions.termActionsDisplayStyle ? termActions.termActionsDisplayStyle : ITermsActions_1.TermActionsDisplayStyle.text;
        _this.state = {
            availableActions: [],
            displayMode: displayMode,
            displayStyle: displayStyle
        };
        return _this;
    }
    /**
     * componentWillMount lifecycle hook
     */
    TermActionsControl.prototype.componentWillMount = function () {
        this.getAvailableActions();
    };
    /**
     * Get the available term actions
     */
    TermActionsControl.prototype.getAvailableActions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, term, termActions, availableActions, _i, _b, action, available;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, term = _a.term, termActions = _a.termActions;
                        availableActions = [];
                        if (!termActions.actions) return [3 /*break*/, 4];
                        _i = 0, _b = termActions.actions;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _b.length)) return [3 /*break*/, 4];
                        action = _b[_i];
                        return [4 /*yield*/, action.applyToTerm(term)];
                    case 2:
                        available = _c.sent();
                        if (available) {
                            availableActions.push(action);
                        }
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.setState({
                            availableActions: availableActions
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Default React render method
     */
    TermActionsControl.prototype.render = function () {
        var term = this.props.term;
        var _a = this.state, displayStyle = _a.displayStyle, displayMode = _a.displayMode, availableActions = _a.availableActions;
        if (!availableActions || availableActions.length <= 0 || !term) {
            return null;
        }
        return (React.createElement("div", null, displayMode == ITermsActions_1.TermActionsDisplayMode.dropdown ?
            React.createElement(DropdownTermAction_1.DropdownTermAction, { key: "DdAction-" + term.Id, termActions: availableActions, term: term, displayStyle: displayStyle, termActionCallback: this.props.termActionCallback, spTermService: this.props.spTermService })
            :
                React.createElement(ButtonTermAction_1.default, { key: "BtnAction-" + term.Id, termActions: availableActions, term: term, displayStyle: displayStyle, termActionCallback: this.props.termActionCallback, spTermService: this.props.spTermService })));
    };
    return TermActionsControl;
}(React.Component));
exports.default = TermActionsControl;

//# sourceMappingURL=TermActionsControl.js.map
