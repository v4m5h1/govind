"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var strings = require("ControlStrings");
var React = require("react");
var Maps_module_scss_1 = require("./Maps.module.scss");
var _1 = require(".");
var Label_1 = require("office-ui-fabric-react/lib/components/Label");
var Spinner_1 = require("office-ui-fabric-react/lib/Spinner");
var Icon_1 = require("office-ui-fabric-react/lib/components/Icon");
var Button_1 = require("office-ui-fabric-react/lib/components/Button");
var TextField_1 = require("office-ui-fabric-react/lib/components/TextField");
var telemetry = require("../../common/telemetry");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
/**
 * Maps control
 */
var Map = (function (_super) {
    __extends(Map, _super);
    function Map(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Get coordinates using the Bing API
         */
        _this._getCoordinates = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, mapData, location_1, coordinates, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._startLoading();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" + this.state.address)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        mapData = _a.sent();
                        if (mapData && mapData.length > 0) {
                            location_1 = mapData[0];
                            coordinates = {
                                latitude: parseFloat(location_1.lat),
                                longitude: parseFloat(location_1.lon)
                            };
                            this.setState({
                                coordinates: coordinates,
                                showmessageerror: false
                            });
                            // Check if the control needs to send an update
                            if (this.props.onUpdateCoordinates) {
                                this.props.onUpdateCoordinates(coordinates);
                            }
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error(error_1);
                        this.setState({
                            showmessageerror: true
                        });
                        return [3 /*break*/, 5];
                    case 5:
                        this._stopLoading();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
        * Update address on submit (while searching is enabled)
        */
        _this._onChangedAddress = function (newValue) {
            _this.setState({
                address: newValue,
            });
        };
        telemetry.track('ReactMap', {});
        _this.state = {
            coordinates: {
                latitude: null,
                longitude: null
            },
            address: "",
            showmessageerror: false,
            loading: false
        };
        return _this;
    }
    /**
     * componentWillMount lifecycle hook
     */
    Map.prototype.componentWillMount = function () {
        this.setState({
            coordinates: this.props.coordinates
        });
    };
    /**
     * componentWillUpdate lifecycle hook
     */
    Map.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (!sp_lodash_subset_1.isEqual(this.props.coordinates, nextProps.coordinates)) {
            this.setState({
                coordinates: this.props.coordinates
            });
        }
    };
    /**
    * Get the dif value based on zoom supplied (dif is for calculating the 4 corners of the map)
    */
    Map.prototype._getDif = function () {
        var zoom = this.props.zoom >= 0 ? this.props.zoom : 10;
        return 0.0025 + (0.005 * (15 - zoom));
    };
    /**
    * Get width as percentage
    */
    Map.prototype._getWidth = function () {
        var widthToReturn = this.props.width;
        if (widthToReturn) {
            var lastChar = widthToReturn.substr(widthToReturn.length - 1);
            if (lastChar !== '%') {
                widthToReturn = widthToReturn + "%";
            }
        }
        else {
            widthToReturn = "100%";
        }
        return widthToReturn;
    };
    /**
    * Get height of the maps
    */
    Map.prototype._getHeight = function () {
        return this.props.height ? this.props.height : 300;
    };
    /**
    * Get the type of the maps
    */
    Map.prototype._getMapType = function () {
        return this.props.mapType ? this.props.mapType : _1.MapType.standard;
    };
    /**
    * Compute the url for the iframe
    */
    Map.prototype._getMapUrl = function () {
        var dif = this._getDif();
        var mapType = this._getMapType();
        var coordinates = this.state.coordinates;
        var mapUrl = "";
        if (coordinates.latitude && coordinates.longitude) {
            var bbox1 = coordinates.longitude - dif;
            var bbox2 = coordinates.latitude - dif;
            var bbox3 = coordinates.longitude + dif;
            var bbox4 = coordinates.latitude + dif;
            var rootUrl = "https://www.openstreetmap.org/export/embed.html";
            var qs = "?bbox=" + bbox1 + "," + bbox2 + "," + bbox3 + "," + bbox4 + "&layer=" + mapType + "&marker=" + coordinates.latitude + "," + coordinates.longitude;
            mapUrl = rootUrl + qs;
        }
        return mapUrl;
    };
    /**
    * Stop loading by changing status to null
    */
    Map.prototype._stopLoading = function () {
        this.setState({
            loading: false
        });
    };
    /**
    * Start loading by changing status to Spinner
    */
    Map.prototype._startLoading = function () {
        this.setState({
            loading: true
        });
    };
    /**
     * Default React render method
     */
    Map.prototype.render = function () {
        var _this = this;
        var width = this._getWidth();
        var height = this._getHeight();
        var mapUrl = this._getMapUrl();
        return (React.createElement("div", { id: "mapsContainer", className: Maps_module_scss_1.default.mapContainer + " " + (this.props.mapsClassName ? this.props.mapsClassName : '') },
            this.props.titleText && (React.createElement(Label_1.Label, null, this.props.titleText)),
            (this.props.enableSearch) && (React.createElement("div", { id: "mapsSearch", className: Maps_module_scss_1.default.searchContainer },
                React.createElement(TextField_1.TextField, { value: this.state.address, onChanged: this._onChangedAddress, onKeyPress: function (event) { return event.key === "Enter" ? _this._getCoordinates() : null; }, iconProps: { iconName: 'World' }, className: Maps_module_scss_1.default.searchTextBox }),
                React.createElement(Button_1.PrimaryButton, { text: strings.mapsSearchButtonText, title: strings.mapsSearchButtonText, className: Maps_module_scss_1.default.submitButton, iconProps: { iconName: 'Search' }, onClick: this._getCoordinates }))),
            this.state.loading ? (React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.large, label: this.props.loadingMessage ? this.props.loadingMessage : strings.mapsLoadingText })) : ((mapUrl.length > 0 && !this.state.showmessageerror) ? (React.createElement("div", { id: "mapsIframe" },
                React.createElement("iframe", { width: width, height: height, scrolling: "no", src: mapUrl }))) : (React.createElement("p", { className: "ms-TextField-errorMessage " + Maps_module_scss_1.default.errorMessage + " " + (this.props.errorMessageClassName ? this.props.errorMessageClassName : '') },
                React.createElement(Icon_1.Icon, { iconName: 'Error', className: Maps_module_scss_1.default.errorIcon }),
                React.createElement("span", { "data-automation-id": "error-message" }, this.props.errorMessage ? this.props.errorMessage : strings.mapsErrorMessage))))));
    };
    return Map;
}(React.Component));
exports.Map = Map;

//# sourceMappingURL=Map.js.map
