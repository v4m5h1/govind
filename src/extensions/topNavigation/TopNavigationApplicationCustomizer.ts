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
  private _topMenuItems: SPTermStore.ISPTermObject[];

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
      globalCacheDisable: true // true to disable caching in case of debugging/testing
    });

    // Retrieve the menu items from taxonomy
    // let termStoreService: SPTermStore.SPTermStoreService = new SPTermStore.SPTermStoreService(
    //   spHttpClient: this.context.spHttpClient,
    //   siteAbsoluteUrl: this.context.pageContext.web.absoluteUrl
    // });

    // if (this.properties.TopMenuTermSet != null) {
    //   // let cachedTerms = pnp.storage.session.get(NAV_TERMS_KEY);
    //   let cachedTerms = null;
    //   if (cachedTerms != null) {
    //     //Use cached terms
    //     this._topMenuItems = cachedTerms;
    //   } else {
    //     this._topMenuItems = await termStoreService.getTermsFromTermSetAsync(
    //       this.properties.TopMenuTermSet,
    //       this.context.pageContext.web.language
    //     );
    //     //Store in cache
    //     pnp.storage.session.put(NAV_TERMS_KEY, this._topMenuItems);
    //   }

    //   // //Generate Mega Menu HTML
    //   // let menuString: string = this.generateMegaMenuLevel(this._topMenuItems);

    //   // //Set HTML
    //   // jQuery("#menu ul").html(menuString);
    // }

    // Call render method for generating the HTML elements.
    this._renderPlaceHolders();

    // jQuery("#menu > ul > li:has( > ul)").addClass(`${styles.menuDropdownIcon}`);
    // //Checks if li has sub (ul) and adds class for toggle icon - just an UI

    // jQuery("#menu > ul > li > ul:not(:has(ul))").addClass(
    //   `${styles.normalSub}`
    // );
    // //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

    // jQuery("#menu > ul").before(
    //   `<a href="#" class="${styles.menuMobile}" id="menuMobile">Navigation</a>`
    // );

    // //Adds menu-mobile class (for mobile toggle menu) before the normal menu
    // //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
    // //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
    // //Done this way so it can be used with wordpress without any trouble

    // //Make sure that menu is hidden when resizing the window to desktop
    // jQuery(window).resize(function() {
    //   if (jQuery(window).width() > 943) {
    //     jQuery("#menu > ul > li")
    //       .children("ul")
    //       .hide();
    //   }
    // });

    // jQuery("#menu > ul > li").hover(function(e) {
    //   if (jQuery(window).width() > 943) {
    //     jQuery(this)
    //       .children("ul")
    //       .stop(true, false)
    //       .fadeToggle(150);
    //     e.preventDefault();
    //   }
    // });

    // // Added for second level of Navigation
    // jQuery("#menu > ul > li > ul > li").hover(function(e) {
    //   if (jQuery(window).width() > 943) {
    //     jQuery(this)
    //       .children("ul")
    //       .stop(true, false)
    //       .fadeToggle(150);
    //     e.preventDefault();
    //   }
    // });

    // //If width is more than 943px dropdowns are displayed on hover

    // jQuery("#menu > ul > li").click(function() {
    //   if (jQuery(window).width() <= 943) {
    //     jQuery(this)
    //       .children("ul")
    //       .fadeToggle(150);
    //   }
    // });
    // //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

    // //window.showOnMobileClass = `${styles.showOnMobile}`;
    // jQuery("#menuMobile").click(function(e) {
    //   jQuery("#menu > ul").toggleClass(`${styles.showOnMobile}`);
    //   e.preventDefault();
    // });
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

      // if (this.properties) {
      //   if (this._topPlaceholder.domElement) {
      //     this._topPlaceholder.domElement.innerHTML = `
      //           <div class="${styles.app}">
      //             <div class="${styles.menuContainer}">
      //               <div class="${styles.menu}" id="menu"><ul></ul></div>
      //             </div>
      //           </div>`;
      //   }
      // }

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
      "[TopNavigationApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders."
    );
  }

  private generateMegaMenuLevel(levels: SPTermStore.ISPTermObject[]): string {
    let menuString: string = "";

    for (let i: number = 0; i < levels.length; i++) {
      let levelItem: SPTermStore.ISPTermObject = levels[i];
      let url: string =
        typeof levelItem.localCustomProperties._Sys_Nav_SimpleLinkUrl ===
        "undefined"
          ? "#"
          : levelItem.localCustomProperties._Sys_Nav_SimpleLinkUrl;
      menuString += '<li><a href="' + url + '">' + levelItem.name + "</a>";
      if (levelItem.terms.length != 0) {
        menuString += "<ul>";
        menuString += this.generateMegaMenuLevel(levelItem.terms);
        menuString += "</ul>";
      }
      menuString += "</li>";
    }

    return menuString;
  }
}
