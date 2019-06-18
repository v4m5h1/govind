"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sp_core_library_1 = require("@microsoft/sp-core-library");
var SPServiceMock_1 = require("./SPServiceMock");
var SPService_1 = require("./SPService");
var SPServiceFactory = (function () {
    function SPServiceFactory() {
    }
    SPServiceFactory.createService = function (context, includeDelay, delayTimeout) {
        if (sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.Local) {
            return new SPServiceMock_1.default(includeDelay, delayTimeout);
        }
        return new SPService_1.default(context);
    };
    return SPServiceFactory;
}());
exports.SPServiceFactory = SPServiceFactory;

//# sourceMappingURL=SPServiceFactory.js.map
