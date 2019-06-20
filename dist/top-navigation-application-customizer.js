define("26bf477a-157d-4ec2-a018-07cb707b6431_0.0.1", ["@microsoft/sp-core-library","@microsoft/decorators","@microsoft/sp-application-base","@microsoft/sp-dialog","TopNavigationApplicationCustomizerStrings"], function(__WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_266__, __WEBPACK_EXTERNAL_MODULE_267__, __WEBPACK_EXTERNAL_MODULE_268__, __WEBPACK_EXTERNAL_MODULE_269__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 265);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_decorators__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_application_base__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_application_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__microsoft_sp_application_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__microsoft_sp_dialog__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__microsoft_sp_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__microsoft_sp_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_TopNavigationApplicationCustomizerStrings__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_TopNavigationApplicationCustomizerStrings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_TopNavigationApplicationCustomizerStrings__);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NAV_TERMS_KEY = "global-navigation-terms";
var LOG_SOURCE = "TopNavigationApplicationCustomizer";
/** A Custom Action which can be run during execution of a Client Side Application */
var TopNavigationApplicationCustomizer = /** @class */ (function (_super) {
    __extends(TopNavigationApplicationCustomizer, _super);
    function TopNavigationApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopNavigationApplicationCustomizer.prototype.onInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Log"].info(LOG_SOURCE, "Initialized " + __WEBPACK_IMPORTED_MODULE_4_TopNavigationApplicationCustomizerStrings__["Title"]);
        var message = this.properties.testMessage;
        if (!message) {
            message = "(No properties were provided.)";
        }
        __WEBPACK_IMPORTED_MODULE_3__microsoft_sp_dialog__["Dialog"].alert("Hello from " + __WEBPACK_IMPORTED_MODULE_4_TopNavigationApplicationCustomizerStrings__["Title"] + ":\n\n" + message);
        return Promise.resolve();
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0__microsoft_decorators__["override"]
    ], TopNavigationApplicationCustomizer.prototype, "onInit", null);
    return TopNavigationApplicationCustomizer;
}(__WEBPACK_IMPORTED_MODULE_2__microsoft_sp_application_base__["BaseApplicationCustomizer"]));
/* harmony default export */ __webpack_exports__["default"] = (TopNavigationApplicationCustomizer);


/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_266__;

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_267__;

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_268__;

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_269__;

/***/ })

/******/ })});;
//# sourceMappingURL=top-navigation-application-customizer.js.map