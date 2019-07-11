import * as React from "react";
import * as jQuery from "jquery";
import * as SPTermStore from "../services/SPTermStoreService";
import styles from "../TopNavigation.module.scss";
import pnp from "@pnp/pnpjs";
import { ExtensionContext } from "@microsoft/sp-extension-base";
import { SearchBox } from "office-ui-fabric-react";

export interface ITopNavigationProps {
  TopMenuTermSet?: string;
  _topMenuItems?: SPTermStore.ISPTermObject[];
  _context: any;
}

export interface ITopNavigationState {
  navigationElements: string;
}

const NAV_TERMS_KEY = "global-navigation-terms";

export default class TopNavigation extends React.Component<
  ITopNavigationProps,
  ITopNavigationState
> {
  private _topMenuItems: SPTermStore.ISPTermObject[];

  constructor(props: ITopNavigationProps, state: ITopNavigationState) {
    super(props, state);
    this.onInititialisation().then(r => {
      let menuItems = this.generateMegaMenuLevel(this._topMenuItems);
      this.setState({
        navigationElements: menuItems
      });
      this.initialiseScripts();
    });
    this.state = {
      navigationElements: ""
    };
  }

  private async onInititialisation() {
    // Retrieve the menu items from taxonomy
    let termStoreService: SPTermStore.SPTermStoreService = new SPTermStore.SPTermStoreService(
      {
        spHttpClient: this.props._context.spHttpClient,
        siteAbsoluteUrl: this.props._context.pageContext.web.absoluteUrl
      }
    );
    if (this.props.TopMenuTermSet != null) {
      // let cachedTerms = pnp.storage.session.get(NAV_TERMS_KEY);
      let cachedTerms = null;
      if (cachedTerms != null) {
        //Use cached terms
        this._topMenuItems = cachedTerms;
      } else {
        this._topMenuItems = await termStoreService.getTermsFromTermSetAsync(
          this.props.TopMenuTermSet,
          this.props._context.pageContext.web.language
        );
        console.log(this._topMenuItems);
        //Store in cache
        pnp.storage.session.put(NAV_TERMS_KEY, this._topMenuItems);
      }
    }
  }

  private initialiseScripts() {
    jQuery("#menu > ul > li:has( > ul)").addClass(`${styles.menuDropdownIcon}`);
    //Checks if li has sub (ul) and adds class for toggle icon - just an UI

    jQuery("#menu > ul > li > ul:not(:has(ul))").addClass(
      `${styles.normalSub}`
    );
    //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

    jQuery("#menu > ul").before(
      `<a href="#" class="${styles.menuMobile}" id="menuMobile">Navigation</a>`
    );

    //Adds menu-mobile class (for mobile toggle menu) before the normal menu
    //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
    //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
    //Done this way so it can be used with wordpress without any trouble

    //Make sure that menu is hidden when resizing the window to desktop

    jQuery(window).resize(function() {
      if (jQuery(window).width() > 943) {
        jQuery("#menu > ul > li")
          .children("ul")
          .hide();
      }
    });

    jQuery("#menu > ul > li").hover(function(e) {
      if (jQuery(window).width() > 943) {
        jQuery(this)
          .children("ul")
          .stop(true, false)
          .fadeToggle(150);
        e.preventDefault();
      }
    });

    // Added for second level of Navigation
    jQuery("#menu > ul > li > ul > li").hover(function(e) {
      if (jQuery(window).width() > 943) {
        jQuery(this)
          .children("ul")
          .stop(true, false)
          .fadeToggle(150);
        e.preventDefault();
      }
    });

    //If width is more than 943px dropdowns are displayed on hover

    jQuery("#menu > ul > li").click(function() {
      if (jQuery(window).width() <= 943) {
        jQuery(this)
          .children("ul")
          .fadeToggle(150);
      }
    });
    //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

    //window.showOnMobileClass = `${styles.showOnMobile}`;
    jQuery("#menuMobile").click(function(e) {
      jQuery("#menu > ul").toggleClass(`${styles.showOnMobile}`);
      e.preventDefault();
    });
  }

  private generateMegaMenuLevel(levels: SPTermStore.ISPTermObject[]): any {
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

    console.log(menuString);
    return menuString;
  }

  private dostuff = search => {
    // window.location.href("");
  };

  public render(): React.ReactElement<ITopNavigationProps> {
    return (
      <div className={styles.app}>
        <div className={styles.menuContainer}>
          <div className={styles.menu} id="menu">
            <SearchBox
              placeholder="Search"
              onSearch={searchValue => this.dostuff}
            />
            <ul
              dangerouslySetInnerHTML={{
                __html: this.state.navigationElements
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
