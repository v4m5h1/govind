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
var Link_1 = require("office-ui-fabric-react/lib/Link");
var FieldBaseTextRenderer_1 = require("../fieldBaseTextRenderer/FieldBaseTextRenderer");
var telemetry = require("../../../common/telemetry");
/**
 * Field Title Renderer.
 * Used for:
 *   - Title
 */
var FieldTitleRenderer = (function (_super) {
    __extends(FieldTitleRenderer, _super);
    function FieldTitleRenderer(props, state) {
        var _this = _super.call(this, props, state) || this;
        telemetry.track('FieldTitleRenderer', {});
        _this.state = {};
        return _this;
    }
    FieldTitleRenderer.prototype.render = function () {
        var isLink = this.props.isLink;
        if (isLink) {
            return (React.createElement(Link_1.Link, { onClick: this._onClick.bind(this), className: Utilities_1.css(this.props.className), style: this.props.cssProps }, this.props.text));
        }
        else {
            return (React.createElement(FieldBaseTextRenderer_1.FieldBaseTextRenderer, { className: this.props.className, cssProps: this.props.cssProps, text: this.props.text }));
        }
    };
    FieldTitleRenderer.prototype._onClick = function () {
        if (this.props.onClick) {
            var args = this.props;
            this.props.onClick(args);
            return;
        }
        var url = this.props.baseUrl + "/_layouts/15/listform.aspx?PageType=4&ListId=" + this.props.listId + "&ID=" + this.props.id;
        location.href = url;
    };
    __decorate([
        decorators_1.override
    ], FieldTitleRenderer.prototype, "render", null);
    return FieldTitleRenderer;
}(React.Component));
exports.FieldTitleRenderer = FieldTitleRenderer;

//# sourceMappingURL=FieldTitleRenderer.js.map
