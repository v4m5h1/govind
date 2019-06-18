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
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var omit = require("lodash/omit");
var IFramePanelContent_1 = require("./IFramePanelContent");
var IFramePanel = (function (_super) {
    __extends(IFramePanel, _super);
    function IFramePanel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    /**
     * Default React render
     */
    IFramePanel.prototype.render = function () {
        var _a = this.props, height = _a.height, allowFullScreen = _a.allowFullScreen, iframeOnLoad = _a.iframeOnLoad, allowTransparency = _a.allowTransparency, name = _a.name, sandbox = _a.sandbox, scrolling = _a.scrolling, seamless = _a.seamless;
        return (React.createElement(Panel_1.Panel, __assign({}, omit(this.props, 'className')),
            React.createElement(IFramePanelContent_1.IFramePanelContent, { src: this.props.url, iframeOnLoad: iframeOnLoad, close: this.props.onDismiss, height: height, allowFullScreen: allowFullScreen, allowTransparency: allowTransparency, name: name, sandbox: sandbox, scrolling: scrolling, seamless: seamless })));
    };
    return IFramePanel;
}(React.Component));
exports.IFramePanel = IFramePanel;

//# sourceMappingURL=IFramePanel.js.map
