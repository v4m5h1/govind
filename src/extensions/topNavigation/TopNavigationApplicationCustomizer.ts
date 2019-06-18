import { override } from "@microsoft/decorators";
import { Log } from "@microsoft/sp-core-library";
import { BaseApplicationCustomizer } from "@microsoft/sp-application-base";
import { Dialog } from "@microsoft/sp-dialog";

import * as strings from "TopNavigationApplicationCustomizerStrings";

import styles from "./TopNavigation..module.scss";
import * as SPTermStore from "./services/SPTermStoreService";
import pnp from "@pnp/pnpjs";
import * as jQuery from "jquery";

const NAV_TERMS_KEY = "global-navigation-terms";
const LOG_SOURCE: string = "TopNavigationApplicationCustomizer";

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ITopNavigationApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class TopNavigationApplicationCustomizer extends BaseApplicationCustomizer<
  ITopNavigationApplicationCustomizerProperties
> {
  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = "(No properties were provided.)";
    }

    Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);

    return Promise.resolve();
  }
}
