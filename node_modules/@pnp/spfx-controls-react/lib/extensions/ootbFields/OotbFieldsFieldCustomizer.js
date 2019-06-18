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
var React = require("react");
var ReactDOM = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var decorators_1 = require("@microsoft/decorators");
var sp_listview_extensibility_1 = require("@microsoft/sp-listview-extensibility");
var OotbFields_1 = require("./components/Customizer/OotbFields");
var SPHelper_1 = require("../../common/utilities/SPHelper");
var es6_promise_1 = require("es6-promise");
var GeneralHelper_1 = require("../../common/utilities/GeneralHelper");
var LOG_SOURCE = 'OotbFieldsFieldCustomizer';
var OotbFieldsFieldCustomizer = (function (_super) {
    __extends(OotbFieldsFieldCustomizer, _super);
    function OotbFieldsFieldCustomizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._shouldRenderUndefiend = false;
        return _this;
    }
    OotbFieldsFieldCustomizer.prototype.onInit = function () {
        // Add your custom initialization to this method.  The framework will wait
        // for the returned promise to resolve before firing any BaseFieldCustomizer events.
        sp_core_library_1.Log.info(LOG_SOURCE, 'Activated OotbFieldsFieldCustomizer with properties:');
        if (this.context.field.fieldType === 'Computed' && this.context.field.internalName === 'DocIcon') {
            this._shouldRenderUndefiend = true;
        }
        return es6_promise_1.Promise.resolve();
    };
    OotbFieldsFieldCustomizer.prototype.onRenderCell = function (event) {
        var _this = this;
        if (!this._shouldRenderUndefiend && !GeneralHelper_1.GeneralHelper.isDefined(event.fieldValue)) {
            return;
        }
        var fieldName = SPHelper_1.SPHelper.getStoredFieldName(this.context.field.internalName);
        SPHelper_1.SPHelper.getFieldText(event.fieldValue, event.listItem, this.context).then(function (text) {
            var ootbFields = React.createElement(OotbFields_1.default, {
                text: text,
                value: event.fieldValue,
                listItem: event.listItem,
                fieldName: fieldName,
                context: _this.context,
                //cssProps: { backgroundColor: '#f00' },
                className: 'fake-class'
            });
            ReactDOM.render(ootbFields, event.domElement);
        });
    };
    OotbFieldsFieldCustomizer.prototype.onDisposeCell = function (event) {
        // This method should be used to free any resources that were allocated during rendering.
        // For example, if your onRenderCell() called ReactDOM.render(), then you should
        // call ReactDOM.unmountComponentAtNode() here.
        ReactDOM.unmountComponentAtNode(event.domElement);
        _super.prototype.onDisposeCell.call(this, event);
    };
    __decorate([
        decorators_1.override
    ], OotbFieldsFieldCustomizer.prototype, "onInit", null);
    __decorate([
        decorators_1.override
    ], OotbFieldsFieldCustomizer.prototype, "onRenderCell", null);
    __decorate([
        decorators_1.override
    ], OotbFieldsFieldCustomizer.prototype, "onDisposeCell", null);
    return OotbFieldsFieldCustomizer;
}(sp_listview_extensibility_1.BaseFieldCustomizer));
exports.default = OotbFieldsFieldCustomizer;
// test querystring ?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&fieldCustomizers={"FieldName":{"id":"57ebd944-98ed-43f9-b722-e959d6dac6ad","properties":{}}}

//# sourceMappingURL=OotbFieldsFieldCustomizer.js.map
