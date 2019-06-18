"use strict";
/**
 * DISCLAIMER
 *
 * As there is not yet an OData end-point for managed metadata, this service makes use of the ProcessQuery end-points.
 * The service will get updated once the APIs are in place for managing managed metadata.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var sp_http_1 = require("@microsoft/sp-http");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var SPTermStorePickerMockService_1 = require("./SPTermStorePickerMockService");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
/**
 * Service implementation to manage term stores in SharePoint
 */
var SPTermStorePickerService = (function () {
    /**
     * Service constructor
     */
    function SPTermStorePickerService(props, context) {
        this.props = props;
        this.context = context;
        if (sp_core_library_1.Environment.type !== sp_core_library_1.EnvironmentType.Local) {
            {
                this.clientServiceUrl = this.context.pageContext.web.absoluteUrl + '/_vti_bin/client.svc/ProcessQuery';
            }
        }
    }
    SPTermStorePickerService.prototype.getTermLabels = function (termId) {
        return __awaiter(this, void 0, void 0, function () {
            var result, data, reqHeaders, httpPostOptions, callResult, jsonResult, node, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.Local) {
                            // If the running environment is local, load the data from the mock
                            return [2 /*return*/, null];
                        }
                        result = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        data = "<Request AddExpandoFieldTypeSuffix=\"true\" SchemaVersion=\"15.0.0.0\" LibraryVersion=\"16.0.0.0\" ApplicationName=\".NET Library\" xmlns=\"http://schemas.microsoft.com/sharepoint/clientquery/2009\"><Actions><ObjectPath Id=\"8\" ObjectPathId=\"7\" /><ObjectIdentityQuery Id=\"9\" ObjectPathId=\"7\" /><ObjectPath Id=\"11\" ObjectPathId=\"10\" /><ObjectIdentityQuery Id=\"12\" ObjectPathId=\"10\" /><ObjectPath Id=\"14\" ObjectPathId=\"13\" /><ObjectIdentityQuery Id=\"15\" ObjectPathId=\"13\" /><Query Id=\"16\" ObjectPathId=\"13\"><Query SelectAllProperties=\"false\"><Properties><Property Name=\"Labels\" SelectAll=\"true\"><Query SelectAllProperties=\"false\"><Properties /></Query></Property></Properties></Query></Query></Actions><ObjectPaths><StaticMethod Id=\"7\" Name=\"GetTaxonomySession\" TypeId=\"{981cbc68-9edc-4f8d-872f-71146fcbb84f}\" /><Method Id=\"10\" ParentId=\"7\" Name=\"GetDefaultKeywordsTermStore\" /><Method Id=\"13\" ParentId=\"10\" Name=\"GetTerm\"><Parameters><Parameter Type=\"Guid\">" + termId + "</Parameter></Parameters></Method></ObjectPaths></Request>";
                        reqHeaders = new Headers();
                        reqHeaders.append("accept", "application/json");
                        reqHeaders.append("content-type", "application/xml");
                        httpPostOptions = {
                            headers: reqHeaders,
                            body: data
                        };
                        return [4 /*yield*/, this.context.spHttpClient.post(this.clientServiceUrl, sp_http_1.SPHttpClient.configurations.v1, httpPostOptions)];
                    case 2:
                        callResult = _a.sent();
                        return [4 /*yield*/, callResult.json()];
                    case 3:
                        jsonResult = _a.sent();
                        node = jsonResult.find(function (x) { return x._ObjectType_ == "SP.Taxonomy.Term"; });
                        if (node && node.Labels && node.Labels._Child_Items_) {
                            result = node.Labels._Child_Items_.map(function (termLabel) { return termLabel.Value; });
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        result = null;
                        console.log(error_1.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Gets the collection of term stores in the current SharePoint env
     */
    SPTermStorePickerService.prototype.getTermStores = function () {
        var _this = this;
        if (sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.Local) {
            // If the running environment is local, load the data from the mock
            return this.getTermStoresFromMock();
        }
        else {
            // Retrieve the term store name, groups, and term sets
            var data = '<Request AddExpandoFieldTypeSuffix="true" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName=".NET Library" xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009"><Actions><ObjectPath Id="2" ObjectPathId="1" /><ObjectIdentityQuery Id="3" ObjectPathId="1" /><ObjectPath Id="5" ObjectPathId="4" /><ObjectIdentityQuery Id="6" ObjectPathId="4" /><Query Id="7" ObjectPathId="4"><Query SelectAllProperties="false"><Properties><Property Name="Id" ScalarProperty="true" /><Property Name="Name" ScalarProperty="true" /><Property Name="Groups"><Query SelectAllProperties="false"><Properties /></Query><ChildItemQuery SelectAllProperties="false"><Properties><Property Name="Name" ScalarProperty="true" /><Property Name="Id" ScalarProperty="true" /><Property Name="IsSystemGroup" ScalarProperty="true" /><Property Name="TermSets"><Query SelectAllProperties="false"><Properties /></Query><ChildItemQuery SelectAllProperties="false"><Properties><Property Name="Name" ScalarProperty="true" /><Property Name="Id" ScalarProperty="true" /><Property Name="Description" ScalarProperty="true" /><Property Name="Names" ScalarProperty="true" /></Properties></ChildItemQuery></Property></Properties></ChildItemQuery></Property></Properties></Query></Query></Actions><ObjectPaths><StaticMethod Id="1" Name="GetTaxonomySession" TypeId="{981cbc68-9edc-4f8d-872f-71146fcbb84f}" /><Method Id="4" ParentId="1" Name="GetDefaultSiteCollectionTermStore" /></ObjectPaths></Request>';
            var reqHeaders = new Headers();
            reqHeaders.append("accept", "application/json");
            reqHeaders.append("content-type", "application/xml");
            var httpPostOptions = {
                headers: reqHeaders,
                body: data
            };
            return this.context.spHttpClient.post(this.clientServiceUrl, sp_http_1.SPHttpClient.configurations.v1, httpPostOptions).then(function (serviceResponse) {
                return serviceResponse.json().then(function (serviceJSONResponse) {
                    // Construct results
                    var termStoreResult = serviceJSONResponse.filter(function (r) { return r['_ObjectType_'] === 'SP.Taxonomy.TermStore'; });
                    // Check if term store was retrieved
                    if (termStoreResult.length > 0) {
                        // Check if the termstore needs to be filtered or limited
                        if (_this.props.termsetNameOrID) {
                            return termStoreResult.map(function (termstore) {
                                var termGroups = termstore.Groups._Child_Items_;
                                // Check if the groups have to be limited to a specific term set
                                if (_this.props.termsetNameOrID) {
                                    var termsetNameOrId_1 = _this.props.termsetNameOrID;
                                    termGroups = termGroups.map(function (group) {
                                        group.TermSets._Child_Items_ = group.TermSets._Child_Items_.filter(function (termSet) { return termSet.Name === termsetNameOrId_1 || _this.cleanGuid(termSet.Id).toLowerCase() === _this.cleanGuid(termsetNameOrId_1).toLowerCase(); });
                                        return group;
                                    });
                                }
                                // Filter out all systen groups
                                termGroups = termGroups.filter(function (group) { return !group.IsSystemGroup; });
                                // Filter out empty groups
                                termGroups = termGroups.filter(function (group) { return group.TermSets._Child_Items_.length > 0; });
                                // Map the new groups
                                termstore.Groups._Child_Items_ = termGroups;
                                return termstore;
                            });
                        }
                        // Return the term store results
                        return termStoreResult;
                    }
                    return [];
                });
            });
        }
    };
    /**
     * Gets the current term set
     */
    SPTermStorePickerService.prototype.getTermSet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var termSetInfo, termStore;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.Local)) return [3 /*break*/, 2];
                        return [4 /*yield*/, SPTermStorePickerMockService_1.default.getAllTerms()];
                    case 1:
                        termSetInfo = _a.sent();
                        return [2 /*return*/, termSetInfo];
                    case 2: return [4 /*yield*/, this.getTermStores()];
                    case 3:
                        termStore = _a.sent();
                        return [2 /*return*/, this.getTermSetId(termStore, this.props.termsetNameOrID)];
                }
            });
        });
    };
    /**
     * Retrieve all terms for the given term set
     * @param termset
     */
    SPTermStorePickerService.prototype.getAllTerms = function (termset) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var termsetId, termStore, crntTermSet, data, reqHeaders, httpPostOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.Local)) return [3 /*break*/, 1];
                        // If the running environment is local, load the data from the mock
                        return [2 /*return*/, this.getAllMockTerms()];
                    case 1:
                        termsetId = termset;
                        if (!!this.isGuid(termset)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getTermStores()];
                    case 2:
                        termStore = _a.sent();
                        crntTermSet = this.getTermSetId(termStore, termset);
                        if (crntTermSet) {
                            termsetId = this.cleanGuid(crntTermSet.Id);
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        _a.label = 3;
                    case 3:
                        data = "<Request xmlns=\"http://schemas.microsoft.com/sharepoint/clientquery/2009\" SchemaVersion=\"15.0.0.0\" LibraryVersion=\"16.0.0.0\" ApplicationName=\"Javascript Library\"><Actions><ObjectPath Id=\"1\" ObjectPathId=\"0\" /><ObjectIdentityQuery Id=\"2\" ObjectPathId=\"0\" /><ObjectPath Id=\"4\" ObjectPathId=\"3\" /><ObjectIdentityQuery Id=\"5\" ObjectPathId=\"3\" /><ObjectPath Id=\"7\" ObjectPathId=\"6\" /><ObjectIdentityQuery Id=\"8\" ObjectPathId=\"6\" /><ObjectPath Id=\"10\" ObjectPathId=\"9\" /><Query Id=\"11\" ObjectPathId=\"6\"><Query SelectAllProperties=\"true\"><Properties /></Query></Query><Query Id=\"12\" ObjectPathId=\"9\"><Query SelectAllProperties=\"false\"><Properties /></Query><ChildItemQuery SelectAllProperties=\"false\"><Properties><Property Name=\"IsRoot\" SelectAll=\"true\" /><Property Name=\"Labels\" SelectAll=\"true\" /><Property Name=\"TermsCount\" SelectAll=\"true\" /><Property Name=\"CustomSortOrder\" SelectAll=\"true\" /><Property Name=\"Id\" SelectAll=\"true\" /><Property Name=\"Name\" SelectAll=\"true\" /><Property Name=\"PathOfTerm\" SelectAll=\"true\" /><Property Name=\"Parent\" SelectAll=\"true\" /><Property Name=\"LocalCustomProperties\" SelectAll=\"true\" /><Property Name=\"IsDeprecated\" ScalarProperty=\"true\" /><Property Name=\"IsAvailableForTagging\" ScalarProperty=\"true\" /></Properties></ChildItemQuery></Query></Actions><ObjectPaths><StaticMethod Id=\"0\" Name=\"GetTaxonomySession\" TypeId=\"{981cbc68-9edc-4f8d-872f-71146fcbb84f}\" /><Method Id=\"3\" ParentId=\"0\" Name=\"GetDefaultKeywordsTermStore\" /><Method Id=\"6\" ParentId=\"3\" Name=\"GetTermSet\"><Parameters><Parameter Type=\"Guid\">" + termsetId + "</Parameter></Parameters></Method><Method Id=\"9\" ParentId=\"6\" Name=\"GetAllTerms\" /></ObjectPaths></Request>";
                        reqHeaders = new Headers();
                        reqHeaders.append("accept", "application/json");
                        reqHeaders.append("content-type", "application/xml");
                        httpPostOptions = {
                            headers: reqHeaders,
                            body: data
                        };
                        return [2 /*return*/, this.context.spHttpClient.post(this.clientServiceUrl, sp_http_1.SPHttpClient.configurations.v1, httpPostOptions).then(function (serviceResponse) {
                                return serviceResponse.json().then(function (serviceJSONResponse) {
                                    var termStoreResultTermSets = serviceJSONResponse.filter(function (r) { return r['_ObjectType_'] === 'SP.Taxonomy.TermSet'; });
                                    if (termStoreResultTermSets.length > 0) {
                                        var termStoreResultTermSet = termStoreResultTermSets[0];
                                        termStoreResultTermSet.Terms = [];
                                        // Retrieve the term collection results
                                        var termStoreResultTerms = serviceJSONResponse.filter(function (r) { return r['_ObjectType_'] === 'SP.Taxonomy.TermCollection'; });
                                        if (termStoreResultTerms.length > 0) {
                                            // Retrieve all terms
                                            var terms = termStoreResultTerms[0]._Child_Items_;
                                            // Clean the term ID and specify the path depth
                                            terms = terms.map(function (term) {
                                                if (term.IsRoot) {
                                                    term.CustomSortOrderIndex = (termStoreResultTermSet.CustomSortOrder) ? termStoreResultTermSet.CustomSortOrder.split(":").indexOf(_this.cleanGuid(term.Id)) : -1;
                                                }
                                                else {
                                                    term.CustomSortOrderIndex = (term["Parent"].CustomSortOrder) ? term["Parent"].CustomSortOrder.split(":").indexOf(_this.cleanGuid(term.Id)) : -1;
                                                }
                                                term.Id = _this.cleanGuid(term.Id);
                                                term['PathDepth'] = term.PathOfTerm.split(';').length;
                                                term.TermSet = { Id: _this.cleanGuid(termStoreResultTermSet.Id), Name: termStoreResultTermSet.Name };
                                                if (term["Parent"]) {
                                                    term.ParentId = _this.cleanGuid(term["Parent"].Id);
                                                }
                                                return term;
                                            });
                                            // Check if the term set was not empty
                                            if (terms.length > 0) {
                                                // Sort the terms by PathOfTerm and their depth
                                                terms = _this.sortTerms(terms);
                                                termStoreResultTermSet.Terms = terms;
                                            }
                                        }
                                        return termStoreResultTermSet;
                                    }
                                    return null;
                                });
                            })];
                }
            });
        });
    };
    /**
     * Get the term set ID by its name
     * @param termstore
     * @param termset
     */
    SPTermStorePickerService.prototype.getTermSetId = function (termstore, termsetName) {
        if (termstore && termstore.length > 0 && termsetName) {
            // Get the first term store
            var ts = termstore[0];
            // Check if the term store contains groups
            if (ts.Groups && ts.Groups._Child_Items_) {
                for (var _i = 0, _a = ts.Groups._Child_Items_; _i < _a.length; _i++) {
                    var group = _a[_i];
                    // Check if the group contains term sets
                    if (group.TermSets && group.TermSets._Child_Items_) {
                        for (var _b = 0, _c = group.TermSets._Child_Items_; _b < _c.length; _b++) {
                            var termSet = _c[_b];
                            // Check if the term set is found
                            if (termSet.Name === termsetName) {
                                return termSet;
                            }
                        }
                    }
                }
            }
        }
        return null;
    };
    /**
     * Retrieve all terms that starts with the searchText
     * @param searchText
     */
    SPTermStorePickerService.prototype.searchTermsByName = function (searchText) {
        if (sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.Local) {
            // If the running environment is local, load the data from the mock
            return SPTermStorePickerMockService_1.default.searchTermsByName(searchText);
        }
        else {
            return this.searchTermsByTermSet(searchText, this.props.termsetNameOrID);
        }
    };
    /**
       * Searches terms for the given term set
       * @param searchText
       * @param termsetId
       */
    SPTermStorePickerService.prototype.searchTermsByTermSet = function (searchText, termSet) {
        var _this = this;
        if (sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.Local) {
            // If the running environment is local, load the data from the mock
            return SPTermStorePickerMockService_1.default.searchTermsByName(searchText);
        }
        else {
            return new Promise(function (resolve) {
                _this.getTermStores().then(function (termStore) {
                    var TermSetId = termSet;
                    if (!_this.isGuid(termSet)) {
                        // Get the ID of the provided term set name
                        var crntTermSet = _this.getTermSetId(termStore, termSet);
                        if (crntTermSet) {
                            TermSetId = _this.cleanGuid(crntTermSet.Id);
                        }
                        else {
                            resolve(null);
                            return;
                        }
                    }
                    var data = "<Request xmlns=\"http://schemas.microsoft.com/sharepoint/clientquery/2009\" SchemaVersion=\"15.0.0.0\" LibraryVersion=\"16.0.0.0\" ApplicationName=\"Javascript Library\"><Actions><ObjectPath Id=\"456\" ObjectPathId=\"455\" /><ObjectIdentityQuery Id=\"457\" ObjectPathId=\"455\" /><ObjectPath Id=\"459\" ObjectPathId=\"458\" /><ObjectIdentityQuery Id=\"460\" ObjectPathId=\"458\" /><ObjectPath Id=\"462\" ObjectPathId=\"461\" /><ObjectIdentityQuery Id=\"463\" ObjectPathId=\"461\" /><ObjectPath Id=\"465\" ObjectPathId=\"464\" /><SetProperty Id=\"466\" ObjectPathId=\"464\" Name=\"TermLabel\"><Parameter Type=\"String\">" + searchText + "</Parameter></SetProperty><SetProperty Id=\"467\" ObjectPathId=\"464\" Name=\"DefaultLabelOnly\"><Parameter Type=\"Boolean\">true</Parameter></SetProperty><SetProperty Id=\"468\" ObjectPathId=\"464\" Name=\"StringMatchOption\"><Parameter Type=\"Number\">0</Parameter></SetProperty><SetProperty Id=\"469\" ObjectPathId=\"464\" Name=\"ResultCollectionSize\"><Parameter Type=\"Number\">10</Parameter></SetProperty><SetProperty Id=\"470\" ObjectPathId=\"464\" Name=\"TrimUnavailable\"><Parameter Type=\"Boolean\">true</Parameter></SetProperty><ObjectPath Id=\"472\" ObjectPathId=\"471\" /><Query Id=\"473\" ObjectPathId=\"471\"><Query SelectAllProperties=\"false\"><Properties /></Query><ChildItemQuery SelectAllProperties=\"false\"><Properties><Property Name=\"IsRoot\" SelectAll=\"true\" /><Property Name=\"Id\" SelectAll=\"true\" /><Property Name=\"Name\" SelectAll=\"true\" /><Property Name=\"PathOfTerm\" SelectAll=\"true\" /><Property Name=\"TermSet\" SelectAll=\"true\" /></Properties></ChildItemQuery></Query></Actions><ObjectPaths><StaticMethod Id=\"455\" Name=\"GetTaxonomySession\" TypeId=\"{981cbc68-9edc-4f8d-872f-71146fcbb84f}\" /><Method Id=\"458\" ParentId=\"455\" Name=\"GetDefaultKeywordsTermStore\" /><Method Id=\"461\" ParentId=\"458\" Name=\"GetTermSet\"><Parameters><Parameter Type=\"Guid\">" + TermSetId + "</Parameter></Parameters></Method><Constructor Id=\"464\" TypeId=\"{61a1d689-2744-4ea3-a88b-c95bee9803aa}\" /><Method Id=\"471\" ParentId=\"461\" Name=\"GetTerms\"><Parameters><Parameter ObjectPathId=\"464\" /></Parameters></Method></ObjectPaths></Request>";
                    var reqHeaders = new Headers();
                    reqHeaders.append("accept", "application/json");
                    reqHeaders.append("content-type", "application/xml");
                    var httpPostOptions = {
                        headers: reqHeaders,
                        body: data
                    };
                    return _this.context.spHttpClient.post(_this.clientServiceUrl, sp_http_1.SPHttpClient.configurations.v1, httpPostOptions).then(function (serviceResponse) {
                        return serviceResponse.json().then(function (serviceJSONResponse) {
                            // Retrieve the term collection results
                            var termStoreResult = serviceJSONResponse.filter(function (r) { return r['_ObjectType_'] === 'SP.Taxonomy.TermCollection'; });
                            if (termStoreResult.length > 0) {
                                // Retrieve all terms
                                var terms = termStoreResult[0]._Child_Items_;
                                var returnTerms_1 = [];
                                terms.forEach(function (term) {
                                    if (term.Name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
                                        returnTerms_1.push({
                                            key: _this.cleanGuid(term.Id),
                                            name: term.Name,
                                            path: term.PathOfTerm,
                                            termSet: _this.cleanGuid(term.TermSet.Id),
                                            termSetName: term.TermSet.Name
                                        });
                                    }
                                });
                                resolve(returnTerms_1);
                            }
                            return null;
                        });
                    });
                });
            });
        }
    };
    SPTermStorePickerService.prototype.isGuid = function (strGuid) {
        return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(strGuid);
    };
    /**
     * Sorting terms based on their path and depth
     *
     * @param terms
     */
    SPTermStorePickerService.prototype.sortTerms = function (terms) {
        // Start sorting by depth
        var newTermsOrder = [];
        var itemsToSort = true;
        var pathLevel = 1;
        while (itemsToSort) {
            // Get terms for the current level
            var crntTerms = terms.filter(function (term) { return term.PathDepth === pathLevel; });
            if (crntTerms && crntTerms.length > 0) {
                crntTerms = crntTerms.sort(this.sortTermByPath);
                if (pathLevel !== 1) {
                    crntTerms = crntTerms.reverse();
                    var _loop_1 = function (crntTerm) {
                        var pathElms = crntTerm.PathOfTerm.split(";");
                        // Last item is not needed for parent path
                        pathElms.pop();
                        // Find the parent item and add the new item
                        var idx = sp_lodash_subset_1.findIndex(newTermsOrder, function (term) { return term.PathOfTerm === pathElms.join(";"); });
                        if (idx !== -1) {
                            newTermsOrder.splice(idx + 1, 0, crntTerm);
                        }
                        else {
                            // Push the item at the end if the parent couldn't be found
                            newTermsOrder.push(crntTerm);
                        }
                    };
                    for (var _i = 0, crntTerms_1 = crntTerms; _i < crntTerms_1.length; _i++) {
                        var crntTerm = crntTerms_1[_i];
                        _loop_1(crntTerm);
                    }
                }
                else {
                    newTermsOrder = crntTerms;
                }
                ++pathLevel;
            }
            else {
                itemsToSort = false;
            }
        }
        return newTermsOrder;
    };
    /**
     * Sort the terms by their path
     *
     * @param a term 2
     * @param b term 2
     */
    SPTermStorePickerService.prototype.sortTermByPath = function (a, b) {
        if (a.CustomSortOrderIndex === -1) {
            if (a.PathOfTerm.toLowerCase() < b.PathOfTerm.toLowerCase()) {
                return -1;
            }
            if (a.PathOfTerm.toLowerCase() > b.PathOfTerm.toLowerCase()) {
                return 1;
            }
            return 0;
        }
        else {
            if (a.CustomSortOrderIndex < b.CustomSortOrderIndex) {
                return -1;
            }
            if (a.CustomSortOrderIndex > b.CustomSortOrderIndex) {
                return 1;
            }
            return 0;
        }
    };
    /**
     * Clean the Guid from the Web Service response
     * @param guid
     */
    SPTermStorePickerService.prototype.cleanGuid = function (guid) {
        if (guid !== undefined) {
            return guid.replace('/Guid(', '').replace('/', '').replace(')', '');
        }
        else {
            return '';
        }
    };
    /**
     * Returns 3 fake SharePoint lists for the Mock mode
     */
    SPTermStorePickerService.prototype.getTermStoresFromMock = function () {
        return SPTermStorePickerMockService_1.default.getTermStores(this.context.pageContext.web.absoluteUrl).then(function (data) {
            return data;
        });
    };
    /**
     * Returns 3 fake SharePoint lists for the Mock mode
     */
    SPTermStorePickerService.prototype.getAllMockTerms = function () {
        return SPTermStorePickerMockService_1.default.getAllTerms().then(function (data) {
            return data;
        });
    };
    return SPTermStorePickerService;
}());
exports.default = SPTermStorePickerService;

//# sourceMappingURL=SPTermStorePickerService.js.map
