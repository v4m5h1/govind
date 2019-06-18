import { Text, Validate } from '@microsoft/sp-core-library';
import { _TraceLogger } from '@microsoft/sp-diagnostics';
import LocaleStore from '../stores/LocaleStore';
import * as telemetryConstants from './telemetryConstants';
import strings from '../SPLoader.resx';
export default function resolveAddress(manifest, resourceName) {
    Validate.isNotNullOrUndefined(manifest, 'manifest');
    Validate.isNonemptyString(resourceName, 'resourceName');
    if (!manifest.loaderConfig.scriptResources.hasOwnProperty(resourceName)) {
        var error = new Error(Text.format(strings.resourceNotFoundError, resourceName, manifest.id, manifest.alias));
        _TraceLogger.logError(telemetryConstants.resolveAddressLogSource, error);
        throw error;
    }
    var moduleConfiguration = manifest.loaderConfig.scriptResources[resourceName];
    var address = resolveModuleConfiguration(resourceName, moduleConfiguration);
    if (!address.match(/^https?\:\/\//i)) {
        var moduleBaseUrl = manifest.loaderConfig.internalModuleBaseUrls[0].replace(/\/+$/, '');
        address = moduleBaseUrl + "/" + address;
    }
    return address;
}
function resolveModuleConfiguration(moduleName, moduleConfiguration) {
    if (moduleConfiguration) {
        switch (moduleConfiguration.type) {
            case 'component':
                var failoverPath = moduleConfiguration.failoverPath;
                if (!failoverPath) {
                    throw new Error(strings.noFailoverPathError);
                }
                return resolvePath(failoverPath);
            case 'path':
                return resolvePath(moduleConfiguration.path);
            case 'localizedPath':
                return resolvePath(resolveLocalizedModuleConfiguration(moduleConfiguration));
            case null: 
            case undefined:
            default: 
                return moduleName;
        }
    }
    else {
        return moduleName;
    }
}
export function resolvePath(path) {
    if (typeof path === 'string') {
        return path;
    }
    else {
        if (path.debug) {
            return path.debug;
        }
        else {
            return path.default;
        }
    }
}
function resolveLocalizedModuleConfiguration(moduleConfiguration) {
    var currentLocale = LocaleStore.getLocale();
    if (moduleConfiguration.paths) {
        if (currentLocale) {
            for (var locale in moduleConfiguration.paths) {
                if (locale && locale.toUpperCase() === currentLocale.toUpperCase() && moduleConfiguration.paths[locale]) {
                    return moduleConfiguration.paths[locale];
                }
            }
        }
    }
    return moduleConfiguration.defaultPath;
}
