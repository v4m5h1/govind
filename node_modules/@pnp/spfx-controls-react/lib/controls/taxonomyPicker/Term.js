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
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var TaxonomyPicker_module_scss_1 = require("./TaxonomyPicker.module.scss");
var TermActionsControl_1 = require("./termActions/TermActionsControl");
var termActions_1 = require("./termActions");
/**
 * Term component
 * Renders a selectable term
 */
var Term = (function (_super) {
    __extends(Term, _super);
    function Term(props) {
        var _this = _super.call(this, props) || this;
        _this.termActionCallback = function (updateAction) {
            if (updateAction == null) {
                return;
            }
            if (updateAction.updateActionType === termActions_1.UpdateType.updateTermLabel) {
                _this.setState({
                    termLabel: updateAction.value
                });
            }
            else {
                _this.props.updateTaxonomyTree();
            }
        };
        // Check if current term is selected
        var active = _this.props.activeNodes.filter(function (item) { return item.key === _this.props.term.Id; });
        _this.state = {
            selected: active.length > 0,
            termLabel: _this.props.term.Name
        };
        _this._handleChange = _this._handleChange.bind(_this);
        return _this;
    }
    /**
     * Handle the checkbox change trigger
     */
    Term.prototype._handleChange = function (ev, isChecked) {
        this.setState({
            selected: isChecked
        });
        this.props.changedCallback(this.props.term, isChecked);
    };
    /**
     * Lifecycle event hook when component retrieves new properties
     * @param nextProps
     * @param nextContext
     */
    Term.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        var _this = this;
        // If multi-selection is turned off, only a single term can be selected
        if (!this.props.multiSelection) {
            var active = nextProps.activeNodes.filter(function (item) { return item.key === _this.props.term.Id; });
            this.state = {
                selected: active.length > 0,
                termLabel: this.state.termLabel
            };
        }
    };
    /**
     * Get the right class name for the term
     */
    Term.prototype.getClassName = function () {
        if (this.props.term.IsDeprecated) {
            return TaxonomyPicker_module_scss_1.default.termDisabled;
        }
        if (!this.props.term.IsAvailableForTagging) {
            return TaxonomyPicker_module_scss_1.default.termNoTagging;
        }
        return TaxonomyPicker_module_scss_1.default.termEnabled;
    };
    /**
     * Default React render
     */
    Term.prototype.render = function () {
        var styleProps = {
            marginLeft: (this.props.term.PathDepth * 30) + "px"
        };
        var checkBoxStyle = {
            display: "inline-flex"
        };
        return (React.createElement("div", null,
            React.createElement("div", { className: TaxonomyPicker_module_scss_1.default.listItem + " " + TaxonomyPicker_module_scss_1.default.term, style: styleProps },
                React.createElement("div", null,
                    React.createElement(Checkbox_1.Checkbox, { checked: this.state.selected, style: checkBoxStyle, disabled: this.props.term.IsDeprecated || !this.props.term.IsAvailableForTagging || this.props.disabled, className: this.getClassName(), label: this.state.termLabel, onChange: this._handleChange })),
                this.props.termActions &&
                    React.createElement(TermActionsControl_1.default, { term: this.props.term, termActions: this.props.termActions, termActionCallback: this.termActionCallback, spTermService: this.props.spTermService }))));
    };
    return Term;
}(React.Component));
exports.default = Term;

//# sourceMappingURL=Term.js.map
