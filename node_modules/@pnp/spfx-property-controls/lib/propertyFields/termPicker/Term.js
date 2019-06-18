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
var PropertyFieldTermPickerHost_module_scss_1 = require("./PropertyFieldTermPickerHost.module.scss");
/**
 * Term component
 * Renders a selectable term
 */
var Term = (function (_super) {
    __extends(Term, _super);
    function Term(props) {
        var _this = _super.call(this, props) || this;
        // Check if current term is selected
        var active = _this.props.activeNodes.filter(function (item) { return item.key === _this.props.term.Id; });
        _this.state = {
            selected: active.length > 0
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
        this.props.changedCallback(this.props.term, this.props.termGroup, isChecked);
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
                selected: active.length > 0
            };
        }
    };
    /**
     * Get the right class name for the term
     */
    Term.prototype.getClassName = function () {
        if (this.props.term.IsDeprecated) {
            return PropertyFieldTermPickerHost_module_scss_1.default.termDisabled;
        }
        if (!this.props.term.IsAvailableForTagging) {
            return PropertyFieldTermPickerHost_module_scss_1.default.termNoTagging;
        }
        return PropertyFieldTermPickerHost_module_scss_1.default.termEnabled;
    };
    Term.prototype.render = function () {
        var styleProps = {
            marginLeft: (this.props.term.PathDepth * 30) + "px"
        };
        return (React.createElement("div", { className: PropertyFieldTermPickerHost_module_scss_1.default.listItem + " " + PropertyFieldTermPickerHost_module_scss_1.default.term, style: styleProps },
            React.createElement(Checkbox_1.Checkbox, { checked: this.state.selected, disabled: this.props.term.IsDeprecated || !this.props.term.IsAvailableForTagging || this.props.disabled, className: this.getClassName(), label: this.props.term.Name, onChange: this._handleChange })));
    };
    return Term;
}(React.Component));
exports.default = Term;

//# sourceMappingURL=Term.js.map
