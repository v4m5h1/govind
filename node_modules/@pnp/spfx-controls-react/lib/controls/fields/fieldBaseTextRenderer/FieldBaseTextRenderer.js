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
var FieldBaseTextRenderer_module_scss_1 = require("./FieldBaseTextRenderer.module.scss");
var telemetry = require("../../../common/telemetry");
/**
 * Base renderer. Used to render text.
 */
var FieldBaseTextRenderer = (function (_super) {
    __extends(FieldBaseTextRenderer, _super);
    function FieldBaseTextRenderer(props, state) {
        var _this = _super.call(this, props, state) || this;
        telemetry.track('FieldBaseTextRenderer', {});
        _this.state = {};
        return _this;
    }
    FieldBaseTextRenderer.prototype.render = function () {
        var text = this.props.text || ' ';
        return (React.createElement("div", { className: Utilities_1.css(this.props.className, FieldBaseTextRenderer_module_scss_1.default.baseText), style: this.props.cssProps },
            this.props.noTextRender ? null : React.createElement("span", null, text),
            this.props.children));
    };
    __decorate([
        decorators_1.override
    ], FieldBaseTextRenderer.prototype, "render", null);
    return FieldBaseTextRenderer;
}(React.Component));
exports.FieldBaseTextRenderer = FieldBaseTextRenderer;

//# sourceMappingURL=FieldBaseTextRenderer.js.map
