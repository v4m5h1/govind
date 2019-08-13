import * as React from "react";
import styles from "./BottomNavigation.module.scss";
import {
  Callout,
  getId,
  DefaultButton,
  PrimaryButton,
  Dropdown,
  IDropdownOption,
  TextField
} from "office-ui-fabric-react";
import { Site, sp } from "@pnp/sp";
import { Dialog } from "@microsoft/sp-dialog";
import {
  PeoplePicker,
  PrincipalType
} from "@pnp/spfx-controls-react/lib/PeoplePicker";
import ApplicationCustomizerContext from "@microsoft/sp-extension-base/lib/ExtensionContext";

export interface IBottomControlsProps {
  rootSite: Site;
  context: ApplicationCustomizerContext;
}

export interface IBottomControlsState {
  isSiteOwnerVisible?: boolean;
  isFeedbackVisible?: boolean;
  currFeedbackType: string;
  currFeedback: string;
  ownerPhoto: string;
  ownerName: string;
  ownerDesignation: string;
  ownerEmail: string;
  hideSiteOwner: boolean;
  newSiteOwner: string;
}

const feedbackTypeOptions: IDropdownOption[] = [
  { key: "Comments or Suggestions", text: "Comments or Suggestions" },
  { key: "Technical Issues", text: "Technical Issues" }
];

export default class BottomControls extends React.Component<
  IBottomControlsProps,
  IBottomControlsState
> {
  constructor(props: IBottomControlsProps, state: IBottomControlsState) {
    super(props, state);
    this._getSiteOwner();
  }

  public state: IBottomControlsState = {
    isSiteOwnerVisible: false,
    isFeedbackVisible: false,
    currFeedback: "",
    currFeedbackType: "",
    ownerPhoto: "",
    ownerName: "",
    ownerDesignation: "",
    ownerEmail: "",
    hideSiteOwner: false,
    newSiteOwner: ""
  };

  private _menuButtonElement = React.createRef<HTMLDivElement>();
  // Use getId() to ensure that the callout label and description IDs are unique on the page.
  // (It's also okay to use plain strings without getId() and manually ensure their uniqueness.)
  private _labelId: string = getId("callout-label");
  private _descriptionId: string = getId("callout-description");

  private _onShowSiteOwner = (): void => {
    this.setState({
      isSiteOwnerVisible: !this.state.isSiteOwnerVisible
    });
  };

  private _onShowFeedback = (): void => {
    this.setState({
      isFeedbackVisible: !this.state.isFeedbackVisible
    });
  };

  private _onCalloutDismiss = (): void => {
    this.setState({
      isSiteOwnerVisible: false,
      isFeedbackVisible: false
    });
  };

  private _feedbackTypeChange = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption,
    index?: number
  ): void => {
    this.setState({
      currFeedbackType: option.text
    });
  };

  private _feedbackChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ): void => {
    this.setState({
      currFeedback: newValue
    });
  };

  private _onChangeSiteOwner = () => {
    let hideSiteOwner = this.state.hideSiteOwner;
    this.setState({
      hideSiteOwner: !hideSiteOwner
    });
  };

  private _onFeedbackSubmit = () => {
    this.props.rootSite.rootWeb.lists
      .getByTitle("Feedback")
      .items.add({
        Title: this.state.currFeedbackType,
        Feedback: this.state.currFeedback
      })
      .then(x => {
        Dialog.alert("Thank you for your Feedback.");
        this.setState({
          currFeedback: ""
        });
      });
  };

  private _getSiteOwner = () => {
    sp.web.associatedOwnerGroup.users.get().then(owners => {
      console.log(owners);
      this.getUserProperties(owners[0].LoginName);
    });
  };

  private getUserProperties = (loginName: string) => {
    sp.profiles.getPropertiesFor(loginName).then((profile: any) => {
      console.log(profile);
      this.setState({
        ownerName: profile.DisplayName,
        ownerDesignation: profile.Title,
        ownerEmail: profile.Email,
        ownerPhoto: profile.PictureUrl
      });
    });
  };

  private _getPeoplePickerItems = (items: any[]) => {
    console.log("Items:", items);
    this.setState({
      newSiteOwner: items[0].id
    });
  };

  public render(): React.ReactElement<IBottomControlsProps> {
    let {
      ownerName,
      ownerDesignation,
      ownerEmail,
      ownerPhoto,
      isFeedbackVisible,
      isSiteOwnerVisible,
      currFeedback
    } = this.state;
    return (
      <div className={styles.bottomControls}>
        <div ref={this._menuButtonElement}>
          <span onClick={this._onShowSiteOwner} className={styles.link}>
            Site Owner |{" "}
          </span>
          <span onClick={this._onShowFeedback} className={styles.link}>
            Feedback
          </span>
        </div>

        <Callout
          className="siteOwner-callout"
          role="alertdialog"
          ariaLabelledBy={this._labelId}
          ariaDescribedBy={this._descriptionId}
          gapSpace={0}
          target={this._menuButtonElement.current}
          onDismiss={this._onCalloutDismiss}
          setInitialFocus={true}
          hidden={!isSiteOwnerVisible}
        >
          <div style={{ margin: 20 }}>
            <h2>This Site Owner is</h2>
            <div hidden={this.state.hideSiteOwner}>
              <div style={{ display: "inline-block" }}>
                <img
                  src={ownerPhoto}
                  alt="Site Owner"
                  style={{ borderRadius: 100, margin: 20 }}
                />
              </div>
              <div style={{ display: "inline-block" }}>
                <h1>{ownerName}</h1>
                <p className="title">{ownerDesignation}</p>
                <p>{ownerEmail}</p>
              </div>
              <p>
                <PrimaryButton onClick={this._onChangeSiteOwner}>
                  Change Site Owner
                </PrimaryButton>
              </p>
            </div>
            <div hidden={!this.state.hideSiteOwner}>
              <PeoplePicker
                context={this.props.context}
                titleText="Select Site Owner"
                personSelectionLimit={1}
                // groupName={}  Leave this blank in case you want to filter from all users
                showtooltip={true}
                isRequired={true}
                selectedItems={this._getPeoplePickerItems}
                showHiddenInUI={false}
                principalTypes={[PrincipalType.User]}
                resolveDelay={500}
                defaultSelectedUsers={[`${ownerEmail}`]}
              />
              <p>
                <PrimaryButton>Submit</PrimaryButton>
                <DefaultButton onClick={this._onChangeSiteOwner}>
                  Cancel
                </DefaultButton>
              </p>
            </div>
          </div>
        </Callout>
        <Callout
          className="feedback-callout"
          role="alertdialog"
          ariaLabelledBy={this._labelId}
          ariaDescribedBy={this._descriptionId}
          gapSpace={0}
          target={this._menuButtonElement.current}
          onDismiss={this._onCalloutDismiss}
          setInitialFocus={true}
          hidden={!isFeedbackVisible}
        >
          <div style={{ margin: 20 }}>
            <h2>Leave Feedback</h2>
            <Dropdown
              placeHolder="Select type"
              options={feedbackTypeOptions}
              onChange={this._feedbackTypeChange}
            />
            <TextField
              placeholder="Enter you feedback here"
              multiline
              autoAdjustHeight
              onChange={this._feedbackChange}
              value={currFeedback}
            />
            <p>
              <PrimaryButton onClick={this._onFeedbackSubmit}>
                Submit
              </PrimaryButton>
            </p>
          </div>
        </Callout>
      </div>
    );
  }
}
