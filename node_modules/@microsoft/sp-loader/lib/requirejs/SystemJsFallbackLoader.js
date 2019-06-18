import ComponentStore from '../stores/ComponentStore';
import ManifestStore from '../stores/ManifestStore';
import { normalizeFailoverPathName } from '../systemjs/normalizeName';
import LoadComponentExecutor from '../utilities/LoadComponentExecutor';
var SystemJsFallbackLoader =  (function () {
    function SystemJsFallbackLoader(serviceScope) {
        this._isInitialized = false;
        this._serviceScope = serviceScope;
        this._executor = new LoadComponentExecutor(this._loadComponentImpl.bind(this));
    }
    Object.defineProperty(SystemJsFallbackLoader.prototype, "executor", {
        get: function () {
            return this._executor;
        },
        enumerable: true,
        configurable: true
    });
    SystemJsFallbackLoader.prototype.loadComponent = function (manifest) {
        return this._executor.loadComponent(manifest);
    };
    SystemJsFallbackLoader.prototype._loadComponentImpl = function (manifest) {
        var _this = this;
        return this._ensureInitialized().then(function () {
            ComponentStore.instance.getAllComponentReferences().forEach(function (value, key) {
                _this._systemJsLoader._ensure(normalizeFailoverPathName(key), value);
            });
            ManifestStore.instance.getRegisteredManifests().forEach(function (m) {
                _this._systemJsLoader.configure(m);
            });
            return _this._systemJsComponentLoader.loadComponent(manifest).then(function (module) {
                _this._restoreGlobals();
                return module;
            }, function (error) {
                _this._restoreGlobals();
                throw error;
            });
        });
    };
    SystemJsFallbackLoader.prototype._ensureInitialized = function () {
        var _this = this;
        if (this._isInitialized) {
            return Promise.resolve();
        }
        this._saveGlobals();
        return import( '../systemjs/index').then(function (module) {
            _this._systemJsComponentLoader = new module.SPSystemJsComponentLoader(_this._serviceScope);
            _this._systemJsLoader = _this._serviceScope.consume(module.SystemJsLoader.serviceKey);
            _this._restoreGlobals();
            _this._isInitialized = true;
        });
    };
    SystemJsFallbackLoader.prototype._saveGlobals = function () {
        this.requirejs = SystemJsFallbackLoader._window.requirejs;
        this.require = SystemJsFallbackLoader._window.require;
        this.define = SystemJsFallbackLoader._window.define;
    };
    SystemJsFallbackLoader.prototype._restoreGlobals = function () {
        SystemJsFallbackLoader._window.requirejs = this.requirejs;
        SystemJsFallbackLoader._window.require = this.require;
        SystemJsFallbackLoader._window.define = this.define;
    };
    SystemJsFallbackLoader._window = window;
    return SystemJsFallbackLoader;
}());
export default SystemJsFallbackLoader;
