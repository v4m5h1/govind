import * as React from "react";
import styles from "./ActionItemSlider.module.scss";
import { IActionItemSliderProps } from "./IActionItemSliderProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { Carousel } from "react-responsive-carousel";
import { sp } from "@pnp/pnpjs";

export default class ActionItemSlider extends React.Component<
  IActionItemSliderProps,
  any
> {
  constructor(props: IActionItemSliderProps, state: any) {
    super(props, state);
    this.state = {
      imageMetaData: [],
      listTitle: String
    };
    // this.getPageDetails();
    this.getListTitleById(this.props.listIds);
  }

  public getPageDetails = () => {
    sp.web.lists
      .getByTitle("Site Pages")
      .items.get()
      .then((items: any[]) => {
        console.log(items);

        let images = [];
        items.map(item => {
          let image = {};
          if (item.Rollup_x0020_Image) {
            image = {
              imageUrl: item.Rollup_x0020_Image
                ? item.Rollup_x0020_Image.Url
                : "",
              title: item.Title
            };
          }
          if (!this.isEmpty(image)) {
            images.push(image);
          }
        });
        this.setState({
          imageMetaData: images
        });
      });
  };

  public isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  public getListTitleById = listId => {
    sp.web.lists
      .getById(listId)
      .get()
      .then((lProps: any) => {
        this.setState({ listTitle: lProps.Title });
      });
  };

  public renderImages = () => {
    // if(this.state.imageMetaData.count>0){

    this.state.imageMetaData.map(image => {
      return (
        <div>
          <img src={image.imageUrl} />
          <p className="legend">{image.title}</p>
        </div>
      );
    });
    // return slides;
  };

  public componentWillMount() {
    this.getPageDetails();
  }

  public componentWillReceiveProps(nextProps) {
    this.getListTitleById(nextProps.listIds);
  }

  public render(): React.ReactElement<IActionItemSliderProps> {
    console.log(this.props.selectedKeys);
    return (
      <div className={styles.actionItemSlider}>
        <div className={styles.container}>
          <p>{this.props.listIds}</p>
          <p>{this.state.listTitle}</p>
          <div>{this.props.selectedKeys}</div>
          <Carousel>
            {/* {this.renderImages} */}
            {this.state.imageMetaData.map((image, index) => {
              return (
                <div>
                  <img src={image.imageUrl} />
                  <p className="legend">{image.title}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}
