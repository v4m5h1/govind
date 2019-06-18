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
var Spinner_1 = require("office-ui-fabric-react/lib/Spinner");
var TaxonomyPicker_1 = require("./TaxonomyPicker");
var Term_1 = require("./Term");
var TaxonomyPicker_module_scss_1 = require("./TaxonomyPicker.module.scss");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var strings = require("ControlStrings");
/**
 * Term Parent component, represents termset or term if anchorId
 */
var TermParent = (function (_super) {
    __extends(TermParent, _super);
    function TermParent(props) {
        var _this = _super.call(this, props) || this;
        /**
         * The term set selection changed
         */
        _this.termSetSelectionChange = function (ev, isChecked) {
            _this.props.termSetSelectedChange(_this.props.termset, isChecked);
        };
        _this._terms = _this.props.termset.Terms;
        _this.state = {
            loaded: true,
            expanded: true
        };
        _this._handleClick = _this._handleClick.bind(_this);
        return _this;
    }
    /**
     * componentWillMount
     */
    TermParent.prototype.componentWillMount = function () {
        var _this = this;
        // fix term depth if anchroid for rendering
        if (this.props.anchorId) {
            var anchorTerm_1 = this._terms.filter(function (t) { return t.Id.toLowerCase() === _this.props.anchorId.toLowerCase(); }).shift();
            if (anchorTerm_1) {
                var anchorDepth = anchorTerm_1.PathDepth;
                this._anchorName = anchorTerm_1.Name;
                var anchorTerms = this._terms.filter(function (t) { return t.PathOfTerm.substring(0, anchorTerm_1.PathOfTerm.length) === anchorTerm_1.PathOfTerm && t.Id !== anchorTerm_1.Id; });
                anchorTerms = anchorTerms.map(function (term) {
                    term.PathDepth = term.PathDepth - anchorTerm_1.PathDepth;
                    return term;
                });
                this._terms = anchorTerms;
            }
        }
    };
    /**
     * Handle the click event: collapse or expand
     */
    TermParent.prototype._handleClick = function () {
        this.setState({
            expanded: !this.state.expanded
        });
    };
    /**
     * Default React render method
     */
    TermParent.prototype.render = function () {
        var _this = this;
        // Specify the inline styling to show or hide the termsets
        var styleProps = {
            display: this.state.expanded ? 'block' : 'none'
        };
        var termElm = React.createElement("div", null);
        // Check if the terms have been loaded
        if (this.state.loaded) {
            if (this._terms.length > 0) {
                var disabledPaths_1 = [];
                termElm = (React.createElement("div", { style: styleProps }, this._terms.map(function (term) {
                    var disabled = false;
                    if (_this.props.disabledTermIds && _this.props.disabledTermIds.length > 0) {
                        // Check if the current term ID exists in the disabled term IDs array
                        disabled = _this.props.disabledTermIds.indexOf(term.Id) !== -1;
                        if (disabled) {
                            // Push paths to the disabled list
                            disabledPaths_1.push(term.PathOfTerm);
                        }
                    }
                    if (_this.props.disableChildrenOfDisabledParents) {
                        // Check if parent is disabled
                        var parentPath = disabledPaths_1.filter(function (p) { return term.PathOfTerm.indexOf(p) !== -1; });
                        disabled = parentPath && parentPath.length > 0;
                    }
                    return React.createElement(Term_1.default, { key: term.Id, term: term, termset: _this.props.termset.Id, activeNodes: _this.props.activeNodes, changedCallback: _this.props.changedCallback, multiSelection: _this.props.multiSelection, disabled: disabled, termActions: _this.props.termActions, updateTaxonomyTree: _this.props.updateTaxonomyTree, spTermService: _this.props.spTermService });
                })));
            }
            else {
                termElm = React.createElement("div", { className: TaxonomyPicker_module_scss_1.default.listItem + " " + TaxonomyPicker_module_scss_1.default.term }, strings.TaxonomyPickerNoTerms);
            }
        }
        else {
            termElm = React.createElement(Spinner_1.Spinner, { type: Spinner_1.SpinnerType.normal });
        }
        return (React.createElement("div", null,
            React.createElement("div", { className: TaxonomyPicker_module_scss_1.default.listItem + " " + TaxonomyPicker_module_scss_1.default.termset + " " + ((!this.props.anchorId && this.props.isTermSetSelectable) ? TaxonomyPicker_module_scss_1.default.termSetSelectable : ""), onClick: this._handleClick },
                React.createElement("img", { src: this.state.expanded ? TaxonomyPicker_1.EXPANDED_IMG : TaxonomyPicker_1.COLLAPSED_IMG, alt: strings.TaxonomyPickerExpandTitle, title: strings.TaxonomyPickerExpandTitle }),
                // Show the termset selection box
                (!this.props.anchorId && this.props.isTermSetSelectable) &&
                    React.createElement(Checkbox_1.Checkbox, { className: TaxonomyPicker_module_scss_1.default.termSetSelector, checked: this.props.activeNodes.filter(function (a) { return a.path === "" && a.key === a.termSet; }).length >= 1, onChange: this.termSetSelectionChange }),
                React.createElement("img", { src: this.props.anchorId ? TaxonomyPicker_1.TERM_IMG : TaxonomyPicker_1.TERMSET_IMG, alt: strings.TaxonomyPickerMenuTermSet, title: strings.TaxonomyPickerMenuTermSet }),
                this.props.anchorId ?
                    this._anchorName :
                    this.props.termset.Name),
            React.createElement("div", { style: styleProps }, termElm)));
    };
    return TermParent;
}(React.Component));
exports.default = TermParent;

//# sourceMappingURL=TermParent.js.map
