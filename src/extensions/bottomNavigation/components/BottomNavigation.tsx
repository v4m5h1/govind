import * as React from "react";
import styles from "./BottomNavigation.module.scss";
import { Image } from "office-ui-fabric-react/lib/Image";
import { Site } from "@pnp/sp";
import BottomLinks from "./BottomLinks";
import BottomControls from "./BottomControls";
import ApplicationCustomizerContext from "@microsoft/sp-extension-base/lib/ExtensionContext";

export interface IBottomNavigationProps {
  context: ApplicationCustomizerContext;
}

export interface IBottomNavigationState {}

// config site url here
// const rootSiteUrl =
//   "https://csharpsharepoint.sharepoint.com/sites/ModernCommunicationSite";

const rootSiteUrl = "https://mjsp2019.sharepoint.com/sites/POCHub";
const rootSite = new Site(rootSiteUrl);

export default class BottomNavigation extends React.Component<
  IBottomNavigationProps,
  IBottomNavigationState
> {
  public render(): React.ReactElement<IBottomNavigationProps> {
    return (
      <div className={styles.app}>
        <div className={styles.bottom}>
          <div className={styles.logo}>
            <Image
              src={`${rootSiteUrl}/SiteAssets/etrade-logo.png`}
              alt="Etrade Logo"
              width={150}
            />
          </div>
          <BottomLinks rootSite={rootSite} />
          <BottomControls rootSite={rootSite} context={this.props.context} />
        </div>
      </div>
    );
  }
}
