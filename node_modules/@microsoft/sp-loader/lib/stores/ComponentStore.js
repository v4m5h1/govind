import { Validate } from '@microsoft/sp-core-library';
import { _TraceLogger } from '@microsoft/sp-diagnostics';
import { componentStoreLogSource as logSource } from './../utilities/telemetryConstants';
import normalizeComponentId from './../utilities/normalizeComponentId';
import { Text } from '@microsoft/sp-core-library';
import strings from './../SPLoader.resx';
var ComponentStore =  (function () {
    function ComponentStore() {
        this._componentMap = new Map(); 
        this._componentReferenceMap = new Map(); 
    }
    Object.defineProperty(ComponentStore, "instance", {
        get: function () {
            if (!ComponentStore._instance) {
                ComponentStore._instance = new ComponentStore();
            }
            return ComponentStore._instance;
        },
        enumerable: true,
        configurable: true
    });
    ComponentStore.prototype.tryGetComponent = function (id, version) {
        Validate.isNonemptyString(id, 'id');
        Validate.isNonemptyString(version, 'version');
        return this._componentMap.get(this._getKey(id, version));
    };
    ComponentStore.prototype.tryGetComponentReference = function (id, version) {
        Validate.isNonemptyString(id, 'id');
        Validate.isNonemptyString(version, 'version');
        return this._componentReferenceMap.get(this._getKey(id, version));
    };
    ComponentStore.prototype.getAllComponentReferences = function () {
        return this._componentReferenceMap;
    };
    ComponentStore.prototype.tryGetComponentById = function (id, shouldLog) {
        if (shouldLog === void 0) { shouldLog = true; }
        try {
            return this._getComponentById(id, shouldLog);
        }
        catch (e) {
            return undefined;
        }
    };
    ComponentStore.prototype.getComponentById = function (id) {
        return this._getComponentById(id, true);
    };
    ComponentStore.prototype.storeComponent = function (id, version, modulePromise) {
        var _this = this;
        Validate.isNonemptyString(id, 'id');
        Validate.isNonemptyString(version, 'version');
        Validate.isNotNullOrUndefined(modulePromise, 'modulePromise');
        var key = this._getKey(id, version);
        if (!this._componentMap.has(key)) {
            modulePromise.then(function (mod) {
                if (_this._componentMap.has(key)) {
                    _this._componentReferenceMap.set(key, mod);
                }
            });
            this._componentMap.set(key, modulePromise);
        }
    };
    ComponentStore.prototype.storeLoadedComponent = function (id, version, module) {
        Validate.isNonemptyString(id, 'id');
        Validate.isNonemptyString(version, 'version');
        Validate.isNotNullOrUndefined(module, 'module');
        var key = this._getKey(id, version);
        if (!this._componentMap.has(key)) {
            this._componentMap.set(key, Promise.resolve(module));
            this._componentReferenceMap.set(key, module);
        }
    };
    ComponentStore.prototype.deleteComponent = function (id, version) {
        var key = this._getKey(id, version);
        if (this._componentMap.has(key)) {
            _TraceLogger.logVerbose(logSource, Text.format(strings.deleteComponentLog, id, version));
            this._componentMap.delete(key);
        }
        if (this._componentReferenceMap.has(key)) {
            this._componentReferenceMap.delete(key);
        }
    };
    ComponentStore.prototype._getComponentById = function (id, shouldLog) {
        Validate.isNonemptyString(id, 'id');
        var returnValue = undefined;
        this._componentMap.forEach(function (value, index) {
            if (index.indexOf(id) === 0) {
                if (!returnValue) {
                    returnValue = value;
                }
                else {
                    var error = new Error(Text.format(strings.tooManyComponentsError, id));
                    if (shouldLog) {
                        _TraceLogger.logError(logSource, error);
                    }
                    throw error;
                }
            }
        });
        if (!returnValue) {
            var error = new Error(Text.format(strings.noComponentFoundError, id));
            if (shouldLog) {
                _TraceLogger.logError(logSource, error);
            }
            throw error;
        }
        return returnValue;
    };
    ComponentStore.prototype._getKey = function (id, version) {
        return normalizeComponentId(id, version);
    };
    return ComponentStore;
}());
export default ComponentStore;
