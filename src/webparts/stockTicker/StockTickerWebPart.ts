import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-property-pane";

import * as strings from "StockTickerWebPartStrings";
import StockTicker from "./components/StockTicker";
import { IStockTickerProps } from "./components/IStockTickerProps";
import { StorageEntity, sp } from "@pnp/sp";

export interface IStockTickerWebPartProps {
  stockUrl: string;
}

export default class StockTickerWebPart extends BaseClientSideWebPart<
  IStockTickerWebPartProps
> {
  public async onInit(): Promise<void> {
    return super.onInit().then(async _ => {
      // init sp pnpjs library
      sp.setup({
        spfxContext: this.context
      });
    });
  }

  public async render(): Promise<void> {
    // // get the API Key value
    // const apiKey: string = await this.getApiKey();
    const element: React.ReactElement<IStockTickerProps> = React.createElement(
      StockTicker,
      {
        stockUrl: this.properties.stockUrl,
        httpClient: this.context.httpClient
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
                PropertyPaneTextField("stockUrl", {
                  label: strings.StockUrlFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
