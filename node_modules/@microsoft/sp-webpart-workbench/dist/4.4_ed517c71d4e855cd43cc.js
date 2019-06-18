webpackJsonp8be81a5c_af38_4bb2_af97_afa3b64dfbed_1_8_2([4],{

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(318);


/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(319);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".CanvasControlToolbar{position:absolute;top:0;width:32px;z-index:1}[dir=ltr] .CanvasControlToolbar{left:-40px}[dir=rtl] .CanvasControlToolbar{right:-40px}[dir=ltr] .CanvasControlToolbar{padding-right:10px}[dir=rtl] .CanvasControlToolbar{padding-left:10px}", ""]);

// exports


/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbarButton_ToolbarButton__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__microsoft_sp_core_library__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__microsoft_sp_core_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__microsoft_sp_core_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_Flights__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Toolbar_scss__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Toolbar_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Toolbar_scss__);







var Toolbar =  (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](Toolbar, _super);
    function Toolbar(props) {
        var _this = _super.call(this, props) || this;
        _this._directionalHint = __WEBPACK_IMPORTED_MODULE_5__common_Flights__["a" /* default */].isHoverStateFlightEnabled() ? __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["DirectionalHint"].rightCenter : undefined;
        return _this;
    }
    Toolbar.prototype.componentDidMount = function () {
        if (this.props.toolbarDidMount) {
            this.props.toolbarDidMount(this);
        }
    };
    Toolbar.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, fixedPosition = _a.fixedPosition;
        return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["FocusZone"], { isCircularNavigation: true },
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: className || 'CanvasControlToolbar', style: fixedPosition, role: 'toolbar', ref: function (ref) { return (_this._domElement = ref); } },
                this._configurationButton,
                this._moveHandle,
                this._duplicateButton,
                this._deleteButton)));
    };
    Toolbar.prototype.getHeight = function () {
        return this._domElement ? this._domElement.clientHeight : 0;
    };
    Object.defineProperty(Toolbar.prototype, "toolBarElement", {
        get: function () {
            return this._domElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar.prototype, "_deleteButton", {
        get: function () {
            if (!this.props.deleteButton) {
                return false;
            }
            var _a = this.props.deleteButton, title = _a.title, onClick = _a.onClick;
            return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__toolbarButton_ToolbarButton__["ToolbarButton"], { key: 'delete' + this.props.key, canBeActive: false, fabricIconKey: 'Trash', onClick: onClick, title: title, automationId: 'deleteButton', directionalHint: this._directionalHint }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar.prototype, "_configurationButton", {
        get: function () {
            if (!this.props.configurationButton) {
                return false;
            }
            var _a = this.props.configurationButton, fabricIconKey = _a.fabricIconKey, title = _a.title, onClick = _a.onClick;
            return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__toolbarButton_ToolbarButton__["ToolbarButton"], { canBeActive: false, fabricIconKey: fabricIconKey + "Edit", onClick: onClick, title: title, automationId: 'configureButton', directionalHint: this._directionalHint }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar.prototype, "_moveHandle", {
        get: function () {
            if (!this.props.moveButton) {
                return false;
            }
            var _a = this.props.moveButton, dragHandleTag = _a.dragHandleTag, title = _a.title;
            return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__toolbarButton_ToolbarButton__["ToolbarButton"], { canBeActive: false, fabricIconKey: 'Move', title: title, automationId: 'moveButton', dragHandleTag: dragHandleTag, directionalHint: this._directionalHint }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar.prototype, "_duplicateButton", {
        get: function () {
            if (!__WEBPACK_IMPORTED_MODULE_4__microsoft_sp_core_library__["_SPFlight"].isEnabled(1226 ) || !this.props.duplicateButton) {
                return false;
            }
            var title = this.props.duplicateButton.title;
            return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__toolbarButton_ToolbarButton__["ToolbarButton"], { fabricIconKey: 'Copy', onClick: this.props.duplicateButton.onClick, title: title, directionalHint: this._directionalHint }));
        },
        enumerable: true,
        configurable: true
    });
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], Toolbar.prototype, "getHeight", null);
    return Toolbar;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));



/***/ })

});
//# sourceMappingURL=4.4_ed517c71d4e855cd43cc.js.map