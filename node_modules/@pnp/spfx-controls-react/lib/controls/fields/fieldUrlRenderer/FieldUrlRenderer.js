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
var telemetry = require("../../../common/telemetry");
var FieldUrlRenderer_module_scss_1 = require("./FieldUrlRenderer.module.scss");
/**
 * Field URL Renderer.
 * Used for:
 *   - URL (Hyperlink, Image)
 */
var FieldUrlRenderer = (function (_super) {
    __extends(FieldUrlRenderer, _super);
    function FieldUrlRenderer(props, state) {
        var _this = _super.call(this, props, state) || this;
        telemetry.track('FieldUrlRenderer', {});
        _this.state = {};
        return _this;
    }
    FieldUrlRenderer.prototype.render = function () {
        var isImageUrl = this.props.isImageUrl;
        if (isImageUrl) {
            return (React.createElement("div", { className: Utilities_1.css(this.props.className, FieldUrlRenderer_module_scss_1.default.image), style: this.props.cssProps, onClick: this._onImgClick.bind(this) },
                React.createElement("img", { src: this.props.url, alt: this.props.text })));
        }
        else {
            return (React.createElement(Link_1.Link, { className: Utilities_1.css(this.props.className, FieldUrlRenderer_module_scss_1.default.link), target: '_blank', href: this.props.url, style: this.props.cssProps }, this.props.text));
        }
    };
    FieldUrlRenderer.prototype._onImgClick = function () {
        window.open(this.props.url, '_blank');
    };
    __decorate([
        decorators_1.override
    ], FieldUrlRenderer.prototype, "render", null);
    return FieldUrlRenderer;
}(React.Component));
exports.FieldUrlRenderer = FieldUrlRenderer;

//# sourceMappingURL=FieldUrlRenderer.js.map
