import * as React from "react";
import * as ReactDOM from "react-dom";
import * as jQuery from "jquery";
import { override } from "@microsoft/decorators";
import { Log } from "@microsoft/sp-core-library";
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from "@microsoft/sp-application-base";
import { Dialog } from "@microsoft/sp-dialog";

import * as strings from "TopNavigationApplicationCustomizerStrings";

import styles from "./TopNavigation.module.scss";
import pnp from "@pnp/pnpjs";
import * as SPTermStore from "./services/SPTermStoreService";
import TopNavigation, { ITopNavigationProps } from "./components/TopNavigation";

const NAV_TERMS_KEY = "global-navigation-terms";
const LOG_SOURCE: string = "TopNavigationApplicationCustomizer";

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ITopNavigationApplicationCustomizerProperties {
  TopMenuTermSet?: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class TopNavigationApplicationCustomizer extends BaseApplicationCustomizer<
  ITopNavigationApplicationCustomizerProperties
> {
  private _topPlaceholder: PlaceholderContent | undefined;

  @override
  public async onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    // Added to handle possible changes on the existence of placeholders.
    this.context.placeholderProvider.changedEvent.add(
      this,
      this._renderPlaceHolders
    );

    // Configure caching
    pnp.setup({
      defaultCachingStore: "session",
      defaultCachingTimeoutSeconds: 900, //15min
      globalCacheDisable: true, // true to disable caching in case of debugging/testing
      spfxContext: this.context
    });

    // Call render method for generating the HTML elements.
    this._renderPlaceHolders();

    return Promise.resolve<void>();
  }

  private _renderPlaceHolders(): void {
    console.log("TopNavigationApplicationCustomizer._renderPlaceHolders()");
    console.log(
      "Available placeholders: ",
      this.context.placeholderProvider.placeholderNames
        .map(name => PlaceholderName[name])
        .join(", ")
    );
    console.log(this.context.placeholderProvider);
    // Handling the top placeholder
    if (!this._topPlaceholder) {
      this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Top,
        { onDispose: this._onDispose }
      );

      // The extension should not assume that the expected placeholder is available.
      if (!this._topPlaceholder) {
        console.error("The expected placeholder (Top) was not found.");
        return;
      }

      const element: React.ReactElement<
        ITopNavigationProps
      > = React.createElement(TopNavigation, {
        _context: this.context,
        // _topMenuItems: this._topMenuItems
        TopMenuTermSet: this.properties.TopMenuTermSet
      });
      ReactDOM.render(element, this._topPlaceholder.domElement);
    }
  }

  private _onDispose(): void {
    console.log(
      "[TopNavigationApplicationCustomizer._onDispose] Disposed custom top placeholder."
    );
  }
}
