var LoadComponentExecutor =  (function () {
    function LoadComponentExecutor(loadFunction) {
        this._pendingLoads = [];
        this._loadFunction = loadFunction;
    }
    LoadComponentExecutor.prototype.setAlternativeExecutor = function (executor) {
        this._alternativeExecutor = executor;
        executor._alternativeExecutor = this;
    };
    LoadComponentExecutor.prototype.loadComponent = function (manifest) {
        var _this = this;
        if (!this._canRunLoad()) {
            return new Promise(function (resolve, reject) {
                _this._pendingLoads.push(function () {
                    _this.loadComponent(manifest).then(resolve, reject);
                });
            });
        }
        this._incrementActiveLoads();
        return this._loadFunction(manifest).then(function (module) {
            _this._decrementActiveLoads();
            return module;
        }, function (error) {
            _this._decrementActiveLoads();
            throw error;
        });
    };
    Object.defineProperty(LoadComponentExecutor.prototype, "isRunning", {
        get: function () {
            return this._activeLoads > 0;
        },
        enumerable: true,
        configurable: true
    });
    LoadComponentExecutor.prototype.processPendingLoads = function () {
        var _loadsToRun = this._pendingLoads;
        this._pendingLoads = [];
        _loadsToRun.forEach(function (load) { return load(); });
    };
    LoadComponentExecutor.prototype._canRunLoad = function () {
        return !this._alternativeExecutor || !this._alternativeExecutor.isRunning;
    };
    LoadComponentExecutor.prototype._incrementActiveLoads = function () {
        this._activeLoads++;
    };
    LoadComponentExecutor.prototype._decrementActiveLoads = function () {
        this._activeLoads--;
        if (this._activeLoads === 0 && this._alternativeExecutor) {
            this._alternativeExecutor.processPendingLoads();
        }
    };
    return LoadComponentExecutor;
}());
export default LoadComponentExecutor;
