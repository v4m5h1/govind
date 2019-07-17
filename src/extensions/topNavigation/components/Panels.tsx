import * as React from "react";
import { Panel, PanelType } from "office-ui-fabric-react";
import { Site } from "@pnp/sp";
import styles from "../TopNavigation.module.scss";

export interface IPanelsProps {
  _showFAQsPanel: boolean;
  _showSettingsPanel: boolean;
  _showFavouritesPanel: boolean;
  _closeFAQPanel: any;
  _closeSettingsPanel: any;
  _closeFavouritesPanel: any;
}

export interface IPanelsState {
  _showFAQPanel: boolean;
  settingsHtml: string;
  faqsHtml: string;
  favouritesHtml: string;
}

export default class Panels extends React.Component<
  IPanelsProps,
  IPanelsState
> {
  constructor(props: IPanelsProps, state: IPanelsState) {
    super(props, state);
    this.getTopNavConfig();
  }

  private getTopNavConfig = () => {
    let rootSite = new Site("https://mjsp2019.sharepoint.com/sites/POCHub"); // config site url here
    rootSite.rootWeb.lists
      .getByTitle("TopNav")
      .items.get()
      .then(its => {
        let faqsItem = its.filter(it => it.Title == "faqs");
        let settingsItem = its.filter(it => it.Title == "settings");
        let favouritesItem = its.filter(it => it.Title == "favourites");
        this.setState({
          settingsHtml: settingsItem[0]["html"],
          favouritesHtml: favouritesItem[0]["html"],
          faqsHtml: faqsItem[0]["html"]
        });
      });
  };

  public state = {
    _showFAQPanel: false,
    settingsHtml: "",
    faqsHtml: "",
    favouritesHtml: ""
  };

  public render(): React.ReactElement<IPanelsProps> {
    return (
      <React.Fragment>
        <Panel
          isOpen={this.props._showFAQsPanel}
          type={PanelType.smallFixedFar}
          onDismiss={this.props._closeFAQPanel}
          //   headerText="Panel - Small, right-aligned, fixed, with footer"
          closeButtonAriaLabel="Close"
          isBlocking={false}
          className={styles.panels}
          isLightDismiss={true}
          //   onLightDismissClick={this.props._closeFAQPanel}
        >
          <div>
            {/* <DefaultButton onClick={this._closePanel} text="Close" /> */}
            <div dangerouslySetInnerHTML={{ __html: this.state.faqsHtml }} />
          </div>
        </Panel>
        <Panel
          isOpen={this.props._showSettingsPanel}
          type={PanelType.smallFixedFar}
          onDismiss={this.props._closeSettingsPanel}
          closeButtonAriaLabel="Close"
          isBlocking={false}
          className={styles.panels}
          isLightDismiss={true}
          onLightDismissClick={this.props._closeSettingsPanel}
        >
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: this.state.settingsHtml }}
            />
          </div>
        </Panel>
        <Panel
          isOpen={this.props._showFavouritesPanel}
          type={PanelType.smallFixedFar}
          onDismiss={this.props._closeFavouritesPanel}
          closeButtonAriaLabel="Close"
          isBlocking={false}
          className={styles.panels}
          isLightDismiss={true}
          onLightDismissClick={this.props._closeFavouritesPanel}
        >
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: this.state.favouritesHtml }}
            />
          </div>
        </Panel>
      </React.Fragment>
    );
  }
}
