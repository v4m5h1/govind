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
var Spinner_1 = require("office-ui-fabric-react/lib/Spinner");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var ISPTermStorePickerService_1 = require("../../services/ISPTermStorePickerService");
var PropertyFieldTermPickerHost_1 = require("./PropertyFieldTermPickerHost");
var Term_1 = require("./Term");
var PropertyFieldTermPickerHost_module_scss_1 = require("./PropertyFieldTermPickerHost.module.scss");
var strings = require("PropertyControlStrings");
/**
 * Term set component
 */
var TermSet = (function (_super) {
    __extends(TermSet, _super);
    function TermSet(props) {
        var _this = _super.call(this, props) || this;
        /**
         * The term set selection changed
         */
        _this.termSetSelectionChange = function (ev, isChecked) {
            var termset = _this.props.termset;
            _this.props.changedCallback({
                Id: ISPTermStorePickerService_1.TermStorePickerServiceHelper.cleanGuid(termset.Id),
                Name: termset.Name,
                PathOfTerm: "",
                _ObjectType_: termset._ObjectType_,
                _ObjectIdentity_: termset._ObjectIdentity_,
                Description: termset.Description,
                IsDeprecated: null,
                IsAvailableForTagging: null,
                IsRoot: null,
                TermSet: termset
            }, _this.props.termGroup, isChecked);
        };
        _this.state = {
            expanded: false,
            loaded: false,
            terms: []
        };
        // Check if the termset has to be automatically opened
        var selectedTermsInSet = _this.props.activeNodes.filter(function (node) { return node.termSet === _this.props.termset.Id; });
        if (selectedTermsInSet.length > 0) {
            _this._autoLoadTerms();
        }
        _this._handleClick = _this._handleClick.bind(_this);
        _this._loadTerms = _this._loadTerms.bind(_this);
        return _this;
    }
    /**
     * Autoload the terms of the term set
     */
    TermSet.prototype._autoLoadTerms = function () {
        this.props.autoExpand();
        this._loadTerms(true);
    };
    /**
     * Handle the click event: collapse or expand
     */
    TermSet.prototype._handleClick = function () {
        this.setState({
            expanded: !this.state.expanded
        });
        if (!this.state.expanded) {
            this._loadTerms();
        }
    };
    /**
     * Load the terms for the current term set
     */
    TermSet.prototype._loadTerms = function (autoExpand) {
        return __awaiter(this, void 0, void 0, function () {
            var terms;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.state.loaded) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.props.termsService.getAllTerms(this.props.termset)];
                    case 1:
                        terms = _a.sent();
                        if (terms !== null) {
                            this.setState({
                                terms: terms,
                                loaded: true,
                                expanded: typeof autoExpand !== 'undefined' ? autoExpand : this.state.expanded
                            });
                        }
                        else {
                            this.setState({
                                terms: [],
                                loaded: true
                            });
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TermSet.prototype.render = function () {
        var _this = this;
        // Specify the inline styling to show or hide the termsets
        var styleProps = {
            display: this.state.expanded ? 'block' : 'none'
        };
        var termElm = React.createElement("div", null);
        // Check if the terms have been loaded
        if (this.state.expanded) {
            if (this.state.loaded) {
                if (this.state.terms.length > 0) {
                    termElm = (React.createElement("div", { style: styleProps }, this.state.terms.map(function (term) {
                        var disabled = false;
                        if (_this.props.disabledTermIds && _this.props.disabledTermIds.length > 0) {
                            // Check if the current term ID exists in the disabled term IDs array
                            disabled = _this.props.disabledTermIds.indexOf(term.Id) !== -1;
                        }
                        return React.createElement(Term_1.default, { key: term.Id, term: term, termset: _this.props.termset.Id, termGroup: _this.props.termGroup, activeNodes: _this.props.activeNodes, changedCallback: _this.props.changedCallback, multiSelection: _this.props.multiSelection, disabled: disabled });
                    })));
                }
                else {
                    termElm = React.createElement("div", { className: PropertyFieldTermPickerHost_module_scss_1.default.listItem + " " + PropertyFieldTermPickerHost_module_scss_1.default.term }, strings.TermPickerNoTerms);
                }
            }
            else {
                termElm = React.createElement(Spinner_1.Spinner, { type: Spinner_1.SpinnerType.normal });
            }
        }
        return (React.createElement("div", null,
            React.createElement("div", { className: PropertyFieldTermPickerHost_module_scss_1.default.listItem + " " + PropertyFieldTermPickerHost_module_scss_1.default.termset + " " + (this.props.isTermSetSelectable ? PropertyFieldTermPickerHost_module_scss_1.default.termSetSelectable : ""), onClick: this._handleClick },
                React.createElement("img", { src: this.state.expanded ? PropertyFieldTermPickerHost_1.EXPANDED_IMG : PropertyFieldTermPickerHost_1.COLLAPSED_IMG, alt: strings.TermPickerExpandTitle, title: strings.TermPickerExpandTitle }),
                // Show the termset selection box
                this.props.isTermSetSelectable &&
                    React.createElement(Checkbox_1.Checkbox, { className: PropertyFieldTermPickerHost_module_scss_1.default.termSetSelector, checked: this.props.activeNodes.filter(function (a) { return a.path === "" && a.termSet.indexOf(a.key) !== -1 && _this.props.termset.Id.indexOf(a.key) !== -1; }).length >= 1, onChange: this.termSetSelectionChange }),
                React.createElement("img", { src: PropertyFieldTermPickerHost_1.TERMSET_IMG, alt: strings.TermPickerMenuTermSet, title: strings.TermPickerMenuTermSet }),
                " ",
                this.props.termset.Name),
            React.createElement("div", { style: styleProps }, termElm)));
    };
    return TermSet;
}(React.Component));
exports.default = TermSet;

//# sourceMappingURL=TermSet.js.map
