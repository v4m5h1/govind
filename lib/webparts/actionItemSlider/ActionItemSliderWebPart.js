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
import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { PropertyPaneTextField } from "@microsoft/sp-property-pane";
import * as strings from "ActionItemSliderWebPartStrings";
import ActionItemSlider from "./components/ActionItemSlider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { sp } from "@pnp/pnpjs";
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from "@pnp/spfx-property-controls/lib/PropertyFieldListPicker";
import { PropertyFieldMultiSelect } from "@pnp/spfx-property-controls/lib/PropertyFieldMultiSelect";
var ActionItemSliderWebPart = /** @class */ (function (_super) {
    __extends(ActionItemSliderWebPart, _super);
    function ActionItemSliderWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onListPickerChange = function () {
            // alert("list picker");
            _this.properties.multiSelect = null;
            _this.getListFields();
            // this.context.propertyPane.refresh();
        };
        return _this;
    }
    ActionItemSliderWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            // other init code may be present
            sp.setup({
                spfxContext: _this.context
            });
        });
    };
    ActionItemSliderWebPart.prototype.render = function () {
        var element = React.createElement(ActionItemSlider, {
            description: this.properties.description,
            listIds: this.properties.lists,
            selectedKeys: this.properties.multiSelect
        });
        ReactDom.render(element, this.domElement);
    };
    ActionItemSliderWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(ActionItemSliderWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    ActionItemSliderWebPart.prototype.getListFields = function () {
        var _this = this;
        var options;
        var filter2 = "Hidden eq false and CanBeDeleted eq true";
        sp.web.lists
            .getById(this.properties.lists)
            .fields.select("InternalName", "Title")
            .filter(filter2)
            .get()
            .then(function (selectedFields) {
            console.log(selectedFields);
            options = selectedFields.map(function (field) { return ({
                key: field.InternalName,
                text: field.Title
            }); });
            _this.properties.fieldsArray = options;
            _this.properties.fieldsFetched = true;
            _this.onDispose();
            _this.context.propertyPane.refresh();
        });
    };
    ActionItemSliderWebPart.prototype.getPropertyPaneConfiguration = function () {
        if (!this.properties.fieldsFetched) {
            this.getListFields();
        }
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField("description", {
                                    label: strings.DescriptionFieldLabel
                                }),
                                PropertyFieldListPicker("lists", {
                                    label: "Select a list",
                                    selectedList: this.properties.lists,
                                    includeHidden: false,
                                    orderBy: PropertyFieldListPickerOrderBy.Title,
                                    disabled: false,
                                    // onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    onPropertyChange: this.onListPickerChange,
                                    properties: this.properties,
                                    context: this.context,
                                    onGetErrorMessage: null,
                                    deferredValidationTime: 0,
                                    key: "listPickerFieldId"
                                }),
                                PropertyFieldMultiSelect("multiSelect", {
                                    key: "multiSelect",
                                    label: "Multi select field",
                                    options: this.properties.fieldsArray,
                                    selectedKeys: this.properties.multiSelect
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ActionItemSliderWebPart;
}(BaseClientSideWebPart));
export default ActionItemSliderWebPart;
//# sourceMappingURL=ActionItemSliderWebPart.js.map