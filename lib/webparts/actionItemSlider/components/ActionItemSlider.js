var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import styles from "./ActionItemSlider.module.scss";
import { Carousel } from "react-responsive-carousel";
import { sp } from "@pnp/pnpjs";
var ActionItemSlider = /** @class */ (function (_super) {
    __extends(ActionItemSlider, _super);
    function ActionItemSlider(props, state) {
        var _this = _super.call(this, props, state) || this;
        _this.getPageDetails = function () {
            var _a;
            if (_this.state.listTitle !== "") {
                (_a = sp.web.lists
                    .getByTitle(_this.state.listTitle)
                    .items).select.apply(_a, _this.state.selectedKeys).get()
                    .then(function (items) {
                    console.log(items);
                    var images = [];
                    items.map(function (item) {
                        var image = {};
                        if (item.Rollup_x0020_Image) {
                            image = {
                                imageUrl: item.Rollup_x0020_Image
                                    ? item.Rollup_x0020_Image.Url
                                    : "",
                                title: item.Title
                            };
                        }
                        if (!_this.isEmpty(image)) {
                            images.push(image);
                        }
                    });
                    _this.setState({
                        imageMetaData: images
                    });
                });
            }
        };
        // Set the List Title and the selected keys on Property change
        _this.getListTitleById = function (nxtProps) {
            sp.web.lists
                .getById(nxtProps.listIds)
                .select("Title")
                .get()
                .then(function (listProps) {
                _this.setState({
                    listTitle: listProps.Title,
                    selectedKeys: nxtProps.selectedKeys
                });
                _this.getPageDetails();
            });
        };
        _this.renderImages = function () {
            return _this.state.imageMetaData.map(function (image) {
                React.createElement("div", null,
                    React.createElement("img", { src: image.imageUrl }),
                    React.createElement("p", { className: "legend" }, image.title));
            });
        };
        _this.state = {
            imageMetaData: [],
            listTitle: "",
            selectedKeys: []
        };
        _this.getListTitleById(_this.props);
        return _this;
    }
    ActionItemSlider.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    ActionItemSlider.prototype.componentWillMount = function () {
        this.getPageDetails();
    };
    ActionItemSlider.prototype.componentWillReceiveProps = function (nextProps) {
        this.getListTitleById(nextProps);
    };
    ActionItemSlider.prototype.render = function () {
        console.log(this.props.selectedKeys);
        var images;
        if (this.state.imageMetaData.length > 0) {
            images = (React.createElement(Carousel, { autoPlay: true, infiniteLoop: true }, this.state.imageMetaData.map(function (image, index) {
                return (React.createElement("div", null,
                    React.createElement("img", { src: image.imageUrl }),
                    React.createElement("p", { className: "legend" }, image.title)));
            })));
        }
        else {
            images = React.createElement("span", null, " No Images Found ");
        }
        return (React.createElement("div", { className: styles.actionItemSlider },
            React.createElement("div", { className: styles.container }, images)));
    };
    return ActionItemSlider;
}(React.Component));
export default ActionItemSlider;
//# sourceMappingURL=ActionItemSlider.js.map