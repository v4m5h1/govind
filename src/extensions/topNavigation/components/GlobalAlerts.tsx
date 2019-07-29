import * as React from "react";
import styles from "./GlobalAlerts.module.scss";
import { MessageBar, MessageBarType } from "office-ui-fabric-react";
import { Site, Items } from "@pnp/sp";
import { stringIsNullOrEmpty } from "@pnp/pnpjs";

export interface IGlobalAlertsProps {
  _rootSite: Site;
}

export interface IGlobalAlertsState {}

export default class GlobalAlerts extends React.Component<
  IGlobalAlertsProps,
  IGlobalAlertsState
> {
  constructor(props: IGlobalAlertsProps, state: IGlobalAlertsState) {
    super(props, state);
    this.fetchGlobalAlerts();
  }

  state = {
    globalAlert: ""
  };

  private fetchGlobalAlerts = () => {
    this.props._rootSite.rootWeb.lists
      .getByTitle("Global Alerts")
      .items.select("Title", "Status")
      .filter("Status eq 'Active'")
      .get()
      .then(its => {
        let globalAlert: string = "";
        if (its.length > 0) {
          globalAlert = its[0].Title;
        }
        this.setState({
          globalAlert: globalAlert
        });
      });
  };

  public render(): React.ReactElement<IGlobalAlertsProps> {
    return (
      <div>
        <div>
          {stringIsNullOrEmpty(this.state.globalAlert) ? null : (
            <MessageBar
              messageBarType={MessageBarType.warning}
              isMultiline={false}
              styles={{
                content: {
                  marginLeft: "40%"
                }
              }}
            >
              {this.state.globalAlert}
            </MessageBar>
          )}
        </div>
      </div>
    );
  }
}
