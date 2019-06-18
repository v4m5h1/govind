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
import { SPError, Text } from '@microsoft/sp-core-library';
import strings from '../SPLoader.resx';
export var SPLoaderErrorCode;
(function (SPLoaderErrorCode) {
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentMaxRetriesError"] = 0] = "loadComponentMaxRetriesError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentError"] = 1] = "loadComponentError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentReturnsEmptyError"] = 2] = "loadComponentReturnsEmptyError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentReturnsDefaultEmptyError"] = 3] = "loadComponentReturnsDefaultEmptyError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentDependencyError"] = 4] = "loadComponentDependencyError";
    SPLoaderErrorCode[SPLoaderErrorCode["manifestNotFoundError"] = 5] = "manifestNotFoundError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadPathDependencyBlockedByAnotherDependencyError"] = 6] = "loadPathDependencyBlockedByAnotherDependencyError";
    SPLoaderErrorCode[SPLoaderErrorCode["moduleHasUndeclaredDependencyError"] = 7] = "moduleHasUndeclaredDependencyError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadEntryPointError"] = 8] = "loadEntryPointError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadPathDependencyError"] = 9] = "loadPathDependencyError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentDependencyFailoverPathError"] = 10] = "loadComponentDependencyFailoverPathError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadScriptWithStringError"] = 11] = "loadScriptWithStringError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusLocalhostFileNotFoundError"] = 12] = "urlStatusLocalhostFileNotFoundError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusFileNotFoundError"] = 13] = "urlStatusFileNotFoundError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusForbiddenError"] = 14] = "urlStatusForbiddenError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusClientErrorError"] = 15] = "urlStatusClientErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusServerErrorError"] = 16] = "urlStatusServerErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusLocalhostNetworkErrorError"] = 17] = "urlStatusLocalhostNetworkErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusDocLibNetworkErrorError"] = 18] = "urlStatusDocLibNetworkErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusHttpsNetworkErrorError"] = 19] = "urlStatusHttpsNetworkErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusNetworkErrorError"] = 20] = "urlStatusNetworkErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusUndefinedError"] = 21] = "urlStatusUndefinedError";
    SPLoaderErrorCode[SPLoaderErrorCode["failedToCreateGlobalVariable"] = 22] = "failedToCreateGlobalVariable";
    SPLoaderErrorCode[SPLoaderErrorCode["dependencyLoadError"] = 23] = "dependencyLoadError";
    SPLoaderErrorCode[SPLoaderErrorCode["missingPathDependencyError"] = 24] = "missingPathDependencyError";
})(SPLoaderErrorCode || (SPLoaderErrorCode = {}));
var SPLoaderError =  (function (_super) {
    __extends(SPLoaderError, _super);
    function SPLoaderError(errorCode, innerError, isExpected) {
        var params = []; 
        for (var _i = 3 
        ; _i < arguments.length 
        ; _i++ 
        ) {
            params[_i - 3] = arguments[_i]; 
        }
        var _this = _super.call(this, SPLoaderErrorCode[errorCode], Text.format.apply(Text, [SPLoaderError._errorCodeToMessageMap.get(errorCode)].concat(params))) || this;
        _this.__proto__ = SPLoaderError.prototype; 
        _this._loaderErrorCode = errorCode;
        _this.innerError = innerError;
        if (_this.innerError instanceof SPLoaderError) {
            _this._isExpected = _this.innerError.isExpected;
        }
        _this._isExpected = _this._isExpected || isExpected || false;
        return _this;
    }
    Object.defineProperty(SPLoaderError.prototype, "id", {
        get: function () {
            return this._loaderErrorCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPLoaderError.prototype, "category", {
        get: function () {
            return 'SPLoaderError';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPLoaderError.prototype, "isExpected", {
        get: function () {
            return this._isExpected;
        },
        enumerable: true,
        configurable: true
    });
    SPLoaderError._errorCodeToMessageMap = new Map([
        [SPLoaderErrorCode.loadComponentMaxRetriesError, strings.loadComponentMaxRetriesError],
        [SPLoaderErrorCode.loadComponentError, strings.loadComponentError],
        [SPLoaderErrorCode.loadComponentReturnsEmptyError, strings.loadComponentReturnsEmptyError],
        [SPLoaderErrorCode.loadComponentReturnsDefaultEmptyError, strings.loadComponentReturnsDefaultEmptyError],
        [SPLoaderErrorCode.loadComponentDependencyError, strings.loadComponentDependencyError],
        [SPLoaderErrorCode.manifestNotFoundError, strings.manifestNotFoundError],
        [SPLoaderErrorCode.loadPathDependencyBlockedByAnotherDependencyError, strings.loadPathDependencyBlockedByAnotherDependencyError],
        [SPLoaderErrorCode.moduleHasUndeclaredDependencyError, strings.moduleHasUndeclaredDependencyError],
        [SPLoaderErrorCode.loadEntryPointError, strings.loadEntryPointError],
        [SPLoaderErrorCode.loadPathDependencyError, strings.loadPathDependencyError],
        [SPLoaderErrorCode.loadComponentDependencyFailoverPathError, strings.loadComponentDependencyFailoverPathError],
        [SPLoaderErrorCode.loadScriptWithStringError, strings.loadScriptWithStringError],
        [SPLoaderErrorCode.urlStatusLocalhostFileNotFoundError, strings.urlStatusLocalhostFileNotFoundError],
        [SPLoaderErrorCode.urlStatusFileNotFoundError, strings.urlStatusFileNotFoundError],
        [SPLoaderErrorCode.urlStatusForbiddenError, strings.urlStatusForbiddenError],
        [SPLoaderErrorCode.urlStatusClientErrorError, strings.urlStatusClientErrorError],
        [SPLoaderErrorCode.urlStatusServerErrorError, strings.urlStatusServerErrorError],
        [SPLoaderErrorCode.urlStatusLocalhostNetworkErrorError, strings.urlStatusLocalhostNetworkErrorError],
        [SPLoaderErrorCode.urlStatusDocLibNetworkErrorError, strings.urlStatusNetworkErrorError],
        [SPLoaderErrorCode.urlStatusHttpsNetworkErrorError, strings.urlStatusHttpsNetworkErrorError],
        [SPLoaderErrorCode.urlStatusNetworkErrorError, strings.urlStatusNetworkErrorError],
        [SPLoaderErrorCode.urlStatusUndefinedError, strings.urlStatusUndefinedError],
        [SPLoaderErrorCode.failedToCreateGlobalVariable, strings.failedToCreateGlobalVariableError],
        [SPLoaderErrorCode.dependencyLoadError, strings.dependencyLoadError],
        [SPLoaderErrorCode.missingPathDependencyError, strings.missingPathDependencyError]
    ] );
    return SPLoaderError;
}(SPError));
export default SPLoaderError;
