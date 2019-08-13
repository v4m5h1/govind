import * as React from "react";
import * as ReactDOM from "react-dom";
import { override } from "@microsoft/decorators";
import { Log } from "@microsoft/sp-core-library";
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from "@microsoft/sp-application-base";
import { Dialog } from "@microsoft/sp-dialog";
import BottomNavigation, {
  IBottomNavigationProps
} from "./components/BottomNavigation";
import { sp } from "@pnp/sp";
import * as strings from "BottomNavigationApplicationCustomizerStrings";

const LOG_SOURCE: string = "BottomNavigationApplicationCustomizer";

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IBottomNavigationApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class BottomNavigationApplicationCustomizer extends BaseApplicationCustomizer<
  IBottomNavigationApplicationCustomizerProperties
> {
  private _bottomPlaceholder: PlaceholderContent | undefined;

  @override
  public onInit(): Promise<void> {
    sp.setup({
      spfxContext: this.context
    });

    // Call render method for generating the HTML elements.
    this._renderPlaceHolders();

    return Promise.resolve();
  }

  private _renderPlaceHolders(): void {
    console.log("BottomNavigationApplicationCustomizer._renderPlaceHolders()");
    console.log(
      "Available placeholders: ",
      this.context.placeholderProvider.placeholderNames
        .map(name => PlaceholderName[name])
        .join(", ")
    );
    console.log(this.context.placeholderProvider);
    // Handling the top placeholder
    if (!this._bottomPlaceholder) {
      this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Bottom,
        { onDispose: this._onDispose }
      );

      // The extension should not assume that the expected placeholder is available.
      if (!this._bottomPlaceholder) {
        console.error("The expected placeholder (Top) was not found.");
        return;
      }

      const element: React.ReactElement<
        IBottomNavigationProps
      > = React.createElement(BottomNavigation, { context: this.context });
      ReactDOM.render(element, this._bottomPlaceholder.domElement);
    }
  }

  private _onDispose(): void {
    console.log(
      "[BottomNavigationApplicationCustomizer._onDispose] Disposed custom bottom placeholder."
    );
  }
}
