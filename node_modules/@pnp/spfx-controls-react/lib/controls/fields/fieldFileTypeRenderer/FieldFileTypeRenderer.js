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
var fileTypeIcon_1 = require("../../fileTypeIcon");
var telemetry = require("../../../common/telemetry");
var FieldFileTypeRenderer_module_scss_1 = require("./FieldFileTypeRenderer.module.scss");
/**
 * File Type Renderer.
 * Used for:
 *   - File/Document Type
 */
var FieldFileTypeRenderer = (function (_super) {
    __extends(FieldFileTypeRenderer, _super);
    function FieldFileTypeRenderer(props, state) {
        var _this = _super.call(this, props, state) || this;
        telemetry.track('FieldFileTypeRenderer', {});
        _this.state = {};
        return _this;
    }
    FieldFileTypeRenderer.prototype.render = function () {
        var optionalStyles = {};
        optionalStyles[FieldFileTypeRenderer_module_scss_1.default.folder] = this.props.isFolder;
        return (React.createElement("div", { className: Utilities_1.css(this.props.className, FieldFileTypeRenderer_module_scss_1.default.container, FieldFileTypeRenderer_module_scss_1.default.fabricIcon, optionalStyles), style: this.props.cssProps }, this.props.isFolder ? React.createElement(Icon_1.Icon, { iconName: 'FabricFolderFill' }) : React.createElement(fileTypeIcon_1.FileTypeIcon, { type: fileTypeIcon_1.IconType.font, path: this.props.path })));
    };
    __decorate([
        decorators_1.override
    ], FieldFileTypeRenderer.prototype, "render", null);
    return FieldFileTypeRenderer;
}(React.Component));
exports.FieldFileTypeRenderer = FieldFileTypeRenderer;

//# sourceMappingURL=FieldFileTypeRenderer.js.map
