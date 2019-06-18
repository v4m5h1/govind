import { _TraceLogger } from '@microsoft/sp-diagnostics';
import { Validate, Version, Text, _SPFlight } from '@microsoft/sp-core-library';
import { manifestStoreLogSource as logSource } from './../utilities/telemetryConstants';
import { peekDebugAllowed } from './../debug/confirmDebugAllowed';
import normalizeComponentId from './../utilities/normalizeComponentId';
import strings from './../SPLoader.resx';
import { reactComponentId, reactDomComponentId } from '../utilities/componentConstants';
var ManifestStore =  (function () {
    function ManifestStore() {
        this._manifestVersions = new Map();
        this._manifests = new Map();
        this._pinnedManifests = new Set();
    }
    Object.defineProperty(ManifestStore, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new ManifestStore();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    ManifestStore.prototype.registerPreloadedManifests = function (preloadedData) {
        if (preloadedData && preloadedData.manifests && preloadedData.manifests.length) {
            this.registerManifests(preloadedData.manifests, true);
        }
        var globalManifests = window.g_webPartManifests;
        if (globalManifests && globalManifests.length) {
            this.registerManifests(globalManifests, true);
        }
    };
    ManifestStore.prototype.registerDebugManifests = function (manifests) {
        if (manifests) {
            for (var _i = 0, manifests_1 = manifests; _i < manifests_1.length; _i++) {
                var manifest = manifests_1[_i];
                this._addDebugManifest(manifest);
            }
        }
    };
    ManifestStore.prototype.tryGetManifest = function (id, version, shouldLog) {
        if (shouldLog === void 0) { shouldLog = true; }
        try {
            return this._getManifest(id, version, shouldLog);
        }
        catch (e) {
            return undefined;
        }
    };
    ManifestStore.prototype.getManifest = function (id, version) {
        return this._getManifest(id, version, true);
    };
    ManifestStore.prototype.getRegisteredManifests = function () {
        var _this = this;
        var result = [];
        this._manifests.forEach(function (manifestEntry) {
            var manifest = _this._getManifestFromStoreEntry(manifestEntry);
            if (manifest) {
                result.push(manifest);
            }
        });
        return result;
    };
    ManifestStore.prototype.replaceManifests = function (manifests) {
        this._removeAllManifests();
        this.registerManifests(manifests, false);
    };
    ManifestStore.prototype._getManifestMap = function () {
        return this._manifests;
    };
    ManifestStore.prototype.registerManifests = function (manifests, overwriteExisting) {
        var _this = this;
        manifests.forEach(function (manifest) { return _this._addManifest(manifest, overwriteExisting); });
    };
    ManifestStore.prototype._pinManifest = function (componentId) {
        Validate.isNonemptyString(componentId, 'componentId');
        this._pinnedManifests.add(componentId);
    };
    ManifestStore.prototype.requestManifest = function (id, version) {
        var _this = this;
        Validate.isNotNullOrUndefined(this._manifestProvider, 'manifestProvider');
        _TraceLogger.logVerbose(logSource, "Requesting manifest with id: \"" + id + "\" and version: \"" + version + "\"");
        return this._manifestProvider.tryGetManifest(id, version).then(function (manifests) {
            _this.registerManifests(manifests, false);
            return _this.getManifest(id, version);
        }).catch(function (error) {
            throw new Error(_this._getManifestNotFoundErrorMessage(id, version));
        });
    };
    ManifestStore.prototype.requestManifests = function (ids) {
        var _this = this;
        var retVal = [];
        Validate.isNotNullOrUndefined(this._manifestProvider, 'manifestProvider');
        return this._manifestProvider.tryGetManifests(ids).then(function (manifests) {
            _this.registerManifests(manifests, false);
            ids.forEach(function (id) {
                retVal.push(_this.getManifest(id.id, id.version));
            });
            return retVal;
        });
    };
    ManifestStore.prototype._setManifestProvider = function (manifestProvider) {
        if (!this._manifestProvider) {
            this._manifestProvider = manifestProvider;
        }
    };
    ManifestStore.prototype._isManifestPinned = function (componentId) {
        return this._pinnedManifests.has(componentId);
    };
    ManifestStore.prototype._removeAllManifests = function () {
        var _this = this;
        this._manifests.forEach(function (manifestEntry) { return _this._removeManifest(manifestEntry.id, manifestEntry.version); });
    };
    ManifestStore.prototype._removeManifest = function (id, version) {
        if (this._pinnedManifests.has(id)) {
            return false;
        } 
        if (id === reactComponentId || id === reactDomComponentId) {
            return false;
        }
        var versionObj = Version.parse(version);
        var index = this._createIndex(id, versionObj);
        var entry = this._manifests.get(index);
        if (!entry) {
            return false;
        } 
        if (entry.debugManifest) {
            return false;
        } 
        this._manifests.delete(index);
        if (this._manifestVersions.get(id).length === 1) { 
            this._manifestVersions.delete(id);
        }
        else { 
            this._manifestVersions.set(id, this._manifestVersions.get(id).filter(function (v) { return !v.equals(versionObj); }));
        }
        return true;
    };
    ManifestStore.prototype._getManifest = function (id, version, shouldLog) {
        Validate.isNonemptyString(id, 'id');
        var index = this._getExistingIndex(id, version);
        if (!index) {
            var errorMessage = this._getManifestNotFoundErrorMessage(id, version);
            if (shouldLog) {
                _TraceLogger.logVerbose(logSource, errorMessage);
            }
            throw new Error(errorMessage);
        }
        var manifestEntry = this._manifests.get(index);
        if (manifestEntry) {
            var manifest = this._getManifestFromStoreEntry(manifestEntry);
            if (manifest) {
                return manifest;
            }
        }
        throw new Error(this._getManifestNotFoundErrorMessage(id, version));
    };
    ManifestStore.prototype._getManifestNotFoundErrorMessage = function (id, version) {
        if (!version) {
            return Text.format(strings.manifestNotFoundByIdError, id);
        }
        else {
            return Text.format(strings.manifestNotFoundError, id, version);
        }
    };
    ManifestStore.prototype._getManifestFromStoreEntry = function (manifestEntry) {
        var allowDebug = peekDebugAllowed({ manifestsRequested: true, loaderRequested: false });
        if (manifestEntry) {
            if (allowDebug && manifestEntry.debugManifest) {
                return manifestEntry.debugManifest;
            }
            else {
                return manifestEntry.manifest;
            }
        }
        else {
            return undefined;
        }
    };
    ManifestStore.prototype._addManifest = function (manifest, overwriteExisting) {
        this._internalAddManifest(manifest, false, overwriteExisting);
    };
    ManifestStore.prototype._addDebugManifest = function (manifest) {
        this._internalAddManifest(manifest, true);
    };
    ManifestStore.prototype._internalAddManifest = function (manifest, isDebug, overwriteExisting) {
        if (this._isManifestPinned(manifest.id)) {
            return;
        }
        if (!_SPFlight.isDebugFlightEnabled && manifest.isInternal
            && manifest.id !== reactComponentId && manifest.id !== reactDomComponentId) {
            this._pinManifest(manifest.id);
        }
        if (isDebug) {
            manifest._isDebug = true;
        }
        var index = this._getExistingIndex(manifest.id, manifest.version);
        var existingEntry = index ? this._manifests.get(index) : undefined;
        if (existingEntry) {
            if (isDebug) {
                existingEntry.debugManifest = manifest;
            }
            else {
                if (overwriteExisting || !existingEntry.manifest) {
                    existingEntry.manifest = manifest;
                }
            }
        }
        else {
            this._addManifestToVersionsMap(manifest);
            var newIndex = this._createIndexFromManifest(manifest);
            this._manifests.set(newIndex, {
                id: manifest.id,
                version: manifest.version,
                manifest: isDebug ? undefined : manifest,
                debugManifest: isDebug ? manifest : undefined
            });
        }
    };
    ManifestStore.prototype._addManifestToVersionsMap = function (manifest) {
        var version = Version.parse(manifest.version);
        if (!this._manifestVersions.has(manifest.id)) {
            this._manifestVersions.set(manifest.id, [version]);
        }
        else {
            var versions = this._manifestVersions.get(manifest.id);
            for (var _i = 0, versions_1 = versions; _i < versions_1.length; _i++) {
                var existingVersion = versions_1[_i];
                if (existingVersion.equals(version)) {
                    return; 
                }
            }
            this._manifestVersions.set(manifest.id, versions.concat(version));
        }
    };
    ManifestStore.prototype._getExistingIndex = function (id, versionString) {
        if (!versionString) {
            return this._getUniqueManifestStoreIndex(id);
        }
        if (this._manifestVersions.has(id)) {
            var versions = this._manifestVersions.get(id);
            var version_1 = Version.parse(versionString);
            var validVersions = versions.filter(function (currentVersion) { return currentVersion.satisfies(version_1); });
            if (!validVersions || validVersions.length < 1) {
                return undefined;
            }
            else if (validVersions.length === 1) {
                return this._createIndex(id, validVersions[0]);
            }
            else { 
                var debugIndex = this._findDebugIndex(id, validVersions);
                if (debugIndex) {
                    return debugIndex;
                }
                else {
                    var error = new Error(Text.format(strings.tooManyCompatibleVersionsError, validVersions.length, validVersions.join(', '), id, versionString));
                    _TraceLogger.logError(logSource, error);
                    var returnVersion = validVersions.sort(function (version1, version2) {
                        return -1 * Version.compare(version1, version2);
                    })[0];
                    return this._createIndex(id, returnVersion);
                }
            }
        }
        return undefined;
    };
    ManifestStore.prototype._getUniqueManifestStoreIndex = function (id) {
        var versions = this._manifestVersions.get(id);
        if (!versions || versions.length < 1) {
            return undefined;
        }
        else if (versions.length === 1) {
            return this._createIndex(id, versions[0]);
        }
        else { 
            var debugIndex = this._findDebugIndex(id, versions);
            if (debugIndex) {
                return debugIndex;
            }
            else {
                var error = new Error(Text.format(strings.tooManyManifestsError, versions.length, versions.join(', '), id));
                _TraceLogger.logError(logSource, error);
                return undefined;
            }
        }
    };
    ManifestStore.prototype._createIndexFromManifest = function (manifest) {
        return this._createIndex(manifest.id, Version.parse(manifest.version));
    };
    ManifestStore.prototype._createIndex = function (id, version) {
        return normalizeComponentId(id, version.toString());
    };
    ManifestStore.prototype._findDebugIndex = function (id, versions) {
        var _this = this;
        return versions.reduce(function (previous, validVersion) {
            var index = _this._createIndex(id, validVersion);
            var manifestStoreEntry = _this._manifests.get(index);
            if (manifestStoreEntry && manifestStoreEntry.debugManifest) {
                return index;
            }
            else {
                return previous;
            }
        }, undefined);
    };
    return ManifestStore;
}());
export default ManifestStore;
