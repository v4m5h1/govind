webpackJsonp1c6c9123_7aac_41f3_a376_3caea41ed83f_1_8_2([1],Array(43).concat([
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./lib/DeveloperTools/FBWrappers/FakeReact.js
var FakeReact = __webpack_require__(13);
var FakeReact_default = /*#__PURE__*/__webpack_require__.n(FakeReact);

// EXTERNAL MODULE: ./lib/DeveloperTools/FBWrappers/FakeReactDOM.js
var FakeReactDOM = __webpack_require__(14);
var FakeReactDOM_default = /*#__PURE__*/__webpack_require__.n(FakeReactDOM);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Utilities.js + 45 modules
var Utilities = __webpack_require__(44);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(45);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogContent.types.js
var DialogType;
(function (DialogType) {
    /** Standard dialog */
    DialogType[DialogType["normal"] = 0] = "normal";
    /** Dialog with large header banner */
    DialogType[DialogType["largeHeader"] = 1] = "largeHeader";
    /** Dialog with an 'x' close button in the upper-right corner */
    DialogType[DialogType["close"] = 2] = "close";
})(DialogType || (DialogType = {}));

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/FocusTrapZone/index.js + 1 modules
var FocusTrapZone = __webpack_require__(68);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Styling.js + 74 modules
var Styling = __webpack_require__(46);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Modal/Modal.styles.js

var animationDuration = Styling["b" /* AnimationVariables */].durationValue2;
var globalClassNames = {
    root: 'ms-Modal',
    main: 'ms-Dialog-main',
    scrollableContent: 'ms-Modal-scrollableContent',
    isOpen: 'is-open'
};
var getStyles = function (props) {
    var className = props.className, containerClassName = props.containerClassName, scrollableContentClassName = props.scrollableContentClassName, isOpen = props.isOpen, isVisible = props.isVisible, hasBeenOpened = props.hasBeenOpened, modalRectangleTop = props.modalRectangleTop, theme = props.theme, topOffsetFixed = props.topOffsetFixed;
    var palette = theme.palette;
    var classNames = Object(Styling["o" /* getGlobalClassNames */])(globalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                backgroundColor: 'transparent',
                position: 'fixed',
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                pointerEvents: 'none',
                transition: "opacity " + animationDuration
            },
            topOffsetFixed &&
                hasBeenOpened && {
                alignItems: 'flex-start'
            },
            isOpen && classNames.isOpen,
            isVisible && {
                opacity: 1,
                pointerEvents: 'auto'
            },
            className
        ],
        main: [
            classNames.main,
            {
                boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.4)',
                backgroundColor: palette.white,
                boxSizing: 'border-box',
                position: 'relative',
                textAlign: 'left',
                outline: '3px solid transparent',
                maxHeight: '100%',
                overflowY: 'auto'
            },
            topOffsetFixed &&
                hasBeenOpened && {
                top: modalRectangleTop
            },
            containerClassName
        ],
        scrollableContent: [
            classNames.scrollableContent,
            {
                overflowY: 'auto',
                flexGrow: 1
            },
            scrollableContentClassName
        ]
    };
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Overlay/Overlay.base.js



var getClassNames = Object(Utilities["m" /* classNamesFunction */])();
var Overlay_base_OverlayBase = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](OverlayBase, _super);
    function OverlayBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OverlayBase.prototype.componentDidMount = function () {
        Object(Utilities["q" /* disableBodyScroll */])();
    };
    OverlayBase.prototype.componentWillUnmount = function () {
        Object(Utilities["u" /* enableBodyScroll */])();
    };
    OverlayBase.prototype.render = function () {
        var _a = this.props, isDark = _a.isDarkThemed, className = _a.className, theme = _a.theme, styles = _a.styles;
        var divProps = Object(Utilities["I" /* getNativeProps */])(this.props, Utilities["r" /* divProperties */]);
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            isDark: isDark
        });
        return FakeReact["createElement"]("div", tslib_es6["a" /* __assign */]({}, divProps, { className: classNames.root }));
    };
    return OverlayBase;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Overlay/Overlay.styles.js

var GlobalClassNames = {
    root: 'ms-Overlay',
    rootDark: 'ms-Overlay--dark'
};
var Overlay_styles_getStyles = function (props) {
    var className = props.className, theme = props.theme, isNone = props.isNone, isDark = props.isDark;
    var palette = theme.palette;
    var classNames = Object(Styling["o" /* getGlobalClassNames */])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                backgroundColor: palette.whiteTranslucent40,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                position: 'absolute',
                selectors: (_a = {},
                    _a[Styling["e" /* HighContrastSelector */]] = {
                        border: '1px solid WindowText',
                        opacity: 0
                    },
                    _a)
            },
            isNone && {
                visibility: 'hidden'
            },
            isDark && [
                classNames.rootDark,
                {
                    backgroundColor: palette.blackTranslucent40
                }
            ],
            className
        ]
    };
    var _a;
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Overlay/Overlay.js



var Overlay = Object(Utilities["_10" /* styled */])(Overlay_base_OverlayBase, Overlay_styles_getStyles, undefined, {
    scope: 'Overlay'
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Overlay/index.js



// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Overlay.js


// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Layer.js + 11 modules
var Layer = __webpack_require__(63);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Popup/index.js + 1 modules
var Popup = __webpack_require__(67);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode.js
var withResponsiveMode = __webpack_require__(58);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Modal/Modal.base.js









// @TODO - need to change this to a panel whenever the breakpoint is under medium (verify the spec)
var DefaultLayerProps = {
    eventBubblingEnabled: false
};
var Modal_base_getClassNames = Object(Utilities["m" /* classNamesFunction */])();
var Modal_base_ModalBase = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](ModalBase, _super);
    function ModalBase(props) {
        var _this = _super.call(this, props) || this;
        _this._focusTrapZone = FakeReact["createRef"]();
        // Allow the user to scroll within the modal but not on the body
        _this._allowScrollOnModal = function (elt) {
            if (elt) {
                Object(Utilities["h" /* allowScrollOnElement */])(elt, _this._events);
            }
            else {
                _this._events.off(_this._scrollableContent);
            }
            _this._scrollableContent = elt;
        };
        _this.state = {
            id: Object(Utilities["F" /* getId */])('Modal'),
            isOpen: props.isOpen,
            isVisible: props.isOpen,
            hasBeenOpened: props.isOpen
        };
        _this._warnDeprecations({
            onLayerDidMount: 'layerProps.onLayerDidMount'
        });
        return _this;
    }
    ModalBase.prototype.componentWillReceiveProps = function (newProps) {
        clearTimeout(this._onModalCloseTimer);
        // Opening the dialog
        if (newProps.isOpen) {
            if (!this.state.isOpen) {
                // First Open
                this.setState({
                    isOpen: true
                });
            }
            else {
                // Modal has been opened
                // Reopen during closing
                this.setState({
                    hasBeenOpened: true,
                    isVisible: true
                });
                if (newProps.topOffsetFixed) {
                    var dialogMain = document.getElementsByClassName('ms-Dialog-main');
                    var modalRectangle = void 0;
                    if (dialogMain.length > 0) {
                        modalRectangle = dialogMain[0].getBoundingClientRect();
                        this.setState({
                            modalRectangleTop: modalRectangle.top
                        });
                    }
                }
            }
        }
        // Closing the dialog
        if (!newProps.isOpen && this.state.isOpen) {
            this._onModalCloseTimer = this._async.setTimeout(this._onModalClose, parseFloat(animationDuration) * 1000);
            this.setState({
                isVisible: false
            });
        }
    };
    ModalBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (!prevProps.isOpen && !prevState.isVisible) {
            this.setState({
                isVisible: true
            });
        }
    };
    ModalBase.prototype.render = function () {
        var _a = this.props, className = _a.className, containerClassName = _a.containerClassName, scrollableContentClassName = _a.scrollableContentClassName, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, firstFocusableSelector = _a.firstFocusableSelector, forceFocusInsideTrap = _a.forceFocusInsideTrap, ignoreExternalFocusing = _a.ignoreExternalFocusing, isBlocking = _a.isBlocking, isClickableOutsideFocusTrap = _a.isClickableOutsideFocusTrap, isDarkOverlay = _a.isDarkOverlay, onDismiss = _a.onDismiss, layerProps = _a.layerProps, responsiveMode = _a.responsiveMode, titleAriaId = _a.titleAriaId, styles = _a.styles, subtitleAriaId = _a.subtitleAriaId, theme = _a.theme, topOffsetFixed = _a.topOffsetFixed, onLayerDidMount = _a.onLayerDidMount;
        var _b = this.state, isOpen = _b.isOpen, isVisible = _b.isVisible, hasBeenOpened = _b.hasBeenOpened, modalRectangleTop = _b.modalRectangleTop;
        var mergedLayerProps = tslib_es6["a" /* __assign */]({}, DefaultLayerProps, this.props.layerProps, { onLayerDidMount: layerProps && layerProps.onLayerDidMount ? layerProps.onLayerDidMount : onLayerDidMount });
        if (!isOpen) {
            return null;
        }
        var classNames = Modal_base_getClassNames(styles, {
            theme: theme,
            className: className,
            containerClassName: containerClassName,
            scrollableContentClassName: scrollableContentClassName,
            isOpen: isOpen,
            isVisible: isVisible,
            hasBeenOpened: hasBeenOpened,
            modalRectangleTop: modalRectangleTop,
            topOffsetFixed: topOffsetFixed
        });
        // @temp tuatology - Will adjust this to be a panel at certain breakpoints
        if (responsiveMode >= withResponsiveMode["a" /* ResponsiveMode */].small) {
            return (FakeReact["createElement"](Layer["a" /* Layer */], tslib_es6["a" /* __assign */]({}, mergedLayerProps),
                FakeReact["createElement"](Popup["a" /* Popup */], { role: isBlocking ? 'alertdialog' : 'dialog', "aria-modal": "true", ariaLabelledBy: titleAriaId, ariaDescribedBy: subtitleAriaId, onDismiss: onDismiss },
                    FakeReact["createElement"]("div", { className: classNames.root },
                        FakeReact["createElement"](Overlay, { isDarkThemed: isDarkOverlay, onClick: isBlocking ? undefined : onDismiss }),
                        FakeReact["createElement"](FocusTrapZone["a" /* FocusTrapZone */], { componentRef: this._focusTrapZone, className: classNames.main, elementToFocusOnDismiss: elementToFocusOnDismiss, isClickableOutsideFocusTrap: isClickableOutsideFocusTrap ? isClickableOutsideFocusTrap : !isBlocking, ignoreExternalFocusing: ignoreExternalFocusing, forceFocusInsideTrap: forceFocusInsideTrap, firstFocusableSelector: firstFocusableSelector },
                            FakeReact["createElement"]("div", { ref: this._allowScrollOnModal, className: classNames.scrollableContent, "data-is-scrollable": true }, this.props.children))))));
        }
        return null;
    };
    ModalBase.prototype.focus = function () {
        if (this._focusTrapZone.current) {
            this._focusTrapZone.current.focus();
        }
    };
    // Watch for completed animations and set the state
    ModalBase.prototype._onModalClose = function () {
        this.setState({
            isOpen: false
        });
        // Call the onDismiss callback
        if (this.props.onDismissed) {
            this.props.onDismissed();
        }
    };
    ModalBase.defaultProps = {
        isOpen: false,
        isDarkOverlay: true,
        isBlocking: false,
        className: '',
        containerClassName: ''
    };
    ModalBase = tslib_es6["b" /* __decorate */]([
        withResponsiveMode["b" /* withResponsiveMode */]
    ], ModalBase);
    return ModalBase;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Modal/Modal.js



var Modal = Object(Utilities["_10" /* styled */])(Modal_base_ModalBase, getStyles, undefined, {
    scope: 'Modal'
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Modal/index.js



// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Modal.js



// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Button.js + 44 modules
var Button = __webpack_require__(57);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogFooter.base.js



var DialogFooter_base_getClassNames = Object(Utilities["m" /* classNamesFunction */])();
var DialogFooter_base_DialogFooterBase = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](DialogFooterBase, _super);
    function DialogFooterBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogFooterBase.prototype.render = function () {
        var _a = this.props, className = _a.className, styles = _a.styles, theme = _a.theme;
        this._classNames = DialogFooter_base_getClassNames(styles, {
            theme: theme,
            className: className
        });
        return (FakeReact["createElement"]("div", { className: this._classNames.actions },
            FakeReact["createElement"]("div", { className: this._classNames.actionsRight }, this._renderChildrenAsActions())));
    };
    DialogFooterBase.prototype._renderChildrenAsActions = function () {
        var _this = this;
        return FakeReact["Children"].map(this.props.children, function (child) { return (child ? FakeReact["createElement"]("span", { className: _this._classNames.action }, child) : null); });
    };
    return DialogFooterBase;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogFooter.styles.js

var DialogFooter_styles_GlobalClassNames = {
    actions: 'ms-Dialog-actions',
    action: 'ms-Dialog-action',
    actionsRight: 'ms-Dialog-actionsRight'
};
var DialogFooter_styles_getStyles = function (props) {
    var className = props.className, theme = props.theme;
    var classNames = Object(Styling["o" /* getGlobalClassNames */])(DialogFooter_styles_GlobalClassNames, theme);
    return {
        actions: [
            classNames.actions,
            {
                position: 'relative',
                width: '100%',
                minHeight: '24px',
                lineHeight: '24px',
                margin: '20px 0 0',
                fontSize: '0',
                selectors: {
                    '.ms-Button': {
                        lineHeight: 'normal'
                    }
                }
            },
            className
        ],
        action: [classNames.action],
        actionsRight: [
            classNames.actionsRight,
            {
                textAlign: 'right',
                marginRight: '-4px',
                fontSize: '0',
                selectors: {
                    $action: {
                        margin: '0 4px'
                    }
                }
            }
        ]
    };
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogFooter.js



var DialogFooter = Object(Utilities["_10" /* styled */])(DialogFooter_base_DialogFooterBase, DialogFooter_styles_getStyles, undefined, { scope: 'DialogFooter' });

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogContent.base.js







var DialogContent_base_getClassNames = Object(Utilities["m" /* classNamesFunction */])();
var DialogFooterType = FakeReact["createElement"](DialogFooter, null).type;
var DialogContent_base_DialogContentBase = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](DialogContentBase, _super);
    function DialogContentBase(props) {
        return _super.call(this, props) || this;
    }
    DialogContentBase.prototype.render = function () {
        var _a = this.props, showCloseButton = _a.showCloseButton, className = _a.className, closeButtonAriaLabel = _a.closeButtonAriaLabel, onDismiss = _a.onDismiss, subTextId = _a.subTextId, subText = _a.subText, titleId = _a.titleId, title = _a.title, type = _a.type, styles = _a.styles, theme = _a.theme;
        var classNames = DialogContent_base_getClassNames(styles, {
            theme: theme,
            className: className,
            isLargeHeader: type === DialogType.largeHeader,
            isClose: type === DialogType.close
        });
        var groupings = this._groupChildren();
        var subTextContent;
        if (subText) {
            subTextContent = (FakeReact["createElement"]("p", { className: classNames.subText, id: subTextId }, subText));
        }
        return (FakeReact["createElement"]("div", { className: classNames.content },
            FakeReact["createElement"]("div", { className: classNames.header },
                FakeReact["createElement"]("p", { className: classNames.title, id: titleId, role: "heading", "aria-level": 2 }, title),
                FakeReact["createElement"]("div", { className: classNames.topButton },
                    this.props.topButtonsProps.map(function (props, index) { return (FakeReact["createElement"](Button["c" /* IconButton */], tslib_es6["a" /* __assign */]({ key: props.uniqueId || index }, props))); }),
                    (type === DialogType.close || (showCloseButton && type !== DialogType.largeHeader)) && (FakeReact["createElement"](Button["c" /* IconButton */], { className: classNames.button, iconProps: { iconName: 'Cancel' }, ariaLabel: closeButtonAriaLabel, onClick: onDismiss })))),
            FakeReact["createElement"]("div", { className: classNames.inner },
                FakeReact["createElement"]("div", { className: classNames.innerContent },
                    subTextContent,
                    groupings.contents),
                groupings.footers)));
    };
    // @TODO - typing the footers as an array of DialogFooter is difficult because
    // casing "child as DialogFooter" causes a problem because
    // "Neither type 'ReactElement<any>' nor type 'DialogFooter' is assignable to the other."
    DialogContentBase.prototype._groupChildren = function () {
        var groupings = {
            footers: [],
            contents: []
        };
        FakeReact["Children"].map(this.props.children, function (child) {
            if (typeof child === 'object' && child !== null && child.type === DialogFooterType) {
                groupings.footers.push(child);
            }
            else {
                groupings.contents.push(child);
            }
        });
        return groupings;
    };
    DialogContentBase.defaultProps = {
        showCloseButton: false,
        className: '',
        topButtonsProps: [],
        closeButtonAriaLabel: 'Close'
    };
    DialogContentBase = tslib_es6["b" /* __decorate */]([
        withResponsiveMode["b" /* withResponsiveMode */]
    ], DialogContentBase);
    return DialogContentBase;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogContent.styles.js

var DialogContent_styles_GlobalClassNames = {
    contentLgHeader: 'ms-Dialog-lgHeader',
    close: 'ms-Dialog--close',
    subText: 'ms-Dialog-subText',
    header: 'ms-Dialog-header',
    headerLg: 'ms-Dialog--lgHeader',
    button: 'ms-Dialog-button ms-Dialog-button--close',
    inner: 'ms-Dialog-inner',
    content: 'ms-Dialog-content',
    title: 'ms-Dialog-title'
};
var DialogContent_styles_getStyles = function (props) {
    var className = props.className, theme = props.theme, isLargeHeader = props.isLargeHeader, isClose = props.isClose, hidden = props.hidden, isMultiline = props.isMultiline;
    var palette = theme.palette, fonts = theme.fonts;
    var classNames = Object(Styling["o" /* getGlobalClassNames */])(DialogContent_styles_GlobalClassNames, theme);
    return {
        content: [
            isLargeHeader && classNames.contentLgHeader,
            isClose && classNames.close,
            {
                flexGrow: 1,
                overflowY: 'hidden' // required for allowScrollOnElement
            },
            className
        ],
        subText: [
            classNames.subText,
            isLargeHeader ? fonts.medium : fonts.small,
            {
                margin: '0 0 20px 0',
                paddingTop: '8px',
                color: palette.neutralPrimary,
                lineHeight: '1.5',
                wordWrap: 'break-word',
                fontWeight: Styling["d" /* FontWeights */].semilight
            }
        ],
        header: [
            classNames.header,
            {
                position: 'relative',
                width: '100%',
                boxSizing: 'border-box'
            },
            isLargeHeader && [
                classNames.headerLg,
                {
                    backgroundColor: palette.themePrimary
                }
            ],
            isClose && classNames.close
        ],
        button: [
            classNames.button,
            hidden && {
                selectors: {
                    '.ms-Icon.ms-Icon--Cancel': {
                        color: palette.neutralSecondary,
                        fontSize: '16px'
                    }
                }
            }
        ],
        inner: [
            classNames.inner,
            {
                padding: isMultiline ? '0 20px 20px' : '0 28px 20px'
            }
        ],
        innerContent: [
            classNames.content,
            {
                position: 'relative',
                width: '100%',
                selectors: {
                    '.ms-Button.ms-Button--compount': {
                        marginBottom: '20px',
                        selectors: {
                            '&:last-child': {
                                marginBottom: '0'
                            }
                        }
                    }
                }
            },
            className
        ],
        title: [
            classNames.title,
            {
                color: palette.neutralPrimary,
                margin: '0',
                padding: '20px 36px 20px 28px'
            },
            fonts.xLarge,
            isLargeHeader && [
                {
                    color: palette.white,
                    marginBottom: '8px',
                    padding: '26px 28px 28px'
                },
                fonts.xxLarge
            ],
            isMultiline && fonts.xxLarge
        ],
        topButton: [
            {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                position: 'absolute',
                top: '0',
                right: '0',
                padding: '12px 12px 0 0',
                selectors: {
                    '> *': {
                        flex: '0 0 auto'
                    }
                }
            }
        ]
    };
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogContent.js



var DialogContent = Object(Utilities["_10" /* styled */])(DialogContent_base_DialogContentBase, DialogContent_styles_getStyles, undefined, { scope: 'DialogContent' });

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Dialog/Dialog.base.js






var Dialog_base_getClassNames = Object(Utilities["m" /* classNamesFunction */])();

var DefaultModalProps = {
    isDarkOverlay: false,
    isBlocking: false,
    className: '',
    containerClassName: '',
    topOffsetFixed: false
};
var DefaultDialogContentProps = {
    type: DialogType.normal,
    className: '',
    topButtonsProps: []
};
var Dialog_base_DialogBase = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](DialogBase, _super);
    function DialogBase(props) {
        var _this = _super.call(this, props) || this;
        _this._getSubTextId = function () {
            var _a = _this.props, ariaDescribedById = _a.ariaDescribedById, modalProps = _a.modalProps, dialogContentProps = _a.dialogContentProps, subText = _a.subText;
            var id = ariaDescribedById || (modalProps && modalProps.subtitleAriaId);
            if (!id) {
                id = (subText || (dialogContentProps && dialogContentProps.subText)) && _this._defaultSubTextId;
            }
            return id;
        };
        _this._getTitleTextId = function () {
            var _a = _this.props, ariaLabelledById = _a.ariaLabelledById, modalProps = _a.modalProps, dialogContentProps = _a.dialogContentProps, title = _a.title;
            var id = ariaLabelledById || (modalProps && modalProps.titleAriaId);
            if (!id) {
                id = (title || (dialogContentProps && dialogContentProps.title)) && _this._defaultTitleTextId;
            }
            return id;
        };
        _this._id = Object(Utilities["F" /* getId */])('Dialog');
        _this._defaultTitleTextId = _this._id + '-title';
        _this._defaultSubTextId = _this._id + '-subText';
        _this._warnDeprecations({
            isOpen: 'hidden',
            type: 'dialogContentProps.type',
            subText: 'dialogContentProps.subText',
            contentClassName: 'dialogContentProps.className',
            topButtonsProps: 'dialogContentProps.topButtonsProps',
            className: 'modalProps.className',
            isDarkOverlay: 'modalProps.isDarkOverlay',
            isBlocking: 'modalProps.isBlocking',
            containerClassName: 'modalProps.containerClassName',
            onDismissed: 'modalProps.onDismissed',
            onLayerDidMount: 'modalProps.layerProps.onLayerDidMount',
            ariaDescribedById: 'modalProps.subtitleAriaId',
            ariaLabelledById: 'modalProps.titleAriaId'
        });
        return _this;
    }
    DialogBase.prototype.render = function () {
        var _a = this.props, className = _a.className, containerClassName = _a.containerClassName, contentClassName = _a.contentClassName, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, firstFocusableSelector = _a.firstFocusableSelector, forceFocusInsideTrap = _a.forceFocusInsideTrap, styles = _a.styles, hidden = _a.hidden, ignoreExternalFocusing = _a.ignoreExternalFocusing, isBlocking = _a.isBlocking, isClickableOutsideFocusTrap = _a.isClickableOutsideFocusTrap, isDarkOverlay = _a.isDarkOverlay, isOpen = _a.isOpen, onDismiss = _a.onDismiss, onDismissed = _a.onDismissed, onLayerDidMount = _a.onLayerDidMount, responsiveMode = _a.responsiveMode, subText = _a.subText, theme = _a.theme, title = _a.title, topButtonsProps = _a.topButtonsProps, type = _a.type, minWidth = _a.minWidth, maxWidth = _a.maxWidth, modalProps = _a.modalProps;
        var mergedLayerProps = tslib_es6["a" /* __assign */]({}, (modalProps ? modalProps.layerProps : { onLayerDidMount: onLayerDidMount }));
        if (onLayerDidMount && !mergedLayerProps.onLayerDidMount) {
            mergedLayerProps.onLayerDidMount = onLayerDidMount;
        }
        var mergedModalProps = tslib_es6["a" /* __assign */]({}, DefaultModalProps, modalProps, { layerProps: mergedLayerProps });
        var dialogContentProps = tslib_es6["a" /* __assign */]({}, DefaultDialogContentProps, this.props.dialogContentProps);
        var classNames = Dialog_base_getClassNames(styles, {
            theme: theme,
            className: className || mergedModalProps.className,
            containerClassName: containerClassName || mergedModalProps.containerClassName,
            hidden: hidden,
            dialogDefaultMinWidth: minWidth,
            dialogDefaultMaxWidth: maxWidth
        });
        return (FakeReact["createElement"](Modal, tslib_es6["a" /* __assign */]({ elementToFocusOnDismiss: elementToFocusOnDismiss, firstFocusableSelector: firstFocusableSelector, forceFocusInsideTrap: forceFocusInsideTrap, ignoreExternalFocusing: ignoreExternalFocusing, isClickableOutsideFocusTrap: isClickableOutsideFocusTrap, onDismissed: onDismissed, responsiveMode: responsiveMode }, mergedModalProps, { isDarkOverlay: isDarkOverlay !== undefined ? isDarkOverlay : mergedModalProps.isDarkOverlay, isBlocking: isBlocking !== undefined ? isBlocking : mergedModalProps.isBlocking, isOpen: isOpen !== undefined ? isOpen : !hidden, className: classNames.root, containerClassName: classNames.main, onDismiss: onDismiss ? onDismiss : mergedModalProps.onDismiss, subtitleAriaId: this._getSubTextId(), titleAriaId: this._getTitleTextId() }),
            FakeReact["createElement"](DialogContent, tslib_es6["a" /* __assign */]({ titleId: this._defaultTitleTextId, subTextId: this._defaultSubTextId, title: title, subText: subText, showCloseButton: isBlocking !== undefined ? !isBlocking : !mergedModalProps.isBlocking, topButtonsProps: topButtonsProps ? topButtonsProps : dialogContentProps.topButtonsProps, type: type !== undefined ? type : dialogContentProps.type, onDismiss: onDismiss ? onDismiss : dialogContentProps.onDismiss, className: contentClassName || dialogContentProps.className }, dialogContentProps), this.props.children)));
    };
    DialogBase.defaultProps = {
        hidden: true
    };
    DialogBase = tslib_es6["b" /* __decorate */]([
        withResponsiveMode["b" /* withResponsiveMode */]
    ], DialogBase);
    return DialogBase;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Dialog/Dialog.styles.js

var Dialog_styles_GlobalClassNames = {
    root: 'ms-Dialog'
};
var Dialog_styles_getStyles = function (props) {
    var className = props.className, containerClassName = props.containerClassName, _a = props.dialogDefaultMinWidth, dialogDefaultMinWidth = _a === void 0 ? '288px' : _a, _b = props.dialogDefaultMaxWidth, dialogDefaultMaxWidth = _b === void 0 ? '340px' : _b, hidden = props.hidden, theme = props.theme;
    var classNames = Object(Styling["o" /* getGlobalClassNames */])(Dialog_styles_GlobalClassNames, theme);
    return {
        root: [classNames.root, theme.fonts.medium, className],
        main: [
            {
                width: dialogDefaultMinWidth,
                outline: '3px solid transparent',
                selectors: (_c = {},
                    _c["@media (min-width: " + Styling["j" /* ScreenWidthMinMedium */] + "px)"] = {
                        width: 'auto',
                        maxWidth: dialogDefaultMaxWidth,
                        minWidth: dialogDefaultMinWidth
                    },
                    _c)
            },
            !hidden && { display: 'flex' },
            containerClassName
        ]
    };
    var _c;
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Dialog/Dialog.js



var Dialog = Object(Utilities["_10" /* styled */])(Dialog_base_DialogBase, Dialog_styles_getStyles, undefined, { scope: 'Dialog' });

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Dialog/index.js








// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Dialog.js



// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Callout.js + 12 modules
var Callout = __webpack_require__(66);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/css.js
var css = __webpack_require__(64);

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(0);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// CONCATENATED MODULE: ./lib/debug/debugComponents/debugPrompt/DebugPrompt.resx.js
var key = '_upo3vfLFBbnbzl2hKy2TwA';
var allStrings = ( false) ?
    require("../../../resx-strings/en-us.json") :
    __webpack_require__(10);
var strings = allStrings[key];
/* harmony default export */ var DebugPrompt_resx = (strings);

// CONCATENATED MODULE: ./lib/debug/debugComponents/debugComponents.module.scss.js
__webpack_require__(69);
var debugComponents_module_scss_styles = {
    dialogContainer: 'dialogContainer_97ce864d',
};
/* harmony default export */ var debugComponents_module_scss = (debugComponents_module_scss_styles);

// CONCATENATED MODULE: ./lib/debug/debugComponents/debugPrompt/DebugPrompt.module.scss.js
__webpack_require__(71);
var DebugPrompt_module_scss_styles = {
    warningText: 'warningText_065f13e3',
    calloutFadeIn: 'calloutFadeIn_065f13e3',
    callout: 'callout_065f13e3',
    calloutText: 'calloutText_065f13e3',
};
/* harmony default export */ var DebugPrompt_module_scss = (DebugPrompt_module_scss_styles);

// CONCATENATED MODULE: ./lib/debug/debugComponents/debugPrompt/DebugPrompt.js
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









var DebugPrompt_DebugPrompt =  (function (_super) {
    __extends(DebugPrompt, _super);
    function DebugPrompt(props) {
        var _this = _super.call(this, props) || this;
        _this._calloutTarget = undefined;
        _this.state = {
            showDialog: true,
            showCallout: false,
            dismissed: false
        };
        return _this;
    }
    DebugPrompt.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () { return _this.setState({
            showCallout: _this.state.showDialog 
        }); }, 5000); 
    };
    DebugPrompt.prototype.render = function () {
        var _this = this;
        var _a;
        var callback = function (allow) {
            setTimeout(function () { return _this.setState({ dismissed: true }); }, 200);
            _this.setState({
                showCallout: false,
                showDialog: false
            });
            _this.props.callback(allow);
        };
        return !this.state.dismissed
            ? (FakeReact["createElement"]("div", { role: 'dialog', "data-automation-id": 'debugManifestPromptDialog', "aria-labelledby": 'manifestWarningLabel' },
                FakeReact["createElement"](Dialog, { dialogContentProps: {
                        type: DialogType.largeHeader,
                        title: this.props.title
                    }, hidden: !this.state.showDialog, modalProps: {
                        isBlocking: true,
                        containerClassName: debugComponents_module_scss.dialogContainer
                    } },
                    FakeReact["createElement"]("p", { className: DebugPrompt_module_scss.warningText }, DebugPrompt_resx.debugManifestLoadingWarning),
                    FakeReact["createElement"]("p", { className: DebugPrompt_module_scss.warningText }, sp_core_library_["Text"].format(DebugPrompt_resx.debugManifestLoadingWarning2, DebugPrompt_resx.debugManifestLoadingCancel)),
                    FakeReact["createElement"](DialogFooter, null,
                        FakeReact["createElement"](Button["b" /* DefaultButton */], { "data-automation-id": 'debugManifestConfirmButton', onClick: function () { return callback(true); } }, DebugPrompt_resx.debugManifestLoadingConfirm),
                        FakeReact["createElement"](Button["d" /* PrimaryButton */], { "data-automation-id": 'debugManifestCancelButton', onClick: function () { return callback(false); } },
                            FakeReact["createElement"]("div", { ref: function (calloutTarget) { return _this._calloutTarget = calloutTarget || _this._calloutTarget; } }, DebugPrompt_resx.debugManifestLoadingCancel)))),
                FakeReact["createElement"](Callout["a" /* Callout */], { className: Object(css["a" /* css */])(DebugPrompt_module_scss.callout, (_a = {}, _a[DebugPrompt_module_scss.calloutFadeIn] = !!this.state.showCallout, _a)), target: this._calloutTarget, directionalHint: Callout["b" /* DirectionalHint */].bottomCenter, gapSpace: 10 },
                    FakeReact["createElement"]("div", { className: DebugPrompt_module_scss.calloutText }, DebugPrompt_resx.debugManifestLoadingCalloutText))))
            : null; 
    };
    return DebugPrompt;
}(FakeReact["Component"]));
/* harmony default export */ var debugPrompt_DebugPrompt = (DebugPrompt_DebugPrompt);

// CONCATENATED MODULE: ./lib/debug/debugComponents/debugError/DebugError.module.scss.js
__webpack_require__(73);
var DebugError_module_scss_styles = {
    detailText: 'detailText_220147ae',
    errorText: 'errorText_220147ae',
};
/* harmony default export */ var DebugError_module_scss = (DebugError_module_scss_styles);

// CONCATENATED MODULE: ./lib/debug/debugComponents/debugError/DebugError.resx.js
var DebugError_resx_key = '_mraBnnuq2J9WjrAcnw9QNA';
var DebugError_resx_allStrings = ( false) ?
    require("../../../resx-strings/en-us.json") :
    __webpack_require__(10);
var DebugError_resx_strings = DebugError_resx_allStrings[DebugError_resx_key];
/* harmony default export */ var DebugError_resx = (DebugError_resx_strings);

// CONCATENATED MODULE: ./lib/debug/debugComponents/debugError/DebugError.js
var DebugError___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var DebugError_DebugError =  (function (_super) {
    DebugError___extends(DebugError, _super);
    function DebugError(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isShown: true
        };
        return _this;
    }
    DebugError.prototype.render = function () {
        var _this = this;
        return (FakeReact["createElement"]("div", { "data-automation-id": 'debugManifestErrorDialog', role: 'dialog' },
            FakeReact["createElement"](Dialog, { hidden: !this.state.isShown, dialogContentProps: {
                    type: DialogType.largeHeader,
                    title: this.props.title
                }, modalProps: {
                    isBlocking: true,
                    containerClassName: debugComponents_module_scss.dialogContainer
                } },
                FakeReact["createElement"]("p", { className: DebugError_module_scss.detailText }, this.props.errorText || DebugError_resx.debugManifestErrorDetail),
                FakeReact["createElement"]("p", { className: DebugError_module_scss.errorText }, this.props.innerError.toString()),
                FakeReact["createElement"](DialogFooter, null,
                    FakeReact["createElement"](Button["d" /* PrimaryButton */], { "data-automation-id": 'debugManifestErrorDismissButton', onClick: function () { return _this.setState({ isShown: false }); } }, DebugError_resx.debugManifestErrorDismissButtonText)))));
    };
    return DebugError;
}(FakeReact["Component"]));
/* harmony default export */ var debugError_DebugError = (DebugError_DebugError);

// CONCATENATED MODULE: ./lib/debug/debugComponents/index.js
/* harmony export (immutable) */ __webpack_exports__["showDebugPrompt"] = showDebugPrompt;
/* harmony export (immutable) */ __webpack_exports__["showError"] = showError;





var _errorIsShown = false;
var _containerElement;
function showDebugPrompt(options) {
    return new Promise(function (resolve) {
        var title = options.loaderRequested && options.manifestsRequested
            ? DebugPrompt_resx.allowDebugLoaderAndManifestsTitle
            : (options.loaderRequested ? DebugPrompt_resx.allowDebugLoaderTitle : DebugPrompt_resx.allowDebugManifestsTitle);
        FakeReactDOM["render"](FakeReact["createElement"](debugPrompt_DebugPrompt, { title: title, callback: resolve }), _ensureEmptyContainerElement());
    });
}
function showError(innerError, errorText, title) {
    if (!_errorIsShown) {
        _errorIsShown = true;
        FakeReactDOM["render"](FakeReact["createElement"](debugError_DebugError, { innerError: innerError, errorText: errorText, title: title }), _ensureEmptyContainerElement());
    }
}
function _ensureEmptyContainerElement() {
    if (!_containerElement) {
        _containerElement = document.createElement('div');
        document.body.appendChild(_containerElement);
    }
    return _containerElement;
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/version.js
var version = __webpack_require__(54);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/Async.js
/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
var Async_Async = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function Async(parent, onError) {
        this._timeoutIds = null;
        this._immediateIds = null;
        this._intervalIds = null;
        this._animationFrameIds = null;
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._noop = function () {
            /* do nothing */
        };
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        var id;
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (id in this._timeoutIds) {
                if (this._timeoutIds.hasOwnProperty(id)) {
                    this.clearTimeout(parseInt(id, 10));
                }
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (id in this._immediateIds) {
                if (this._immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (id in this._intervalIds) {
                if (this._intervalIds.hasOwnProperty(id)) {
                    this.clearInterval(parseInt(id, 10));
                }
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (id in this._animationFrameIds) {
                if (this._animationFrameIds.hasOwnProperty(id)) {
                    this.cancelAnimationFrame(parseInt(id, 10));
                }
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            if (!this._timeoutIds) {
                this._timeoutIds = {};
            }
            /* tslint:disable:ban-native-functions */
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._timeoutIds) {
                        delete _this._timeoutIds[timeoutId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    if (_this._onErrorHandler) {
                        _this._onErrorHandler(e);
                    }
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._timeoutIds[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        if (this._timeoutIds && this._timeoutIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearTimeout(id);
            delete this._timeoutIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @returns The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback) {
        var _this = this;
        var immediateId = 0;
        if (!this._isDisposed) {
            if (!this._immediateIds) {
                this._immediateIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._immediateIds) {
                        delete _this._immediateIds[immediateId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            immediateId = window.setImmediate ? window.setImmediate(setImmediateCallback) : window.setTimeout(setImmediateCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     */
    Async.prototype.clearImmediate = function (id) {
        if (this._immediateIds && this._immediateIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
            delete this._immediateIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            /* tslint:disable:ban-native-functions */
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearInterval(id);
            delete this._intervalIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = new Date().getTime();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () {
                return;
            };
            /* tslint:disable:no-any */
            noOpFunction.flush = (function () { return null; });
            /* tslint:enable:no-any */
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = new Date().getTime();
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        if (options && typeof options.maxWait === 'number' && !isNaN(options.maxWait)) {
            maxWait = options.maxWait;
        }
        var markExecuted = function (time) {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuteTime = time;
        };
        var invokeFunction = function (time) {
            markExecuted(time);
            lastResult = func.apply(_this._parent, lastArgs);
        };
        var callback = function (userCall) {
            var now = new Date().getTime();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                invokeFunction(now);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var pending = function () {
            return !!timeoutId;
        };
        var cancel = function () {
            if (pending()) {
                // Mark the debounced function as having executed
                markExecuted(new Date().getTime());
            }
        };
        var flush = function () {
            if (pending()) {
                invokeFunction(new Date().getTime());
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        resultFunction.cancel = cancel;
        resultFunction.flush = flush;
        resultFunction.pending = pending;
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback) {
        var _this = this;
        var animationFrameId = 0;
        if (!this._isDisposed) {
            if (!this._animationFrameIds) {
                this._animationFrameIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    if (_this._animationFrameIds) {
                        delete _this._animationFrameIds[animationFrameId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            animationFrameId = window.requestAnimationFrame
                ? window.requestAnimationFrame(animationFrameCallback)
                : window.setTimeout(animationFrameCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._animationFrameIds[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id) {
        if (this._animationFrameIds && this._animationFrameIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
            /* tslint:enable:ban-native-functions */
            delete this._animationFrameIds[id];
        }
    };
    // tslint:disable-next-line:no-any
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());


// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/object.js
var object = __webpack_require__(55);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/EventGroup.js
/* tslint:disable:no-string-literal */

/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onclick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 */
var EventGroup_EventGroup = /** @class */ (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    // tslint:disable-next-line:no-any
    function EventGroup(parent) {
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._eventRecords = [];
    }
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     *
     */
    EventGroup.raise = function (
    // tslint:disable-next-line:no-any
    target, eventName, 
    // tslint:disable-next-line:no-any
    eventArgs, bubbleEvent) {
        var retVal;
        if (EventGroup._isElement(target)) {
            if (document.createEvent) {
                var ev = document.createEvent('HTMLEvents');
                ev.initEvent(eventName, bubbleEvent || false, true);
                Object(object["a" /* assign */])(ev, eventArgs);
                retVal = target.dispatchEvent(ev);
                // tslint:disable-next-line:no-any
            }
            else if (document['createEventObject']) {
                // IE8
                // tslint:disable-next-line:no-any
                var evObj = document['createEventObject'](eventArgs);
                // cannot set cancelBubble on evObj, fireEvent will overwrite it
                target.fireEvent('on' + eventName, evObj);
            }
        }
        else {
            while (target && retVal !== false) {
                var events = target.__events__;
                var eventRecords = events ? events[eventName] : null;
                if (eventRecords) {
                    for (var id in eventRecords) {
                        if (eventRecords.hasOwnProperty(id)) {
                            var eventRecordList = eventRecords[id];
                            for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                                var record = eventRecordList[listIndex];
                                if (record.objectCallback) {
                                    retVal = record.objectCallback.call(record.parent, eventArgs);
                                }
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                target = bubbleEvent ? target.parent : null;
            }
        }
        return retVal;
    };
    // tslint:disable-next-line:no-any
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    // tslint:disable-next-line:no-any
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    // tslint:disable-next-line:no-any
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            // IE8
            event.cancelBubble = true;
        }
    };
    EventGroup._isElement = function (target) {
        return !!target && (!!target.addEventListener || (typeof HTMLElement !== 'undefined' && target instanceof HTMLElement));
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                this.on(target, eventName, events[eventName], useCapture);
            }
        }
    };
    /** On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.on = function (target, eventName, callback, options) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, options);
            }
        }
        else {
            var parent_1 = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent_1,
                callback: callback,
                options: options
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events = (target.__events__ = target.__events__ || {});
            events[eventName] =
                events[eventName] ||
                    {
                        count: 0
                    };
            events[eventName][this._id] = events[eventName][this._id] || [];
            events[eventName][this._id].push(eventRecord);
            events[eventName].count++;
            if (EventGroup._isElement(target)) {
                // tslint:disable-next-line:no-any
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    var result;
                    try {
                        result = callback.apply(parent_1, args);
                        if (result === false && args[0]) {
                            var e = args[0];
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            e.cancelBubble = true;
                        }
                    }
                    catch (e) {
                        /* ErrorHelper.log(e); */
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                if (target.addEventListener) {
                    /* tslint:disable:ban-native-functions */
                    target.addEventListener(eventName, processElementEvent, options);
                    /* tslint:enable:ban-native-functions */
                }
                else if (target.attachEvent) {
                    // IE8
                    target.attachEvent('on' + eventName, processElementEvent);
                }
            }
            else {
                // tslint:disable-next-line:no-any
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent_1, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    // tslint:disable-next-line:no-any
    EventGroup.prototype.off = function (target, eventName, callback, options) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                (typeof options !== 'boolean' || options === eventRecord.options)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.options);
                    }
                    else if (eventRecord.target.detachEvent) {
                        // IE8
                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = (this._parent.__declaredEvents = this._parent.__declaredEvents || {});
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    // tslint:disable-next-line:no-inferrable-types
    EventGroup._uniqueId = 0;
    return EventGroup;
}());


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/dom.js
var DATA_PORTAL_ATTRIBUTE = 'data-portal-element';
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @public
 */
function setVirtualParent(child, parent) {
    var virtualChild = child;
    var virtualParent = parent;
    if (!virtualChild._virtual) {
        virtualChild._virtual = {
            children: []
        };
    }
    var oldParent = virtualChild._virtual.parent;
    if (oldParent && oldParent !== parent) {
        // Remove the child from its old parent.
        var index = oldParent._virtual.children.indexOf(virtualChild);
        if (index > -1) {
            oldParent._virtual.children.splice(index, 1);
        }
    }
    virtualChild._virtual.parent = virtualParent || undefined;
    if (virtualParent) {
        if (!virtualParent._virtual) {
            virtualParent._virtual = {
                children: []
            };
        }
        virtualParent._virtual.children.push(virtualChild);
    }
}
/**
 * Gets the virtual parent given the child element, if it exists.
 *
 * @public
 */
function getVirtualParent(child) {
    var parent;
    if (child && isVirtualElement(child)) {
        parent = child._virtual.parent;
    }
    return parent;
}
/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @public
 */
function getParent(child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    return child && ((allowVirtualParents && getVirtualParent(child)) || (child.parentNode && child.parentNode));
}
/**
 * Gets the elements which are child elements of the given element.
 * If `allowVirtualChildren` is `true`, this method enumerates virtual child elements
 * after the original children.
 * @param parent - The element to get the children of.
 * @param allowVirtualChildren - true if the method should enumerate virtual child elements.
 */
function getChildren(parent, allowVirtualChildren) {
    if (allowVirtualChildren === void 0) { allowVirtualChildren = true; }
    var children = [];
    if (parent) {
        for (var i = 0; i < parent.children.length; i++) {
            children.push(parent.children.item(i));
        }
        if (allowVirtualChildren && isVirtualElement(parent)) {
            children.push.apply(children, parent._virtual.children);
        }
    }
    return children;
}
/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @public
 */
function elementContains(parent, child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    var isContained = false;
    if (parent && child) {
        if (allowVirtualParents) {
            isContained = false;
            while (child) {
                var nextParent = getParent(child);
                if (nextParent === parent) {
                    isContained = true;
                    break;
                }
                child = nextParent;
            }
        }
        else if (parent.contains) {
            isContained = parent.contains(child);
        }
    }
    return isContained;
}
var _isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
function setSSR(isEnabled) {
    _isSSR = isEnabled;
}
/**
 * Helper to get the window object.
 *
 * @public
 */
function getWindow(rootElement) {
    if (_isSSR || typeof window === 'undefined') {
        return undefined;
    }
    else {
        return rootElement && rootElement.ownerDocument && rootElement.ownerDocument.defaultView
            ? rootElement.ownerDocument.defaultView
            : window;
    }
}
/**
 * Helper to get the document object.
 *
 * @public
 */
function getDocument(rootElement) {
    if (_isSSR || typeof document === 'undefined') {
        return undefined;
    }
    else {
        return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
    }
}
/**
 * Helper to get bounding client rect, works with window.
 *
 * @public
 */
function getRect(element) {
    var rect;
    if (element) {
        if (element === window) {
            rect = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                right: window.innerWidth,
                bottom: window.innerHeight
            };
        }
        else if (element.getBoundingClientRect) {
            rect = element.getBoundingClientRect();
        }
    }
    return rect;
}
/**
 * Identify element as a portal by setting an attribute.
 * @param element - Element to mark as a portal.
 */
function setPortalAttribute(element) {
    element.setAttribute(DATA_PORTAL_ATTRIBUTE, 'true');
}
/**
 * Determine whether a target is within a portal from perspective of root or optional parent.
 * This function only works against portal components that use the setPortalAttribute function.
 * If both parent and child are within the same portal this function will return false.
 * @param target - Element to query portal containment status of.
 * @param parent - Optional parent perspective. Search for containing portal stops at parent (or root if parent is undefined or invalid.)
 */
function portalContainsElement(target, parent) {
    var elementMatch = findElementRecursive(target, function (testElement) { return parent === testElement || testElement.hasAttribute(DATA_PORTAL_ATTRIBUTE); });
    return elementMatch !== null && elementMatch.hasAttribute(DATA_PORTAL_ATTRIBUTE);
}
/**
 * Finds the first parent element where the matchFunction returns true
 * @param element - element to start searching at
 * @param matchFunction - the function that determines if the element is a match
 * @returns the matched element or null no match was found
 */
function findElementRecursive(element, matchFunction) {
    if (!element || element === document.body) {
        return null;
    }
    return matchFunction(element) ? element : findElementRecursive(getParent(element), matchFunction);
}
/**
 * Determines if an element, or any of its ancestors, contain the given attribute
 * @param element - element to start searching at
 * @param attribute - the attribute to search for
 * @returns the value of the first instance found
 */
function elementContainsAttribute(element, attribute) {
    var elementMatch = findElementRecursive(element, function (testElement) { return testElement.hasAttribute(attribute); });
    return elementMatch && elementMatch.getAttribute(attribute);
}
/**
 * Determines whether or not an element has the virtual hierarchy extension.
 *
 * @public
 */
function isVirtualElement(element) {
    return element && !!element._virtual;
}

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/index.js + 14 modules
var lib = __webpack_require__(47);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/scroll.js


var _scrollbarWidth;
var _bodyScrollDisabledCount = 0;
var DisabledScrollClassName = Object(lib["f" /* mergeStyles */])({
    overflow: 'hidden !important'
});
/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
var DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
var _makeElementScrollAllower = function () {
    var _previousClientY = 0;
    var _element = null;
    // remember the clientY for future calls of _preventOverscrolling
    var _saveClientY = function (event) {
        if (event.targetTouches.length === 1) {
            _previousClientY = event.targetTouches[0].clientY;
        }
    };
    // prevent the body from scrolling when the user attempts
    // to scroll past the top or bottom of the element
    var _preventOverscrolling = function (event) {
        // only respond to a single-finger touch
        if (event.targetTouches.length !== 1) {
            return;
        }
        // prevent the body touchmove handler from firing
        // so that scrolling is allowed within the element
        event.stopPropagation();
        if (!_element) {
            return;
        }
        var clientY = event.targetTouches[0].clientY - _previousClientY;
        var scrollableParent = findScrollableParent(event.target);
        if (scrollableParent) {
            _element = scrollableParent;
        }
        // if the element is scrolled to the top,
        // prevent the user from scrolling up
        if (_element.scrollTop === 0 && clientY > 0) {
            event.preventDefault();
        }
        // if the element is scrolled to the bottom,
        // prevent the user from scrolling down
        if (_element.scrollHeight - _element.scrollTop <= _element.clientHeight && clientY < 0) {
            event.preventDefault();
        }
    };
    return function (element, events) {
        if (!element) {
            return;
        }
        events.on(element, 'touchstart', _saveClientY, { passive: false });
        events.on(element, 'touchmove', _preventOverscrolling, { passive: false });
        _element = element;
    };
};
/**
 * Allows the user to scroll within a element,
 * while preventing the user from scrolling the body
 */
var allowScrollOnElement = _makeElementScrollAllower();
var _disableIosBodyScroll = function (event) {
    event.preventDefault();
};
/**
 * Disables the body scrolling.
 *
 * @public
 */
function disableBodyScroll() {
    var doc = getDocument();
    if (doc && doc.body && !_bodyScrollDisabledCount) {
        doc.body.classList.add(DisabledScrollClassName);
        doc.body.addEventListener('touchmove', _disableIosBodyScroll, { passive: false, capture: false });
    }
    _bodyScrollDisabledCount++;
}
/**
 * Enables the body scrolling.
 *
 * @public
 */
function enableBodyScroll() {
    if (_bodyScrollDisabledCount > 0) {
        var doc = getDocument();
        if (doc && doc.body && _bodyScrollDisabledCount === 1) {
            doc.body.classList.remove(DisabledScrollClassName);
            doc.body.removeEventListener('touchmove', _disableIosBodyScroll);
        }
        _bodyScrollDisabledCount--;
    }
}
/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */
function getScrollbarWidth() {
    if (_scrollbarWidth === undefined) {
        var scrollDiv = document.createElement('div');
        scrollDiv.style.setProperty('width', '100px');
        scrollDiv.style.setProperty('height', '100px');
        scrollDiv.style.setProperty('overflow', 'scroll');
        scrollDiv.style.setProperty('position', 'absolute');
        scrollDiv.style.setProperty('top', '-9999px');
        document.body.appendChild(scrollDiv);
        // Get the scrollbar width
        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        // Delete the DIV
        document.body.removeChild(scrollDiv);
    }
    return _scrollbarWidth;
}
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
function findScrollableParent(startingElement) {
    var el = startingElement;
    // First do a quick scan for the scrollable attribute.
    while (el && el !== document.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== document.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var computedStyles = getComputedStyle(el);
            var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';
            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
                return el;
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === document.body) {
        // tslint:disable-next-line:no-any
        el = window;
    }
    return el;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/AutoScroll.js



var SCROLL_ITERATION_DELAY = 16;
var SCROLL_GUTTER_HEIGHT = 100;
var MAX_SCROLL_VELOCITY = 15;
/**
 * AutoScroll simply hooks up mouse events given a parent element, and scrolls the container
 * up/down depending on how close the mouse is to the top/bottom of the container.
 *
 * Once you don't want autoscroll any more, just dispose the helper and it will unhook events.
 *
 * @public
 */
var AutoScroll_AutoScroll = /** @class */ (function () {
    function AutoScroll(element) {
        this._events = new EventGroup_EventGroup(this);
        this._scrollableParent = findScrollableParent(element);
        this._incrementScroll = this._incrementScroll.bind(this);
        this._scrollRect = getRect(this._scrollableParent);
        // tslint:disable-next-line:no-any
        if (this._scrollableParent === window) {
            this._scrollableParent = document.body;
        }
        if (this._scrollableParent) {
            this._events.on(window, 'mousemove', this._onMouseMove, true);
            this._events.on(window, 'touchmove', this._onTouchMove, true);
        }
    }
    AutoScroll.prototype.dispose = function () {
        this._events.dispose();
        this._stopScroll();
    };
    AutoScroll.prototype._onMouseMove = function (ev) {
        this._computeScrollVelocity(ev.clientY);
    };
    AutoScroll.prototype._onTouchMove = function (ev) {
        if (ev.touches.length > 0) {
            this._computeScrollVelocity(ev.touches[0].clientY);
        }
    };
    AutoScroll.prototype._computeScrollVelocity = function (clientY) {
        if (!this._scrollRect) {
            return;
        }
        var scrollRectTop = this._scrollRect.top;
        var scrollClientBottom = scrollRectTop + this._scrollRect.height - SCROLL_GUTTER_HEIGHT;
        if (clientY < scrollRectTop + SCROLL_GUTTER_HEIGHT) {
            this._scrollVelocity = Math.max(-MAX_SCROLL_VELOCITY, -MAX_SCROLL_VELOCITY * ((SCROLL_GUTTER_HEIGHT - (clientY - scrollRectTop)) / SCROLL_GUTTER_HEIGHT));
        }
        else if (clientY > scrollClientBottom) {
            this._scrollVelocity = Math.min(MAX_SCROLL_VELOCITY, MAX_SCROLL_VELOCITY * ((clientY - scrollClientBottom) / SCROLL_GUTTER_HEIGHT));
        }
        else {
            this._scrollVelocity = 0;
        }
        if (this._scrollVelocity) {
            this._startScroll();
        }
        else {
            this._stopScroll();
        }
    };
    AutoScroll.prototype._startScroll = function () {
        if (!this._timeoutId) {
            this._incrementScroll();
        }
    };
    AutoScroll.prototype._incrementScroll = function () {
        if (this._scrollableParent) {
            this._scrollableParent.scrollTop += Math.round(this._scrollVelocity);
        }
        this._timeoutId = setTimeout(this._incrementScroll, SCROLL_ITERATION_DELAY);
    };
    AutoScroll.prototype._stopScroll = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            delete this._timeoutId;
        }
    };
    return AutoScroll;
}());


// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(45);

// EXTERNAL MODULE: ./lib/DeveloperTools/FBWrappers/FakeReact.js
var FakeReact = __webpack_require__(13);
var FakeReact_default = /*#__PURE__*/__webpack_require__.n(FakeReact);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/warn.js
var _warningCallback = undefined;
/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    for (var propName in deprecationMap) {
        if (props && propName in props) {
            var deprecationMessage = componentName + " property '" + propName + "' was used but has been deprecated.";
            var replacementPropName = deprecationMap[propName];
            if (replacementPropName) {
                deprecationMessage += " Use '" + replacementPropName + "' instead.";
            }
            warn(deprecationMessage);
        }
    }
}
/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
function warnMutuallyExclusive(componentName, props, exclusiveMap) {
    for (var propName in exclusiveMap) {
        if (props && propName in props) {
            var propInExclusiveMapValue = exclusiveMap[propName];
            if (propInExclusiveMapValue && propInExclusiveMapValue in props) {
                warn(componentName + " property '" + propName + "' is mutually exclusive with '" + exclusiveMap[propName] + "'. Use one or the other.");
            }
        }
    }
}
/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
 */
function warnConditionallyRequiredProps(componentName, props, requiredProps, conditionalPropName, condition) {
    if (condition === true) {
        for (var _i = 0, requiredProps_1 = requiredProps; _i < requiredProps_1.length; _i++) {
            var requiredPropName = requiredProps_1[_i];
            if (!(requiredPropName in props)) {
                warn(componentName + " property '" + requiredPropName + "' is required when '" + conditionalPropName + "' is used.'");
            }
        }
    }
}
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
function warn(message) {
    if (_warningCallback) {
        _warningCallback(message);
    }
    else if (console && console.warn) {
        console.warn(message);
    }
}
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/KeyCodes.js
/**
 * Simulated enum for keycodes. These will get inlined by uglify when used much like an enum
 *
 * @public
 */
var KeyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pauseBreak: 19,
    capslock: 20,
    escape: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    del: 46,
    zero: 48,
    one: 49,
    two: 50,
    three: 51,
    four: 52,
    five: 53,
    six: 54,
    seven: 55,
    eight: 56,
    nine: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftWindow: 91,
    rightWindow: 92,
    select: 93,
    zero_numpad: 96,
    one_numpad: 97,
    two_numpad: 98,
    three_numpad: 99,
    four_numpad: 100,
    five_numpad: 101,
    six_numpad: 102,
    seven_numpad: 103,
    eight_numpad: 104,
    nine_numpad: 105,
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalPoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrollLock: 145,
    semicolon: 186,
    equalSign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardSlash: 191,
    graveAccent: 192,
    openBracket: 219,
    backSlash: 220,
    closeBracket: 221,
    singleQuote: 222
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/keyboard.js

var DirectionalKeyCodes = (keyboard__a = {},
    keyboard__a[KeyCodes.up] = 1,
    keyboard__a[KeyCodes.down] = 1,
    keyboard__a[KeyCodes.left] = 1,
    keyboard__a[KeyCodes.right] = 1,
    keyboard__a[KeyCodes.home] = 1,
    keyboard__a[KeyCodes.end] = 1,
    keyboard__a[KeyCodes.tab] = 1,
    keyboard__a[KeyCodes.pageUp] = 1,
    keyboard__a[KeyCodes.pageDown] = 1,
    keyboard__a);
/**
 * Returns true if the keycode is a directional keyboard key.
 */
function isDirectionalKeyCode(which) {
    return !!DirectionalKeyCodes[which];
}
/**
 * Adds a keycode to the list of keys that, when pressed, should cause the focus outlines to be visible.
 * This can be used to add global shortcut keys that directionally move from section to section within
 * an app or between focus trap zones.
 */
function addDirectionalKeyCode(which) {
    DirectionalKeyCodes[which] = 1;
}
var keyboard__a;

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/initializeFocusRects.js


var IsFocusVisibleClassName = 'ms-Fabric--isFocusVisible';
/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'ms-Fabric--isFocusVisible' classname
 *    to the document body.
 * 3. When the user clicks a mouse button, we remove the classname if it exists.
 *
 * This logic allows components on the page to conditionally render focus treatments only
 * if the global classname exists, which simplifies logic overall.
 *
 * @param window - the window used to add the event listeners
 */
function initializeFocusRects(window) {
    var win = (window || getWindow());
    if (win && !win.__hasInitializeFocusRects__) {
        win.__hasInitializeFocusRects__ = true;
        win.addEventListener('mousedown', _onMouseDown, true);
        win.addEventListener('keydown', _onKeyDown, true);
    }
}
function _onMouseDown(ev) {
    var win = getWindow(ev.target);
    if (win) {
        var classList = win.document.body.classList;
        if (classList.contains(IsFocusVisibleClassName)) {
            classList.remove(IsFocusVisibleClassName);
        }
    }
}
function _onKeyDown(ev) {
    var win = getWindow(ev.target);
    if (win) {
        var classList = win.document.body.classList;
        if (isDirectionalKeyCode(ev.which) && !classList.contains(IsFocusVisibleClassName)) {
            classList.add(IsFocusVisibleClassName);
        }
    }
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/initializeDir.js

function initializeDir(window) {
    var win = (window || getWindow());
    if (win && !win.__hasInitializedDir__) {
        win.__hasInitializedDir__ = true;
        // Ensure that the documentElement has a 'dir' attribute.
        var documentElement = win.document.documentElement;
        if (!documentElement.hasAttribute('dir')) {
            documentElement.setAttribute('dir', 'ltr');
        }
    }
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/BaseComponent.js







/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 */
var BaseComponent_BaseComponent = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](BaseComponent, _super);
    // tslint:enable:variable-name
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    // tslint:disable-next-line:no-any
    function BaseComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // Ensure basic assumptions about the environment.
        initializeFocusRects();
        initializeDir();
        _makeAllSafe(_this, BaseComponent.prototype, [
            'componentDidMount',
            'shouldComponentUpdate',
            'getSnapshotBeforeUpdate',
            'render',
            'componentDidUpdate',
            'componentWillUnmount'
        ]);
        return _this;
    }
    /**
     * When the component receives props, make sure the componentRef is updated.
     */
    BaseComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._updateComponentRef(prevProps, this.props);
    };
    /**
     * When the component has mounted, update the componentRef.
     */
    BaseComponent.prototype.componentDidMount = function () {
        this._setComponentRef(this.props.componentRef, this);
    };
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    BaseComponent.prototype.componentWillUnmount = function () {
        this._setComponentRef(this.props.componentRef, null);
        if (this.__disposables) {
            for (var i = 0, len = this._disposables.length; i < len; i++) {
                var disposable = this.__disposables[i];
                if (disposable.dispose) {
                    disposable.dispose();
                }
            }
            this.__disposables = null;
        }
    };
    Object.defineProperty(BaseComponent.prototype, "className", {
        /**
         * Gets the object's class name.
         */
        get: function () {
            if (!this.__className) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = funcNameRegex.exec(this.constructor.toString());
                this.__className = results && results.length > 1 ? results[1] : '';
            }
            return this.__className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_disposables", {
        /**
         * Allows subclasses to push things to this._disposables to be auto disposed.
         */
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_async", {
        /**
         * Gets the async instance associated with the component, created on demand. The async instance gives
         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
         * preserve the this pointer so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__async) {
                this.__async = new Async_Async(this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_events", {
        /**
         * Gets the event group instance assocaited with the component, created on demand. The event instance
         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
         * will be automatically disconnected after unmounting. The helpers within the events object also
         * preserve the this reference so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__events) {
                this.__events = new EventGroup_EventGroup(this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     * @deprecated Use `createRef` from React.createRef.
     */
    BaseComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            // tslint:disable-next-line:no-any
            this.__resolves[refName] = function (ref) {
                // tslint:disable-next-line:no-any
                return (_this[refName] = ref);
            };
        }
        return this.__resolves[refName];
    };
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
        if (newProps === void 0) { newProps = {}; }
        // currentProps *should* always be defined, but verify that just in case a subclass is manually
        // calling a lifecycle method with no parameters (which has happened) or other odd usage.
        if (currentProps && newProps && currentProps.componentRef !== newProps.componentRef) {
            this._setComponentRef(currentProps.componentRef, null);
            this._setComponentRef(newProps.componentRef, this);
        }
    };
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
        warnDeprecations(this.className, this.props, deprecationMap);
    };
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
        warnMutuallyExclusive(this.className, this.props, mutuallyExclusiveMap);
    };
    /**
     * Warns when props are required if a condition is met.
     *
     * @param requiredProps - The name of the props that are required when the condition is met.
     * @param conditionalPropName - The name of the prop that the condition is based on.
     * @param condition - Whether the condition is met.
     */
    BaseComponent.prototype._warnConditionallyRequiredProps = function (requiredProps, conditionalPropName, condition) {
        warnConditionallyRequiredProps(this.className, this.props, requiredProps, conditionalPropName, condition);
    };
    BaseComponent.prototype._setComponentRef = function (ref, value) {
        if (!this._skipComponentRefResolution && ref) {
            if (typeof ref === 'function') {
                ref(value);
            }
            if (typeof ref === 'object') {
                // tslint:disable:no-any
                ref.current = value;
            }
        }
    };
    return BaseComponent;
}(FakeReact["Component"]));

/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
function _makeAllSafe(obj, prototype, methodNames) {
    for (var i = 0, len = methodNames.length; i < len; i++) {
        _makeSafe(obj, prototype, methodNames[i]);
    }
}
function _makeSafe(obj, prototype, methodName) {
    // tslint:disable:no-any
    var classMethod = obj[methodName];
    var prototypeMethod = prototype[methodName];
    // tslint:enable:no-any
    if (classMethod || prototypeMethod) {
        // tslint:disable-next-line:no-any
        obj[methodName] = function () {
            var retVal;
            if (prototypeMethod) {
                retVal = prototypeMethod.apply(this, arguments);
            }
            if (classMethod !== prototypeMethod) {
                retVal = classMethod.apply(this, arguments);
            }
            return retVal;
        };
    }
}
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */
function nullRender() {
    return null;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/Context.js


/**
 * @deprecated This function uses the legacy context API, which is deprecated and should not be
 * used in new code. Please migrate to the new context API. https://reactjs.org/docs/context.html
 */
function provideContext(contextTypes, mapPropsToContext) {
    var Provider = /** @class */ (function (_super) {
        tslib_es6["c" /* __extends */](Provider, _super);
        function Provider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Provider.prototype.getChildContext = function () {
            return mapPropsToContext(this.props);
        };
        Provider.prototype.render = function () {
            return FakeReact["Children"].only(this.props.children);
        };
        Provider.childContextTypes = contextTypes;
        return Provider;
    }(FakeReact["Component"]));
    return Provider;
}

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/GlobalSettings.js
var GlobalSettings = __webpack_require__(60);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/Customizations.js



var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {}, inCustomizerContext: false };
var _allSettings = GlobalSettings["a" /* GlobalSettings */].getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {},
    inCustomizerContext: false
});
var _events = new EventGroup_EventGroup(_allSettings);
var Customizations_Customizations = /** @class */ (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    // tslint:disable-next-line:no-any
    Customizations.applySettings = function (settings) {
        _allSettings.settings = tslib_es6["a" /* __assign */]({}, _allSettings.settings, settings);
        Customizations._raiseChange();
    };
    // tslint:disable-next-line:no-any
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = tslib_es6["a" /* __assign */]({}, _allSettings.scopedSettings[scopeName], settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings
    // tslint:disable-next-line:no-any
    ) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        // tslint:disable-next-line:no-any
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] =
                localScopedSettings[property] ||
                    localSettings.settings[property] ||
                    globalScopedSettings[property] ||
                    _allSettings.settings[property];
        }
        return settings;
    };
    Customizations.observe = function (onChange) {
        _events.on(_allSettings, 'change', onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events.off(_allSettings, 'change', onChange);
    };
    Customizations._raiseChange = function () {
        _events.raise('change');
    };
    return Customizations;
}());


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/Customizer.js




var CustomizerContext = FakeReact["createContext"]({
    customizations: {
        inCustomizerContext: false,
        settings: {},
        scopedSettings: {}
    }
});
/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator, or use the styled HOC. This enables
 * injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop which should be one of the following:
 * - A json map which contains 1 or more name/value pairs representing injectable props.
 * - A function that receives the current settings and returns the new ones that apply to the scope
 *
 * @public
 */
var Customizer_Customizer = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](Customizer, _super);
    function Customizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._changeCount = 0;
        _this._onCustomizationChange = function () { return _this.forceUpdate(); };
        return _this;
    }
    Customizer.prototype.componentDidMount = function () {
        Customizations_Customizations.observe(this._onCustomizationChange);
    };
    Customizer.prototype.componentWillUnmount = function () {
        Customizations_Customizations.unobserve(this._onCustomizationChange);
    };
    Customizer.prototype.render = function () {
        var _this = this;
        var contextTransform = this.props.contextTransform;
        return (FakeReact["createElement"](CustomizerContext.Consumer, null, function (parentContext) {
            var newContext = mergeCustomizations(_this.props, parentContext);
            if (contextTransform) {
                newContext = contextTransform(newContext);
            }
            return FakeReact["createElement"](CustomizerContext.Provider, { value: newContext }, _this.props.children);
        }));
    };
    return Customizer;
}(BaseComponent_BaseComponent));

/**
 * Merge props and customizations giving priority to props over context.
 * NOTE: This function will always perform multiple merge operations. Use with caution.
 * @param props - New settings to merge in.
 * @param parentContext - Context containing current settings.
 * @returns Merged customizations.
 */
function mergeCustomizations(props, parentContext) {
    var _a = (parentContext || {}).customizations, customizations = _a === void 0 ? { settings: {}, scopedSettings: {} } : _a;
    return {
        customizations: {
            settings: mergeSettings(customizations.settings, props.settings),
            scopedSettings: mergeScopedSettings(customizations.scopedSettings, props.scopedSettings),
            inCustomizerContext: true
        }
    };
}
/**
 * Merge new and old settings, giving priority to new settings.
 * New settings is optional in which case oldSettings is returned as-is.
 * @param oldSettings - Old settings to fall back to.
 * @param newSettings - New settings that will be merged over oldSettings.
 * @returns Merged settings.
 */
function mergeSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = isSettingsFunction(newSettings) ? newSettings : settingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function mergeScopedSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = isSettingsFunction(newSettings) ? newSettings : scopedSettingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function isSettingsFunction(settings) {
    return typeof settings === 'function';
}
function settingsMergeWith(newSettings) {
    return function (settings) { return (newSettings ? tslib_es6["a" /* __assign */]({}, settings, newSettings) : settings); };
}
function scopedSettingsMergeWith(scopedSettingsFromProps) {
    if (scopedSettingsFromProps === void 0) { scopedSettingsFromProps = {}; }
    return function (oldScopedSettings) {
        var newScopedSettings = tslib_es6["a" /* __assign */]({}, oldScopedSettings);
        for (var scopeName in scopedSettingsFromProps) {
            if (scopedSettingsFromProps.hasOwnProperty(scopeName)) {
                newScopedSettings[scopeName] = tslib_es6["a" /* __assign */]({}, oldScopedSettings[scopeName], scopedSettingsFromProps[scopeName]);
            }
        }
        return newScopedSettings;
    };
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/DelayedRender.js


/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 */
var DelayedRender_DelayedRender = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: false
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        this._timeoutId = setTimeout(function () {
            _this.setState({
                isRendered: true
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? FakeReact["Children"].only(this.props.children) : null;
    };
    DelayedRender.defaultProps = {
        delay: 0
    };
    return DelayedRender;
}(FakeReact["Component"]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/FabricPerformance.js
var now = function () { return (typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now()); };
var RESET_INTERVAL = 3 * 60 * 1000; // auto reset every 3 minutes
/**
 * Performance helper class for measuring things.
 *
 * @public
 */
var FabricPerformance = /** @class */ (function () {
    function FabricPerformance() {
    }
    /**
     * Measures execution time of the given syncronous function. If the same logic is executed multiple times,
     * each individual measurement will be collected as well the overall numbers.
     * @param name - The name of this measurement
     * @param func - The logic to be measured for execution time
     */
    FabricPerformance.measure = function (name, func) {
        if (FabricPerformance._timeoutId) {
            FabricPerformance.setPeriodicReset();
        }
        var start = now();
        func();
        var end = now();
        var measurement = FabricPerformance.summary[name] || {
            totalDuration: 0,
            count: 0,
            all: []
        };
        var duration = end - start;
        measurement.totalDuration += duration;
        measurement.count++;
        measurement.all.push({
            duration: duration,
            timeStamp: end
        });
        FabricPerformance.summary[name] = measurement;
    };
    FabricPerformance.reset = function () {
        FabricPerformance.summary = {};
        clearTimeout(FabricPerformance._timeoutId);
        FabricPerformance._timeoutId = NaN;
    };
    FabricPerformance.setPeriodicReset = function () {
        FabricPerformance._timeoutId = setTimeout(function () { return FabricPerformance.reset(); }, RESET_INTERVAL);
    };
    FabricPerformance.summary = {};
    return FabricPerformance;
}());


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/Rectangle.js
/**
 * Rectangle helper class.
 *
 * @public
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Calculated automatically by subtracting the right from left
         */
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
         * Calculated automatically by subtracting the bottom from top.
         */
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    Rectangle.prototype.equals = function (rect) {
        // I'm fixing it to 4 decimal places because it allows enough precision and will handle cases when something should be rounded,
        // like .999999 should round to 1.
        return (parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) &&
            parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) &&
            parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) &&
            parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4)));
    };
    return Rectangle;
}());


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/aria.js
/**
 * ARIA helper to concatenate attributes, returning undefined if all attributes
 * are undefined. (Empty strings are not a valid ARIA attribute value.)
 *
 * @param ariaAttributes - ARIA attributes to merge
 */
function mergeAriaAttributeValues() {
    var ariaAttributes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ariaAttributes[_i] = arguments[_i];
    }
    var mergedAttribute = ariaAttributes
        .filter(function (arg) { return arg !== undefined && arg !== null; })
        .join(' ')
        .trim();
    return mergedAttribute === '' ? undefined : mergedAttribute;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/array.js
/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 */
function findIndex(array, cb) {
    var index = -1;
    for (var i = 0; array && i < array.length; i++) {
        if (cb(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}
/**
 * Helper to find the first item within an array that satisfies the callback.
 * @param array - Array to search
 * @param cb - Callback which returns true on matches
 */
function find(array, cb) {
    var index = findIndex(array, cb);
    if (index < 0) {
        return undefined;
    }
    return array[index];
}
/**
 * Creates an array of a given size and helper method to populate.
 *
 * @public
 * @param size - Size of array.
 * @param getItem - Callback to populate given cell index.
 */
function createArray(size, getItem) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(getItem(i));
    }
    return array;
}
/**
 * Convert the given array to a matrix with columnCount number
 * of columns.
 *
 * @public
 * @param items - The array to convert
 * @param columnCount - The number of columns for the resulting matrix
 * @returns A matrix of items
 */
function toMatrix(items, columnCount) {
    return items.reduce(function (rows, currentValue, index) {
        if (index % columnCount === 0) {
            rows.push([currentValue]);
        }
        else {
            rows[rows.length - 1].push(currentValue);
        }
        return rows;
    }, []);
}
/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
function removeIndex(array, index) {
    return array.filter(function (_, i) { return index !== i; });
}
/**
 * Given an array, this function returns a new array where the element at a given index has been replaced.
 * @param array - The array to operate on
 * @param newElement - The element that will be placed in the new array
 * @param index - The index of the element that should be replaced
 */
function replaceElement(array, newElement, index) {
    var copy = array.slice();
    copy[index] = newElement;
    return copy;
}
/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */
function addElementAtIndex(array, index, itemToAdd) {
    var copy = array.slice();
    copy.splice(index, 0, itemToAdd);
    return copy;
}
/**
 * Given an array where each element is of type T or T[], flatten it into an array of T
 * @param array - The array where each element can optionally also be an array
 */
function flatten(array) {
    var result = [];
    array.forEach(function (item) { return (result = result.concat(item)); });
    return result;
}
/**
 * Returns a boolean indicating if the two given arrays are equal in length and values.
 *
 * @param array1 - First array to compare
 * @param array2 - Second array to compare
 * @returns True if the arrays are the same length and have the same values in the same positions, false otherwise.
 */
function arraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/asAsync.js
/**
 * asAsync - a HOC for async loading components.
 *
 * Usage:
 *
 * const AsyncDialog = asAsync({
 *   load: () => import('Dialog').then(result => result.default),
 * });
 *
 * React.render(domElement, <AsyncDialog asyncPlaceholder={ () => <Spinner/> } { ...dialogProps } />);
 *
 * Note the `asyncPlaceholder` prop will be respected when rendering the async component and it hasn't
 * been loaded yet.
 */


/**
 * If possible, use a WeakMap to maintain a cache of loaded components.
 * This can be used to synchronously render components that have already been loaded,
 * rather than having to wait for at least one async tick.
 */
var _syncModuleCache = typeof WeakMap !== 'undefined'
    ? // tslint:disable-next-line:no-any
        new WeakMap()
    : undefined;
/**
 * Produces a component which internally loads the target component before first mount.
 * The component passes all props through to the loaded component.
 *
 * This overload accepts a module with a default export for the component.
 */
function asAsync(options) {
    var Async = /** @class */ (function (_super) {
        tslib_es6["c" /* __extends */](Async, _super);
        function Async() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                Component: _syncModuleCache ? _syncModuleCache.get(options.load) : undefined
            };
            return _this;
        }
        Async.prototype.render = function () {
            // Typescript issue: the rest can't be pulled without the any cast, as TypeScript fails with rest on generics.
            // tslint:disable-next-line:no-any
            var _a = this.props, forwardedRef = _a.forwardedRef, Placeholder = _a.asyncPlaceholder, rest = tslib_es6["d" /* __rest */](_a, ["forwardedRef", "asyncPlaceholder"]);
            var Component = this.state.Component;
            return Component ? FakeReact["createElement"](Component, tslib_es6["a" /* __assign */]({ ref: forwardedRef }, rest)) : Placeholder ? FakeReact["createElement"](Placeholder, null) : null;
        };
        Async.prototype.componentDidMount = function () {
            var _this = this;
            var Component = this.state.Component;
            if (!Component) {
                options
                    .load()
                    .then(function (LoadedComponent) {
                    if (LoadedComponent) {
                        // Cache component for future reference.
                        _syncModuleCache && _syncModuleCache.set(options.load, LoadedComponent);
                        // Set state.
                        _this.setState({
                            Component: LoadedComponent
                        }, options.onLoad);
                    }
                })
                    .catch(options.onError);
            }
        };
        return Async;
    }(FakeReact["Component"]));
    return FakeReact["forwardRef"](function (props, ref) { return (FakeReact["createElement"](Async, tslib_es6["a" /* __assign */]({}, props, { forwardedRef: ref }))); });
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/assertNever.js
/**
 * AssertNever is a utility function that can be used for exhaustiveness checks in switch statements.
 *
 * @public
 */
function assertNever(x) {
    throw new Error('Unexpected object: ' + x);
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/autobind.js
/**
 * Autobind is a utility for binding methods in a class. This simplifies tagging methods as being "bound" to the this pointer
 * so that they can be used in scenarios that simply require a function callback.
 * @deprecated This has been deprecated in favor of using arrow function properties
 */
function autobind(
// tslint:disable-next-line:no-any
target, key, descriptor) {
    var fn = descriptor.value;
    var defining = false;
    return {
        configurable: true,
        get: function () {
            if (defining || (fn && this === fn.prototype) || this.hasOwnProperty(key)) {
                return fn;
            }
            // Bind method only once, and update the property to return the bound value from now on
            var fnBound = fn && fn.bind(this);
            defining = true;
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: fnBound
            });
            defining = false;
            return fnBound;
        },
        // tslint:disable-next-line:no-any
        set: function (newValue) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: newValue
            });
        }
    };
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/classNamesFunction.js

/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 */
function classNamesFunction() {
    // TODO: memoize.
    var getClassNames = function (styleFunctionOrObject, styleProps) {
        if (styleProps === void 0) { styleProps = {}; }
        // styleSet might be undefined if styleFunctionOrObject is undefined, but getStyles should never
        // ordinarily be undefined (it would hardly make any sense).
        // However, because we usually use `props.styles` as the argument to an invocation of this method, and
        // `props.styles` itself is defined as optional, this avoids the need to use `!` at all invocation points.
        if (styleFunctionOrObject === undefined) {
            return {};
        }
        var styleSet = styleFunctionOrObject && (typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject);
        return Object(lib["e" /* mergeStyleSets */])(styleSet);
    };
    return getClassNames;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/createRef.js
/**
 * @deprecated Use React.createRef.
 * May be removed in 6 months (Jan '19).
 */
function createRef() {
    var refObject = (function (element) {
        refObject.current = element;
    });
    // This getter is here to support the deprecated value prop on the refObject.
    Object.defineProperty(refObject, 'value', {
        get: function () {
            return refObject.current;
        }
    });
    refObject.current = null;
    return refObject;
}

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/css.js
var css = __webpack_require__(64);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/hoistStatics.js
/**
 * Allows you to hoist static functions in components.
 * Created for the purpose of fixing broken static functions in classes
 * that utilize decorators.
 *
 * @public
 * @param source - The object where the methods are hoisted from.
 * @param dest - The object to hoist the methods onto.
 * @returns The dest object with methods added
 */
function hoistStatics(source, dest) {
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            // tslint:disable-next-line:no-any
            dest[name_1] = source[name_1];
        }
    }
    return dest;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/customizable.js






function customizable_customizable(scope, fields, concatStyles
// tslint:disable-next-line:no-any
) {
    // tslint:disable-next-line:no-shadowed-variable
    return function customizableFactory(
    // tslint:disable-next-line:no-any
    ComposedComponent
    // tslint:disable-next-line:no-any
    ) {
        var resultClass = (_a = /** @class */ (function (_super) {
                tslib_es6["c" /* __extends */](ComponentWithInjectedProps, _super);
                // tslint:disable-next-line:no-any
                function ComponentWithInjectedProps(props) {
                    var _this = _super.call(this, props) || this;
                    _this._onSettingChanged = _this._onSettingChanged.bind(_this);
                    return _this;
                }
                ComponentWithInjectedProps.prototype.componentDidMount = function () {
                    Customizations_Customizations.observe(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.componentWillUnmount = function () {
                    Customizations_Customizations.unobserve(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.render = function () {
                    var _this = this;
                    return (FakeReact["createElement"](CustomizerContext.Consumer, null, function (context) {
                        var defaultProps = Customizations_Customizations.getSettings(fields, scope, context.customizations);
                        // tslint:disable-next-line:no-any
                        var componentProps = _this.props;
                        // If defaultProps.styles is a function, evaluate it before calling concatStyleSets
                        if (defaultProps.styles && typeof defaultProps.styles === 'function') {
                            defaultProps.styles = defaultProps.styles(tslib_es6["a" /* __assign */]({}, defaultProps, componentProps));
                        }
                        if (concatStyles) {
                            var mergedStyles = Object(lib["b" /* concatStyleSets */])(defaultProps.styles, componentProps.styles);
                            return FakeReact["createElement"](ComposedComponent, tslib_es6["a" /* __assign */]({}, defaultProps, componentProps, { styles: mergedStyles }));
                        }
                        return FakeReact["createElement"](ComposedComponent, tslib_es6["a" /* __assign */]({}, defaultProps, componentProps));
                    }));
                };
                ComponentWithInjectedProps.prototype._onSettingChanged = function () {
                    this.forceUpdate();
                };
                return ComponentWithInjectedProps;
            }(FakeReact["Component"])),
            _a.displayName = 'Customized' + scope,
            _a);
        return hoistStatics(ComposedComponent, resultClass);
        var _a;
    };
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/focus.js
/* tslint:disable:no-string-literal */

var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
/**
 * Gets the first focusable element.
 *
 * @public
 */
function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones);
}
/**
 * Gets the last focusable element.
 *
 * @public
 */
function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones);
}
/**
 * Gets the first tabbable element.
 * The difference between focusable and tabbable is that tabbable elements are focusable elements that also have tabIndex != -1.
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues forward.  Typical use passes rootElement.firstChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @public
 */
function getFirstTabbable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
/**
 * Gets the last tabbable element.
 * The difference between focusable and tabbable is that tabbable elements are focusable elements that also have tabIndex != -1.
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues in reverse.  Typical use passes rootElement.lastChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @public
 */
function getLastTabbable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */
function focusFirstChild(rootElement) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true);
    if (element) {
        focusAsync(element);
        return true;
    }
    return false;
}
/**
 * Traverse to find the previous element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 */
function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (!allowFocusRoot && currentElement === rootElement)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check its children.
    if (traverseChildren &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            if ((tabbable && isElementTabbable(childMatch, true)) || !tabbable) {
                return childMatch;
            }
            var childMatchSiblingMatch = getPreviousElement(rootElement, childMatch.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
            if (childMatchSiblingMatch) {
                return childMatchSiblingMatch;
            }
            var childMatchParent = childMatch.parentElement;
            // At this point if we have not found any potential matches
            // start looking at the rest of the subtree under the currentParent.
            // NOTE: We do not want to recurse here because doing so could
            // cause elements to get skipped.
            while (childMatchParent && childMatchParent !== currentElement) {
                var childMatchParentMatch = getPreviousElement(rootElement, childMatchParent.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
                if (childMatchParentMatch) {
                    return childMatchParentMatch;
                }
                childMatchParent = childMatchParent.parentElement;
            }
        }
    }
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
        return currentElement;
    }
    // Check its previous sibling.
    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    // Check its parent.
    if (!suppressParentTraversal) {
        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
/**
 * Traverse to find the next focusable element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 */
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (currentElement === rootElement && suppressChildTraversal && !allowFocusRoot)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
        return currentElement;
    }
    // Check its children.
    if (!suppressChildTraversal &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    // Check its sibling.
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
/**
 * Determines if an element is visible.
 *
 * @public
 */
function isElementVisible(element) {
    // If the element is not valid, return false.
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    // Fallback to other methods of determining actual visibility.
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        // tslint:disable-next-line:no-any
        element.isVisible === true); // used as a workaround for testing.
}
/**
 * Determines if an element can receive focus programmatically or via a mouse click.
 * If checkTabIndex is true, additionally checks to ensure the element can be focused with the tab key, meaning tabIndex != -1.
 *
 * @public
 */
function isElementTabbable(element, checkTabIndex) {
    // If this element is null or is disabled, it is not considered tabbable.
    if (!element || element.disabled) {
        return false;
    }
    var tabIndex = 0;
    var tabIndexAttributeValue = null;
    if (element && element.getAttribute) {
        tabIndexAttributeValue = element.getAttribute('tabIndex');
        if (tabIndexAttributeValue) {
            tabIndex = parseInt(tabIndexAttributeValue, 10);
        }
    }
    var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
    var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
    var result = !!element &&
        isFocusableAttribute !== 'false' &&
        (element.tagName === 'A' ||
            element.tagName === 'BUTTON' ||
            element.tagName === 'INPUT' ||
            element.tagName === 'TEXTAREA' ||
            isFocusableAttribute === 'true' ||
            isTabIndexSet);
    return checkTabIndex ? tabIndex !== -1 && result : result;
}
/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */
function isElementFocusZone(element) {
    return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
}
/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */
function isElementFocusSubZone(element) {
    return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
}
/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */
function doesElementContainFocus(element) {
    var document = getDocument(element);
    var currentActiveElement = document && document.activeElement;
    if (currentActiveElement && elementContains(element, currentActiveElement)) {
        return true;
    }
    return false;
}
/**
 * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
 * @param element - element to start searching from
 * @param noWrapDataAttribute - the no wrap data attribute to match (either)
 * @returns true if focus should wrap, false otherwise
 */
function shouldWrapFocus(element, noWrapDataAttribute) {
    return elementContainsAttribute(element, noWrapDataAttribute) === 'true' ? false : true;
}
var targetToFocusOnNextRepaint = undefined;
/**
 * Sets focus to an element asynchronously. The focus will be set at the next browser repaint,
 * meaning it won't cause any extra recalculations. If more than one focusAsync is called during one frame,
 * only the latest called focusAsync element will actually be focused
 * @param element - The element to focus
 */
function focusAsync(element) {
    if (element) {
        // An element was already queued to be focused, so replace that one with the new element
        if (targetToFocusOnNextRepaint) {
            targetToFocusOnNextRepaint = element;
            return;
        }
        targetToFocusOnNextRepaint = element;
        var win = getWindow(element);
        if (win) {
            // element.focus() is a no-op if the element is no longer in the DOM, meaning this is always safe
            win.requestAnimationFrame(function () {
                targetToFocusOnNextRepaint && targetToFocusOnNextRepaint.focus();
                // We are done focusing for this frame, so reset the queued focus element
                targetToFocusOnNextRepaint = undefined;
            });
        }
    }
}
/**
 * Finds the closest focusable element via an index path from a parent. See
 * `getElementIndexPath` for getting an index path from an element to a child.
 */
function getFocusableByIndexPath(parent, path) {
    var element = parent;
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var index = path_1[_i];
        var nextChild = element.children[Math.min(index, element.children.length - 1)];
        if (!nextChild) {
            break;
        }
        element = nextChild;
    }
    element =
        isElementTabbable(element) && isElementVisible(element)
            ? element
            : getNextElement(parent, element, true) || getPreviousElement(parent, element);
    return element;
}
/**
 * Finds the element index path from a parent element to a child element.
 *
 * If you had this node structure: "A has children [B, C] and C has child D",
 * the index path from A to D would be [1, 0], or `parent.chidren[1].children[0]`.
 */
function getElementIndexPath(fromElement, toElement) {
    var path = [];
    while (toElement && fromElement && toElement !== fromElement) {
        var parent_1 = getParent(toElement, true);
        if (parent_1 === null) {
            return [];
        }
        path.unshift(Array.prototype.indexOf.call(parent_1.children, toElement));
        toElement = parent_1;
    }
    return path;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/hoist.js
var REACT_LIFECYCLE_EXCLUSIONS = [
    'setState',
    'render',
    'componentWillMount',
    'UNSAFE_componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'UNSAFE_componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'getSnapshotBeforeUpdate',
    'UNSAFE_componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount'
];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
function hoistMethods(
// tslint:disable-next-line:no-any
destination, 
// tslint:disable-next-line:no-any
source, exclusions) {
    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
    var hoisted = [];
    var _loop_1 = function (methodName) {
        if (typeof source[methodName] === 'function' &&
            destination[methodName] === undefined &&
            (!exclusions || exclusions.indexOf(methodName) === -1)) {
            hoisted.push(methodName);
            /* tslint:disable:no-function-expression */
            destination[methodName] = function () {
                source[methodName].apply(source, arguments);
            };
            /* tslint:enable */
        }
    };
    for (var methodName in source) {
        _loop_1(methodName);
    }
    return hoisted;
}
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
// tslint:disable-next-line:no-any
function unhoistMethods(source, methodNames) {
    methodNames.forEach(function (methodName) { return delete source[methodName]; });
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/initials.js
/**
 * Regular expression matching characters to ignore when calculating the initials.
 * The first part matches characters within parenthesis, including the parenthesis.
 * The second part matches special ASCII characters except space, plus some unicode special characters.
 */
var UNWANTED_CHARS_REGEX = /\([^)]*\)|[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;
/**
 * Regular expression matching phone numbers. Applied after chars matching UNWANTED_CHARS_REGEX have been removed
 * and number has been trimmed for whitespaces
 */
var PHONENUMBER_REGEX = /^\d+[\d\s]*(:?ext|x|)\s*\d+$/i;
/** Regular expression matching one or more spaces. */
var MULTIPLE_WHITESPACES_REGEX = /\s+/g;
/**
 * Regular expression matching languages for which we currently don't support initials.
 * Arabic:   Arabic, Arabic Supplement, Arabic Extended-A.
 * Korean:   Hangul Jamo, Hangul Compatibility Jamo, Hangul Jamo Extended-A, Hangul Syllables, Hangul Jamo Extended-B.
 * Japanese: Hiragana, Katakana.
 * CJK:      CJK Unified Ideographs Extension A, CJK Unified Ideographs, CJK Compatibility Ideographs, CJK Unified Ideographs Extension B
 */
/* tslint:disable:max-line-length */
var UNSUPPORTED_TEXT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
/* tslint:enable:max-line-length */
function getInitialsLatin(displayName, isRtl) {
    var initials = '';
    var splits = displayName.split(' ');
    if (splits.length === 2) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[1].charAt(0).toUpperCase();
    }
    else if (splits.length === 3) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[2].charAt(0).toUpperCase();
    }
    else if (splits.length !== 0) {
        initials += splits[0].charAt(0).toUpperCase();
    }
    if (isRtl && initials.length > 1) {
        return initials.charAt(1) + initials.charAt(0);
    }
    return initials;
}
function cleanupDisplayName(displayName) {
    displayName = displayName.replace(UNWANTED_CHARS_REGEX, '');
    displayName = displayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
    displayName = displayName.trim();
    return displayName;
}
/**
 * Get (up to 2 characters) initials based on display name of the persona.
 *
 * @public
 */
function getInitials(displayName, isRtl, allowPhoneInitials) {
    if (!displayName) {
        return '';
    }
    displayName = cleanupDisplayName(displayName);
    // For names containing CJK characters, and phone numbers, we don't display initials
    if (UNSUPPORTED_TEXT_REGEX.test(displayName) || (!allowPhoneInitials && PHONENUMBER_REGEX.test(displayName))) {
        return '';
    }
    return getInitialsLatin(displayName, isRtl);
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/localStorage.js
/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        result = window.localStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        window.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/language.js


// Default to undefined so that we initialize on first read.
var _language;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 *
 * @public
 */
function getLanguage() {
    if (_language === undefined) {
        var doc = getDocument();
        var savedLanguage = getItem('language');
        if (savedLanguage !== null) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 *
 * @public
 */
function setLanguage(language, avoidPersisting) {
    if (avoidPersisting === void 0) { avoidPersisting = false; }
    var doc = getDocument();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    if (!avoidPersisting) {
        setItem('language', language);
    }
    _language = language;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/math.js
/**
 * Determines the distance between two points.
 *
 * @public
 */
function getDistanceBetweenPoints(point1, point2) {
    var distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    return distance;
}
/**
 * Produces a proportionally-scaled version of an input content size when fit to a bounding size.
 * Given a `contentSize` and a `boundsSize`, this function scales `contentSize` proportionally
 * using either `contain` or `cover` fit behaviors.
 * Use this function to pre-calculate the layout for the CSS `object-fit` and `background-fit` behaviors.
 * With `contain`, the output size must be the largest it can be while completely within the `boundsSize`.
 * With `cover`, the output size must be the smallest it can be while completely around the `boundsSize`.
 * By default, there is a `maxScale` value of 1, which prevents the `contentSize` from being scaled larger.
 *
 * @param options - the options for the bounds fit operation
 */
function fitContentToBounds(options) {
    var contentSize = options.contentSize, boundsSize = options.boundsSize, _a = options.mode, mode = _a === void 0 ? 'contain' : _a, _b = options.maxScale, maxScale = _b === void 0 ? 1 : _b;
    var contentAspectRatio = contentSize.width / contentSize.height;
    var boundsAspectRatio = boundsSize.width / boundsSize.height;
    var scale;
    if (mode === 'contain' ? contentAspectRatio > boundsAspectRatio : contentAspectRatio < boundsAspectRatio) {
        scale = boundsSize.width / contentSize.width;
    }
    else {
        scale = boundsSize.height / contentSize.height;
    }
    var finalScale = Math.min(maxScale, scale);
    return {
        width: contentSize.width * finalScale,
        height: contentSize.height * finalScale
    };
}
/**
 * Calculates a number's precision based on the number of trailing
 * zeros if the number does not have a decimal indicated by a negative
 * precision. Otherwise, it calculates the number of digits after
 * the decimal point indicated by a positive precision.
 * @param value - the value to determine the precision of
 */
function calculatePrecision(value) {
    /**
     * Group 1:
     * [1-9]([0]+$) matches trailing zeros
     * Group 2:
     * \.([0-9]*) matches all digits after a decimal point.
     */
    var groups = /[1-9]([0]+$)|\.([0-9]*)/.exec(String(value));
    if (!groups) {
        return 0;
    }
    if (groups[1]) {
        return -groups[1].length;
    }
    if (groups[2]) {
        return groups[2].length;
    }
    return 0;
}
/**
 * Rounds a number to a certain level of precision. Accepts negative precision.
 * @param value - The value that is being rounded.
 * @param precision - The number of decimal places to round the number to
 */
function precisionRound(value, precision, base) {
    if (base === void 0) { base = 10; }
    var exp = Math.pow(base, precision);
    return Math.round(value * exp) / exp;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/memoize.js

var stylesheet = lib["a" /* Stylesheet */].getInstance();
if (stylesheet && stylesheet.onReset) {
    lib["a" /* Stylesheet */].getInstance().onReset(resetMemoizations);
}
var _resetCounter = 0;
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = typeof WeakMap === 'undefined' ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
/**
 * Reset memoizations.
 */
function resetMemoizations() {
    _resetCounter++;
}
/**
 * Memoize decorator to be used on class methods. WARNING: the `this` reference
 * will be inaccessible within a memoized method, given that a cached method's `this`
 * would not be instance-specific.
 *
 * @public
 */
function memoize(target, key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        }
    };
}
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    var rootNode;
    var cacheSize = 0;
    var localResetCounter = _resetCounter;
    // tslint:disable-next-line:no-function-expression
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined || localResetCounter !== _resetCounter || (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
            localResetCounter = _resetCounter;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        return currentNode.value;
    };
}
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object' || typeof val === 'function') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null
    };
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/merge.js
/**
 * Simple deep merge function. Takes all arguments and returns a deep copy of the objects merged
 * together in the order provided. If an object creates a circular reference, it will assign the
 * original reference.
 */
function merge(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        _merge(target || {}, arg);
    }
    return target;
}
/**
 * The _merge helper iterates through all props on source and assigns them to target.
 * When the value is an object, we will create a deep clone of the object. However if
 * there is a circular reference, the value will not be deep cloned and will persist
 * the reference.
 */
// tslint:disable-next-line:no-any
function _merge(target, source, circularReferences) {
    if (circularReferences === void 0) { circularReferences = []; }
    circularReferences.push(source);
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            var value = source[name_1];
            if (typeof value === 'object') {
                var isCircularReference = circularReferences.indexOf(value) > -1;
                target[name_1] = isCircularReference ? value : _merge(target[name_1] || {}, value, circularReferences);
            }
            else {
                target[name_1] = value;
            }
        }
    }
    circularReferences.pop();
    return target;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/mobileDetector.js
/**
 * Returns true if and only if the user is on a iOS device.
 * Used to determine whether iOS-specific behavior should be applied.
 */
var isIOS = function () {
    if (!window || !window.navigator || !window.navigator.userAgent) {
        return false;
    }
    return /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/osDetector.js
var isMacResult;
/**
 * Returns true if the user is on a Mac. Caches the result value.
 * @param reset - Reset the cached result value (mainly for testing).
 */
function isMac(reset) {
    if (typeof isMacResult === 'undefined' || reset) {
        var userAgent = typeof window !== 'undefined' && window.navigator.userAgent;
        isMacResult = !!userAgent && userAgent.indexOf('Macintosh') !== -1;
    }
    return !!isMacResult;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/overflow.js
/**
 * Detects whether an element's content has horizontal overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasHorizontalOverflow(element) {
    return element.clientWidth < element.scrollWidth;
}
/**
 * Detects whether an element's content has vertical overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasVerticalOverflow(element) {
    return element.clientHeight < element.scrollHeight;
}
/**
 * Detects whether an element's content has overflow in any direction
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasOverflow(element) {
    return hasHorizontalOverflow(element) || hasVerticalOverflow(element);
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/properties.js

/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
var baseElementEvents = [
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel'
];
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
var baseElementProperties = [
    'defaultChecked',
    'defaultValue',
    'accept',
    'acceptCharset',
    'accessKey',
    'action',
    'allowFullScreen',
    'allowTransparency',
    'alt',
    'async',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'capture',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'challenge',
    'checked',
    'children',
    'classID',
    'className',
    'cols',
    'colSpan',
    'content',
    'contentEditable',
    'contextMenu',
    'controls',
    'coords',
    'crossOrigin',
    'data',
    'dateTime',
    'default',
    'defer',
    'dir',
    'download',
    'draggable',
    'encType',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'headers',
    'height',
    'hidden',
    'high',
    'hrefLang',
    'htmlFor',
    'httpEquiv',
    'icon',
    'id',
    'inputMode',
    'integrity',
    'is',
    'keyParams',
    'keyType',
    'kind',
    'lang',
    'list',
    'loop',
    'low',
    'manifest',
    'marginHeight',
    'marginWidth',
    'max',
    'maxLength',
    'media',
    'mediaGroup',
    'method',
    'min',
    'minLength',
    'multiple',
    'muted',
    'name',
    'noValidate',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'poster',
    'preload',
    'radioGroup',
    'readOnly',
    'rel',
    'required',
    'role',
    'rows',
    'rowSpan',
    'sandbox',
    'scope',
    'scoped',
    'scrolling',
    'seamless',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'spellCheck',
    'src',
    'srcDoc',
    'srcLang',
    'srcSet',
    'start',
    'step',
    'style',
    'summary',
    'tabIndex',
    'title',
    'type',
    'useMap',
    'value',
    'width',
    'wmode',
    'wrap'
];
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
var htmlElementProperties = baseElementProperties.concat(baseElementEvents);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
var anchorProperties = htmlElementProperties.concat(['href', 'target']);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
var buttonProperties = htmlElementProperties.concat(['disabled']);
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
var divProperties = htmlElementProperties.concat(['align', 'noWrap']);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
var inputProperties = buttonProperties;
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
var textAreaProperties = buttonProperties;
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
var imageProperties = divProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames-  The array of allowed propnames.
 * @returns The filtered props
 */
function getNativeProps(props, allowedPropNames, excludedPropNames) {
    return Object(object["b" /* filteredAssign */])(function (propName) {
        return ((!excludedPropNames || excludedPropNames.indexOf(propName) < 0) &&
            (propName.indexOf('data-') === 0 || propName.indexOf('aria-') === 0 || allowedPropNames.indexOf(propName) >= 0));
    }, {}, props);
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/resources.js
var _baseUrl = '';
/** Sets the current base url used for fetching images. */
function getResourceUrl(url) {
    return _baseUrl + url;
}
/** Gets the current base url used for fetching images. */
function setBaseUrl(baseUrl) {
    _baseUrl = baseUrl;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/sessionStorage.js
/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function sessionStorage_getItem(key) {
    var result = null;
    try {
        result = window.sessionStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function sessionStorage_setItem(key, data) {
    try {
        window.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/rtl.js




var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL() {
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = sessionStorage_getItem(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            setRTL(_isRTL);
        }
        var doc = getDocument();
        if (_isRTL === undefined && doc) {
            _isRTL = ((doc.body && doc.body.getAttribute('dir')) || doc.documentElement.getAttribute('dir')) === 'rtl';
            Object(lib["g" /* setRTL */])(_isRTL);
        }
    }
    return !!_isRTL;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = getDocument();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        sessionStorage_setItem(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
    Object(lib["g" /* setRTL */])(_isRTL);
}
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key) {
    if (getRTL()) {
        if (key === KeyCodes.left) {
            key = KeyCodes.right;
        }
        else if (key === KeyCodes.right) {
            key = KeyCodes.left;
        }
    }
    return key;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/string.js
// Regex that finds { and } so they can be removed on a lookup for string format
var FORMAT_ARGS_REGEX = /[\{\}]/g;
// Regex that finds {#} so it can be replaced by the arguments in string format
var FORMAT_REGEX = /\{\d+\}/g;
/**
 * String format method, used for scenarios where at runtime you
 * need to evaluate a formatted string given a tokenized string. This
 * usually only is needed in localization scenarios.

 * @example
 * ```tsx
 * "I love {0} every {1}".format("CXP")
 * ```
 * will result in a Debug Exception.
 *
 * @public
 */
// tslint:disable-next-line:no-any
function format(s) {
    'use strict';
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var args = values;
    // Callback match function
    function replace_func(match) {
        // looks up in the args
        // tslint:disable-next-line:no-any
        var replacement = args[match.replace(FORMAT_ARGS_REGEX, '')];
        // catches undefined in nondebug and null in debug and nondebug
        if (replacement === null || replacement === undefined) {
            replacement = '';
        }
        return replacement;
    }
    return s.replace(FORMAT_REGEX, replace_func);
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/styled.js





var DefaultFields = ['theme', 'styles'];
/**
 * The styled HOC wrapper allows you to create a functional wrapper around a given component which will resolve
 * getStyles functional props, and mix customized props passed in using concatStyleSets.
 *
 * @example
 * ```tsx
 * export const Toggle = styled(
 *   ToggleBase,
 *   props => ({ root: { background: 'red' }})
 * );
 * ```
 * @param Component - The unstyled base component to render, which receives styles.
 * @param baseStyles - The styles which should be curried with the component.
 * @param getProps - A helper which provides default props.
 * @param customizable - An object which defines which props can be customized using the Customizer.
 */
function styled(Component, baseStyles, getProps, customizable) {
    customizable = customizable || { scope: '', fields: undefined };
    var scope = customizable.scope, _a = customizable.fields, fields = _a === void 0 ? DefaultFields : _a;
    var Wrapped = /** @class */ (function (_super) {
        tslib_es6["c" /* __extends */](Wrapped, _super);
        function Wrapped() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._inCustomizerContext = false;
            _this._onSettingsChanged = function () { return _this.forceUpdate(); };
            return _this;
        }
        Wrapped.prototype.render = function () {
            var _this = this;
            return (FakeReact["createElement"](CustomizerContext.Consumer, null, function (context) {
                _this._inCustomizerContext = !!context.customizations.inCustomizerContext;
                var settings = Customizations_Customizations.getSettings(fields, scope, context.customizations);
                var customizedStyles = settings.styles, rest = tslib_es6["d" /* __rest */](settings, ["styles"]);
                var styles = function (styleProps) { return _resolve(styleProps, baseStyles, customizedStyles, _this.props.styles); };
                var additionalProps = getProps ? getProps(_this.props) : undefined;
                return FakeReact["createElement"](Component, tslib_es6["a" /* __assign */]({}, rest, additionalProps, _this.props, { styles: styles }));
            }));
        };
        Wrapped.prototype.componentDidMount = function () {
            if (!this._inCustomizerContext) {
                Customizations_Customizations.observe(this._onSettingsChanged);
            }
        };
        Wrapped.prototype.componentWillUnmount = function () {
            if (!this._inCustomizerContext) {
                Customizations_Customizations.unobserve(this._onSettingsChanged);
            }
        };
        Wrapped.displayName = "Styled" + (Component.displayName || Component.name);
        return Wrapped;
    }(FakeReact["Component"]));
    // This preserves backwards compatibility.
    // tslint:disable-next-line:no-any
    return Wrapped;
}
function _resolve(styleProps) {
    var allStyles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        allStyles[_i - 1] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, allStyles_1 = allStyles; _a < allStyles_1.length; _a++) {
        var styles = allStyles_1[_a];
        if (styles) {
            result.push(typeof styles === 'function' ? styles(styleProps) : styles);
        }
    }
    if (result.length) {
        // cliffkoh: I cannot figure out how to avoid the cast to any here.
        // It is something to do with the use of Omit in IStyleSet.
        // It might not be necessary once  Omit becomes part of lib.d.ts (when we remove our own Omit and rely on
        // the official version).
        // tslint:disable-next-line:no-any
        return lib["b" /* concatStyleSets */].apply(void 0, result);
    }
    return undefined;
}

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/set-version/1.1.3/node_modules/@uifabric/set-version/lib/index.js + 1 modules
var set_version_lib = __webpack_require__(50);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/version.js
// @uifabric/utilities@6.29.4
// Do not modify this file, the file is generated as part of publish. The checked in version is a placeholder only.

Object(set_version_lib["a" /* setVersion */])('@uifabric/utilities', '6.29.4');

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/react-dom@16.7.0+react@16.7.0/node_modules/@uifabric/utilities/lib/index.js













































// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Utilities.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "o", function() { return css["a" /* css */]; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return Async_Async; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return AutoScroll_AutoScroll; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent_BaseComponent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_3", function() { return nullRender; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return provideContext; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return Customizations_Customizations; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return CustomizerContext; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return Customizer_Customizer; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return mergeCustomizations; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return mergeSettings; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return DelayedRender_DelayedRender; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "c", function() { return EventGroup_EventGroup; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return FabricPerformance; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return GlobalSettings["a" /* GlobalSettings */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "e", function() { return KeyCodes; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "f", function() { return Rectangle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_2", function() { return mergeAriaAttributeValues; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "w", function() { return findIndex; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "v", function() { return find; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return createArray; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return toMatrix; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return removeIndex; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_5", function() { return replaceElement; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "g", function() { return addElementAtIndex; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return flatten; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "j", function() { return arraysEqual; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return asAsync; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return assertNever; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return autobind; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "m", function() { return classNamesFunction; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "n", function() { return createRef; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "p", function() { return customizable_customizable; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return DATA_PORTAL_ATTRIBUTE; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_7", function() { return setVirtualParent; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return getVirtualParent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "K", function() { return getParent; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return getChildren; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "t", function() { return elementContains; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return setSSR; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Q", function() { return getWindow; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "A", function() { return getDocument; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "O", function() { return getRect; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_6", function() { return setPortalAttribute; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_4", function() { return portalContainsElement; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return findElementRecursive; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return elementContainsAttribute; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "C", function() { return getFirstFocusable; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "G", function() { return getLastFocusable; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "D", function() { return getFirstTabbable; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "H", function() { return getLastTabbable; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "z", function() { return focusFirstChild; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "L", function() { return getPreviousElement; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "J", function() { return getNextElement; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return isElementVisible; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Y", function() { return isElementTabbable; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "X", function() { return isElementFocusZone; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "W", function() { return isElementFocusSubZone; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "s", function() { return doesElementContainFocus; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_9", function() { return shouldWrapFocus; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "y", function() { return focusAsync; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "E", function() { return getFocusableByIndexPath; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "B", function() { return getElementIndexPath; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "R", function() { return hoistMethods; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_11", function() { return unhoistMethods; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "S", function() { return hoistStatics; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "d", function() { return IsFocusVisibleClassName; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return initializeFocusRects; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return getInitials; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "V", function() { return isDirectionalKeyCode; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return addDirectionalKeyCode; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return getLanguage; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return setLanguage; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return getDistanceBetweenPoints; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return fitContentToBounds; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return calculatePrecision; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return precisionRound; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return setMemoizeWeakMap; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return resetMemoizations; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return memoize; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_1", function() { return memoizeFunction; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return merge; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Z", function() { return isIOS; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_8", function() { return object["d" /* shallowCompare */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "k", function() { return object["a" /* assign */]; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return object["b" /* filteredAssign */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "F", function() { return object["c" /* getId */]; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return /* unused reexport */undefined; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return /* unused reexport */undefined; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return /* unused reexport */undefined; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_0", function() { return isMac; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return hasHorizontalOverflow; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return hasVerticalOverflow; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return hasOverflow; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return baseElementEvents; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return baseElementProperties; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "T", function() { return htmlElementProperties; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "i", function() { return anchorProperties; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "l", function() { return buttonProperties; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "r", function() { return divProperties; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return inputProperties; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return textAreaProperties; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "U", function() { return imageProperties; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "I", function() { return getNativeProps; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return getResourceUrl; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return setBaseUrl; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "M", function() { return getRTL; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return setRTL; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "N", function() { return getRTLSafeKeyCode; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return DATA_IS_SCROLLABLE_ATTRIBUTE; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "h", function() { return allowScrollOnElement; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "q", function() { return disableBodyScroll; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "u", function() { return enableBodyScroll; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "P", function() { return getScrollbarWidth; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "x", function() { return findScrollableParent; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return format; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_10", function() { return styled; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return warnDeprecations; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return warnMutuallyExclusive; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return warnConditionallyRequiredProps; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_12", function() { return warn; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return setWarningCallback; });




/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["d"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["b"] = __decorate;
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/version.js
var version = __webpack_require__(54);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/index.js + 14 modules
var lib = __webpack_require__(47);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/MergeStyles.js


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/utilities/buildClassMap.js

/**
 * Builds a class names object from a given map.
 *
 * @param styles - Map of unprocessed styles.
 * @returns Map of property name to class name.
 */
function buildClassMap(styles) {
    var classes = {};
    var _loop_1 = function (styleName) {
        if (styles.hasOwnProperty(styleName)) {
            var className_1;
            Object.defineProperty(classes, styleName, {
                get: function () {
                    if (className_1 === undefined) {
                        // tslint:disable-next-line:no-any
                        className_1 = Object(lib["f" /* mergeStyles */])(styles[styleName]).toString();
                    }
                    return className_1;
                },
                enumerable: true,
                configurable: true
            });
        }
    };
    for (var styleName in styles) {
        _loop_1(styleName);
    }
    return classes;
}

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(45);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/Async.js
/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
var Async_Async = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function Async(parent, onError) {
        this._timeoutIds = null;
        this._immediateIds = null;
        this._intervalIds = null;
        this._animationFrameIds = null;
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._noop = function () {
            /* do nothing */
        };
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        var id;
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (id in this._timeoutIds) {
                if (this._timeoutIds.hasOwnProperty(id)) {
                    this.clearTimeout(parseInt(id, 10));
                }
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (id in this._immediateIds) {
                if (this._immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (id in this._intervalIds) {
                if (this._intervalIds.hasOwnProperty(id)) {
                    this.clearInterval(parseInt(id, 10));
                }
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (id in this._animationFrameIds) {
                if (this._animationFrameIds.hasOwnProperty(id)) {
                    this.cancelAnimationFrame(parseInt(id, 10));
                }
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            if (!this._timeoutIds) {
                this._timeoutIds = {};
            }
            /* tslint:disable:ban-native-functions */
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._timeoutIds) {
                        delete _this._timeoutIds[timeoutId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    if (_this._onErrorHandler) {
                        _this._onErrorHandler(e);
                    }
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._timeoutIds[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        if (this._timeoutIds && this._timeoutIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearTimeout(id);
            delete this._timeoutIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @returns The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback) {
        var _this = this;
        var immediateId = 0;
        if (!this._isDisposed) {
            if (!this._immediateIds) {
                this._immediateIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._immediateIds) {
                        delete _this._immediateIds[immediateId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            immediateId = window.setImmediate ? window.setImmediate(setImmediateCallback) : window.setTimeout(setImmediateCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     */
    Async.prototype.clearImmediate = function (id) {
        if (this._immediateIds && this._immediateIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
            delete this._immediateIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            /* tslint:disable:ban-native-functions */
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearInterval(id);
            delete this._intervalIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = new Date().getTime();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () {
                return;
            };
            /* tslint:disable:no-any */
            noOpFunction.flush = (function () { return null; });
            /* tslint:enable:no-any */
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = new Date().getTime();
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        if (options && typeof options.maxWait === 'number' && !isNaN(options.maxWait)) {
            maxWait = options.maxWait;
        }
        var markExecuted = function (time) {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuteTime = time;
        };
        var invokeFunction = function (time) {
            markExecuted(time);
            lastResult = func.apply(_this._parent, lastArgs);
        };
        var callback = function (userCall) {
            var now = new Date().getTime();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                invokeFunction(now);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var pending = function () {
            return !!timeoutId;
        };
        var cancel = function () {
            if (pending()) {
                // Mark the debounced function as having executed
                markExecuted(new Date().getTime());
            }
        };
        var flush = function () {
            if (pending()) {
                invokeFunction(new Date().getTime());
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        resultFunction.cancel = cancel;
        resultFunction.flush = flush;
        resultFunction.pending = pending;
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback) {
        var _this = this;
        var animationFrameId = 0;
        if (!this._isDisposed) {
            if (!this._animationFrameIds) {
                this._animationFrameIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    if (_this._animationFrameIds) {
                        delete _this._animationFrameIds[animationFrameId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            animationFrameId = window.requestAnimationFrame
                ? window.requestAnimationFrame(animationFrameCallback)
                : window.setTimeout(animationFrameCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._animationFrameIds[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id) {
        if (this._animationFrameIds && this._animationFrameIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
            /* tslint:enable:ban-native-functions */
            delete this._animationFrameIds[id];
        }
    };
    // tslint:disable-next-line:no-any
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());


// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/object.js
var object = __webpack_require__(56);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/EventGroup.js
/* tslint:disable:no-string-literal */

/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onclick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 */
var EventGroup_EventGroup = /** @class */ (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    // tslint:disable-next-line:no-any
    function EventGroup(parent) {
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._eventRecords = [];
    }
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     *
     */
    EventGroup.raise = function (
    // tslint:disable-next-line:no-any
    target, eventName, 
    // tslint:disable-next-line:no-any
    eventArgs, bubbleEvent) {
        var retVal;
        if (EventGroup._isElement(target)) {
            if (document.createEvent) {
                var ev = document.createEvent('HTMLEvents');
                ev.initEvent(eventName, bubbleEvent || false, true);
                Object(object["a" /* assign */])(ev, eventArgs);
                retVal = target.dispatchEvent(ev);
                // tslint:disable-next-line:no-any
            }
            else if (document['createEventObject']) {
                // IE8
                // tslint:disable-next-line:no-any
                var evObj = document['createEventObject'](eventArgs);
                // cannot set cancelBubble on evObj, fireEvent will overwrite it
                target.fireEvent('on' + eventName, evObj);
            }
        }
        else {
            while (target && retVal !== false) {
                var events = target.__events__;
                var eventRecords = events ? events[eventName] : null;
                if (eventRecords) {
                    for (var id in eventRecords) {
                        if (eventRecords.hasOwnProperty(id)) {
                            var eventRecordList = eventRecords[id];
                            for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                                var record = eventRecordList[listIndex];
                                if (record.objectCallback) {
                                    retVal = record.objectCallback.call(record.parent, eventArgs);
                                }
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                target = bubbleEvent ? target.parent : null;
            }
        }
        return retVal;
    };
    // tslint:disable-next-line:no-any
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    // tslint:disable-next-line:no-any
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    // tslint:disable-next-line:no-any
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            // IE8
            event.cancelBubble = true;
        }
    };
    EventGroup._isElement = function (target) {
        return !!target && (!!target.addEventListener || (typeof HTMLElement !== 'undefined' && target instanceof HTMLElement));
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                this.on(target, eventName, events[eventName], useCapture);
            }
        }
    };
    /** On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.on = function (target, eventName, callback, options) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, options);
            }
        }
        else {
            var parent_1 = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent_1,
                callback: callback,
                options: options
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events = (target.__events__ = target.__events__ || {});
            events[eventName] =
                events[eventName] ||
                    {
                        count: 0
                    };
            events[eventName][this._id] = events[eventName][this._id] || [];
            events[eventName][this._id].push(eventRecord);
            events[eventName].count++;
            if (EventGroup._isElement(target)) {
                // tslint:disable-next-line:no-any
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    var result;
                    try {
                        result = callback.apply(parent_1, args);
                        if (result === false && args[0]) {
                            var e = args[0];
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            e.cancelBubble = true;
                        }
                    }
                    catch (e) {
                        /* ErrorHelper.log(e); */
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                if (target.addEventListener) {
                    /* tslint:disable:ban-native-functions */
                    target.addEventListener(eventName, processElementEvent, options);
                    /* tslint:enable:ban-native-functions */
                }
                else if (target.attachEvent) {
                    // IE8
                    target.attachEvent('on' + eventName, processElementEvent);
                }
            }
            else {
                // tslint:disable-next-line:no-any
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent_1, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    // tslint:disable-next-line:no-any
    EventGroup.prototype.off = function (target, eventName, callback, options) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                (typeof options !== 'boolean' || options === eventRecord.options)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.options);
                    }
                    else if (eventRecord.target.detachEvent) {
                        // IE8
                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = (this._parent.__declaredEvents = this._parent.__declaredEvents || {});
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    // tslint:disable-next-line:no-inferrable-types
    EventGroup._uniqueId = 0;
    return EventGroup;
}());


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/dom.js
var DATA_PORTAL_ATTRIBUTE = 'data-portal-element';
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @public
 */
function setVirtualParent(child, parent) {
    var virtualChild = child;
    var virtualParent = parent;
    if (!virtualChild._virtual) {
        virtualChild._virtual = {
            children: []
        };
    }
    var oldParent = virtualChild._virtual.parent;
    if (oldParent && oldParent !== parent) {
        // Remove the child from its old parent.
        var index = oldParent._virtual.children.indexOf(virtualChild);
        if (index > -1) {
            oldParent._virtual.children.splice(index, 1);
        }
    }
    virtualChild._virtual.parent = virtualParent || undefined;
    if (virtualParent) {
        if (!virtualParent._virtual) {
            virtualParent._virtual = {
                children: []
            };
        }
        virtualParent._virtual.children.push(virtualChild);
    }
}
/**
 * Gets the virtual parent given the child element, if it exists.
 *
 * @public
 */
function getVirtualParent(child) {
    var parent;
    if (child && isVirtualElement(child)) {
        parent = child._virtual.parent;
    }
    return parent;
}
/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @public
 */
function getParent(child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    return child && ((allowVirtualParents && getVirtualParent(child)) || (child.parentNode && child.parentNode));
}
/**
 * Gets the elements which are child elements of the given element.
 * If `allowVirtualChildren` is `true`, this method enumerates virtual child elements
 * after the original children.
 * @param parent - The element to get the children of.
 * @param allowVirtualChildren - true if the method should enumerate virtual child elements.
 */
function getChildren(parent, allowVirtualChildren) {
    if (allowVirtualChildren === void 0) { allowVirtualChildren = true; }
    var children = [];
    if (parent) {
        for (var i = 0; i < parent.children.length; i++) {
            children.push(parent.children.item(i));
        }
        if (allowVirtualChildren && isVirtualElement(parent)) {
            children.push.apply(children, parent._virtual.children);
        }
    }
    return children;
}
/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @public
 */
function elementContains(parent, child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    var isContained = false;
    if (parent && child) {
        if (allowVirtualParents) {
            isContained = false;
            while (child) {
                var nextParent = getParent(child);
                if (nextParent === parent) {
                    isContained = true;
                    break;
                }
                child = nextParent;
            }
        }
        else if (parent.contains) {
            isContained = parent.contains(child);
        }
    }
    return isContained;
}
var _isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
function setSSR(isEnabled) {
    _isSSR = isEnabled;
}
/**
 * Helper to get the window object.
 *
 * @public
 */
function getWindow(rootElement) {
    if (_isSSR || typeof window === 'undefined') {
        return undefined;
    }
    else {
        return rootElement && rootElement.ownerDocument && rootElement.ownerDocument.defaultView
            ? rootElement.ownerDocument.defaultView
            : window;
    }
}
/**
 * Helper to get the document object.
 *
 * @public
 */
function getDocument(rootElement) {
    if (_isSSR || typeof document === 'undefined') {
        return undefined;
    }
    else {
        return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
    }
}
/**
 * Helper to get bounding client rect, works with window.
 *
 * @public
 */
function getRect(element) {
    var rect;
    if (element) {
        if (element === window) {
            rect = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                right: window.innerWidth,
                bottom: window.innerHeight
            };
        }
        else if (element.getBoundingClientRect) {
            rect = element.getBoundingClientRect();
        }
    }
    return rect;
}
/**
 * Identify element as a portal by setting an attribute.
 * @param element - Element to mark as a portal.
 */
function setPortalAttribute(element) {
    element.setAttribute(DATA_PORTAL_ATTRIBUTE, 'true');
}
/**
 * Determine whether a target is within a portal from perspective of root or optional parent.
 * This function only works against portal components that use the setPortalAttribute function.
 * If both parent and child are within the same portal this function will return false.
 * @param target - Element to query portal containment status of.
 * @param parent - Optional parent perspective. Search for containing portal stops at parent (or root if parent is undefined or invalid.)
 */
function portalContainsElement(target, parent) {
    var elementMatch = findElementRecursive(target, function (testElement) { return parent === testElement || testElement.hasAttribute(DATA_PORTAL_ATTRIBUTE); });
    return elementMatch !== null && elementMatch.hasAttribute(DATA_PORTAL_ATTRIBUTE);
}
/**
 * Finds the first parent element where the matchFunction returns true
 * @param element - element to start searching at
 * @param matchFunction - the function that determines if the element is a match
 * @returns the matched element or null no match was found
 */
function findElementRecursive(element, matchFunction) {
    if (!element || element === document.body) {
        return null;
    }
    return matchFunction(element) ? element : findElementRecursive(getParent(element), matchFunction);
}
/**
 * Determines if an element, or any of its ancestors, contain the given attribute
 * @param element - element to start searching at
 * @param attribute - the attribute to search for
 * @returns the value of the first instance found
 */
function elementContainsAttribute(element, attribute) {
    var elementMatch = findElementRecursive(element, function (testElement) { return testElement.hasAttribute(attribute); });
    return elementMatch && elementMatch.getAttribute(attribute);
}
/**
 * Determines whether or not an element has the virtual hierarchy extension.
 *
 * @public
 */
function isVirtualElement(element) {
    return element && !!element._virtual;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/scroll.js


var _scrollbarWidth;
var _bodyScrollDisabledCount = 0;
var DisabledScrollClassName = Object(lib["f" /* mergeStyles */])({
    overflow: 'hidden !important'
});
/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
var DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
var _makeElementScrollAllower = function () {
    var _previousClientY = 0;
    var _element = null;
    // remember the clientY for future calls of _preventOverscrolling
    var _saveClientY = function (event) {
        if (event.targetTouches.length === 1) {
            _previousClientY = event.targetTouches[0].clientY;
        }
    };
    // prevent the body from scrolling when the user attempts
    // to scroll past the top or bottom of the element
    var _preventOverscrolling = function (event) {
        // only respond to a single-finger touch
        if (event.targetTouches.length !== 1) {
            return;
        }
        // prevent the body touchmove handler from firing
        // so that scrolling is allowed within the element
        event.stopPropagation();
        if (!_element) {
            return;
        }
        var clientY = event.targetTouches[0].clientY - _previousClientY;
        var scrollableParent = findScrollableParent(event.target);
        if (scrollableParent) {
            _element = scrollableParent;
        }
        // if the element is scrolled to the top,
        // prevent the user from scrolling up
        if (_element.scrollTop === 0 && clientY > 0) {
            event.preventDefault();
        }
        // if the element is scrolled to the bottom,
        // prevent the user from scrolling down
        if (_element.scrollHeight - _element.scrollTop <= _element.clientHeight && clientY < 0) {
            event.preventDefault();
        }
    };
    return function (element, events) {
        if (!element) {
            return;
        }
        events.on(element, 'touchstart', _saveClientY, { passive: false });
        events.on(element, 'touchmove', _preventOverscrolling, { passive: false });
        _element = element;
    };
};
/**
 * Allows the user to scroll within a element,
 * while preventing the user from scrolling the body
 */
var allowScrollOnElement = _makeElementScrollAllower();
var _disableIosBodyScroll = function (event) {
    event.preventDefault();
};
/**
 * Disables the body scrolling.
 *
 * @public
 */
function disableBodyScroll() {
    var doc = getDocument();
    if (doc && doc.body && !_bodyScrollDisabledCount) {
        doc.body.classList.add(DisabledScrollClassName);
        doc.body.addEventListener('touchmove', _disableIosBodyScroll, { passive: false, capture: false });
    }
    _bodyScrollDisabledCount++;
}
/**
 * Enables the body scrolling.
 *
 * @public
 */
function enableBodyScroll() {
    if (_bodyScrollDisabledCount > 0) {
        var doc = getDocument();
        if (doc && doc.body && _bodyScrollDisabledCount === 1) {
            doc.body.classList.remove(DisabledScrollClassName);
            doc.body.removeEventListener('touchmove', _disableIosBodyScroll);
        }
        _bodyScrollDisabledCount--;
    }
}
/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */
function getScrollbarWidth() {
    if (_scrollbarWidth === undefined) {
        var scrollDiv = document.createElement('div');
        scrollDiv.style.setProperty('width', '100px');
        scrollDiv.style.setProperty('height', '100px');
        scrollDiv.style.setProperty('overflow', 'scroll');
        scrollDiv.style.setProperty('position', 'absolute');
        scrollDiv.style.setProperty('top', '-9999px');
        document.body.appendChild(scrollDiv);
        // Get the scrollbar width
        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        // Delete the DIV
        document.body.removeChild(scrollDiv);
    }
    return _scrollbarWidth;
}
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
function findScrollableParent(startingElement) {
    var el = startingElement;
    // First do a quick scan for the scrollable attribute.
    while (el && el !== document.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== document.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var computedStyles = getComputedStyle(el);
            var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';
            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
                return el;
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === document.body) {
        // tslint:disable-next-line:no-any
        el = window;
    }
    return el;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/AutoScroll.js



var SCROLL_ITERATION_DELAY = 16;
var SCROLL_GUTTER_HEIGHT = 100;
var MAX_SCROLL_VELOCITY = 15;
/**
 * AutoScroll simply hooks up mouse events given a parent element, and scrolls the container
 * up/down depending on how close the mouse is to the top/bottom of the container.
 *
 * Once you don't want autoscroll any more, just dispose the helper and it will unhook events.
 *
 * @public
 */
var AutoScroll_AutoScroll = /** @class */ (function () {
    function AutoScroll(element) {
        this._events = new EventGroup_EventGroup(this);
        this._scrollableParent = findScrollableParent(element);
        this._incrementScroll = this._incrementScroll.bind(this);
        this._scrollRect = getRect(this._scrollableParent);
        // tslint:disable-next-line:no-any
        if (this._scrollableParent === window) {
            this._scrollableParent = document.body;
        }
        if (this._scrollableParent) {
            this._events.on(window, 'mousemove', this._onMouseMove, true);
            this._events.on(window, 'touchmove', this._onTouchMove, true);
        }
    }
    AutoScroll.prototype.dispose = function () {
        this._events.dispose();
        this._stopScroll();
    };
    AutoScroll.prototype._onMouseMove = function (ev) {
        this._computeScrollVelocity(ev.clientY);
    };
    AutoScroll.prototype._onTouchMove = function (ev) {
        if (ev.touches.length > 0) {
            this._computeScrollVelocity(ev.touches[0].clientY);
        }
    };
    AutoScroll.prototype._computeScrollVelocity = function (clientY) {
        if (!this._scrollRect) {
            return;
        }
        var scrollRectTop = this._scrollRect.top;
        var scrollClientBottom = scrollRectTop + this._scrollRect.height - SCROLL_GUTTER_HEIGHT;
        if (clientY < scrollRectTop + SCROLL_GUTTER_HEIGHT) {
            this._scrollVelocity = Math.max(-MAX_SCROLL_VELOCITY, -MAX_SCROLL_VELOCITY * ((SCROLL_GUTTER_HEIGHT - (clientY - scrollRectTop)) / SCROLL_GUTTER_HEIGHT));
        }
        else if (clientY > scrollClientBottom) {
            this._scrollVelocity = Math.min(MAX_SCROLL_VELOCITY, MAX_SCROLL_VELOCITY * ((clientY - scrollClientBottom) / SCROLL_GUTTER_HEIGHT));
        }
        else {
            this._scrollVelocity = 0;
        }
        if (this._scrollVelocity) {
            this._startScroll();
        }
        else {
            this._stopScroll();
        }
    };
    AutoScroll.prototype._startScroll = function () {
        if (!this._timeoutId) {
            this._incrementScroll();
        }
    };
    AutoScroll.prototype._incrementScroll = function () {
        if (this._scrollableParent) {
            this._scrollableParent.scrollTop += Math.round(this._scrollVelocity);
        }
        this._timeoutId = setTimeout(this._incrementScroll, SCROLL_ITERATION_DELAY);
    };
    AutoScroll.prototype._stopScroll = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            delete this._timeoutId;
        }
    };
    return AutoScroll;
}());


// EXTERNAL MODULE: ./lib/DeveloperTools/FBWrappers/FakeReact.js
var FakeReact = __webpack_require__(13);
var FakeReact_default = /*#__PURE__*/__webpack_require__.n(FakeReact);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/warn.js
var _warningCallback = undefined;
/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    for (var propName in deprecationMap) {
        if (props && propName in props) {
            var deprecationMessage = componentName + " property '" + propName + "' was used but has been deprecated.";
            var replacementPropName = deprecationMap[propName];
            if (replacementPropName) {
                deprecationMessage += " Use '" + replacementPropName + "' instead.";
            }
            warn(deprecationMessage);
        }
    }
}
/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
function warnMutuallyExclusive(componentName, props, exclusiveMap) {
    for (var propName in exclusiveMap) {
        if (props && propName in props) {
            var propInExclusiveMapValue = exclusiveMap[propName];
            if (propInExclusiveMapValue && propInExclusiveMapValue in props) {
                warn(componentName + " property '" + propName + "' is mutually exclusive with '" + exclusiveMap[propName] + "'. Use one or the other.");
            }
        }
    }
}
/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
 */
function warnConditionallyRequiredProps(componentName, props, requiredProps, conditionalPropName, condition) {
    if (condition === true) {
        for (var _i = 0, requiredProps_1 = requiredProps; _i < requiredProps_1.length; _i++) {
            var requiredPropName = requiredProps_1[_i];
            if (!(requiredPropName in props)) {
                warn(componentName + " property '" + requiredPropName + "' is required when '" + conditionalPropName + "' is used.'");
            }
        }
    }
}
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
function warn(message) {
    if (_warningCallback) {
        _warningCallback(message);
    }
    else if (console && console.warn) {
        console.warn(message);
    }
}
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/KeyCodes.js
/**
 * Simulated enum for keycodes. These will get inlined by uglify when used much like an enum
 *
 * @public
 */
var KeyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pauseBreak: 19,
    capslock: 20,
    escape: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    del: 46,
    zero: 48,
    one: 49,
    two: 50,
    three: 51,
    four: 52,
    five: 53,
    six: 54,
    seven: 55,
    eight: 56,
    nine: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftWindow: 91,
    rightWindow: 92,
    select: 93,
    zero_numpad: 96,
    one_numpad: 97,
    two_numpad: 98,
    three_numpad: 99,
    four_numpad: 100,
    five_numpad: 101,
    six_numpad: 102,
    seven_numpad: 103,
    eight_numpad: 104,
    nine_numpad: 105,
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalPoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrollLock: 145,
    semicolon: 186,
    equalSign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardSlash: 191,
    graveAccent: 192,
    openBracket: 219,
    backSlash: 220,
    closeBracket: 221,
    singleQuote: 222
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/keyboard.js

var DirectionalKeyCodes = (keyboard__a = {},
    keyboard__a[KeyCodes.up] = 1,
    keyboard__a[KeyCodes.down] = 1,
    keyboard__a[KeyCodes.left] = 1,
    keyboard__a[KeyCodes.right] = 1,
    keyboard__a[KeyCodes.home] = 1,
    keyboard__a[KeyCodes.end] = 1,
    keyboard__a[KeyCodes.tab] = 1,
    keyboard__a[KeyCodes.pageUp] = 1,
    keyboard__a[KeyCodes.pageDown] = 1,
    keyboard__a);
/**
 * Returns true if the keycode is a directional keyboard key.
 */
function isDirectionalKeyCode(which) {
    return !!DirectionalKeyCodes[which];
}
/**
 * Adds a keycode to the list of keys that, when pressed, should cause the focus outlines to be visible.
 * This can be used to add global shortcut keys that directionally move from section to section within
 * an app or between focus trap zones.
 */
function addDirectionalKeyCode(which) {
    DirectionalKeyCodes[which] = 1;
}
var keyboard__a;

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/initializeFocusRects.js


var IsFocusVisibleClassName = 'ms-Fabric--isFocusVisible';
/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'ms-Fabric--isFocusVisible' classname
 *    to the document body.
 * 3. When the user clicks a mouse button, we remove the classname if it exists.
 *
 * This logic allows components on the page to conditionally render focus treatments only
 * if the global classname exists, which simplifies logic overall.
 *
 * @param window - the window used to add the event listeners
 */
function initializeFocusRects(window) {
    var win = (window || getWindow());
    if (win && !win.__hasInitializeFocusRects__) {
        win.__hasInitializeFocusRects__ = true;
        win.addEventListener('mousedown', _onMouseDown, true);
        win.addEventListener('keydown', _onKeyDown, true);
    }
}
function _onMouseDown(ev) {
    var win = getWindow(ev.target);
    if (win) {
        var classList = win.document.body.classList;
        if (classList.contains(IsFocusVisibleClassName)) {
            classList.remove(IsFocusVisibleClassName);
        }
    }
}
function _onKeyDown(ev) {
    var win = getWindow(ev.target);
    if (win) {
        var classList = win.document.body.classList;
        if (isDirectionalKeyCode(ev.which) && !classList.contains(IsFocusVisibleClassName)) {
            classList.add(IsFocusVisibleClassName);
        }
    }
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/initializeDir.js

function initializeDir(window) {
    var win = (window || getWindow());
    if (win && !win.__hasInitializedDir__) {
        win.__hasInitializedDir__ = true;
        // Ensure that the documentElement has a 'dir' attribute.
        var documentElement = win.document.documentElement;
        if (!documentElement.hasAttribute('dir')) {
            documentElement.setAttribute('dir', 'ltr');
        }
    }
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/BaseComponent.js







/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 */
var BaseComponent_BaseComponent = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](BaseComponent, _super);
    // tslint:enable:variable-name
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    // tslint:disable-next-line:no-any
    function BaseComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // Ensure basic assumptions about the environment.
        initializeFocusRects();
        initializeDir();
        _makeAllSafe(_this, BaseComponent.prototype, [
            'componentDidMount',
            'shouldComponentUpdate',
            'getSnapshotBeforeUpdate',
            'render',
            'componentDidUpdate',
            'componentWillUnmount'
        ]);
        return _this;
    }
    /**
     * When the component receives props, make sure the componentRef is updated.
     */
    BaseComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._updateComponentRef(prevProps, this.props);
    };
    /**
     * When the component has mounted, update the componentRef.
     */
    BaseComponent.prototype.componentDidMount = function () {
        this._setComponentRef(this.props.componentRef, this);
    };
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    BaseComponent.prototype.componentWillUnmount = function () {
        this._setComponentRef(this.props.componentRef, null);
        if (this.__disposables) {
            for (var i = 0, len = this._disposables.length; i < len; i++) {
                var disposable = this.__disposables[i];
                if (disposable.dispose) {
                    disposable.dispose();
                }
            }
            this.__disposables = null;
        }
    };
    Object.defineProperty(BaseComponent.prototype, "className", {
        /**
         * Gets the object's class name.
         */
        get: function () {
            if (!this.__className) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = funcNameRegex.exec(this.constructor.toString());
                this.__className = results && results.length > 1 ? results[1] : '';
            }
            return this.__className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_disposables", {
        /**
         * Allows subclasses to push things to this._disposables to be auto disposed.
         */
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_async", {
        /**
         * Gets the async instance associated with the component, created on demand. The async instance gives
         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
         * preserve the this pointer so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__async) {
                this.__async = new Async_Async(this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_events", {
        /**
         * Gets the event group instance assocaited with the component, created on demand. The event instance
         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
         * will be automatically disconnected after unmounting. The helpers within the events object also
         * preserve the this reference so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__events) {
                this.__events = new EventGroup_EventGroup(this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     * @deprecated Use `createRef` from React.createRef.
     */
    BaseComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            // tslint:disable-next-line:no-any
            this.__resolves[refName] = function (ref) {
                // tslint:disable-next-line:no-any
                return (_this[refName] = ref);
            };
        }
        return this.__resolves[refName];
    };
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
        if (newProps === void 0) { newProps = {}; }
        // currentProps *should* always be defined, but verify that just in case a subclass is manually
        // calling a lifecycle method with no parameters (which has happened) or other odd usage.
        if (currentProps && newProps && currentProps.componentRef !== newProps.componentRef) {
            this._setComponentRef(currentProps.componentRef, null);
            this._setComponentRef(newProps.componentRef, this);
        }
    };
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
        warnDeprecations(this.className, this.props, deprecationMap);
    };
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
        warnMutuallyExclusive(this.className, this.props, mutuallyExclusiveMap);
    };
    /**
     * Warns when props are required if a condition is met.
     *
     * @param requiredProps - The name of the props that are required when the condition is met.
     * @param conditionalPropName - The name of the prop that the condition is based on.
     * @param condition - Whether the condition is met.
     */
    BaseComponent.prototype._warnConditionallyRequiredProps = function (requiredProps, conditionalPropName, condition) {
        warnConditionallyRequiredProps(this.className, this.props, requiredProps, conditionalPropName, condition);
    };
    BaseComponent.prototype._setComponentRef = function (ref, value) {
        if (!this._skipComponentRefResolution && ref) {
            if (typeof ref === 'function') {
                ref(value);
            }
            if (typeof ref === 'object') {
                // tslint:disable:no-any
                ref.current = value;
            }
        }
    };
    return BaseComponent;
}(FakeReact["Component"]));

/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
function _makeAllSafe(obj, prototype, methodNames) {
    for (var i = 0, len = methodNames.length; i < len; i++) {
        _makeSafe(obj, prototype, methodNames[i]);
    }
}
function _makeSafe(obj, prototype, methodName) {
    // tslint:disable:no-any
    var classMethod = obj[methodName];
    var prototypeMethod = prototype[methodName];
    // tslint:enable:no-any
    if (classMethod || prototypeMethod) {
        // tslint:disable-next-line:no-any
        obj[methodName] = function () {
            var retVal;
            if (prototypeMethod) {
                retVal = prototypeMethod.apply(this, arguments);
            }
            if (classMethod !== prototypeMethod) {
                retVal = classMethod.apply(this, arguments);
            }
            return retVal;
        };
    }
}
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */
function nullRender() {
    return null;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/Context.js


/**
 * @deprecated This function uses the legacy context API, which is deprecated and should not be
 * used in new code. Please migrate to the new context API. https://reactjs.org/docs/context.html
 */
function provideContext(contextTypes, mapPropsToContext) {
    var Provider = /** @class */ (function (_super) {
        tslib_es6["c" /* __extends */](Provider, _super);
        function Provider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Provider.prototype.getChildContext = function () {
            return mapPropsToContext(this.props);
        };
        Provider.prototype.render = function () {
            return FakeReact["Children"].only(this.props.children);
        };
        Provider.childContextTypes = contextTypes;
        return Provider;
    }(FakeReact["Component"]));
    return Provider;
}

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/GlobalSettings.js
var GlobalSettings = __webpack_require__(62);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/Customizations.js



var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {}, inCustomizerContext: false };
var _allSettings = GlobalSettings["a" /* GlobalSettings */].getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {},
    inCustomizerContext: false
});
var _events = new EventGroup_EventGroup(_allSettings);
var Customizations_Customizations = /** @class */ (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    // tslint:disable-next-line:no-any
    Customizations.applySettings = function (settings) {
        _allSettings.settings = tslib_es6["a" /* __assign */]({}, _allSettings.settings, settings);
        Customizations._raiseChange();
    };
    // tslint:disable-next-line:no-any
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = tslib_es6["a" /* __assign */]({}, _allSettings.scopedSettings[scopeName], settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings
    // tslint:disable-next-line:no-any
    ) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        // tslint:disable-next-line:no-any
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] =
                localScopedSettings[property] ||
                    localSettings.settings[property] ||
                    globalScopedSettings[property] ||
                    _allSettings.settings[property];
        }
        return settings;
    };
    Customizations.observe = function (onChange) {
        _events.on(_allSettings, 'change', onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events.off(_allSettings, 'change', onChange);
    };
    Customizations._raiseChange = function () {
        _events.raise('change');
    };
    return Customizations;
}());


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/Customizer.js




var CustomizerContext = FakeReact["createContext"]({
    customizations: {
        inCustomizerContext: false,
        settings: {},
        scopedSettings: {}
    }
});
/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator, or use the styled HOC. This enables
 * injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop which should be one of the following:
 * - A json map which contains 1 or more name/value pairs representing injectable props.
 * - A function that receives the current settings and returns the new ones that apply to the scope
 *
 * @public
 */
var Customizer_Customizer = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](Customizer, _super);
    function Customizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._changeCount = 0;
        _this._onCustomizationChange = function () { return _this.forceUpdate(); };
        return _this;
    }
    Customizer.prototype.componentDidMount = function () {
        Customizations_Customizations.observe(this._onCustomizationChange);
    };
    Customizer.prototype.componentWillUnmount = function () {
        Customizations_Customizations.unobserve(this._onCustomizationChange);
    };
    Customizer.prototype.render = function () {
        var _this = this;
        var contextTransform = this.props.contextTransform;
        return (FakeReact["createElement"](CustomizerContext.Consumer, null, function (parentContext) {
            var newContext = mergeCustomizations(_this.props, parentContext);
            if (contextTransform) {
                newContext = contextTransform(newContext);
            }
            return FakeReact["createElement"](CustomizerContext.Provider, { value: newContext }, _this.props.children);
        }));
    };
    return Customizer;
}(BaseComponent_BaseComponent));

/**
 * Merge props and customizations giving priority to props over context.
 * NOTE: This function will always perform multiple merge operations. Use with caution.
 * @param props - New settings to merge in.
 * @param parentContext - Context containing current settings.
 * @returns Merged customizations.
 */
function mergeCustomizations(props, parentContext) {
    var _a = (parentContext || {}).customizations, customizations = _a === void 0 ? { settings: {}, scopedSettings: {} } : _a;
    return {
        customizations: {
            settings: mergeSettings(customizations.settings, props.settings),
            scopedSettings: mergeScopedSettings(customizations.scopedSettings, props.scopedSettings),
            inCustomizerContext: true
        }
    };
}
/**
 * Merge new and old settings, giving priority to new settings.
 * New settings is optional in which case oldSettings is returned as-is.
 * @param oldSettings - Old settings to fall back to.
 * @param newSettings - New settings that will be merged over oldSettings.
 * @returns Merged settings.
 */
function mergeSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = isSettingsFunction(newSettings) ? newSettings : settingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function mergeScopedSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = isSettingsFunction(newSettings) ? newSettings : scopedSettingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function isSettingsFunction(settings) {
    return typeof settings === 'function';
}
function settingsMergeWith(newSettings) {
    return function (settings) { return (newSettings ? tslib_es6["a" /* __assign */]({}, settings, newSettings) : settings); };
}
function scopedSettingsMergeWith(scopedSettingsFromProps) {
    if (scopedSettingsFromProps === void 0) { scopedSettingsFromProps = {}; }
    return function (oldScopedSettings) {
        var newScopedSettings = tslib_es6["a" /* __assign */]({}, oldScopedSettings);
        for (var scopeName in scopedSettingsFromProps) {
            if (scopedSettingsFromProps.hasOwnProperty(scopeName)) {
                newScopedSettings[scopeName] = tslib_es6["a" /* __assign */]({}, oldScopedSettings[scopeName], scopedSettingsFromProps[scopeName]);
            }
        }
        return newScopedSettings;
    };
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/DelayedRender.js


/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 */
var DelayedRender_DelayedRender = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: false
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        this._timeoutId = setTimeout(function () {
            _this.setState({
                isRendered: true
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? FakeReact["Children"].only(this.props.children) : null;
    };
    DelayedRender.defaultProps = {
        delay: 0
    };
    return DelayedRender;
}(FakeReact["Component"]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/FabricPerformance.js
var now = function () { return (typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now()); };
var RESET_INTERVAL = 3 * 60 * 1000; // auto reset every 3 minutes
/**
 * Performance helper class for measuring things.
 *
 * @public
 */
var FabricPerformance = /** @class */ (function () {
    function FabricPerformance() {
    }
    /**
     * Measures execution time of the given syncronous function. If the same logic is executed multiple times,
     * each individual measurement will be collected as well the overall numbers.
     * @param name - The name of this measurement
     * @param func - The logic to be measured for execution time
     */
    FabricPerformance.measure = function (name, func) {
        if (FabricPerformance._timeoutId) {
            FabricPerformance.setPeriodicReset();
        }
        var start = now();
        func();
        var end = now();
        var measurement = FabricPerformance.summary[name] || {
            totalDuration: 0,
            count: 0,
            all: []
        };
        var duration = end - start;
        measurement.totalDuration += duration;
        measurement.count++;
        measurement.all.push({
            duration: duration,
            timeStamp: end
        });
        FabricPerformance.summary[name] = measurement;
    };
    FabricPerformance.reset = function () {
        FabricPerformance.summary = {};
        clearTimeout(FabricPerformance._timeoutId);
        FabricPerformance._timeoutId = NaN;
    };
    FabricPerformance.setPeriodicReset = function () {
        FabricPerformance._timeoutId = setTimeout(function () { return FabricPerformance.reset(); }, RESET_INTERVAL);
    };
    FabricPerformance.summary = {};
    return FabricPerformance;
}());


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/Rectangle.js
/**
 * Rectangle helper class.
 *
 * @public
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Calculated automatically by subtracting the right from left
         */
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
         * Calculated automatically by subtracting the bottom from top.
         */
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    Rectangle.prototype.equals = function (rect) {
        // I'm fixing it to 4 decimal places because it allows enough precision and will handle cases when something should be rounded,
        // like .999999 should round to 1.
        return (parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) &&
            parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) &&
            parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) &&
            parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4)));
    };
    return Rectangle;
}());


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/aria.js
/**
 * ARIA helper to concatenate attributes, returning undefined if all attributes
 * are undefined. (Empty strings are not a valid ARIA attribute value.)
 *
 * @param ariaAttributes - ARIA attributes to merge
 */
function mergeAriaAttributeValues() {
    var ariaAttributes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ariaAttributes[_i] = arguments[_i];
    }
    var mergedAttribute = ariaAttributes
        .filter(function (arg) { return arg !== undefined && arg !== null; })
        .join(' ')
        .trim();
    return mergedAttribute === '' ? undefined : mergedAttribute;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/array.js
/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 */
function findIndex(array, cb) {
    var index = -1;
    for (var i = 0; array && i < array.length; i++) {
        if (cb(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}
/**
 * Helper to find the first item within an array that satisfies the callback.
 * @param array - Array to search
 * @param cb - Callback which returns true on matches
 */
function find(array, cb) {
    var index = findIndex(array, cb);
    if (index < 0) {
        return undefined;
    }
    return array[index];
}
/**
 * Creates an array of a given size and helper method to populate.
 *
 * @public
 * @param size - Size of array.
 * @param getItem - Callback to populate given cell index.
 */
function createArray(size, getItem) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(getItem(i));
    }
    return array;
}
/**
 * Convert the given array to a matrix with columnCount number
 * of columns.
 *
 * @public
 * @param items - The array to convert
 * @param columnCount - The number of columns for the resulting matrix
 * @returns A matrix of items
 */
function toMatrix(items, columnCount) {
    return items.reduce(function (rows, currentValue, index) {
        if (index % columnCount === 0) {
            rows.push([currentValue]);
        }
        else {
            rows[rows.length - 1].push(currentValue);
        }
        return rows;
    }, []);
}
/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
function removeIndex(array, index) {
    return array.filter(function (_, i) { return index !== i; });
}
/**
 * Given an array, this function returns a new array where the element at a given index has been replaced.
 * @param array - The array to operate on
 * @param newElement - The element that will be placed in the new array
 * @param index - The index of the element that should be replaced
 */
function replaceElement(array, newElement, index) {
    var copy = array.slice();
    copy[index] = newElement;
    return copy;
}
/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */
function addElementAtIndex(array, index, itemToAdd) {
    var copy = array.slice();
    copy.splice(index, 0, itemToAdd);
    return copy;
}
/**
 * Given an array where each element is of type T or T[], flatten it into an array of T
 * @param array - The array where each element can optionally also be an array
 */
function flatten(array) {
    var result = [];
    array.forEach(function (item) { return (result = result.concat(item)); });
    return result;
}
/**
 * Returns a boolean indicating if the two given arrays are equal in length and values.
 *
 * @param array1 - First array to compare
 * @param array2 - Second array to compare
 * @returns True if the arrays are the same length and have the same values in the same positions, false otherwise.
 */
function arraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/asAsync.js
/**
 * asAsync - a HOC for async loading components.
 *
 * Usage:
 *
 * const AsyncDialog = asAsync({
 *   load: () => import('Dialog').then(result => result.default),
 * });
 *
 * React.render(domElement, <AsyncDialog asyncPlaceholder={ () => <Spinner/> } { ...dialogProps } />);
 *
 * Note the `asyncPlaceholder` prop will be respected when rendering the async component and it hasn't
 * been loaded yet.
 */


/**
 * If possible, use a WeakMap to maintain a cache of loaded components.
 * This can be used to synchronously render components that have already been loaded,
 * rather than having to wait for at least one async tick.
 */
var _syncModuleCache = typeof WeakMap !== 'undefined'
    ? // tslint:disable-next-line:no-any
        new WeakMap()
    : undefined;
/**
 * Produces a component which internally loads the target component before first mount.
 * The component passes all props through to the loaded component.
 *
 * This overload accepts a module with a default export for the component.
 */
function asAsync(options) {
    var Async = /** @class */ (function (_super) {
        tslib_es6["c" /* __extends */](Async, _super);
        function Async() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                Component: _syncModuleCache ? _syncModuleCache.get(options.load) : undefined
            };
            return _this;
        }
        Async.prototype.render = function () {
            // Typescript issue: the rest can't be pulled without the any cast, as TypeScript fails with rest on generics.
            // tslint:disable-next-line:no-any
            var _a = this.props, forwardedRef = _a.forwardedRef, Placeholder = _a.asyncPlaceholder, rest = tslib_es6["d" /* __rest */](_a, ["forwardedRef", "asyncPlaceholder"]);
            var Component = this.state.Component;
            return Component ? FakeReact["createElement"](Component, tslib_es6["a" /* __assign */]({ ref: forwardedRef }, rest)) : Placeholder ? FakeReact["createElement"](Placeholder, null) : null;
        };
        Async.prototype.componentDidMount = function () {
            var _this = this;
            var Component = this.state.Component;
            if (!Component) {
                options
                    .load()
                    .then(function (LoadedComponent) {
                    if (LoadedComponent) {
                        // Cache component for future reference.
                        _syncModuleCache && _syncModuleCache.set(options.load, LoadedComponent);
                        // Set state.
                        _this.setState({
                            Component: LoadedComponent
                        }, options.onLoad);
                    }
                })
                    .catch(options.onError);
            }
        };
        return Async;
    }(FakeReact["Component"]));
    return FakeReact["forwardRef"](function (props, ref) { return (FakeReact["createElement"](Async, tslib_es6["a" /* __assign */]({}, props, { forwardedRef: ref }))); });
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/assertNever.js
/**
 * AssertNever is a utility function that can be used for exhaustiveness checks in switch statements.
 *
 * @public
 */
function assertNever(x) {
    throw new Error('Unexpected object: ' + x);
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/autobind.js
/**
 * Autobind is a utility for binding methods in a class. This simplifies tagging methods as being "bound" to the this pointer
 * so that they can be used in scenarios that simply require a function callback.
 * @deprecated This has been deprecated in favor of using arrow function properties
 */
function autobind(
// tslint:disable-next-line:no-any
target, key, descriptor) {
    var fn = descriptor.value;
    var defining = false;
    return {
        configurable: true,
        get: function () {
            if (defining || (fn && this === fn.prototype) || this.hasOwnProperty(key)) {
                return fn;
            }
            // Bind method only once, and update the property to return the bound value from now on
            var fnBound = fn && fn.bind(this);
            defining = true;
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: fnBound
            });
            defining = false;
            return fnBound;
        },
        // tslint:disable-next-line:no-any
        set: function (newValue) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: newValue
            });
        }
    };
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/classNamesFunction.js

/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 */
function classNamesFunction() {
    // TODO: memoize.
    var getClassNames = function (styleFunctionOrObject, styleProps) {
        if (styleProps === void 0) { styleProps = {}; }
        // styleSet might be undefined if styleFunctionOrObject is undefined, but getStyles should never
        // ordinarily be undefined (it would hardly make any sense).
        // However, because we usually use `props.styles` as the argument to an invocation of this method, and
        // `props.styles` itself is defined as optional, this avoids the need to use `!` at all invocation points.
        if (styleFunctionOrObject === undefined) {
            return {};
        }
        var styleSet = styleFunctionOrObject && (typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject);
        return Object(lib["e" /* mergeStyleSets */])(styleSet);
    };
    return getClassNames;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/createRef.js
/**
 * @deprecated Use React.createRef.
 * May be removed in 6 months (Jan '19).
 */
function createRef() {
    var refObject = (function (element) {
        refObject.current = element;
    });
    // This getter is here to support the deprecated value prop on the refObject.
    Object.defineProperty(refObject, 'value', {
        get: function () {
            return refObject.current;
        }
    });
    refObject.current = null;
    return refObject;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/css.js
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if (arg.hasOwnProperty('toString') && typeof arg.toString === 'function') {
                classes.push(arg.toString());
            }
            else {
                // tslint:disable-next-line:no-any
                for (var key in arg) {
                    // tslint:disable-next-line:no-any
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/hoistStatics.js
/**
 * Allows you to hoist static functions in components.
 * Created for the purpose of fixing broken static functions in classes
 * that utilize decorators.
 *
 * @public
 * @param source - The object where the methods are hoisted from.
 * @param dest - The object to hoist the methods onto.
 * @returns The dest object with methods added
 */
function hoistStatics(source, dest) {
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            // tslint:disable-next-line:no-any
            dest[name_1] = source[name_1];
        }
    }
    return dest;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/customizable.js






function customizable_customizable(scope, fields, concatStyles
// tslint:disable-next-line:no-any
) {
    // tslint:disable-next-line:no-shadowed-variable
    return function customizableFactory(
    // tslint:disable-next-line:no-any
    ComposedComponent
    // tslint:disable-next-line:no-any
    ) {
        var resultClass = (_a = /** @class */ (function (_super) {
                tslib_es6["c" /* __extends */](ComponentWithInjectedProps, _super);
                // tslint:disable-next-line:no-any
                function ComponentWithInjectedProps(props) {
                    var _this = _super.call(this, props) || this;
                    _this._onSettingChanged = _this._onSettingChanged.bind(_this);
                    return _this;
                }
                ComponentWithInjectedProps.prototype.componentDidMount = function () {
                    Customizations_Customizations.observe(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.componentWillUnmount = function () {
                    Customizations_Customizations.unobserve(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.render = function () {
                    var _this = this;
                    return (FakeReact["createElement"](CustomizerContext.Consumer, null, function (context) {
                        var defaultProps = Customizations_Customizations.getSettings(fields, scope, context.customizations);
                        // tslint:disable-next-line:no-any
                        var componentProps = _this.props;
                        // If defaultProps.styles is a function, evaluate it before calling concatStyleSets
                        if (defaultProps.styles && typeof defaultProps.styles === 'function') {
                            defaultProps.styles = defaultProps.styles(tslib_es6["a" /* __assign */]({}, defaultProps, componentProps));
                        }
                        if (concatStyles) {
                            var mergedStyles = Object(lib["b" /* concatStyleSets */])(defaultProps.styles, componentProps.styles);
                            return FakeReact["createElement"](ComposedComponent, tslib_es6["a" /* __assign */]({}, defaultProps, componentProps, { styles: mergedStyles }));
                        }
                        return FakeReact["createElement"](ComposedComponent, tslib_es6["a" /* __assign */]({}, defaultProps, componentProps));
                    }));
                };
                ComponentWithInjectedProps.prototype._onSettingChanged = function () {
                    this.forceUpdate();
                };
                return ComponentWithInjectedProps;
            }(FakeReact["Component"])),
            _a.displayName = 'Customized' + scope,
            _a);
        return hoistStatics(ComposedComponent, resultClass);
        var _a;
    };
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/focus.js
/* tslint:disable:no-string-literal */

var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
/**
 * Gets the first focusable element.
 *
 * @public
 */
function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones);
}
/**
 * Gets the last focusable element.
 *
 * @public
 */
function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones);
}
/**
 * Gets the first tabbable element.
 * The difference between focusable and tabbable is that tabbable elements are focusable elements that also have tabIndex != -1.
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues forward.  Typical use passes rootElement.firstChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @public
 */
function getFirstTabbable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
/**
 * Gets the last tabbable element.
 * The difference between focusable and tabbable is that tabbable elements are focusable elements that also have tabIndex != -1.
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues in reverse.  Typical use passes rootElement.lastChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @public
 */
function getLastTabbable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */
function focusFirstChild(rootElement) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true);
    if (element) {
        focusAsync(element);
        return true;
    }
    return false;
}
/**
 * Traverse to find the previous element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 */
function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (!allowFocusRoot && currentElement === rootElement)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check its children.
    if (traverseChildren &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            if ((tabbable && isElementTabbable(childMatch, true)) || !tabbable) {
                return childMatch;
            }
            var childMatchSiblingMatch = getPreviousElement(rootElement, childMatch.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
            if (childMatchSiblingMatch) {
                return childMatchSiblingMatch;
            }
            var childMatchParent = childMatch.parentElement;
            // At this point if we have not found any potential matches
            // start looking at the rest of the subtree under the currentParent.
            // NOTE: We do not want to recurse here because doing so could
            // cause elements to get skipped.
            while (childMatchParent && childMatchParent !== currentElement) {
                var childMatchParentMatch = getPreviousElement(rootElement, childMatchParent.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
                if (childMatchParentMatch) {
                    return childMatchParentMatch;
                }
                childMatchParent = childMatchParent.parentElement;
            }
        }
    }
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
        return currentElement;
    }
    // Check its previous sibling.
    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    // Check its parent.
    if (!suppressParentTraversal) {
        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
/**
 * Traverse to find the next focusable element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 */
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (currentElement === rootElement && suppressChildTraversal && !allowFocusRoot)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
        return currentElement;
    }
    // Check its children.
    if (!suppressChildTraversal &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    // Check its sibling.
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
/**
 * Determines if an element is visible.
 *
 * @public
 */
function isElementVisible(element) {
    // If the element is not valid, return false.
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    // Fallback to other methods of determining actual visibility.
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        // tslint:disable-next-line:no-any
        element.isVisible === true); // used as a workaround for testing.
}
/**
 * Determines if an element can receive focus programmatically or via a mouse click.
 * If checkTabIndex is true, additionally checks to ensure the element can be focused with the tab key, meaning tabIndex != -1.
 *
 * @public
 */
function isElementTabbable(element, checkTabIndex) {
    // If this element is null or is disabled, it is not considered tabbable.
    if (!element || element.disabled) {
        return false;
    }
    var tabIndex = 0;
    var tabIndexAttributeValue = null;
    if (element && element.getAttribute) {
        tabIndexAttributeValue = element.getAttribute('tabIndex');
        if (tabIndexAttributeValue) {
            tabIndex = parseInt(tabIndexAttributeValue, 10);
        }
    }
    var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
    var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
    var result = !!element &&
        isFocusableAttribute !== 'false' &&
        (element.tagName === 'A' ||
            element.tagName === 'BUTTON' ||
            element.tagName === 'INPUT' ||
            element.tagName === 'TEXTAREA' ||
            isFocusableAttribute === 'true' ||
            isTabIndexSet);
    return checkTabIndex ? tabIndex !== -1 && result : result;
}
/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */
function isElementFocusZone(element) {
    return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
}
/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */
function isElementFocusSubZone(element) {
    return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
}
/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */
function doesElementContainFocus(element) {
    var document = getDocument(element);
    var currentActiveElement = document && document.activeElement;
    if (currentActiveElement && elementContains(element, currentActiveElement)) {
        return true;
    }
    return false;
}
/**
 * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
 * @param element - element to start searching from
 * @param noWrapDataAttribute - the no wrap data attribute to match (either)
 * @returns true if focus should wrap, false otherwise
 */
function shouldWrapFocus(element, noWrapDataAttribute) {
    return elementContainsAttribute(element, noWrapDataAttribute) === 'true' ? false : true;
}
var targetToFocusOnNextRepaint = undefined;
/**
 * Sets focus to an element asynchronously. The focus will be set at the next browser repaint,
 * meaning it won't cause any extra recalculations. If more than one focusAsync is called during one frame,
 * only the latest called focusAsync element will actually be focused
 * @param element - The element to focus
 */
function focusAsync(element) {
    if (element) {
        // An element was already queued to be focused, so replace that one with the new element
        if (targetToFocusOnNextRepaint) {
            targetToFocusOnNextRepaint = element;
            return;
        }
        targetToFocusOnNextRepaint = element;
        var win = getWindow(element);
        if (win) {
            // element.focus() is a no-op if the element is no longer in the DOM, meaning this is always safe
            win.requestAnimationFrame(function () {
                targetToFocusOnNextRepaint && targetToFocusOnNextRepaint.focus();
                // We are done focusing for this frame, so reset the queued focus element
                targetToFocusOnNextRepaint = undefined;
            });
        }
    }
}
/**
 * Finds the closest focusable element via an index path from a parent. See
 * `getElementIndexPath` for getting an index path from an element to a child.
 */
function getFocusableByIndexPath(parent, path) {
    var element = parent;
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var index = path_1[_i];
        var nextChild = element.children[Math.min(index, element.children.length - 1)];
        if (!nextChild) {
            break;
        }
        element = nextChild;
    }
    element =
        isElementTabbable(element) && isElementVisible(element)
            ? element
            : getNextElement(parent, element, true) || getPreviousElement(parent, element);
    return element;
}
/**
 * Finds the element index path from a parent element to a child element.
 *
 * If you had this node structure: "A has children [B, C] and C has child D",
 * the index path from A to D would be [1, 0], or `parent.chidren[1].children[0]`.
 */
function getElementIndexPath(fromElement, toElement) {
    var path = [];
    while (toElement && fromElement && toElement !== fromElement) {
        var parent_1 = getParent(toElement, true);
        if (parent_1 === null) {
            return [];
        }
        path.unshift(Array.prototype.indexOf.call(parent_1.children, toElement));
        toElement = parent_1;
    }
    return path;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/hoist.js
var REACT_LIFECYCLE_EXCLUSIONS = [
    'setState',
    'render',
    'componentWillMount',
    'UNSAFE_componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'UNSAFE_componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'getSnapshotBeforeUpdate',
    'UNSAFE_componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount'
];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
function hoistMethods(
// tslint:disable-next-line:no-any
destination, 
// tslint:disable-next-line:no-any
source, exclusions) {
    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
    var hoisted = [];
    var _loop_1 = function (methodName) {
        if (typeof source[methodName] === 'function' &&
            destination[methodName] === undefined &&
            (!exclusions || exclusions.indexOf(methodName) === -1)) {
            hoisted.push(methodName);
            /* tslint:disable:no-function-expression */
            destination[methodName] = function () {
                source[methodName].apply(source, arguments);
            };
            /* tslint:enable */
        }
    };
    for (var methodName in source) {
        _loop_1(methodName);
    }
    return hoisted;
}
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
// tslint:disable-next-line:no-any
function unhoistMethods(source, methodNames) {
    methodNames.forEach(function (methodName) { return delete source[methodName]; });
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/initials.js
/**
 * Regular expression matching characters to ignore when calculating the initials.
 * The first part matches characters within parenthesis, including the parenthesis.
 * The second part matches special ASCII characters except space, plus some unicode special characters.
 */
var UNWANTED_CHARS_REGEX = /\([^)]*\)|[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;
/**
 * Regular expression matching phone numbers. Applied after chars matching UNWANTED_CHARS_REGEX have been removed
 * and number has been trimmed for whitespaces
 */
var PHONENUMBER_REGEX = /^\d+[\d\s]*(:?ext|x|)\s*\d+$/i;
/** Regular expression matching one or more spaces. */
var MULTIPLE_WHITESPACES_REGEX = /\s+/g;
/**
 * Regular expression matching languages for which we currently don't support initials.
 * Arabic:   Arabic, Arabic Supplement, Arabic Extended-A.
 * Korean:   Hangul Jamo, Hangul Compatibility Jamo, Hangul Jamo Extended-A, Hangul Syllables, Hangul Jamo Extended-B.
 * Japanese: Hiragana, Katakana.
 * CJK:      CJK Unified Ideographs Extension A, CJK Unified Ideographs, CJK Compatibility Ideographs, CJK Unified Ideographs Extension B
 */
/* tslint:disable:max-line-length */
var UNSUPPORTED_TEXT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
/* tslint:enable:max-line-length */
function getInitialsLatin(displayName, isRtl) {
    var initials = '';
    var splits = displayName.split(' ');
    if (splits.length === 2) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[1].charAt(0).toUpperCase();
    }
    else if (splits.length === 3) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[2].charAt(0).toUpperCase();
    }
    else if (splits.length !== 0) {
        initials += splits[0].charAt(0).toUpperCase();
    }
    if (isRtl && initials.length > 1) {
        return initials.charAt(1) + initials.charAt(0);
    }
    return initials;
}
function cleanupDisplayName(displayName) {
    displayName = displayName.replace(UNWANTED_CHARS_REGEX, '');
    displayName = displayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
    displayName = displayName.trim();
    return displayName;
}
/**
 * Get (up to 2 characters) initials based on display name of the persona.
 *
 * @public
 */
function getInitials(displayName, isRtl, allowPhoneInitials) {
    if (!displayName) {
        return '';
    }
    displayName = cleanupDisplayName(displayName);
    // For names containing CJK characters, and phone numbers, we don't display initials
    if (UNSUPPORTED_TEXT_REGEX.test(displayName) || (!allowPhoneInitials && PHONENUMBER_REGEX.test(displayName))) {
        return '';
    }
    return getInitialsLatin(displayName, isRtl);
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/localStorage.js
/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        result = window.localStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        window.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/language.js


// Default to undefined so that we initialize on first read.
var _language;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 *
 * @public
 */
function getLanguage() {
    if (_language === undefined) {
        var doc = getDocument();
        var savedLanguage = getItem('language');
        if (savedLanguage !== null) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 *
 * @public
 */
function setLanguage(language, avoidPersisting) {
    if (avoidPersisting === void 0) { avoidPersisting = false; }
    var doc = getDocument();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    if (!avoidPersisting) {
        setItem('language', language);
    }
    _language = language;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/math.js
/**
 * Determines the distance between two points.
 *
 * @public
 */
function getDistanceBetweenPoints(point1, point2) {
    var distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    return distance;
}
/**
 * Produces a proportionally-scaled version of an input content size when fit to a bounding size.
 * Given a `contentSize` and a `boundsSize`, this function scales `contentSize` proportionally
 * using either `contain` or `cover` fit behaviors.
 * Use this function to pre-calculate the layout for the CSS `object-fit` and `background-fit` behaviors.
 * With `contain`, the output size must be the largest it can be while completely within the `boundsSize`.
 * With `cover`, the output size must be the smallest it can be while completely around the `boundsSize`.
 * By default, there is a `maxScale` value of 1, which prevents the `contentSize` from being scaled larger.
 *
 * @param options - the options for the bounds fit operation
 */
function fitContentToBounds(options) {
    var contentSize = options.contentSize, boundsSize = options.boundsSize, _a = options.mode, mode = _a === void 0 ? 'contain' : _a, _b = options.maxScale, maxScale = _b === void 0 ? 1 : _b;
    var contentAspectRatio = contentSize.width / contentSize.height;
    var boundsAspectRatio = boundsSize.width / boundsSize.height;
    var scale;
    if (mode === 'contain' ? contentAspectRatio > boundsAspectRatio : contentAspectRatio < boundsAspectRatio) {
        scale = boundsSize.width / contentSize.width;
    }
    else {
        scale = boundsSize.height / contentSize.height;
    }
    var finalScale = Math.min(maxScale, scale);
    return {
        width: contentSize.width * finalScale,
        height: contentSize.height * finalScale
    };
}
/**
 * Calculates a number's precision based on the number of trailing
 * zeros if the number does not have a decimal indicated by a negative
 * precision. Otherwise, it calculates the number of digits after
 * the decimal point indicated by a positive precision.
 * @param value - the value to determine the precision of
 */
function calculatePrecision(value) {
    /**
     * Group 1:
     * [1-9]([0]+$) matches trailing zeros
     * Group 2:
     * \.([0-9]*) matches all digits after a decimal point.
     */
    var groups = /[1-9]([0]+$)|\.([0-9]*)/.exec(String(value));
    if (!groups) {
        return 0;
    }
    if (groups[1]) {
        return -groups[1].length;
    }
    if (groups[2]) {
        return groups[2].length;
    }
    return 0;
}
/**
 * Rounds a number to a certain level of precision. Accepts negative precision.
 * @param value - The value that is being rounded.
 * @param precision - The number of decimal places to round the number to
 */
function precisionRound(value, precision, base) {
    if (base === void 0) { base = 10; }
    var exp = Math.pow(base, precision);
    return Math.round(value * exp) / exp;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/memoize.js

var stylesheet = lib["a" /* Stylesheet */].getInstance();
if (stylesheet && stylesheet.onReset) {
    lib["a" /* Stylesheet */].getInstance().onReset(resetMemoizations);
}
var _resetCounter = 0;
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = typeof WeakMap === 'undefined' ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
/**
 * Reset memoizations.
 */
function resetMemoizations() {
    _resetCounter++;
}
/**
 * Memoize decorator to be used on class methods. WARNING: the `this` reference
 * will be inaccessible within a memoized method, given that a cached method's `this`
 * would not be instance-specific.
 *
 * @public
 */
function memoize(target, key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        }
    };
}
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    var rootNode;
    var cacheSize = 0;
    var localResetCounter = _resetCounter;
    // tslint:disable-next-line:no-function-expression
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined || localResetCounter !== _resetCounter || (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
            localResetCounter = _resetCounter;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        return currentNode.value;
    };
}
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object' || typeof val === 'function') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null
    };
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/merge.js
/**
 * Simple deep merge function. Takes all arguments and returns a deep copy of the objects merged
 * together in the order provided. If an object creates a circular reference, it will assign the
 * original reference.
 */
function merge(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        _merge(target || {}, arg);
    }
    return target;
}
/**
 * The _merge helper iterates through all props on source and assigns them to target.
 * When the value is an object, we will create a deep clone of the object. However if
 * there is a circular reference, the value will not be deep cloned and will persist
 * the reference.
 */
// tslint:disable-next-line:no-any
function _merge(target, source, circularReferences) {
    if (circularReferences === void 0) { circularReferences = []; }
    circularReferences.push(source);
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            var value = source[name_1];
            if (typeof value === 'object') {
                var isCircularReference = circularReferences.indexOf(value) > -1;
                target[name_1] = isCircularReference ? value : _merge(target[name_1] || {}, value, circularReferences);
            }
            else {
                target[name_1] = value;
            }
        }
    }
    circularReferences.pop();
    return target;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/mobileDetector.js
/**
 * Returns true if and only if the user is on a iOS device.
 * Used to determine whether iOS-specific behavior should be applied.
 */
var isIOS = function () {
    if (!window || !window.navigator || !window.navigator.userAgent) {
        return false;
    }
    return /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/osDetector.js
var isMacResult;
/**
 * Returns true if the user is on a Mac. Caches the result value.
 * @param reset - Reset the cached result value (mainly for testing).
 */
function isMac(reset) {
    if (typeof isMacResult === 'undefined' || reset) {
        var userAgent = typeof window !== 'undefined' && window.navigator.userAgent;
        isMacResult = !!userAgent && userAgent.indexOf('Macintosh') !== -1;
    }
    return !!isMacResult;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/overflow.js
/**
 * Detects whether an element's content has horizontal overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasHorizontalOverflow(element) {
    return element.clientWidth < element.scrollWidth;
}
/**
 * Detects whether an element's content has vertical overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasVerticalOverflow(element) {
    return element.clientHeight < element.scrollHeight;
}
/**
 * Detects whether an element's content has overflow in any direction
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasOverflow(element) {
    return hasHorizontalOverflow(element) || hasVerticalOverflow(element);
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/properties.js

/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
var baseElementEvents = [
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel'
];
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
var baseElementProperties = [
    'defaultChecked',
    'defaultValue',
    'accept',
    'acceptCharset',
    'accessKey',
    'action',
    'allowFullScreen',
    'allowTransparency',
    'alt',
    'async',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'capture',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'challenge',
    'checked',
    'children',
    'classID',
    'className',
    'cols',
    'colSpan',
    'content',
    'contentEditable',
    'contextMenu',
    'controls',
    'coords',
    'crossOrigin',
    'data',
    'dateTime',
    'default',
    'defer',
    'dir',
    'download',
    'draggable',
    'encType',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'headers',
    'height',
    'hidden',
    'high',
    'hrefLang',
    'htmlFor',
    'httpEquiv',
    'icon',
    'id',
    'inputMode',
    'integrity',
    'is',
    'keyParams',
    'keyType',
    'kind',
    'lang',
    'list',
    'loop',
    'low',
    'manifest',
    'marginHeight',
    'marginWidth',
    'max',
    'maxLength',
    'media',
    'mediaGroup',
    'method',
    'min',
    'minLength',
    'multiple',
    'muted',
    'name',
    'noValidate',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'poster',
    'preload',
    'radioGroup',
    'readOnly',
    'rel',
    'required',
    'role',
    'rows',
    'rowSpan',
    'sandbox',
    'scope',
    'scoped',
    'scrolling',
    'seamless',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'spellCheck',
    'src',
    'srcDoc',
    'srcLang',
    'srcSet',
    'start',
    'step',
    'style',
    'summary',
    'tabIndex',
    'title',
    'type',
    'useMap',
    'value',
    'width',
    'wmode',
    'wrap'
];
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
var htmlElementProperties = baseElementProperties.concat(baseElementEvents);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
var anchorProperties = htmlElementProperties.concat(['href', 'target']);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
var buttonProperties = htmlElementProperties.concat(['disabled']);
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
var divProperties = htmlElementProperties.concat(['align', 'noWrap']);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
var inputProperties = buttonProperties;
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
var textAreaProperties = buttonProperties;
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
var imageProperties = divProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames-  The array of allowed propnames.
 * @returns The filtered props
 */
function getNativeProps(props, allowedPropNames, excludedPropNames) {
    return Object(object["b" /* filteredAssign */])(function (propName) {
        return ((!excludedPropNames || excludedPropNames.indexOf(propName) < 0) &&
            (propName.indexOf('data-') === 0 || propName.indexOf('aria-') === 0 || allowedPropNames.indexOf(propName) >= 0));
    }, {}, props);
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/resources.js
var _baseUrl = '';
/** Sets the current base url used for fetching images. */
function getResourceUrl(url) {
    return _baseUrl + url;
}
/** Gets the current base url used for fetching images. */
function setBaseUrl(baseUrl) {
    _baseUrl = baseUrl;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/sessionStorage.js
/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function sessionStorage_getItem(key) {
    var result = null;
    try {
        result = window.sessionStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function sessionStorage_setItem(key, data) {
    try {
        window.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/rtl.js




var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL() {
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = sessionStorage_getItem(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            setRTL(_isRTL);
        }
        var doc = getDocument();
        if (_isRTL === undefined && doc) {
            _isRTL = ((doc.body && doc.body.getAttribute('dir')) || doc.documentElement.getAttribute('dir')) === 'rtl';
            Object(lib["g" /* setRTL */])(_isRTL);
        }
    }
    return !!_isRTL;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = getDocument();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        sessionStorage_setItem(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
    Object(lib["g" /* setRTL */])(_isRTL);
}
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key) {
    if (getRTL()) {
        if (key === KeyCodes.left) {
            key = KeyCodes.right;
        }
        else if (key === KeyCodes.right) {
            key = KeyCodes.left;
        }
    }
    return key;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/string.js
// Regex that finds { and } so they can be removed on a lookup for string format
var FORMAT_ARGS_REGEX = /[\{\}]/g;
// Regex that finds {#} so it can be replaced by the arguments in string format
var FORMAT_REGEX = /\{\d+\}/g;
/**
 * String format method, used for scenarios where at runtime you
 * need to evaluate a formatted string given a tokenized string. This
 * usually only is needed in localization scenarios.

 * @example
 * ```tsx
 * "I love {0} every {1}".format("CXP")
 * ```
 * will result in a Debug Exception.
 *
 * @public
 */
// tslint:disable-next-line:no-any
function format(s) {
    'use strict';
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var args = values;
    // Callback match function
    function replace_func(match) {
        // looks up in the args
        // tslint:disable-next-line:no-any
        var replacement = args[match.replace(FORMAT_ARGS_REGEX, '')];
        // catches undefined in nondebug and null in debug and nondebug
        if (replacement === null || replacement === undefined) {
            replacement = '';
        }
        return replacement;
    }
    return s.replace(FORMAT_REGEX, replace_func);
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/styled.js





var DefaultFields = ['theme', 'styles'];
/**
 * The styled HOC wrapper allows you to create a functional wrapper around a given component which will resolve
 * getStyles functional props, and mix customized props passed in using concatStyleSets.
 *
 * @example
 * ```tsx
 * export const Toggle = styled(
 *   ToggleBase,
 *   props => ({ root: { background: 'red' }})
 * );
 * ```
 * @param Component - The unstyled base component to render, which receives styles.
 * @param baseStyles - The styles which should be curried with the component.
 * @param getProps - A helper which provides default props.
 * @param customizable - An object which defines which props can be customized using the Customizer.
 */
function styled(Component, baseStyles, getProps, customizable) {
    customizable = customizable || { scope: '', fields: undefined };
    var scope = customizable.scope, _a = customizable.fields, fields = _a === void 0 ? DefaultFields : _a;
    var Wrapped = /** @class */ (function (_super) {
        tslib_es6["c" /* __extends */](Wrapped, _super);
        function Wrapped() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._inCustomizerContext = false;
            _this._onSettingsChanged = function () { return _this.forceUpdate(); };
            return _this;
        }
        Wrapped.prototype.render = function () {
            var _this = this;
            return (FakeReact["createElement"](CustomizerContext.Consumer, null, function (context) {
                _this._inCustomizerContext = !!context.customizations.inCustomizerContext;
                var settings = Customizations_Customizations.getSettings(fields, scope, context.customizations);
                var customizedStyles = settings.styles, rest = tslib_es6["d" /* __rest */](settings, ["styles"]);
                var styles = function (styleProps) { return _resolve(styleProps, baseStyles, customizedStyles, _this.props.styles); };
                var additionalProps = getProps ? getProps(_this.props) : undefined;
                return FakeReact["createElement"](Component, tslib_es6["a" /* __assign */]({}, rest, additionalProps, _this.props, { styles: styles }));
            }));
        };
        Wrapped.prototype.componentDidMount = function () {
            if (!this._inCustomizerContext) {
                Customizations_Customizations.observe(this._onSettingsChanged);
            }
        };
        Wrapped.prototype.componentWillUnmount = function () {
            if (!this._inCustomizerContext) {
                Customizations_Customizations.unobserve(this._onSettingsChanged);
            }
        };
        Wrapped.displayName = "Styled" + (Component.displayName || Component.name);
        return Wrapped;
    }(FakeReact["Component"]));
    // This preserves backwards compatibility.
    // tslint:disable-next-line:no-any
    return Wrapped;
}
function _resolve(styleProps) {
    var allStyles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        allStyles[_i - 1] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, allStyles_1 = allStyles; _a < allStyles_1.length; _a++) {
        var styles = allStyles_1[_a];
        if (styles) {
            result.push(typeof styles === 'function' ? styles(styleProps) : styles);
        }
    }
    if (result.length) {
        // cliffkoh: I cannot figure out how to avoid the cast to any here.
        // It is something to do with the use of Omit in IStyleSet.
        // It might not be necessary once  Omit becomes part of lib.d.ts (when we remove our own Omit and rely on
        // the official version).
        // tslint:disable-next-line:no-any
        return lib["b" /* concatStyleSets */].apply(void 0, result);
    }
    return undefined;
}

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/set-version/1.1.3/node_modules/@uifabric/set-version/lib/index.js + 1 modules
var set_version_lib = __webpack_require__(50);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/version.js
// @uifabric/utilities@6.29.4
// Do not modify this file, the file is generated as part of publish. The checked in version is a placeholder only.

Object(set_version_lib["a" /* setVersion */])('@uifabric/utilities', '6.29.4');

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/utilities/6.29.4/node_modules/@uifabric/utilities/lib/index.js













































// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/utilities/icons.js



var ICON_SETTING_NAME = 'icons';
var _iconSettings = GlobalSettings["a" /* GlobalSettings */].getValue(ICON_SETTING_NAME, {
    __options: {
        disableWarnings: false,
        warnOnMissingIcons: true
    },
    __remapped: {}
});
// Reset icon registration on stylesheet resets.
var icons_stylesheet = lib["a" /* Stylesheet */].getInstance();
if (icons_stylesheet && icons_stylesheet.onReset) {
    icons_stylesheet.onReset(function () {
        for (var name_1 in _iconSettings) {
            if (_iconSettings.hasOwnProperty(name_1) && !!_iconSettings[name_1].subset) {
                _iconSettings[name_1].subset.className = undefined;
            }
        }
    });
}
/**
 * Normalizes an icon name for consistent mapping.
 * Current implementation is to convert the icon name to lower case.
 *
 * @param name - Icon name to normalize.
 * @returns {string} Normalized icon name to use for indexing and mapping.
 */
var normalizeIconName = function (name) { return name.toLowerCase(); };
/**
 * Registers a given subset of icons.
 *
 * @param iconSubset - the icon subset definition.
 */
function registerIcons(iconSubset, options) {
    var subset = tslib_es6["a" /* __assign */]({}, iconSubset, { isRegistered: false, className: undefined });
    var icons = iconSubset.icons;
    // Grab options, optionally mix user provided ones on top.
    options = options ? tslib_es6["a" /* __assign */]({}, _iconSettings.__options, options) : _iconSettings.__options;
    for (var iconName in icons) {
        if (icons.hasOwnProperty(iconName)) {
            var code = icons[iconName];
            var normalizedIconName = normalizeIconName(iconName);
            if (_iconSettings[normalizedIconName]) {
                _warnDuplicateIcon(iconName);
            }
            else {
                _iconSettings[normalizedIconName] = {
                    code: code,
                    subset: subset
                };
            }
        }
    }
}
/**
 * Unregisters icons by name.
 *
 * @param iconNames - List of icons to unregister.
 */
function unregisterIcons(iconNames) {
    var options = _iconSettings.__options;
    var _loop_1 = function (iconName) {
        var normalizedIconName = normalizeIconName(iconName);
        if (_iconSettings[normalizedIconName]) {
            delete _iconSettings[normalizedIconName];
        }
        else {
            // Warn that we are trying to delete an icon that doesn't exist
            if (!options.disableWarnings) {
                warn("The icon \"" + iconName + "\" tried to unregister but was not registered.");
            }
        }
        // Delete any aliases for this iconName
        if (_iconSettings.__remapped[normalizedIconName]) {
            delete _iconSettings.__remapped[normalizedIconName];
        }
        // Delete any items that were an alias for this iconName
        Object.keys(_iconSettings.__remapped).forEach(function (key) {
            if (_iconSettings.__remapped[key] === normalizedIconName) {
                delete _iconSettings.__remapped[key];
            }
        });
    };
    for (var _i = 0, iconNames_1 = iconNames; _i < iconNames_1.length; _i++) {
        var iconName = iconNames_1[_i];
        _loop_1(iconName);
    }
}
/**
 * Remaps one icon name to another.
 */
function registerIconAlias(iconName, mappedToName) {
    _iconSettings.__remapped[normalizeIconName(iconName)] = normalizeIconName(mappedToName);
}
/**
 * Gets an icon definition. If an icon is requested but the subset has yet to be registered,
 * it will get registered immediately.
 *
 * @public
 * @param name - Name of icon.
 */
function getIcon(name) {
    var icon = undefined;
    var options = _iconSettings.__options;
    name = name ? normalizeIconName(name) : '';
    name = _iconSettings.__remapped[name] || name;
    if (name) {
        icon = _iconSettings[name];
        if (icon) {
            var subset = icon.subset;
            if (subset && subset.fontFace) {
                if (!subset.isRegistered) {
                    Object(lib["c" /* fontFace */])(subset.fontFace);
                    subset.isRegistered = true;
                }
                if (!subset.className) {
                    subset.className = Object(lib["f" /* mergeStyles */])(subset.style, {
                        fontFamily: subset.fontFace.fontFamily,
                        fontWeight: subset.fontFace.fontWeight || 'normal',
                        fontStyle: subset.fontFace.fontStyle || 'normal'
                    });
                }
            }
        }
        else {
            if (!options.disableWarnings && options.warnOnMissingIcons) {
                warn("The icon \"" + name + "\" was used but not registered. See http://aka.ms/fabric-icon-usage for more information.");
            }
        }
    }
    return icon;
}
/**
 * Sets the icon options.
 *
 * @public
 */
function setIconOptions(options) {
    _iconSettings.__options = tslib_es6["a" /* __assign */]({}, _iconSettings.__options, options);
}
var _missingIcons = [];
var _missingIconsTimer = undefined;
function _warnDuplicateIcon(iconName) {
    var options = _iconSettings.__options;
    var warningDelay = 2000;
    var maxIconsInMessage = 10;
    if (!options.disableWarnings) {
        _missingIcons.push(iconName);
        if (_missingIconsTimer === undefined) {
            _missingIconsTimer = setTimeout(function () {
                warn("Some icons were re-registered. Applications should only call registerIcons for any given " +
                    "icon once. Redefining what an icon is may have unintended consequences. Duplicates " +
                    "include: \n" +
                    _missingIcons.slice(0, maxIconsInMessage).join(', ') +
                    (_missingIcons.length > maxIconsInMessage ? " (+ " + (_missingIcons.length - maxIconsInMessage) + " more)" : ''));
                _missingIconsTimer = undefined;
                _missingIcons = [];
            }, warningDelay);
        }
    }
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/utilities/getIconClassName.js


var defaultIconStyles = {
    display: 'inline-block'
};
/**
 * Gets an icon classname. You should be able to add this classname to an I tag with no
 * additional classnames, and render the icon.
 *
 * @public
 */
function getIconClassName(name) {
    var className = '';
    var icon = getIcon(name);
    if (icon) {
        className = Object(lib["f" /* mergeStyles */])(icon.subset.className, defaultIconStyles, {
            selectors: {
                '::before': {
                    content: "\"" + icon.code + "\""
                }
            }
        });
    }
    return className;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/utilities/index.js




// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/AnimationStyles.js

/* Register the keyframes */
var EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
var EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
var DURATION_1 = '0.167s';
var DURATION_2 = '0.267s';
var DURATION_3 = '0.367s';
var DURATION_4 = '0.467s';
var FADE_IN = Object(lib["d" /* keyframes */])({
    from: { opacity: 0 },
    to: { opacity: 1 }
});
var FADE_OUT = Object(lib["d" /* keyframes */])({
    from: { opacity: 1 },
    to: { opacity: 0 }
});
var SLIDE_RIGHT_IN10 = _createSlideInX(-10);
var SLIDE_RIGHT_IN20 = _createSlideInX(-20);
var SLIDE_RIGHT_IN40 = _createSlideInX(-40);
var SLIDE_RIGHT_IN400 = _createSlideInX(-400);
var SLIDE_LEFT_IN10 = _createSlideInX(10);
var SLIDE_LEFT_IN20 = _createSlideInX(20);
var SLIDE_LEFT_IN40 = _createSlideInX(40);
var SLIDE_LEFT_IN400 = _createSlideInX(400);
var SLIDE_UP_IN10 = _createSlideInY(10);
var SLIDE_UP_IN20 = _createSlideInY(20);
var SLIDE_DOWN_IN10 = _createSlideInY(-10);
var SLIDE_DOWN_IN20 = _createSlideInY(-20);
var SLIDE_RIGHT_OUT10 = _createSlideOutX(10);
var SLIDE_RIGHT_OUT20 = _createSlideOutX(20);
var SLIDE_RIGHT_OUT40 = _createSlideOutX(40);
var SLIDE_RIGHT_OUT400 = _createSlideOutX(400);
var SLIDE_LEFT_OUT10 = _createSlideOutX(-10);
var SLIDE_LEFT_OUT20 = _createSlideOutX(-20);
var SLIDE_LEFT_OUT40 = _createSlideOutX(-40);
var SLIDE_LEFT_OUT400 = _createSlideOutX(-400);
var SLIDE_UP_OUT10 = _createSlideOutY(-10);
var SLIDE_UP_OUT20 = _createSlideOutY(-20);
var SLIDE_DOWN_OUT10 = _createSlideOutY(10);
var SLIDE_DOWN_OUT20 = _createSlideOutY(20);
var SCALE_UP100 = Object(lib["d" /* keyframes */])({
    from: { transform: 'scale3d(.98,.98,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_DOWN98 = Object(lib["d" /* keyframes */])({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(.98,.98,1)' }
});
var SCALE_DOWN100 = Object(lib["d" /* keyframes */])({
    from: { transform: 'scale3d(1.03,1.03,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_UP103 = Object(lib["d" /* keyframes */])({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(1.03,1.03,1)' }
});
var ROTATE90 = Object(lib["d" /* keyframes */])({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(90deg)' }
});
var ROTATE_N90 = Object(lib["d" /* keyframes */])({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(-90deg)' }
});
/**
 * Exporting raw duraction values and easing functions to be used in custom animations
 */
var AnimationVariables = {
    easeFunction1: EASING_FUNCTION_1,
    easeFunction2: EASING_FUNCTION_2,
    durationValue1: DURATION_1,
    durationValue2: DURATION_2,
    durationValue3: DURATION_3,
    durationValue4: DURATION_4
};
/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
var AnimationStyles = {
    slideRightIn10: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideRightIn20: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightIn40: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideRightIn400: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn10: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn20: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn40: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn400: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideUpIn10: _createAnimation(FADE_IN + "," + SLIDE_UP_IN10, DURATION_3, EASING_FUNCTION_1),
    slideUpIn20: _createAnimation(FADE_IN + "," + SLIDE_UP_IN20, DURATION_3, EASING_FUNCTION_1),
    slideDownIn10: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN10, DURATION_3, EASING_FUNCTION_1),
    slideDownIn20: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut10: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideRightOut20: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut40: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideRightOut400: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut10: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut20: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut40: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut400: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideUpOut10: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideUpOut20: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideDownOut10: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideDownOut20: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT20, DURATION_3, EASING_FUNCTION_1),
    scaleUpIn100: _createAnimation(FADE_IN + "," + SCALE_UP100, DURATION_3, EASING_FUNCTION_1),
    scaleDownIn100: _createAnimation(FADE_IN + "," + SCALE_DOWN100, DURATION_3, EASING_FUNCTION_1),
    scaleUpOut103: _createAnimation(FADE_OUT + "," + SCALE_UP103, DURATION_1, EASING_FUNCTION_2),
    scaleDownOut98: _createAnimation(FADE_OUT + "," + SCALE_DOWN98, DURATION_1, EASING_FUNCTION_2),
    fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
    fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
    fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
    fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),
    fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
    fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
    fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
    fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
    rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
    rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2)
    // expandCollapse 100/200/400, delay 100/200
};
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return {
        animationName: animationName,
        animationDuration: animationDuration,
        animationTimingFunction: animationTimingFunction,
        animationFillMode: 'both'
    };
}
function _createSlideInX(fromX) {
    return Object(lib["d" /* keyframes */])({
        from: { transform: "translate3d(" + fromX + "px,0,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideInY(fromY) {
    return Object(lib["d" /* keyframes */])({
        from: { transform: "translate3d(0," + fromY + "px,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideOutX(toX) {
    return Object(lib["d" /* keyframes */])({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(" + toX + "px,0,0)" }
    });
}
function _createSlideOutY(toY) {
    return Object(lib["d" /* keyframes */])({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(0," + toY + "px,0)" }
    });
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/DefaultPalette.js
// When adding or removing a color, make sure you keep this consistent with IColorClassNames by adding the color variants.
var DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d4',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#212121',
    neutralPrimary: '#333333',
    neutralPrimaryAlt: '#3c3c3c',
    neutralSecondary: '#666666',
    neutralSecondaryAlt: '#767676',
    neutralTertiary: '#a6a6a6',
    neutralTertiaryAlt: '#c8c8c8',
    neutralQuaternary: '#d0d0d0',
    neutralQuaternaryAlt: '#dadada',
    neutralLight: '#eaeaea',
    neutralLighter: '#f4f4f4',
    neutralLighterAlt: '#f8f8f8',
    accent: '#0078d4',
    white: '#ffffff',
    whiteTranslucent40: 'rgba(255,255,255,.4)',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a80000',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d4',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a'
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/fonts.js
// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
// Font face names to be registered.
var LocalizedFontNames;
(function (LocalizedFontNames) {
    LocalizedFontNames.Arabic = 'Segoe UI Web (Arabic)';
    LocalizedFontNames.Cyrillic = 'Segoe UI Web (Cyrillic)';
    LocalizedFontNames.EastEuropean = 'Segoe UI Web (East European)';
    LocalizedFontNames.Greek = 'Segoe UI Web (Greek)';
    LocalizedFontNames.Hebrew = 'Segoe UI Web (Hebrew)';
    LocalizedFontNames.Thai = 'Leelawadee UI Web';
    LocalizedFontNames.Vietnamese = 'Segoe UI Web (Vietnamese)';
    LocalizedFontNames.WestEuropean = 'Segoe UI Web (West European)';
    LocalizedFontNames.Selawik = 'Selawik Web';
})(LocalizedFontNames || (LocalizedFontNames = {}));
// Font families with fallbacks, for the general regions.
var LocalizedFontFamilies;
(function (LocalizedFontFamilies) {
    LocalizedFontFamilies.Arabic = "'" + LocalizedFontNames.Arabic + "'";
    LocalizedFontFamilies.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    LocalizedFontFamilies.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    LocalizedFontFamilies.Cyrillic = "'" + LocalizedFontNames.Cyrillic + "'";
    LocalizedFontFamilies.EastEuropean = "'" + LocalizedFontNames.EastEuropean + "'";
    LocalizedFontFamilies.Greek = "'" + LocalizedFontNames.Greek + "'";
    LocalizedFontFamilies.Hebrew = "'" + LocalizedFontNames.Hebrew + "'";
    LocalizedFontFamilies.Hindi = "'Nirmala UI'";
    LocalizedFontFamilies.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    LocalizedFontFamilies.Korean = "'Malgun Gothic', Gulim";
    LocalizedFontFamilies.Selawik = "'" + LocalizedFontNames.Selawik + "'";
    LocalizedFontFamilies.Thai = "'Leelawadee UI Web', 'Kmer UI'";
    LocalizedFontFamilies.Vietnamese = "'" + LocalizedFontNames.Vietnamese + "'";
    LocalizedFontFamilies.WestEuropean = "'" + LocalizedFontNames.WestEuropean + "'";
})(LocalizedFontFamilies || (LocalizedFontFamilies = {}));
// By default, we favor system fonts for the default.
// All localized fonts use a web font and never use the system font.
var defaultFontFamily = "'Segoe UI', '" + LocalizedFontNames.WestEuropean + "'";
// Mapping of language prefix to to font family.
var LanguageToFontMap = {
    ar: LocalizedFontFamilies.Arabic,
    bg: LocalizedFontFamilies.Cyrillic,
    cs: LocalizedFontFamilies.EastEuropean,
    el: LocalizedFontFamilies.Greek,
    et: LocalizedFontFamilies.EastEuropean,
    he: LocalizedFontFamilies.Hebrew,
    hi: LocalizedFontFamilies.Hindi,
    hr: LocalizedFontFamilies.EastEuropean,
    hu: LocalizedFontFamilies.EastEuropean,
    ja: LocalizedFontFamilies.Japanese,
    kk: LocalizedFontFamilies.EastEuropean,
    ko: LocalizedFontFamilies.Korean,
    lt: LocalizedFontFamilies.EastEuropean,
    lv: LocalizedFontFamilies.EastEuropean,
    pl: LocalizedFontFamilies.EastEuropean,
    ru: LocalizedFontFamilies.Cyrillic,
    sk: LocalizedFontFamilies.EastEuropean,
    'sr-latn': LocalizedFontFamilies.EastEuropean,
    th: LocalizedFontFamilies.Thai,
    tr: LocalizedFontFamilies.EastEuropean,
    uk: LocalizedFontFamilies.Cyrillic,
    vi: LocalizedFontFamilies.Vietnamese,
    'zh-hans': LocalizedFontFamilies.ChineseSimplified,
    'zh-hant': LocalizedFontFamilies.ChineseTraditional
};
// Standard font sizes.
var FontSizes;
(function (FontSizes) {
    FontSizes.mini = '10px';
    FontSizes.xSmall = '11px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '13px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '15px';
    FontSizes.icon = '16px';
    FontSizes.large = '17px';
    FontSizes.xLarge = '21px';
    FontSizes.xxLarge = '28px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '72px';
})(FontSizes || (FontSizes = {}));
// Standard font weights.
var FontWeights;
(function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
})(FontWeights || (FontWeights = {}));
// Standard Icon Sizes.
var IconFontSizes;
(function (IconFontSizes) {
    IconFontSizes.xSmall = '10px';
    IconFontSizes.small = '12px';
    IconFontSizes.medium = '16px';
    IconFontSizes.large = '20px';
})(IconFontSizes || (IconFontSizes = {}));
function _fontFamilyWithFallbacks(fontFamily) {
    return fontFamily + ", " + FontFamilyFallbacks;
}
function createFontStyles(localeCode) {
    var localizedFont = _getLocalizedFontFamily(localeCode);
    var fontFamilyWithFallback = _fontFamilyWithFallbacks(localizedFont);
    var semilightFontFamilyWithFallback = fontFamilyWithFallback;
    // Chrome has a bug where it does not render Segoe UI Semilight correctly, so we force the webfont to be used in that case
    if (localizedFont === defaultFontFamily) {
        semilightFontFamilyWithFallback = _fontFamilyWithFallbacks(LocalizedFontFamilies.WestEuropean);
    }
    var fontStyles = {
        tiny: _createFont(FontSizes.mini, FontWeights.semibold, fontFamilyWithFallback),
        xSmall: _createFont(FontSizes.xSmall, FontWeights.regular, fontFamilyWithFallback),
        small: _createFont(FontSizes.small, FontWeights.regular, fontFamilyWithFallback),
        smallPlus: _createFont(FontSizes.smallPlus, FontWeights.regular, fontFamilyWithFallback),
        medium: _createFont(FontSizes.medium, FontWeights.regular, fontFamilyWithFallback),
        mediumPlus: _createFont(FontSizes.mediumPlus, FontWeights.regular, fontFamilyWithFallback),
        large: _createFont(FontSizes.large, FontWeights.semilight, semilightFontFamilyWithFallback),
        xLarge: _createFont(FontSizes.xLarge, FontWeights.light, fontFamilyWithFallback),
        xxLarge: _createFont(FontSizes.xxLarge, FontWeights.light, fontFamilyWithFallback),
        superLarge: _createFont(FontSizes.superLarge, FontWeights.light, fontFamilyWithFallback),
        mega: _createFont(FontSizes.mega, FontWeights.light, fontFamilyWithFallback)
    };
    return fontStyles;
}
/**
 * If there is a localized font for this language, return that. Returns undefined if there is no localized font for that language.
 */
function _getLocalizedFontFamily(language) {
    for (var lang in LanguageToFontMap) {
        if (LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
            // tslint:disable-next-line:no-any
            return LanguageToFontMap[lang];
        }
    }
    return defaultFontFamily;
}
function _createFont(size, weight, fontFamily) {
    return {
        fontFamily: fontFamily,
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: size,
        fontWeight: weight
    };
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/DefaultFontStyles.js



// Default urls.
var DefaultBaseUrl = 'https://static2.sharepointonline.com/files/fabric/assets';
// Standard font styling.
var DefaultFontStyles = createFontStyles(getLanguage());
function _registerFontFace(fontFamily, url, fontWeight, localFontName) {
    fontFamily = "'" + fontFamily + "'";
    var localFontSrc = localFontName !== undefined ? "local('" + localFontName + "')," : '';
    Object(lib["c" /* fontFace */])({
        fontFamily: fontFamily,
        src: localFontSrc + ("url('" + url + ".woff2') format('woff2'),") + ("url('" + url + ".woff') format('woff')"),
        fontWeight: fontWeight,
        fontStyle: 'normal'
    });
}
function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName, localFontName) {
    if (cdnFontName === void 0) { cdnFontName = 'segoeui'; }
    var urlBase = baseUrl + "/" + cdnFolder + "/" + cdnFontName;
    _registerFontFace(fontFamily, urlBase + '-light', FontWeights.light, localFontName && localFontName + ' Light');
    _registerFontFace(fontFamily, urlBase + '-semilight', FontWeights.semilight, localFontName && localFontName + ' SemiLight');
    _registerFontFace(fontFamily, urlBase + '-regular', FontWeights.regular, localFontName);
    _registerFontFace(fontFamily, urlBase + '-semibold', FontWeights.semibold, localFontName && localFontName + ' SemiBold');
}
function registerDefaultFontFaces(baseUrl) {
    if (baseUrl) {
        var fontUrl = baseUrl + "/fonts";
        // Produce @font-face definitions for all supported web fonts.
        _registerFontFaceSet(fontUrl, LocalizedFontNames.Thai, 'leelawadeeui-thai', 'leelawadeeui');
        _registerFontFaceSet(fontUrl, LocalizedFontNames.Arabic, 'segoeui-arabic');
        _registerFontFaceSet(fontUrl, LocalizedFontNames.Cyrillic, 'segoeui-cyrillic');
        _registerFontFaceSet(fontUrl, LocalizedFontNames.EastEuropean, 'segoeui-easteuropean');
        _registerFontFaceSet(fontUrl, LocalizedFontNames.Greek, 'segoeui-greek');
        _registerFontFaceSet(fontUrl, LocalizedFontNames.Hebrew, 'segoeui-hebrew');
        _registerFontFaceSet(fontUrl, LocalizedFontNames.Vietnamese, 'segoeui-vietnamese');
        _registerFontFaceSet(fontUrl, LocalizedFontNames.WestEuropean, 'segoeui-westeuropean', 'segoeui', 'Segoe UI');
        _registerFontFaceSet(fontUrl, LocalizedFontFamilies.Selawik, 'selawik', 'selawik');
        // Leelawadee UI (Thai) does not have a 'light' weight, so we override
        // the font-face generated above to use the 'semilight' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-semilight", FontWeights.light);
        // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
        // the font-face generated above to use the 'bold' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-bold", FontWeights.semibold);
    }
}
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */
function _getFontBaseUrl() {
    var win = typeof window !== 'undefined' ? window : undefined;
    // tslint:disable-next-line:no-string-literal no-any
    var fabricConfig = win ? win['FabricConfig'] : undefined;
    return fabricConfig && fabricConfig.fontBaseUrl !== undefined ? fabricConfig.fontBaseUrl : DefaultBaseUrl;
}
/**
 * Register the font faces.
 */
registerDefaultFontFaces(_getFontBaseUrl());

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/CommonStyles.js
var HighContrastSelector = '@media screen and (-ms-high-contrast: active)';
var HighContrastSelectorWhite = '@media screen and (-ms-high-contrast: black-on-white)';
var HighContrastSelectorBlack = '@media screen and (-ms-high-contrast: white-on-black)';
var ScreenWidthMinSmall = 320;
var ScreenWidthMinMedium = 480;
var ScreenWidthMinLarge = 640;
var ScreenWidthMinXLarge = 1024;
var ScreenWidthMinXXLarge = 1366;
var ScreenWidthMinXXXLarge = 1920;
var ScreenWidthMaxSmall = ScreenWidthMinMedium - 1;
var ScreenWidthMaxMedium = ScreenWidthMinLarge - 1;
var ScreenWidthMaxLarge = ScreenWidthMinXLarge - 1;
var ScreenWidthMaxXLarge = ScreenWidthMinXXLarge - 1;
var ScreenWidthMaxXXLarge = ScreenWidthMinXXXLarge - 1;
var ScreenWidthMinUhfMobile = 768;
function getScreenSelector(min, max) {
    return "@media only screen and (min-width: " + min + "px) and (max-width: " + max + "px)";
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/zIndexes.js
var ZIndexes;
(function (ZIndexes) {
    ZIndexes.Nav = 1;
    ZIndexes.ScrollablePane = 1;
    ZIndexes.FocusStyle = 1;
    ZIndexes.Coachmark = 1000;
    ZIndexes.Layer = 1000000;
    ZIndexes.KeytipLayer = 1000001;
})(ZIndexes || (ZIndexes = {}));

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/getFocusStyle.js



/**
 * Generates a focus style which can be used to define an :after focus border.
 *
 * @param theme - The theme object to use.
 * @param inset - The number of pixels to inset the border.
 * @param position - The positioning applied to the container. Must
 * be 'relative' or 'absolute' so that the focus border can live around it.
 * @param highContrastStyle - Style for high contrast mode.
 * @param borderColor - Color of the border.
 * @param outlineColor - Color of the outline.
 * @param isFocusedOnly - If the styles should apply on focus or not.
 * @returns The style object.
 */
function getFocusStyle(theme, inset, position, highContrastStyle, borderColor, outlineColor, isFocusedOnly) {
    if (inset === void 0) { inset = 0; }
    if (position === void 0) { position = 'relative'; }
    if (highContrastStyle === void 0) { highContrastStyle = undefined; }
    if (borderColor === void 0) { borderColor = theme.palette.white; }
    if (outlineColor === void 0) { outlineColor = theme.palette.neutralSecondary; }
    if (isFocusedOnly === void 0) { isFocusedOnly = true; }
    return {
        outline: 'transparent',
        position: position,
        selectors: (_a = {
                '::-moz-focus-inner': {
                    border: '0'
                }
            },
            _a["." + IsFocusVisibleClassName + " &" + (isFocusedOnly ? ':focus' : '') + ":after"] = {
                content: '""',
                position: 'absolute',
                left: inset + 1,
                top: inset + 1,
                bottom: inset + 1,
                right: inset + 1,
                border: '1px solid ' + borderColor,
                outline: '1px solid ' + outlineColor,
                zIndex: ZIndexes.FocusStyle,
                selectors: (_b = {},
                    _b[HighContrastSelector] = highContrastStyle,
                    _b)
            },
            _a)
    };
    var _a, _b;
}
/**
 * Generates style to clear browser specific focus styles.
 */
function focusClear() {
    return {
        selectors: {
            '&::-moz-focus-inner': {
                // Clear the focus border in Firefox. Reference: http://stackoverflow.com/a/199319/1436671
                border: 0
            },
            '&': {
                // Clear browser specific focus styles and use transparent as placeholder for focus style
                outline: 'transparent'
            }
        }
    };
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/hiddenContentStyle.js
var hiddenContentStyle = {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    border: 0,
    overflow: 'hidden'
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/PulsingBeaconAnimationStyles.js


var DEFAULT_DURATION = '14s';
var DEFAULT_DELAY = '2s';
var DEFAULT_ITERATION_COUNT = '1';
function _continuousPulseStepOne(beaconColorOne, innerDimension) {
    return {
        borderColor: beaconColorOne,
        borderWidth: '0px',
        width: innerDimension,
        height: innerDimension
    };
}
function _continuousPulseStepTwo(borderWidth) {
    return {
        opacity: 1,
        borderWidth: borderWidth
    };
}
function _continuousPulseStepThree() {
    return {
        opacity: 1
    };
}
function _continuousPulseStepFour(beaconColorTwo, outerDimension) {
    return {
        borderWidth: '0',
        width: outerDimension,
        height: outerDimension,
        opacity: 0,
        borderColor: beaconColorTwo
    };
}
function _continuousPulseStepFive(beaconColorOne, innerDimension) {
    return tslib_es6["a" /* __assign */]({}, _continuousPulseStepOne(beaconColorOne, innerDimension), {
        opacity: 0
    });
}
function _continuousPulseAnimationDouble(beaconColorOne, beaconColorTwo, innerDimension, outerDimension, borderWidth) {
    return Object(lib["d" /* keyframes */])({
        '0%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '1.42%': _continuousPulseStepTwo(borderWidth),
        '3.57%': _continuousPulseStepThree(),
        '7.14%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '8%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '29.99%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '30%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '31.42%': _continuousPulseStepTwo(borderWidth),
        '33.57%': _continuousPulseStepThree(),
        '37.14%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '38%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '79.42%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '79.43': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '81.85': _continuousPulseStepTwo(borderWidth),
        '83.42': _continuousPulseStepThree(),
        '87%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '100%': {}
    });
}
function _continuousPulseAnimationSingle(beaconColorOne, beaconColorTwo, innerDimension, outerDimension, borderWidth) {
    return Object(lib["d" /* keyframes */])({
        '0%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '14.2%': _continuousPulseStepTwo(borderWidth),
        '35.7%': _continuousPulseStepThree(),
        '71.4%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '100%': {}
    });
}
function _createDefaultAnimation(animationName, delayLength) {
    return {
        animationName: animationName,
        animationIterationCount: DEFAULT_ITERATION_COUNT,
        animationDuration: DEFAULT_DURATION,
        animationDelay: delayLength || DEFAULT_DELAY
    };
}
var PulsingBeaconAnimationStyles = {
    continuousPulseAnimationDouble: _continuousPulseAnimationDouble,
    continuousPulseAnimationSingle: _continuousPulseAnimationSingle,
    createDefaultAnimation: _createDefaultAnimation
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/getGlobalClassNames.js


/**
 * Internal memoized function which simply takes in the class map and the
 * disable boolean. These immutable values can be memoized.
 */
var _getGlobalClassNames = memoizeFunction(function (classNames, disableGlobalClassNames) {
    var styleSheet = lib["a" /* Stylesheet */].getInstance();
    if (disableGlobalClassNames) {
        // disable global classnames
        return Object.keys(classNames).reduce(function (acc, className) {
            acc[className] = styleSheet.getClassName(classNames[className]);
            return acc;
        }, {});
    }
    // use global classnames
    return classNames;
});
/**
 * Checks for the `disableGlobalClassNames` property on the `theme` to determine if it should return `classNames`
 * Note that calls to this function are memoized.
 *
 * @param classNames - The collection of global class names that apply when the flag is false. Make sure to pass in
 * the same instance on each call to benefit from memoization.
 * @param theme - The theme to check the flag on
 * @param disableGlobalClassNames - Optional. Explicitly opt in/out of disabling global classnames. Defaults to false.
 */
function getGlobalClassNames(classNames, theme, disableGlobalClassNames) {
    return _getGlobalClassNames(classNames, disableGlobalClassNames !== undefined ? disableGlobalClassNames : theme.disableGlobalClassNames);
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/scheme.js

/**
 * @internal
 * This function is still in experimental phase in support of Foundation experimental development. Its API signature and existence
 * are subject to change.
 *
 * Modify context to activate the specified scheme or theme. For schemes, look in context (if available) and fall back to global
 * Customizations. If both scheme and theme are specified, scheme will be looked up in theme. In this case, scheme must be
 * present in theme arg, otherwise new context will default to theme arg (there is no fallback to settings to look up scheme.)
 *
 * @param context - Context in which to get schemed customizations.
 * @param scheme - Scheme to get customizations for from theme arg (if supplied) OR from context and global settings.
 * @param theme - Theme to merge into context.
 * @returns modified schemed context if scheme is valid and not already applied, unmodified context otherwise.
 */
function getThemedContext(context, scheme, theme) {
    var newContext = context;
    var newSettings;
    // Only fall back to context and customizations when theme arg is not provided.
    var schemeSource = theme || Customizations_Customizations.getSettings(['theme'], undefined, context.customizations).theme;
    if (theme) {
        newSettings = { theme: theme };
    }
    var schemeTheme = scheme && schemeSource && schemeSource.schemes && schemeSource.schemes[scheme];
    // These first two checks are logically redundant but TS doesn't infer schemeSource.schemes is defined when schemeTheme is defined.
    if (schemeSource && schemeTheme && schemeSource !== schemeTheme) {
        newSettings = { theme: schemeTheme };
        newSettings.theme.schemes = schemeSource.schemes;
    }
    if (newSettings) {
        newContext = {
            customizations: {
                settings: mergeSettings(context.customizations.settings, newSettings),
                scopedSettings: context.customizations.scopedSettings
            }
        };
    }
    return newContext;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/DefaultSpacing.js
var DefaultSpacing = {
    s2: '4px',
    s1: '8px',
    m: '16px',
    l1: '20px',
    l2: '32px'
};

// EXTERNAL MODULE: external "@microsoft/load-themed-styles"
var load_themed_styles_ = __webpack_require__(42);
var load_themed_styles__default = /*#__PURE__*/__webpack_require__.n(load_themed_styles_);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/DefaultEffects.js
var DefaultEffects = {
    // commented values are the defaults for Fluent
    elevation4: '0 0 5px 0 rgba(0,0,0,.4)',
    elevation8: '0 0 5px 0 rgba(0,0,0,.4)',
    elevation16: '0 0 5px 0 rgba(0,0,0,.4)',
    elevation64: '0 0 5px 0 rgba(0,0,0,.4)',
    roundedCorner2: '0px' // 2
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/theme.js







var _theme = createTheme({
    palette: DefaultPalette,
    semanticColors: _makeSemanticColorsFromPalette(DefaultPalette, false, false),
    fonts: DefaultFontStyles,
    isInverted: false,
    disableGlobalClassNames: false
});
var _onThemeChangeCallbacks = [];
var ThemeSettingName = 'theme';
if (!Customizations_Customizations.getSettings([ThemeSettingName]).theme) {
    var theme_win = typeof window !== 'undefined' ? window : undefined;
    // tslint:disable:no-string-literal no-any
    if (theme_win && theme_win['FabricConfig'] && theme_win['FabricConfig'].theme) {
        _theme = createTheme(theme_win['FabricConfig'].theme);
    }
    // tslint:enable:no-string-literal no-any
    // Set the default theme.
    Customizations_Customizations.applySettings((theme__a = {}, theme__a[ThemeSettingName] = _theme, theme__a));
}
/**
 * Gets the theme object
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function getTheme(depComments) {
    if (depComments === void 0) { depComments = false; }
    if (depComments === true) {
        _theme = createTheme({}, depComments);
    }
    return _theme;
}
/**
 * Registers a callback that gets called whenever the theme changes.
 * This should only be used when the component cannot automatically get theme changes through its state.
 * This will not register duplicate callbacks.
 */
function registerOnThemeChangeCallback(callback) {
    if (_onThemeChangeCallbacks.indexOf(callback) === -1) {
        _onThemeChangeCallbacks.push(callback);
    }
}
/**
 * See registerOnThemeChangeCallback().
 * Removes previously registered callbacks.
 */
function removeOnThemeChangeCallback(callback) {
    var i = _onThemeChangeCallbacks.indexOf(callback);
    if (i === -1) {
        return;
    }
    _onThemeChangeCallbacks.splice(i, 1);
}
/**
 * Applies the theme, while filling in missing slots.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function loadTheme(theme, depComments) {
    if (depComments === void 0) { depComments = false; }
    _theme = createTheme(theme, depComments);
    // Invoke the legacy method of theming the page as well.
    Object(load_themed_styles_["loadTheme"])(tslib_es6["a" /* __assign */]({}, _theme.palette, _theme.semanticColors, _loadFonts(_theme)));
    Customizations_Customizations.applySettings((_a = {}, _a[ThemeSettingName] = _theme, _a));
    _onThemeChangeCallbacks.forEach(function (callback) {
        try {
            callback(_theme);
        }
        catch (e) {
            // don't let a bad callback break everything else
        }
    });
    return _theme;
    var _a;
}
/**
 * Loads font variables into a JSON object.
 * @param theme - The theme object
 */
function _loadFonts(theme) {
    var lines = {};
    for (var _i = 0, _a = Object.keys(theme.fonts); _i < _a.length; _i++) {
        var fontName = _a[_i];
        var font = theme.fonts[fontName];
        for (var _b = 0, _c = Object.keys(font); _b < _c.length; _b++) {
            var propName = _c[_b];
            var name_1 = 'ms-font-' + fontName + '-' + propName;
            lines[name_1] = "\"[theme:" + name_1 + ", default: " + font[propName] + "]\"";
        }
    }
    return lines;
}
/**
 * Creates a custom theme definition which can be used with the Customizer.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function createTheme(theme, depComments) {
    if (depComments === void 0) { depComments = false; }
    var newPalette = tslib_es6["a" /* __assign */]({}, DefaultPalette, theme.palette);
    if (!theme.palette || !theme.palette.accent) {
        newPalette.accent = newPalette.themePrimary;
    }
    // mix in custom overrides with good slots first, since custom overrides might be used in fixing deprecated slots
    var newSemanticColors = tslib_es6["a" /* __assign */]({}, _makeSemanticColorsFromPalette(newPalette, !!theme.isInverted, depComments), theme.semanticColors);
    var defaultFontStyles = tslib_es6["a" /* __assign */]({}, DefaultFontStyles);
    if (theme.defaultFontStyle) {
        for (var _i = 0, _a = Object.keys(defaultFontStyles); _i < _a.length; _i++) {
            var fontStyle = _a[_i];
            defaultFontStyles[fontStyle] = merge({}, defaultFontStyles[fontStyle], theme.defaultFontStyle);
        }
    }
    if (theme.fonts) {
        for (var _b = 0, _c = Object.keys(theme.fonts); _b < _c.length; _b++) {
            var fontStyle = _c[_b];
            defaultFontStyles[fontStyle] = merge({}, defaultFontStyles[fontStyle], theme.fonts[fontStyle]);
        }
    }
    return {
        palette: newPalette,
        fonts: tslib_es6["a" /* __assign */]({}, defaultFontStyles),
        semanticColors: newSemanticColors,
        isInverted: !!theme.isInverted,
        disableGlobalClassNames: !!theme.disableGlobalClassNames,
        spacing: tslib_es6["a" /* __assign */]({}, DefaultSpacing, theme.spacing),
        effects: tslib_es6["a" /* __assign */]({}, DefaultEffects, theme.effects)
    };
}
/**
 * Helper to pull a given property name from a given set of sources, in order, if available. Otherwise returns the property name.
 */
function _expandFrom(propertyName) {
    var maps = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        maps[_i - 1] = arguments[_i];
    }
    if (propertyName) {
        for (var _a = 0, maps_1 = maps; _a < maps_1.length; _a++) {
            var map = maps_1[_a];
            if (map[propertyName]) {
                return map[propertyName];
            }
        }
    }
    return propertyName;
}
// Generates all the semantic slot colors based on the Fabric palette.
// We'll use these as fallbacks for semantic slots that the passed in theme did not define.
function _makeSemanticColorsFromPalette(p, isInverted, depComments) {
    var toReturn = {
        bodyBackground: p.white,
        bodyStandoutBackground: p.neutralLighterAlt,
        bodyFrameBackground: p.white,
        bodyFrameDivider: p.neutralLight,
        bodyText: p.neutralPrimary,
        bodyTextChecked: p.black,
        bodySubtext: p.neutralSecondary,
        bodyDivider: p.neutralLight,
        disabledBackground: p.neutralLighter,
        disabledText: p.neutralTertiary,
        disabledBodyText: p.neutralTertiary,
        disabledSubtext: p.neutralQuaternary,
        disabledBodySubtext: p.neutralTertiaryAlt,
        focusBorder: p.neutralSecondary,
        variantBorder: p.neutralLight,
        variantBorderHovered: p.neutralTertiary,
        defaultStateBackground: p.neutralLighterAlt,
        errorText: !isInverted ? p.redDark : '#ff5f5f',
        warningText: !isInverted ? '#333333' : '#ffffff',
        errorBackground: !isInverted ? 'rgba(232, 17, 35, .2)' : 'rgba(232, 17, 35, .5)',
        blockingBackground: !isInverted ? 'rgba(234, 67, 0, .2)' : 'rgba(234, 67, 0, .5)',
        warningBackground: !isInverted ? 'rgba(255, 185, 0, .2)' : 'rgba(255, 251, 0, .6)',
        warningHighlight: !isInverted ? '#ffb900' : '#fff100',
        successBackground: !isInverted ? 'rgba(186, 216, 10, .2)' : 'rgba(186, 216, 10, .4)',
        inputBorder: p.neutralTertiary,
        inputBorderHovered: p.neutralPrimary,
        inputBackground: p.white,
        inputBackgroundChecked: p.themePrimary,
        inputBackgroundCheckedHovered: p.themeDarkAlt,
        inputForegroundChecked: p.white,
        inputFocusBorderAlt: p.themePrimary,
        smallInputBorder: p.neutralSecondary,
        inputText: p.neutralPrimary,
        inputTextHovered: p.neutralDark,
        inputPlaceholderText: p.neutralSecondary,
        buttonBackground: p.neutralLighter,
        buttonBackgroundChecked: p.neutralTertiaryAlt,
        buttonBackgroundHovered: p.neutralLight,
        buttonBackgroundCheckedHovered: p.neutralLight,
        buttonBackgroundPressed: p.neutralLight,
        buttonBackgroundDisabled: p.neutralLighter,
        buttonBorder: 'transparent',
        buttonText: p.neutralPrimary,
        buttonTextHovered: p.neutralDark,
        buttonTextChecked: p.neutralDark,
        buttonTextCheckedHovered: p.black,
        buttonTextPressed: p.neutralDark,
        buttonTextDisabled: p.neutralTertiary,
        buttonBorderDisabled: 'transparent',
        primaryButtonBackground: p.themePrimary,
        primaryButtonBackgroundHovered: p.themeDarkAlt,
        primaryButtonBackgroundPressed: p.themeDark,
        primaryButtonBackgroundDisabled: p.neutralLighter,
        primaryButtonBorder: 'transparent',
        primaryButtonText: p.white,
        primaryButtonTextHovered: p.white,
        primaryButtonTextPressed: p.white,
        primaryButtonTextDisabled: p.neutralQuaternary,
        accentButtonBackground: p.accent,
        accentButtonText: p.white,
        menuBackground: p.white,
        menuDivider: p.neutralTertiaryAlt,
        menuIcon: p.themePrimary,
        menuHeader: p.themePrimary,
        menuItemBackgroundHovered: p.neutralLighter,
        menuItemBackgroundPressed: p.neutralLight,
        menuItemText: p.neutralPrimary,
        menuItemTextHovered: p.neutralDark,
        listBackground: p.white,
        listText: p.neutralPrimary,
        listItemBackgroundHovered: p.neutralLighter,
        listItemBackgroundChecked: p.neutralLight,
        listItemBackgroundCheckedHovered: p.neutralQuaternaryAlt,
        listHeaderBackgroundHovered: p.neutralLighter,
        listHeaderBackgroundPressed: p.neutralLight,
        actionLink: p.neutralPrimary,
        actionLinkHovered: p.neutralDark,
        link: p.themePrimary,
        linkHovered: p.themeDarker,
        // Deprecated slots, second pass by _fixDeprecatedSlots() later for self-referential slots
        listTextColor: '',
        menuItemBackgroundChecked: p.neutralLight
    };
    return _fixDeprecatedSlots(toReturn, depComments);
}
function _fixDeprecatedSlots(s, depComments) {
    // Add @deprecated tag as comment if enabled
    var dep = '';
    if (depComments === true) {
        dep = ' /* @deprecated */';
    }
    s.listTextColor = s.listText + dep;
    s.menuItemBackgroundChecked += dep;
    return s;
}
var theme__a;

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/GeneralStyles.js
// This file mimics styles and mixins from _General.Mixins.scss
var normalize = {
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
};
var noWrap = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/getFadedOverflowStyle.js
var DEFAULT_HEIGHT = '50%';
var DEFAULT_WIDTH = 20;
/**
 * - Generates a style used to fade out an overflowing content by defining a style for an :after pseudo element.
 * - Apply it to the :after selector for all combination of states the parent of content might have (normal, hover, selected, focus).
 * - Requires the target to have position set to relative and overflow set to hidden.
 *
 * @example
 * ```tsx
 * // Assuming the following DOM structure and the different background colors coming from the parent holding the content.
 * <div className={classNames.parent}>
 *   <span className={classNames.content}>Overflown Content</span>
 * </div>
 * ```
 * ```ts
 * // This is how the style set would look in Component.styles.ts
 * const { bodyBackground } = theme.semanticColors;
 * const { neutralLighter } = theme.palette;
 *
 * // The second argument of getFadedOverflowStyle function is a string representing a key of ISemanticColors or IPalette.
 *
 * const styles = {
 *   parent: [
 *     backgroundColor: bodyBackground,
 *     selectors: {
 *       '&:hover: {
 *         backgroundColor: neutralLighter
 *       },
 *       '$content:after': {
 *         ...getFadedOverflowStyle(theme, 'bodyBackground')
 *       },
 *       '&:hover $content:after': {
 *         ...getFadedOverflowStyle(theme, 'neutralLighter')
 *       }
 *     }
 *   ],
 *   content: [
 *     width: '100%',
 *     display: 'inline-block',
 *     position: 'relative',
 *     overflow: 'hidden'
 *   ]
 * }
 * ```
 * @param theme - The theme object to use.
 * @param color - The background color to fade out to. Accepts only keys of ISemanticColors or IPalette. Defaults to 'bodyBackground'.
 * @param direction - The direction of the overflow. Defaults to horizontal.
 * @param width - The width of the fading overflow. Vertical direction defaults it to 100% vs 20px when horizontal.
 * @param height - The Height of the fading overflow. Vertical direction defaults it to 50% vs 100% when horizontal.
 * @returns The style object.
 */
function getFadedOverflowStyle(theme, color, direction, width, height) {
    if (color === void 0) { color = 'bodyBackground'; }
    if (direction === void 0) { direction = 'horizontal'; }
    if (width === void 0) { width = getDefaultValue('width', direction); }
    if (height === void 0) { height = getDefaultValue('height', direction); }
    // Get the color value string from the theme semanticColors or palette.
    var colorValue = theme.semanticColors[color] || theme.palette[color];
    // Get the red, green, blue values of the colorValue.
    var rgbColor = color2rgb(colorValue);
    // Apply opacity 0 to serve as a start color of the gradient.
    var rgba = "rgba(" + rgbColor.r + ", " + rgbColor.g + ", " + rgbColor.b + ", 0)";
    // Get the direction of the gradient.
    var gradientDirection = direction === 'vertical' ? 'to bottom' : 'to right'; // mergeStyles take care of RTL direction.
    return {
        content: '""',
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: width,
        height: height,
        pointerEvents: 'none',
        backgroundImage: "linear-gradient(" + gradientDirection + ", " + rgba + " 0%, " + colorValue + " 100%)"
    };
}
// TODO consider moving this to a separate module along with some more color functions from OUFR/utilities.
/**
 * Helper function to convert a string hex color to an RGB object.
 *
 * @param colorValue - Color to be converted from hex to rgba.
 */
function color2rgb(colorValue) {
    if (colorValue[0] === '#') {
        // If it's a hex code
        return {
            r: parseInt(colorValue.slice(1, 3), 16),
            g: parseInt(colorValue.slice(3, 5), 16),
            b: parseInt(colorValue.slice(5, 7), 16)
        };
    }
    else if (colorValue.indexOf('rgba(') === 0) {
        // If it's an rgba color string
        colorValue = colorValue.match(/rgba\(([^)]+)\)/)[1];
        var parts = colorValue.split(/ *, */).map(Number);
        return {
            r: parts[0],
            g: parts[1],
            b: parts[2]
        };
    }
    // The only remaining possibility is transparent.
    return {
        r: 255,
        g: 255,
        b: 255
    };
}
/**
 * Helper function to get the default values for parameters of main function.
 *
 * @param style - Which style to get the default value for.
 * @param direction - What direction to take into consideration.
 */
function getDefaultValue(style, direction) {
    if (style === 'width') {
        return direction === 'horizontal' ? DEFAULT_WIDTH : '100%';
    }
    else {
        return direction === 'vertical' ? DEFAULT_HEIGHT : '100%';
    }
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/styles/index.js















// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/classNames/AnimationClassNames.js


var AnimationClassNames = buildClassMap(AnimationStyles);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/classNames/FontClassNames.js


var FontClassNames = buildClassMap(DefaultFontStyles);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/classNames/ColorClassNames.js



var ColorClassNames = {};
for (var ColorClassNames_colorName in DefaultPalette) {
    if (DefaultPalette.hasOwnProperty(ColorClassNames_colorName)) {
        // Foreground color
        _defineGetter(ColorClassNames, ColorClassNames_colorName, '', false, 'color');
        // Hover color
        _defineGetter(ColorClassNames, ColorClassNames_colorName, 'Hover', true, 'color');
        // Background color
        _defineGetter(ColorClassNames, ColorClassNames_colorName, 'Background', false, 'background');
        // Background hover
        _defineGetter(ColorClassNames, ColorClassNames_colorName, 'BackgroundHover', true, 'background');
        // Border color
        _defineGetter(ColorClassNames, ColorClassNames_colorName, 'Border', false, 'borderColor');
        // Border hover color
        _defineGetter(ColorClassNames, ColorClassNames_colorName, 'BorderHover', true, 'borderColor');
    }
}
/**
 * Defines a getter for the given class configuration.
 */
function _defineGetter(obj, colorName, suffix, isHover, cssProperty) {
    Object.defineProperty(obj, colorName + suffix, {
        get: function () {
            // tslint:disable-next-line:no-any
            var style = (_a = {}, _a[cssProperty] = getTheme().palette[colorName], _a);
            return Object(lib["f" /* mergeStyles */])(isHover ? { selectors: { ':hover': style } } : style).toString();
            var _a;
        },
        enumerable: true,
        configurable: true
    });
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/classNames/index.js




// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/version.js
// @uifabric/styling@6.42.0
// Do not modify this file, the file is generated as part of publish. The checked in version is a placeholder only.

Object(set_version_lib["a" /* setVersion */])('@uifabric/styling', '6.42.0');

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/styling/6.42.0/node_modules/@uifabric/styling/lib/index.js






// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Styling.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return AnimationClassNames; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return FontClassNames; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return ColorClassNames; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return AnimationStyles; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return AnimationVariables; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return DefaultPalette; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return DefaultFontStyles; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return registerDefaultFontFaces; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "c", function() { return FontSizes; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "d", function() { return FontWeights; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "h", function() { return IconFontSizes; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return createFontStyles; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "n", function() { return getFocusStyle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "m", function() { return focusClear; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "t", function() { return hiddenContentStyle; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return PulsingBeaconAnimationStyles; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "o", function() { return getGlobalClassNames; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return ThemeSettingName; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "s", function() { return getTheme; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return loadTheme; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return createTheme; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return registerOnThemeChangeCallback; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return removeOnThemeChangeCallback; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return buildClassMap; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "p", function() { return getIcon; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return registerIcons; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return registerIconAlias; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return unregisterIcons; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return setIconOptions; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "q", function() { return getIconClassName; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return /* unused reexport */undefined; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return lib["a" /* Stylesheet */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "l", function() { return lib["b" /* concatStyleSets */]; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return lib["c" /* fontFace */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "u", function() { return lib["d" /* keyframes */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "v", function() { return lib["e" /* mergeStyleSets */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "w", function() { return lib["f" /* mergeStyles */]; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return getThemedContext; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "e", function() { return HighContrastSelector; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "g", function() { return HighContrastSelectorWhite; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "f", function() { return HighContrastSelectorBlack; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return ScreenWidthMinSmall; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "j", function() { return ScreenWidthMinMedium; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return ScreenWidthMinLarge; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return ScreenWidthMinXLarge; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return ScreenWidthMinXXLarge; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return ScreenWidthMinXXXLarge; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return ScreenWidthMaxSmall; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "i", function() { return ScreenWidthMaxMedium; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return ScreenWidthMaxLarge; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return ScreenWidthMaxXLarge; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return ScreenWidthMaxXXLarge; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return ScreenWidthMinUhfMobile; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "r", function() { return getScreenSelector; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "x", function() { return normalize; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return noWrap; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return getFadedOverflowStyle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "k", function() { return ZIndexes; });




/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(45);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/Stylesheet.js

var InjectionMode = {
    /**
     * Avoids style injection, use getRules() to read the styles.
     */
    none: 0,
    /**
     * Inserts rules using the insertRule api.
     */
    insertNode: 1,
    /**
     * Appends rules using appendChild.
     */
    appendChild: 2
};
var STYLESHEET_SETTING = '__stylesheet__';
// tslint:disable-next-line:no-any
var _fileScopedGlobal = {};
var _stylesheet;
/**
 * Represents the state of styles registered in the page. Abstracts
 * the surface for adding styles to the stylesheet, exposes helpers
 * for reading the styles registered in server rendered scenarios.
 *
 * @public
 */
var Stylesheet_Stylesheet = /** @class */ (function () {
    function Stylesheet(config) {
        this._rules = [];
        this._preservedRules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._keyToClassName = {};
        this._onResetCallbacks = [];
        // tslint:disable-next-line:no-any
        this._classNameToArgs = {};
        this._config = tslib_es6["a" /* __assign */]({ injectionMode: InjectionMode.insertNode, defaultPrefix: 'css', namespace: undefined, cspSettings: undefined }, config);
    }
    /**
     * Gets the singleton instance.
     */
    Stylesheet.getInstance = function () {
        // tslint:disable-next-line:no-any
        var global = typeof window !== 'undefined' ? window : _fileScopedGlobal;
        _stylesheet = global[STYLESHEET_SETTING];
        if (!_stylesheet || (_stylesheet._lastStyleElement && _stylesheet._lastStyleElement.ownerDocument !== document)) {
            // tslint:disable-next-line:no-string-literal
            var fabricConfig = (global && global['FabricConfig']) || {};
            _stylesheet = global[STYLESHEET_SETTING] = new Stylesheet(fabricConfig.mergeStyles);
        }
        return _stylesheet;
    };
    /**
     * Configures the stylesheet.
     */
    Stylesheet.prototype.setConfig = function (config) {
        this._config = tslib_es6["a" /* __assign */]({}, this._config, config);
    };
    /**
     * Configures a reset callback.
     *
     * @param callback - A callback which will be called when the Stylesheet is reset.
     */
    Stylesheet.prototype.onReset = function (callback) {
        this._onResetCallbacks.push(callback);
    };
    /**
     * Generates a unique classname.
     *
     * @param displayName - Optional value to use as a prefix.
     */
    Stylesheet.prototype.getClassName = function (displayName) {
        var namespace = this._config.namespace;
        var prefix = displayName || this._config.defaultPrefix;
        return "" + (namespace ? namespace + '-' : '') + prefix + "-" + this._counter++;
    };
    /**
     * Used internally to cache information about a class which was
     * registered with the stylesheet.
     */
    Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
        this._keyToClassName[key] = className;
        this._classNameToArgs[className] = {
            args: args,
            rules: rules
        };
    };
    /**
     * Gets the appropriate classname given a key which was previously
     * registered using cacheClassName.
     */
    Stylesheet.prototype.classNameFromKey = function (key) {
        return this._keyToClassName[key];
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.argsFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.args;
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.insertedRulesFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.rules;
    };
    /**
     * Inserts a css rule into the stylesheet.
     * @param preserve - Preserves the rule beyond a reset boundary.
     */
    Stylesheet.prototype.insertRule = function (rule, preserve) {
        var injectionMode = this._config.injectionMode;
        var element = injectionMode !== InjectionMode.none ? this._getStyleElement() : undefined;
        if (preserve) {
            this._preservedRules.push(rule);
        }
        if (element) {
            switch (this._config.injectionMode) {
                case InjectionMode.insertNode:
                    var sheet = element.sheet;
                    try {
                        sheet.insertRule(rule, sheet.cssRules.length);
                    }
                    catch (e) {
                        // The browser will throw exceptions on unsupported rules (such as a moz prefix in webkit.)
                        // We need to swallow the exceptions for this scenario, otherwise we'd need to filter
                        // which could be slower and bulkier.
                    }
                    break;
                case InjectionMode.appendChild:
                    element.appendChild(document.createTextNode(rule));
                    break;
            }
        }
        else {
            this._rules.push(rule);
        }
        if (this._config.onInsertRule) {
            this._config.onInsertRule(rule);
        }
    };
    /**
     * Gets all rules registered with the stylesheet; only valid when
     * using InsertionMode.none.
     */
    Stylesheet.prototype.getRules = function (includePreservedRules) {
        return (includePreservedRules ? this._preservedRules.join('') : '') + this._rules.join('') + this._rulesToInsert.join('');
    };
    /**
     * Resets the internal state of the stylesheet. Only used in server
     * rendered scenarios where we're using InsertionMode.none.
     */
    Stylesheet.prototype.reset = function () {
        this._rules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._classNameToArgs = {};
        this._keyToClassName = {};
        this._onResetCallbacks.forEach(function (callback) { return callback(); });
    };
    // Forces the regeneration of incoming styles without totally resetting the stylesheet.
    Stylesheet.prototype.resetKeys = function () {
        this._keyToClassName = {};
    };
    Stylesheet.prototype._getStyleElement = function () {
        var _this = this;
        if (!this._styleElement && typeof document !== 'undefined') {
            this._styleElement = this._createStyleElement();
            // Reset the style element on the next frame.
            window.requestAnimationFrame(function () {
                _this._styleElement = undefined;
            });
        }
        return this._styleElement;
    };
    Stylesheet.prototype._createStyleElement = function () {
        var styleElement = document.createElement('style');
        styleElement.setAttribute('data-merge-styles', 'true');
        styleElement.type = 'text/css';
        var cspSettings = this._config.cspSettings;
        if (cspSettings) {
            if (cspSettings.nonce) {
                styleElement.setAttribute('nonce', cspSettings.nonce);
            }
        }
        if (this._lastStyleElement && this._lastStyleElement.nextElementSibling) {
            document.head.insertBefore(styleElement, this._lastStyleElement.nextElementSibling);
        }
        else {
            document.head.appendChild(styleElement);
        }
        this._lastStyleElement = styleElement;
        return styleElement;
    };
    return Stylesheet;
}());


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/transforms/kebabRules.js
function kebabRules(rulePairs, index) {
    rulePairs[index] = rulePairs[index].replace(/([A-Z])/g, '-$1').toLowerCase();
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/getVendorSettings.js
var _vendorSettings;
function getVendorSettings() {
    if (!_vendorSettings) {
        var doc = typeof document !== 'undefined' ? document : undefined;
        var nav = typeof navigator !== 'undefined' ? navigator : undefined;
        var userAgent = nav ? nav.userAgent.toLowerCase() : undefined;
        if (!doc) {
            _vendorSettings = {
                isWebkit: true,
                isMoz: true,
                isOpera: true,
                isMs: true
            };
        }
        else {
            _vendorSettings = {
                isWebkit: !!(doc && 'WebkitAppearance' in doc.documentElement.style),
                isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
                isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
                isMs: !!(nav && (/rv:11.0/i.test(nav.userAgent) || /Edge\/\d./i.test(navigator.userAgent)))
            };
        }
    }
    return _vendorSettings;
}
/**
 * Sets the vendor settings for prefixing and vendor specific operations.
 */
function setVendorSettings(vendorSettings) {
    _vendorSettings = vendorSettings;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/transforms/prefixRules.js

var autoPrefixNames = {
    'user-select': 1
};
function prefixRules(rulePairs, index) {
    var vendorSettings = getVendorSettings();
    var name = rulePairs[index];
    if (autoPrefixNames[name]) {
        var value = rulePairs[index + 1];
        if (autoPrefixNames[name]) {
            if (vendorSettings.isWebkit) {
                rulePairs.push('-webkit-' + name, value);
            }
            if (vendorSettings.isMoz) {
                rulePairs.push('-moz-' + name, value);
            }
            if (vendorSettings.isMs) {
                rulePairs.push('-ms-' + name, value);
            }
            if (vendorSettings.isOpera) {
                rulePairs.push('-o-' + name, value);
            }
        }
    }
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/transforms/provideUnits.js
var NON_PIXEL_NUMBER_PROPS = [
    'column-count',
    'font-weight',
    'flex-basis',
    'flex',
    'flex-grow',
    'flex-shrink',
    'fill-opacity',
    'opacity',
    'order',
    'z-index',
    'zoom'
];
function provideUnits(rulePairs, index) {
    var name = rulePairs[index];
    var value = rulePairs[index + 1];
    if (typeof value === 'number') {
        var unit = NON_PIXEL_NUMBER_PROPS.indexOf(name) === -1 ? 'px' : '';
        rulePairs[index + 1] = "" + value + unit;
    }
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/transforms/rtlifyRules.js

var LEFT = 'left';
var RIGHT = 'right';
var NO_FLIP = '@noflip';
var NAME_REPLACEMENTS = (rtlifyRules__a = {},
    rtlifyRules__a[LEFT] = RIGHT,
    rtlifyRules__a[RIGHT] = LEFT,
    rtlifyRules__a);
var VALUE_REPLACEMENTS = {
    'w-resize': 'e-resize',
    'sw-resize': 'se-resize',
    'nw-resize': 'ne-resize'
};
var _rtl = getRTL();
/**
 * Sets the current RTL value.
 */
function setRTL(isRTL) {
    if (_rtl !== isRTL) {
        Stylesheet_Stylesheet.getInstance().resetKeys();
        _rtl = isRTL;
    }
}
/**
 * Gets the current RTL value.
 */
function getRTL() {
    if (_rtl === undefined) {
        _rtl = typeof document !== 'undefined' && !!document.documentElement && document.documentElement.getAttribute('dir') === 'rtl';
    }
    return _rtl;
}
/**
 * RTLifies the rulePair in the array at the current index. This mutates the array for performance
 * reasons.
 */
function rtlifyRules(rulePairs, index) {
    if (getRTL()) {
        var name_1 = rulePairs[index];
        if (!name_1) {
            return;
        }
        var value = rulePairs[index + 1];
        if (typeof value === 'string' && value.indexOf(NO_FLIP) >= 0) {
            rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
        }
        else if (name_1.indexOf(LEFT) >= 0) {
            rulePairs[index] = name_1.replace(LEFT, RIGHT);
        }
        else if (name_1.indexOf(RIGHT) >= 0) {
            rulePairs[index] = name_1.replace(RIGHT, LEFT);
        }
        else if (String(value).indexOf(LEFT) >= 0) {
            rulePairs[index + 1] = value.replace(LEFT, RIGHT);
        }
        else if (String(value).indexOf(RIGHT) >= 0) {
            rulePairs[index + 1] = value.replace(RIGHT, LEFT);
        }
        else if (NAME_REPLACEMENTS[name_1]) {
            rulePairs[index] = NAME_REPLACEMENTS[name_1];
        }
        else if (VALUE_REPLACEMENTS[value]) {
            rulePairs[index + 1] = VALUE_REPLACEMENTS[value];
        }
        else {
            switch (name_1) {
                case 'margin':
                case 'padding':
                    rulePairs[index + 1] = flipQuad(value);
                    break;
                case 'box-shadow':
                    rulePairs[index + 1] = negateNum(value, 0);
                    break;
            }
        }
    }
}
/**
 * Given a string value in a space delimited format (e.g. "1 2 3 4"), negates a particular value.
 */
function negateNum(value, partIndex) {
    var parts = value.split(' ');
    var numberVal = parseInt(parts[partIndex], 10);
    parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
    return parts.join(' ');
}
/**
 * Given a string quad, flips the left and right values.
 */
function flipQuad(value) {
    if (typeof value === 'string') {
        var parts = value.split(' ');
        if (parts.length === 4) {
            return parts[0] + " " + parts[3] + " " + parts[2] + " " + parts[1];
        }
    }
    return value;
}
var rtlifyRules__a;

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/styleToClassName.js





var DISPLAY_NAME = 'displayName';
function getDisplayName(rules) {
    var rootStyle = rules && rules['&'];
    return rootStyle ? rootStyle.displayName : undefined;
}
var globalSelectorRegExp = /\:global\((.+?)\)/g;
/**
 * Finds comma separated selectors in a :global() e.g. ":global(.class1, .class2, .class3)"
 * and wraps them each in their own global ":global(.class1), :global(.class2), :global(.class3)"
 *
 * @param selectorWithGlobals The selector to process
 * @returns The updated selector
 */
function expandCommaSeparatedGlobals(selectorWithGlobals) {
    // We the selector does not have a :global() we can shortcut
    if (!globalSelectorRegExp.test(selectorWithGlobals)) {
        return selectorWithGlobals;
    }
    var replacementInfo = [];
    var findGlobal = /\:global\((.+?)\)/g;
    var match = null;
    // Create a result list for global selectors so we can replace them.
    while ((match = findGlobal.exec(selectorWithGlobals))) {
        // Only if the found selector is a comma separated list we'll process it.
        if (match[1].indexOf(',') > -1) {
            replacementInfo.push([
                match.index,
                match.index + match[0].length,
                // Wrap each of the found selectors in :global()
                match[1]
                    .split(',')
                    .map(function (v) { return ":global(" + v.trim() + ")"; })
                    .join(', ')
            ]);
        }
    }
    // Replace the found selectors with their wrapped variants in reverse order
    return replacementInfo.reverse().reduce(function (selector, _a) {
        var matchIndex = _a[0], matchEndIndex = _a[1], replacement = _a[2];
        var prefix = selector.slice(0, matchIndex);
        var suffix = selector.slice(matchEndIndex);
        return prefix + replacement + suffix;
    }, selectorWithGlobals);
}
function expandSelector(newSelector, currentSelector) {
    if (newSelector.indexOf(':global(') >= 0) {
        return newSelector.replace(globalSelectorRegExp, '$1');
    }
    else if (newSelector.indexOf(':') === 0) {
        return currentSelector + newSelector;
    }
    else if (newSelector.indexOf('&') < 0) {
        return currentSelector + ' ' + newSelector;
    }
    return newSelector;
}
function extractRules(args, rules, currentSelector) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (currentSelector === void 0) { currentSelector = '&'; }
    var stylesheet = Stylesheet_Stylesheet.getInstance();
    var currentRules = rules[currentSelector];
    if (!currentRules) {
        currentRules = {};
        rules[currentSelector] = currentRules;
        rules.__order.push(currentSelector);
    }
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        // If the arg is a string, we need to look up the class map and merge.
        if (typeof arg === 'string') {
            var expandedRules = stylesheet.argsFromClassName(arg);
            if (expandedRules) {
                extractRules(expandedRules, rules, currentSelector);
            }
            // Else if the arg is an array, we need to recurse in.
        }
        else if (Array.isArray(arg)) {
            extractRules(arg, rules, currentSelector);
        }
        else {
            // tslint:disable-next-line:no-any
            for (var prop in arg) {
                if (prop === 'selectors') {
                    // tslint:disable-next-line:no-any
                    var selectors = arg.selectors;
                    for (var newSelector in selectors) {
                        if (selectors.hasOwnProperty(newSelector)) {
                            var selectorValue = selectors[newSelector];
                            if (newSelector.indexOf('@') === 0) {
                                newSelector = newSelector + '{' + currentSelector;
                                extractRules([selectorValue], rules, newSelector);
                            }
                            else if (newSelector.indexOf(',') > -1) {
                                var commaSeparatedSelectors = expandCommaSeparatedGlobals(newSelector)
                                    .split(/,/g)
                                    .map(function (s) { return s.trim(); });
                                extractRules([selectorValue], rules, commaSeparatedSelectors
                                    .map(function (commaSeparatedSelector) { return expandSelector(commaSeparatedSelector, currentSelector); })
                                    .join(', '));
                            }
                            else {
                                extractRules([selectorValue], rules, expandSelector(newSelector, currentSelector));
                            }
                        }
                    }
                }
                else {
                    if (arg[prop] !== undefined) {
                        // Else, add the rule to the currentSelector.
                        if (prop === 'margin' || prop === 'padding') {
                            // tslint:disable-next-line:no-any
                            expandQuads(currentRules, prop, arg[prop]);
                        }
                        else {
                            // tslint:disable-next-line:no-any
                            currentRules[prop] = arg[prop];
                        }
                    }
                }
            }
        }
    }
    return rules;
}
function expandQuads(currentRules, name, value) {
    var parts = typeof value === 'string' ? value.split(' ') : [value];
    currentRules[name + 'Top'] = parts[0];
    currentRules[name + 'Right'] = parts[1] || parts[0];
    currentRules[name + 'Bottom'] = parts[2] || parts[0];
    currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}
function getKeyForRules(rules) {
    var serialized = [];
    var hasProps = false;
    for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
        var selector = _a[_i];
        serialized.push(selector);
        var rulesForSelector = rules[selector];
        for (var propName in rulesForSelector) {
            if (rulesForSelector.hasOwnProperty(propName) && rulesForSelector[propName] !== undefined) {
                hasProps = true;
                serialized.push(propName, rulesForSelector[propName]);
            }
        }
    }
    return hasProps ? serialized.join('') : undefined;
}
function serializeRuleEntries(ruleEntries) {
    if (!ruleEntries) {
        return '';
    }
    var allEntries = [];
    for (var entry in ruleEntries) {
        if (ruleEntries.hasOwnProperty(entry) && entry !== DISPLAY_NAME && ruleEntries[entry] !== undefined) {
            allEntries.push(entry, ruleEntries[entry]);
        }
    }
    // Apply transforms.
    for (var i = 0; i < allEntries.length; i += 2) {
        kebabRules(allEntries, i);
        provideUnits(allEntries, i);
        rtlifyRules(allEntries, i);
        prefixRules(allEntries, i);
    }
    // Apply punctuation.
    for (var i = 1; i < allEntries.length; i += 4) {
        allEntries.splice(i, 1, ':', allEntries[i], ';');
    }
    return allEntries.join('');
}
function styleToRegistration() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var rules = extractRules(args);
    var key = getKeyForRules(rules);
    if (key) {
        var stylesheet = Stylesheet_Stylesheet.getInstance();
        var registration = {
            className: stylesheet.classNameFromKey(key),
            key: key,
            args: args
        };
        if (!registration.className) {
            registration.className = stylesheet.getClassName(getDisplayName(rules));
            var rulesToInsert = [];
            for (var _a = 0, _b = rules.__order; _a < _b.length; _a++) {
                var selector = _b[_a];
                rulesToInsert.push(selector, serializeRuleEntries(rules[selector]));
            }
            registration.rulesToInsert = rulesToInsert;
        }
        return registration;
    }
}
function applyRegistration(registration, classMap) {
    var stylesheet = Stylesheet_Stylesheet.getInstance();
    var className = registration.className, key = registration.key, args = registration.args, rulesToInsert = registration.rulesToInsert;
    if (rulesToInsert) {
        // rulesToInsert is an ordered array of selector/rule pairs.
        for (var i = 0; i < rulesToInsert.length; i += 2) {
            var rules = rulesToInsert[i + 1];
            if (rules) {
                var selector = rulesToInsert[i];
                // Fix selector using map.
                selector = selector.replace(/(&)|\$([\w-]+)\b/g, function (match, amp, cn) {
                    if (amp) {
                        return '.' + registration.className;
                    }
                    else if (cn) {
                        return '.' + ((classMap && classMap[cn]) || cn);
                    }
                    return '';
                });
                // Insert. Note if a media query, we must close the query with a final bracket.
                var processedRule = selector + "{" + rules + "}" + (selector.indexOf('@') === 0 ? '}' : '');
                stylesheet.insertRule(processedRule);
            }
        }
        stylesheet.cacheClassName(className, key, args, rulesToInsert);
    }
}
function styleToClassName() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var registration = styleToRegistration.apply(void 0, args);
    if (registration) {
        applyRegistration(registration);
        return registration.className;
    }
    return '';
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/extractStyleParts.js

/**
 * Separates the classes and style objects. Any classes that are pre-registered
 * args are auto expanded into objects.
 */
function extractStyleParts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    var objects = [];
    var stylesheet = Stylesheet_Stylesheet.getInstance();
    function _processArgs(argsList) {
        for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
            var arg = argsList_1[_i];
            if (arg) {
                if (typeof arg === 'string') {
                    if (arg.indexOf(' ') >= 0) {
                        _processArgs(arg.split(' '));
                    }
                    else {
                        var translatedArgs = stylesheet.argsFromClassName(arg);
                        if (translatedArgs) {
                            _processArgs(translatedArgs);
                        }
                        else {
                            // Avoid adding the same class twice.
                            if (classes.indexOf(arg) === -1) {
                                classes.push(arg);
                            }
                        }
                    }
                }
                else if (Array.isArray(arg)) {
                    _processArgs(arg);
                }
                else if (typeof arg === 'object') {
                    objects.push(arg);
                }
            }
        }
    }
    _processArgs(args);
    return {
        classes: classes,
        objects: objects
    };
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/mergeStyles.js


/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function mergeStyles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = extractStyleParts(args), classes = _a.classes, objects = _a.objects;
    if (objects.length) {
        classes.push(styleToClassName(objects));
    }
    return classes.join(' ');
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/concatStyleSets.js
/**
 * Combine a set of styles together (but does not register css classes).
 * @param styleSets - One or more stylesets to be merged (each param can also be falsy).
 */
function concatStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    var mergedSet = {};
    // We process sub component styles in two phases. First we collect them, then we combine them into 1 style function.
    var workingSubcomponentStyles = {};
    for (var _a = 0, styleSets_1 = styleSets; _a < styleSets_1.length; _a++) {
        var currentSet = styleSets_1[_a];
        if (currentSet) {
            for (var prop in currentSet) {
                if (currentSet.hasOwnProperty(prop)) {
                    if (prop === 'subComponentStyles' && currentSet.subComponentStyles !== undefined) {
                        // subcomponent styles - style functions or objects
                        var currentComponentStyles = currentSet.subComponentStyles;
                        for (var subCompProp in currentComponentStyles) {
                            if (currentComponentStyles.hasOwnProperty(subCompProp)) {
                                if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                                    workingSubcomponentStyles[subCompProp].push(currentComponentStyles[subCompProp]);
                                }
                                else {
                                    workingSubcomponentStyles[subCompProp] = [currentComponentStyles[subCompProp]];
                                }
                            }
                        }
                        continue;
                    }
                    // the as any casts below is a workaround for ts 2.8.
                    // todo: remove cast to any in ts 2.9.
                    var mergedValue = mergedSet[prop];
                    var currentValue = currentSet[prop];
                    if (mergedValue === undefined) {
                        mergedSet[prop] = currentValue;
                    }
                    else {
                        mergedSet[prop] = (Array.isArray(mergedValue) ? mergedValue : [mergedValue]).concat((Array.isArray(currentValue) ? currentValue : [currentValue]));
                    }
                }
            }
        }
    }
    if (Object.keys(workingSubcomponentStyles).length > 0) {
        mergedSet.subComponentStyles = {};
        var mergedSubStyles = mergedSet.subComponentStyles;
        var _loop_1 = function (subCompProp) {
            if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                var workingSet_1 = workingSubcomponentStyles[subCompProp];
                mergedSubStyles[subCompProp] = function (styleProps) {
                    return concatStyleSets.apply(void 0, workingSet_1.map(function (styleFunctionOrObject) {
                        return typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject;
                    }));
                };
            }
        };
        // now we process the subcomponent styles if there are any
        for (var subCompProp in workingSubcomponentStyles) {
            _loop_1(subCompProp);
        }
    }
    return mergedSet;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/mergeStyleSets.js



/**
 * Takes in one or more style set objects, each consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeStyles` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 */
function mergeStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    // tslint:disable-next-line:no-any
    var classNameSet = { subComponentStyles: {} };
    var classMap = {};
    var styleSet = styleSets[0];
    if (!styleSet && styleSets.length <= 1) {
        return { subComponentStyles: {} };
    }
    var concatenatedStyleSet = 
    // we have guarded against falsey values just above.
    styleSet;
    concatenatedStyleSet = concatStyleSets.apply(void 0, styleSets);
    var registrations = [];
    for (var styleSetArea in concatenatedStyleSet) {
        if (concatenatedStyleSet.hasOwnProperty(styleSetArea)) {
            if (styleSetArea === 'subComponentStyles') {
                classNameSet.subComponentStyles = concatenatedStyleSet.subComponentStyles || {};
                continue;
            }
            var styles = concatenatedStyleSet[styleSetArea];
            var _a = extractStyleParts(styles), classes = _a.classes, objects = _a.objects;
            var registration = styleToRegistration({ displayName: styleSetArea }, objects);
            registrations.push(registration);
            if (registration) {
                classMap[styleSetArea] = registration.className;
                // as any cast not needed in ts >=2.9
                classNameSet[styleSetArea] = classes.concat([registration.className]).join(' ');
            }
        }
    }
    for (var _b = 0, registrations_1 = registrations; _b < registrations_1.length; _b++) {
        var registration = registrations_1[_b];
        if (registration) {
            applyRegistration(registration, classMap);
        }
    }
    return classNameSet;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/fontFace.js


/**
 * Registers a font face.
 * @public
 */
function fontFace(font) {
    Stylesheet_Stylesheet.getInstance().insertRule("@font-face{" + serializeRuleEntries(font) + "}", true);
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/keyframes.js


/**
 * Registers keyframe definitions.
 *
 * @public
 */
function keyframes(timeline) {
    var stylesheet = Stylesheet_Stylesheet.getInstance();
    var name = stylesheet.getClassName();
    var rulesArray = [];
    for (var prop in timeline) {
        if (timeline.hasOwnProperty(prop)) {
            rulesArray.push(prop, '{', serializeRuleEntries(timeline[prop]), '}');
        }
    }
    var rules = rulesArray.join('');
    stylesheet.insertRule("@keyframes " + name + "{" + rules + "}", true);
    stylesheet.cacheClassName(name, rules, [], ['keyframes', rules]);
    return name;
}

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/set-version/1.1.3/node_modules/@uifabric/set-version/lib/index.js + 1 modules
var lib = __webpack_require__(50);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/version.js
// @uifabric/merge-styles@6.17.1
// Do not modify this file, the file is generated as part of publish. The checked in version is a placeholder only.

Object(lib["a" /* setVersion */])('@uifabric/merge-styles', '6.17.1');

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/merge-styles/6.17.1/node_modules/@uifabric/merge-styles/lib/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "f", function() { return mergeStyles; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "e", function() { return mergeStyleSets; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return concatStyleSets; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "c", function() { return fontFace; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "d", function() { return keyframes; });
/* unused concated harmony import InjectionMode */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return InjectionMode; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return Stylesheet_Stylesheet; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "g", function() { return setRTL; });










/***/ }),
/* 48 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionalHint; });
var DirectionalHint = {
    /**
     * Appear above the target element, with the left edges of the callout and target aligning.
     */
    topLeftEdge: 0,
    /**
     * Appear above the target element, with the centers of the callout and target aligning.
     */
    topCenter: 1,
    /**
     * Appear above the target element, with the right edges of the callout and target aligning.
     */
    topRightEdge: 2,
    /**
     * Appear above the target element, aligning with the target element such that the callout tends toward the center of the screen.
     */
    topAutoEdge: 3,
    /**
     * Appear below the target element, with the left edges of the callout and target aligning.
     */
    bottomLeftEdge: 4,
    /**
     * Appear below the target element, with the centers of the callout and target aligning.
     */
    bottomCenter: 5,
    /**
     * Appear below the target element, with the right edges of the callout and target aligning.
     */
    bottomRightEdge: 6,
    /**
     * Appear below the target element, aligning with the target element such that the callout tends toward the center of the screen.
     */
    bottomAutoEdge: 7,
    /**
     * Appear to the left of the target element, with the top edges of the callout and target aligning.
     */
    leftTopEdge: 8,
    /**
     * Appear to the left of the target element, with the centers of the callout and target aligning.
     */
    leftCenter: 9,
    /**
     * Appear to the left of the target element, with the bottom edges of the callout and target aligning.
     */
    leftBottomEdge: 10,
    /**
     * Appear to the right of the target element, with the top edges of the callout and target aligning.
     */
    rightTopEdge: 11,
    /**
     * Appear to the right of the target element, with the centers of the callout and target aligning.
     */
    rightCenter: 12,
    /**
     * Appear to the right of the target element, with the bottom edges of the callout and target aligning.
     */
    rightBottomEdge: 13
};


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/set-version/1.1.3/node_modules/@uifabric/set-version/lib/setVersion.js
// A packages cache that makes sure that we don't inject the same packageName twice in the same bundle -
// this cache is local to the module closure inside this bundle
var packagesCache = {};
function setVersion(packageName, packageVersion) {
    if (typeof window !== 'undefined') {
        // tslint:disable-next-line:no-any
        var packages = (window.__packages__ = window.__packages__ || {});
        // We allow either the global packages or local packages caches to invalidate so testing can just clear the global to set this state
        if (!packages[packageName] || !packagesCache[packageName]) {
            packagesCache[packageName] = packageVersion;
            var versions = (packages[packageName] = packages[packageName] || []);
            versions.push(packageVersion);
        }
    }
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/set-version/1.1.3/node_modules/@uifabric/set-version/lib/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return setVersion; });


setVersion('@uifabric/set-version', '6.0.0');


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Utilities.js + 45 modules
var Utilities = __webpack_require__(44);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(45);

// EXTERNAL MODULE: ./lib/DeveloperTools/FBWrappers/FakeReact.js
var FakeReact = __webpack_require__(13);
var FakeReact_default = /*#__PURE__*/__webpack_require__.n(FakeReact);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Icon/Icon.types.js
// Please keep alphabetized
var IconType;
(function (IconType) {
    /**
     * Render using the fabric icon font.
     */
    IconType[IconType["default"] = 0] = "default";
    /**
     * Render using an image, where imageProps would be used.
     */
    IconType[IconType["image"] = 1] = "image";
    /**
     * Deprecated, use `default`.
     * @deprecated Use `default`.
     */
    IconType[IconType["Default"] = 100000] = "Default";
    /**
     * Deprecated, use `image`.
     * @deprecated Use `image`.
     */
    IconType[IconType["Image"] = 100001] = "Image";
})(IconType || (IconType = {}));

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Image/Image.types.js
/**
 * The possible methods that can be used to fit the image.
 */
var ImageFit;
(function (ImageFit) {
    /**
     * The image is not scaled. The image is centered and cropped within the content box.
     */
    ImageFit[ImageFit["center"] = 0] = "center";
    /**
     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["contain"] = 1] = "contain";
    /**
     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
     * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["cover"] = 2] = "cover";
    /**
     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
     * frame will have empty space.
     */
    ImageFit[ImageFit["none"] = 3] = "none";
    /**
     * The image will be centered horizontally and vertically within the frame and maintains its aspect ratio. It will
     * behave as ImageFit.center if the image's natural height or width is less than the Image frame's height or width,
     * but if both natural height and width are larger than the frame it will behave as ImageFit.cover.
     */
    ImageFit[ImageFit["centerCover"] = 4] = "centerCover";
})(ImageFit || (ImageFit = {}));
/**
 * The cover style to be used on the image
 */
var ImageCoverStyle;
(function (ImageCoverStyle) {
    /**
     * The image will be shown at 100% height of container and the width will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["landscape"] = 0] = "landscape";
    /**
     * The image will be shown at 100% width of container and the height will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["portrait"] = 1] = "portrait";
})(ImageCoverStyle || (ImageCoverStyle = {}));
var ImageLoadState;
(function (ImageLoadState) {
    /**
     * The image has not yet been loaded, and there is no error yet.
     */
    ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
    /**
     * The image has been loaded successfully.
     */
    ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
    /**
     * An error has been encountered while loading the image.
     */
    ImageLoadState[ImageLoadState["error"] = 2] = "error";
    /**
     * Deprecated at v1.3.6, to replace the src in case of errors, use `onLoadingStateChange` instead
     * and rerender the Image with a difference src.
     * @deprecated Use `onLoadingStateChange` instead
     * and rerender the Image with a difference src.
     */
    ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
})(ImageLoadState || (ImageLoadState = {}));

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Image/Image.base.js




var getClassNames = Object(Utilities["m" /* classNamesFunction */])();
var KEY_PREFIX = 'fabricImage';
var Image_base_ImageBase = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](ImageBase, _super);
    function ImageBase(props) {
        var _this = _super.call(this, props) || this;
        // Make an initial assumption about the image layout until we can
        // check the rendered element. The value here only takes effect when
        // shouldStartVisible is true.
        _this._coverStyle = ImageCoverStyle.portrait;
        _this._imageElement = FakeReact["createRef"]();
        _this._frameElement = FakeReact["createRef"]();
        _this._onImageLoaded = function (ev) {
            var _a = _this.props, src = _a.src, onLoad = _a.onLoad;
            if (onLoad) {
                onLoad(ev);
            }
            _this._computeCoverStyle(_this.props);
            if (src) {
                _this.setState({
                    loadState: ImageLoadState.loaded
                });
            }
        };
        _this._onImageError = function (ev) {
            if (_this.props.onError) {
                _this.props.onError(ev);
            }
            _this.setState({
                loadState: ImageLoadState.error
            });
        };
        _this.state = {
            loadState: ImageLoadState.notLoaded
        };
        return _this;
    }
    ImageBase.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({
                loadState: ImageLoadState.notLoaded
            });
        }
        else if (this.state.loadState === ImageLoadState.loaded) {
            this._computeCoverStyle(nextProps);
        }
    };
    ImageBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._checkImageLoaded();
        if (this.props.onLoadingStateChange && prevState.loadState !== this.state.loadState) {
            this.props.onLoadingStateChange(this.state.loadState);
        }
    };
    ImageBase.prototype.render = function () {
        var imageProps = Object(Utilities["I" /* getNativeProps */])(this.props, Utilities["U" /* imageProperties */], ['width', 'height']);
        var _a = this.props, src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, shouldFadeIn = _a.shouldFadeIn, shouldStartVisible = _a.shouldStartVisible, className = _a.className, imageFit = _a.imageFit, role = _a.role, maximizeFrame = _a.maximizeFrame, styles = _a.styles, theme = _a.theme;
        var loadState = this.state.loadState;
        var coverStyle = this.props.coverStyle !== undefined ? this.props.coverStyle : this._coverStyle;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            width: width,
            height: height,
            maximizeFrame: maximizeFrame,
            shouldFadeIn: shouldFadeIn,
            shouldStartVisible: shouldStartVisible,
            isLoaded: loadState === ImageLoadState.loaded || (loadState === ImageLoadState.notLoaded && this.props.shouldStartVisible),
            isLandscape: coverStyle === ImageCoverStyle.landscape,
            isCenter: imageFit === ImageFit.center,
            isCenterCover: imageFit === ImageFit.centerCover,
            isContain: imageFit === ImageFit.contain,
            isCover: imageFit === ImageFit.cover,
            isNone: imageFit === ImageFit.none,
            isError: loadState === ImageLoadState.error,
            isNotImageFit: imageFit === undefined
        });
        // If image dimensions aren't specified, the natural size of the image is used.
        return (FakeReact["createElement"]("div", { className: classNames.root, style: { width: width, height: height }, ref: this._frameElement },
            FakeReact["createElement"]("img", tslib_es6["a" /* __assign */]({}, imageProps, { onLoad: this._onImageLoaded, onError: this._onImageError, key: KEY_PREFIX + this.props.src || '', className: classNames.image, ref: this._imageElement, src: src, alt: alt, role: role }))));
    };
    ImageBase.prototype._checkImageLoaded = function () {
        var src = this.props.src;
        var loadState = this.state.loadState;
        if (loadState === ImageLoadState.notLoaded) {
            // testing if naturalWidth and naturalHeight are greater than zero is better than checking
            // .complete, because .complete will also be set to true if the image breaks. However,
            // for some browsers, SVG images do not have a naturalWidth or naturalHeight, so fall back
            // to checking .complete for these images.
            var isLoaded = this._imageElement.current
                ? (src && (this._imageElement.current.naturalWidth > 0 && this._imageElement.current.naturalHeight > 0)) ||
                    (this._imageElement.current.complete && ImageBase._svgRegex.test(src))
                : false;
            if (isLoaded) {
                this._computeCoverStyle(this.props);
                this.setState({
                    loadState: ImageLoadState.loaded
                });
            }
        }
    };
    ImageBase.prototype._computeCoverStyle = function (props) {
        var imageFit = props.imageFit, width = props.width, height = props.height;
        // Do not compute cover style if it was already specified in props
        if ((imageFit === ImageFit.cover || imageFit === ImageFit.contain || imageFit === ImageFit.centerCover) &&
            this.props.coverStyle === undefined &&
            this._imageElement.current &&
            this._frameElement.current) {
            // Determine the desired ratio using the width and height props.
            // If those props aren't available, measure measure the frame.
            var desiredRatio = void 0;
            if (!!width && !!height && imageFit !== ImageFit.centerCover) {
                desiredRatio = width / height;
            }
            else {
                desiredRatio = this._frameElement.current.clientWidth / this._frameElement.current.clientHeight;
            }
            // Examine the source image to determine its original ratio.
            var naturalRatio = this._imageElement.current.naturalWidth / this._imageElement.current.naturalHeight;
            // Should we crop from the top or the sides?
            if (naturalRatio > desiredRatio) {
                this._coverStyle = ImageCoverStyle.landscape;
            }
            else {
                this._coverStyle = ImageCoverStyle.portrait;
            }
        }
    };
    ImageBase.defaultProps = {
        shouldFadeIn: true
    };
    ImageBase._svgRegex = /\.svg$/i;
    return ImageBase;
}(Utilities["a" /* BaseComponent */]));


// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Styling.js + 74 modules
var Styling = __webpack_require__(46);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Image/Image.styles.js


var GlobalClassNames = {
    root: 'ms-Image',
    rootMaximizeFrame: 'ms-Image--maximizeFrame',
    image: 'ms-Image-image',
    imageCenter: 'ms-Image-image--center',
    imageContain: 'ms-Image-image--contain',
    imageCover: 'ms-Image-image--cover',
    imageCenterCover: 'ms-Image-image--centerCover',
    imageNone: 'ms-Image-image--none',
    imageLandscape: 'ms-Image-image--landscape',
    imagePortrait: 'ms-Image-image--portrait'
};
var getStyles = function (props) {
    var className = props.className, width = props.width, height = props.height, maximizeFrame = props.maximizeFrame, isLoaded = props.isLoaded, shouldFadeIn = props.shouldFadeIn, shouldStartVisible = props.shouldStartVisible, isLandscape = props.isLandscape, isCenter = props.isCenter, isContain = props.isContain, isCover = props.isCover, isCenterCover = props.isCenterCover, isNone = props.isNone, isError = props.isError, isNotImageFit = props.isNotImageFit, theme = props.theme;
    var classNames = Object(Styling["o" /* getGlobalClassNames */])(GlobalClassNames, theme);
    var ImageFitStyles = {
        position: 'absolute',
        left: '50% /* @noflip */',
        top: '50%',
        transform: 'translate(-50%,-50%)' // @todo test RTL renders transform: translate(50%,-50%);
    };
    // Cut the mustard using msMaxTouchPoints to detect IE11 which does not support CSS object-fit
    var window = Object(Utilities["Q" /* getWindow */])();
    var supportsObjectFit = window !== undefined && window.navigator.msMaxTouchPoints === undefined;
    var fallbackObjectFitStyles = (isContain && isLandscape) || (isCover && !isLandscape) ? { width: '100%', height: 'auto' } : { width: 'auto', height: '100%' };
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                overflow: 'hidden'
            },
            maximizeFrame && [
                classNames.rootMaximizeFrame,
                {
                    height: '100%',
                    width: '100%'
                }
            ],
            (isCenter || isContain || isCover || isCenterCover) && {
                position: 'relative'
            },
            className
        ],
        image: [
            classNames.image,
            {
                display: 'block',
                opacity: 0
            },
            isLoaded && [
                'is-loaded',
                {
                    opacity: 1
                }
            ],
            isCenter && [classNames.imageCenter, ImageFitStyles],
            isContain && [
                classNames.imageContain,
                supportsObjectFit && {
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                },
                !supportsObjectFit && fallbackObjectFitStyles,
                ImageFitStyles
            ],
            isCover && [
                classNames.imageCover,
                supportsObjectFit && {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                },
                !supportsObjectFit && fallbackObjectFitStyles,
                ImageFitStyles
            ],
            isCenterCover && [
                classNames.imageCenterCover,
                isLandscape && {
                    maxHeight: '100%'
                },
                !isLandscape && {
                    maxWidth: '100%'
                },
                ImageFitStyles
            ],
            isNone && [
                classNames.imageNone,
                {
                    width: 'auto',
                    height: 'auto'
                }
            ],
            isNotImageFit && [
                !!width &&
                    !height && {
                    height: 'auto',
                    width: '100%'
                },
                !width &&
                    !!height && {
                    height: '100%',
                    width: 'auto'
                },
                !!width &&
                    !!height && {
                    height: '100%',
                    width: '100%'
                }
            ],
            isLoaded && shouldFadeIn && !shouldStartVisible && Styling["a" /* AnimationClassNames */].fadeIn400,
            isLandscape && classNames.imageLandscape,
            !isLandscape && classNames.imagePortrait,
            !isLoaded && 'is-notLoaded',
            shouldFadeIn && 'is-fadeIn',
            isError && 'is-error'
        ]
    };
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Image/Image.js



var Image = Object(Utilities["_10" /* styled */])(Image_base_ImageBase, getStyles, undefined, {
    scope: 'Image'
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Icon/Icon.base.js

/* tslint:disable */

/* tslint:enable */





var Icon_base_getClassNames = Object(Utilities["m" /* classNamesFunction */])();
var Icon_base_IconBase = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](IconBase, _super);
    function IconBase(props) {
        var _this = _super.call(this, props) || this;
        _this.onImageLoadingStateChange = function (state) {
            if (_this.props.imageProps && _this.props.imageProps.onLoadingStateChange) {
                _this.props.imageProps.onLoadingStateChange(state);
            }
            if (state === ImageLoadState.error) {
                _this.setState({ imageLoadError: true });
            }
        };
        _this.state = {
            imageLoadError: false
        };
        return _this;
    }
    IconBase.prototype.render = function () {
        var _a = this.props, ariaLabel = _a.ariaLabel, className = _a.className, styles = _a.styles, iconName = _a.iconName, imageErrorAs = _a.imageErrorAs, theme = _a.theme;
        var isPlaceholder = typeof iconName === 'string' && iconName.length === 0;
        var isImage = this.props.iconType === IconType.image || this.props.iconType === IconType.Image;
        var _b = this._getIconContent(iconName), iconClassName = _b.iconClassName, children = _b.children;
        var classNames = Icon_base_getClassNames(styles, {
            theme: theme,
            className: className,
            iconClassName: iconClassName,
            isImage: isImage,
            isPlaceholder: isPlaceholder
        });
        var containerProps = ariaLabel
            ? {
                'aria-label': ariaLabel
            }
            : {
                role: 'presentation'
            };
        var RootType = isImage ? 'div' : 'i';
        var nativeProps = Object(Utilities["I" /* getNativeProps */])(this.props, Utilities["T" /* htmlElementProperties */]);
        var imageLoadError = this.state.imageLoadError;
        var imageProps = tslib_es6["a" /* __assign */]({}, this.props.imageProps, { onLoadingStateChange: this.onImageLoadingStateChange });
        var ImageType = (imageLoadError && imageErrorAs) || Image;
        return (FakeReact["createElement"](RootType, tslib_es6["a" /* __assign */]({ "data-icon-name": iconName }, nativeProps, containerProps, { className: classNames.root }), isImage ? FakeReact["createElement"](ImageType, tslib_es6["a" /* __assign */]({}, imageProps)) : children));
    };
    IconBase.prototype._getIconContent = function (name) {
        var iconDefinition = Object(Styling["p" /* getIcon */])(name) || {
            subset: {
                className: undefined
            },
            code: undefined
        };
        return {
            children: iconDefinition.code,
            iconClassName: iconDefinition.subset.className
        };
    };
    return IconBase;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Icon/Icon.styles.js
var Icon_styles_getStyles = function (props) {
    var className = props.className, iconClassName = props.iconClassName, isPlaceholder = props.isPlaceholder, isImage = props.isImage, styles = props.styles;
    return {
        root: [
            isImage && 'ms-Icon-imageContainer',
            isPlaceholder && 'ms-Icon-placeHolder',
            {
                display: 'inline-block'
            },
            isPlaceholder && {
                width: '1em'
            },
            isImage && {
                overflow: 'hidden'
            },
            iconClassName,
            className,
            styles && styles.root,
            styles && styles.imageContainer
        ]
    };
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Icon/Icon.js



/**
 * Icons are used for rendering an individual's avatar, presence and details.
 * They are used within the PeoplePicker components.
 */
var Icon = Object(Utilities["_10" /* styled */])(Icon_base_IconBase, Icon_styles_getStyles, undefined, { scope: 'Icon' });

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Icon/index.js




// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Icon.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return Icon; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return Icon_base_IconBase; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return IconType; });



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(45);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Utilities.js + 45 modules
var Utilities = __webpack_require__(44);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipConstants.js
var KTP_PREFIX = 'ktp';
var KTP_SEPARATOR = '-';
var KTP_FULL_PREFIX = KTP_PREFIX + KTP_SEPARATOR;
var DATAKTP_TARGET = 'data-ktp-target';
var DATAKTP_EXECUTE_TARGET = 'data-ktp-execute-target';
var KTP_LAYER_ID = 'ktp-layer-id';
var KTP_ARIA_SEPARATOR = ', ';
// Events
var KeytipEvents;
(function (KeytipEvents) {
    KeytipEvents.KEYTIP_ADDED = 'keytipAdded';
    KeytipEvents.KEYTIP_REMOVED = 'keytipRemoved';
    KeytipEvents.KEYTIP_UPDATED = 'keytipUpdated';
    KeytipEvents.PERSISTED_KEYTIP_ADDED = 'persistedKeytipAdded';
    KeytipEvents.PERSISTED_KEYTIP_REMOVED = 'persistedKeytipRemoved';
    KeytipEvents.PERSISTED_KEYTIP_EXECUTE = 'persistedKeytipExecute';
    KeytipEvents.ENTER_KEYTIP_MODE = 'enterKeytipMode';
    KeytipEvents.EXIT_KEYTIP_MODE = 'exitKeytipMode';
})(KeytipEvents || (KeytipEvents = {}));

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipManager.js



/**
 * This class is responsible for handling registering, updating, and unregistering of keytips
 */
var KeytipManager_KeytipManager = /** @class */ (function () {
    function KeytipManager() {
        this.keytips = [];
        this.persistedKeytips = [];
        // This is (and should be) updated and kept in sync
        // with the inKeytipMode in KeytipLayer.
        this.inKeytipMode = false;
        // Boolean that gets checked before entering keytip mode by the KeytipLayer
        // Used for an override in special cases (e.g. Disable entering keytip mode when a modal is shown)
        this.shouldEnterKeytipMode = true;
    }
    /**
     * Static function to get singleton KeytipManager instance
     *
     * @returns {KeytipManager} Singleton KeytipManager instance
     */
    KeytipManager.getInstance = function () {
        return this._instance;
    };
    /**
     * Registers a keytip
     *
     * @param keytipProps - Keytip to register
     * @param persisted - T/F if this keytip should be persisted, default is false
     * @returns {string} Unique ID for this keytip
     */
    KeytipManager.prototype.register = function (keytipProps, persisted) {
        if (persisted === void 0) { persisted = false; }
        var props = keytipProps;
        if (!persisted) {
            // Add the overflowSetSequence if necessary
            props = this.addParentOverflow(keytipProps);
        }
        // Create a unique keytip
        var uniqueKeytip = this._getUniqueKtp(props);
        // Add to array
        persisted ? this.persistedKeytips.push(uniqueKeytip) : this.keytips.push(uniqueKeytip);
        var event = persisted ? KeytipEvents.PERSISTED_KEYTIP_ADDED : KeytipEvents.KEYTIP_ADDED;
        Utilities["c" /* EventGroup */].raise(this, event, {
            keytip: props,
            uniqueID: uniqueKeytip.uniqueID
        });
        return uniqueKeytip.uniqueID;
    };
    /**
     * Update a keytip
     *
     * @param keytipProps - Keytip to update
     * @param uniqueID - Unique ID of this keytip
     */
    KeytipManager.prototype.update = function (keytipProps, uniqueID) {
        var newKeytipProps = this.addParentOverflow(keytipProps);
        var uniqueKeytip = this._getUniqueKtp(newKeytipProps, uniqueID);
        var keytipIndex = Object(Utilities["w" /* findIndex */])(this.keytips, function (ktp) {
            return ktp.uniqueID === uniqueID;
        });
        if (keytipIndex >= 0) {
            // Update everything except 'visible'
            uniqueKeytip.keytip.visible = this.keytips[keytipIndex].keytip.visible;
            // Update keytip in this.keytips
            this.keytips = Object(Utilities["_5" /* replaceElement */])(this.keytips, uniqueKeytip, keytipIndex);
            // Raise event
            Utilities["c" /* EventGroup */].raise(this, KeytipEvents.KEYTIP_UPDATED, {
                keytip: uniqueKeytip.keytip,
                uniqueID: uniqueKeytip.uniqueID
            });
        }
    };
    /**
     * Unregisters a keytip
     *
     * @param keytipToRemove - IKeytipProps of the keytip to remove
     * @param uniqueID - Unique ID of this keytip
     * @param persisted - T/F if this keytip should be persisted, default is false
     */
    KeytipManager.prototype.unregister = function (keytipToRemove, uniqueID, persisted) {
        if (persisted === void 0) { persisted = false; }
        if (persisted) {
            // Remove keytip from this.persistedKeytips
            this.persistedKeytips = this.persistedKeytips.filter(function (uniqueKtp) {
                return uniqueKtp.uniqueID !== uniqueID;
            });
        }
        else {
            // Remove keytip from this.keytips
            this.keytips = this.keytips.filter(function (uniqueKtp) {
                return uniqueKtp.uniqueID !== uniqueID;
            });
        }
        var event = persisted ? KeytipEvents.PERSISTED_KEYTIP_REMOVED : KeytipEvents.KEYTIP_REMOVED;
        Utilities["c" /* EventGroup */].raise(this, event, {
            keytip: keytipToRemove,
            uniqueID: uniqueID
        });
    };
    /**
     * Manual call to enter keytip mode
     */
    KeytipManager.prototype.enterKeytipMode = function () {
        Utilities["c" /* EventGroup */].raise(this, KeytipEvents.ENTER_KEYTIP_MODE);
    };
    /**
     * Manual call to exit keytip mode
     */
    KeytipManager.prototype.exitKeytipMode = function () {
        Utilities["c" /* EventGroup */].raise(this, KeytipEvents.EXIT_KEYTIP_MODE);
    };
    /**
     * Gets all IKeytipProps from this.keytips
     *
     * @returns {IKeytipProps[]} All keytips stored in the manager
     */
    KeytipManager.prototype.getKeytips = function () {
        return this.keytips.map(function (uniqueKeytip) {
            return uniqueKeytip.keytip;
        });
    };
    /**
     * Adds the overflowSetSequence to the keytipProps if its parent keytip also has it
     *
     * @param keytipProps - Keytip props to add overflowSetSequence to if necessary
     * @returns {IKeytipProps} - Modified keytip props, if needed to be modified
     */
    KeytipManager.prototype.addParentOverflow = function (keytipProps) {
        var fullSequence = keytipProps.keySequences.slice();
        fullSequence.pop();
        if (fullSequence.length !== 0) {
            var parentKeytip = Object(Utilities["v" /* find */])(this.getKeytips(), function (keytip) {
                return Object(Utilities["j" /* arraysEqual */])(fullSequence, keytip.keySequences);
            });
            if (parentKeytip && parentKeytip.overflowSetSequence) {
                return tslib_es6["a" /* __assign */]({}, keytipProps, { overflowSetSequence: parentKeytip.overflowSetSequence });
            }
        }
        return keytipProps;
    };
    /**
     * Public function to bind for overflow items that have a submenu
     *
     * @param overflowButtonSequences
     * @param keytipSequences
     */
    KeytipManager.prototype.menuExecute = function (overflowButtonSequences, keytipSequences) {
        Utilities["c" /* EventGroup */].raise(this, KeytipEvents.PERSISTED_KEYTIP_EXECUTE, {
            overflowButtonSequences: overflowButtonSequences,
            keytipSequences: keytipSequences
        });
    };
    /**
     * Creates an IUniqueKeytip object
     *
     * @param keytipProps - IKeytipProps
     * @param uniqueID - Unique ID, will default to the next unique ID if not passed
     * @returns {IUniqueKeytip} IUniqueKeytip object
     */
    KeytipManager.prototype._getUniqueKtp = function (keytipProps, uniqueID) {
        if (uniqueID === void 0) { uniqueID = Object(Utilities["F" /* getId */])(); }
        return { keytip: tslib_es6["a" /* __assign */]({}, keytipProps), uniqueID: uniqueID };
    };
    KeytipManager._instance = new KeytipManager();
    return KeytipManager;
}());


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipUtils.js


/**
 * Converts a whole set of KeySequences into one keytip ID, which will be the ID for the last keytip sequence specified
 * keySequences should not include the initial keytip 'start' sequence.
 *
 * @param keySequences - Full path of IKeySequences for one keytip.
 * @returns {string} String to use for the keytip ID.
 */
function sequencesToID(keySequences) {
    return keySequences.reduce(function (prevValue, keySequence) {
        return prevValue + KTP_SEPARATOR + keySequence.split('').join(KTP_SEPARATOR);
    }, KTP_PREFIX);
}
/**
 * Merges an overflow sequence with a key sequence.
 *
 * @param keySequences - Full sequence for one keytip.
 * @param overflowKeySequences - Full overflow keytip sequence.
 * @returns {string[]} Sequence that will be used by the keytip when in the overflow.
 */
function mergeOverflows(keySequences, overflowKeySequences) {
    var overflowSequenceLen = overflowKeySequences.length;
    var overflowSequence = overflowKeySequences.slice().pop();
    var newKeySequences = keySequences.slice();
    return Object(Utilities["g" /* addElementAtIndex */])(newKeySequences, overflowSequenceLen - 1, overflowSequence);
}
/**
 * Constructs the data-ktp-target attribute selector from a full key sequence.
 *
 * @param keySequences - Full string[] for a Keytip.
 * @returns {string} String selector to use to query for the keytip target.
 */
function ktpTargetFromSequences(keySequences) {
    return '[' + DATAKTP_TARGET + '="' + sequencesToID(keySequences) + '"]';
}
/**
 * Constructs the data-ktp-execute-target attribute selector from a keytip ID.
 *
 * @param keytipId - ID of the Keytip.
 * @returns {string} String selector to use to query for the keytip execute target.
 */
function ktpTargetFromId(keytipId) {
    return '[' + DATAKTP_EXECUTE_TARGET + '="' + keytipId + '"]';
}
/**
 * Gets the aria-describedby value to put on the component with this keytip.
 *
 * @param keySequences - KeySequences of the keytip.
 * @returns {string} The aria-describedby value to set on the component with this keytip.
 */
function getAriaDescribedBy(keySequences) {
    var describedby = ' ' + KTP_LAYER_ID;
    if (!keySequences.length) {
        // Return just the layer ID
        return describedby;
    }
    return describedby + ' ' + sequencesToID(keySequences);
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/KeytipData/KeytipData.js




/**
 * A small element to help the target component correctly read out its aria-describedby for its Keytip
 */
var KeytipData_KeytipData = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](KeytipData, _super);
    function KeytipData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._keytipManager = KeytipManager_KeytipManager.getInstance();
        return _this;
    }
    KeytipData.prototype.componentDidMount = function () {
        // Register Keytip in KeytipManager
        if (this.props.keytipProps) {
            this._uniqueId = this._keytipManager.register(this._getKtpProps());
        }
    };
    KeytipData.prototype.componentWillUnmount = function () {
        // Unregister Keytip in KeytipManager
        this.props.keytipProps && this._keytipManager.unregister(this._getKtpProps(), this._uniqueId);
    };
    KeytipData.prototype.componentDidUpdate = function () {
        // Update Keytip in KeytipManager
        this.props.keytipProps && this._keytipManager.update(this._getKtpProps(), this._uniqueId);
    };
    KeytipData.prototype.render = function () {
        var _a = this.props, children = _a.children, keytipProps = _a.keytipProps, ariaDescribedBy = _a.ariaDescribedBy;
        var nativeKeytipProps = {};
        if (keytipProps) {
            nativeKeytipProps = this._getKtpAttrs(keytipProps, ariaDescribedBy);
        }
        return children(nativeKeytipProps);
    };
    KeytipData.prototype._getKtpProps = function () {
        return tslib_es6["a" /* __assign */]({ disabled: this.props.disabled }, this.props.keytipProps);
    };
    /**
     * Gets the aria- and data- attributes to attach to the component
     * @param keytipProps
     * @param describedByPrepend
     */
    KeytipData.prototype._getKtpAttrs = function (keytipProps, describedByPrepend) {
        if (keytipProps) {
            // Add the parent overflow sequence if necessary
            var newKeytipProps = this._keytipManager.addParentOverflow(keytipProps);
            // Construct aria-describedby and data-ktp-id attributes and return
            var ariaDescribedBy = getAriaDescribedBy(newKeytipProps.keySequences);
            var keySequences = newKeytipProps.keySequences.slice();
            if (newKeytipProps.overflowSetSequence) {
                keySequences = mergeOverflows(keySequences, newKeytipProps.overflowSetSequence);
            }
            var ktpId = sequencesToID(keySequences);
            return {
                'aria-describedby': Object(Utilities["_2" /* mergeAriaAttributeValues */])(describedByPrepend, ariaDescribedBy),
                'data-ktp-target': ktpId,
                'data-ktp-execute-target': ktpId
            };
        }
        return undefined;
    };
    return KeytipData;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/KeytipData/index.js


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/KeytipData.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return KeytipData_KeytipData; });



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(45);

// EXTERNAL MODULE: ./lib/DeveloperTools/FBWrappers/FakeReact.js
var FakeReact = __webpack_require__(13);
var FakeReact_default = /*#__PURE__*/__webpack_require__.n(FakeReact);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.types.js
var FocusZoneTabbableElements = {
    /** Tabbing is not allowed */
    none: 0,
    /** All tabbing action is allowed */
    all: 1,
    /** Tabbing is allowed only on input elements */
    inputOnly: 2
};
var FocusZoneDirection;
(function (FocusZoneDirection) {
    /** Only react to up/down arrows. */
    FocusZoneDirection[FocusZoneDirection["vertical"] = 0] = "vertical";
    /** Only react to left/right arrows. */
    FocusZoneDirection[FocusZoneDirection["horizontal"] = 1] = "horizontal";
    /** React to all arrows. */
    FocusZoneDirection[FocusZoneDirection["bidirectional"] = 2] = "bidirectional";
})(FocusZoneDirection || (FocusZoneDirection = {}));

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Utilities.js + 45 modules
var Utilities = __webpack_require__(44);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.js




var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var TABINDEX = 'tabindex';
var NO_VERTICAL_WRAP = 'data-no-vertical-wrap';
var NO_HORIZONTAL_WRAP = 'data-no-horizontal-wrap';
var LARGE_DISTANCE_FROM_CENTER = 999999999;
var LARGE_NEGATIVE_DISTANCE_FROM_CENTER = -999999999;
var _allInstances = {};
var ALLOWED_INPUT_TYPES = ['text', 'number', 'password', 'email', 'tel', 'url', 'search'];
var ALLOW_VIRTUAL_ELEMENTS = false;
var FocusZone_FocusZone = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](FocusZone, _super);
    function FocusZone(props) {
        var _this = _super.call(this, props) || this;
        _this._root = FakeReact["createRef"]();
        _this._onFocus = function (ev) {
            var _a = _this.props, onActiveElementChanged = _a.onActiveElementChanged, doNotAllowFocusEventToPropagate = _a.doNotAllowFocusEventToPropagate, onFocusNotification = _a.onFocusNotification;
            var isImmediateDescendant = _this._isImmediateDescendantOfZone(ev.target);
            var newActiveElement;
            if (onFocusNotification) {
                onFocusNotification();
            }
            if (isImmediateDescendant) {
                newActiveElement = ev.target;
            }
            else {
                var parentElement = ev.target;
                while (parentElement && parentElement !== _this._root.current) {
                    if (Object(Utilities["Y" /* isElementTabbable */])(parentElement) && _this._isImmediateDescendantOfZone(parentElement)) {
                        newActiveElement = parentElement;
                        break;
                    }
                    parentElement = Object(Utilities["K" /* getParent */])(parentElement, ALLOW_VIRTUAL_ELEMENTS);
                }
            }
            if (newActiveElement && newActiveElement !== _this._activeElement) {
                _this._activeElement = newActiveElement;
                if (isImmediateDescendant) {
                    _this._setFocusAlignment(_this._activeElement);
                }
            }
            if (onActiveElementChanged) {
                onActiveElementChanged(_this._activeElement, ev);
            }
            if (doNotAllowFocusEventToPropagate) {
                ev.stopPropagation();
            }
        };
        _this._onMouseDown = function (ev) {
            var disabled = _this.props.disabled;
            if (disabled) {
                return;
            }
            var target = ev.target;
            var path = [];
            while (target && target !== _this._root.current) {
                path.push(target);
                target = Object(Utilities["K" /* getParent */])(target, ALLOW_VIRTUAL_ELEMENTS);
            }
            while (path.length) {
                target = path.pop();
                if (target && Object(Utilities["Y" /* isElementTabbable */])(target)) {
                    _this._setActiveElement(target, true);
                }
                if (Object(Utilities["X" /* isElementFocusZone */])(target)) {
                    // Stop here since the focus zone will take care of its own children.
                    break;
                }
            }
        };
        /**
         * Handle the keystrokes.
         */
        _this._onKeyDown = function (ev) {
            var _a = _this.props, direction = _a.direction, disabled = _a.disabled, isInnerZoneKeystroke = _a.isInnerZoneKeystroke;
            if (disabled) {
                return;
            }
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            // If the default has been prevented, do not process keyboard events.
            if (ev.isDefaultPrevented()) {
                return;
            }
            if (document.activeElement === _this._root.current && _this._isInnerZone) {
                // If this element has focus, it is being controlled by a parent.
                // Ignore the keystroke.
                return;
            }
            if (isInnerZoneKeystroke && isInnerZoneKeystroke(ev) && _this._isImmediateDescendantOfZone(ev.target)) {
                // Try to focus
                var innerZone = _this._getFirstInnerZone();
                if (innerZone) {
                    if (!innerZone.focus(true)) {
                        return;
                    }
                }
                else if (Object(Utilities["W" /* isElementFocusSubZone */])(ev.target)) {
                    if (!_this.focusElement(Object(Utilities["J" /* getNextElement */])(ev.target, ev.target.firstChild, true))) {
                        return;
                    }
                }
                else {
                    return;
                }
            }
            else if (ev.altKey) {
                return;
            }
            else {
                switch (ev.which) {
                    case Utilities["e" /* KeyCodes */].space:
                        if (_this._tryInvokeClickForFocusable(ev.target)) {
                            break;
                        }
                        return;
                    case Utilities["e" /* KeyCodes */].left:
                        if (direction !== FocusZoneDirection.vertical && _this._moveFocusLeft()) {
                            break;
                        }
                        return;
                    case Utilities["e" /* KeyCodes */].right:
                        if (direction !== FocusZoneDirection.vertical && _this._moveFocusRight()) {
                            break;
                        }
                        return;
                    case Utilities["e" /* KeyCodes */].up:
                        if (direction !== FocusZoneDirection.horizontal && _this._moveFocusUp()) {
                            break;
                        }
                        return;
                    case Utilities["e" /* KeyCodes */].down:
                        if (direction !== FocusZoneDirection.horizontal && _this._moveFocusDown()) {
                            break;
                        }
                        return;
                    case Utilities["e" /* KeyCodes */].tab:
                        if (_this.props.allowTabKey ||
                            _this.props.handleTabKey === FocusZoneTabbableElements.all ||
                            (_this.props.handleTabKey === FocusZoneTabbableElements.inputOnly && _this._isElementInput(ev.target))) {
                            var focusChanged = false;
                            _this._processingTabKey = true;
                            if (direction === FocusZoneDirection.vertical ||
                                !_this._shouldWrapFocus(_this._activeElement, NO_HORIZONTAL_WRAP)) {
                                focusChanged = ev.shiftKey ? _this._moveFocusUp() : _this._moveFocusDown();
                            }
                            else if (direction === FocusZoneDirection.horizontal || direction === FocusZoneDirection.bidirectional) {
                                var tabWithDirection = Object(Utilities["M" /* getRTL */])() ? !ev.shiftKey : ev.shiftKey;
                                focusChanged = tabWithDirection ? _this._moveFocusLeft() : _this._moveFocusRight();
                            }
                            _this._processingTabKey = false;
                            if (focusChanged) {
                                break;
                            }
                        }
                        return;
                    case Utilities["e" /* KeyCodes */].home:
                        if (_this._isElementInput(ev.target) && !_this._shouldInputLoseFocus(ev.target, false)) {
                            return false;
                        }
                        var firstChild = _this._root.current && _this._root.current.firstChild;
                        if (_this._root.current && firstChild && _this.focusElement(Object(Utilities["J" /* getNextElement */])(_this._root.current, firstChild, true))) {
                            break;
                        }
                        return;
                    case Utilities["e" /* KeyCodes */].end:
                        if (_this._isElementInput(ev.target) && !_this._shouldInputLoseFocus(ev.target, true)) {
                            return false;
                        }
                        var lastChild = _this._root.current && _this._root.current.lastChild;
                        if (_this._root.current && _this.focusElement(Object(Utilities["L" /* getPreviousElement */])(_this._root.current, lastChild, true, true, true))) {
                            break;
                        }
                        return;
                    case Utilities["e" /* KeyCodes */].enter:
                        if (_this._tryInvokeClickForFocusable(ev.target)) {
                            break;
                        }
                        return;
                    default:
                        return;
                }
            }
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._warnDeprecations({
            rootProps: undefined,
            allowTabKey: 'handleTabKey'
        });
        _this._id = Object(Utilities["F" /* getId */])('FocusZone');
        _this._focusAlignment = {
            left: 0,
            top: 0
        };
        _this._processingTabKey = false;
        return _this;
    }
    FocusZone.prototype.componentDidMount = function () {
        var root = this._root.current;
        _allInstances[this._id] = this;
        if (root) {
            var windowElement = root.ownerDocument.defaultView;
            var parentElement = Object(Utilities["K" /* getParent */])(root, ALLOW_VIRTUAL_ELEMENTS);
            while (parentElement && parentElement !== document.body && parentElement.nodeType === 1) {
                if (Object(Utilities["X" /* isElementFocusZone */])(parentElement)) {
                    this._isInnerZone = true;
                    break;
                }
                parentElement = Object(Utilities["K" /* getParent */])(parentElement, ALLOW_VIRTUAL_ELEMENTS);
            }
            if (!this._isInnerZone) {
                this._events.on(windowElement, 'keydown', this._onKeyDownCapture, true);
                this._events.on(root, 'blur', this._onBlur, true);
            }
            // Assign initial tab indexes so that we can set initial focus as appropriate.
            this._updateTabIndexes();
            if (this.props.defaultActiveElement) {
                this._activeElement = Object(Utilities["A" /* getDocument */])().querySelector(this.props.defaultActiveElement);
                this.focus();
            }
        }
    };
    FocusZone.prototype.componentDidUpdate = function () {
        var root = this._root.current;
        var doc = Object(Utilities["A" /* getDocument */])(root);
        if (doc && this._lastIndexPath && (doc.activeElement === doc.body || doc.activeElement === root)) {
            // The element has been removed after the render, attempt to restore focus.
            var elementToFocus = Object(Utilities["E" /* getFocusableByIndexPath */])(root, this._lastIndexPath);
            if (elementToFocus) {
                this._setActiveElement(elementToFocus, true);
                elementToFocus.focus();
                this._setParkedFocus(false);
            }
            else {
                // We had a focus path to restore, but now that path is unresolvable. Park focus
                // on the container until we can try again.
                this._setParkedFocus(true);
            }
        }
    };
    FocusZone.prototype.componentWillUnmount = function () {
        delete _allInstances[this._id];
    };
    FocusZone.prototype.render = function () {
        var _a = this.props, rootProps = _a.rootProps, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className;
        var divProps = Object(Utilities["I" /* getNativeProps */])(this.props, Utilities["T" /* htmlElementProperties */]);
        var Tag = this.props.elementType || 'div';
        // Note, right before rendering/reconciling proceeds, we need to record if focus
        // was in the zone before the update. This helper will track this and, if focus
        // was actually in the zone, what the index path to the element is at this time.
        // Then, later in componentDidUpdate, we can evaluate if we need to restore it in
        // the case the element was removed.
        this._evaluateFocusBeforeRender();
        return (FakeReact["createElement"](Tag, tslib_es6["a" /* __assign */]({ role: "presentation" }, divProps, rootProps, { className: Object(Utilities["o" /* css */])('ms-FocusZone', className), ref: this._root, "data-focuszone-id": this._id, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: this._onKeyDown, onFocus: this._onFocus, onMouseDownCapture: this._onMouseDown }), this.props.children));
    };
    /**
     * Sets focus to the first tabbable item in the zone.
     * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
     * if focus is already in the focus zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._root.current) {
            if (!forceIntoFirstElement && this._root.current.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' && this._isInnerZone) {
                var ownerZoneElement = this._getOwnerZone(this._root.current);
                if (ownerZoneElement !== this._root.current) {
                    var ownerZone = _allInstances[ownerZoneElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
                    return !!ownerZone && ownerZone.focusElement(this._root.current);
                }
                return false;
            }
            else if (!forceIntoFirstElement &&
                this._activeElement &&
                Object(Utilities["t" /* elementContains */])(this._root.current, this._activeElement) &&
                Object(Utilities["Y" /* isElementTabbable */])(this._activeElement)) {
                this._activeElement.focus();
                return true;
            }
            else {
                var firstChild = this._root.current.firstChild;
                return this.focusElement(Object(Utilities["J" /* getNextElement */])(this._root.current, firstChild, true));
            }
        }
        return false;
    };
    /**
     * Sets focus to a specific child element within the zone. This can be used in conjunction with
     * onBeforeFocus to created delayed focus scenarios (like animate the scroll position to the correct
     * location and then focus.)
     * @param element - The child element within the zone to focus.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focusElement = function (element) {
        var onBeforeFocus = this.props.onBeforeFocus;
        if (onBeforeFocus && !onBeforeFocus(element)) {
            return false;
        }
        if (element) {
            this._setActiveElement(element);
            if (this._activeElement) {
                this._activeElement.focus();
            }
            return true;
        }
        return false;
    };
    FocusZone.prototype._evaluateFocusBeforeRender = function () {
        var root = this._root.current;
        var doc = Object(Utilities["A" /* getDocument */])(root);
        if (doc) {
            var focusedElement = doc.activeElement;
            // Only update the index path if we are not parked on the root.
            if (focusedElement !== root) {
                var shouldRestoreFocus = Object(Utilities["t" /* elementContains */])(root, focusedElement);
                this._lastIndexPath = shouldRestoreFocus ? Object(Utilities["B" /* getElementIndexPath */])(root, doc.activeElement) : undefined;
            }
        }
    };
    /**
     * When focus is in the zone at render time but then all focusable elements are removed,
     * we "park" focus temporarily on the root. Once we update with focusable children, we restore
     * focus to the closest path from previous. If the user tabs away from the parked container,
     * we restore focusability to the pre-parked state.
     */
    FocusZone.prototype._setParkedFocus = function (isParked) {
        var root = this._root.current;
        if (root && this._isParked !== isParked) {
            this._isParked = isParked;
            if (isParked) {
                if (!this.props.allowFocusRoot) {
                    this._parkedTabIndex = root.getAttribute('tabindex');
                    root.setAttribute('tabindex', '-1');
                }
                root.focus();
            }
            else {
                if (!this.props.allowFocusRoot) {
                    if (this._parkedTabIndex) {
                        root.setAttribute('tabindex', this._parkedTabIndex);
                        this._parkedTabIndex = undefined;
                    }
                    else {
                        root.removeAttribute('tabindex');
                    }
                }
            }
        }
    };
    FocusZone.prototype._onBlur = function () {
        this._setParkedFocus(false);
    };
    /**
     * Handle global tab presses so that we can patch tabindexes on the fly.
     */
    FocusZone.prototype._onKeyDownCapture = function (ev) {
        if (ev.which === Utilities["e" /* KeyCodes */].tab) {
            this._updateTabIndexes();
        }
    };
    FocusZone.prototype._setActiveElement = function (element, forceAlignemnt) {
        var previousActiveElement = this._activeElement;
        this._activeElement = element;
        if (previousActiveElement) {
            if (Object(Utilities["X" /* isElementFocusZone */])(previousActiveElement)) {
                this._updateTabIndexes(previousActiveElement);
            }
            previousActiveElement.tabIndex = -1;
        }
        if (this._activeElement) {
            if (!this._focusAlignment || forceAlignemnt) {
                this._setFocusAlignment(element, true, true);
            }
            this._activeElement.tabIndex = 0;
        }
    };
    /**
     * Walk up the dom try to find a focusable element.
     */
    FocusZone.prototype._tryInvokeClickForFocusable = function (target) {
        if (target === this._root.current) {
            return false;
        }
        do {
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                return false;
            }
            if (this._isImmediateDescendantOfZone(target) &&
                target.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
                target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true') {
                Utilities["c" /* EventGroup */].raise(target, 'click', null, true);
                return true;
            }
            target = Object(Utilities["K" /* getParent */])(target, ALLOW_VIRTUAL_ELEMENTS);
        } while (target !== this._root.current);
        return false;
    };
    /**
     * Traverse to find first child zone.
     */
    FocusZone.prototype._getFirstInnerZone = function (rootElement) {
        rootElement = rootElement || this._activeElement || this._root.current;
        if (!rootElement) {
            return null;
        }
        if (Object(Utilities["X" /* isElementFocusZone */])(rootElement)) {
            return _allInstances[rootElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
        }
        var child = rootElement.firstElementChild;
        while (child) {
            if (Object(Utilities["X" /* isElementFocusZone */])(child)) {
                return _allInstances[child.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
            }
            var match = this._getFirstInnerZone(child);
            if (match) {
                return match;
            }
            child = child.nextElementSibling;
        }
        return null;
    };
    FocusZone.prototype._moveFocus = function (isForward, getDistanceFromCenter, ev, useDefaultWrap) {
        if (useDefaultWrap === void 0) { useDefaultWrap = true; }
        var element = this._activeElement;
        var candidateDistance = -1;
        var candidateElement = undefined;
        var changedFocus = false;
        var isBidirectional = this.props.direction === FocusZoneDirection.bidirectional;
        if (!element || !this._root.current) {
            return false;
        }
        if (this._isElementInput(element)) {
            if (!this._shouldInputLoseFocus(element, isForward)) {
                return false;
            }
        }
        var activeRect = isBidirectional ? element.getBoundingClientRect() : null;
        do {
            element = (isForward ? Object(Utilities["J" /* getNextElement */])(this._root.current, element) : Object(Utilities["L" /* getPreviousElement */])(this._root.current, element));
            if (isBidirectional) {
                if (element) {
                    var targetRect = element.getBoundingClientRect();
                    var elementDistance = getDistanceFromCenter(activeRect, targetRect);
                    if (elementDistance === -1 && candidateDistance === -1) {
                        candidateElement = element;
                        break;
                    }
                    if (elementDistance > -1 && (candidateDistance === -1 || elementDistance < candidateDistance)) {
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    if (candidateDistance >= 0 && elementDistance < 0) {
                        break;
                    }
                }
            }
            else {
                candidateElement = element;
                break;
            }
        } while (element);
        // Focus the closest candidate
        if (candidateElement && candidateElement !== this._activeElement) {
            changedFocus = true;
            this.focusElement(candidateElement);
        }
        else if (this.props.isCircularNavigation && useDefaultWrap) {
            if (isForward) {
                return this.focusElement(Object(Utilities["J" /* getNextElement */])(this._root.current, this._root.current.firstElementChild, true));
            }
            else {
                return this.focusElement(Object(Utilities["L" /* getPreviousElement */])(this._root.current, this._root.current.lastElementChild, true, true, true));
            }
        }
        return changedFocus;
    };
    FocusZone.prototype._moveFocusDown = function () {
        var _this = this;
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.left;
        if (this._moveFocus(true, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectBottom = Math.floor(activeRect.bottom);
            if (targetRectTop < activeRectBottom) {
                if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                    return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
                return LARGE_DISTANCE_FROM_CENTER;
            }
            if ((targetTop === -1 && targetRectTop >= activeRectBottom) || targetRectTop === targetTop) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    distance = 0;
                }
                else {
                    distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusUp = function () {
        var _this = this;
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.left;
        if (this._moveFocus(false, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectBottom = Math.floor(targetRect.bottom);
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectTop = Math.floor(activeRect.top);
            if (targetRectBottom > activeRectTop) {
                if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                    return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
                return LARGE_DISTANCE_FROM_CENTER;
            }
            if ((targetTop === -1 && targetRectBottom <= activeRectTop) || targetRectTop === targetTop) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    distance = 0;
                }
                else {
                    distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusLeft = function () {
        var _this = this;
        var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);
        if (this._moveFocus(Object(Utilities["M" /* getRTL */])(), function (activeRect, targetRect) {
            var distance = -1;
            var topBottomComparison;
            if (Object(Utilities["M" /* getRTL */])()) {
                // When in RTL, this comparison should be the same as the one in _moveFocusRight for LTR.
                // Going left at a leftmost rectangle will go down a line instead of up a line like in LTR.
                // This is important, because we want to be comparing the top of the target rect
                // with the bottom of the active rect.
                topBottomComparison = targetRect.top.toFixed(3) < activeRect.bottom.toFixed(3);
            }
            else {
                topBottomComparison = targetRect.bottom.toFixed(3) > activeRect.top.toFixed(3);
            }
            if (topBottomComparison && targetRect.right <= activeRect.right && _this.props.direction !== FocusZoneDirection.vertical) {
                distance = activeRect.right - targetRect.right;
            }
            else {
                if (!shouldWrap) {
                    distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
            }
            return distance;
        }, undefined /*ev*/, shouldWrap)) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusRight = function () {
        var _this = this;
        var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);
        if (this._moveFocus(!Object(Utilities["M" /* getRTL */])(), function (activeRect, targetRect) {
            var distance = -1;
            var topBottomComparison;
            if (Object(Utilities["M" /* getRTL */])()) {
                // When in RTL, this comparison should be the same as the one in _moveFocusLeft for LTR.
                // Going right at a rightmost rectangle will go up a line instead of down a line like in LTR.
                // This is important, because we want to be comparing the bottom of the target rect
                // with the top of the active rect.
                topBottomComparison = targetRect.bottom.toFixed(3) > activeRect.top.toFixed(3);
            }
            else {
                topBottomComparison = targetRect.top.toFixed(3) < activeRect.bottom.toFixed(3);
            }
            if (topBottomComparison && targetRect.left >= activeRect.left && _this.props.direction !== FocusZoneDirection.vertical) {
                distance = targetRect.left - activeRect.left;
            }
            else if (!shouldWrap) {
                distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
            }
            return distance;
        }, undefined /*ev*/, shouldWrap)) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._setFocusAlignment = function (element, isHorizontal, isVertical) {
        if (this.props.direction === FocusZoneDirection.bidirectional && (!this._focusAlignment || isHorizontal || isVertical)) {
            var rect = element.getBoundingClientRect();
            var left = rect.left + rect.width / 2;
            var top_1 = rect.top + rect.height / 2;
            if (!this._focusAlignment) {
                this._focusAlignment = { left: left, top: top_1 };
            }
            if (isHorizontal) {
                this._focusAlignment.left = left;
            }
            if (isVertical) {
                this._focusAlignment.top = top_1;
            }
        }
    };
    FocusZone.prototype._isImmediateDescendantOfZone = function (element) {
        return this._getOwnerZone(element) === this._root.current;
    };
    FocusZone.prototype._getOwnerZone = function (element) {
        var parentElement = Object(Utilities["K" /* getParent */])(element, ALLOW_VIRTUAL_ELEMENTS);
        while (parentElement && parentElement !== this._root.current && parentElement !== document.body) {
            if (Object(Utilities["X" /* isElementFocusZone */])(parentElement)) {
                return parentElement;
            }
            parentElement = Object(Utilities["K" /* getParent */])(parentElement, ALLOW_VIRTUAL_ELEMENTS);
        }
        return this._root.current;
    };
    FocusZone.prototype._updateTabIndexes = function (element) {
        if (!element && this._root.current) {
            this._defaultFocusElement = null;
            element = this._root.current;
            if (this._activeElement && !Object(Utilities["t" /* elementContains */])(element, this._activeElement)) {
                this._activeElement = null;
            }
        }
        // If active element changes state to disabled, set it to null.
        // Otherwise, we lose keyboard accessibility to other elements in focus zone.
        if (this._activeElement && !Object(Utilities["Y" /* isElementTabbable */])(this._activeElement)) {
            this._activeElement = null;
        }
        var childNodes = element && element.children;
        for (var childIndex = 0; childNodes && childIndex < childNodes.length; childIndex++) {
            var child = childNodes[childIndex];
            if (!Object(Utilities["X" /* isElementFocusZone */])(child)) {
                // If the item is explicitly set to not be focusable then TABINDEX needs to be set to -1.
                if (child.getAttribute && child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'false') {
                    child.setAttribute(TABINDEX, '-1');
                }
                if (Object(Utilities["Y" /* isElementTabbable */])(child)) {
                    if (this.props.disabled) {
                        child.setAttribute(TABINDEX, '-1');
                    }
                    else if (!this._isInnerZone && ((!this._activeElement && !this._defaultFocusElement) || this._activeElement === child)) {
                        this._defaultFocusElement = child;
                        if (child.getAttribute(TABINDEX) !== '0') {
                            child.setAttribute(TABINDEX, '0');
                        }
                    }
                    else if (child.getAttribute(TABINDEX) !== '-1') {
                        child.setAttribute(TABINDEX, '-1');
                    }
                }
                else if (child.tagName === 'svg' && child.getAttribute('focusable') !== 'false') {
                    // Disgusting IE hack. Sad face.
                    child.setAttribute('focusable', 'false');
                }
            }
            else if (child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true') {
                if (!this._isInnerZone && ((!this._activeElement && !this._defaultFocusElement) || this._activeElement === child)) {
                    this._defaultFocusElement = child;
                    if (child.getAttribute(TABINDEX) !== '0') {
                        child.setAttribute(TABINDEX, '0');
                    }
                }
                else if (child.getAttribute(TABINDEX) !== '-1') {
                    child.setAttribute(TABINDEX, '-1');
                }
            }
            this._updateTabIndexes(child);
        }
    };
    FocusZone.prototype._isElementInput = function (element) {
        if (element && element.tagName && (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea')) {
            return true;
        }
        return false;
    };
    FocusZone.prototype._shouldInputLoseFocus = function (element, isForward) {
        // If a tab was used, we want to focus on the next element.
        if (!this._processingTabKey && element && element.type && ALLOWED_INPUT_TYPES.indexOf(element.type.toLowerCase()) > -1) {
            var selectionStart = element.selectionStart;
            var selectionEnd = element.selectionEnd;
            var isRangeSelected = selectionStart !== selectionEnd;
            var inputValue = element.value;
            // We shouldn't lose focus in the following cases:
            // 1. There is range selected.
            // 2. When selection start is larger than 0 and it is backward.
            // 3. when selection start is not the end of length and it is forward.
            // 4. We press any of the arrow keys when our handleTabKey isn't none or undefined (only losing focus if we hit tab)
            // and if shouldInputLoseFocusOnArrowKey is defined, if scenario prefers to not loose the focus which is determined by calling the
            // callback shouldInputLoseFocusOnArrowKey
            if (isRangeSelected ||
                (selectionStart > 0 && !isForward) ||
                (selectionStart !== inputValue.length && isForward) ||
                (!!this.props.handleTabKey && !(this.props.shouldInputLoseFocusOnArrowKey && this.props.shouldInputLoseFocusOnArrowKey(element)))) {
                return false;
            }
        }
        return true;
    };
    FocusZone.prototype._shouldWrapFocus = function (element, noWrapDataAttribute) {
        return !!this.props.checkForNoWrap ? Object(Utilities["_9" /* shouldWrapFocus */])(element, noWrapDataAttribute) : true;
    };
    FocusZone.defaultProps = {
        isCircularNavigation: false,
        direction: FocusZoneDirection.bidirectional
    };
    return FocusZone;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/FocusZone/index.js



// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/FocusZone.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return FocusZone_FocusZone; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "c", function() { return FocusZoneTabbableElements; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return FocusZoneDirection; });



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uifabric_set_version__ = __webpack_require__(50);
// office-ui-fabric-react@6.143.0
// Do not modify this file, the file is generated as part of publish. The checked in version is a placeholder only.

Object(__WEBPACK_IMPORTED_MODULE_0__uifabric_set_version__["a" /* setVersion */])('office-ui-fabric-react', '6.143.0');


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["d"] = shallowCompare;
/* harmony export (immutable) */ __webpack_exports__["a"] = assign;
/* harmony export (immutable) */ __webpack_exports__["b"] = filteredAssign;
/* harmony export (immutable) */ __webpack_exports__["c"] = getId;
/* unused harmony export resetIds */
/* unused harmony export mapEnumByName */
/* unused harmony export values */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uifabric_merge_styles__ = __webpack_require__(47);

// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
var DEFAULT_ID_STRING = 'id__';
// tslint:disable-next-line:no-any
var _global = (typeof window !== 'undefined' && window) || process;
if (_global[CURRENT_ID_PROPERTY] === undefined) {
    _global[CURRENT_ID_PROPERTY] = 0;
}
// tslint:disable-next-line:no-any
function checkProperties(a, b) {
    for (var propName in a) {
        if (a.hasOwnProperty(propName)) {
            if (!b.hasOwnProperty(propName) || b[propName] !== a[propName]) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Compares a to b and b to a.
 *
 * @public
 */
function shallowCompare(a, b) {
    return checkProperties(a, b) && checkProperties(b, a);
}
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return filteredAssign.apply(this, [null, target].concat(args));
}
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function filteredAssign(isAllowed, target) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    target = target || {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var sourceObject = args_1[_a];
        if (sourceObject) {
            for (var propName in sourceObject) {
                if (sourceObject.hasOwnProperty(propName) && (!isAllowed || isAllowed(propName))) {
                    target[propName] = sourceObject[propName];
                }
            }
        }
    }
    return target;
}
// Configure ids to reset on stylesheet resets.
var stylesheet = __WEBPACK_IMPORTED_MODULE_0__uifabric_merge_styles__["a" /* Stylesheet */].getInstance();
if (stylesheet && stylesheet.onReset) {
    stylesheet.onReset(resetIds);
}
/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
function getId(prefix) {
    var index = _global[CURRENT_ID_PROPERTY]++;
    return (prefix || DEFAULT_ID_STRING) + index;
}
/**
 * Resets id counter to an (optional) number.
 *
 * @public
 */
function resetIds(counter) {
    if (counter === void 0) { counter = 0; }
    _global[CURRENT_ID_PROPERTY] = counter;
}
/* Takes an enum and iterates over each value of the enum (as a string), running the callback on each, returning a mapped array.
 * The callback takes as a first parameter the string that represents the name of the entry, and the second parameter is the
 * value of that entry, which is the value you'd normally use when using the enum (usually a number).
 * */
function mapEnumByName(
// tslint:disable-next-line:no-any
theEnum, callback) {
    // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
    return Object.keys(theEnum)
        .map(function (p) {
        // map on each property name as a string
        if (String(Number(p)) !== p) {
            // if the property is not just a number (because enums in TypeScript will map both ways)
            return callback(p, theEnum[p]);
        }
    })
        .filter(function (v) { return !!v; }); // only return elements with values
}
/**
 * Get all values in an object dictionary
 *
 * @param obj - The dictionary to get values for
 */
// tslint:disable-next-line:no-any
function values(obj) {
    return Object.keys(obj).reduce(function (arr, key) {
        arr.push(obj[key]);
        return arr;
    }, []);
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(59)))

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export shallowCompare */
/* harmony export (immutable) */ __webpack_exports__["a"] = assign;
/* harmony export (immutable) */ __webpack_exports__["b"] = filteredAssign;
/* unused harmony export getId */
/* unused harmony export resetIds */
/* unused harmony export mapEnumByName */
/* unused harmony export values */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uifabric_merge_styles__ = __webpack_require__(47);

// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
var DEFAULT_ID_STRING = 'id__';
// tslint:disable-next-line:no-any
var _global = (typeof window !== 'undefined' && window) || process;
if (_global[CURRENT_ID_PROPERTY] === undefined) {
    _global[CURRENT_ID_PROPERTY] = 0;
}
// tslint:disable-next-line:no-any
function checkProperties(a, b) {
    for (var propName in a) {
        if (a.hasOwnProperty(propName)) {
            if (!b.hasOwnProperty(propName) || b[propName] !== a[propName]) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Compares a to b and b to a.
 *
 * @public
 */
function shallowCompare(a, b) {
    return checkProperties(a, b) && checkProperties(b, a);
}
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return filteredAssign.apply(this, [null, target].concat(args));
}
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function filteredAssign(isAllowed, target) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    target = target || {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var sourceObject = args_1[_a];
        if (sourceObject) {
            for (var propName in sourceObject) {
                if (sourceObject.hasOwnProperty(propName) && (!isAllowed || isAllowed(propName))) {
                    target[propName] = sourceObject[propName];
                }
            }
        }
    }
    return target;
}
// Configure ids to reset on stylesheet resets.
var stylesheet = __WEBPACK_IMPORTED_MODULE_0__uifabric_merge_styles__["a" /* Stylesheet */].getInstance();
if (stylesheet && stylesheet.onReset) {
    stylesheet.onReset(resetIds);
}
/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
function getId(prefix) {
    var index = _global[CURRENT_ID_PROPERTY]++;
    return (prefix || DEFAULT_ID_STRING) + index;
}
/**
 * Resets id counter to an (optional) number.
 *
 * @public
 */
function resetIds(counter) {
    if (counter === void 0) { counter = 0; }
    _global[CURRENT_ID_PROPERTY] = counter;
}
/* Takes an enum and iterates over each value of the enum (as a string), running the callback on each, returning a mapped array.
 * The callback takes as a first parameter the string that represents the name of the entry, and the second parameter is the
 * value of that entry, which is the value you'd normally use when using the enum (usually a number).
 * */
function mapEnumByName(
// tslint:disable-next-line:no-any
theEnum, callback) {
    // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
    return Object.keys(theEnum)
        .map(function (p) {
        // map on each property name as a string
        if (String(Number(p)) !== p) {
            // if the property is not just a number (because enums in TypeScript will map both ways)
            return callback(p, theEnum[p]);
        }
    })
        .filter(function (v) { return !!v; }); // only return elements with values
}
/**
 * Get all values in an object dictionary
 *
 * @param obj - The dictionary to get values for
 */
// tslint:disable-next-line:no-any
function values(obj) {
    return Object.keys(obj).reduce(function (arr, key) {
        arr.push(obj[key]);
        return arr;
    }, []);
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(59)))

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(45);

// EXTERNAL MODULE: ./lib/DeveloperTools/FBWrappers/FakeReact.js
var FakeReact = __webpack_require__(13);
var FakeReact_default = /*#__PURE__*/__webpack_require__.n(FakeReact);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Utilities.js + 45 modules
var Utilities = __webpack_require__(44);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Icon.js + 9 modules
var Icon = __webpack_require__(51);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js
var DirectionalHint = __webpack_require__(49);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.types.js

var ContextualMenuItemType;
(function (ContextualMenuItemType) {
    ContextualMenuItemType[ContextualMenuItemType["Normal"] = 0] = "Normal";
    ContextualMenuItemType[ContextualMenuItemType["Divider"] = 1] = "Divider";
    ContextualMenuItemType[ContextualMenuItemType["Header"] = 2] = "Header";
    ContextualMenuItemType[ContextualMenuItemType["Section"] = 3] = "Section";
})(ContextualMenuItemType || (ContextualMenuItemType = {}));

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/FocusZone.js + 3 modules
var FocusZone = __webpack_require__(53);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/contextualMenuUtility.js
/**
 * Determines the effective checked state of a menu item.
 *
 * @param item {IContextualMenuItem} to get the check state of.
 * @returns {true} if the item is checked.
 * @returns {false} if the item is unchecked.
 * @returns {null} if the item is not checkable.
 */
function getIsChecked(item) {
    if (item.canCheck) {
        return !!(item.isChecked || item.checked);
    }
    if (typeof item.isChecked === 'boolean') {
        return item.isChecked;
    }
    if (typeof item.checked === 'boolean') {
        return item.checked;
    }
    // Item is not checkable.
    return null;
}
function hasSubmenu(item) {
    return !!(item.subMenuProps || item.items);
}
function isItemDisabled(item) {
    return !!(item.isDisabled || item.disabled);
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/index.js


// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode.js
var withResponsiveMode = __webpack_require__(58);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Callout.js + 12 modules
var Callout = __webpack_require__(66);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.base.js





var renderItemIcon = function (props) {
    var item = props.item, hasIcons = props.hasIcons, classNames = props.classNames;
    var iconProps = item.iconProps;
    if (!hasIcons) {
        return null;
    }
    if (item.onRenderIcon) {
        return item.onRenderIcon(props);
    }
    return FakeReact["createElement"](Icon["a" /* Icon */], tslib_es6["a" /* __assign */]({}, iconProps, { className: classNames.icon }));
};
var renderCheckMarkIcon = function (_a) {
    var onCheckmarkClick = _a.onCheckmarkClick, item = _a.item, classNames = _a.classNames;
    var isItemChecked = getIsChecked(item);
    if (onCheckmarkClick) {
        // Ensures that the item is passed as the first argument to the checkmark click callback.
        var onClick = function (e) { return onCheckmarkClick(item, e); };
        return FakeReact["createElement"](Icon["a" /* Icon */], { iconName: isItemChecked ? 'CheckMark' : '', className: classNames.checkmarkIcon, onClick: onClick });
    }
    return null;
};
var renderItemName = function (_a) {
    var item = _a.item, classNames = _a.classNames;
    if (item.text || item.name) {
        return FakeReact["createElement"]("span", { className: classNames.label }, item.text || item.name);
    }
    return null;
};
var renderSecondaryText = function (_a) {
    var item = _a.item, classNames = _a.classNames;
    if (item.secondaryText) {
        return FakeReact["createElement"]("span", { className: classNames.secondaryText }, item.secondaryText);
    }
    return null;
};
var renderSubMenuIcon = function (_a) {
    var item = _a.item, classNames = _a.classNames;
    if (hasSubmenu(item)) {
        return FakeReact["createElement"](Icon["a" /* Icon */], tslib_es6["a" /* __assign */]({ iconName: Object(Utilities["M" /* getRTL */])() ? 'ChevronLeft' : 'ChevronRight' }, item.submenuIconProps, { className: classNames.subMenuIcon }));
    }
    return null;
};
var ContextualMenuItem_base_ContextualMenuItemBase = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](ContextualMenuItemBase, _super);
    function ContextualMenuItemBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.openSubMenu = function () {
            var _a = _this.props, item = _a.item, openSubMenu = _a.openSubMenu, getSubmenuTarget = _a.getSubmenuTarget;
            if (getSubmenuTarget) {
                var submenuTarget = getSubmenuTarget();
                if (hasSubmenu(item) && openSubMenu && submenuTarget) {
                    openSubMenu(item, submenuTarget);
                }
            }
        };
        _this.dismissSubMenu = function () {
            var _a = _this.props, item = _a.item, dismissSubMenu = _a.dismissSubMenu;
            if (hasSubmenu(item) && dismissSubMenu) {
                dismissSubMenu();
            }
        };
        _this.dismissMenu = function (dismissAll) {
            var dismissMenu = _this.props.dismissMenu;
            if (dismissMenu) {
                dismissMenu(undefined /* ev */, dismissAll);
            }
        };
        return _this;
    }
    ContextualMenuItemBase.prototype.render = function () {
        var _a = this.props, item = _a.item, classNames = _a.classNames;
        return (FakeReact["createElement"]("div", { className: item.split ? classNames.linkContentMenu : classNames.linkContent },
            renderCheckMarkIcon(this.props),
            renderItemIcon(this.props),
            renderItemName(this.props),
            renderSecondaryText(this.props),
            renderSubMenuIcon(this.props)));
    };
    return ContextualMenuItemBase;
}(Utilities["a" /* BaseComponent */]));


// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Styling.js + 74 modules
var Styling = __webpack_require__(46);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.classNames.js


var VerticalDivider_classNames_getDividerClassNames = Object(Utilities["_1" /* memoizeFunction */])(function (theme) {
    return Object(Styling["v" /* mergeStyleSets */])({
        wrapper: {
            display: 'inline-flex',
            height: '100%',
            alignItems: 'center'
        },
        divider: {
            width: 1,
            height: '100%',
            backgroundColor: theme.palette.neutralTertiaryAlt
        }
    });
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.cnstyles.js



var CONTEXTUAL_MENU_ITEM_HEIGHT = '32px';
var MediumScreenSelector = Object(Styling["r" /* getScreenSelector */])(0, Styling["i" /* ScreenWidthMaxMedium */]);
var getItemHighContrastStyles = Object(Utilities["_1" /* memoizeFunction */])(function () {
    return {
        selectors: (_a = {},
            _a[Styling["e" /* HighContrastSelector */]] = {
                backgroundColor: 'Highlight',
                borderColor: 'Highlight',
                color: 'HighlightText',
                MsHighContrastAdjust: 'none'
            },
            _a)
    };
    var _a;
});
var getMenuItemStyles = Object(Utilities["_1" /* memoizeFunction */])(function (theme) {
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var ContextualMenuItemBackgroundHoverColor = semanticColors.menuItemBackgroundHovered;
    var ContextualMenuItemBackgroundSelectedColor = semanticColors.menuItemBackgroundChecked;
    var ContextualMenuItemDividerColor = semanticColors.bodyDivider;
    var menuItemStyles = {
        item: [
            fonts.medium,
            {
                color: semanticColors.bodyText,
                position: 'relative',
                boxSizing: 'border-box'
            }
        ],
        divider: {
            display: 'block',
            height: '1px',
            backgroundColor: ContextualMenuItemDividerColor,
            position: 'relative'
        },
        root: [
            Object(Styling["n" /* getFocusStyle */])(theme),
            fonts.medium,
            {
                color: semanticColors.bodyText,
                backgroundColor: 'transparent',
                border: 'none',
                width: '100%',
                height: CONTEXTUAL_MENU_ITEM_HEIGHT,
                lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
                display: 'block',
                cursor: 'pointer',
                padding: '0px 8px 0 4px',
                textAlign: 'left'
            }
        ],
        rootDisabled: {
            color: semanticColors.disabledBodyText,
            cursor: 'default',
            pointerEvents: 'none',
            selectors: (_a = {},
                _a[Styling["e" /* HighContrastSelector */]] = {
                    color: 'GrayText',
                    opacity: 1
                },
                _a)
        },
        rootHovered: tslib_es6["a" /* __assign */]({ backgroundColor: ContextualMenuItemBackgroundHoverColor }, getItemHighContrastStyles()),
        rootFocused: tslib_es6["a" /* __assign */]({ backgroundColor: ContextualMenuItemBackgroundHoverColor }, getItemHighContrastStyles()),
        rootChecked: tslib_es6["a" /* __assign */]({}, getItemHighContrastStyles()),
        rootPressed: tslib_es6["a" /* __assign */]({ backgroundColor: ContextualMenuItemBackgroundSelectedColor }, getItemHighContrastStyles()),
        rootExpanded: tslib_es6["a" /* __assign */]({ backgroundColor: ContextualMenuItemBackgroundSelectedColor, color: semanticColors.bodyTextChecked }, getItemHighContrastStyles()),
        linkContent: {
            whiteSpace: 'nowrap',
            height: 'inherit',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '100%'
        },
        anchorLink: {
            padding: '0px 8px 0 4px',
            textRendering: 'auto',
            color: 'inherit',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            textTransform: 'none',
            textIndent: '0px',
            textShadow: 'none',
            textDecoration: 'none',
            boxSizing: 'border-box'
        },
        label: {
            margin: '0 4px',
            verticalAlign: 'middle',
            display: 'inline-block',
            flexGrow: '1',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        secondaryText: {
            color: theme.palette.neutralSecondary,
            paddingLeft: '20px',
            textAlign: 'right'
        },
        icon: {
            display: 'inline-block',
            minHeight: '1px',
            maxHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
            width: '14px',
            margin: '0 4px',
            verticalAlign: 'middle',
            flexShrink: '0'
        },
        iconColor: {
            color: semanticColors.menuIcon,
            selectors: (_b = {},
                _b[Styling["e" /* HighContrastSelector */]] = {
                    color: 'inherit'
                },
                _b['$root:hover &'] = {
                    selectors: (_c = {},
                        _c[Styling["e" /* HighContrastSelector */]] = {
                            color: 'HighlightText'
                        },
                        _c)
                },
                _b['$root:focus &'] = {
                    selectors: (_d = {},
                        _d[Styling["e" /* HighContrastSelector */]] = {
                            color: 'HighlightText'
                        },
                        _d)
                },
                _b)
        },
        iconDisabled: {
            color: semanticColors.disabledBodyText
        },
        checkmarkIcon: {
            color: semanticColors.bodySubtext,
            selectors: (_e = {},
                _e[Styling["e" /* HighContrastSelector */]] = {
                    color: 'HighlightText'
                },
                _e)
        },
        subMenuIcon: {
            height: CONTEXTUAL_MENU_ITEM_HEIGHT,
            lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
            textAlign: 'center',
            display: 'inline-block',
            verticalAlign: 'middle',
            flexShrink: '0',
            fontSize: Styling["c" /* FontSizes */].small,
            selectors: (_f = {},
                _f[MediumScreenSelector] = {
                    fontSize: Styling["c" /* FontSizes */].icon // 16px
                },
                _f)
        },
        splitButtonFlexContainer: [
            Object(Styling["n" /* getFocusStyle */])(theme),
            {
                display: 'flex',
                height: CONTEXTUAL_MENU_ITEM_HEIGHT,
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'center'
            }
        ]
    };
    return Object(Styling["l" /* concatStyleSets */])(menuItemStyles);
    var _a, _b, _c, _d, _e, _f;
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.classNames.js




var ContextualMenu_classNames_MediumScreenSelector = Object(Styling["r" /* getScreenSelector */])(0, Styling["i" /* ScreenWidthMaxMedium */]);
var getSplitButtonVerticalDividerClassNames = Object(Utilities["_1" /* memoizeFunction */])(function (theme) {
    return Object(Styling["v" /* mergeStyleSets */])(VerticalDivider_classNames_getDividerClassNames(theme), {
        wrapper: {
            position: 'absolute',
            right: 28,
            selectors: (_a = {},
                _a[ContextualMenu_classNames_MediumScreenSelector] = {
                    right: 32 // fontSize of the icon increased from 12px to 16px
                },
                _a)
        },
        divider: {
            height: 16,
            width: 1
        }
    });
    var _a;
});
var GlobalClassNames = {
    item: 'ms-ContextualMenu-item',
    divider: 'ms-ContextualMenu-divider',
    root: 'ms-ContextualMenu-link',
    isChecked: 'is-checked',
    isExpanded: 'is-expanded',
    isDisabled: 'is-disabled',
    linkContent: 'ms-ContextualMenu-linkContent',
    linkContentMenu: 'ms-ContextualMenu-linkContent',
    icon: 'ms-ContextualMenu-icon',
    iconColor: 'ms-ContextualMenu-iconColor',
    checkmarkIcon: 'ms-ContextualMenu-checkmarkIcon',
    subMenuIcon: 'ms-ContextualMenu-submenuIcon',
    label: 'ms-ContextualMenu-itemText',
    secondaryText: 'ms-ContextualMenu-secondaryText'
};
/**
 * @deprecated To be removed in 7.0.
 * @internal
 * This is a package-internal method that has been depended on.
 * It is being kept in this form for backwards compatibility.
 * It should be cleaned up in 7.0.
 *
 * TODO: Audit perf. impact of and potentially remove memoizeFunction.
 * https://github.com/OfficeDev/office-ui-fabric-react/issues/5534
 */
var ContextualMenu_classNames_getItemClassNames = Object(Utilities["_1" /* memoizeFunction */])(function (theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName, primaryDisabled, className) {
    var styles = getMenuItemStyles(theme);
    var classNames = Object(Styling["o" /* getGlobalClassNames */])(GlobalClassNames, theme);
    return Object(Styling["v" /* mergeStyleSets */])({
        item: [classNames.item, styles.item, itemClassName],
        divider: [classNames.divider, styles.divider, dividerClassName],
        root: [
            classNames.root,
            styles.root,
            checked && [classNames.isChecked, styles.rootChecked],
            isAnchorLink && styles.anchorLink,
            expanded && [classNames.isExpanded, styles.rootExpanded],
            disabled && [classNames.isDisabled, styles.rootDisabled],
            !disabled &&
                !expanded && [
                {
                    selectors: (_a = {
                            ':hover': styles.rootHovered,
                            ':active': styles.rootPressed
                        },
                        _a["." + Utilities["d" /* IsFocusVisibleClassName */] + " &:focus, ." + Utilities["d" /* IsFocusVisibleClassName */] + " &:focus:hover"] = styles.rootFocused,
                        _a["." + Utilities["d" /* IsFocusVisibleClassName */] + " &:hover"] = { background: 'inherit;' },
                        _a)
                }
            ],
            className
        ],
        splitPrimary: [
            styles.root,
            checked && ['is-checked', styles.rootChecked],
            (disabled || primaryDisabled) && ['is-disabled', styles.rootDisabled],
            !(disabled || primaryDisabled) &&
                !checked && [
                {
                    selectors: (_b = {
                            ':hover': styles.rootHovered,
                            ':hover ~ $splitMenu': styles.rootHovered,
                            ':active': styles.rootPressed
                        },
                        _b["." + Utilities["d" /* IsFocusVisibleClassName */] + " &:focus, ." + Utilities["d" /* IsFocusVisibleClassName */] + " &:focus:hover"] = styles.rootFocused,
                        _b["." + Utilities["d" /* IsFocusVisibleClassName */] + " &:hover"] = { background: 'inherit;' },
                        _b)
                }
            ]
        ],
        splitMenu: [
            styles.root,
            {
                flexBasis: '0',
                padding: '0 8px',
                minWidth: 28
            },
            expanded && ['is-expanded', styles.rootExpanded],
            disabled && ['is-disabled', styles.rootDisabled],
            !disabled &&
                !expanded && [
                {
                    selectors: (_c = {
                            ':hover': styles.rootHovered,
                            ':active': styles.rootPressed
                        },
                        _c["." + Utilities["d" /* IsFocusVisibleClassName */] + " &:focus, ." + Utilities["d" /* IsFocusVisibleClassName */] + " &:focus:hover"] = styles.rootFocused,
                        _c["." + Utilities["d" /* IsFocusVisibleClassName */] + " &:hover"] = { background: 'inherit;' },
                        _c)
                }
            ]
        ],
        anchorLink: styles.anchorLink,
        linkContent: [classNames.linkContent, styles.linkContent],
        linkContentMenu: [
            classNames.linkContentMenu,
            styles.linkContent,
            {
                justifyContent: 'center'
            }
        ],
        icon: [
            classNames.icon,
            knownIcon && styles.iconColor,
            styles.icon,
            iconClassName,
            disabled && [classNames.isDisabled, styles.iconDisabled]
        ],
        iconColor: styles.iconColor,
        checkmarkIcon: [classNames.checkmarkIcon, knownIcon && styles.checkmarkIcon, styles.icon, iconClassName],
        subMenuIcon: [classNames.subMenuIcon, styles.subMenuIcon, subMenuClassName],
        label: [classNames.label, styles.label],
        secondaryText: [classNames.secondaryText, styles.secondaryText],
        splitContainer: [
            styles.splitButtonFlexContainer,
            {
                alignItems: 'flex-start'
            },
            !disabled &&
                !checked && [
                {
                    selectors: (_d = {},
                        _d["." + Utilities["d" /* IsFocusVisibleClassName */] + " &:focus, ." + Utilities["d" /* IsFocusVisibleClassName */] + " &:focus:hover"] = styles.rootFocused,
                        _d)
                }
            ]
        ]
    });
    var _a, _b, _c, _d;
});
/**
 * Wrapper function for generating ContextualMenuItem classNames which adheres to
 * the getStyles API, but invokes memoized className generator function with
 * primitive values.
 *
 * @param props the ContextualMenuItem style props used to generate its styles.
 */
var getItemStyles = function (props) {
    var theme = props.theme, disabled = props.disabled, expanded = props.expanded, checked = props.checked, isAnchorLink = props.isAnchorLink, knownIcon = props.knownIcon, itemClassName = props.itemClassName, dividerClassName = props.dividerClassName, iconClassName = props.iconClassName, subMenuClassName = props.subMenuClassName, primaryDisabled = props.primaryDisabled, className = props.className;
    return ContextualMenu_classNames_getItemClassNames(theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName, primaryDisabled, className);
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.js



/**
 * ContextualMenuItem description
 */
var ContextualMenuItem = Object(Utilities["_10" /* styled */])(ContextualMenuItem_base_ContextualMenuItemBase, getItemStyles, undefined, { scope: 'ContextualMenuItem' });

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuItemWrapper.js


var ContextualMenuItemWrapper_ContextualMenuItemWrapper = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](ContextualMenuItemWrapper, _super);
    function ContextualMenuItemWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onItemMouseEnter = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
            if (onItemMouseEnter) {
                onItemMouseEnter(item, ev, ev.currentTarget);
            }
        };
        _this._onItemClick = function (ev) {
            var _a = _this.props, item = _a.item, onItemClickBase = _a.onItemClickBase;
            if (onItemClickBase) {
                onItemClickBase(item, ev, ev.currentTarget);
            }
        };
        _this._onItemMouseLeave = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseLeave = _a.onItemMouseLeave;
            if (onItemMouseLeave) {
                onItemMouseLeave(item, ev);
            }
        };
        _this._onItemKeyDown = function (ev) {
            var _a = _this.props, item = _a.item, onItemKeyDown = _a.onItemKeyDown;
            if (onItemKeyDown) {
                onItemKeyDown(item, ev);
            }
        };
        _this._onItemMouseMove = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
            if (onItemMouseMove) {
                onItemMouseMove(item, ev, ev.currentTarget);
            }
        };
        _this._getSubMenuId = function (item) {
            var getSubMenuId = _this.props.getSubMenuId;
            if (getSubMenuId) {
                return getSubMenuId(item);
            }
        };
        _this._getSubmenuTarget = function () {
            return undefined;
        };
        return _this;
    }
    return ContextualMenuItemWrapper;
}(Utilities["a" /* BaseComponent */]));


// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/KeytipData.js + 5 modules
var KeytipData = __webpack_require__(52);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuAnchor.js







var ContextualMenuAnchor_ContextualMenuAnchor = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](ContextualMenuAnchor, _super);
    function ContextualMenuAnchor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._anchor = FakeReact["createRef"]();
        _this._getSubmenuTarget = function () {
            return _this._anchor.current ? _this._anchor.current : undefined;
        };
        _this._onItemClick = function (ev) {
            var _a = _this.props, item = _a.item, onItemClick = _a.onItemClick;
            if (onItemClick) {
                onItemClick(item, ev);
            }
        };
        return _this;
    }
    ContextualMenuAnchor.prototype.render = function () {
        var _this = this;
        var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? ContextualMenuItem : _b, expandedMenuItemKey = _a.expandedMenuItemKey, onItemClick = _a.onItemClick, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
        var anchorRel = item.rel;
        if (item.target && item.target.toLowerCase() === '_blank') {
            anchorRel = anchorRel ? anchorRel : 'nofollow noopener noreferrer'; // Safe default to prevent tabjacking
        }
        var subMenuId = this._getSubMenuId(item);
        var itemHasSubmenu = hasSubmenu(item);
        var nativeProps = Object(Utilities["I" /* getNativeProps */])(item, Utilities["i" /* anchorProperties */]);
        var disabled = isItemDisabled(item);
        var itemProps = item.itemProps;
        var keytipProps = item.keytipProps;
        if (keytipProps && itemHasSubmenu) {
            keytipProps = tslib_es6["a" /* __assign */]({}, keytipProps, { hasMenu: true });
        }
        return (FakeReact["createElement"]("div", null,
            FakeReact["createElement"](KeytipData["a" /* KeytipData */], { keytipProps: item.keytipProps, ariaDescribedBy: nativeProps['aria-describedby'], disabled: disabled }, function (keytipAttributes) { return (FakeReact["createElement"]("a", tslib_es6["a" /* __assign */]({}, nativeProps, keytipAttributes, { ref: _this._anchor, href: item.href, target: item.target, rel: anchorRel, className: classNames.root, role: "menuitem", "aria-owns": item.key === expandedMenuItemKey ? subMenuId : undefined, "aria-haspopup": itemHasSubmenu || undefined, "aria-expanded": itemHasSubmenu ? item.key === expandedMenuItemKey : undefined, "aria-posinset": focusableElementIndex + 1, "aria-setsize": totalItemCount, "aria-disabled": isItemDisabled(item), style: item.style, onClick: _this._onItemClick, onMouseEnter: _this._onItemMouseEnter, onMouseLeave: _this._onItemMouseLeave, onMouseMove: _this._onItemMouseMove, onKeyDown: itemHasSubmenu ? _this._onItemKeyDown : null }),
                FakeReact["createElement"](ChildrenRenderer, tslib_es6["a" /* __assign */]({ componentRef: item.componentRef, item: item, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined, hasIcons: hasIcons, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: _this._getSubmenuTarget }, itemProps)))); })));
    };
    return ContextualMenuAnchor;
}(ContextualMenuItemWrapper_ContextualMenuItemWrapper));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuButton.js







var ContextualMenuButton_ContextualMenuButton = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](ContextualMenuButton, _super);
    function ContextualMenuButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._btn = FakeReact["createRef"]();
        _this._getSubmenuTarget = function () {
            return _this._btn.current ? _this._btn.current : undefined;
        };
        return _this;
    }
    ContextualMenuButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? ContextualMenuItem : _b, expandedMenuItemKey = _a.expandedMenuItemKey, onItemMouseDown = _a.onItemMouseDown, onItemClick = _a.onItemClick, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
        var subMenuId = this._getSubMenuId(item);
        var isChecked = getIsChecked(item);
        var canCheck = isChecked !== null;
        var defaultRole = canCheck ? 'menuitemcheckbox' : 'menuitem';
        var itemHasSubmenu = hasSubmenu(item);
        var itemProps = item.itemProps, ariaLabel = item.ariaLabel;
        var buttonNativeProperties = Object(Utilities["I" /* getNativeProps */])(item, Utilities["l" /* buttonProperties */]);
        // Do not add the disabled attribute to the button so that it is focusable
        delete buttonNativeProperties.disabled;
        var itemButtonProperties = {
            className: classNames.root,
            onClick: this._onItemClick,
            onKeyDown: itemHasSubmenu ? this._onItemKeyDown : null,
            onMouseEnter: this._onItemMouseEnter,
            onMouseLeave: this._onItemMouseLeave,
            onMouseDown: function (ev) { return (onItemMouseDown ? onItemMouseDown(item, ev) : undefined); },
            onMouseMove: this._onItemMouseMove,
            href: item.href,
            title: item.title,
            'aria-label': ariaLabel,
            'aria-haspopup': itemHasSubmenu || undefined,
            'aria-owns': item.key === expandedMenuItemKey ? subMenuId : undefined,
            'aria-expanded': itemHasSubmenu ? item.key === expandedMenuItemKey : undefined,
            'aria-checked': canCheck ? !!isChecked : undefined,
            'aria-posinset': focusableElementIndex + 1,
            'aria-setsize': totalItemCount,
            'aria-disabled': isItemDisabled(item),
            role: item.role || defaultRole,
            style: item.style
        };
        var keytipProps = item.keytipProps;
        if (keytipProps && itemHasSubmenu) {
            keytipProps = tslib_es6["a" /* __assign */]({}, keytipProps, { hasMenu: true });
        }
        return (FakeReact["createElement"](KeytipData["a" /* KeytipData */], { keytipProps: keytipProps, ariaDescribedBy: buttonNativeProperties['aria-describedby'], disabled: isItemDisabled(item) }, function (keytipAttributes) { return (FakeReact["createElement"]("button", tslib_es6["a" /* __assign */]({ ref: _this._btn }, buttonNativeProperties, itemButtonProperties, keytipAttributes),
            FakeReact["createElement"](ChildrenRenderer, tslib_es6["a" /* __assign */]({ componentRef: item.componentRef, item: item, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined, hasIcons: hasIcons, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: _this._getSubmenuTarget }, itemProps)))); }));
    };
    return ContextualMenuButton;
}(ContextualMenuItemWrapper_ContextualMenuItemWrapper));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.js



var VerticalDivider = function (props) {
    var theme = Object(Styling["s" /* getTheme */])();
    var classNames = props.getClassNames ? props.getClassNames(theme) : VerticalDivider_classNames_getDividerClassNames(theme);
    return (FakeReact["createElement"]("span", { className: classNames.wrapper },
        FakeReact["createElement"]("span", { className: classNames.divider })));
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Divider/index.js


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Divider.js


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuSplitButton.js









var TouchIdleDelay = 500; /* ms */
var ContextualMenuSplitButton_ContextualMenuSplitButton = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](ContextualMenuSplitButton, _super);
    function ContextualMenuSplitButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onItemKeyDown = function (ev) {
            var _a = _this.props, item = _a.item, onItemKeyDown = _a.onItemKeyDown;
            if (ev.which === Utilities["e" /* KeyCodes */].enter) {
                _this._executeItemClick(ev);
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (onItemKeyDown) {
                onItemKeyDown(item, ev);
            }
        };
        _this._getSubmenuTarget = function () {
            return _this._splitButton;
        };
        _this._onItemMouseEnterPrimary = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
            if (onItemMouseEnter) {
                onItemMouseEnter(tslib_es6["a" /* __assign */]({}, item, { subMenuProps: undefined, items: undefined }), ev, _this._splitButton);
            }
        };
        _this._onItemMouseEnterIcon = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
            if (onItemMouseEnter) {
                onItemMouseEnter(item, ev, _this._splitButton);
            }
        };
        _this._onItemMouseMovePrimary = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
            if (onItemMouseMove) {
                onItemMouseMove(tslib_es6["a" /* __assign */]({}, item, { subMenuProps: undefined, items: undefined }), ev, _this._splitButton);
            }
        };
        _this._onItemMouseMoveIcon = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
            if (onItemMouseMove) {
                onItemMouseMove(item, ev, _this._splitButton);
            }
        };
        _this._onIconItemClick = function (ev) {
            var _a = _this.props, item = _a.item, onItemClickBase = _a.onItemClickBase;
            if (onItemClickBase) {
                onItemClickBase(item, ev, (_this._splitButton ? _this._splitButton : ev.currentTarget));
            }
        };
        _this._executeItemClick = function (ev) {
            var _a = _this.props, item = _a.item, executeItemClick = _a.executeItemClick, onItemClick = _a.onItemClick;
            if (item.disabled || item.isDisabled) {
                return;
            }
            if (_this._processingTouch && onItemClick) {
                return onItemClick(item, ev);
            }
            if (executeItemClick) {
                executeItemClick(item, ev);
            }
        };
        _this._onTouchStart = function (ev) {
            if (_this._splitButton && !('onpointerdown' in _this._splitButton)) {
                _this._handleTouchAndPointerEvent(ev);
            }
        };
        _this._onPointerDown = function (ev) {
            if (ev.pointerType === 'touch') {
                _this._handleTouchAndPointerEvent(ev);
                ev.preventDefault();
                ev.stopImmediatePropagation();
            }
        };
        return _this;
    }
    ContextualMenuSplitButton.prototype.componentDidMount = function () {
        if (this._splitButton && 'onpointerdown' in this._splitButton) {
            this._events.on(this._splitButton, 'pointerdown', this._onPointerDown, true);
        }
    };
    ContextualMenuSplitButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, onItemMouseLeave = _a.onItemMouseLeave, expandedMenuItemKey = _a.expandedMenuItemKey;
        var itemHasSubmenu = hasSubmenu(item);
        var keytipProps = item.keytipProps;
        if (keytipProps) {
            keytipProps = tslib_es6["a" /* __assign */]({}, keytipProps, { hasMenu: true });
        }
        return (FakeReact["createElement"](KeytipData["a" /* KeytipData */], { keytipProps: keytipProps, disabled: isItemDisabled(item) }, function (keytipAttributes) { return (FakeReact["createElement"]("div", { "data-ktp-target": keytipAttributes['data-ktp-target'], ref: function (splitButton) { return (_this._splitButton = splitButton); }, role: 'menuitem', "aria-label": item.ariaLabel, className: classNames.splitContainer, "aria-disabled": isItemDisabled(item), "aria-expanded": itemHasSubmenu ? item.key === expandedMenuItemKey : undefined, "aria-haspopup": true, "aria-describedby": Object(Utilities["_2" /* mergeAriaAttributeValues */])(item.ariaDescription, keytipAttributes['aria-describedby']), "aria-checked": item.isChecked || item.checked, "aria-posinset": focusableElementIndex + 1, "aria-setsize": totalItemCount, onMouseEnter: _this._onItemMouseEnterPrimary, onMouseLeave: onItemMouseLeave ? onItemMouseLeave.bind(_this, tslib_es6["a" /* __assign */]({}, item, { subMenuProps: null, items: null })) : undefined, onMouseMove: _this._onItemMouseMovePrimary, onKeyDown: _this._onItemKeyDown, onClick: _this._executeItemClick, onTouchStart: _this._onTouchStart, tabIndex: 0, "data-is-focusable": true, "aria-roledescription": item['aria-roledescription'] },
            _this._renderSplitPrimaryButton(item, classNames, index, hasCheckmarks, hasIcons),
            _this._renderSplitDivider(item),
            _this._renderSplitIconButton(item, classNames, index, keytipAttributes))); }));
    };
    ContextualMenuSplitButton.prototype._renderSplitPrimaryButton = function (item, classNames, index, hasCheckmarks, hasIcons) {
        var _a = this.props, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? ContextualMenuItem : _b, onItemClick = _a.onItemClick;
        var itemProps = {
            key: item.key,
            disabled: isItemDisabled(item) || item.primaryDisabled,
            name: item.name,
            text: item.text || item.name,
            className: classNames.splitPrimary,
            canCheck: item.canCheck,
            isChecked: item.isChecked,
            checked: item.checked,
            iconProps: item.iconProps,
            'data-is-focusable': false,
            'aria-hidden': true
        };
        var itemComponentProps = item.itemProps;
        return (FakeReact["createElement"]("button", tslib_es6["a" /* __assign */]({}, Object(Utilities["I" /* getNativeProps */])(itemProps, Utilities["l" /* buttonProperties */])),
            FakeReact["createElement"](ChildrenRenderer, tslib_es6["a" /* __assign */]({ "data-is-focusable": false, item: itemProps, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined, hasIcons: hasIcons }, itemComponentProps))));
    };
    ContextualMenuSplitButton.prototype._renderSplitDivider = function (item) {
        var getDividerClassNames = item.getSplitButtonVerticalDividerClassNames || getSplitButtonVerticalDividerClassNames;
        return FakeReact["createElement"](VerticalDivider, { getClassNames: getDividerClassNames });
    };
    ContextualMenuSplitButton.prototype._renderSplitIconButton = function (item, classNames, index, keytipAttributes) {
        var _a = this.props, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? ContextualMenuItem : _b, onItemMouseLeave = _a.onItemMouseLeave, onItemMouseDown = _a.onItemMouseDown, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
        var itemProps = {
            onClick: this._onIconItemClick,
            disabled: isItemDisabled(item),
            className: classNames.splitMenu,
            subMenuProps: item.subMenuProps,
            submenuIconProps: item.submenuIconProps,
            split: true,
            key: item.key
        };
        var buttonProps = Object(Utilities["k" /* assign */])({}, Object(Utilities["I" /* getNativeProps */])(itemProps, Utilities["l" /* buttonProperties */]), {
            onMouseEnter: this._onItemMouseEnterIcon,
            onMouseLeave: onItemMouseLeave ? onItemMouseLeave.bind(this, item) : undefined,
            onMouseDown: function (ev) { return (onItemMouseDown ? onItemMouseDown(item, ev) : undefined); },
            onMouseMove: this._onItemMouseMoveIcon,
            'data-is-focusable': false,
            'data-ktp-execute-target': keytipAttributes['data-ktp-execute-target'],
            'aria-hidden': true
        });
        var itemComponentProps = item.itemProps;
        return (FakeReact["createElement"]("button", tslib_es6["a" /* __assign */]({}, buttonProps),
            FakeReact["createElement"](ChildrenRenderer, tslib_es6["a" /* __assign */]({ componentRef: item.componentRef, item: itemProps, classNames: classNames, index: index, hasIcons: false, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: this._getSubmenuTarget }, itemComponentProps))));
    };
    ContextualMenuSplitButton.prototype._handleTouchAndPointerEvent = function (ev) {
        var _this = this;
        var onTap = this.props.onTap;
        if (onTap) {
            onTap(ev);
        }
        // If we already have an existing timeout from a previous touch/pointer event
        // cancel that timeout so we can set a new one.
        if (this._lastTouchTimeoutId) {
            this._async.clearTimeout(this._lastTouchTimeoutId);
            this._lastTouchTimeoutId = undefined;
        }
        this._processingTouch = true;
        this._lastTouchTimeoutId = this._async.setTimeout(function () {
            _this._processingTouch = false;
            _this._lastTouchTimeoutId = undefined;
        }, TouchIdleDelay);
    };
    return ContextualMenuSplitButton;
}(ContextualMenuItemWrapper_ContextualMenuItemWrapper));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/index.js





// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.base.js















var ContextualMenu_base_getClassNames = Object(Utilities["m" /* classNamesFunction */])();
var getContextualMenuItemClassNames = Object(Utilities["m" /* classNamesFunction */])();
function getSubmenuItems(item) {
    return item.subMenuProps ? item.subMenuProps.items : item.items;
}
/**
 * Returns true if a list of menu items can contain a checkbox
 */
function canAnyMenuItemsCheck(items) {
    return items.some(function (item) {
        if (item.canCheck) {
            return true;
        }
        // If the item is a section, check if any of the items in the section can check.
        if (item.sectionProps && item.sectionProps.items.some(function (submenuItem) { return submenuItem.canCheck === true; })) {
            return true;
        }
        return false;
    });
}
var NavigationIdleDelay = 250 /* ms */;
var ContextualMenu_base_ContextualMenuBase = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](ContextualMenuBase, _super);
    function ContextualMenuBase(props) {
        var _this = _super.call(this, props) || this;
        _this._mounted = false;
        _this.dismiss = function (ev, dismissAll) {
            var onDismiss = _this.props.onDismiss;
            if (onDismiss) {
                onDismiss(ev, dismissAll);
            }
        };
        _this._onRenderMenuList = function (menuListProps, defaultRender) {
            var indexCorrection = 0;
            return (FakeReact["createElement"]("ul", { className: _this._classNames.list, onKeyDown: _this._onKeyDown, onKeyUp: _this._onKeyUp, role: "menu" }, menuListProps.items.map(function (item, index) {
                var menuItem = _this._renderMenuItem(item, index, indexCorrection, menuListProps.totalItemCount, menuListProps.hasCheckmarks, menuListProps.hasIcons);
                if (item.itemType !== ContextualMenuItemType.Divider && item.itemType !== ContextualMenuItemType.Header) {
                    var indexIncrease = item.customOnRenderListLength ? item.customOnRenderListLength : 1;
                    indexCorrection += indexIncrease;
                }
                return menuItem;
            })));
        };
        _this._onKeyDown = function (ev) {
            // Take note if we are processing an alt (option) or meta (command) keydown.
            // See comment in _shouldHandleKeyUp for reasoning.
            _this._lastKeyDownWasAltOrMeta = _this._isAltOrMeta(ev);
            // On Mac, pressing escape dismisses all levels of native context menus
            var dismissAllMenus = ev.which === Utilities["e" /* KeyCodes */].escape && (Object(Utilities["_0" /* isMac */])() || Object(Utilities["Z" /* isIOS */])());
            return _this._keyHandler(ev, _this._shouldHandleKeyDown, dismissAllMenus);
        };
        _this._shouldHandleKeyDown = function (ev) {
            return ev.which === Utilities["e" /* KeyCodes */].escape || _this._shouldCloseSubMenu(ev) || (ev.which === Utilities["e" /* KeyCodes */].up && (ev.altKey || ev.metaKey));
        };
        _this._onMenuFocusCapture = function (ev) {
            if (_this.props.delayUpdateFocusOnHover) {
                _this._shouldUpdateFocusOnMouseEvent = true;
            }
        };
        _this._onKeyUp = function (ev) {
            return _this._keyHandler(ev, _this._shouldHandleKeyUp, true /* dismissAllMenus */);
        };
        /**
         * We close the menu on key up only if ALL of the following are true:
         * - Most recent key down was alt or meta (command)
         * - The alt/meta key down was NOT followed by some other key (such as down/up arrow to
         *   expand/collapse the menu)
         * - We're not on a Mac (or iOS)
         *
         * This is because on Windows, pressing alt moves focus to the application menu bar or similar,
         * closing any open context menus. There is not a similar behavior on Macs.
         */
        _this._shouldHandleKeyUp = function (ev) {
            var keyPressIsAltOrMetaAlone = _this._lastKeyDownWasAltOrMeta && _this._isAltOrMeta(ev);
            _this._lastKeyDownWasAltOrMeta = false;
            return !!keyPressIsAltOrMetaAlone && !(Object(Utilities["Z" /* isIOS */])() || Object(Utilities["_0" /* isMac */])());
        };
        /**
         * Calls `shouldHandleKey` to determine whether the keyboard event should be handled;
         * if so, stops event propagation and dismisses menu(s).
         * @param ev The keyboard event.
         * @param shouldHandleKey Returns whether we should handle this keyboard event.
         * @param dismissAllMenus If true, dismiss all menus. Otherwise, dismiss only the current menu.
         * Only does anything if `shouldHandleKey` returns true.
         * @returns Whether the event was handled.
         */
        _this._keyHandler = function (ev, shouldHandleKey, dismissAllMenus) {
            var handled = false;
            if (shouldHandleKey(ev)) {
                _this._isFocusingPreviousElement = true;
                ev.preventDefault();
                ev.stopPropagation();
                _this.dismiss(ev, dismissAllMenus);
                handled = true;
            }
            return handled;
        };
        /**
         * Checks if the submenu should be closed
         */
        _this._shouldCloseSubMenu = function (ev) {
            var submenuCloseKey = Object(Utilities["M" /* getRTL */])() ? Utilities["e" /* KeyCodes */].right : Utilities["e" /* KeyCodes */].left;
            if (ev.which !== submenuCloseKey || !_this.props.isSubMenu) {
                return false;
            }
            return (_this._adjustedFocusZoneProps.direction === FocusZone["b" /* FocusZoneDirection */].vertical ||
                (!!_this._adjustedFocusZoneProps.checkForNoWrap && !Object(Utilities["_9" /* shouldWrapFocus */])(ev.target, 'data-no-horizontal-wrap')));
        };
        _this._onMenuKeyDown = function (ev) {
            // Mark as handled if onKeyDown returns true (for handling collapse cases)
            // or if we are attempting to expand a submenu
            var handled = _this._onKeyDown(ev);
            if (handled || !_this._host) {
                return;
            }
            // If we have a modifier key being pressed, we do not want to move focus.
            // Otherwise, handle up and down keys.
            var hasModifier = !!(ev.altKey || ev.metaKey);
            var isUp = ev.which === Utilities["e" /* KeyCodes */].up;
            var isDown = ev.which === Utilities["e" /* KeyCodes */].down;
            if (!hasModifier && (isUp || isDown)) {
                var elementToFocus = isUp
                    ? Object(Utilities["G" /* getLastFocusable */])(_this._host, _this._host.lastChild, true)
                    : Object(Utilities["C" /* getFirstFocusable */])(_this._host, _this._host.firstChild, true);
                if (elementToFocus) {
                    elementToFocus.focus();
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        };
        /**
         * Scroll handler for the callout to make sure the mouse events
         * for updating focus are not interacting during scroll
         */
        _this._onScroll = function () {
            if (!_this._isScrollIdle && _this._scrollIdleTimeoutId !== undefined) {
                _this._async.clearTimeout(_this._scrollIdleTimeoutId);
                _this._scrollIdleTimeoutId = undefined;
            }
            else {
                _this._isScrollIdle = false;
            }
            _this._scrollIdleTimeoutId = _this._async.setTimeout(function () {
                _this._isScrollIdle = true;
            }, NavigationIdleDelay);
        };
        _this._onItemMouseEnterBase = function (item, ev, target) {
            if (_this._shouldIgnoreMouseEvent()) {
                return;
            }
            _this._updateFocusOnMouseEvent(item, ev, target);
        };
        _this._onItemMouseMoveBase = function (item, ev, target) {
            var targetElement = ev.currentTarget;
            // Always do this check to make sure we record a mouseMove if needed (even if we are timed out)
            if (_this._shouldUpdateFocusOnMouseEvent) {
                _this._gotMouseMove = true;
            }
            else {
                return;
            }
            if (!_this._isScrollIdle ||
                _this._enterTimerId !== undefined ||
                targetElement === _this._targetWindow.document.activeElement) {
                return;
            }
            _this._updateFocusOnMouseEvent(item, ev, target);
        };
        _this._onMouseItemLeave = function (item, ev) {
            if (_this._shouldIgnoreMouseEvent()) {
                return;
            }
            if (_this._enterTimerId !== undefined) {
                _this._async.clearTimeout(_this._enterTimerId);
                _this._enterTimerId = undefined;
            }
            if (_this.state.expandedMenuItemKey !== undefined) {
                return;
            }
            /**
             * IE11 focus() method forces parents to scroll to top of element.
             * Edge and IE expose a setActive() function for focusable divs that
             * sets the page focus but does not scroll the parent element.
             */
            if (_this._host.setActive) {
                try {
                    _this._host.setActive();
                }
                catch (e) {
                    /* no-op */
                }
            }
            else {
                _this._host.focus();
            }
        };
        _this._onItemMouseDown = function (item, ev) {
            if (item.onMouseDown) {
                item.onMouseDown(item, ev);
            }
        };
        _this._onItemClick = function (item, ev) {
            _this._onItemClickBase(item, ev, ev.currentTarget);
        };
        _this._onItemClickBase = function (item, ev, target) {
            var items = getSubmenuItems(item);
            // Cancel a async menu item hover timeout action from being taken and instead
            // just trigger the click event instead.
            _this._cancelSubMenuTimer();
            if (!hasSubmenu(item) && (!items || !items.length)) {
                // This is an item without a menu. Click it.
                _this._executeItemClick(item, ev);
            }
            else {
                if (item.key !== _this.state.expandedMenuItemKey) {
                    // This has a collapsed sub menu. Expand it.
                    _this.setState({
                        // When Edge + Narrator are used together (regardless of if the button is in a form or not), pressing
                        // "Enter" fires this method and not _onMenuKeyDown. Checking ev.nativeEvent.detail differentiates
                        // between a real click event and a keypress event (detail should be the number of mouse clicks).
                        // ...Plot twist! For a real click event in IE 11, detail is always 0 (Edge sets it properly to 1).
                        // So we also check the pointerType property, which both Edge and IE set to "mouse" for real clicks
                        // and "" for pressing "Enter" with Narrator on.
                        expandedByMouseClick: ev.nativeEvent.detail !== 0 || ev.nativeEvent.pointerType === 'mouse'
                    });
                    _this._onItemSubMenuExpand(item, target);
                }
            }
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onAnchorClick = function (item, ev) {
            _this._executeItemClick(item, ev);
            ev.stopPropagation();
        };
        _this._executeItemClick = function (item, ev) {
            if (item.disabled || item.isDisabled) {
                return;
            }
            var dismiss = false;
            if (item.onClick) {
                dismiss = !!item.onClick(ev, item);
            }
            else if (_this.props.onItemClick) {
                dismiss = !!_this.props.onItemClick(ev, item);
            }
            (dismiss || !ev.defaultPrevented) && _this.dismiss(ev, true);
        };
        _this._onItemKeyDown = function (item, ev) {
            var openKey = Object(Utilities["M" /* getRTL */])() ? Utilities["e" /* KeyCodes */].left : Utilities["e" /* KeyCodes */].right;
            if (!item.disabled &&
                (ev.which === openKey || ev.which === Utilities["e" /* KeyCodes */].enter || (ev.which === Utilities["e" /* KeyCodes */].down && (ev.altKey || ev.metaKey)))) {
                _this.setState({
                    expandedByMouseClick: false
                });
                _this._onItemSubMenuExpand(item, ev.currentTarget);
                ev.preventDefault();
            }
        };
        // Cancel a async menu item hover timeout action from being taken and instead
        // do new upcoming behavior
        _this._cancelSubMenuTimer = function () {
            if (_this._enterTimerId !== undefined) {
                _this._async.clearTimeout(_this._enterTimerId);
                _this._enterTimerId = undefined;
            }
        };
        _this._onItemSubMenuExpand = function (item, target) {
            if (_this.state.expandedMenuItemKey !== item.key) {
                if (_this.state.expandedMenuItemKey) {
                    _this._onSubMenuDismiss();
                }
                // Focus the target to ensure when we close it, we're focusing on the correct element.
                target.focus();
                _this.setState({
                    expandedMenuItemKey: item.key,
                    submenuTarget: target
                });
            }
        };
        /**
         * This function is called ASYNCHRONOUSLY, and so there is a chance it is called
         * after the component is unmounted. The _mounted property is added to prevent
         * from calling setState() after unmount. Do NOT copy this pattern in synchronous
         * code.
         */
        _this._onSubMenuDismiss = function (ev, dismissAll) {
            if (dismissAll) {
                _this.dismiss(ev, dismissAll);
            }
            else if (_this._mounted) {
                _this.setState({
                    dismissedMenuItemKey: _this.state.expandedMenuItemKey,
                    expandedMenuItemKey: undefined,
                    submenuTarget: undefined
                });
            }
        };
        _this._getSubMenuId = function (item) {
            var subMenuId = _this.state.subMenuId;
            if (item.subMenuProps && item.subMenuProps.id) {
                subMenuId = item.subMenuProps.id;
            }
            return subMenuId;
        };
        _this._onPointerAndTouchEvent = function (ev) {
            _this._cancelSubMenuTimer();
        };
        _this.state = {
            contextualMenuItems: undefined,
            subMenuId: Object(Utilities["F" /* getId */])('ContextualMenu')
        };
        _this._warnDeprecations({
            getMenuClassNames: 'styles'
        });
        _this._isFocusingPreviousElement = false;
        _this._isScrollIdle = true;
        _this._shouldUpdateFocusOnMouseEvent = !_this.props.delayUpdateFocusOnHover;
        _this._gotMouseMove = false;
        return _this;
    }
    ContextualMenuBase.prototype.componentWillUpdate = function (newProps) {
        if (newProps.target !== this.props.target) {
            var newTarget = newProps.target;
            this._setTargetWindowAndElement(newTarget);
        }
        if (newProps.hidden !== this.props.hidden) {
            if (newProps.hidden) {
                this._onMenuClosed();
            }
            else {
                this._onMenuOpened();
                this._previousActiveElement = this._targetWindow ? this._targetWindow.document.activeElement : null;
            }
        }
        if (newProps.delayUpdateFocusOnHover !== this.props.delayUpdateFocusOnHover) {
            // update shouldUpdateFocusOnMouseEvent to follow what was passed in
            this._shouldUpdateFocusOnMouseEvent = !newProps.delayUpdateFocusOnHover;
            // If shouldUpdateFocusOnMouseEvent is false, we need to reset gotMouseMove to false
            this._gotMouseMove = this._shouldUpdateFocusOnMouseEvent && this._gotMouseMove;
        }
    };
    // Invoked once, both on the client and server, immediately before the initial rendering occurs.
    ContextualMenuBase.prototype.componentWillMount = function () {
        var target = this.props.target;
        this._setTargetWindowAndElement(target);
        if (!this.props.hidden) {
            this._previousActiveElement = this._targetWindow ? this._targetWindow.document.activeElement : null;
        }
    };
    // Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
    ContextualMenuBase.prototype.componentDidMount = function () {
        if (!this.props.hidden) {
            this._onMenuOpened();
        }
        this._mounted = true;
    };
    // Invoked immediately before a component is unmounted from the DOM.
    ContextualMenuBase.prototype.componentWillUnmount = function () {
        var _this = this;
        if (this._isFocusingPreviousElement && this._previousActiveElement) {
            // This slight delay is required so that we can unwind the stack, const react try to mess with focus, and then
            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
            // to reset the focus back to the thing it thinks should have been focused.
            // Note: Cannot be replaced by this._async.setTimout because those will be removed by the time this is called.
            setTimeout(function () {
                _this._previousActiveElement && _this._previousActiveElement.focus();
            }, 0);
        }
        if (this.props.onMenuDismissed) {
            this.props.onMenuDismissed(this.props);
        }
        this._events.dispose();
        this._async.dispose();
        this._mounted = false;
    };
    ContextualMenuBase.prototype.render = function () {
        var _this = this;
        var isBeakVisible = this.props.isBeakVisible;
        var _a = this.props, items = _a.items, labelElementId = _a.labelElementId, id = _a.id, className = _a.className, beakWidth = _a.beakWidth, directionalHint = _a.directionalHint, directionalHintForRTL = _a.directionalHintForRTL, alignTargetEdge = _a.alignTargetEdge, gapSpace = _a.gapSpace, coverTarget = _a.coverTarget, ariaLabel = _a.ariaLabel, doNotLayer = _a.doNotLayer, target = _a.target, bounds = _a.bounds, useTargetWidth = _a.useTargetWidth, useTargetAsMinWidth = _a.useTargetAsMinWidth, directionalHintFixed = _a.directionalHintFixed, shouldFocusOnMount = _a.shouldFocusOnMount, shouldFocusOnContainer = _a.shouldFocusOnContainer, title = _a.title, styles = _a.styles, theme = _a.theme, calloutProps = _a.calloutProps, _b = _a.onRenderSubMenu, onRenderSubMenu = _b === void 0 ? this._onRenderSubMenu : _b, _c = _a.onRenderMenuList, onRenderMenuList = _c === void 0 ? this._onRenderMenuList : _c, focusZoneProps = _a.focusZoneProps, getMenuClassNames = _a.getMenuClassNames;
        this._classNames = getMenuClassNames
            ? getMenuClassNames(theme, className)
            : ContextualMenu_base_getClassNames(styles, {
                theme: theme,
                className: className
            });
        var hasIcons = itemsHaveIcons(items);
        function itemsHaveIcons(contextualMenuItems) {
            for (var _i = 0, contextualMenuItems_1 = contextualMenuItems; _i < contextualMenuItems_1.length; _i++) {
                var item = contextualMenuItems_1[_i];
                if (!!item.iconProps) {
                    return true;
                }
                if (item.itemType === ContextualMenuItemType.Section && item.sectionProps && itemsHaveIcons(item.sectionProps.items)) {
                    return true;
                }
            }
            return false;
        }
        this._adjustedFocusZoneProps = tslib_es6["a" /* __assign */]({}, focusZoneProps, { direction: this._getFocusZoneDirection() });
        var hasCheckmarks = canAnyMenuItemsCheck(items);
        var submenuProps = this.state.expandedMenuItemKey ? this._getSubmenuProps() : null;
        isBeakVisible = isBeakVisible === undefined ? this.props.responsiveMode <= withResponsiveMode["a" /* ResponsiveMode */].medium : isBeakVisible;
        /**
         * When useTargetWidth is true, get the width of the target element and apply it for the context menu container
         */
        var contextMenuStyle;
        var targetAsHtmlElement = this._target;
        if ((useTargetWidth || useTargetAsMinWidth) && targetAsHtmlElement && targetAsHtmlElement.offsetWidth) {
            var targetBoundingRect = targetAsHtmlElement.getBoundingClientRect();
            var targetWidth = targetBoundingRect.width - 2 /* Accounts for 1px border */;
            if (useTargetWidth) {
                contextMenuStyle = {
                    width: targetWidth
                };
            }
            else if (useTargetAsMinWidth) {
                contextMenuStyle = {
                    minWidth: targetWidth
                };
            }
        }
        // The menu should only return if items were provided, if no items were provided then it should not appear.
        if (items && items.length > 0) {
            var totalItemCount = 0;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                if (item.itemType !== ContextualMenuItemType.Divider && item.itemType !== ContextualMenuItemType.Header) {
                    var itemCount = item.customOnRenderListLength ? item.customOnRenderListLength : 1;
                    totalItemCount += itemCount;
                }
            }
            var calloutStyles = !getMenuClassNames && this._classNames.subComponentStyles
                ? this._classNames.subComponentStyles.callout
                : undefined;
            return (FakeReact["createElement"](Callout["a" /* Callout */], tslib_es6["a" /* __assign */]({ styles: calloutStyles }, calloutProps, { target: target, isBeakVisible: isBeakVisible, beakWidth: beakWidth, directionalHint: directionalHint, directionalHintForRTL: directionalHintForRTL, gapSpace: gapSpace, coverTarget: coverTarget, doNotLayer: doNotLayer, className: Object(Utilities["o" /* css */])('ms-ContextualMenu-Callout', calloutProps && calloutProps.className), setInitialFocus: shouldFocusOnMount, onDismiss: this.props.onDismiss, onScroll: this._onScroll, bounds: bounds, directionalHintFixed: directionalHintFixed, alignTargetEdge: alignTargetEdge, hidden: this.props.hidden }),
                FakeReact["createElement"]("div", { role: "menu", "aria-label": ariaLabel, "aria-labelledby": labelElementId, style: contextMenuStyle, ref: function (host) { return (_this._host = host); }, id: id, className: this._classNames.container, tabIndex: shouldFocusOnContainer ? 0 : -1, onKeyDown: this._onMenuKeyDown, onKeyUp: this._onKeyUp, onFocusCapture: this._onMenuFocusCapture },
                    title && FakeReact["createElement"]("div", { className: this._classNames.title },
                        " ",
                        title,
                        " "),
                    items && items.length ? (FakeReact["createElement"](FocusZone["a" /* FocusZone */], tslib_es6["a" /* __assign */]({}, this._adjustedFocusZoneProps, { className: this._classNames.root, isCircularNavigation: true, handleTabKey: FocusZone["c" /* FocusZoneTabbableElements */].all }), onRenderMenuList({
                        items: items,
                        totalItemCount: totalItemCount,
                        hasCheckmarks: hasCheckmarks,
                        hasIcons: hasIcons
                    }, this._onRenderMenuList))) : null,
                    submenuProps && onRenderSubMenu(submenuProps, this._onRenderSubMenu))));
        }
        else {
            return null;
        }
    };
    ContextualMenuBase.prototype._onMenuOpened = function () {
        this._events.on(this._targetWindow, 'resize', this.dismiss);
        this._shouldUpdateFocusOnMouseEvent = !this.props.delayUpdateFocusOnHover;
        this._gotMouseMove = false;
        this.props.onMenuOpened && this.props.onMenuOpened(this.props);
    };
    ContextualMenuBase.prototype._onMenuClosed = function () {
        var _this = this;
        this._events.off(this._targetWindow, 'resize', this.dismiss);
        this._previousActiveElement &&
            this._async.setTimeout(function () {
                _this._previousActiveElement && _this._previousActiveElement.focus();
            }, 0);
        this._shouldUpdateFocusOnMouseEvent = !this.props.delayUpdateFocusOnHover;
    };
    /**
     * Gets the focusZoneDirection by using the arrowDirection if specified,
     * the direction specificed in the focusZoneProps, or defaults to FocusZoneDirection.vertical
     */
    ContextualMenuBase.prototype._getFocusZoneDirection = function () {
        var focusZoneProps = this.props.focusZoneProps;
        return focusZoneProps && focusZoneProps.direction !== undefined ? focusZoneProps.direction : FocusZone["b" /* FocusZoneDirection */].vertical;
    };
    ContextualMenuBase.prototype._onRenderSubMenu = function (subMenuProps) {
        return FakeReact["createElement"](ContextualMenu, tslib_es6["a" /* __assign */]({}, subMenuProps));
    };
    ContextualMenuBase.prototype._renderMenuItem = function (item, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var renderedItems = [];
        var iconProps = item.iconProps || { iconName: 'None' };
        var getItemClassNames = item.getItemClassNames, itemProps = item.itemProps;
        var styles = itemProps ? itemProps.styles : undefined;
        // We only send a dividerClassName when the item to be rendered is a divider. For all other cases, the default divider style is used.
        var dividerClassName = item.itemType === ContextualMenuItemType.Divider ? item.className : undefined;
        var subMenuIconClassName = item.submenuIconProps ? item.submenuIconProps.className : '';
        var itemClassNames;
        // IContextualMenuItem#getItemClassNames for backwards compatibility
        // otherwise uses mergeStyles for class names.
        if (getItemClassNames) {
            itemClassNames = getItemClassNames(this.props.theme, isItemDisabled(item), this.state.expandedMenuItemKey === item.key, !!getIsChecked(item), !!item.href, iconProps.iconName !== 'None', item.className, dividerClassName, iconProps.className, subMenuIconClassName, item.primaryDisabled);
        }
        else {
            var itemStyleProps = {
                theme: this.props.theme,
                disabled: isItemDisabled(item),
                expanded: this.state.expandedMenuItemKey === item.key,
                checked: !!getIsChecked(item),
                isAnchorLink: !!item.href,
                knownIcon: iconProps.iconName !== 'None',
                itemClassName: item.className,
                dividerClassName: dividerClassName,
                iconClassName: iconProps.className,
                subMenuClassName: subMenuIconClassName,
                primaryDisabled: item.primaryDisabled
            };
            var menuItemStyles = this._classNames.subComponentStyles
                ? this._classNames.subComponentStyles.menuItem
                : undefined;
            // We need to generate default styles then override if styles are provided
            // since the ContextualMenu currently handles item classNames.
            itemClassNames = Object(Styling["v" /* mergeStyleSets */])(getContextualMenuItemClassNames(getItemStyles, itemStyleProps), getContextualMenuItemClassNames(menuItemStyles, itemStyleProps), getContextualMenuItemClassNames(styles, itemStyleProps));
        }
        if (item.text === '-' || item.name === '-') {
            item.itemType = ContextualMenuItemType.Divider;
        }
        switch (item.itemType) {
            case ContextualMenuItemType.Divider:
                renderedItems.push(this._renderSeparator(index, itemClassNames));
                break;
            case ContextualMenuItemType.Header:
                renderedItems.push(this._renderSeparator(index, itemClassNames));
                var headerItem = this._renderHeaderMenuItem(item, itemClassNames, index, hasCheckmarks, hasIcons);
                renderedItems.push(this._renderListItem(headerItem, item.key || index, itemClassNames, item.title));
                break;
            case ContextualMenuItemType.Section:
                renderedItems.push(this._renderSectionItem(item, itemClassNames, index, hasCheckmarks, hasIcons));
                break;
            default:
                var menuItem = this._renderNormalItem(item, itemClassNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
                renderedItems.push(this._renderListItem(menuItem, item.key || index, itemClassNames, item.title));
                break;
        }
        return renderedItems;
    };
    ContextualMenuBase.prototype._renderSectionItem = function (sectionItem, menuClassNames, index, hasCheckmarks, hasIcons) {
        var _this = this;
        var sectionProps = sectionItem.sectionProps;
        if (!sectionProps) {
            return;
        }
        var headerItem;
        if (sectionProps.title) {
            var headerContextualMenuItem = {
                key: "section-" + sectionProps.title + "-title",
                itemType: ContextualMenuItemType.Header,
                text: sectionProps.title
            };
            headerItem = this._renderHeaderMenuItem(headerContextualMenuItem, menuClassNames, index, hasCheckmarks, hasIcons);
        }
        if (sectionProps.items && sectionProps.items.length > 0) {
            return (FakeReact["createElement"]("li", { role: "presentation", key: sectionProps.key || sectionItem.key || "section-" + index },
                FakeReact["createElement"]("div", { role: "group" },
                    FakeReact["createElement"]("ul", { className: this._classNames.list },
                        sectionProps.topDivider && this._renderSeparator(index, menuClassNames, true, true),
                        headerItem && this._renderListItem(headerItem, sectionItem.key || index, menuClassNames, sectionItem.title),
                        sectionProps.items.map(function (contextualMenuItem, itemsIndex) {
                            return _this._renderMenuItem(contextualMenuItem, itemsIndex, itemsIndex, sectionProps.items.length, hasCheckmarks, hasIcons);
                        }),
                        sectionProps.bottomDivider && this._renderSeparator(index, menuClassNames, false, true)))));
        }
    };
    ContextualMenuBase.prototype._renderListItem = function (content, key, classNames, title) {
        return (FakeReact["createElement"]("li", { role: "presentation", title: title, key: key, className: classNames.item }, content));
    };
    ContextualMenuBase.prototype._renderSeparator = function (index, classNames, top, fromSection) {
        if (fromSection || index > 0) {
            return (FakeReact["createElement"]("li", { role: "separator", key: 'separator-' + index + (top === undefined ? '' : top ? '-top' : '-bottom'), className: classNames.divider, "aria-hidden": "true" }));
        }
        return null;
    };
    ContextualMenuBase.prototype._renderNormalItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        if (item.onRender) {
            return item.onRender(tslib_es6["a" /* __assign */]({ 'aria-posinset': focusableElementIndex + 1, 'aria-setsize': totalItemCount }, item), this.dismiss);
        }
        if (item.href) {
            return this._renderAnchorMenuItem(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
        }
        if (item.split && hasSubmenu(item)) {
            return this._renderSplitButton(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
        }
        return this._renderButtonItem(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
    };
    ContextualMenuBase.prototype._renderHeaderMenuItem = function (item, classNames, index, hasCheckmarks, hasIcons) {
        var _a = this.props.contextualMenuItemAs, ChildrenRenderer = _a === void 0 ? ContextualMenuItem : _a;
        var itemProps = item.itemProps;
        var divHtmlProperties = itemProps && Object(Utilities["I" /* getNativeProps */])(itemProps, Utilities["r" /* divProperties */]);
        return (FakeReact["createElement"]("div", tslib_es6["a" /* __assign */]({ className: this._classNames.header }, divHtmlProperties, { style: item.style }),
            FakeReact["createElement"](ChildrenRenderer, tslib_es6["a" /* __assign */]({ item: item, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks ? this._onItemClick : undefined, hasIcons: hasIcons }, itemProps))));
    };
    ContextualMenuBase.prototype._renderAnchorMenuItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var contextualMenuItemAs = this.props.contextualMenuItemAs;
        var expandedMenuItemKey = this.state.expandedMenuItemKey;
        return (FakeReact["createElement"](ContextualMenuAnchor_ContextualMenuAnchor, { item: item, classNames: classNames, index: index, focusableElementIndex: focusableElementIndex, totalItemCount: totalItemCount, hasCheckmarks: hasCheckmarks, hasIcons: hasIcons, contextualMenuItemAs: contextualMenuItemAs, onItemMouseEnter: this._onItemMouseEnterBase, onItemMouseLeave: this._onMouseItemLeave, onItemMouseMove: this._onItemMouseMoveBase, onItemMouseDown: this._onItemMouseDown, executeItemClick: this._executeItemClick, onItemClick: this._onAnchorClick, onItemKeyDown: this._onItemKeyDown, getSubMenuId: this._getSubMenuId, expandedMenuItemKey: expandedMenuItemKey, openSubMenu: this._onItemSubMenuExpand, dismissSubMenu: this._onSubMenuDismiss, dismissMenu: this.dismiss }));
    };
    ContextualMenuBase.prototype._renderButtonItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var contextualMenuItemAs = this.props.contextualMenuItemAs;
        var expandedMenuItemKey = this.state.expandedMenuItemKey;
        return (FakeReact["createElement"](ContextualMenuButton_ContextualMenuButton, { item: item, classNames: classNames, index: index, focusableElementIndex: focusableElementIndex, totalItemCount: totalItemCount, hasCheckmarks: hasCheckmarks, hasIcons: hasIcons, contextualMenuItemAs: contextualMenuItemAs, onItemMouseEnter: this._onItemMouseEnterBase, onItemMouseLeave: this._onMouseItemLeave, onItemMouseMove: this._onItemMouseMoveBase, onItemMouseDown: this._onItemMouseDown, executeItemClick: this._executeItemClick, onItemClick: this._onItemClick, onItemClickBase: this._onItemClickBase, onItemKeyDown: this._onItemKeyDown, getSubMenuId: this._getSubMenuId, expandedMenuItemKey: expandedMenuItemKey, openSubMenu: this._onItemSubMenuExpand, dismissSubMenu: this._onSubMenuDismiss, dismissMenu: this.dismiss }));
    };
    ContextualMenuBase.prototype._renderSplitButton = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var contextualMenuItemAs = this.props.contextualMenuItemAs;
        var expandedMenuItemKey = this.state.expandedMenuItemKey;
        return (FakeReact["createElement"](ContextualMenuSplitButton_ContextualMenuSplitButton, { item: item, classNames: classNames, index: index, focusableElementIndex: focusableElementIndex, totalItemCount: totalItemCount, hasCheckmarks: hasCheckmarks, hasIcons: hasIcons, contextualMenuItemAs: contextualMenuItemAs, onItemMouseEnter: this._onItemMouseEnterBase, onItemMouseLeave: this._onMouseItemLeave, onItemMouseMove: this._onItemMouseMoveBase, onItemMouseDown: this._onItemMouseDown, executeItemClick: this._executeItemClick, onItemClick: this._onItemClick, onItemClickBase: this._onItemClickBase, onItemKeyDown: this._onItemKeyDown, openSubMenu: this._onItemSubMenuExpand, dismissSubMenu: this._onSubMenuDismiss, dismissMenu: this.dismiss, expandedMenuItemKey: expandedMenuItemKey, onTap: this._onPointerAndTouchEvent }));
    };
    /**
     * Returns true if the key for the event is alt (Mac option) or meta (Mac command).
     */
    ContextualMenuBase.prototype._isAltOrMeta = function (ev) {
        return ev.which === Utilities["e" /* KeyCodes */].alt || ev.key === 'Meta';
    };
    ContextualMenuBase.prototype._shouldIgnoreMouseEvent = function () {
        return !this._isScrollIdle || !this._gotMouseMove;
    };
    /**
     * Handles updating focus when mouseEnter or mouseMove fire.
     * As part of updating focus, This function will also update
     * the expand/collapse state accordingly.
     */
    ContextualMenuBase.prototype._updateFocusOnMouseEvent = function (item, ev, target) {
        var _this = this;
        var targetElement = target ? target : ev.currentTarget;
        var _a = this.props.subMenuHoverDelay, timeoutDuration = _a === void 0 ? NavigationIdleDelay : _a;
        if (item.key === this.state.expandedMenuItemKey) {
            return;
        }
        if (this._enterTimerId !== undefined) {
            this._async.clearTimeout(this._enterTimerId);
            this._enterTimerId = undefined;
        }
        // If the menu is not expanded we can update focus without any delay
        if (this.state.expandedMenuItemKey === undefined) {
            targetElement.focus();
        }
        // Delay updating expanding/dismissing the submenu
        // and only set focus if we have not already done so
        if (hasSubmenu(item)) {
            ev.stopPropagation();
            this._enterTimerId = this._async.setTimeout(function () {
                targetElement.focus();
                _this.setState({
                    expandedByMouseClick: true
                });
                _this._onItemSubMenuExpand(item, targetElement);
                _this._enterTimerId = undefined;
            }, timeoutDuration);
        }
        else {
            this._enterTimerId = this._async.setTimeout(function () {
                _this._onSubMenuDismiss(ev);
                targetElement.focus();
                _this._enterTimerId = undefined;
            }, timeoutDuration);
        }
    };
    ContextualMenuBase.prototype._getSubmenuProps = function () {
        var _a = this.state, submenuTarget = _a.submenuTarget, expandedMenuItemKey = _a.expandedMenuItemKey;
        var item = this._findItemByKey(expandedMenuItemKey);
        var submenuProps = null;
        if (item) {
            submenuProps = {
                items: getSubmenuItems(item),
                target: submenuTarget,
                onDismiss: this._onSubMenuDismiss,
                isSubMenu: true,
                id: this.state.subMenuId,
                shouldFocusOnMount: true,
                shouldFocusOnContainer: this.state.expandedByMouseClick,
                directionalHint: Object(Utilities["M" /* getRTL */])() ? DirectionalHint["a" /* DirectionalHint */].leftTopEdge : DirectionalHint["a" /* DirectionalHint */].rightTopEdge,
                className: this.props.className,
                gapSpace: 0,
                isBeakVisible: false
            };
            if (item.subMenuProps) {
                Object(Utilities["k" /* assign */])(submenuProps, item.subMenuProps);
            }
        }
        return submenuProps;
    };
    ContextualMenuBase.prototype._findItemByKey = function (key) {
        var items = this.props.items;
        return this._findItemByKeyFromItems(key, items);
    };
    /**
     * Returns the item that mathes a given key if any.
     * @param key The key of the item to match
     * @param items The items to look for the key
     */
    ContextualMenuBase.prototype._findItemByKeyFromItems = function (key, items) {
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var item = items_2[_i];
            if (item.itemType === ContextualMenuItemType.Section && item.sectionProps) {
                var match = this._findItemByKeyFromItems(key, item.sectionProps.items);
                if (match) {
                    return match;
                }
            }
            else if (item.key && item.key === key) {
                return item;
            }
        }
    };
    ContextualMenuBase.prototype._setTargetWindowAndElement = function (target) {
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Object(Utilities["A" /* getDocument */])();
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = Object(Utilities["Q" /* getWindow */])();
            }
            else if (target.stopPropagation) {
                this._targetWindow = Object(Utilities["Q" /* getWindow */])(target.toElement);
                this._target = target;
            }
            else if (target.x !== undefined && target.y !== undefined) {
                this._targetWindow = Object(Utilities["Q" /* getWindow */])();
                this._target = target;
            }
            else {
                var targetElement = target;
                this._targetWindow = Object(Utilities["Q" /* getWindow */])(targetElement);
                this._target = target;
            }
        }
        else {
            this._targetWindow = Object(Utilities["Q" /* getWindow */])();
        }
    };
    // The default ContextualMenu properties have no items and beak, the default submenu direction is right and top.
    ContextualMenuBase.defaultProps = {
        items: [],
        shouldFocusOnMount: true,
        gapSpace: 0,
        directionalHint: DirectionalHint["a" /* DirectionalHint */].bottomAutoEdge,
        beakWidth: 16
    };
    ContextualMenuBase = tslib_es6["b" /* __decorate */]([
        withResponsiveMode["b" /* withResponsiveMode */]
    ], ContextualMenuBase);
    return ContextualMenuBase;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.styles.js


var ContextualMenu_styles_GlobalClassNames = {
    root: 'ms-ContextualMenu',
    container: 'ms-ContextualMenu-container',
    list: 'ms-ContextualMenu-list',
    header: 'ms-ContextualMenu-header',
    title: 'ms-ContextualMenu-title',
    isopen: 'is-open'
};
var getStyles = function (props) {
    var className = props.className, theme = props.theme;
    var classNames = Object(Styling["o" /* getGlobalClassNames */])(ContextualMenu_styles_GlobalClassNames, theme);
    var palette = theme.palette, fonts = theme.fonts, semanticColors = theme.semanticColors;
    return {
        root: [
            theme.fonts.medium,
            classNames.root,
            classNames.isopen,
            {
                backgroundColor: semanticColors.bodyBackground,
                minWidth: '180px'
            },
            className
        ],
        container: [
            classNames.container,
            {
                selectors: {
                    ':focus': { outline: 0 }
                }
            }
        ],
        list: [
            classNames.list,
            classNames.isopen,
            {
                listStyleType: 'none',
                margin: '0',
                padding: '0'
            }
        ],
        header: [
            classNames.header,
            fonts.small,
            {
                fontWeight: Styling["d" /* FontWeights */].semibold,
                color: semanticColors.menuHeader,
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                height: CONTEXTUAL_MENU_ITEM_HEIGHT,
                lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
                cursor: 'default',
                padding: '0px 6px',
                userSelect: 'none',
                textAlign: 'left'
            }
        ],
        title: [
            classNames.title,
            {
                fontSize: '16px',
                paddingRight: '14px',
                paddingLeft: '14px',
                paddingBottom: '5px',
                paddingTop: '5px',
                backgroundColor: palette.neutralLight
            }
        ],
        subComponentStyles: { callout: {}, menuItem: {} }
    };
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.js



/**
 * ContextualMenu description
 */
var ContextualMenu = Object(Utilities["_10" /* styled */])(ContextualMenu_base_ContextualMenuBase, getStyles, undefined, { scope: 'ContextualMenu' });

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/index.js






// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/ContextualMenu.js


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.classNames.js



var ButtonGlobalClassNames = {
    msButton: 'ms-Button',
    msButtonIcon: 'ms-Button-icon',
    msButtonMenuIcon: 'ms-Button-menuIcon',
    msButtonLabel: 'ms-Button-label',
    msButtonDescription: 'ms-Button-description',
    msButtonScreenReaderText: 'ms-Button-screenReaderText',
    msButtonFlexContainer: 'ms-Button-flexContainer',
    msButtonTextContainer: 'ms-Button-textContainer'
};
var getBaseButtonClassNames = Object(Utilities["_1" /* memoizeFunction */])(function (theme, styles, className, variantClassName, iconClassName, menuIconClassName, disabled, checked, expanded, isSplit) {
    var classNames = Object(Styling["o" /* getGlobalClassNames */])(ButtonGlobalClassNames, theme || {});
    var isExpanded = expanded && !isSplit;
    return Object(Styling["v" /* mergeStyleSets */])({
        root: [
            classNames.msButton,
            styles.root,
            variantClassName,
            checked && ['is-checked', styles.rootChecked],
            isExpanded && [
                'is-expanded',
                styles.rootExpanded,
                {
                    selectors: (_a = {},
                        _a[":hover ." + classNames.msButtonIcon] = styles.iconExpandedHovered,
                        // menuIcon falls back to rootExpandedHovered to support original behavior
                        _a[":hover ." + classNames.msButtonMenuIcon] = styles.menuIconExpandedHovered || styles.rootExpandedHovered,
                        _a[':hover'] = styles.rootExpandedHovered,
                        _a)
                }
            ],
            disabled && ['is-disabled', styles.rootDisabled],
            !disabled &&
                !isExpanded &&
                !checked && {
                selectors: (_b = {
                        ':hover': styles.rootHovered
                    },
                    _b[":hover ." + classNames.msButtonLabel] = styles.labelHovered,
                    _b[":hover ." + classNames.msButtonIcon] = styles.iconHovered,
                    _b[":hover ." + classNames.msButtonDescription] = styles.descriptionHovered,
                    _b[":hover ." + classNames.msButtonMenuIcon] = styles.menuIconHovered,
                    _b[':focus'] = styles.rootFocused,
                    _b[':active'] = styles.rootPressed,
                    _b[":active ." + classNames.msButtonIcon] = styles.iconPressed,
                    _b[":active ." + classNames.msButtonDescription] = styles.descriptionPressed,
                    _b[":active ." + classNames.msButtonMenuIcon] = styles.menuIconPressed,
                    _b)
            },
            disabled && checked && [styles.rootCheckedDisabled],
            !disabled &&
                checked && {
                selectors: {
                    ':hover': styles.rootCheckedHovered,
                    ':active': styles.rootCheckedPressed
                }
            },
            className
        ],
        flexContainer: [classNames.msButtonFlexContainer, styles.flexContainer],
        textContainer: [classNames.msButtonTextContainer, styles.textContainer],
        icon: [
            classNames.msButtonIcon,
            iconClassName,
            styles.icon,
            isExpanded && styles.iconExpanded,
            checked && styles.iconChecked,
            disabled && styles.iconDisabled
        ],
        label: [classNames.msButtonLabel, styles.label, checked && styles.labelChecked, disabled && styles.labelDisabled],
        menuIcon: [
            classNames.msButtonMenuIcon,
            menuIconClassName,
            styles.menuIcon,
            checked && styles.menuIconChecked,
            disabled && styles.menuIconDisabled,
            !disabled &&
                !isExpanded &&
                !checked && {
                selectors: {
                    ':hover': styles.menuIconHovered,
                    ':active': styles.menuIconPressed
                }
            },
            isExpanded && ['is-expanded', styles.menuIconExpanded]
        ],
        description: [
            classNames.msButtonDescription,
            styles.description,
            checked && styles.descriptionChecked,
            disabled && styles.descriptionDisabled
        ],
        screenReaderText: [classNames.msButtonScreenReaderText, styles.screenReaderText]
    });
    var _a, _b;
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.classNames.js


var SplitButton_classNames_getClassNames = Object(Utilities["_1" /* memoizeFunction */])(function (styles, disabled, expanded, checked) {
    return {
        root: Object(Styling["w" /* mergeStyles */])(styles.splitButtonMenuButton, expanded && [styles.splitButtonMenuButtonExpanded], disabled && [styles.splitButtonMenuButtonDisabled], checked && !disabled && [styles.splitButtonMenuButtonChecked]),
        splitButtonContainer: Object(Styling["w" /* mergeStyles */])(styles.splitButtonContainer, checked &&
            !disabled && [
            styles.splitButtonContainerChecked,
            {
                selectors: {
                    ':hover': styles.splitButtonContainerCheckedHovered
                }
            }
        ], !disabled &&
            !checked && [
            {
                selectors: {
                    ':hover': styles.splitButtonContainerHovered,
                    ':focus': styles.splitButtonContainerFocused
                }
            }
        ], disabled && styles.splitButtonContainerDisabled),
        icon: Object(Styling["w" /* mergeStyles */])(styles.splitButtonMenuIcon, disabled && styles.splitButtonMenuIconDisabled),
        flexContainer: Object(Styling["w" /* mergeStyles */])(styles.splitButtonFlexContainer),
        divider: Object(Styling["w" /* mergeStyles */])(styles.splitButtonDivider)
    };
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js









var BaseButton_TouchIdleDelay = 500; /* ms */
var BaseButton_BaseButton = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](BaseButton, _super);
    function BaseButton(props, rootClassName) {
        var _this = _super.call(this, props) || this;
        _this._buttonElement = FakeReact["createRef"]();
        _this._splitButtonContainer = FakeReact["createRef"]();
        _this._onRenderIcon = function (buttonProps, defaultRender) {
            var iconProps = _this.props.iconProps;
            if (iconProps) {
                var className = iconProps.className, rest = tslib_es6["d" /* __rest */](iconProps, ["className"]);
                return FakeReact["createElement"](Icon["a" /* Icon */], tslib_es6["a" /* __assign */]({ className: Object(Utilities["o" /* css */])(_this._classNames.icon, className) }, rest));
            }
            return null;
        };
        _this._onRenderTextContents = function () {
            var _a = _this.props, text = _a.text, children = _a.children, _b = _a.secondaryText, secondaryText = _b === void 0 ? _this.props.description : _b, _c = _a.onRenderText, onRenderText = _c === void 0 ? _this._onRenderText : _c, _d = _a.onRenderDescription, onRenderDescription = _d === void 0 ? _this._onRenderDescription : _d;
            if (text || typeof children === 'string' || secondaryText) {
                return (FakeReact["createElement"]("div", { className: _this._classNames.textContainer },
                    onRenderText(_this.props, _this._onRenderText),
                    onRenderDescription(_this.props, _this._onRenderDescription)));
            }
            return [onRenderText(_this.props, _this._onRenderText), onRenderDescription(_this.props, _this._onRenderDescription)];
        };
        _this._onRenderText = function () {
            var text = _this.props.text;
            var children = _this.props.children;
            // For backwards compat, we should continue to take in the text content from children.
            if (text === undefined && typeof children === 'string') {
                text = children;
            }
            if (_this._hasText()) {
                return (FakeReact["createElement"]("div", { key: _this._labelId, className: _this._classNames.label, id: _this._labelId }, text));
            }
            return null;
        };
        _this._onRenderChildren = function () {
            var children = _this.props.children;
            // If children is just a string, either it or the text will be rendered via onRenderLabel
            // If children is another component, it will be rendered after text
            if (typeof children === 'string') {
                return null;
            }
            return children;
        };
        _this._onRenderDescription = function (props) {
            var _a = props.secondaryText, secondaryText = _a === void 0 ? _this.props.description : _a;
            // ms-Button-description is only shown when the button type is compound.
            // In other cases it will not be displayed.
            return secondaryText ? (FakeReact["createElement"]("div", { key: _this._descriptionId, className: _this._classNames.description, id: _this._descriptionId }, secondaryText)) : null;
        };
        _this._onRenderAriaDescription = function () {
            var ariaDescription = _this.props.ariaDescription;
            // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
            // otherwise it will be assigned to descriptionSpan.
            return ariaDescription ? (FakeReact["createElement"]("span", { className: _this._classNames.screenReaderText, id: _this._ariaDescriptionId }, ariaDescription)) : null;
        };
        _this._onRenderMenuIcon = function (props) {
            var menuIconProps = _this.props.menuIconProps;
            return FakeReact["createElement"](Icon["a" /* Icon */], tslib_es6["a" /* __assign */]({ iconName: "ChevronDown" }, menuIconProps, { className: _this._classNames.menuIcon }));
        };
        _this._onRenderMenu = function (menuProps) {
            var _a = menuProps.onDismiss, onDismiss = _a === void 0 ? _this._dismissMenu : _a;
            var MenuType = _this.props.menuAs || ContextualMenu;
            // the accessible menu label (accessible name) has a relationship to the button.
            // If the menu props do not specify an explicit value for aria-label or aria-labelledBy,
            // AND the button has text, we'll set the menu aria-labelledBy to the text element id.
            if (!menuProps.ariaLabel && !menuProps.labelElementId && _this._hasText()) {
                menuProps = tslib_es6["a" /* __assign */]({}, menuProps, { labelElementId: _this._labelId });
            }
            return (FakeReact["createElement"](MenuType, tslib_es6["a" /* __assign */]({ id: _this._labelId + '-menu', directionalHint: DirectionalHint["a" /* DirectionalHint */].bottomLeftEdge }, menuProps, { shouldFocusOnContainer: _this.state.menuProps ? _this.state.menuProps.shouldFocusOnContainer : undefined, shouldFocusOnMount: _this.state.menuProps ? _this.state.menuProps.shouldFocusOnMount : undefined, hidden: _this.state.menuProps ? _this.state.menuProps.hidden : undefined, className: Object(Utilities["o" /* css */])('ms-BaseButton-menuhost', menuProps.className), target: _this._isSplitButton ? _this._splitButtonContainer.current : _this._buttonElement.current, onDismiss: onDismiss })));
        };
        _this._dismissMenu = function () {
            var menuProps = null;
            if (_this.props.persistMenu && _this.state.menuProps) {
                menuProps = _this.state.menuProps;
                menuProps.hidden = true;
            }
            _this.setState({ menuProps: menuProps });
        };
        _this._openMenu = function (shouldFocusOnContainer, shouldFocusOnMount) {
            if (shouldFocusOnMount === void 0) { shouldFocusOnMount = true; }
            if (_this.props.menuProps) {
                var menuProps = tslib_es6["a" /* __assign */]({}, _this.props.menuProps, { shouldFocusOnContainer: shouldFocusOnContainer, shouldFocusOnMount: shouldFocusOnMount });
                if (_this.props.persistMenu) {
                    menuProps.hidden = false;
                }
                _this.setState({ menuProps: menuProps });
            }
        };
        _this._onToggleMenu = function (shouldFocusOnContainer) {
            var currentMenuProps = _this.state.menuProps;
            var shouldFocusOnMount = true;
            if (_this.props.menuProps && _this.props.menuProps.shouldFocusOnMount === false) {
                shouldFocusOnMount = false;
            }
            if (_this.props.persistMenu) {
                currentMenuProps && currentMenuProps.hidden ? _this._openMenu(shouldFocusOnContainer, shouldFocusOnMount) : _this._dismissMenu();
            }
            else {
                currentMenuProps ? _this._dismissMenu() : _this._openMenu(shouldFocusOnContainer, shouldFocusOnMount);
            }
        };
        _this._onSplitContainerFocusCapture = function (ev) {
            var container = _this._splitButtonContainer.current;
            // If the target is coming from the portal we do not need to set focus on the container.
            if (!container || (ev.target && Object(Utilities["_4" /* portalContainsElement */])(ev.target, container))) {
                return;
            }
            // We should never be able to focus the individual buttons in a split button. Focus
            // should always remain on the container.
            container.focus();
        };
        _this._onSplitButtonPrimaryClick = function (ev) {
            if (_this._isExpanded) {
                _this._dismissMenu();
            }
            if (!_this._processingTouch && _this.props.onClick) {
                _this.props.onClick(ev);
            }
            else if (_this._processingTouch) {
                _this._onMenuClick(ev);
            }
        };
        _this._onKeyDown = function (ev) {
            // explicity cancelling event so click won't fire after this
            if (_this.props.disabled && (ev.which === Utilities["e" /* KeyCodes */].enter || ev.which === Utilities["e" /* KeyCodes */].space)) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (!_this.props.disabled) {
                if (_this.props.menuProps) {
                    _this._onMenuKeyDown(ev);
                }
                else if (_this.props.onKeyDown !== undefined) {
                    _this.props.onKeyDown(ev); // not cancelling event because it's not disabled
                }
            }
        };
        _this._onKeyUp = function (ev) {
            if (!_this.props.disabled && _this.props.onKeyUp !== undefined) {
                _this.props.onKeyUp(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onKeyPress = function (ev) {
            if (!_this.props.disabled && _this.props.onKeyPress !== undefined) {
                _this.props.onKeyPress(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onMouseUp = function (ev) {
            if (!_this.props.disabled && _this.props.onMouseUp !== undefined) {
                _this.props.onMouseUp(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onMouseDown = function (ev) {
            if (!_this.props.disabled && _this.props.onMouseDown !== undefined) {
                _this.props.onMouseDown(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onClick = function (ev) {
            if (!_this.props.disabled) {
                if (_this.props.menuProps) {
                    _this._onMenuClick(ev);
                }
                else if (_this.props.onClick !== undefined) {
                    _this.props.onClick(ev); // not cancelling event because it's not disabled
                }
            }
        };
        _this._onSplitButtonContainerKeyDown = function (ev) {
            if (ev.which === Utilities["e" /* KeyCodes */].enter) {
                if (_this._buttonElement.current) {
                    _this._buttonElement.current.click();
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
            else {
                _this._onMenuKeyDown(ev);
            }
        };
        _this._onMenuKeyDown = function (ev) {
            if (_this.props.disabled) {
                return;
            }
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            if (!ev.defaultPrevented && _this._isValidMenuOpenKey(ev)) {
                var onMenuClick = _this.props.onMenuClick;
                if (onMenuClick) {
                    onMenuClick(ev, _this);
                }
                _this._onToggleMenu(false);
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        _this._onTouchStart = function () {
            if (_this._isSplitButton && _this._splitButtonContainer.current && !('onpointerdown' in _this._splitButtonContainer.current)) {
                _this._handleTouchAndPointerEvent();
            }
        };
        _this._onMenuClick = function (ev) {
            var onMenuClick = _this.props.onMenuClick;
            if (onMenuClick) {
                onMenuClick(ev, _this);
            }
            if (!ev.defaultPrevented) {
                // When Edge + Narrator are used together (regardless of if the button is in a form or not), pressing
                // "Enter" fires this method and not _onMenuKeyDown. Checking ev.nativeEvent.detail differentiates
                // between a real click event and a keypress event (detail should be the number of mouse clicks).
                // ...Plot twist! For a real click event in IE 11, detail is always 0 (Edge sets it properly to 1).
                // So we also check the pointerType property, which both Edge and IE set to "mouse" for real clicks
                // and "" for pressing "Enter" with Narrator on.
                var shouldFocusOnContainer = ev.nativeEvent.detail !== 0 || ev.nativeEvent.pointerType === 'mouse';
                _this._onToggleMenu(shouldFocusOnContainer);
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        _this._warnConditionallyRequiredProps(['menuProps', 'onClick'], 'split', _this.props.split);
        _this._warnDeprecations({
            rootProps: undefined,
            description: 'secondaryText',
            toggled: 'checked'
        });
        _this._labelId = Object(Utilities["F" /* getId */])();
        _this._descriptionId = Object(Utilities["F" /* getId */])();
        _this._ariaDescriptionId = Object(Utilities["F" /* getId */])();
        var menuProps = null;
        if (props.persistMenu && props.menuProps) {
            menuProps = props.menuProps;
            menuProps.hidden = true;
        }
        _this.state = {
            menuProps: menuProps
        };
        return _this;
    }
    Object.defineProperty(BaseButton.prototype, "_isSplitButton", {
        get: function () {
            return !!this.props.menuProps && !!this.props.onClick && this.props.split === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseButton.prototype, "_isExpanded", {
        get: function () {
            if (this.props.persistMenu) {
                return !this.state.menuProps.hidden;
            }
            return !!this.state.menuProps;
        },
        enumerable: true,
        configurable: true
    });
    BaseButton.prototype.render = function () {
        var _a = this.props, ariaDescription = _a.ariaDescription, ariaLabel = _a.ariaLabel, ariaHidden = _a.ariaHidden, className = _a.className, disabled = _a.disabled, allowDisabledFocus = _a.allowDisabledFocus, primaryDisabled = _a.primaryDisabled, _b = _a.secondaryText, secondaryText = _b === void 0 ? this.props.description : _b, href = _a.href, iconProps = _a.iconProps, menuIconProps = _a.menuIconProps, styles = _a.styles, checked = _a.checked, variantClassName = _a.variantClassName, theme = _a.theme, toggle = _a.toggle, getClassNames = _a.getClassNames;
        // Button is disabled if the whole button (in case of splitbutton is disabled) or if the primary action is disabled
        var isPrimaryButtonDisabled = disabled || primaryDisabled;
        this._classNames = getClassNames
            ? getClassNames(theme, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, this._isMenuExpanded(), this.props.split, !!allowDisabledFocus)
            : getBaseButtonClassNames(theme, styles, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, this._isMenuExpanded(), this.props.split);
        var _c = this, _ariaDescriptionId = _c._ariaDescriptionId, _labelId = _c._labelId, _descriptionId = _c._descriptionId;
        // Anchor tag cannot be disabled hence in disabled state rendering
        // anchor button as normal button
        var renderAsAnchor = !isPrimaryButtonDisabled && !!href;
        var tag = renderAsAnchor ? 'a' : 'button';
        var nativeProps = Object(Utilities["I" /* getNativeProps */])(Object(Utilities["k" /* assign */])(renderAsAnchor ? {} : { type: 'button' }, this.props.rootProps, this.props), renderAsAnchor ? Utilities["i" /* anchorProperties */] : Utilities["l" /* buttonProperties */], [
            'disabled' // let disabled buttons be focused and styled as disabled.
        ]);
        // Check for ariaLabel passed in via Button props, and fall back to aria-label passed in via native props
        var resolvedAriaLabel = ariaLabel || nativeProps['aria-label'];
        // Check for ariaDescription, secondaryText or aria-describedby in the native props to determine source of aria-describedby
        // otherwise default to undefined so property does not appear in output.
        var ariaDescribedBy = undefined;
        if (ariaDescription) {
            ariaDescribedBy = _ariaDescriptionId;
        }
        else if (secondaryText) {
            ariaDescribedBy = _descriptionId;
        }
        else if (nativeProps['aria-describedby']) {
            ariaDescribedBy = nativeProps['aria-describedby'];
        }
        // If an explicit ariaLabel is given, use that as the label and we're done.
        // If an explicit aria-labelledby is given, use that and we're done.
        // If any kind of description is given (which will end up as an aria-describedby attribute),
        // set the labelledby element. Otherwise, the button is labeled implicitly by the descendent
        // text on the button (if it exists). Never set both aria-label and aria-labelledby.
        var ariaLabelledBy = undefined;
        if (!resolvedAriaLabel) {
            if (nativeProps['aria-labelledby']) {
                ariaLabelledBy = nativeProps['aria-labelledby'];
            }
            else if (ariaDescribedBy) {
                ariaLabelledBy = this._hasText() ? _labelId : undefined;
            }
        }
        var dataIsFocusable = this.props['data-is-focusable'] === false || (disabled && !allowDisabledFocus) || this._isSplitButton ? false : true;
        var buttonProps = Object(Utilities["k" /* assign */])(nativeProps, {
            className: this._classNames.root,
            ref: this._buttonElement,
            disabled: isPrimaryButtonDisabled && !allowDisabledFocus,
            onKeyDown: this._onKeyDown,
            onKeyPress: this._onKeyPress,
            onKeyUp: this._onKeyUp,
            onMouseDown: this._onMouseDown,
            onMouseUp: this._onMouseUp,
            onClick: this._onClick,
            'aria-label': resolvedAriaLabel,
            'aria-labelledby': ariaLabelledBy,
            'aria-describedby': ariaDescribedBy,
            'aria-disabled': isPrimaryButtonDisabled,
            'data-is-focusable': dataIsFocusable,
            'aria-pressed': toggle ? !!checked : undefined // aria-pressed attribute should only be present for toggle buttons
        });
        if (ariaHidden) {
            buttonProps['aria-hidden'] = true;
        }
        if (this._isSplitButton) {
            return this._onRenderSplitButtonContent(tag, buttonProps);
        }
        else if (this.props.menuProps) {
            Object(Utilities["k" /* assign */])(buttonProps, {
                'aria-expanded': this._isExpanded,
                'aria-owns': this.state.menuProps ? this._labelId + '-menu' : null,
                'aria-haspopup': true
            });
        }
        return this._onRenderContent(tag, buttonProps);
    };
    BaseButton.prototype.componentDidMount = function () {
        // For split buttons, touching anywhere in the button should drop the dropdown, which should contain the primary action.
        // This gives more hit target space for touch environments. We're setting the onpointerdown here, because React
        // does not support Pointer events yet.
        if (this._isSplitButton && this._splitButtonContainer.current && 'onpointerdown' in this._splitButtonContainer.current) {
            this._events.on(this._splitButtonContainer.current, 'pointerdown', this._onPointerDown, true);
        }
    };
    BaseButton.prototype.componentDidUpdate = function (prevProps, prevState) {
        // If Button's menu was closed, run onAfterMenuDismiss
        if (this.props.onAfterMenuDismiss && prevState.menuProps && !this.state.menuProps) {
            this.props.onAfterMenuDismiss();
        }
    };
    BaseButton.prototype.focus = function () {
        if (this._isSplitButton && this._splitButtonContainer.current) {
            this._splitButtonContainer.current.focus();
        }
        else if (this._buttonElement.current) {
            this._buttonElement.current.focus();
        }
    };
    BaseButton.prototype.dismissMenu = function () {
        this._dismissMenu();
    };
    BaseButton.prototype.openMenu = function (shouldFocusOnContainer, shouldFocusOnMount) {
        this._openMenu(shouldFocusOnContainer, shouldFocusOnMount);
    };
    BaseButton.prototype._onRenderContent = function (tag, buttonProps) {
        var _this = this;
        var props = this.props;
        var Tag = tag;
        var menuIconProps = props.menuIconProps, menuProps = props.menuProps, _a = props.onRenderIcon, onRenderIcon = _a === void 0 ? this._onRenderIcon : _a, _b = props.onRenderAriaDescription, onRenderAriaDescription = _b === void 0 ? this._onRenderAriaDescription : _b, _c = props.onRenderChildren, onRenderChildren = _c === void 0 ? this._onRenderChildren : _c, _d = props.onRenderMenu, onRenderMenu = _d === void 0 ? this._onRenderMenu : _d, _e = props.onRenderMenuIcon, onRenderMenuIcon = _e === void 0 ? this._onRenderMenuIcon : _e, disabled = props.disabled;
        var keytipProps = props.keytipProps;
        if (keytipProps && menuProps) {
            keytipProps = tslib_es6["a" /* __assign */]({}, keytipProps, { hasMenu: true });
        }
        var Content = (
        // If we're making a split button, we won't put the keytip here
        FakeReact["createElement"](KeytipData["a" /* KeytipData */], { keytipProps: !this._isSplitButton ? keytipProps : undefined, ariaDescribedBy: buttonProps['aria-describedby'], disabled: disabled }, function (keytipAttributes) { return (FakeReact["createElement"](Tag, tslib_es6["a" /* __assign */]({}, buttonProps, keytipAttributes),
            FakeReact["createElement"]("div", { className: _this._classNames.flexContainer },
                onRenderIcon(props, _this._onRenderIcon),
                _this._onRenderTextContents(),
                onRenderAriaDescription(props, _this._onRenderAriaDescription),
                onRenderChildren(props, _this._onRenderChildren),
                !_this._isSplitButton &&
                    (menuProps || menuIconProps || _this.props.onRenderMenuIcon) &&
                    onRenderMenuIcon(_this.props, _this._onRenderMenuIcon),
                _this.state.menuProps && !_this.state.menuProps.doNotLayer && onRenderMenu(menuProps, _this._onRenderMenu)))); }));
        if (menuProps && menuProps.doNotLayer) {
            return (FakeReact["createElement"]("div", { style: { display: 'inline-block' } },
                Content,
                this.state.menuProps && onRenderMenu(menuProps, this._onRenderMenu)));
        }
        return Content;
    };
    BaseButton.prototype._hasText = function () {
        // _onRenderTextContents and _onRenderText do not perform the same checks. Below is parity with what _onRenderText used to have
        // before the refactor that introduced this function. _onRenderTextContents does not require props.text to be undefined in order
        // for props.children to be used as a fallback. Purely a code maintainability/reuse issue, but logged as Issue #4979
        return this.props.text !== null && (this.props.text !== undefined || typeof this.props.children === 'string');
    };
    BaseButton.prototype._isMenuExpanded = function () {
        var menuProps = this.state.menuProps;
        return !!menuProps && !menuProps.hidden;
    };
    BaseButton.prototype._onRenderSplitButtonContent = function (tag, buttonProps) {
        var _this = this;
        var _a = this.props, _b = _a.styles, styles = _b === void 0 ? {} : _b, disabled = _a.disabled, allowDisabledFocus = _a.allowDisabledFocus, checked = _a.checked, getSplitButtonClassNames = _a.getSplitButtonClassNames, primaryDisabled = _a.primaryDisabled, menuProps = _a.menuProps, toggle = _a.toggle;
        var keytipProps = this.props.keytipProps;
        var classNames = getSplitButtonClassNames
            ? getSplitButtonClassNames(!!disabled, !!this.state.menuProps, !!checked, !!allowDisabledFocus)
            : styles && SplitButton_classNames_getClassNames(styles, !!disabled, !!this.state.menuProps, !!checked);
        Object(Utilities["k" /* assign */])(buttonProps, {
            onClick: undefined,
            tabIndex: -1,
            'data-is-focusable': false
        });
        var ariaDescribedBy = buttonProps.ariaDescription;
        if (keytipProps && menuProps) {
            keytipProps = tslib_es6["a" /* __assign */]({}, keytipProps, { hasMenu: true });
        }
        var containerProps = Object(Utilities["I" /* getNativeProps */])(buttonProps, [], ['disabled']);
        return (FakeReact["createElement"](KeytipData["a" /* KeytipData */], { keytipProps: keytipProps, disabled: disabled }, function (keytipAttributes) { return (FakeReact["createElement"]("div", tslib_es6["a" /* __assign */]({}, containerProps, { "data-ktp-target": keytipAttributes['data-ktp-target'], role: 'button', "aria-disabled": disabled, "aria-haspopup": true, "aria-expanded": _this._isExpanded, "aria-pressed": toggle ? !!checked : undefined, "aria-describedby": Object(Utilities["_2" /* mergeAriaAttributeValues */])(ariaDescribedBy, keytipAttributes['aria-describedby']), className: classNames && classNames.splitButtonContainer, onKeyDown: _this._onSplitButtonContainerKeyDown, onTouchStart: _this._onTouchStart, ref: _this._splitButtonContainer, "data-is-focusable": true, onClick: !disabled && !primaryDisabled ? _this._onSplitButtonPrimaryClick : undefined, tabIndex: !disabled || allowDisabledFocus ? 0 : undefined, "aria-roledescription": buttonProps['aria-roledescription'], onFocusCapture: _this._onSplitContainerFocusCapture }),
            FakeReact["createElement"]("span", { style: { display: 'flex' } },
                _this._onRenderContent(tag, buttonProps),
                _this._onRenderSplitButtonMenuButton(classNames, keytipAttributes),
                _this._onRenderSplitButtonDivider(classNames)))); }));
    };
    BaseButton.prototype._onRenderSplitButtonDivider = function (classNames) {
        if (classNames && classNames.divider) {
            return FakeReact["createElement"]("span", { className: classNames.divider });
        }
        return null;
    };
    BaseButton.prototype._onRenderSplitButtonMenuButton = function (classNames, keytipAttributes) {
        var _a = this.props, allowDisabledFocus = _a.allowDisabledFocus, checked = _a.checked, disabled = _a.disabled;
        var menuIconProps = this.props.menuIconProps;
        var splitButtonAriaLabel = this.props.splitButtonAriaLabel;
        if (menuIconProps === undefined) {
            menuIconProps = {
                iconName: 'ChevronDown'
            };
        }
        var splitButtonProps = {
            styles: classNames,
            checked: checked,
            disabled: disabled,
            allowDisabledFocus: allowDisabledFocus,
            onClick: this._onMenuClick,
            menuProps: undefined,
            iconProps: tslib_es6["a" /* __assign */]({}, menuIconProps, { className: this._classNames.menuIcon }),
            ariaLabel: splitButtonAriaLabel,
            'aria-haspopup': true,
            'aria-expanded': this._isExpanded,
            'data-is-focusable': false
        };
        // Add data-ktp-execute-target to the split button if the keytip is defined
        return (FakeReact["createElement"](BaseButton, tslib_es6["a" /* __assign */]({}, splitButtonProps, { "data-ktp-execute-target": keytipAttributes['data-ktp-execute-target'], onMouseDown: this._onMouseDown, tabIndex: -1 })));
    };
    BaseButton.prototype._onPointerDown = function (ev) {
        if (ev.pointerType === 'touch') {
            this._handleTouchAndPointerEvent();
            ev.preventDefault();
            ev.stopImmediatePropagation();
        }
    };
    BaseButton.prototype._handleTouchAndPointerEvent = function () {
        var _this = this;
        // If we already have an existing timeeout from a previous touch and pointer event
        // cancel that timeout so we can set a nwe one.
        if (this._lastTouchTimeoutId !== undefined) {
            this._async.clearTimeout(this._lastTouchTimeoutId);
            this._lastTouchTimeoutId = undefined;
        }
        this._processingTouch = true;
        this._lastTouchTimeoutId = this._async.setTimeout(function () {
            _this._processingTouch = false;
            _this._lastTouchTimeoutId = undefined;
        }, BaseButton_TouchIdleDelay);
    };
    /**
     * Returns if the user hits a valid keyboard key to open the menu
     * @param ev - the keyboard event
     * @returns True if user clicks on custom trigger key if enabled or alt + down arrow if not. False otherwise.
     */
    BaseButton.prototype._isValidMenuOpenKey = function (ev) {
        if (this.props.menuTriggerKeyCode) {
            return ev.which === this.props.menuTriggerKeyCode;
        }
        else if (this.props.menuProps) {
            return ev.which === Utilities["e" /* KeyCodes */].down && (ev.altKey || ev.metaKey);
        }
        // Note: When enter is pressed, we will let the event continue to propagate
        // to trigger the onClick event on the button
        return false;
    };
    BaseButton.defaultProps = {
        baseClassName: 'ms-Button',
        styles: {},
        split: false
    };
    return BaseButton;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/Button.types.js
var ElementType;
(function (ElementType) {
    /** <button> element. */
    ElementType[ElementType["button"] = 0] = "button";
    /** <a> element. */
    ElementType[ElementType["anchor"] = 1] = "anchor";
})(ElementType || (ElementType = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["normal"] = 0] = "normal";
    ButtonType[ButtonType["primary"] = 1] = "primary";
    ButtonType[ButtonType["hero"] = 2] = "hero";
    ButtonType[ButtonType["compound"] = 3] = "compound";
    ButtonType[ButtonType["command"] = 4] = "command";
    ButtonType[ButtonType["icon"] = 5] = "icon";
    ButtonType[ButtonType["default"] = 6] = "default";
})(ButtonType || (ButtonType = {}));

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js


var noOutline = {
    outline: 0
};
var iconStyle = {
    fontSize: Styling["c" /* FontSizes */].icon,
    margin: '0 4px',
    height: '16px',
    lineHeight: '16px',
    textAlign: 'center',
    verticalAlign: 'middle',
    flexShrink: 0
};
/**
 * Gets the base button styles. Note: because it is a base class to be used with the `mergeRules`
 * helper, it should have values for all class names in the interface. This let `mergeRules` optimize
 * mixing class names together.
 */
var BaseButton_styles_getStyles = Object(Utilities["_1" /* memoizeFunction */])(function (theme) {
    var semanticColors = theme.semanticColors;
    var border = semanticColors.buttonBorder;
    var disabledBackground = semanticColors.disabledBackground;
    var disabledText = semanticColors.disabledText;
    var buttonHighContrastFocus = {
        left: -2,
        top: -2,
        bottom: -2,
        right: -2,
        border: 'none',
        outlineColor: 'ButtonText'
    };
    return {
        root: [
            Object(Styling["n" /* getFocusStyle */])(theme, -1, 'relative', buttonHighContrastFocus),
            theme.fonts.medium,
            {
                boxSizing: 'border-box',
                border: '1px solid ' + border,
                userSelect: 'none',
                display: 'inline-block',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                verticalAlign: 'top',
                padding: '0 16px',
                borderRadius: 0,
                selectors: {
                    // IE11 workaround for preventing shift of child elements of a button when active.
                    ':active > *': {
                        position: 'relative',
                        left: 0,
                        top: 0
                    }
                }
            }
        ],
        rootDisabled: [
            Object(Styling["n" /* getFocusStyle */])(theme, -1, 'relative', buttonHighContrastFocus),
            {
                backgroundColor: disabledBackground,
                color: disabledText,
                cursor: 'default',
                pointerEvents: 'none',
                selectors: (_a = {
                        ':hover': noOutline,
                        ':focus': noOutline
                    },
                    _a[Styling["e" /* HighContrastSelector */]] = {
                        color: 'grayText',
                        bordercolor: 'grayText'
                    },
                    _a)
            }
        ],
        iconDisabled: {
            color: disabledText
        },
        menuIconDisabled: {
            color: disabledText
        },
        flexContainer: {
            display: 'flex',
            height: '100%',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        },
        textContainer: {
            flexGrow: 1
        },
        icon: iconStyle,
        menuIcon: [
            iconStyle,
            {
                fontSize: Styling["c" /* FontSizes */].small
            }
        ],
        label: {
            margin: '0 4px',
            lineHeight: '100%'
        },
        screenReaderText: Styling["t" /* hiddenContentStyle */]
    };
    var _a;
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.styles.js


var SplitButton_styles_getStyles = Object(Utilities["_1" /* memoizeFunction */])(function (theme, customStyles) {
    var buttonHighContrastFocus = {
        left: -2,
        top: -2,
        bottom: -2,
        right: -2,
        border: 'none'
    };
    var splitButtonStyles = {
        splitButtonContainer: [
            Object(Styling["n" /* getFocusStyle */])(theme, 0, 'relative', buttonHighContrastFocus),
            {
                display: 'inline-flex'
            }
        ],
        splitButtonContainerFocused: {
            outline: 'none!important'
        },
        splitButtonMenuButton: {
            padding: 6,
            height: 'auto',
            boxSizing: 'border-box',
            border: 0,
            borderRadius: 0,
            outline: 'transparent',
            userSelect: 'none',
            display: 'inline-block',
            textDecoration: 'none',
            textAlign: 'center',
            cursor: 'pointer',
            verticalAlign: 'top',
            width: 32,
            marginLeft: -1
        },
        splitButtonDivider: {
            position: 'absolute',
            width: 1,
            right: 31,
            top: 8,
            bottom: 8
        },
        splitButtonMenuButtonDisabled: {
            pointerEvents: 'none',
            selectors: {
                ':hover': {
                    cursor: 'default'
                }
            }
        },
        splitButtonFlexContainer: {
            display: 'flex',
            height: '100%',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        },
        splitButtonContainerDisabled: {
            outline: 'none',
            border: 'none'
        }
    };
    return Object(Styling["l" /* concatStyleSets */])(splitButtonStyles, customStyles);
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/ButtonThemes.js

function standardStyles(theme) {
    var s = theme.semanticColors;
    var buttonBackground = s.buttonBackground;
    var buttonBackgroundChecked = s.buttonBackgroundChecked;
    var buttonBackgroundHovered = s.buttonBackgroundHovered;
    var buttonText = s.buttonText;
    var buttonTextHovered = s.buttonTextHovered;
    var buttonTextChecked = s.buttonTextChecked;
    var buttonTextCheckedHovered = s.buttonTextCheckedHovered;
    return {
        root: {
            backgroundColor: buttonBackground,
            color: buttonText
        },
        rootHovered: {
            backgroundColor: buttonBackgroundHovered,
            color: buttonTextHovered,
            selectors: (_a = {},
                _a[Styling["e" /* HighContrastSelector */]] = {
                    borderColor: 'Highlight',
                    color: 'Highlight'
                },
                _a)
        },
        rootPressed: {
            backgroundColor: buttonBackgroundChecked,
            color: buttonTextChecked
        },
        rootExpanded: {
            backgroundColor: buttonBackgroundChecked,
            color: buttonTextChecked
        },
        rootChecked: {
            backgroundColor: buttonBackgroundChecked,
            color: buttonTextChecked
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralLight,
            color: buttonTextCheckedHovered
        },
        // Split button styles
        splitButtonContainer: {
            selectors: (_b = {},
                _b[Styling["e" /* HighContrastSelector */]] = {
                    border: 'none'
                },
                _b)
        },
        splitButtonMenuButton: {
            color: theme.palette.white,
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLight,
                    selectors: (_c = {},
                        _c[Styling["e" /* HighContrastSelector */]] = {
                            color: 'Highlight'
                        },
                        _c)
                }
            }
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLighter
                }
            }
        },
        splitButtonDivider: {
            backgroundColor: theme.palette.neutralTertiaryAlt
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: theme.palette.themePrimary
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: theme.palette.neutralLight
        },
        splitButtonMenuIcon: {
            color: theme.palette.neutralPrimary
        },
        splitButtonMenuIconDisabled: {
            color: theme.palette.neutralTertiary
        }
    };
    var _a, _b, _c;
}
function primaryStyles(theme) {
    return {
        root: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white,
            selectors: (_a = {},
                _a[Styling["e" /* HighContrastSelector */]] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none'
                },
                _a)
        },
        rootHovered: {
            backgroundColor: theme.palette.themeDarkAlt,
            color: theme.palette.white,
            selectors: (_b = {},
                _b[Styling["e" /* HighContrastSelector */]] = {
                    color: 'Window',
                    backgroundColor: 'Highlight'
                },
                _b)
        },
        rootPressed: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.white,
            selectors: (_c = {},
                _c[Styling["e" /* HighContrastSelector */]] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none'
                },
                _c)
        },
        rootExpanded: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.white
        },
        rootChecked: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.white
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white
        },
        rootDisabled: {
            selectors: (_d = {},
                _d[Styling["e" /* HighContrastSelector */]] = {
                    color: 'GrayText',
                    borderColor: 'GrayText',
                    backgroundColor: 'Window'
                },
                _d)
        },
        // Split button styles
        splitButtonContainer: {
            selectors: (_e = {},
                _e[Styling["e" /* HighContrastSelector */]] = {
                    border: 'none'
                },
                _e)
        },
        splitButtonDivider: {
            backgroundColor: theme.palette.themeLighter
        },
        splitButtonMenuButton: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.themeDark,
                    selectors: (_f = {},
                        _f[Styling["e" /* HighContrastSelector */]] = {
                            color: 'Highlight'
                        },
                        _f)
                }
            }
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLighter
                }
            }
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: theme.palette.themeDark
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: theme.palette.themeDark
        },
        splitButtonMenuIcon: {
            color: theme.palette.white
        },
        splitButtonMenuIconDisabled: {
            color: theme.palette.neutralTertiary
        }
    };
    var _a, _b, _c, _d, _e, _f;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.styles.js





var DEFAULT_BUTTON_HEIGHT = '32px';
var DEFAULT_BUTTON_MINWIDTH = '80px';
var DefaultButton_styles_getStyles = Object(Utilities["_1" /* memoizeFunction */])(function (theme, customStyles, primary) {
    var baseButtonStyles = BaseButton_styles_getStyles(theme);
    var splitButtonStyles = SplitButton_styles_getStyles(theme);
    var defaultButtonStyles = {
        root: {
            minWidth: DEFAULT_BUTTON_MINWIDTH,
            height: DEFAULT_BUTTON_HEIGHT
        },
        label: {
            fontWeight: Styling["d" /* FontWeights */].semibold
        }
    };
    return Object(Styling["l" /* concatStyleSets */])(baseButtonStyles, defaultButtonStyles, primary ? primaryStyles(theme) : standardStyles(theme), splitButtonStyles, customStyles);
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.js





var DefaultButton_DefaultButton = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](DefaultButton, _super);
    function DefaultButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        return _this;
    }
    DefaultButton.prototype.render = function () {
        var _a = this.props, _b = _a.primary, primary = _b === void 0 ? false : _b, styles = _a.styles, theme = _a.theme;
        return (FakeReact["createElement"](BaseButton_BaseButton, tslib_es6["a" /* __assign */]({}, this.props, { variantClassName: primary ? 'ms-Button--primary' : 'ms-Button--default', styles: DefaultButton_styles_getStyles(theme, styles, primary), onRenderDescription: Utilities["_3" /* nullRender */] })));
    };
    DefaultButton = tslib_es6["b" /* __decorate */]([
        Object(Utilities["p" /* customizable */])('DefaultButton', ['theme', 'styles'], true)
    ], DefaultButton);
    return DefaultButton;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.styles.js



var ActionButton_styles_DEFAULT_BUTTON_HEIGHT = '40px';
var DEFAULT_PADDING = '0 4px';
var ActionButton_styles_getStyles = Object(Utilities["_1" /* memoizeFunction */])(function (theme, customStyles) {
    var baseButtonStyles = BaseButton_styles_getStyles(theme);
    var actionButtonStyles = {
        root: {
            padding: DEFAULT_PADDING,
            height: ActionButton_styles_DEFAULT_BUTTON_HEIGHT,
            color: theme.palette.neutralPrimary,
            backgroundColor: 'transparent',
            border: '1px solid transparent'
        },
        rootHovered: {
            color: theme.palette.themePrimary,
            selectors: (_a = {},
                _a[Styling["e" /* HighContrastSelector */]] = {
                    borderColor: 'Highlight',
                    color: 'Highlight'
                },
                _a)
        },
        iconHovered: {
            color: theme.palette.themePrimary
        },
        rootPressed: {
            color: theme.palette.black
        },
        rootExpanded: {
            color: theme.palette.themePrimary
        },
        iconPressed: {
            color: theme.palette.themeDarker
        },
        rootDisabled: {
            color: theme.palette.neutralTertiary,
            backgroundColor: 'transparent'
        },
        rootChecked: {
            color: theme.palette.black
        },
        iconChecked: {
            color: theme.palette.themeDarker
        },
        flexContainer: {
            justifyContent: 'flex-start'
        },
        icon: {
            color: theme.palette.themeDarkAlt
        },
        iconDisabled: {
            color: 'inherit'
        },
        menuIcon: {
            color: theme.palette.neutralSecondary
        },
        textContainer: {
            flexGrow: 0
        }
    };
    return Object(Styling["l" /* concatStyleSets */])(baseButtonStyles, actionButtonStyles, customStyles);
    var _a;
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.js





var ActionButton_ActionButton = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](ActionButton, _super);
    function ActionButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        return _this;
    }
    ActionButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (FakeReact["createElement"](BaseButton_BaseButton, tslib_es6["a" /* __assign */]({}, this.props, { variantClassName: "ms-Button--action ms-Button--command", styles: ActionButton_styles_getStyles(theme, styles), onRenderDescription: Utilities["_3" /* nullRender */] })));
    };
    ActionButton = tslib_es6["b" /* __decorate */]([
        Object(Utilities["p" /* customizable */])('ActionButton', ['theme', 'styles'], true)
    ], ActionButton);
    return ActionButton;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.styles.js





var CompoundButton_styles_getStyles = Object(Utilities["_1" /* memoizeFunction */])(function (theme, customStyles, primary) {
    var baseButtonStyles = BaseButton_styles_getStyles(theme);
    var splitButtonStyles = SplitButton_styles_getStyles(theme);
    var compoundButtonStyles = {
        root: {
            maxWidth: '280px',
            minHeight: '72px',
            height: 'auto',
            padding: '20px'
        },
        flexContainer: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            minWidth: '100%',
            margin: ''
        },
        textContainer: {
            textAlign: 'left'
        },
        icon: {
            fontSize: '2em',
            lineHeight: '1em',
            height: '1em',
            margin: '0px 8px 0px 0px',
            flexBasis: '1em',
            flexShrink: '0'
        },
        label: {
            margin: '0 0 5px',
            lineHeight: '100%',
            fontWeight: Styling["d" /* FontWeights */].semibold
        },
        description: [
            theme.fonts.small,
            {
                lineHeight: '100%'
            }
        ]
    };
    var standardCompoundTheme = {
        description: {
            color: theme.palette.neutralSecondary
        },
        descriptionHovered: {
            color: theme.palette.neutralDark
        },
        descriptionPressed: {
            color: 'inherit'
        },
        descriptionChecked: {
            color: 'inherit'
        },
        descriptionDisabled: {
            color: 'inherit'
        }
    };
    var primaryCompoundTheme = {
        description: {
            color: theme.palette.white,
            selectors: (_a = {},
                _a[Styling["e" /* HighContrastSelector */]] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none'
                },
                _a)
        },
        descriptionHovered: {
            color: theme.palette.white,
            selectors: (_b = {},
                _b[Styling["e" /* HighContrastSelector */]] = {
                    color: 'Window',
                    backgroundColor: 'Highlight',
                    MsHighContrastAdjust: 'none'
                },
                _b)
        },
        descriptionPressed: {
            color: 'inherit'
        },
        descriptionChecked: {
            color: 'inherit'
        },
        descriptionDisabled: {
            color: 'inherit',
            selectors: (_c = {},
                _c[Styling["e" /* HighContrastSelector */]] = {
                    color: 'inherit'
                },
                _c)
        }
    };
    return Object(Styling["l" /* concatStyleSets */])(baseButtonStyles, compoundButtonStyles, primary ? primaryStyles(theme) : standardStyles(theme), primary ? primaryCompoundTheme : standardCompoundTheme, splitButtonStyles, customStyles);
    var _a, _b, _c;
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.js





var CompoundButton_CompoundButton = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](CompoundButton, _super);
    function CompoundButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        return _this;
    }
    CompoundButton.prototype.render = function () {
        var _a = this.props, _b = _a.primary, primary = _b === void 0 ? false : _b, styles = _a.styles, theme = _a.theme;
        return (FakeReact["createElement"](BaseButton_BaseButton, tslib_es6["a" /* __assign */]({}, this.props, { variantClassName: primary ? 'ms-Button--compoundPrimary' : 'ms-Button--compound', styles: CompoundButton_styles_getStyles(theme, styles, primary) })));
    };
    CompoundButton = tslib_es6["b" /* __decorate */]([
        Object(Utilities["p" /* customizable */])('CompoundButton', ['theme', 'styles'], true)
    ], CompoundButton);
    return CompoundButton;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.styles.js




var IconButton_styles_getStyles = Object(Utilities["_1" /* memoizeFunction */])(function (theme, customStyles) {
    var baseButtonStyles = BaseButton_styles_getStyles(theme);
    var splitButtonStyles = SplitButton_styles_getStyles(theme);
    var palette = theme.palette, semanticColors = theme.semanticColors;
    var iconButtonStyles = {
        root: {
            padding: '0 4px',
            width: '32px',
            height: '32px',
            backgroundColor: 'transparent',
            border: 'none',
            color: semanticColors.actionLink
        },
        rootHovered: {
            color: semanticColors.actionLinkHovered,
            selectors: (_a = {},
                _a[Styling["e" /* HighContrastSelector */]] = {
                    borderColor: 'Highlight',
                    color: 'Highlight'
                },
                _a)
        },
        rootPressed: {
            color: palette.themePrimary
        },
        rootExpanded: {
            color: palette.themePrimary
        },
        rootChecked: {
            backgroundColor: semanticColors.buttonBackgroundChecked
        },
        rootCheckedHovered: {
            backgroundColor: semanticColors.buttonBackgroundHovered
        },
        rootDisabled: {
            color: semanticColors.disabledText
        }
    };
    return Object(Styling["l" /* concatStyleSets */])(baseButtonStyles, iconButtonStyles, splitButtonStyles, customStyles);
    var _a;
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.js





var IconButton_IconButton = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](IconButton, _super);
    function IconButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        return _this;
    }
    IconButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (FakeReact["createElement"](BaseButton_BaseButton, tslib_es6["a" /* __assign */]({}, this.props, { variantClassName: "ms-Button--icon", styles: IconButton_styles_getStyles(theme, styles), onRenderText: Utilities["_3" /* nullRender */], onRenderDescription: Utilities["_3" /* nullRender */] })));
    };
    IconButton = tslib_es6["b" /* __decorate */]([
        Object(Utilities["p" /* customizable */])('IconButton', ['theme', 'styles'], true)
    ], IconButton);
    return IconButton;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/PrimaryButton/PrimaryButton.js




var PrimaryButton_PrimaryButton = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](PrimaryButton, _super);
    function PrimaryButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Set this BaseComponent._skipComponentRefResolution to true, bypassing resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        return _this;
    }
    PrimaryButton.prototype.render = function () {
        return FakeReact["createElement"](DefaultButton_DefaultButton, tslib_es6["a" /* __assign */]({}, this.props, { primary: true, onRenderDescription: Utilities["_3" /* nullRender */] }));
    };
    PrimaryButton = tslib_es6["b" /* __decorate */]([
        Object(Utilities["p" /* customizable */])('PrimaryButton', ['theme', 'styles'], true)
    ], PrimaryButton);
    return PrimaryButton;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/Button.js









/**
 * This class is deprecated. Use the individual *Button components instead.
 * @deprecated Use the individual *Button components instead.
 */
var Button_Button = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Set this BaseComponent._skipComponentRefResolution to true, bypassing resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        Object(Utilities["_12" /* warn */])("The Button component has been deprecated. Use specific variants instead. " +
            "(PrimaryButton, DefaultButton, IconButton, ActionButton, etc.)");
        return _this;
    }
    Button.prototype.render = function () {
        var props = this.props;
        switch (props.buttonType) {
            case ButtonType.command:
                return FakeReact["createElement"](ActionButton_ActionButton, tslib_es6["a" /* __assign */]({}, props));
            case ButtonType.compound:
                return FakeReact["createElement"](CompoundButton_CompoundButton, tslib_es6["a" /* __assign */]({}, props));
            case ButtonType.icon:
                return FakeReact["createElement"](IconButton_IconButton, tslib_es6["a" /* __assign */]({}, props));
            case ButtonType.primary:
                return FakeReact["createElement"](PrimaryButton_PrimaryButton, tslib_es6["a" /* __assign */]({}, props));
            default:
                return FakeReact["createElement"](DefaultButton_DefaultButton, tslib_es6["a" /* __assign */]({}, props));
        }
    };
    return Button;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/CommandBarButton/CommandBarButton.styles.js




var CommandBarButton_styles_getStyles = Object(Utilities["_1" /* memoizeFunction */])(function (theme, customStyles, focusInset, focusColor) {
    var baseButtonStyles = BaseButton_styles_getStyles(theme);
    var baseSplitButtonStyles = SplitButton_styles_getStyles(theme);
    var commandButtonHighContrastFocus = {
        left: 4,
        top: 4,
        bottom: 4,
        right: 4,
        border: 'none'
    };
    var commandButtonStyles = {
        root: [
            Object(Styling["n" /* getFocusStyle */])(theme, -1, 'relative', commandButtonHighContrastFocus),
            theme.fonts.medium,
            {
                minWidth: '40px',
                backgroundColor: theme.palette.neutralLighter,
                color: theme.palette.neutralPrimary,
                padding: '0 4px',
                selectors: (_a = {},
                    _a[Styling["e" /* HighContrastSelector */]] = {
                        border: 'none'
                    },
                    _a)
            }
        ],
        rootHovered: {
            backgroundColor: theme.palette.neutralLight,
            color: theme.palette.neutralDark,
            selectors: (_b = {},
                _b[Styling["e" /* HighContrastSelector */]] = {
                    color: 'Highlight'
                },
                _b)
        },
        rootPressed: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootChecked: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootExpanded: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralQuaternary,
            color: theme.palette.black
        },
        // Split button styles
        splitButtonContainer: {
            selectors: (_c = {},
                _c[Styling["e" /* HighContrastSelector */]] = {
                    border: 'none'
                },
                _c)
        },
        splitButtonDivider: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
            marginTop: 4,
            marginBottom: 4
        },
        splitButtonMenuButton: {
            backgroundColor: theme.palette.neutralLighter,
            color: theme.palette.neutralPrimary,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLight,
                    color: theme.palette.neutralDark,
                    selectors: (_d = {},
                        _d[Styling["e" /* HighContrastSelector */]] = {
                            color: 'Highlight'
                        },
                        _d)
                }
            }
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLighter
                }
            }
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralQuaternaryAlt
                }
            }
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralQuaternaryAlt
                }
            }
        },
        splitButtonMenuIcon: {
            color: theme.palette.neutralPrimary
        },
        splitButtonMenuIconDisabled: {
            color: theme.palette.neutralTertiary
        },
        label: {
            fontWeight: 'normal' // theme.fontWeights.semibold,
        },
        icon: {
            color: theme.palette.themeDarkAlt
        },
        menuIcon: {
            color: theme.palette.neutralSecondary
        }
    };
    return Object(Styling["l" /* concatStyleSets */])(baseButtonStyles, commandButtonStyles, baseSplitButtonStyles, customStyles);
    var _a, _b, _c, _d;
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/CommandBarButton/CommandBarButton.js





var CommandBarButton_CommandBarButton = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](CommandBarButton, _super);
    function CommandBarButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        return _this;
    }
    CommandBarButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (FakeReact["createElement"](BaseButton_BaseButton, tslib_es6["a" /* __assign */]({}, this.props, { variantClassName: "ms-Button--commandBar", styles: CommandBarButton_styles_getStyles(theme, styles), onRenderDescription: Utilities["_3" /* nullRender */] })));
    };
    CommandBarButton = tslib_es6["b" /* __decorate */]([
        Object(Utilities["p" /* customizable */])('CommandBarButton', ['theme', 'styles'], true)
    ], CommandBarButton);
    return CommandBarButton;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/CommandButton/CommandButton.js

var CommandButton = ActionButton_ActionButton;

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/MessageBarButton/MessageBarButton.styles.js



var MessageBarButton_styles_getStyles = Object(Utilities["_1" /* memoizeFunction */])(function (theme, customStyles, focusInset, focusColor) {
    var baseButtonStyles = BaseButton_styles_getStyles(theme);
    var messageBarButtonStyles = {
        root: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.neutralPrimary
        },
        rootHovered: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
            color: theme.palette.neutralDark
        },
        rootPressed: {
            backgroundColor: theme.palette.neutralTertiary,
            color: theme.palette.neutralDark
        }
    };
    return Object(Styling["l" /* concatStyleSets */])(baseButtonStyles, messageBarButtonStyles, customStyles);
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/MessageBarButton/MessageBarButton.js





var MessageBarButton_MessageBarButton = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](MessageBarButton, _super);
    function MessageBarButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageBarButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return FakeReact["createElement"](DefaultButton_DefaultButton, tslib_es6["a" /* __assign */]({}, this.props, { styles: MessageBarButton_styles_getStyles(theme, styles), onRenderDescription: Utilities["_3" /* nullRender */] }));
    };
    MessageBarButton = tslib_es6["b" /* __decorate */]([
        Object(Utilities["p" /* customizable */])('MessageBarButton', ['theme', 'styles'], true)
    ], MessageBarButton);
    return MessageBarButton;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Button/index.js












// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Button.js
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return BaseButton_BaseButton; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return ElementType; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return ButtonType; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return Button_Button; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return ActionButton_ActionButton; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return CommandBarButton_CommandBarButton; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return CommandButton; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return CompoundButton_CompoundButton; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return DefaultButton_DefaultButton; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return MessageBarButton_MessageBarButton; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "d", function() { return PrimaryButton_PrimaryButton; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "c", function() { return IconButton_IconButton; });



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsiveMode; });
/* unused harmony export setResponsiveMode */
/* harmony export (immutable) */ __webpack_exports__["b"] = withResponsiveMode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BaseDecorator__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utilities__ = __webpack_require__(44);




var ResponsiveMode;
(function (ResponsiveMode) {
    ResponsiveMode[ResponsiveMode["small"] = 0] = "small";
    ResponsiveMode[ResponsiveMode["medium"] = 1] = "medium";
    ResponsiveMode[ResponsiveMode["large"] = 2] = "large";
    ResponsiveMode[ResponsiveMode["xLarge"] = 3] = "xLarge";
    ResponsiveMode[ResponsiveMode["xxLarge"] = 4] = "xxLarge";
    ResponsiveMode[ResponsiveMode["xxxLarge"] = 5] = "xxxLarge";
})(ResponsiveMode || (ResponsiveMode = {}));
var RESPONSIVE_MAX_CONSTRAINT = [479, 639, 1023, 1365, 1919, 99999999];
var _defaultMode;
/**
 * Allows a server rendered scenario to provide a default responsive mode.
 */
function setResponsiveMode(responsiveMode) {
    _defaultMode = responsiveMode;
}
function withResponsiveMode(ComposedComponent) {
    var resultClass = /** @class */ (function (_super) {
        __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](WithResponsiveMode, _super);
        function WithResponsiveMode(props) {
            var _this = _super.call(this, props) || this;
            _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
            _this.state = {
                responsiveMode: _this._getResponsiveMode()
            };
            return _this;
        }
        WithResponsiveMode.prototype.componentDidMount = function () {
            var _this = this;
            this._events.on(window, 'resize', function () {
                var responsiveMode = _this._getResponsiveMode();
                if (responsiveMode !== _this.state.responsiveMode) {
                    _this.setState({
                        responsiveMode: responsiveMode
                    });
                }
            });
        };
        WithResponsiveMode.prototype.componentWillUnmount = function () {
            this._events.dispose();
        };
        WithResponsiveMode.prototype.render = function () {
            var responsiveMode = this.state.responsiveMode;
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](ComposedComponent, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ ref: this._updateComposedComponentRef, responsiveMode: responsiveMode }, this.props));
        };
        WithResponsiveMode.prototype._getResponsiveMode = function () {
            var responsiveMode = ResponsiveMode.small;
            var win = Object(__WEBPACK_IMPORTED_MODULE_3__Utilities__["Q" /* getWindow */])();
            if (typeof win !== 'undefined') {
                try {
                    while (win.innerWidth > RESPONSIVE_MAX_CONSTRAINT[responsiveMode]) {
                        responsiveMode++;
                    }
                }
                catch (e) {
                    // Return a best effort result in cases where we're in the browser but it throws on getting innerWidth.
                    responsiveMode = ResponsiveMode.large;
                }
            }
            else {
                if (_defaultMode !== undefined) {
                    responsiveMode = _defaultMode;
                }
                else {
                    throw new Error('Content was rendered in a server environment without providing a default responsive mode. ' +
                        'Call setResponsiveMode to define what the responsive mode is.');
                }
            }
            return responsiveMode;
        };
        return WithResponsiveMode;
    }(__WEBPACK_IMPORTED_MODULE_2__BaseDecorator__["a" /* BaseDecorator */]));
    return Object(__WEBPACK_IMPORTED_MODULE_3__Utilities__["S" /* hoistStatics */])(ComposedComponent, resultClass);
}


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalSettings; });
/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
// tslint:disable-next-line:no-any
var _global;
var _counter = 0;
if (typeof window !== 'undefined') {
    _global = window;
}
else if (typeof global !== 'undefined') {
    _global = global;
}
else {
    _global = {};
}
// tslint:disable-next-line:no-any
var _globalSettings = (_global[GLOBAL_SETTINGS_PROP_NAME] = _global[GLOBAL_SETTINGS_PROP_NAME] || (_a = {},
    _a[CALLBACK_STATE_PROP_NAME] = {},
    _a));
var _callbacks = _globalSettings[CALLBACK_STATE_PROP_NAME];
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 */
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        if (_globalSettings[key] === undefined) {
            _globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return _globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var oldValue = _globalSettings[key];
        if (value !== oldValue) {
            _globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key
            };
            for (var id in _callbacks) {
                if (_callbacks.hasOwnProperty(id)) {
                    _callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        _callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        delete _callbacks[cb.__id__];
    };
    return GlobalSettings;
}());

var _a;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(61)))

/***/ }),
/* 61 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalSettings; });
/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
// tslint:disable-next-line:no-any
var _global;
var _counter = 0;
if (typeof window !== 'undefined') {
    _global = window;
}
else if (typeof global !== 'undefined') {
    _global = global;
}
else {
    _global = {};
}
// tslint:disable-next-line:no-any
var _globalSettings = (_global[GLOBAL_SETTINGS_PROP_NAME] = _global[GLOBAL_SETTINGS_PROP_NAME] || (_a = {},
    _a[CALLBACK_STATE_PROP_NAME] = {},
    _a));
var _callbacks = _globalSettings[CALLBACK_STATE_PROP_NAME];
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 */
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        if (_globalSettings[key] === undefined) {
            _globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return _globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var oldValue = _globalSettings[key];
        if (value !== oldValue) {
            _globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key
            };
            for (var id in _callbacks) {
                if (_callbacks.hasOwnProperty(id)) {
                    _callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        _callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        delete _callbacks[cb.__id__];
    };
    return GlobalSettings;
}());

var _a;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(61)))

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/version.js
var version = __webpack_require__(54);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Utilities.js + 45 modules
var Utilities = __webpack_require__(44);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(45);

// EXTERNAL MODULE: ./lib/DeveloperTools/FBWrappers/FakeReact.js
var FakeReact = __webpack_require__(13);
var FakeReact_default = /*#__PURE__*/__webpack_require__.n(FakeReact);

// EXTERNAL MODULE: ./lib/DeveloperTools/FBWrappers/FakeReactDOM.js
var FakeReactDOM = __webpack_require__(14);
var FakeReactDOM_default = /*#__PURE__*/__webpack_require__.n(FakeReactDOM);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Styling.js + 74 modules
var Styling = __webpack_require__(46);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.styles.js

var inheritFont = { fontFamily: 'inherit' };
var GlobalClassNames = {
    root: 'ms-Fabric'
};
var getStyles = function (props) {
    var theme = props.theme, className = props.className, isFocusVisible = props.isFocusVisible;
    var classNames = Object(Styling["o" /* getGlobalClassNames */])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            isFocusVisible && 'is-focusVisible',
            theme.fonts.medium,
            {
                color: theme.palette.neutralPrimary,
                selectors: {
                    '& button': inheritFont,
                    '& input': inheritFont,
                    '& textarea': inheritFont,
                    ':global(button)': {
                        overflow: 'visible',
                        margin: 0
                    }
                }
            },
            className
        ]
    };
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.base.js




var getClassNames = Object(Utilities["m" /* classNamesFunction */])();
var Fabric_base_FabricBase = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](FabricBase, _super);
    function FabricBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = FakeReact["createRef"]();
        _this._onMouseDown = function (ev) {
            _this.setState({ isFocusVisible: false });
        };
        _this._onKeyDown = function (ev) {
            if (Object(Utilities["V" /* isDirectionalKeyCode */])(ev.which)) {
                _this.setState({ isFocusVisible: true });
            }
        };
        _this.state = { isFocusVisible: false };
        return _this;
    }
    FabricBase.prototype.render = function () {
        var classNames = getClassNames(getStyles, tslib_es6["a" /* __assign */]({}, this.props, this.state));
        var divProps = Object(Utilities["I" /* getNativeProps */])(this.props, Utilities["r" /* divProperties */]);
        return FakeReact["createElement"]("div", tslib_es6["a" /* __assign */]({}, divProps, { className: classNames.root, ref: this._rootElement }));
    };
    FabricBase.prototype.componentDidMount = function () {
        var win = Object(Utilities["Q" /* getWindow */])(this._rootElement.current);
        if (win) {
            this._events.on(win, 'mousedown', this._onMouseDown, true);
            this._events.on(win, 'keydown', this._onKeyDown, true);
        }
    };
    return FabricBase;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.js



var Fabric = Object(Utilities["_10" /* styled */])(Fabric_base_FabricBase, getStyles, undefined, {
    scope: 'Fabric'
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Fabric/index.js



// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Fabric.js


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.notification.js
var _layersByHostId = {};
var _defaultHostSelector;
/**
 * Register a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */
function registerLayer(hostId, layer) {
    if (!_layersByHostId[hostId]) {
        _layersByHostId[hostId] = [];
    }
    _layersByHostId[hostId].push(layer);
}
/**
 * Unregister a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */
function unregisterLayer(hostId, layer) {
    if (_layersByHostId[hostId]) {
        var idx = _layersByHostId[hostId].indexOf(layer);
        if (idx >= 0) {
            _layersByHostId[hostId].splice(idx, 1);
            if (_layersByHostId[hostId].length === 0) {
                delete _layersByHostId[hostId];
            }
        }
    }
}
/**
 * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
 * care about the specific host.
 */
function notifyHostChanged(id) {
    if (_layersByHostId[id]) {
        _layersByHostId[id].forEach(function (layer) { return layer.forceUpdate(); });
    }
}
/**
 * Sets the default target selector to use when determining the host in which
 * Layered content will be injected into. If not provided, an element will be
 * created at the end of the document body.
 *
 * Passing in a falsey value will clear the default target and reset back to
 * using a created element at the end of document body.
 */
function setDefaultTarget(selector) {
    _defaultHostSelector = selector;
}
/**
 * Get the default target selector when determining a host
 */
function getDefaultTarget() {
    return _defaultHostSelector;
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.base.js






var Layer_base_getClassNames = Object(Utilities["m" /* classNamesFunction */])();
var Layer_base_LayerBase = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](LayerBase, _super);
    function LayerBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = Object(Utilities["n" /* createRef */])();
        /**
         * rootElement wrapper for setting virtual parent as soon as root element ref is available.
         */
        _this._handleRootElementRef = function (ref) {
            _this._rootElement(ref);
            if (ref) {
                // TODO: Calling _setVirtualParent in this ref wrapper SHOULD allow us to remove
                //    other calls to _setVirtualParent throughout this class. However,
                //    as this is an immediate fix for a P0 issue the existing _setVirtualParent
                //    calls are left for now to minimize potential regression.
                _this._setVirtualParent();
            }
        };
        /**
         * Helper to stop events from bubbling up out of Layer.
         */
        _this._filterEvent = function (ev) {
            // We should just be able to check ev.bubble here and only stop events that are bubbling up. However, even though mouseenter and
            //    mouseleave do NOT bubble up, they are showing up as bubbling. Therefore we stop events based on event name rather than ev.bubble.
            if (ev.eventPhase === Event.BUBBLING_PHASE && ev.type !== 'mouseenter' && ev.type !== 'mouseleave') {
                ev.stopPropagation();
            }
        };
        _this.state = {
            hasMounted: false
        };
        _this._warnDeprecations({
            onLayerMounted: 'onLayerDidMount'
        });
        if (_this.props.hostId) {
            registerLayer(_this.props.hostId, _this);
        }
        return _this;
    }
    LayerBase.prototype.componentWillMount = function () {
        this._layerElement = this._getLayerElement();
    };
    LayerBase.prototype.componentWillUpdate = function () {
        if (!this._layerElement) {
            this._layerElement = this._getLayerElement();
        }
    };
    LayerBase.prototype.componentDidMount = function () {
        // We can safely set state immediately because the ref wrapper will make sure the virtual
        //    parent has been set before componentDidMount is called.
        this.setState({ hasMounted: true });
        this._setVirtualParent();
        var _a = this.props, onLayerDidMount = _a.onLayerDidMount, onLayerMounted = _a.onLayerMounted;
        if (onLayerMounted) {
            onLayerMounted();
        }
        if (onLayerDidMount) {
            onLayerDidMount();
        }
    };
    LayerBase.prototype.componentWillUnmount = function () {
        this._removeLayerElement();
        var _a = this.props, onLayerWillUnmount = _a.onLayerWillUnmount, hostId = _a.hostId;
        if (onLayerWillUnmount) {
            onLayerWillUnmount();
        }
        if (hostId) {
            unregisterLayer(hostId, this);
        }
    };
    LayerBase.prototype.componentDidUpdate = function () {
        this._setVirtualParent();
    };
    LayerBase.prototype.render = function () {
        var classNames = this._getClassNames();
        var eventBubblingEnabled = this.props.eventBubblingEnabled;
        var hasMounted = this.state.hasMounted;
        return (FakeReact["createElement"]("span", { className: "ms-layer", ref: this._handleRootElementRef }, this._layerElement &&
            hasMounted &&
            FakeReactDOM["createPortal"](eventBubblingEnabled ? (FakeReact["createElement"](Fabric, { className: classNames.content }, this.props.children)) : (FakeReact["createElement"](Fabric, { className: classNames.content, onClick: this._filterEvent, onContextMenu: this._filterEvent, onDoubleClick: this._filterEvent, onDrag: this._filterEvent, onDragEnd: this._filterEvent, onDragEnter: this._filterEvent, onDragExit: this._filterEvent, onDragLeave: this._filterEvent, onDragOver: this._filterEvent, onDragStart: this._filterEvent, onDrop: this._filterEvent, onMouseDown: this._filterEvent, onMouseEnter: this._filterEvent, onMouseLeave: this._filterEvent, onMouseMove: this._filterEvent, onMouseOver: this._filterEvent, onMouseOut: this._filterEvent, onMouseUp: this._filterEvent, onKeyDown: this._filterEvent, onKeyPress: this._filterEvent, onKeyUp: this._filterEvent, onFocus: this._filterEvent, onBlur: this._filterEvent, onChange: this._filterEvent, onInput: this._filterEvent, onInvalid: this._filterEvent, onSubmit: this._filterEvent }, this.props.children)), this._layerElement)));
    };
    LayerBase.prototype._getClassNames = function () {
        var _a = this.props, className = _a.className, styles = _a.styles, theme = _a.theme;
        var classNames = Layer_base_getClassNames(styles, {
            theme: theme,
            className: className,
            isNotHost: !this.props.hostId
        });
        return classNames;
    };
    LayerBase.prototype._setVirtualParent = function () {
        if (this._rootElement && this._rootElement.current && this._layerElement) {
            Object(Utilities["_7" /* setVirtualParent */])(this._layerElement, this._rootElement.current);
        }
    };
    LayerBase.prototype._getLayerElement = function () {
        var host = this._getHost();
        var classNames = this._getClassNames();
        if (host !== this._host) {
            this._removeLayerElement();
        }
        if (host) {
            this._host = host;
            if (!this._layerElement) {
                var doc = Object(Utilities["A" /* getDocument */])();
                if (!doc) {
                    return;
                }
                this._layerElement = doc.createElement('div');
                this._layerElement.className = classNames.root;
                Object(Utilities["_6" /* setPortalAttribute */])(this._layerElement);
                host.appendChild(this._layerElement);
            }
        }
        return this._layerElement;
    };
    LayerBase.prototype._removeLayerElement = function () {
        if (this._layerElement) {
            this.props.onLayerWillUnmount();
            var parentNode = this._layerElement.parentNode;
            if (parentNode) {
                parentNode.removeChild(this._layerElement);
            }
            this._layerElement = undefined;
        }
    };
    LayerBase.prototype._getHost = function () {
        var hostId = this.props.hostId;
        var doc = Object(Utilities["A" /* getDocument */])();
        if (!doc) {
            return undefined;
        }
        if (hostId) {
            return doc.getElementById(hostId);
        }
        else {
            var defaultHostSelector = getDefaultTarget();
            return defaultHostSelector ? doc.querySelector(defaultHostSelector) : doc.body;
        }
    };
    LayerBase.defaultProps = {
        onLayerDidMount: function () { return undefined; },
        onLayerWillUnmount: function () { return undefined; }
    };
    LayerBase = tslib_es6["b" /* __decorate */]([
        Object(Utilities["p" /* customizable */])('Layer', ['theme', 'hostId'])
    ], LayerBase);
    return LayerBase;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.styles.js

var Layer_styles_GlobalClassNames = {
    root: 'ms-Layer',
    rootNoHost: 'ms-Layer--fixed',
    content: 'ms-Layer-content'
};
var Layer_styles_getStyles = function (props) {
    var className = props.className, isNotHost = props.isNotHost, theme = props.theme;
    var classNames = Object(Styling["o" /* getGlobalClassNames */])(Layer_styles_GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            isNotHost && [
                classNames.rootNoHost,
                {
                    position: 'fixed',
                    zIndex: Styling["k" /* ZIndexes */].Layer,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    visibility: 'hidden'
                }
            ],
            className
        ],
        content: [
            classNames.content,
            {
                visibility: 'visible'
            }
        ]
    };
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.js



var Layer = Object(Utilities["_10" /* styled */])(Layer_base_LayerBase, Layer_styles_getStyles, undefined, {
    scope: 'Layer',
    fields: ['hostId', 'theme', 'styles']
});

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Layer/LayerHost.js




var LayerHost_LayerHost = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](LayerHost, _super);
    function LayerHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerHost.prototype.shouldComponentUpdate = function () {
        return false;
    };
    LayerHost.prototype.componentDidMount = function () {
        notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.componentWillUnmount = function () {
        notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.render = function () {
        return FakeReact["createElement"]("div", tslib_es6["a" /* __assign */]({}, this.props, { className: Object(Utilities["o" /* css */])('ms-LayerHost', this.props.className) }));
    };
    return LayerHost;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Layer/index.js




// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Layer.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return Layer; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return Layer_base_LayerBase; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return LayerHost_LayerHost; });




/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = css;
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if (arg.hasOwnProperty('toString') && typeof arg.toString === 'function') {
                classes.push(arg.toString());
            }
            else {
                // tslint:disable-next-line:no-any
                for (var key in arg) {
                    // tslint:disable-next-line:no-any
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseDecorator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utilities__ = __webpack_require__(44);


var BaseDecorator = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](BaseDecorator, _super);
    function BaseDecorator(props) {
        var _this = _super.call(this, props) || this;
        // tslint:disable-next-line:typedef
        _this._skipComponentRefResolution = true;
        _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
        return _this;
    }
    /**
     * Updates the ref to the component composed by the decorator, which will also take care of hoisting
     * (and unhoisting as appropriate) methods from said component.
     *
     * Pass this method as the argument to the 'ref' property of the composed component.
     */
    BaseDecorator.prototype._updateComposedComponentRef = function (composedComponentInstance) {
        this._composedComponentInstance = composedComponentInstance;
        if (composedComponentInstance) {
            this._hoisted = Object(__WEBPACK_IMPORTED_MODULE_1__Utilities__["R" /* hoistMethods */])(this, composedComponentInstance);
        }
        else if (this._hoisted) {
            Object(__WEBPACK_IMPORTED_MODULE_1__Utilities__["_11" /* unhoistMethods */])(this, this._hoisted);
        }
    };
    return BaseDecorator;
}(__WEBPACK_IMPORTED_MODULE_1__Utilities__["a" /* BaseComponent */]));



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(45);

// EXTERNAL MODULE: ./lib/DeveloperTools/FBWrappers/FakeReact.js
var FakeReact = __webpack_require__(13);
var FakeReact_default = /*#__PURE__*/__webpack_require__.n(FakeReact);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Utilities.js + 45 modules
var Utilities = __webpack_require__(44);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js
var DirectionalHint = __webpack_require__(49);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.types.js
var RectangleEdge;
(function (RectangleEdge) {
    RectangleEdge[RectangleEdge["top"] = 1] = "top";
    RectangleEdge[RectangleEdge["bottom"] = -1] = "bottom";
    RectangleEdge[RectangleEdge["left"] = 2] = "left";
    RectangleEdge[RectangleEdge["right"] = -2] = "right";
})(RectangleEdge || (RectangleEdge = {}));
var Position;
(function (Position) {
    Position[Position["top"] = 0] = "top";
    Position[Position["bottom"] = 1] = "bottom";
    Position[Position["start"] = 2] = "start";
    Position[Position["end"] = 3] = "end";
})(Position || (Position = {}));

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.js




var positioning_Rectangle = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rectangle;
}(Utilities["f" /* Rectangle */]));

function _createPositionData(targetEdge, alignmentEdge, isAuto) {
    return {
        targetEdge: targetEdge,
        alignmentEdge: alignmentEdge,
        isAuto: isAuto
    };
}
// Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target
var DirectionalDictionary = (positioning__a = {},
    positioning__a[DirectionalHint["a" /* DirectionalHint */].topLeftEdge] = _createPositionData(RectangleEdge.top, RectangleEdge.left),
    positioning__a[DirectionalHint["a" /* DirectionalHint */].topCenter] = _createPositionData(RectangleEdge.top),
    positioning__a[DirectionalHint["a" /* DirectionalHint */].topRightEdge] = _createPositionData(RectangleEdge.top, RectangleEdge.right),
    positioning__a[DirectionalHint["a" /* DirectionalHint */].topAutoEdge] = _createPositionData(RectangleEdge.top, undefined, true),
    positioning__a[DirectionalHint["a" /* DirectionalHint */].bottomLeftEdge] = _createPositionData(RectangleEdge.bottom, RectangleEdge.left),
    positioning__a[DirectionalHint["a" /* DirectionalHint */].bottomCenter] = _createPositionData(RectangleEdge.bottom),
    positioning__a[DirectionalHint["a" /* DirectionalHint */].bottomRightEdge] = _createPositionData(RectangleEdge.bottom, RectangleEdge.right),
    positioning__a[DirectionalHint["a" /* DirectionalHint */].bottomAutoEdge] = _createPositionData(RectangleEdge.bottom, undefined, true),
    positioning__a[DirectionalHint["a" /* DirectionalHint */].leftTopEdge] = _createPositionData(RectangleEdge.left, RectangleEdge.top),
    positioning__a[DirectionalHint["a" /* DirectionalHint */].leftCenter] = _createPositionData(RectangleEdge.left),
    positioning__a[DirectionalHint["a" /* DirectionalHint */].leftBottomEdge] = _createPositionData(RectangleEdge.left, RectangleEdge.bottom),
    positioning__a[DirectionalHint["a" /* DirectionalHint */].rightTopEdge] = _createPositionData(RectangleEdge.right, RectangleEdge.top),
    positioning__a[DirectionalHint["a" /* DirectionalHint */].rightCenter] = _createPositionData(RectangleEdge.right),
    positioning__a[DirectionalHint["a" /* DirectionalHint */].rightBottomEdge] = _createPositionData(RectangleEdge.right, RectangleEdge.bottom),
    positioning__a);
function _isRectangleWithinBounds(rect, boundingRect) {
    if (rect.top < boundingRect.top) {
        return false;
    }
    if (rect.bottom > boundingRect.bottom) {
        return false;
    }
    if (rect.left < boundingRect.left) {
        return false;
    }
    if (rect.right > boundingRect.right) {
        return false;
    }
    return true;
}
/**
 * Gets all of the edges of a rectangle that are outside of the given bounds.
 * If there are no out of bounds edges it returns an empty array.
 */
function _getOutOfBoundsEdges(rect, boundingRect) {
    var outOfBounds = new Array();
    if (rect.top < boundingRect.top) {
        outOfBounds.push(RectangleEdge.top);
    }
    if (rect.bottom > boundingRect.bottom) {
        outOfBounds.push(RectangleEdge.bottom);
    }
    if (rect.left < boundingRect.left) {
        outOfBounds.push(RectangleEdge.left);
    }
    if (rect.right > boundingRect.right) {
        outOfBounds.push(RectangleEdge.right);
    }
    return outOfBounds;
}
function _getEdgeValue(rect, edge) {
    return rect[RectangleEdge[edge]];
}
function _setEdgeValue(rect, edge, value) {
    rect[RectangleEdge[edge]] = value;
    return rect;
}
/**
 * Returns the middle value of an edge. Only returns 1 value rather than xy coordinates as
 * the itself already contains the other coordinate.
 * For instance, a bottom edge's current value is it's y coordinate, so the number returned is the x.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @returns {number}
 */
function _getCenterValue(rect, edge) {
    var edges = _getFlankingEdges(edge);
    return (_getEdgeValue(rect, edges.positiveEdge) + _getEdgeValue(rect, edges.negativeEdge)) / 2;
}
/**
 * Flips the value depending on the edge.
 * If the edge is a "positive" edge, Top or Left, then the value should stay as it is.
 * If the edge is a "negative" edge, Bottom or Right, then the value should be flipped.
 * This is to account for the fact that the coordinates are effectively reveserved in certain cases for the "negative" edges.
 * For example, when testing to see if a bottom edge 1 is within the bounds of another bottom edge 2.
 * If edge 1 is greater than edge 2 then it is out of bounds. This is reversed for top edge 1 and top edge 2.
 * If top edge 1 is less than edge 2 then it is out of bounds.
 *
 *
 * @param {RectangleEdge} edge
 * @param {number} value
 * @returns {number}
 */
function _getRelativeEdgeValue(edge, value) {
    if (edge > 0) {
        return value;
    }
    else {
        return value * -1;
    }
}
function _getRelativeRectEdgeValue(edge, rect) {
    return _getRelativeEdgeValue(edge, _getEdgeValue(rect, edge));
}
function _getRelativeEdgeDifference(rect, hostRect, edge) {
    var edgeDifference = _getEdgeValue(rect, edge) - _getEdgeValue(hostRect, edge);
    return _getRelativeEdgeValue(edge, edgeDifference);
}
/**
 * Moves the edge of a rectangle to the value given. It only moves the edge in a linear direction based on that edge.
 * For example, if it's a bottom edge it will only change y coordinates.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @param {number} newValue
 * @returns {Rectangle}
 */
function _moveEdge(rect, edge, newValue) {
    var difference = _getEdgeValue(rect, edge) - newValue;
    rect = _setEdgeValue(rect, edge, newValue);
    rect = _setEdgeValue(rect, edge * -1, _getEdgeValue(rect, edge * -1) - difference);
    return rect;
}
/**
 * Aligns the edge on the passed in rect to the target. If there is a gap then it will have that space between the two.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {RectangleEdge} edge
 * @param {number} [gap=0]
 * @returns {Rectangle}
 */
function _alignEdges(rect, target, edge, gap) {
    if (gap === void 0) { gap = 0; }
    return _moveEdge(rect, edge, _getEdgeValue(target, edge) + _getRelativeEdgeValue(edge, gap));
}
/**
 * Aligns the targetEdge on the passed in target to the rects corresponding opposite edge.
 * For instance if targetEdge is bottom, then the rects top will be moved to match it.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {RectangleEdge} targetEdge
 * @param {number} [gap=0]
 * @returns {Rectangle}
 */
function _alignOppositeEdges(rect, target, targetEdge, gap) {
    if (gap === void 0) { gap = 0; }
    var oppositeEdge = targetEdge * -1;
    var adjustedGap = _getRelativeEdgeValue(oppositeEdge, gap);
    return _moveEdge(rect, targetEdge * -1, _getEdgeValue(target, targetEdge) + adjustedGap);
}
/**
 * Tests to see if the given edge is within the bounds of the given rectangle.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} bounds
 * @param {RectangleEdge} edge
 * @returns {boolean}
 */
function _isEdgeInBounds(rect, bounds, edge) {
    var adjustedRectValue = _getRelativeRectEdgeValue(edge, rect);
    return adjustedRectValue > _getRelativeRectEdgeValue(edge, bounds);
}
/**
 * Attempts to move the rectangle through various sides of the target to find a place to fit.
 * If no fit is found, the original position should be returned.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {Rectangle} bounding
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @returns {IElementPosition}
 */
function _flipToFit(rect, target, bounding, positionData, gap) {
    if (gap === void 0) { gap = 0; }
    var directions = [RectangleEdge.left, RectangleEdge.right, RectangleEdge.bottom, RectangleEdge.top];
    var currentEstimate = rect;
    var currentEdge = positionData.targetEdge;
    var currentAlignment = positionData.alignmentEdge;
    // Keep switching sides until one is found with enough space. If all sides don't fit then return the unmodified element.
    for (var i = 0; i < 4; i++) {
        if (!_isEdgeInBounds(currentEstimate, bounding, currentEdge)) {
            directions.splice(directions.indexOf(currentEdge), 1);
            if (directions.indexOf(currentEdge * -1) > -1) {
                currentEdge = currentEdge * -1;
            }
            else {
                currentAlignment = currentEdge;
                currentEdge = directions.slice(-1)[0];
            }
            currentEstimate = _estimatePosition(rect, target, { targetEdge: currentEdge, alignmentEdge: currentAlignment }, gap);
        }
        else {
            return {
                elementRectangle: currentEstimate,
                targetEdge: currentEdge,
                alignmentEdge: currentAlignment
            };
        }
    }
    return {
        elementRectangle: rect,
        targetEdge: positionData.targetEdge,
        alignmentEdge: currentAlignment
    };
}
/**
 * Flips only the alignment edge of an element rectangle. This is used instead of nudging the alignment edges into position,
 * when alignTargetEdge is specified.
 * @param elementEstimate
 * @param target
 * @param bounding
 * @param gap
 */
function _flipAlignmentEdge(elementEstimate, target, gap, coverTarget) {
    var alignmentEdge = elementEstimate.alignmentEdge, targetEdge = elementEstimate.targetEdge, elementRectangle = elementEstimate.elementRectangle;
    var oppositeEdge = alignmentEdge * -1;
    var newEstimate = _estimatePosition(elementRectangle, target, { targetEdge: targetEdge, alignmentEdge: oppositeEdge }, gap, coverTarget);
    return {
        elementRectangle: newEstimate,
        targetEdge: targetEdge,
        alignmentEdge: oppositeEdge
    };
}
/**
 * Adjusts a element rectangle to fit within the bounds given. If directionalHintFixed or covertarget is passed in
 * then the element will not flip sides on the target. They will, however, be nudged to fit within the bounds given.
 *
 * @param {Rectangle} element
 * @param {Rectangle} target
 * @param {Rectangle} bounding
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @param {boolean} [directionalHintFixed]
 * @param {boolean} [coverTarget]
 * @returns {IElementPosition}
 */
function _adjustFitWithinBounds(element, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
    if (gap === void 0) { gap = 0; }
    var alignmentEdge = positionData.alignmentEdge, alignTargetEdge = positionData.alignTargetEdge;
    var elementEstimate = {
        elementRectangle: element,
        targetEdge: positionData.targetEdge,
        alignmentEdge: alignmentEdge
    };
    if (!directionalHintFixed && !coverTarget) {
        elementEstimate = _flipToFit(element, target, bounding, positionData, gap);
    }
    var outOfBounds = _getOutOfBoundsEdges(element, bounding);
    if (alignTargetEdge) {
        // The edge opposite to the alignment edge might be out of bounds. Flip alignment to see if we can get it within bounds.
        if (elementEstimate.alignmentEdge && outOfBounds.indexOf(elementEstimate.alignmentEdge * -1) > -1) {
            var flippedElementEstimate = _flipAlignmentEdge(elementEstimate, target, gap, coverTarget);
            if (_isRectangleWithinBounds(flippedElementEstimate.elementRectangle, bounding)) {
                return flippedElementEstimate;
            }
        }
    }
    else {
        for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
            var direction = outOfBounds_1[_i];
            elementEstimate.elementRectangle = _alignEdges(elementEstimate.elementRectangle, bounding, direction);
        }
    }
    return elementEstimate;
}
/**
 * Moves the middle point on an edge to the point given.
 * Only moves in one direction. For instance if a bottom edge is passed in, then
 * the bottom edge will be moved in the x axis to match the point.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @param {number} point
 * @returns {Rectangle}
 */
function _centerEdgeToPoint(rect, edge, point) {
    var positiveEdge = _getFlankingEdges(edge).positiveEdge;
    var elementMiddle = _getCenterValue(rect, edge);
    var distanceToMiddle = elementMiddle - _getEdgeValue(rect, positiveEdge);
    return _moveEdge(rect, positiveEdge, point - distanceToMiddle);
}
/**
 * Moves the element rectangle to be appropriately positioned relative to a given target.
 * Does not flip or adjust the element.
 *
 * @param {Rectangle} elementToPosition
 * @param {Rectangle} target
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @param {boolean} [coverTarget]
 * @returns {Rectangle}
 */
function _estimatePosition(elementToPosition, target, positionData, gap, coverTarget) {
    if (gap === void 0) { gap = 0; }
    var estimatedElementPosition;
    var alignmentEdge = positionData.alignmentEdge, targetEdge = positionData.targetEdge;
    var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
    estimatedElementPosition = coverTarget
        ? _alignEdges(elementToPosition, target, targetEdge, gap)
        : _alignOppositeEdges(elementToPosition, target, targetEdge, gap);
    // if no alignment edge is provided it's supposed to be centered.
    if (!alignmentEdge) {
        var targetMiddlePoint = _getCenterValue(target, targetEdge);
        estimatedElementPosition = _centerEdgeToPoint(estimatedElementPosition, elementEdge, targetMiddlePoint);
    }
    else {
        estimatedElementPosition = _alignEdges(estimatedElementPosition, target, alignmentEdge);
    }
    return estimatedElementPosition;
}
/**
 * Returns the non-opposite edges of the target edge.
 * For instance if bottom is passed in then left and right will be returned.
 *
 * @param {RectangleEdge} edge
 * @returns {{ firstEdge: RectangleEdge, secondEdge: RectangleEdge }}
 */
function _getFlankingEdges(edge) {
    if (edge === RectangleEdge.top || edge === RectangleEdge.bottom) {
        return {
            positiveEdge: RectangleEdge.left,
            negativeEdge: RectangleEdge.right
        };
    }
    else {
        return {
            positiveEdge: RectangleEdge.top,
            negativeEdge: RectangleEdge.bottom
        };
    }
}
/**
 * Finalizes the element positon based on the hostElement. Only returns the
 * rectangle values to position such that they are anchored to the target.
 * This helps prevent resizing from looking very strange.
 * For instance, if the target edge is top and aligned with the left side then
 * the bottom and left values are returned so as the callou shrinks it shrinks towards that corner.
 *
 * @param {Rectangle} elementRectangle
 * @param {HTMLElement} hostElement
 * @param {RectangleEdge} targetEdge
 * @param {RectangleEdge} bounds
 * @param {RectangleEdge} [alignmentEdge]
 * @param {boolean} coverTarget
 * @returns {IPartialIRectangle}
 */
function _finalizeElementPosition(elementRectangle, hostElement, targetEdge, bounds, alignmentEdge, coverTarget) {
    var returnValue = {};
    var hostRect = _getRectangleFromElement(hostElement);
    var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
    var elementEdgeString = RectangleEdge[elementEdge];
    var returnEdge = alignmentEdge ? alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge;
    // if the element is closer to one side of the bounds than the other, flip the return edge to ensure it grows inwards
    if (bounds &&
        Math.abs(_getRelativeEdgeDifference(elementRectangle, bounds, returnEdge)) >
            Math.abs(_getRelativeEdgeDifference(elementRectangle, bounds, returnEdge * -1))) {
        returnEdge = returnEdge * -1;
    }
    returnValue[elementEdgeString] = _getRelativeEdgeDifference(elementRectangle, hostRect, elementEdge);
    returnValue[RectangleEdge[returnEdge]] = _getRelativeEdgeDifference(elementRectangle, hostRect, returnEdge);
    return returnValue;
}
// Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
// We still want to position the beak based on it's midpoint which does not change. It will
// be at (beakwidth / 2, beakwidth / 2)
function _calculateActualBeakWidthInPixels(beakWidth) {
    return Math.sqrt(beakWidth * beakWidth * 2);
}
/**
 * Returns the appropriate IPositionData based on the props altered for RTL.
 * If directionalHintForRTL is passed in that is used if the page is RTL.
 * If a directionalHint is specified and no directionalHintForRTL is available and the page is RTL the hint will be flipped.
 * For instance bottomLeftEdge would become bottomRightEdge.
 * If there is no directionalHint passed in bottomAutoEdge is chosen automatically.
 *
 * @param {IPositionProps} props
 * @returns {IPositionDirectionalHintData}
 */
function _getPositionData(directionalHint, directionalHintForRTL, previousPositions) {
    if (directionalHint === void 0) { directionalHint = DirectionalHint["a" /* DirectionalHint */].bottomAutoEdge; }
    if (previousPositions) {
        return {
            alignmentEdge: previousPositions.alignmentEdge,
            isAuto: previousPositions.isAuto,
            targetEdge: previousPositions.targetEdge
        };
    }
    var positionInformation = tslib_es6["a" /* __assign */]({}, DirectionalDictionary[directionalHint]);
    if (Object(Utilities["M" /* getRTL */])()) {
        // If alignment edge exists and that alignment edge is -2 or 2, right or left, then flip it.
        if (positionInformation.alignmentEdge && positionInformation.alignmentEdge % 2 === 0) {
            positionInformation.alignmentEdge = positionInformation.alignmentEdge * -1;
        }
        return directionalHintForRTL !== undefined ? DirectionalDictionary[directionalHintForRTL] : positionInformation;
    }
    return positionInformation;
}
/**
 * Get's the alignment data for the given information. This only really matters if the positioning is Auto.
 * If it is auto then the alignmentEdge should be chosen based on the target edge's position relative to
 * the center of the page.
 *
 * @param {IPositionDirectionalHintData} positionData
 * @param {Rectangle} target
 * @param {Rectangle} boundingRect
 * @param {boolean} [coverTarget]
 * @returns {IPositionDirectionalHintData}
 */
function _getAlignmentData(positionData, target, boundingRect, coverTarget, alignTargetEdge) {
    if (positionData.isAuto) {
        positionData.alignmentEdge = getClosestEdge(positionData.targetEdge, target, boundingRect);
    }
    positionData.alignTargetEdge = alignTargetEdge;
    return positionData;
}
function getClosestEdge(targetEdge, target, boundingRect) {
    var targetCenter = _getCenterValue(target, targetEdge);
    var boundingCenter = _getCenterValue(boundingRect, targetEdge);
    var _a = _getFlankingEdges(targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
    if (targetCenter <= boundingCenter) {
        return positiveEdge;
    }
    else {
        return negativeEdge;
    }
}
function _positionElementWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
    var estimatedElementPosition = _estimatePosition(elementToPosition, target, positionData, gap, coverTarget);
    if (_isRectangleWithinBounds(estimatedElementPosition, bounding)) {
        return {
            elementRectangle: estimatedElementPosition,
            targetEdge: positionData.targetEdge,
            alignmentEdge: positionData.alignmentEdge
        };
    }
    else {
        return _adjustFitWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget);
    }
}
function _finalizeBeakPosition(elementPosition, positionedBeak) {
    var targetEdge = elementPosition.targetEdge * -1;
    // The "host" element that we will use to help position the beak.
    var actualElement = new positioning_Rectangle(0, elementPosition.elementRectangle.width, 0, elementPosition.elementRectangle.height);
    var returnEdge = elementPosition.alignmentEdge ? elementPosition.alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge;
    var returnValue = {};
    returnValue[RectangleEdge[targetEdge]] = _getEdgeValue(positionedBeak, targetEdge);
    returnValue[RectangleEdge[returnEdge]] = _getRelativeEdgeDifference(positionedBeak, actualElement, returnEdge);
    return {
        elementPosition: tslib_es6["a" /* __assign */]({}, returnValue),
        closestEdge: getClosestEdge(elementPosition.targetEdge, positionedBeak, actualElement),
        targetEdge: targetEdge
    };
}
function _positionBeak(beakWidth, elementPosition) {
    var target = elementPosition.targetRectangle;
    /**
     * Note about beak positioning: The actual beak width only matters for getting the gap between the callout and
     * target, it does not impact the beak placement within the callout. For example example, if the beakWidth is 8,
     * then the actual beakWidth is sqrroot(8^2 + 8^2) = 11.31x11.31. So the callout will need to be an extra 3 pixels
     * away from its target. While the beak is being positioned in the callout it still acts as though it were 8x8.
     * */
    var _a = _getFlankingEdges(elementPosition.targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
    var beakTargetPoint = _getCenterValue(target, elementPosition.targetEdge);
    var elementBounds = new positioning_Rectangle(beakWidth / 2, elementPosition.elementRectangle.width - beakWidth / 2, beakWidth / 2, elementPosition.elementRectangle.height - beakWidth / 2);
    var beakPositon = new positioning_Rectangle(0, beakWidth, 0, beakWidth);
    beakPositon = _moveEdge(beakPositon, elementPosition.targetEdge * -1, -beakWidth / 2);
    beakPositon = _centerEdgeToPoint(beakPositon, elementPosition.targetEdge * -1, beakTargetPoint - _getRelativeRectEdgeValue(positiveEdge, elementPosition.elementRectangle));
    if (!_isEdgeInBounds(beakPositon, elementBounds, positiveEdge)) {
        beakPositon = _alignEdges(beakPositon, elementBounds, positiveEdge);
    }
    else if (!_isEdgeInBounds(beakPositon, elementBounds, negativeEdge)) {
        beakPositon = _alignEdges(beakPositon, elementBounds, negativeEdge);
    }
    return beakPositon;
}
function _getRectangleFromElement(element) {
    var clientRect = element.getBoundingClientRect();
    return new positioning_Rectangle(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
}
function _getRectangleFromIRect(rect) {
    return new positioning_Rectangle(rect.left, rect.right, rect.top, rect.bottom);
}
function _getTargetRect(bounds, target) {
    var targetRectangle;
    if (target) {
        if (target.preventDefault) {
            var ev = target;
            targetRectangle = new positioning_Rectangle(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
        }
        else if (target.getBoundingClientRect) {
            targetRectangle = _getRectangleFromElement(target);
            // HTMLImgElements can have x and y values. The check for it being a point must go last.
        }
        else {
            var point = target;
            targetRectangle = new positioning_Rectangle(point.x, point.x, point.y, point.y);
        }
        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
            for (var _i = 0, outOfBounds_2 = outOfBounds; _i < outOfBounds_2.length; _i++) {
                var direction = outOfBounds_2[_i];
                targetRectangle[RectangleEdge[direction]] = bounds[RectangleEdge[direction]];
            }
        }
    }
    else {
        targetRectangle = new positioning_Rectangle(0, 0, 0, 0);
    }
    return targetRectangle;
}
/**
 * If max height is less than zero it returns the bounds height instead.
 */
function _getMaxHeightFromTargetRectangle(targetRectangle, targetEdge, gapSpace, bounds, coverTarget) {
    var maxHeight = 0;
    var directionalHint = DirectionalDictionary[targetEdge];
    // If cover target is set, then the max height should be calculated using the opposite of the target edge since
    // that's the direction that the callout will expand in.
    // For instance, if the directionalhint is bottomLeftEdge then the callout will position so it's bottom edge
    // is aligned with the bottom of the target and expand up towards the top of the screen and the calculated max height
    // is (bottom of target) - (top of screen) - gapSpace.
    var target = coverTarget ? directionalHint.targetEdge * -1 : directionalHint.targetEdge;
    if (target === RectangleEdge.top) {
        maxHeight = _getEdgeValue(targetRectangle, directionalHint.targetEdge) - bounds.top - gapSpace;
    }
    else if (target === RectangleEdge.bottom) {
        maxHeight = bounds.bottom - _getEdgeValue(targetRectangle, directionalHint.targetEdge) - gapSpace;
    }
    else {
        maxHeight = bounds.bottom - targetRectangle.top - gapSpace;
    }
    return maxHeight > 0 ? maxHeight : bounds.height;
}
function _positionElementRelative(props, elementToPosition, boundingRect, previousPositions) {
    var gap = props.gapSpace ? props.gapSpace : 0;
    var targetRect = _getTargetRect(boundingRect, props.target);
    var positionData = _getAlignmentData(_getPositionData(props.directionalHint, props.directionalHintForRTL, previousPositions), targetRect, boundingRect, props.coverTarget, props.alignTargetEdge);
    var positionedElement = _positionElementWithinBounds(_getRectangleFromElement(elementToPosition), targetRect, boundingRect, positionData, gap, props.directionalHintFixed, props.coverTarget);
    return tslib_es6["a" /* __assign */]({}, positionedElement, { targetRectangle: targetRect });
}
function _finalizePositionData(positionedElement, hostElement, bounds, coverTarget) {
    var finalizedElement = _finalizeElementPosition(positionedElement.elementRectangle, hostElement, positionedElement.targetEdge, bounds, positionedElement.alignmentEdge, coverTarget);
    return {
        elementPosition: finalizedElement,
        targetEdge: positionedElement.targetEdge,
        alignmentEdge: positionedElement.alignmentEdge
    };
}
function _positionElement(props, hostElement, elementToPosition, previousPositions) {
    var boundingRect = props.bounds
        ? _getRectangleFromIRect(props.bounds)
        : new positioning_Rectangle(0, window.innerWidth - Object(Utilities["P" /* getScrollbarWidth */])(), 0, window.innerHeight);
    var positionedElement = _positionElementRelative(props, elementToPosition, boundingRect, previousPositions);
    return _finalizePositionData(positionedElement, hostElement, boundingRect, props.coverTarget);
}
function _positionCallout(props, hostElement, callout, previousPositions) {
    var beakWidth = props.isBeakVisible ? props.beakWidth || 0 : 0;
    var gap = _calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
    var positionProps = props;
    positionProps.gapSpace = gap;
    var boundingRect = props.bounds
        ? _getRectangleFromIRect(props.bounds)
        : new positioning_Rectangle(0, window.innerWidth - Object(Utilities["P" /* getScrollbarWidth */])(), 0, window.innerHeight);
    var positionedElement = _positionElementRelative(positionProps, callout, boundingRect, previousPositions);
    var beakPositioned = _positionBeak(beakWidth, positionedElement);
    var finalizedBeakPosition = _finalizeBeakPosition(positionedElement, beakPositioned);
    return tslib_es6["a" /* __assign */]({}, _finalizePositionData(positionedElement, hostElement, boundingRect, props.coverTarget), { beakPosition: finalizedBeakPosition });
}
// END PRIVATE FUNCTIONS
/* tslint:disable:variable-name */
var __positioningTestPackage = {
    _finalizePositionData: _finalizePositionData,
    _calculateActualBeakWidthInPixels: _calculateActualBeakWidthInPixels,
    _positionElementWithinBounds: _positionElementWithinBounds,
    _positionBeak: _positionBeak,
    _getPositionData: _getPositionData,
    _getMaxHeightFromTargetRectangle: _getMaxHeightFromTargetRectangle
};
/* tslint:enable:variable-name */
/**
 * Used to position an element relative to the given positioning props.
 * If positioning has been completed before, previousPositioningData
 * can be passed to ensure that the positioning element repositions based on
 * its previous targets rather than starting with directionalhint.
 *
 * @export
 * @param {IPositionProps} props
 * @param {HTMLElement} hostElement
 * @param {HTMLElement} elementToPosition
 * @param {IPositionedData} previousPositions
 * @returns
 */
function positionElement(props, hostElement, elementToPosition, previousPositions) {
    return _positionElement(props, hostElement, elementToPosition, previousPositions);
}
function positionCallout(props, hostElement, elementToPosition, previousPositions) {
    return _positionCallout(props, hostElement, elementToPosition, previousPositions);
}
/**
 * Get's the maximum height that a rectangle can have in order to fit below or above a target.
 * If the directional hint specifies a left or right edge (i.e. leftCenter) it will limit the height to the topBorder
 * of the target given.
 * If no bounds are provided then the window is treated as the bounds.
 */
function getMaxHeight(target, targetEdge, gapSpace, bounds, coverTarget) {
    if (gapSpace === void 0) { gapSpace = 0; }
    var mouseTarget = target;
    var elementTarget = target;
    var pointTarget = target;
    var targetRect;
    var boundingRectangle = bounds
        ? _getRectangleFromIRect(bounds)
        : new positioning_Rectangle(0, window.innerWidth - Object(Utilities["P" /* getScrollbarWidth */])(), 0, window.innerHeight);
    if (mouseTarget.stopPropagation) {
        targetRect = new positioning_Rectangle(mouseTarget.clientX, mouseTarget.clientX, mouseTarget.clientY, mouseTarget.clientY);
    }
    else if (pointTarget.x !== undefined && pointTarget.y !== undefined) {
        targetRect = new positioning_Rectangle(pointTarget.x, pointTarget.x, pointTarget.y, pointTarget.y);
    }
    else {
        targetRect = _getRectangleFromElement(elementTarget);
    }
    return _getMaxHeightFromTargetRectangle(targetRect, targetEdge, gapSpace, boundingRectangle, coverTarget);
}
/**
 * Returns the opposite edge of the given RectangleEdge.
 */
function getOppositeEdge(edge) {
    return edge * -1;
}
var positioning__a;

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/utilities/positioning/index.js



// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/utilities/positioning.js


// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Popup/index.js + 1 modules
var Popup = __webpack_require__(67);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Popup.js


// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Styling.js + 74 modules
var Styling = __webpack_require__(46);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.base.js








var ANIMATIONS = (CalloutContent_base__a = {},
    CalloutContent_base__a[RectangleEdge.top] = Styling["a" /* AnimationClassNames */].slideUpIn10,
    CalloutContent_base__a[RectangleEdge.bottom] = Styling["a" /* AnimationClassNames */].slideDownIn10,
    CalloutContent_base__a[RectangleEdge.left] = Styling["a" /* AnimationClassNames */].slideLeftIn10,
    CalloutContent_base__a[RectangleEdge.right] = Styling["a" /* AnimationClassNames */].slideRightIn10,
    CalloutContent_base__a);
var getClassNames = Object(Utilities["m" /* classNamesFunction */])();
var BORDER_WIDTH = 1;
var BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
// Microsoft Edge will overwrite inline styles if there is an animation pertaining to that style.
// To help ensure that edge will respect the offscreen style opacity
// filter needs to be added as an additional way to set opacity.
var OFF_SCREEN_STYLE = { opacity: 0, filter: 'opacity(0)' };
var CalloutContent_base_CalloutContentBase = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](CalloutContentBase, _super);
    function CalloutContentBase(props) {
        var _this = _super.call(this, props) || this;
        _this._hostElement = FakeReact["createRef"]();
        _this._calloutElement = FakeReact["createRef"]();
        _this._hasListeners = false;
        _this.dismiss = function (ev) {
            var onDismiss = _this.props.onDismiss;
            if (onDismiss) {
                onDismiss(ev);
            }
        };
        _this._setInitialFocus = function () {
            if (_this.props.setInitialFocus && !_this._didSetInitialFocus && _this.state.positions && _this._calloutElement.current) {
                _this._didSetInitialFocus = true;
                _this._async.requestAnimationFrame(function () { return Object(Utilities["z" /* focusFirstChild */])(_this._calloutElement.current); });
            }
        };
        _this._onComponentDidMount = function () {
            _this._addListeners();
            if (_this.props.onLayerMounted) {
                _this.props.onLayerMounted();
            }
            _this._updateAsyncPosition();
            _this._setHeightOffsetEveryFrame();
        };
        _this._didSetInitialFocus = false;
        _this.state = {
            positions: undefined,
            slideDirectionalClassName: undefined,
            // @TODO it looks like this is not even being used anymore.
            calloutElementRect: undefined,
            heightOffset: 0
        };
        _this._positionAttempts = 0;
        return _this;
    }
    CalloutContentBase.prototype.componentDidUpdate = function () {
        if (!this.props.hidden) {
            this._setInitialFocus();
            if (!this._hasListeners) {
                this._addListeners();
            }
            this._updateAsyncPosition();
        }
        else {
            if (this._hasListeners) {
                this._removeListeners();
            }
        }
    };
    CalloutContentBase.prototype.componentWillMount = function () {
        this._setTargetWindowAndElement(this._getTarget());
    };
    CalloutContentBase.prototype.componentWillUpdate = function (newProps) {
        // If the target element changed, find the new one. If we are tracking target with class name, always find element because we
        // do not know if fabric has rendered a new element and disposed the old element.
        var newTarget = this._getTarget(newProps);
        var oldTarget = this._getTarget();
        if ((newTarget !== oldTarget || typeof newTarget === 'string' || newTarget instanceof String) && !this._blockResetHeight) {
            this._maxHeight = undefined;
            this._setTargetWindowAndElement(newTarget);
        }
        if (newProps.gapSpace !== this.props.gapSpace || this.props.beakWidth !== newProps.beakWidth) {
            this._maxHeight = undefined;
        }
        if (newProps.finalHeight !== this.props.finalHeight) {
            this._setHeightOffsetEveryFrame();
        }
        // if the callout becomes hidden, then remove any positions, bounds that were placed on it.
        if (newProps.hidden && newProps.hidden !== this.props.hidden) {
            this.setState({
                positions: undefined
            });
            this._didSetInitialFocus = false;
            this._bounds = undefined;
        }
        this._blockResetHeight = false;
    };
    CalloutContentBase.prototype.componentDidMount = function () {
        if (!this.props.hidden) {
            this._onComponentDidMount();
        }
    };
    CalloutContentBase.prototype.render = function () {
        // If there is no target window then we are likely in server side rendering and we should not render anything.
        if (!this._targetWindow) {
            return null;
        }
        var target = this.props.target;
        var _a = this.props, styles = _a.styles, style = _a.style, role = _a.role, ariaLabel = _a.ariaLabel, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className, isBeakVisible = _a.isBeakVisible, children = _a.children, beakWidth = _a.beakWidth, calloutWidth = _a.calloutWidth, calloutMaxWidth = _a.calloutMaxWidth, finalHeight = _a.finalHeight, _b = _a.hideOverflow, hideOverflow = _b === void 0 ? !!finalHeight : _b, backgroundColor = _a.backgroundColor, calloutMaxHeight = _a.calloutMaxHeight, onScroll = _a.onScroll;
        target = this._getTarget();
        var positions = this.state.positions;
        var getContentMaxHeight = this._getMaxHeight() ? this._getMaxHeight() + this.state.heightOffset : undefined;
        var contentMaxHeight = calloutMaxHeight && getContentMaxHeight && calloutMaxHeight < getContentMaxHeight ? calloutMaxHeight : getContentMaxHeight;
        var overflowYHidden = hideOverflow;
        var beakVisible = isBeakVisible && !!target;
        this._classNames = getClassNames(styles, {
            theme: this.props.theme,
            className: className,
            overflowYHidden: overflowYHidden,
            calloutWidth: calloutWidth,
            positions: positions,
            beakWidth: beakWidth,
            backgroundColor: backgroundColor,
            calloutMaxWidth: calloutMaxWidth
        });
        var overflowStyle = tslib_es6["a" /* __assign */]({}, style, { maxHeight: contentMaxHeight }, (overflowYHidden && { overflowY: 'hidden' }));
        var visibilityStyle = this.props.hidden ? { visibility: 'hidden' } : undefined;
        // React.CSSProperties does not understand IRawStyle, so the inline animations will need to be cast as any for now.
        var content = (FakeReact["createElement"]("div", { ref: this._hostElement, className: this._classNames.container, style: visibilityStyle },
            FakeReact["createElement"]("div", tslib_es6["a" /* __assign */]({}, Object(Utilities["I" /* getNativeProps */])(this.props, Utilities["r" /* divProperties */]), { className: Object(Utilities["o" /* css */])(this._classNames.root, positions && positions.targetEdge && ANIMATIONS[positions.targetEdge]), style: positions ? positions.elementPosition : OFF_SCREEN_STYLE, tabIndex: -1, 
                // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
                ref: this._calloutElement }),
                beakVisible && FakeReact["createElement"]("div", { className: this._classNames.beak, style: this._getBeakPosition() }),
                beakVisible && FakeReact["createElement"]("div", { className: this._classNames.beakCurtain }),
                FakeReact["createElement"](Popup["a" /* Popup */], { role: role, ariaLabel: ariaLabel, ariaDescribedBy: ariaDescribedBy, ariaLabelledBy: ariaLabelledBy, className: this._classNames.calloutMain, onDismiss: this.dismiss, onScroll: onScroll, shouldRestoreFocus: true, style: overflowStyle }, children))));
        return content;
    };
    CalloutContentBase.prototype._dismissOnScroll = function (ev) {
        var preventDismissOnScroll = this.props.preventDismissOnScroll;
        if (this.state.positions && !preventDismissOnScroll) {
            this._dismissOnLostFocus(ev);
        }
    };
    CalloutContentBase.prototype._dismissOnResize = function (ev) {
        var preventDismissOnResize = this.props.preventDismissOnResize;
        if (!preventDismissOnResize) {
            this.dismiss(ev);
        }
    };
    CalloutContentBase.prototype._dismissOnLostFocus = function (ev) {
        var target = ev.target;
        var clickedOutsideCallout = this._hostElement.current && !Object(Utilities["t" /* elementContains */])(this._hostElement.current, target);
        var preventDismissOnLostFocus = this.props.preventDismissOnLostFocus;
        if (!preventDismissOnLostFocus &&
            ((!this._target && clickedOutsideCallout) ||
                (ev.target !== this._targetWindow &&
                    clickedOutsideCallout &&
                    (this._target.stopPropagation ||
                        (!this._target || (target !== this._target && !Object(Utilities["t" /* elementContains */])(this._target, target))))))) {
            this.dismiss(ev);
        }
    };
    CalloutContentBase.prototype._addListeners = function () {
        var _this = this;
        // This is added so the callout will dismiss when the window is scrolled
        // but not when something inside the callout is scrolled. The delay seems
        // to be required to avoid React firing an async focus event in IE from
        // the target changing focus quickly prior to rendering the callout.
        this._async.setTimeout(function () {
            _this._events.on(_this._targetWindow, 'scroll', _this._dismissOnScroll, true);
            _this._events.on(_this._targetWindow, 'resize', _this._dismissOnResize, true);
            _this._events.on(_this._targetWindow.document.documentElement, 'focus', _this._dismissOnLostFocus, true);
            _this._events.on(_this._targetWindow.document.documentElement, 'click', _this._dismissOnLostFocus, true);
            _this._hasListeners = true;
        }, 0);
    };
    CalloutContentBase.prototype._removeListeners = function () {
        this._events.off(this._targetWindow, 'scroll', this._dismissOnScroll, true);
        this._events.off(this._targetWindow, 'resize', this._dismissOnResize, true);
        this._events.off(this._targetWindow.document.documentElement, 'focus', this._dismissOnLostFocus, true);
        this._events.off(this._targetWindow.document.documentElement, 'click', this._dismissOnLostFocus, true);
        this._hasListeners = false;
    };
    CalloutContentBase.prototype._updateAsyncPosition = function () {
        var _this = this;
        this._async.requestAnimationFrame(function () { return _this._updatePosition(); });
    };
    CalloutContentBase.prototype._getBeakPosition = function () {
        var positions = this.state.positions;
        var beakPostionStyle = tslib_es6["a" /* __assign */]({}, (positions && positions.beakPosition ? positions.beakPosition.elementPosition : null));
        if (!beakPostionStyle.top && !beakPostionStyle.bottom && !beakPostionStyle.left && !beakPostionStyle.right) {
            beakPostionStyle.left = BEAK_ORIGIN_POSITION.left;
            beakPostionStyle.top = BEAK_ORIGIN_POSITION.top;
        }
        return beakPostionStyle;
    };
    CalloutContentBase.prototype._updatePosition = function () {
        // Try to update the target, page might have changed
        this._setTargetWindowAndElement(this._getTarget());
        var positions = this.state.positions;
        var hostElement = this._hostElement.current;
        var calloutElement = this._calloutElement.current;
        // If we expect a target element to position against, we need to wait until `this._target` is resolved. Otherwise
        // we can try to position.
        var expectsTarget = !!this.props.target;
        if (hostElement && calloutElement && (!expectsTarget || this._target)) {
            var currentProps = void 0;
            currentProps = Object(Utilities["k" /* assign */])(currentProps, this.props);
            currentProps.bounds = this._getBounds();
            currentProps.target = this._target;
            var newPositions = positionCallout(currentProps, hostElement, calloutElement, positions);
            // Set the new position only when the positions are not exists or one of the new callout positions are different.
            // The position should not change if the position is within 2 decimal places.
            if ((!positions && newPositions) ||
                (positions && newPositions && !this._arePositionsEqual(positions, newPositions) && this._positionAttempts < 5)) {
                // We should not reposition the callout more than a few times, if it is then the content is likely resizing
                // and we should stop trying to reposition to prevent a stack overflow.
                this._positionAttempts++;
                this.setState({
                    positions: newPositions
                });
            }
            else if (this._positionAttempts > 0) {
                // Only call the onPositioned callback if the callout has been re-positioned at least once.
                this._positionAttempts = 0;
                if (this.props.onPositioned) {
                    this.props.onPositioned(this.state.positions);
                }
            }
        }
    };
    CalloutContentBase.prototype._getBounds = function () {
        if (!this._bounds) {
            var currentBounds = this.props.bounds;
            if (!currentBounds) {
                currentBounds = {
                    top: 0 + this.props.minPagePadding,
                    left: 0 + this.props.minPagePadding,
                    right: this._targetWindow.innerWidth - this.props.minPagePadding,
                    bottom: this._targetWindow.innerHeight - this.props.minPagePadding,
                    width: this._targetWindow.innerWidth - this.props.minPagePadding * 2,
                    height: this._targetWindow.innerHeight - this.props.minPagePadding * 2
                };
            }
            this._bounds = currentBounds;
        }
        return this._bounds;
    };
    // Max height should remain as synchronous as possible, which is why it is not done using set state.
    // It needs to be synchronous since it will impact the ultimate position of the callout.
    CalloutContentBase.prototype._getMaxHeight = function () {
        var _this = this;
        if (!this._maxHeight) {
            if (this.props.directionalHintFixed && this._target) {
                var beakWidth = this.props.isBeakVisible ? this.props.beakWidth : 0;
                var gapSpace = this.props.gapSpace ? this.props.gapSpace : 0;
                // Since the callout cannot measure it's border size it must be taken into account here. Otherwise it will
                // overlap with the target.
                var totalGap_1 = gapSpace + beakWidth + BORDER_WIDTH * 2;
                this._async.requestAnimationFrame(function () {
                    if (_this._target) {
                        _this._maxHeight = getMaxHeight(_this._target, _this.props.directionalHint, totalGap_1, _this._getBounds(), _this.props.coverTarget);
                        _this._blockResetHeight = true;
                        _this.forceUpdate();
                    }
                });
            }
            else {
                this._maxHeight = this._getBounds().height - BORDER_WIDTH * 2;
            }
        }
        return this._maxHeight;
    };
    CalloutContentBase.prototype._arePositionsEqual = function (positions, newPosition) {
        return (this._comparePositions(positions.elementPosition, newPosition.elementPosition) &&
            this._comparePositions(positions.beakPosition.elementPosition, newPosition.beakPosition.elementPosition));
    };
    CalloutContentBase.prototype._comparePositions = function (oldPositions, newPositions) {
        for (var key in newPositions) {
            // This needs to be checked here and below because there is a linting error if for in does not immediately have an if statement
            if (newPositions.hasOwnProperty(key)) {
                var oldPositionEdge = oldPositions[key];
                var newPositionEdge = newPositions[key];
                if (oldPositionEdge !== undefined && newPositionEdge !== undefined) {
                    if (oldPositionEdge.toFixed(2) !== newPositionEdge.toFixed(2)) {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        }
        return true;
    };
    CalloutContentBase.prototype._setTargetWindowAndElement = function (target) {
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Object(Utilities["A" /* getDocument */])();
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = Object(Utilities["Q" /* getWindow */])();
            }
            else if (target.stopPropagation) {
                this._targetWindow = Object(Utilities["Q" /* getWindow */])(target.toElement);
                this._target = target;
            }
            else if (target.getBoundingClientRect) {
                var targetElement = target;
                this._targetWindow = Object(Utilities["Q" /* getWindow */])(targetElement);
                this._target = target;
                // HTMLImgElements can have x and y values. The check for it being a point must go last.
            }
            else {
                this._targetWindow = Object(Utilities["Q" /* getWindow */])();
                this._target = target;
            }
        }
        else {
            this._targetWindow = Object(Utilities["Q" /* getWindow */])();
        }
    };
    CalloutContentBase.prototype._setHeightOffsetEveryFrame = function () {
        var _this = this;
        if (this._calloutElement.current && this.props.finalHeight) {
            this._setHeightOffsetTimer = this._async.requestAnimationFrame(function () {
                var calloutMainElem = _this._calloutElement.current && _this._calloutElement.current.lastChild;
                if (!calloutMainElem) {
                    return;
                }
                var cardScrollHeight = calloutMainElem.scrollHeight;
                var cardCurrHeight = calloutMainElem.offsetHeight;
                var scrollDiff = cardScrollHeight - cardCurrHeight;
                _this.setState({
                    heightOffset: _this.state.heightOffset + scrollDiff
                });
                if (calloutMainElem.offsetHeight < _this.props.finalHeight) {
                    _this._setHeightOffsetEveryFrame();
                }
                else {
                    _this._async.cancelAnimationFrame(_this._setHeightOffsetTimer);
                }
            });
        }
    };
    CalloutContentBase.prototype._getTarget = function (props) {
        if (props === void 0) { props = this.props; }
        var target = props.target;
        return target;
    };
    CalloutContentBase.defaultProps = {
        preventDismissOnLostFocus: false,
        preventDismissOnScroll: false,
        preventDismissOnResize: false,
        isBeakVisible: true,
        beakWidth: 16,
        gapSpace: 0,
        minPagePadding: 8,
        directionalHint: DirectionalHint["a" /* DirectionalHint */].bottomAutoEdge
    };
    return CalloutContentBase;
}(Utilities["a" /* BaseComponent */]));

var CalloutContent_base__a;

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.styles.js

function getBeakStyle(beakWidth) {
    return {
        height: beakWidth,
        width: beakWidth
    };
}
var GlobalClassNames = {
    container: 'ms-Callout-container',
    root: 'ms-Callout',
    beak: 'ms-Callout-beak',
    beakCurtain: 'ms-Callout-beakCurtain',
    calloutMain: 'ms-Callout-main'
};
var getStyles = function (props) {
    var theme = props.theme, className = props.className, overflowYHidden = props.overflowYHidden, calloutWidth = props.calloutWidth, beakWidth = props.beakWidth, backgroundColor = props.backgroundColor, calloutMaxWidth = props.calloutMaxWidth;
    var classNames = Object(Styling["o" /* getGlobalClassNames */])(GlobalClassNames, theme);
    var palette = theme.palette;
    return {
        container: [
            classNames.container,
            {
                position: 'relative'
            }
        ],
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                position: 'absolute',
                boxSizing: 'border-box',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: palette.neutralLight,
                boxShadow: '0 0 5px 0px rgba(0,0,0,0.4)',
                selectors: (_a = {},
                    _a[Styling["e" /* HighContrastSelector */]] = {
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'WindowText'
                    },
                    _a)
            },
            Object(Styling["m" /* focusClear */])(),
            className,
            !!calloutWidth && { width: calloutWidth },
            !!calloutMaxWidth && { maxWidth: calloutMaxWidth }
        ],
        beak: [
            classNames.beak,
            {
                position: 'absolute',
                backgroundColor: palette.white,
                boxShadow: 'inherit',
                border: 'inherit',
                boxSizing: 'border-box',
                transform: 'rotate(45deg)'
            },
            getBeakStyle(beakWidth),
            backgroundColor && {
                backgroundColor: backgroundColor
            }
        ],
        beakCurtain: [
            classNames.beakCurtain,
            {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: palette.white
            }
        ],
        calloutMain: [
            classNames.calloutMain,
            {
                backgroundColor: palette.white,
                overflowX: 'hidden',
                overflowY: 'auto',
                position: 'relative'
            },
            overflowYHidden && {
                overflowY: 'hidden'
            },
            backgroundColor && {
                backgroundColor: backgroundColor
            }
        ]
    };
    var _a;
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.js



var CalloutContent = Object(Utilities["_10" /* styled */])(CalloutContent_base_CalloutContentBase, getStyles, undefined, { scope: 'CalloutContent' });

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Layer.js + 11 modules
var Layer = __webpack_require__(63);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Callout/Callout.js





var Callout_Callout = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](Callout, _super);
    function Callout(props) {
        return _super.call(this, props) || this;
    }
    Callout.prototype.render = function () {
        var _a = this.props, layerProps = _a.layerProps, rest = tslib_es6["d" /* __rest */](_a, ["layerProps"]);
        var content = FakeReact["createElement"](CalloutContent, tslib_es6["a" /* __assign */]({}, rest));
        return this.props.doNotLayer ? content : FakeReact["createElement"](Layer["a" /* Layer */], tslib_es6["a" /* __assign */]({}, layerProps), content);
    };
    return Callout;
}(Utilities["a" /* BaseComponent */]));


// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/FocusTrapZone/index.js + 1 modules
var FocusTrapZone = __webpack_require__(68);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/FocusTrapZone.js


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Callout/FocusTrapCallout.js




/**
 * A special Callout that uses FocusTrapZone to trap focus
 * @param props - Props for the component
 */
var FocusTrapCallout = function (props) {
    return (FakeReact["createElement"](Callout_Callout, tslib_es6["a" /* __assign */]({}, props),
        FakeReact["createElement"](FocusTrapZone["a" /* FocusTrapZone */], tslib_es6["a" /* __assign */]({}, props.focusTrapProps), props.children)));
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Callout/index.js




// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Callout.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return Callout_Callout; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return FocusTrapCallout; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return DirectionalHint["a" /* DirectionalHint */]; });



/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(45);

// EXTERNAL MODULE: ./lib/DeveloperTools/FBWrappers/FakeReact.js
var FakeReact = __webpack_require__(13);
var FakeReact_default = /*#__PURE__*/__webpack_require__.n(FakeReact);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Utilities.js + 45 modules
var Utilities = __webpack_require__(44);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Popup/Popup.js



/**
 * This adds accessibility to Dialog and Panel controls
 */
var Popup_Popup = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](Popup, _super);
    function Popup(props) {
        var _this = _super.call(this, props) || this;
        _this._root = FakeReact["createRef"]();
        _this._onKeyDown = function (ev) {
            switch (ev.which) {
                case Utilities["e" /* KeyCodes */].escape:
                    if (_this.props.onDismiss) {
                        _this.props.onDismiss(ev);
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                    break;
            }
        };
        _this.state = { needsVerticalScrollBar: false };
        return _this;
    }
    Popup.prototype.componentWillMount = function () {
        this._originalFocusedElement = Object(Utilities["A" /* getDocument */])().activeElement;
    };
    Popup.prototype.componentDidMount = function () {
        if (!this._root.current) {
            return;
        }
        this._events.on(this._root.current, 'focus', this._onFocus, true);
        this._events.on(this._root.current, 'blur', this._onBlur, true);
        if (Object(Utilities["s" /* doesElementContainFocus */])(this._root.current)) {
            this._containsFocus = true;
        }
        this._updateScrollBarAsync();
    };
    Popup.prototype.componentDidUpdate = function () {
        this._updateScrollBarAsync();
    };
    Popup.prototype.componentWillUnmount = function () {
        if (this.props.shouldRestoreFocus &&
            this._originalFocusedElement &&
            this._containsFocus &&
            this._originalFocusedElement !== window) {
            // This slight delay is required so that we can unwind the stack, let react try to mess with focus, and then
            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
            // to reset the focus back to the thing it thinks should have been focused.
            if (this._originalFocusedElement) {
                this._originalFocusedElement.focus();
            }
        }
    };
    Popup.prototype.render = function () {
        var _a = this.props, role = _a.role, className = _a.className, ariaLabel = _a.ariaLabel, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy, style = _a.style;
        return (FakeReact["createElement"]("div", tslib_es6["a" /* __assign */]({ ref: this._root }, Object(Utilities["I" /* getNativeProps */])(this.props, Utilities["r" /* divProperties */]), { className: className, role: role, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: this._onKeyDown, style: tslib_es6["a" /* __assign */]({ overflowY: this.state.needsVerticalScrollBar ? 'scroll' : undefined, outline: 'none' }, style) }), this.props.children));
    };
    Popup.prototype._updateScrollBarAsync = function () {
        var _this = this;
        this._async.requestAnimationFrame(function () {
            _this._getScrollBar();
        });
    };
    Popup.prototype._getScrollBar = function () {
        // If overflowY is overriden, don't waste time calculating whether the scrollbar is necessary.
        if (this.props.style && this.props.style.overflowY) {
            return;
        }
        var needsVerticalScrollBar = false;
        if (this._root && this._root.current && this._root.current.firstElementChild) {
            // ClientHeight returns the client height of an element rounded to an
            // integer. On some browsers at different zoom levels this rounding
            // can generate different results for the root container and child even
            // though they are the same height. This causes us to show a scroll bar
            // when not needed. Ideally we would use BoundingClientRect().height
            // instead however seems that the API is 90% slower than using ClientHeight.
            // Therefore instead we will calculate the difference between heights and
            // allow for a 1px difference to still be considered ok and not show the
            // scroll bar.
            var rootHeight = this._root.current.clientHeight;
            var firstChildHeight = this._root.current.firstElementChild.clientHeight;
            if (rootHeight > 0 && firstChildHeight > rootHeight) {
                needsVerticalScrollBar = firstChildHeight - rootHeight > 1;
            }
        }
        if (this.state.needsVerticalScrollBar !== needsVerticalScrollBar) {
            this.setState({
                needsVerticalScrollBar: needsVerticalScrollBar
            });
        }
    };
    Popup.prototype._onFocus = function () {
        this._containsFocus = true;
    };
    Popup.prototype._onBlur = function (ev) {
        if (this._root.current && this._root.current.contains(ev.relatedTarget)) {
            this._containsFocus = false;
        }
    };
    Popup.defaultProps = {
        shouldRestoreFocus: true
    };
    return Popup;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Popup/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return Popup_Popup; });



/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(45);

// EXTERNAL MODULE: ./lib/DeveloperTools/FBWrappers/FakeReact.js
var FakeReact = __webpack_require__(13);
var FakeReact_default = /*#__PURE__*/__webpack_require__.n(FakeReact);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/Utilities.js + 45 modules
var Utilities = __webpack_require__(44);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/FocusTrapZone/FocusTrapZone.js



var FocusTrapZone_FocusTrapZone = /** @class */ (function (_super) {
    tslib_es6["c" /* __extends */](FocusTrapZone, _super);
    function FocusTrapZone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._root = FakeReact["createRef"]();
        _this._onFocusCapture = function (ev) {
            if (_this.props.onFocusCapture) {
                _this.props.onFocusCapture(ev);
            }
            if (ev.target !== ev.currentTarget) {
                // every time focus changes within the trap zone, remember the focused element so that
                // it can be restored if focus leaves the pane and returns via keystroke (i.e. via a call to this.focus(true))
                _this._previouslyFocusedElementInTrapZone = ev.target;
            }
        };
        _this._onKeyboardHandler = function (ev) {
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            // If the default has been prevented, do not process keyboard events.
            if (ev.isDefaultPrevented()) {
                return;
            }
            if (ev.which !== Utilities["e" /* KeyCodes */].tab) {
                return;
            }
            if (!_this._root.current) {
                return;
            }
            var _firstTabbableChild = Object(Utilities["D" /* getFirstTabbable */])(_this._root.current, _this._root.current.firstChild, true);
            var _lastTabbableChild = Object(Utilities["H" /* getLastTabbable */])(_this._root.current, _this._root.current.lastChild, true);
            if (ev.shiftKey && _firstTabbableChild === ev.target) {
                Object(Utilities["y" /* focusAsync */])(_lastTabbableChild);
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (!ev.shiftKey && _lastTabbableChild === ev.target) {
                Object(Utilities["y" /* focusAsync */])(_firstTabbableChild);
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        return _this;
    }
    FocusTrapZone.prototype.componentDidMount = function () {
        this._bringFocusIntoZone();
        this._updateEventHandlers(this.props);
    };
    FocusTrapZone.prototype.componentWillReceiveProps = function (nextProps) {
        var elementToFocusOnDismiss = nextProps.elementToFocusOnDismiss;
        if (elementToFocusOnDismiss && this._previouslyFocusedElementOutsideTrapZone !== elementToFocusOnDismiss) {
            this._previouslyFocusedElementOutsideTrapZone = elementToFocusOnDismiss;
        }
        this._updateEventHandlers(nextProps);
    };
    FocusTrapZone.prototype.componentDidUpdate = function (prevProps) {
        var prevForceFocusInsideTrap = prevProps.forceFocusInsideTrap !== undefined ? prevProps.forceFocusInsideTrap : true;
        var newForceFocusInsideTrap = this.props.forceFocusInsideTrap !== undefined ? this.props.forceFocusInsideTrap : true;
        if (!prevForceFocusInsideTrap && newForceFocusInsideTrap) {
            // Transition from forceFocusInsideTrap disabled to enabled. Emulate what happens when a FocusTrapZone gets mounted
            this._bringFocusIntoZone();
        }
        else if (prevForceFocusInsideTrap && !newForceFocusInsideTrap) {
            // Transition from forceFocusInsideTrap enabled to disabled. Emulate what happens when a FocusTrapZone gets unmounted
            this._returnFocusToInitiator();
        }
    };
    FocusTrapZone.prototype.componentWillUnmount = function () {
        this._events.dispose();
        this._returnFocusToInitiator();
    };
    FocusTrapZone.prototype.render = function () {
        var _a = this.props, className = _a.className, ariaLabelledBy = _a.ariaLabelledBy;
        var divProps = Object(Utilities["I" /* getNativeProps */])(this.props, Utilities["r" /* divProperties */]);
        return (FakeReact["createElement"]("div", tslib_es6["a" /* __assign */]({}, divProps, { className: className, ref: this._root, "aria-labelledby": ariaLabelledBy, onKeyDown: this._onKeyboardHandler, onFocusCapture: this._onFocusCapture }), this.props.children));
    };
    FocusTrapZone.prototype.focus = function () {
        var _a = this.props, focusPreviouslyFocusedInnerElement = _a.focusPreviouslyFocusedInnerElement, firstFocusableSelector = _a.firstFocusableSelector;
        if (focusPreviouslyFocusedInnerElement &&
            this._previouslyFocusedElementInTrapZone &&
            Object(Utilities["t" /* elementContains */])(this._root.current, this._previouslyFocusedElementInTrapZone)) {
            // focus on the last item that had focus in the zone before we left the zone
            Object(Utilities["y" /* focusAsync */])(this._previouslyFocusedElementInTrapZone);
            return;
        }
        var focusSelector = typeof firstFocusableSelector === 'string' ? firstFocusableSelector : firstFocusableSelector && firstFocusableSelector();
        var _firstFocusableChild;
        if (this._root.current) {
            if (focusSelector) {
                _firstFocusableChild = this._root.current.querySelector('.' + focusSelector);
            }
            else {
                _firstFocusableChild = Object(Utilities["J" /* getNextElement */])(this._root.current, this._root.current.firstChild, true, false, false, true);
            }
        }
        if (_firstFocusableChild) {
            Object(Utilities["y" /* focusAsync */])(_firstFocusableChild);
        }
    };
    FocusTrapZone.prototype._bringFocusIntoZone = function () {
        var _a = this.props, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, _b = _a.disableFirstFocus, disableFirstFocus = _b === void 0 ? false : _b;
        FocusTrapZone._focusStack.push(this);
        this._previouslyFocusedElementOutsideTrapZone = elementToFocusOnDismiss
            ? elementToFocusOnDismiss
            : document.activeElement;
        if (!Object(Utilities["t" /* elementContains */])(this._root.current, this._previouslyFocusedElementOutsideTrapZone) && !disableFirstFocus) {
            this.focus();
        }
    };
    FocusTrapZone.prototype._returnFocusToInitiator = function () {
        var _this = this;
        var ignoreExternalFocusing = this.props.ignoreExternalFocusing;
        FocusTrapZone._focusStack = FocusTrapZone._focusStack.filter(function (value) {
            return _this !== value;
        });
        var activeElement = document.activeElement;
        if (!ignoreExternalFocusing &&
            this._previouslyFocusedElementOutsideTrapZone &&
            typeof this._previouslyFocusedElementOutsideTrapZone.focus === 'function' &&
            (Object(Utilities["t" /* elementContains */])(this._root.current, activeElement) || activeElement === document.body)) {
            Object(Utilities["y" /* focusAsync */])(this._previouslyFocusedElementOutsideTrapZone);
        }
    };
    FocusTrapZone.prototype._updateEventHandlers = function (newProps) {
        var _a = newProps.isClickableOutsideFocusTrap, isClickableOutsideFocusTrap = _a === void 0 ? false : _a, _b = newProps.forceFocusInsideTrap, forceFocusInsideTrap = _b === void 0 ? true : _b;
        if (forceFocusInsideTrap && !this._hasFocusHandler) {
            this._events.on(window, 'focus', this._forceFocusInTrap, true);
        }
        else if (!forceFocusInsideTrap && this._hasFocusHandler) {
            this._events.off(window, 'focus', this._forceFocusInTrap, true);
        }
        this._hasFocusHandler = forceFocusInsideTrap;
        if (!isClickableOutsideFocusTrap && !this._hasClickHandler) {
            this._events.on(window, 'click', this._forceClickInTrap, true);
        }
        else if (isClickableOutsideFocusTrap && this._hasClickHandler) {
            this._events.off(window, 'click', this._forceClickInTrap, true);
        }
        this._hasClickHandler = !isClickableOutsideFocusTrap;
    };
    FocusTrapZone.prototype._forceFocusInTrap = function (ev) {
        if (FocusTrapZone._focusStack.length && this === FocusTrapZone._focusStack[FocusTrapZone._focusStack.length - 1]) {
            var focusedElement = ev.relatedTarget || document.activeElement;
            if (!Object(Utilities["t" /* elementContains */])(this._root.current, focusedElement)) {
                this.focus();
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    };
    FocusTrapZone.prototype._forceClickInTrap = function (ev) {
        if (FocusTrapZone._focusStack.length && this === FocusTrapZone._focusStack[FocusTrapZone._focusStack.length - 1]) {
            var clickedElement = ev.target;
            if (clickedElement && !Object(Utilities["t" /* elementContains */])(this._root.current, clickedElement)) {
                this.focus();
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    };
    FocusTrapZone._focusStack = [];
    return FocusTrapZone;
}(Utilities["a" /* BaseComponent */]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/FocusTrapZone/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return FocusTrapZone_FocusTrapZone; });



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(70);
var loader = __webpack_require__(42);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, ".dialogContainer_97ce864d{min-width:500px!important;max-width:50vw}", ""]);

// exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(72);
var loader = __webpack_require__(42);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, ".warningText_065f13e3{color:#e81123;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.calloutFadeIn_065f13e3{opacity:1!important;-webkit-transform:ms-translate3d(0,0,0)!important;transform:ms-translate3d(0,0,0)!important}div .callout_065f13e3{max-width:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;opacity:0;-webkit-transform:ms-translate3d(0,20px,0);transform:ms-translate3d(0,20px,0);-webkit-transition:opacity .2s,-webkit-transform .2s;transition:opacity .2s,-webkit-transform .2s;transition:opacity .2s,transform .2s;transition:opacity .2s,transform .2s,-webkit-transform .2s;-webkit-animation:none;animation:none}.calloutText_065f13e3{padding:18px 24px 12px;margin:0;font-size:21px;font-weight:100;color:#333;font-weight:300}", ""]);

// exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(74);
var loader = __webpack_require__(42);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, ".detailText_220147ae{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.errorText_220147ae{font-family:monospace;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}", ""]);

// exports


/***/ })
]));
//# sourceMappingURL=1.1_6d381dad15bd5862b48a.js.map