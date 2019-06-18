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
var Icon_1 = require("office-ui-fabric-react/lib/Icon");
var telemetry = require("../../../common/telemetry");
var FieldAttachmentsRenderer_module_scss_1 = require("./FieldAttachmentsRenderer.module.scss");
/**
 * Attachments Renderer.
 * Used for:
 *   - Attachments
 */
var FieldAttachmentsRenderer = (function (_super) {
    __extends(FieldAttachmentsRenderer, _super);
    function FieldAttachmentsRenderer(props, state) {
        var _this = _super.call(this, props, state) || this;
        telemetry.track('FieldAttachmentsRenderer', {});
        _this.state = {};
        return _this;
    }
    FieldAttachmentsRenderer.prototype.render = function () {
        return (React.createElement("div", { className: Utilities_1.css(this.props.className, FieldAttachmentsRenderer_module_scss_1.default.container, FieldAttachmentsRenderer_module_scss_1.default.fabricIcon), style: this.props.cssProps }, this.props.count && React.createElement(Icon_1.Icon, { iconName: 'Attach' })));
    };
    __decorate([
        decorators_1.override
    ], FieldAttachmentsRenderer.prototype, "render", null);
    return FieldAttachmentsRenderer;
}(React.Component));
exports.FieldAttachmentsRenderer = FieldAttachmentsRenderer;

//# sourceMappingURL=FieldAttachmentsRenderer.js.map
