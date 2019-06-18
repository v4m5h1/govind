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
var Button_1 = require("office-ui-fabric-react/lib/Button");
var PlaceholderComponent_module_scss_1 = require("./PlaceholderComponent.module.scss");
var telemetry = require("../../common/telemetry");
var Icon_1 = require("office-ui-fabric-react/lib/components/Icon");
/**
 * Placeholder component
 */
var Placeholder = (function (_super) {
    __extends(Placeholder, _super);
    /**
     * Constructor
     */
    function Placeholder(props) {
        var _this = _super.call(this, props) || this;
        _this._crntElm = null;
        /**
         * Execute the onConfigure function
         */
        _this._handleBtnClick = function (event) {
            _this.props.onConfigure();
        };
        /**
         * Set the current zone width
         */
        _this._setZoneWidth = function () {
            _this.setState({
                width: _this._crntElm.clientWidth
            });
        };
        /**
         * Stores the current element
         */
        _this._linkElm = function (e) {
            _this._crntElm = e;
        };
        _this.state = {
            width: null
        };
        telemetry.track('ReactPlaceholder', {
            description: !!props.description,
            iconName: !!props.iconName,
            iconText: !!props.iconText,
            buttonLabel: !!props.buttonLabel,
            onConfigure: !!props.onConfigure,
            contentClassName: !!props.contentClassName
        });
        return _this;
    }
    /**
     * componentDidMount lifecycle hook
     */
    Placeholder.prototype.componentDidMount = function () {
        this._setZoneWidth();
    };
    /**
     * componentDidUpdate lifecycle hook
     * @param prevProps
     * @param prevState
     */
    Placeholder.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._setZoneWidth();
    };
    /**
     * shouldComponentUpdate lifecycle hook
     * @param nextProps
     * @param nextState
     */
    Placeholder.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return this.state.width !== nextState.width || this.props.hideButton !== nextProps.hideButton;
    };
    /**
     * Default React component render method
     */
    Placeholder.prototype.render = function () {
        return (React.createElement("div", { className: PlaceholderComponent_module_scss_1.default.placeholder + " " + (this.props.contentClassName ? this.props.contentClassName : ''), ref: this._linkElm },
            React.createElement("div", { className: PlaceholderComponent_module_scss_1.default.placeholderContainer },
                React.createElement("div", { className: PlaceholderComponent_module_scss_1.default.placeholderHead },
                    React.createElement("div", { className: PlaceholderComponent_module_scss_1.default.placeholderHeadContainer },
                        this.props.iconName && React.createElement(Icon_1.Icon, { iconName: this.props.iconName, className: PlaceholderComponent_module_scss_1.default.placeholderIcon + " ms-fontSize-su ms-Icon" }),
                        React.createElement("span", { className: PlaceholderComponent_module_scss_1.default.placeholderText + " ms-fontWeight-light ms-fontSize-xxl " + ((this.state.width && this.state.width <= 380) ? PlaceholderComponent_module_scss_1.default.hide : "") }, this.props.iconText))),
                React.createElement("div", { className: PlaceholderComponent_module_scss_1.default.placeholderDescription },
                    React.createElement("span", { className: PlaceholderComponent_module_scss_1.default.placeholderDescriptionText }, this.props.description)),
                this.props.children,
                React.createElement("div", { className: PlaceholderComponent_module_scss_1.default.placeholderDescription }, (this.props.buttonLabel && !this.props.hideButton) &&
                    React.createElement(Button_1.PrimaryButton, { text: this.props.buttonLabel, ariaLabel: this.props.buttonLabel, ariaDescription: this.props.description, onClick: this._handleBtnClick })))));
    };
    return Placeholder;
}(React.Component));
exports.Placeholder = Placeholder;

//# sourceMappingURL=PlaceholderComponent.js.map
