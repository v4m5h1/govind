import * as React from "react";
import styles from "./BottomNavigation.module.scss";
import { Site } from "@pnp/sp";
import { Link } from "office-ui-fabric-react";

export interface IBottomLinksProps {
  rootSite: Site;
}

export interface IBottomLinksState {
  links: any;
}

export default class BottomLinks extends React.Component<
  IBottomLinksProps,
  IBottomLinksState
> {
  constructor(props: IBottomLinksProps, state: IBottomLinksState) {
    super(props, state);
    this.getFooterLinks().then(lnks => {
      this.setState({
        links: lnks
      });
    });
  }

  public state = {
    links: undefined
  };

  private onLinkClick = url => {
    window.open(url, "_blank");
  };

  private getFooterLinks = async () => {
    let items = await this.props.rootSite.rootWeb.lists
      .getByTitle("BottomNav")
      .items.select("ID", "Title", "URL")
      .get();
    console.log(items);
    return items.map(it => {
      return (
        <span className={styles.link} onClick={() => this.onLinkClick(it.URL)}>
          {" "}
          | {it.Title}
        </span>
      );
    });
  };

  public render(): React.ReactElement<IBottomLinksProps> {
    return (
      <div className={styles.bottomLinks}>
        <span>© 2019 E*TRADE {this.state.links}</span>
      </div>
    );
  }
}
