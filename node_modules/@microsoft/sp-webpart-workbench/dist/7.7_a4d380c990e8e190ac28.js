webpackJsonp8be81a5c_af38_4bb2_af97_afa3b64dfbed_1_8_2([7],{

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: external "react-dom"
var external__react_dom_ = __webpack_require__(20);
var external__react_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_dom_);

// EXTERNAL MODULE: external "@microsoft/sp-diagnostics"
var sp_diagnostics_ = __webpack_require__(6);
var sp_diagnostics__default = /*#__PURE__*/__webpack_require__.n(sp_diagnostics_);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@ms/odsp-utilities-bundle/5.0.3/node_modules/@ms/odsp-utilities-bundle/lib/index.js
var lib = __webpack_require__(10);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: external "@microsoft/office-ui-fabric-react-bundle"
var office_ui_fabric_react_bundle_ = __webpack_require__(1);
var office_ui_fabric_react_bundle__default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_bundle_);

// EXTERNAL MODULE: external "@microsoft/sp-lodash-subset"
var sp_lodash_subset_ = __webpack_require__(12);
var sp_lodash_subset__default = /*#__PURE__*/__webpack_require__.n(sp_lodash_subset_);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-rte/lib/rte/baseRte/BaseRte.js + 2 modules
var BaseRte = __webpack_require__(70);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-rte/lib/rte/baseRte/BaseRteConfiguration.js
var BaseRteConfiguration = __webpack_require__(128);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-rte/lib/rte/ckeditor/CKTextEditor.js + 5 modules
var CKTextEditor = __webpack_require__(72);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-rte/lib/rte/webPartRte/CKEditorForWebPartRte.js



var CKEditorForWebPartRte_CKEditorForWebPartRte =  (function (_super) {
    tslib_es6["__extends"](CKEditorForWebPartRte, _super);
    function CKEditorForWebPartRte(options, onReadyCallback) {
        var _this = _super.call(this, options, onReadyCallback) || this;
        var pluginsToBeRemoved = 'contextmenu,menubutton,scayt,liststyle,tableselection,tabletools,magicline,link,resize,autogrow,elementspath,divarea';
        _this._ckEditorConfig = {
            disableNativeSpellChecker: false,
            on: {
                change: _this._handleTextChange,
                selectionChange: _this._handleSelectionChangeConvert
            },
            removePlugins: "tableselection," + pluginsToBeRemoved,
            extraPlugins: 'justify,placeholdertext',
            placeholder: options.placeholder,
            removeButtons: '',
            stylesSet: false,
            toolbar: [],
            startupFocus: _this._startupFocus,
            fullPage: false,
            resize_enabled: false,
            width: '100%',
            height: 200,
            title: false
        };
        _this._onKeyDownCallBack = options.onKeyDownCallBack;
        _this._ckEditorConfig.allowedContent = true;
        _this._initialize(options.currentHTML);
        return _this;
    }
    CKEditorForWebPartRte.createNewEditor = function (options) {
        return new Promise(function (resolve) {
            CKEditorForWebPartRte.moduleLoader
                .loadModule()
                .then(function () {
                var editor = new CKEditorForWebPartRte(options, function () { return resolve(editor); });
            })
                .catch(function (error) {
                sp_diagnostics_["_TraceLogger"].logError(CKEditorForWebPartRte.logSource, error);
            });
        });
    };
    CKEditorForWebPartRte.prototype._initialize = function (currentHTML) {
        if (!this._ckEditorConfig) {
            return;
        }
        var textPart = document.createElement('textarea');
        this._editorElement.appendChild(textPart);
        this._editor = CKEDITOR.replace(textPart, this._ckEditorConfig);
        this._editor.setData(currentHTML);
        this._editor.on('key', this._handleKeyDown.bind(this));
        this._addCustomToolbarCommands();
    };
    CKEditorForWebPartRte.prototype._handleKeyDown = function (ev) {
        var keyboardEvent = ev.data && ev.data.domEvent && ev.data.domEvent.$;
        if (keyboardEvent && this._onKeyDownCallBack) {
            this._onKeyDownCallBack(keyboardEvent);
            if (keyboardEvent.defaultPrevented) {
                ev.cancel();
            }
        }
    };
    CKEditorForWebPartRte.logSource = sp_diagnostics_["_LogSource"].create('CKEditorForWebPartRte');
    return CKEditorForWebPartRte;
}(CKTextEditor["a" /* CKTextEditor */]));
/* harmony default export */ var webPartRte_CKEditorForWebPartRte = (CKEditorForWebPartRte_CKEditorForWebPartRte);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-rte/lib/rte/a11y/RteA11y.js + 1 modules
var RteA11y = __webpack_require__(71);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-rte/lib/rte/loc/RteStrings.resx.js
var RteStrings_resx = __webpack_require__(21);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-rte/lib/rte/webPartRte/WebPartRte.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPartRte", function() { return WebPartRte_WebPartRte; });











var WebPartRte_WebPartRte =  (function (_super) {
    tslib_es6["__extends"](WebPartRte, _super);
    function WebPartRte(props) {
        var _this = _super.call(this, props, WebPartRte.defaultOptions) || this;
        _this.TAG_NAME = 'WebPartRte.';
        return _this;
    }
    WebPartRte._getFormattingBarDefaultPosition = function (isRtl) {
        if (isRtl === void 0) { isRtl = false; }
        var left = isRtl ? undefined : 0;
        var top = -202;
        var position = 'relative';
        var right = isRtl ? 0 : undefined;
        return { left: left, top: top, position: position, right: right };
    };
    WebPartRte.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
    };
    WebPartRte.prototype.focus = function () {
        _super.prototype.focus.call(this);
    };
    WebPartRte.prototype._initState = function () {
        this.state = {
            displayMode: this.props.displayMode,
            formattingBarPosition: WebPartRte._getFormattingBarDefaultPosition(this._isRtl),
            isFormattingBarHidden: false,
            isLinkDialogOpen: false
        };
    };
    WebPartRte.prototype._createNewEditor = function (innerHTML, startUpFocus) {
        return this._options.editor.createNewEditor({
            config: this._config,
            currentHTML: innerHTML,
            editorElement: this._editorElement,
            selectionChangeCallback: this._handleSelectionChange,
            textChangeCallback: this._handleTextChange.bind(this),
            startUpFocus: startUpFocus,
            onImagePasteCallBack: function () {
            },
            onPasteCallback: function () {
            },
            onContextMenuCallBack: function () {
            },
            onKeyDownCallBack: this._handleEditorKeyDown,
            placeholder: this.props.placeholder
        });
    };
    WebPartRte.prototype._afterEditorCreated = function (editor) {
        this._editor = editor;
        this._handleTextChange();
        var formattingbarElement = external__react_dom_["findDOMNode"](this._formattingBar);
        this._editorElement.style.position = 'relative';
        this._editorElement.style.top = formattingbarElement.offsetHeight + "px";
        formattingbarElement.style.top = "-" + this._editorElement.offsetHeight + "px";
        var iframe = this._editorElement.querySelector('iframe');
        if (iframe && iframe.contentDocument) {
            iframe.contentDocument.addEventListener('paste', this._onBeforePaste, true);
            var ariaLabel = lib["StringHelper"].format(RteStrings_resx["a" /* default */].RichTextEditorIframeTitle, this.props.ariaLabel || '', RteStrings_resx["a" /* default */].RichTextEditorAriaLabel);
            iframe.setAttribute('title', ariaLabel);
        }
        this._initPagePicker();
    };
    WebPartRte.prototype._finalizeAction = function (ariaActionName) {
        _super.prototype._finalizeAction.call(this, ariaActionName);
        if (this.props.onChanged) {
            var newValue = this._editor ? this._editor.getHTML() : this.props.innerHTML;
            if (newValue) {
                this.props.onChanged(newValue);
            }
        }
    };
    WebPartRte.prototype._handleKeyDown = function (evt) {
    };
    WebPartRte.prototype._handleEditorKeyDown = function (evt) {
        if (Object(RteA11y["d" /* isKey */])(office_ui_fabric_react_bundle_["KeyCodes"].f10, evt, true)  && this._formattingbarElement) {
            sp_diagnostics_["_EngagementLogger"].logEvent(this.TAG_NAME + 'ToolbarByKeyboardShortcut.Focus', evt.type);
            Object(RteA11y["g" /* navigateInside */])(this._formattingbarElement);
            var screenReaderInstruction = lib["StringHelper"].format(RteStrings_resx["a" /* default */].RichTextNavigationAltF10Keys, RteStrings_resx["a" /* default */].ToolbarNavigationArrowKeys, RteStrings_resx["a" /* default */].ToolbarNavigationShiftTabKey);
            Object(RteA11y["a" /* ariaAlert */])(screenReaderInstruction);
            evt.stopPropagation();
            evt.preventDefault();
        }
        else if (Object(RteA11y["d" /* isKey */])('K'.charCodeAt(0), evt, false, true) ) {
            this._handleLink();
            evt.stopPropagation();
            evt.preventDefault();
        }
        else if (!Object(RteA11y["d" /* isKey */])(office_ui_fabric_react_bundle_["KeyCodes"].tab, evt) && !Object(RteA11y["d" /* isKey */])(office_ui_fabric_react_bundle_["KeyCodes"].tab, evt, false, false, true) ) {
            this._redispatchKeyboardEvent(evt);
        }
    };
    WebPartRte.prototype._redispatchKeyboardEvent = function (evt) {
        var emptyEvent = document.createEvent('Event');
        emptyEvent.initEvent(evt.type, true, true);
        var clonedEvent = Object(sp_lodash_subset_["merge"])(emptyEvent, {
            keyCode: evt.keyCode,
            code: evt.code,
            which: evt.which,
            altKey: evt.altKey,
            ctrlKey: evt.ctrlKey
        });
        if (this._editorElement) {
            this._editorElement.dispatchEvent(clonedEvent);
        }
    };
    WebPartRte.defaultOptions = {
        editor: webPartRte_CKEditorForWebPartRte,
        config: new BaseRteConfiguration["a" /* BaseRteConfiguration */](),
        loader: webPartRte_CKEditorForWebPartRte.moduleLoader
    };
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], WebPartRte.prototype, "_handleEditorKeyDown", null);
    return WebPartRte;
}(BaseRte["a" /* BaseRte */]));



/***/ })

});
//# sourceMappingURL=7.7_a4d380c990e8e190ac28.js.map