import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-property-pane";

import * as strings from "ActionItemSliderWebPartStrings";
import ActionItemSlider from "./components/ActionItemSlider";
import { IActionItemSliderProps } from "./components/IActionItemSliderProps";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { sp } from "@pnp/pnpjs";
import {
  PropertyFieldListPicker,
  PropertyFieldListPickerOrderBy
} from "@pnp/spfx-property-controls/lib/PropertyFieldListPicker";
import { PropertyFieldMultiSelect } from "@pnp/spfx-property-controls/lib/PropertyFieldMultiSelect";

export interface IActionItemSliderWebPartProps {
  description: string;
  lists: any; // Stores the list ID(s)
  multiSelect: string[];
  fieldsFetched: boolean;
  fieldsArray: { key: any; text: any }[];
}

export default class ActionItemSliderWebPart extends BaseClientSideWebPart<
  IActionItemSliderWebPartProps
> {
  public onInit(): Promise<void> {
    return super.onInit().then(_ => {
      // other init code may be present

      sp.setup({
        spfxContext: this.context
      });
    });
  }

  public render(): void {
    const element: React.ReactElement<
      IActionItemSliderProps
    > = React.createElement(ActionItemSlider, {
      description: this.properties.description,
      listIds: this.properties.lists,
      selectedKeys: this.properties.multiSelect
    });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  public getListFields() {
    let options: { key: any; text: any }[];
    const filter2 = `Hidden eq false and CanBeDeleted eq true`;
    sp.web.lists
      .getById(this.properties.lists)
      .fields.select("InternalName", "Title")
      .filter(filter2)
      .get()
      .then(selectedFields => {
        console.log(selectedFields);
        options = selectedFields.map(field => ({
          key: field.InternalName,
          text: field.Title
        }));
        this.properties.fieldsArray = options;
        this.properties.fieldsFetched = true;
        this.onDispose();
        this.context.propertyPane.refresh();
      });
  }

  private onListPickerChange = () => {
    // alert("list picker");
    this.properties.multiSelect = null;

    this.getListFields();
    // this.context.propertyPane.refresh();
  };

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
