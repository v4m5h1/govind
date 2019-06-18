"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var PropertyPaneWebPartInformationHost_1 = require("./PropertyPaneWebPartInformationHost");
var PropertyPaneWebPartInformationBuilder = (function () {
    function PropertyPaneWebPartInformationBuilder(_properties) {
        this.type = sp_webpart_base_1.PropertyPaneFieldType.Custom;
        this.properties = {
            key: _properties.key,
            moreInfoLink: _properties.moreInfoLink,
            moreInfoLinkTarget: _properties.moreInfoLinkTarget !== undefined ? _properties.moreInfoLinkTarget : "_blank",
            videoProperties: _properties.videoProperties,
            description: _properties.description,
            onRender: this.onRender.bind(this)
        };
    }
    PropertyPaneWebPartInformationBuilder.prototype.render = function () {
        if (!this.elem) {
            return;
        }
        this.onRender(this.elem);
    };
    PropertyPaneWebPartInformationBuilder.prototype.onRender = function (elem, ctx, changeCallback) {
        if (!this.elem) {
            this.elem = elem;
        }
        var element = React.createElement(PropertyPaneWebPartInformationHost_1.default, {
            moreInfoLink: this.properties.moreInfoLink,
            moreInfoLinkTarget: this.properties.moreInfoLinkTarget,
            description: this.properties.description,
            videoProperties: this.properties.videoProperties
        });
        ReactDom.render(element, elem);
    };
    return PropertyPaneWebPartInformationBuilder;
}());
function PropertyPaneWebPartInformation(properties) {
    return new PropertyPaneWebPartInformationBuilder(properties);
}
exports.PropertyPaneWebPartInformation = PropertyPaneWebPartInformation;

//# sourceMappingURL=PropertyPaneWebPartInformation.js.map
