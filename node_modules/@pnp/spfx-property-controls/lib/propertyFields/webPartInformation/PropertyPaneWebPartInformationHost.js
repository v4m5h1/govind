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
var strings = require("PropertyControlStrings");
var telemetry = require("../../common/telemetry");
var PropertyPaneWebPartInformationHost = (function (_super) {
    __extends(PropertyPaneWebPartInformationHost, _super);
    function PropertyPaneWebPartInformationHost(props) {
        var _this = _super.call(this, props) || this;
        telemetry.track('PropertyWebPartInformation', {});
        return _this;
    }
    PropertyPaneWebPartInformationHost.prototype.render = function () {
        var iframeElm = null;
        if (this.props.videoProperties && this.props.videoProperties.embedLink !== "") {
            var linkProperties = {};
            linkProperties["src"] = this.props.videoProperties.embedLink;
            if (this.props.videoProperties.height) {
                linkProperties["height"] = this.props.videoProperties.height;
            }
            if (this.props.videoProperties.width) {
                linkProperties["width"] = this.props.videoProperties.width;
            }
            for (var prop in this.props.videoProperties.properties) {
                linkProperties["prop"] = this.props.videoProperties[prop];
            }
            iframeElm = React.createElement("iframe", __assign({}, linkProperties));
        }
        return (React.createElement("div", null,
            React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.description } }),
            this.props.moreInfoLink && (React.createElement("div", null,
                React.createElement("a", { href: this.props.moreInfoLink, target: this.props.moreInfoLinkTarget }, strings.MoreInfoLabel))),
            iframeElm));
    };
    return PropertyPaneWebPartInformationHost;
}(React.Component));
exports.default = PropertyPaneWebPartInformationHost;

//# sourceMappingURL=PropertyPaneWebPartInformationHost.js.map
