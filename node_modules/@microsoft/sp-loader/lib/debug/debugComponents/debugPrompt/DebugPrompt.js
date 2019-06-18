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
import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { css } from '@uifabric/utilities/lib/css';
import { Text } from '@microsoft/sp-core-library';
import strings from './DebugPrompt.resx';
import debugStyles from './../debugComponents.module.scss';
import styles from './DebugPrompt.module.scss';
var DebugPrompt =  (function (_super) {
    __extends(DebugPrompt, _super);
    function DebugPrompt(props) {
        var _this = _super.call(this, props) || this;
        _this._calloutTarget = undefined;
        _this.state = {
            showDialog: true,
            showCallout: false,
            dismissed: false
        };
        return _this;
    }
    DebugPrompt.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () { return _this.setState({
            showCallout: _this.state.showDialog 
        }); }, 5000); 
    };
    DebugPrompt.prototype.render = function () {
        var _this = this;
        var _a;
        var callback = function (allow) {
            setTimeout(function () { return _this.setState({ dismissed: true }); }, 200);
            _this.setState({
                showCallout: false,
                showDialog: false
            });
            _this.props.callback(allow);
        };
        return !this.state.dismissed
            ? (React.createElement("div", { role: 'dialog', "data-automation-id": 'debugManifestPromptDialog', "aria-labelledby": 'manifestWarningLabel' },
                React.createElement(Dialog, { dialogContentProps: {
                        type: DialogType.largeHeader,
                        title: this.props.title
                    }, hidden: !this.state.showDialog, modalProps: {
                        isBlocking: true,
                        containerClassName: debugStyles.dialogContainer
                    } },
                    React.createElement("p", { className: styles.warningText }, strings.debugManifestLoadingWarning),
                    React.createElement("p", { className: styles.warningText }, Text.format(strings.debugManifestLoadingWarning2, strings.debugManifestLoadingCancel)),
                    React.createElement(DialogFooter, null,
                        React.createElement(DefaultButton, { "data-automation-id": 'debugManifestConfirmButton', onClick: function () { return callback(true); } }, strings.debugManifestLoadingConfirm),
                        React.createElement(PrimaryButton, { "data-automation-id": 'debugManifestCancelButton', onClick: function () { return callback(false); } },
                            React.createElement("div", { ref: function (calloutTarget) { return _this._calloutTarget = calloutTarget || _this._calloutTarget; } }, strings.debugManifestLoadingCancel)))),
                React.createElement(Callout, { className: css(styles.callout, (_a = {}, _a[styles.calloutFadeIn] = !!this.state.showCallout, _a)), target: this._calloutTarget, directionalHint: DirectionalHint.bottomCenter, gapSpace: 10 },
                    React.createElement("div", { className: styles.calloutText }, strings.debugManifestLoadingCalloutText))))
            : null; 
    };
    return DebugPrompt;
}(React.Component));
export default DebugPrompt;
