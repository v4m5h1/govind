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
var FieldTextRenderer_module_scss_1 = require("./FieldTextRenderer.module.scss");
var FieldBaseTextRenderer_1 = require("../fieldBaseTextRenderer/FieldBaseTextRenderer");
var telemetry = require("../../../common/telemetry");
/**
 * Field Text Renderer.
 * Used for:
 *   - Single line of text
 *   - Multiline text
 *   - Choice
 *   - Checkbox
 *   - Number
 *   - Currency
 */
var FieldTextRenderer = (function (_super) {
    __extends(FieldTextRenderer, _super);
    function FieldTextRenderer(props, state) {
        var _this = _super.call(this, props, state) || this;
        telemetry.track('FieldTextRenderer', {});
        _this.state = {};
        return _this;
    }
    FieldTextRenderer.prototype.render = function () {
        var isSafeForInnerHTML = this.props.isSafeForInnerHTML;
        var isTruncatedClassNameObj = {};
        isTruncatedClassNameObj[FieldTextRenderer_module_scss_1.default.isTruncated] = this.props.isTruncated;
        var text = this.props.text;
        if (isSafeForInnerHTML && this.props.isTruncated) {
            text += "<div class=" + FieldTextRenderer_module_scss_1.default.truncate + " style=\"background: linear-gradient(to bottom, transparent, " + ((this.props.cssProps && (this.props.cssProps.background || this.props.cssProps.backgroundColor)) || '#ffffff') + " 100%)\"></div>";
        }
        if (isSafeForInnerHTML) {
            return (React.createElement("div", { className: Utilities_1.css(this.props.className, FieldTextRenderer_module_scss_1.default.fieldRendererText, isTruncatedClassNameObj), style: this.props.cssProps, dangerouslySetInnerHTML: { __html: text } }));
        }
        else {
            return (React.createElement(FieldBaseTextRenderer_1.FieldBaseTextRenderer, { className: Utilities_1.css(this.props.className, FieldTextRenderer_module_scss_1.default.fieldRendererText), cssProps: this.props.cssProps, text: this.props.text }));
        }
    };
    __decorate([
        decorators_1.override
    ], FieldTextRenderer.prototype, "render", null);
    return FieldTextRenderer;
}(React.Component));
exports.FieldTextRenderer = FieldTextRenderer;

//# sourceMappingURL=FieldTextRenderer.js.map
