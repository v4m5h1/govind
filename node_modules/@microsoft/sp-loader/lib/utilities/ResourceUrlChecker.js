import { Validate } from '@microsoft/sp-core-library';
import { _TraceLogger, _LogSource } from '@microsoft/sp-diagnostics';
import resolveAddress from './resolveAddress';
import ErrorBuilder from '../error/ErrorBuilder';
var UrlStatus;
(function (UrlStatus) {
    UrlStatus[UrlStatus["Undefined"] = 0] = "Undefined";
    UrlStatus[UrlStatus["OK"] = 1] = "OK";
    UrlStatus[UrlStatus["FileNotFound"] = 2] = "FileNotFound";
    UrlStatus[UrlStatus["Forbidden"] = 3] = "Forbidden";
    UrlStatus[UrlStatus["ClientError"] = 4] = "ClientError";
    UrlStatus[UrlStatus["ServerError"] = 5] = "ServerError";
    UrlStatus[UrlStatus["NetworkError"] = 6] = "NetworkError";
})(UrlStatus || (UrlStatus = {}));
var ResourceUrlChecker =  (function () {
    function ResourceUrlChecker() {
    }
    ResourceUrlChecker.checkResourceUrl = function (manifest, name) {
        Validate.isNotNullOrUndefined(manifest, 'manifest');
        Validate.isNonemptyString(name, 'name');
        var url = resolveAddress(manifest, name);
        return ResourceUrlChecker._getUrlStatus(url).then(function (urlStatus) {
            if (urlStatus !== UrlStatus.OK) {
                return ResourceUrlChecker._throwUrlStatusError(urlStatus, manifest, name, url);
            }
            return Promise.resolve();
        });
    };
    ResourceUrlChecker._throwUrlStatusError = function (urlStatus, manifest, resourceName, url) {
        switch (urlStatus) {
            case UrlStatus.FileNotFound:
                if (url.match(ResourceUrlChecker.localhostUrlRegex)) {
                    throw ErrorBuilder.buildUrlStatusLocalhostFileNotFoundError(manifest, resourceName, url);
                }
                else {
                    throw ErrorBuilder.buildUrlStatusFileNotFoundError(manifest, resourceName, url);
                }
            case UrlStatus.Forbidden:
                throw ErrorBuilder.buildUrlStatusForbiddenError(manifest, resourceName, url);
            case UrlStatus.ClientError:
                throw ErrorBuilder.buildUrlStatusClientErrorError(manifest, resourceName, url);
            case UrlStatus.ServerError:
                throw ErrorBuilder.buildUrlStatusServerErrorError(manifest, resourceName, url);
            case UrlStatus.NetworkError:
                if (url.match(ResourceUrlChecker.localhostUrlRegex)) {
                    throw ErrorBuilder.buildUrlStatusLocalhostNetworkErrorError(manifest, resourceName, url);
                }
                else if (url.match(ResourceUrlChecker.tenantUrlRegex)) {
                    throw ErrorBuilder.buildUrlStatusDocLibNetworkErrorError(manifest, resourceName, url);
                }
                else if (url.match(ResourceUrlChecker.httpsUrlRegex)) {
                    throw ErrorBuilder.buildUrlStatusHttpsNetworkErrorError(manifest, resourceName, url);
                }
                else {
                    throw ErrorBuilder.buildUrlStatusNetworkErrorError(manifest, resourceName, url);
                }
            case UrlStatus.Undefined:
            default: 
                throw ErrorBuilder.buildUrlStatusUndefinedError(manifest, resourceName, url);
        }
    };
    ResourceUrlChecker._getUrlStatus = function (url) {
        var requestInit = {
            method: 'HEAD',
            mode: 'cors'
        };
        var request = new Request(url, requestInit);
        return window.fetch(request).then(function (response) {
            var httpStatusCode = response.status;
            if (httpStatusCode >= 200 && httpStatusCode < 300) {
                return UrlStatus.OK;
            }
            if (httpStatusCode === 404) {
                return UrlStatus.FileNotFound;
            }
            if (httpStatusCode === 403) {
                return UrlStatus.Forbidden;
            }
            if (httpStatusCode >= 400 && httpStatusCode < 500) {
                return UrlStatus.ClientError;
            }
            if (httpStatusCode >= 500 && httpStatusCode < 600) {
                return UrlStatus.ServerError;
            }
            return UrlStatus.Undefined;
        }).catch(function (error) {
            _TraceLogger.logError(ResourceUrlChecker._logSource, error);
            return UrlStatus.NetworkError;
        });
    };
    ResourceUrlChecker._logSource = _LogSource.create('ResourceUrlChecker');
    ResourceUrlChecker.localhostUrlRegex = /^http[s]?:\/\/localhost/;
    ResourceUrlChecker.tenantUrlRegex = /^http[s]?:\/\/[a-zA-Z0-9]+.sharepoint.com/;
    ResourceUrlChecker.httpsUrlRegex = /^https:\/\//;
    return ResourceUrlChecker;
}());
export default ResourceUrlChecker;
