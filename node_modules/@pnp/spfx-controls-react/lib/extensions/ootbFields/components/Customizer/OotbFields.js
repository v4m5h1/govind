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
var sp_core_library_1 = require("@microsoft/sp-core-library");
var decorators_1 = require("@microsoft/decorators");
var React = require("react");
var OotbFields_module_scss_1 = require("./OotbFields.module.scss");
var FieldRendererHelper_1 = require("../../../../common/utilities/FieldRendererHelper");
var LOG_SOURCE = 'OotbFields';
/**
 * Field Customizer control to test fields' controls
 */
var OotbFields = (function (_super) {
    __extends(OotbFields, _super);
    function OotbFields(props, state) {
        var _this = _super.call(this, props, state) || this;
        _this.state = {};
        return _this;
    }
    OotbFields.prototype.componentWillMount = function () {
        var _this = this;
        FieldRendererHelper_1.FieldRendererHelper.getFieldRenderer(this.props.value, {
            className: this.props.className,
            cssProps: this.props.cssProps
        }, this.props.listItem, this.props.context).then(function (fieldRenderer) {
            _this.setState({
                fieldRenderer: fieldRenderer
            });
        });
    };
    OotbFields.prototype.componentDidMount = function () {
        sp_core_library_1.Log.info(LOG_SOURCE, 'React Element: OotbFields mounted');
    };
    OotbFields.prototype.componentWillUnmount = function () {
        sp_core_library_1.Log.info(LOG_SOURCE, 'React Element: OotbFields unmounted');
    };
    OotbFields.prototype.render = function () {
        return (React.createElement("div", { className: OotbFields_module_scss_1.default.cell }, this.state.fieldRenderer));
    };
    __decorate([
        decorators_1.override
    ], OotbFields.prototype, "componentWillMount", null);
    __decorate([
        decorators_1.override
    ], OotbFields.prototype, "componentDidMount", null);
    __decorate([
        decorators_1.override
    ], OotbFields.prototype, "componentWillUnmount", null);
    __decorate([
        decorators_1.override
    ], OotbFields.prototype, "render", null);
    return OotbFields;
}(React.Component));
exports.default = OotbFields;

//# sourceMappingURL=OotbFields.js.map
