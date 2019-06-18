webpackJsonp8be81a5c_af38_4bb2_af97_afa3b64dfbed_1_8_2([5],{

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(316);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".anchorLink_495a0957{opacity:0;text-decoration:none;outline:0}.anchorLink_495a0957:focus,:focus>.anchorLink_495a0957,:hover>.anchorLink_495a0957{-webkit-transition:.1s linear;transition:.1s linear;opacity:1}.anchorIcon_495a0957{font-style:normal;font-weight:400;font-size:16px}[dir=ltr] .anchorIcon_495a0957{margin-left:8px}[dir=rtl] .anchorIcon_495a0957{margin-right:8px}", ""]);

// exports


/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(2);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "@microsoft/office-ui-fabric-react-bundle"
var office_ui_fabric_react_bundle_ = __webpack_require__(1);
var office_ui_fabric_react_bundle__default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_bundle_);

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(5);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@ms/odsp-utilities-bundle/5.0.3/node_modules/@ms/odsp-utilities-bundle/lib/index.js
var lib = __webpack_require__(10);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-anchor/lib/anchorZone/AnchorZone.module.scss.js
__webpack_require__(315);
var styles = {
    anchorLink: 'anchorLink_495a0957',
    anchorIcon: 'anchorIcon_495a0957',
};
/* harmony default export */ var AnchorZone_module_scss = (styles);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-anchor/lib/anchorZone/AnchorZone.js
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





var ANCHOR_ID_ATTRIBUTE_NAME = 'data-sp-anchor-id';
var AnchorZone_AnchorZone =  (function (_super) {
    __extends(AnchorZone, _super);
    function AnchorZone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._addAnchorIcon = function (anchoredElement, anchorId) {
            if (!anchoredElement.lastElementChild || !AnchorZone._isElementAnchorIcon(anchoredElement.lastElementChild)) {
                anchoredElement.appendChild(AnchorZone._anchorIconElement);
            }
            _this._updateAnchorAttributes(anchoredElement.lastElementChild, anchorId);
        };
        _this._updateAnchorAttributes = function (anchor, anchorId) {
            var targetUri = new lib["Uri"](window.location.href);
            targetUri.setFragment(encodeURIComponent(anchorId));
            var href = targetUri.toString();
            anchor.setAttribute(ANCHOR_ID_ATTRIBUTE_NAME, anchorId);
            anchor.setAttribute('id', anchorId);
            anchor.setAttribute('href', href);
            anchor.setAttribute('target', '_self');
        };
        _this._removeAnchorIcon = function (anchoredElement, anchorId) {
            if (anchoredElement.lastElementChild && AnchorZone._isElementAnchorIcon(anchoredElement.lastElementChild)) {
                anchoredElement.removeChild(anchoredElement.lastElementChild);
            }
        };
        return _this;
    }
    Object.defineProperty(AnchorZone, "_anchorIconElement", {
        get: function () {
            if (!AnchorZone._anchorIconElementCache) {
                var anchorIcon = document.createElement('i');
                anchorIcon.className = Object(office_ui_fabric_react_bundle_["css"])(AnchorZone_module_scss.anchorIcon, Object(office_ui_fabric_react_bundle_["getIconClassName"])('Link'));
                anchorIcon.setAttribute('aria-hidden', 'true');
                AnchorZone._anchorIconElementCache = document.createElement('a');
                AnchorZone._anchorIconElementCache.classList.add(AnchorZone_module_scss.anchorLink);
                AnchorZone._anchorIconElementCache.appendChild(anchorIcon);
            }
            return AnchorZone._anchorIconElementCache.cloneNode(true);
        },
        enumerable: true,
        configurable: true
    });
    AnchorZone._isElementAnchorIcon = function (element) {
        return element.hasAttribute(ANCHOR_ID_ATTRIBUTE_NAME) &&
            element.classList.contains(AnchorZone_module_scss.anchorLink);
    };
    AnchorZone.prototype.componentDidMount = function () {
        this._registerAnchors();
    };
    AnchorZone.prototype.componentWillUnmount = function () {
        this._unregister(this.props.componentId);
    };
    AnchorZone.prototype.render = function () {
        return (external__react_["createElement"]("div", { ref: this._resolveRef('_wrapperElement') }, this.props.children));
    };
    AnchorZone.prototype._registerAnchors = function () {
        var _this = this;
        if (this._wrapperElement) {
            var anchorElements = [].slice.call(this._wrapperElement.querySelectorAll(this.props.anchorElementSelector));
            this._register(this.props.componentId, anchorElements.map(function (anchorElement, index) { return ({
                suggestedAnchorId: _this.props.suggestAnchorId ? _this.props.suggestAnchorId(anchorElement, index) : anchorElement.innerText,
                anchorTargetElement: anchorElement,
                onReceiveAnchorId: _this._addAnchorIcon,
                onDisposeAnchorId: _this._removeAnchorIcon
            }); }));
        }
    };
    AnchorZone.prototype._register = function (uniqueId, anchorList) {
        var eventArgs = {
            action: "Register" ,
            uniqueId: uniqueId,
            anchorList: anchorList
        };
        sp_core_library_["_SPEventManager"].instance.raiseEvent('anchorEvent', eventArgs);
    };
    AnchorZone.prototype._unregister = function (uniqueId) {
        var eventArgs = {
            action: "Unregister" ,
            uniqueId: uniqueId
        };
        sp_core_library_["_SPEventManager"].instance.raiseEvent('anchorEvent', eventArgs);
    };
    return AnchorZone;
}(office_ui_fabric_react_bundle_["BaseComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-anchor/lib/anchorZone/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AnchorZone", function() { return AnchorZone_AnchorZone; });



/***/ })

});
//# sourceMappingURL=5.5_e6c2de48cdaa73be6f84.js.map