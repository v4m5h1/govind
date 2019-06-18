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
var telemetry = require("../../../common/telemetry");
var FieldTaxonomyRenderer_module_scss_1 = require("./FieldTaxonomyRenderer.module.scss");
/**
 * Field Taxonomy Renderer.
 * Used for:
 *   - Taxonomy
 */
var FieldTaxonomyRenderer = (function (_super) {
    __extends(FieldTaxonomyRenderer, _super);
    function FieldTaxonomyRenderer(props, state) {
        var _this = _super.call(this, props, state) || this;
        telemetry.track('FieldTaxonomyRenderer', {});
        _this.state = {};
        return _this;
    }
    FieldTaxonomyRenderer.prototype.render = function () {
        var _this = this;
        var termEls = null;
        if (Array.isArray(this.props.terms)) {
            termEls = this.props.terms.map(function (term) {
                return React.createElement("div", { className: FieldTaxonomyRenderer_module_scss_1.default.term, style: _this.props.cssProps },
                    React.createElement("span", null, term.Label));
            });
        }
        else {
            termEls = React.createElement("div", { className: FieldTaxonomyRenderer_module_scss_1.default.term, style: this.props.cssProps },
                React.createElement("span", null, this.props.terms.Label));
        }
        return (React.createElement("div", { style: this.props.cssProps, className: Utilities_1.css(this.props.className) }, termEls));
    };
    __decorate([
        decorators_1.override
    ], FieldTaxonomyRenderer.prototype, "render", null);
    return FieldTaxonomyRenderer;
}(React.Component));
exports.FieldTaxonomyRenderer = FieldTaxonomyRenderer;

//# sourceMappingURL=FieldTaxonomyRenderer.js.map
