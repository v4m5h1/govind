"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var PropertyPanePropertyEditorHost_1 = require("./PropertyPanePropertyEditorHost");
var PropertyPanePropertyEditorBuilder = (function () {
    function PropertyPanePropertyEditorBuilder(_properties) {
        //Properties defined by IPropertyPaneField
        this.type = sp_webpart_base_1.PropertyPaneFieldType.Custom;
        this.properties = {
            key: _properties.key,
            webpart: _properties.webpart,
            onRender: this.onRender.bind(this)
        };
    }
    PropertyPanePropertyEditorBuilder.prototype.render = function () {
        if (!this.elem) {
            return;
        }
        this.onRender(this.elem);
    };
    PropertyPanePropertyEditorBuilder.prototype.onRender = function (elem, ctx, changeCallback) {
        if (!this.elem) {
            this.elem = elem;
        }
        var element = React.createElement(PropertyPanePropertyEditorHost_1.default, {
            webpart: this.properties.webpart
        });
        ReactDom.render(element, elem);
    };
    return PropertyPanePropertyEditorBuilder;
}());
function PropertyPanePropertyEditor(properties) {
    return new PropertyPanePropertyEditorBuilder(properties);
}
exports.PropertyPanePropertyEditor = PropertyPanePropertyEditor;

//# sourceMappingURL=PropertyPanePropertyEditor.js.map
