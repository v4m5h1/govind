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
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var PropertyFieldCodeEditorHost_module_scss_1 = require("./PropertyFieldCodeEditorHost.module.scss");
var FieldErrorMessage_1 = require("../errorMessage/FieldErrorMessage");
var telemetry = require("../../common/telemetry");
var strings = require("PropertyControlStrings");
var react_ace_1 = require("react-ace");
require("brace/mode/json");
require("brace/mode/javascript");
require("brace/mode/sass");
require("brace/mode/typescript");
require("brace/mode/html");
require("brace/mode/handlebars");
require("brace/mode/xml");
require("brace/theme/monokai");
/**
 * Renders the controls for PropertyFieldCodeEditor component
 */
var PropertyFieldCodeEditorHost = (function (_super) {
    __extends(PropertyFieldCodeEditorHost, _super);
    /**
     * Constructor method
     */
    function PropertyFieldCodeEditorHost(props) {
        var _this = _super.call(this, props) || this;
        _this.cancel = true;
        telemetry.track('PropertyFieldCodeEditor', {
            language: props.language,
            disabled: props.disabled
        });
        _this.state = {
            code: typeof _this.props.initialValue !== 'undefined' ? _this.props.initialValue : '',
            loaded: false,
            openPanel: false,
            errorMessage: ''
        };
        _this.onOpenPanel = _this.onOpenPanel.bind(_this);
        _this.onClosePanel = _this.onClosePanel.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        _this.onSave = _this.onSave.bind(_this);
        _this.async = new Utilities_1.Async(_this);
        return _this;
    }
    /**
     * componentWillUpdate lifecycle hook
     *
     * @param nextProps
     * @param nextState
     */
    PropertyFieldCodeEditorHost.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (nextProps.initialValue !== this.props.initialValue) {
            this.setState({
                code: typeof nextProps.initialValue !== 'undefined' ? nextProps.initialValue : ''
            });
        }
    };
    /**
     * Open the right Panel
     */
    PropertyFieldCodeEditorHost.prototype.onOpenPanel = function () {
        if (this.props.disabled) {
            return;
        }
        // Store the current code value
        this.previousValue = this.state.code;
        this.cancel = true;
        this.setState({
            openPanel: true,
            loaded: false
        });
    };
    /**
     * Close the panel
     */
    PropertyFieldCodeEditorHost.prototype.onClosePanel = function () {
        var _this = this;
        this.setState(function (crntState) {
            var newState = {
                openPanel: false,
                loaded: false
            };
            // Check if the property has to be reset
            if (_this.cancel) {
                newState.code = _this.previousValue;
            }
            return newState;
        });
    };
    /**
     * Called when the component will unmount
     */
    PropertyFieldCodeEditorHost.prototype.componentWillUnmount = function () {
        if (typeof this.async !== 'undefined') {
            this.async.dispose();
        }
    };
    /**
     * Called when the save button  gets clicked
     */
    PropertyFieldCodeEditorHost.prototype.onSave = function () {
        this.cancel = false;
        this.props.properties[this.props.targetProperty] = this.state.code;
        this.props.onPropertyChange(this.props.targetProperty, this.props.initialValue, this.state.code);
        // Trigger the apply button
        if (typeof this.props.onChange !== 'undefined' && this.props.onChange !== null) {
            this.props.onChange(this.props.targetProperty, this.state.code);
        }
        this.setState(function (current) { return (__assign({}, current, { openPanel: false })); });
    };
    /**
     * Called when the code gets changed
     */
    PropertyFieldCodeEditorHost.prototype.onChange = function (newValue, event) {
        this.setState(function (current) { return (__assign({}, current, { code: newValue })); });
    };
    /**
     * Renders the SPListpicker controls with Office UI  Fabric
     */
    PropertyFieldCodeEditorHost.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            this.props.label && React.createElement(Label_1.Label, null, this.props.label),
            React.createElement("table", { className: PropertyFieldCodeEditorHost_module_scss_1.default.codeFieldTable },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement(TextField_1.TextField, { disabled: this.props.disabled, onChanged: null, readOnly: true, value: this.state.code, onClick: this.onOpenPanel })),
                        React.createElement("td", { className: PropertyFieldCodeEditorHost_module_scss_1.default.codeFieldRow },
                            React.createElement(Button_1.IconButton, { disabled: this.props.disabled, iconProps: { iconName: 'Code' }, onClick: this.onOpenPanel }))))),
            React.createElement(FieldErrorMessage_1.default, { errorMessage: this.state.errorMessage }),
            React.createElement(Panel_1.Panel, { isOpen: this.state.openPanel, hasCloseButton: true, onDismiss: this.onClosePanel, isLightDismiss: true, type: Panel_1.PanelType.medium, headerText: this.props.panelTitle, onRenderFooterContent: function () { return (React.createElement("div", { className: PropertyFieldCodeEditorHost_module_scss_1.default.actions },
                    React.createElement(Button_1.PrimaryButton, { iconProps: { iconName: 'Save' }, text: strings.SaveButtonLabel, value: strings.SaveButtonLabel, onClick: _this.onSave }),
                    React.createElement(Button_1.DefaultButton, { iconProps: { iconName: 'Cancel' }, text: strings.CancelButtonLabel, value: strings.CancelButtonLabel, onClick: _this.onClosePanel }))); } },
                React.createElement(react_ace_1.default, { mode: this.props.language, theme: "monokai", onChange: this.onChange, value: this.state.code, name: "code-" + this.props.targetProperty, editorProps: { $blockScrolling: true } }))));
    };
    return PropertyFieldCodeEditorHost;
}(React.Component));
exports.default = PropertyFieldCodeEditorHost;

//# sourceMappingURL=PropertyFieldCodeEditorHost.js.map
