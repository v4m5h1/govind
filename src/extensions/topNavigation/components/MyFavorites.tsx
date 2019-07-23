import * as React from "react";
import {
  Link,
  IconButton,
  TextField,
  PrimaryButton,
  TooltipHost
} from "office-ui-fabric-react";
import { Site } from "@pnp/sp";
import styles from "./MyFavorites.module.scss";
// import { CurrentUser } from "@pnp/sp/src/siteusers";

export interface IMyFavoritesProps {
  configSite: Site;
}

export interface IMyFavoritesState {
  links: any;
  hideNewLink: boolean;
  linkTitle: string;
  linkUrl: string;
}

export default class MyFavorites extends React.Component<
  IMyFavoritesProps,
  IMyFavoritesState
> {
  constructor(props: IMyFavoritesProps, state: IMyFavoritesState) {
    super(props, state);
    this.getMyLinks().then(lnks => {
      this.setState({
        links: lnks
      });
    });
  }

  public state = {
    links: undefined,
    hideNewLink: true,
    linkTitle: "",
    linkUrl: ""
  };

  private removeLink = itemId => {
    this.props.configSite.rootWeb.lists
      .getByTitle("MyFavorites")
      .items.getById(itemId)
      .delete()
      .then(_ => {
        this.getMyLinks().then(lnks => {
          this.setState({
            links: lnks
          });
        });
      });
  };

  private getMyLinks = async () => {
    let currentUser = await this.props.configSite.rootWeb.currentUser.get();
    console.log(currentUser);
    let items = await this.props.configSite.rootWeb.lists
      .getByTitle("MyFavorites")
      .items.select("ID", "Title", "Url", "Editor/Id")
      .filter(`Editor/Id eq ${currentUser.Id}`)
      .expand("Editor")
      .get();
    console.log(items);
    return items.map(it => {
      return (
        <div>
          <Link className={styles.link} href={it.Url} target="_blank">
            {it.Title}
          </Link>
          <IconButton
            className={styles.link}
            iconProps={{ iconName: "Cancel" }}
            onClick={() => this.removeLink(it.ID)}
          />
        </div>
      );
    });
  };

  private toggleNewLinks = () => {
    this.setState({
      hideNewLink: !this.state.hideNewLink
    });
  };

  private addLinks = () => {
    this.props.configSite.rootWeb.lists
      .getByTitle("MyFavorites")
      .items.add({
        Title: this.state.linkTitle,
        Url: this.state.linkUrl
      })
      .then(x =>
        this.getMyLinks().then(lnks => {
          this.setState({
            links: lnks,
            hideNewLink: true
          });
        })
      );
  };

  private onTitleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    this.setState({
      linkTitle: newValue
    });
  };

  private onUrlChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    this.setState({
      linkUrl: newValue
    });
  };

  public render(): React.ReactElement<IMyFavoritesProps> {
    return (
      <div className={styles.links}>
        <div>
          <h2>
            My Favorites
            <TooltipHost content="Add Favorites">
              <IconButton
                iconProps={{ iconName: "Edit" }}
                onClick={this.toggleNewLinks}
              />
            </TooltipHost>
          </h2>
        </div>
        <div hidden={this.state.hideNewLink}>
          <TextField required label="Title" onChange={this.onTitleChange} />
          <TextField label="URL" required onChange={this.onUrlChange} />
          <p>
            <PrimaryButton text="Add" onClick={this.addLinks} />
          </p>
        </div>
        <div>{this.state.links}</div>
      </div>
    );
  }
}
