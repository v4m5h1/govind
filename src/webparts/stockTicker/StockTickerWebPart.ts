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

  // method to retrieve the API Key for Alpha Vantage
  private async getApiKey(): Promise<string> {
    const apiKeyName: string = "PnP-Portal-AlphaVantage-API-Key";
    // try to get the API Key from the local session storage
    let apiKey: string = sessionStorage.getItem(apiKeyName);
    // if it is not there, load it from the tenant properties
    // and store its value in the session storage
    if (!apiKey) {
      const { sp } = await import(
        /* webpackChunkName: 'pnp-sp' */
        "@pnp/sp"
      );
      const storageEntity: StorageEntity = await sp.web.getStorageEntity(
        apiKeyName
      );
      if (storageEntity && !storageEntity["odata.null"]) {
        apiKey = storageEntity.Value;
        sessionStorage.setItem(apiKeyName, apiKey);
      }
    }
    // return the API Key value
    return apiKey;
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
