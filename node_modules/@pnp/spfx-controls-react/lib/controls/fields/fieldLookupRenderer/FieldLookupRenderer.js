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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("@microsoft/decorators");
var React = require("react");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var Dialog_1 = require("office-ui-fabric-react/lib/Dialog");
var Link_1 = require("office-ui-fabric-react/lib/Link");
var Spinner_1 = require("office-ui-fabric-react/lib/Spinner");
var telemetry = require("../../../common/telemetry");
var FieldLookupRenderer_module_scss_1 = require("./FieldLookupRenderer.module.scss");
var IFrameDialog_1 = require("../../iFrameDialog/IFrameDialog");
var Utilities_2 = require("../../../Utilities");
/**
 * Field Lookup Renderer.
 * Used for:
 *   - Lookup, LookupMulti
 */
var FieldLookupRenderer = (function (_super) {
    __extends(FieldLookupRenderer, _super);
    function FieldLookupRenderer(props, state) {
        var _this = _super.call(this, props, state) || this;
        telemetry.track('FieldLookupRenderer', {});
        _this.state = {
            hideDialog: true,
            dispFormUrl: props.dispFormUrl
        };
        return _this;
    }
    FieldLookupRenderer.prototype.render = function () {
        var _this = this;
        var lookupLinks = this.props.lookups.map(function (lookup) {
            return React.createElement(Link_1.Link, { onClick: _this._onClick.bind(_this, lookup), className: FieldLookupRenderer_module_scss_1.default.lookup, style: _this.props.cssProps }, lookup.lookupValue);
        });
        return (React.createElement("div", { style: this.props.cssProps, className: Utilities_1.css(this.props.className) },
            lookupLinks,
            !this.state.hideDialog && this.state.dispFormUrl && React.createElement(IFrameDialog_1.IFrameDialog, { url: this.state.lookupDispFormUrl, iframeOnLoad: this._onIframeLoaded.bind(this), hidden: this.state.hideDialog, onDismiss: this._onDialogDismiss.bind(this), modalProps: {
                    isBlocking: true,
                    containerClassName: FieldLookupRenderer_module_scss_1.default.dialogContainer
                }, dialogContentProps: {
                    type: Dialog_1.DialogType.close,
                    showCloseButton: true
                }, width: '570px', height: '250px' }),
            !this.state.hideDialog && !this.state.dispFormUrl && React.createElement(Dialog_1.Dialog, { onDismiss: this._onDialogDismiss.bind(this), modalProps: {
                    isBlocking: true,
                    containerClassName: FieldLookupRenderer_module_scss_1.default.dialogContainer
                }, dialogContentProps: {
                    type: Dialog_1.DialogType.close,
                    showCloseButton: true
                } },
                React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.large }))));
    };
    FieldLookupRenderer.prototype._onClick = function (lookup) {
        var _this = this;
        if (this.props.onClick) {
            var args = {
                lookup: lookup
            };
            this.props.onClick(args);
            return;
        }
        //
        // showing Display Form in the dialog
        //
        var dispFormUrl = this.state.dispFormUrl;
        if (dispFormUrl) {
            this.setState({
                lookupDispFormUrl: "" + dispFormUrl + (dispFormUrl.indexOf('?') === -1 ? '?' : '&') + "ID=" + lookup.lookupId + "&RootFolder=*&IsDlg=1",
                hideDialog: false
            });
        }
        else if (this.props.fieldId) {
            this.setState({
                hideDialog: false
            });
            Utilities_2.SPHelper.getLookupFieldListDispFormUrl(this.props.fieldId, this.props.context).then(function (dispFormUrlValue) {
                var listDispFormUrl = dispFormUrlValue.toString();
                _this.setState(function (prevState, props) {
                    if (prevState.hideDialog) {
                        return;
                    }
                    return {
                        dispFormUrl: listDispFormUrl,
                        lookupDispFormUrl: listDispFormUrl + "&ID=" + lookup.lookupId + "&RootFolder=*&IsDlg=1"
                    };
                });
            });
        }
    };
    FieldLookupRenderer.prototype._onIframeLoaded = function (iframe) {
        //
        // some additional configuration to beutify content of the iframe
        //
        var iframeWindow = iframe.contentWindow;
        var iframeDocument = iframeWindow.document;
        var s4Workspace = iframeDocument.getElementById('s4-workspace');
        s4Workspace.style.height = iframe.style.height;
        s4Workspace.scrollIntoView();
    };
    FieldLookupRenderer.prototype._onDialogDismiss = function () {
        this.setState({
            hideDialog: true
        });
    };
    __decorate([
        decorators_1.override
    ], FieldLookupRenderer.prototype, "render", null);
    return FieldLookupRenderer;
}(React.Component));
exports.FieldLookupRenderer = FieldLookupRenderer;

//# sourceMappingURL=FieldLookupRenderer.js.map
