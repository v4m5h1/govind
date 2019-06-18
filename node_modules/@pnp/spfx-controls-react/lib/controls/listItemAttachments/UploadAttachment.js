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
var React = require("react");
var Dialog_1 = require("office-ui-fabric-react/lib/Dialog");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var SPService_1 = require("../../services/SPService");
var strings = require("ControlStrings");
var CommandBar_1 = require("office-ui-fabric-react/lib/CommandBar");
var ProgressIndicator_1 = require("office-ui-fabric-react/lib/ProgressIndicator");
var lib_1 = require("@uifabric/utilities/lib");
var ListItemAttachments_module_scss_1 = require("./ListItemAttachments.module.scss");
var UploadAttachment = (function (_super) {
    __extends(UploadAttachment, _super);
    function UploadAttachment(props) {
        var _this = _super.call(this, props) || this;
        /**
         * On attachment upload event
         */
        _this.onAttachmentUpload = function () {
            // fire click event
            _this.fileInput.current.value = '';
            _this.fileInput.current.click();
        };
        /**
         * Add a new attachment
         */
        _this.addAttachment = function (e) {
            _this.setState({
                isLoading: true
            });
            var reader = new FileReader();
            var file = e.target.files[0];
            reader.onloadend = function () { return __awaiter(_this, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.setState({
                                file: file
                            });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this._spservice.addAttachment(this.props.listId, this.props.itemId, file.name, file, this.props.webUrl)];
                        case 2:
                            _a.sent();
                            this.setState({
                                isLoading: false
                            });
                            this.props.onAttachmentUpload();
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            this.setState({
                                hideDialog: false,
                                isLoading: false,
                                dialogMessage: strings.ListItemAttachmentsuploadAttachmentErrorMsg.replace('{0}', file.name).replace('{1}', error_1.message)
                            });
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            reader.readAsDataURL(file);
        };
        /**
         * Close dialog
         */
        _this.closeDialog = function () {
            _this.setState({
                hideDialog: true,
                dialogMessage: '',
            });
        };
        _this.state = {
            file: null,
            hideDialog: true,
            dialogMessage: '',
            isLoading: false,
        };
        // Get SPService
        _this._spservice = new SPService_1.default(_this.props.context);
        _this.fileInput = lib_1.createRef();
        return _this;
    }
    /**
     * componentDidUpdate lifecycle hook
     *
     * @param prevProps
     * @param prevState
     */
    UploadAttachment.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.props.fireUpload) {
            this.fileInput.current.value = '';
            this.fileInput.current.click();
        }
    };
    /**
     * Default React render method
     */
    UploadAttachment.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("input", { id: "file-picker", style: { display: 'none' }, type: "file", onChange: function (e) { return _this.addAttachment(e); }, ref: this.fileInput }),
            React.createElement("div", { className: ListItemAttachments_module_scss_1.default.uploadBar },
                React.createElement(CommandBar_1.CommandBar, { items: [{
                            key: 'Add',
                            name: strings.ListItemAttachmentsCommandBarAddAttachmentLabel,
                            iconProps: {
                                iconName: 'Upload'
                            },
                            onClick: this.onAttachmentUpload,
                            disabled: this.props.disabled
                        }] })),
            React.createElement("div", null, this.state.isLoading ? React.createElement(ProgressIndicator_1.ProgressIndicator, { label: strings.ListItemAttachmentsloadingMessage }) : ""),
            React.createElement(Dialog_1.Dialog, { hidden: this.state.hideDialog, type: Dialog_1.DialogType.normal, onDismiss: this.closeDialog, dialogContentProps: {
                    type: Dialog_1.DialogType.normal,
                    title: strings.ListItemAttachmentsuploadAttachmentDialogTitle,
                    subText: this.state.dialogMessage
                }, modalProps: {
                    isBlocking: true,
                    containerClassName: 'ms-dialogMainOverride'
                } },
                React.createElement(Dialog_1.DialogFooter, null,
                    React.createElement(Button_1.PrimaryButton, { onClick: this.closeDialog }, "OK")))));
    };
    return UploadAttachment;
}(React.Component));
exports.UploadAttachment = UploadAttachment;

//# sourceMappingURL=UploadAttachment.js.map
