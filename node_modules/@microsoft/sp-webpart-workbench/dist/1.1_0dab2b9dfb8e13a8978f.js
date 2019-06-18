webpackJsonp8be81a5c_af38_4bb2_af97_afa3b64dfbed_1_8_2([1],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: external "@microsoft/office-ui-fabric-react-bundle"
var office_ui_fabric_react_bundle_ = __webpack_require__(1);
var office_ui_fabric_react_bundle__default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_bundle_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(2);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@ms/odsp-utilities-bundle/5.0.3/node_modules/@ms/odsp-utilities-bundle/lib/index.js
var lib = __webpack_require__(10);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/ToolboxGroupBase.module.scss.js
__webpack_require__(303);
var styles = {
    toolboxGroup: 'toolboxGroup_a2eb712c',
    header: 'header_a2eb712c',
    seeAllButton: 'seeAllButton_a2eb712c',
};
/* harmony default export */ var ToolboxGroupBase_module_scss = (styles);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/ToolboxGroupStrings.resx.js
var key = '_2TT4IG31kAjRqhD0h5kPOg';
var allStrings = ( false) ?
    require("../resx-strings/en-us.json") :
    __webpack_require__(7);
var strings = allStrings[key];
/* harmony default export */ var ToolboxGroupStrings_resx = (strings);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/ToolboxGroupBase.js






var ToolboxGroupBase_ToolboxGroupBase =  (function (_super) {
    tslib_es6["__extends"](ToolboxGroupBase, _super);
    function ToolboxGroupBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolboxGroupBase.prototype.render = function () {
        var sectionAriaLabel = lib["StringHelper"].format(ToolboxGroupStrings_resx.ToolboxGroupAriaLabel, this.props.groupName);
        return (external__react_["createElement"]("section", { "aria-label": sectionAriaLabel, role: 'list', className: ToolboxGroupBase_module_scss.toolboxGroup },
            this._banner,
            this._content,
            this._shouldShowSeeAllButton && this._seeAllButton));
    };
    Object.defineProperty(ToolboxGroupBase.prototype, "_banner", {
        get: function () {
            return this.props.hasHeader &&
                external__react_["createElement"]("header", { className: ToolboxGroupBase_module_scss.header }, this.props.groupName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolboxGroupBase.prototype, "_seeAllButton", {
        get: function () {
            return (external__react_["createElement"](office_ui_fabric_react_bundle_["ActionButton"], { className: ToolboxGroupBase_module_scss.seeAllButton, styles: { root: { height: 32, position: 'absolute' } }, onClick: this.props.onClickSeeAll, ariaLabel: lib["StringHelper"].format(ToolboxGroupStrings_resx.ToolboxGroupSeeAllButtonAriaLabel, this.props.groupName) }, ToolboxGroupStrings_resx.ToolboxGroupSeeAllButtonLabel));
        },
        enumerable: true,
        configurable: true
    });
    return ToolboxGroupBase;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/ToolboxGroupLarge.module.scss.js
__webpack_require__(305);
var ToolboxGroupLarge_module_scss_styles = {
    flexGroup: 'flexGroup_74be201b',
    grid: 'grid_74be201b',
    eightColumnWide: 'eightColumnWide_74be201b',
    sevenColumnWide: 'sevenColumnWide_74be201b',
    sixColumnWide: 'sixColumnWide_74be201b',
    fiveColumnWide: 'fiveColumnWide_74be201b',
    fourColumnWide: 'fourColumnWide_74be201b',
};
/* harmony default export */ var ToolboxGroupLarge_module_scss = (ToolboxGroupLarge_module_scss_styles);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/ToolboxGroupLarge.js





var MIN_LARGE_GROUP_COLUMNS = 4;
var RESPONSIVE_BREAK_POINTS_MIN = [
    [718, MIN_LARGE_GROUP_COLUMNS + 1],
    [846, MIN_LARGE_GROUP_COLUMNS + 2],
    [974, MIN_LARGE_GROUP_COLUMNS + 3],
    [1102, MIN_LARGE_GROUP_COLUMNS + 4],
    [Number.MAX_VALUE, MIN_LARGE_GROUP_COLUMNS + 5] 
];
var ToolboxGroupLarge_ToolboxGroupLarge =  (function (_super) {
    tslib_es6["__extends"](ToolboxGroupLarge, _super);
    function ToolboxGroupLarge(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            numberOfColumns: _this._calcColumnNumber(window.innerWidth)
        };
        return _this;
    }
    ToolboxGroupLarge.prototype.componentDidMount = function () {
        window.addEventListener('resize', this._handleWindowResize);
    };
    ToolboxGroupLarge.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this._handleWindowResize);
    };
    Object.defineProperty(ToolboxGroupLarge.prototype, "_content", {
        get: function () {
            return (external__react_["createElement"](office_ui_fabric_react_bundle_["FocusZone"], { className: Object(office_ui_fabric_react_bundle_["css"])(ToolboxGroupLarge_module_scss.flexGroup, this._widthClassName) }, this._responsiveChildren));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolboxGroupLarge.prototype, "_shouldShowSeeAllButton", {
        get: function () {
            return external__react_["Children"].count(this._responsiveChildren) < external__react_["Children"].count(this.props.children);
        },
        enumerable: true,
        configurable: true
    });
    ToolboxGroupLarge.prototype._handleWindowResize = function () {
        if (window.innerWidth) {
            var windowWidth = window.innerWidth;
            if (windowWidth) {
                this.setState({ numberOfColumns: this._calcColumnNumber(windowWidth) });
            }
        }
    };
    ToolboxGroupLarge.prototype._calcColumnNumber = function (windowWidth) {
        var responsiveIndex = 0;
        while (windowWidth >= RESPONSIVE_BREAK_POINTS_MIN[responsiveIndex][0]) {
            responsiveIndex++;
        }
        return responsiveIndex + MIN_LARGE_GROUP_COLUMNS;
    };
    Object.defineProperty(ToolboxGroupLarge.prototype, "_responsiveChildren", {
        get: function () {
            var _this = this;
            var slicedItems = Boolean(this.props.onClickSeeAll)
                ? external__react_["Children"].toArray(this.props.children).slice(0, this.state.numberOfColumns)
                : external__react_["Children"].toArray(this.props.children);
            return slicedItems.map(function (child, index) {
                return external__react_["createElement"]("div", { className: ToolboxGroupLarge_module_scss.grid, key: "grid-" + _this._generateKeyFromReactChild(child) }, child);
            });
        },
        enumerable: true,
        configurable: true
    });
    ToolboxGroupLarge.prototype._generateKeyFromReactChild = function (child) {
        var elementKey = child.key;
        if (elementKey) {
            return elementKey;
        }
        else {
            return child.toString();
        }
    };
    Object.defineProperty(ToolboxGroupLarge.prototype, "_widthClassName", {
        get: function () {
            switch (this.state.numberOfColumns) {
                case 4: {
                    return ToolboxGroupLarge_module_scss.fourColumnWide;
                }
                case 5: {
                    return ToolboxGroupLarge_module_scss.fiveColumnWide;
                }
                case 6: {
                    return ToolboxGroupLarge_module_scss.sixColumnWide;
                }
                case 7: {
                    return ToolboxGroupLarge_module_scss.sevenColumnWide;
                }
                default: {
                    return ToolboxGroupLarge_module_scss.eightColumnWide;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxGroupLarge.prototype, "_handleWindowResize", null);
    return ToolboxGroupLarge;
}(ToolboxGroupBase_ToolboxGroupBase));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/ToolboxGroupSmall.js



var ToolboxGroupSmall_ToolboxGroupSmall =  (function (_super) {
    tslib_es6["__extends"](ToolboxGroupSmall, _super);
    function ToolboxGroupSmall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ToolboxGroupSmall.prototype, "_content", {
        get: function () {
            return (external__react_["createElement"]("div", null, this.props.children));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolboxGroupSmall.prototype, "_shouldShowSeeAllButton", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return ToolboxGroupSmall;
}(ToolboxGroupBase_ToolboxGroupBase));


// EXTERNAL MODULE: external "@microsoft/sp-lodash-subset"
var sp_lodash_subset_ = __webpack_require__(12);
var sp_lodash_subset__default = /*#__PURE__*/__webpack_require__.n(sp_lodash_subset_);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxData/index.js + 4 modules
var toolboxData = __webpack_require__(302);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/ToolboxGroupUtilities.js


var PREDEFINED_GROUP_IDS = new Set(toolboxData["a" /* Group */].PREDEFINED_GROUPS.map(function (_a) {
    var id = _a[0];
    return id;
}));
function categorizeGroups(items) {
    var groups = Object(sp_lodash_subset_["groupBy"])(items, function (item) { return PREDEFINED_GROUP_IDS.has(item.groupId) ? item.groupId : toolboxData["a" /* Group */].OTHER_GROUP[0]; });
    var result = toolboxData["a" /* Group */].PREDEFINED_GROUPS
        .map(function (_a) {
        var groupId = _a[0], title = _a[1];
        return ({
            title: title,
            groupId: groupId,
            items: groups[groupId] || []
        });
    })
        .filter(function (group) { return group.items.length > 0; });
    var featuredGroup = getFeaturedGroup(items);
    return featuredGroup.items.length > 0 ? [featuredGroup].concat(result) : result;
}
function getFeaturedGroup(items) {
    var featuredItems = items
        .filter(function (item) { return toolboxData["a" /* Group */].RTE_PLUS_FEATURED_ITEM_IDS.indexOf(item.id) > -1; })
        .sort(function (a, b) { return toolboxData["a" /* Group */].RTE_PLUS_FEATURED_ITEM_IDS.indexOf(a.id) - toolboxData["a" /* Group */].RTE_PLUS_FEATURED_ITEM_IDS.indexOf(b.id); });
    return {
        title: toolboxData["a" /* Group */].FEATURED_GROUP[1],
        groupId: toolboxData["a" /* Group */].FEATURED_GROUP[0],
        items: featuredItems
    };
}
function getAlphabeticalGroup(items) {
    var alphabeticalItems = items.filter(function (item) { return toolboxData["a" /* Group */].RTE_PLUS_FEATURED_ITEM_IDS.indexOf(item.id) === -1; });
    return {
        title: toolboxData["a" /* Group */].ALPHABETICAL_GROUP[1],
        groupId: toolboxData["a" /* Group */].ALPHABETICAL_GROUP[0],
        items: alphabeticalItems
    };
}
function getSectionGroup(items) {
    return {
        title: toolboxData["a" /* Group */].SECTION_GROUP[1],
        groupId: toolboxData["a" /* Group */].SECTION_GROUP[0],
        items: items
    };
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return ToolboxGroupLarge_ToolboxGroupLarge; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return ToolboxGroupSmall_ToolboxGroupSmall; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "c", function() { return categorizeGroups; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "d", function() { return getAlphabeticalGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "e", function() { return getFeaturedGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "f", function() { return getSectionGroup; });





/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/index.js
var lib = __webpack_require__(307);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(2);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(5);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxItem/ToolboxItemBase.js + 1 modules
var ToolboxItemBase = __webpack_require__(120);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxItem/ToolboxItemSmall.module.scss.js
__webpack_require__(308);
var styles = {
    item: 'item_c5a10e95',
    flexBox: 'flexBox_c5a10e95',
    updatedFlexBox: 'updatedFlexBox_c5a10e95',
    icon: 'icon_c5a10e95',
    title: 'title_c5a10e95',
    updatedTitle: 'updatedTitle_c5a10e95',
};
/* harmony default export */ var ToolboxItemSmall_module_scss = (styles);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxItem/ToolboxItemSmall.js






function ToolboxItemSmall(props) {
    var _a, _b;
    return (external__react_["createElement"](ToolboxItemBase["a" /* ToolboxItemBase */], tslib_es6["__assign"]({}, props, { titleLineCount: 2, itemClassName: ToolboxItemSmall_module_scss.item, itemStyles: { height: 88 }, flexBoxClassName: Object(lib["css"])(ToolboxItemSmall_module_scss.flexBox, (_a = {}, _a[ToolboxItemSmall_module_scss.updatedFlexBox] = !isUpdatedStyleKillSwitchActivated(), _a)), iconClassName: ToolboxItemSmall_module_scss.icon, titleClassName: Object(lib["css"])(ToolboxItemSmall_module_scss.title, (_b = {}, _b[ToolboxItemSmall_module_scss.updatedTitle] = !isUpdatedStyleKillSwitchActivated(), _b)), "data-item-size": 'small' })));
}
function isUpdatedStyleKillSwitchActivated() {
    return sp_core_library_["_SPKillSwitch"].isActivated(sp_core_library_["Guid"].parse('2981b2fc-28dc-467a-8481-e53063e61e7d'), '10/23/2018', 'Updated toolbox styles.');
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxItem/ToolboxItemLarge.module.scss.js
__webpack_require__(310);
var ToolboxItemLarge_module_scss_styles = {
    item: 'item_03f7e088',
    flexBox: 'flexBox_03f7e088',
    icon: 'icon_03f7e088',
    title: 'title_03f7e088',
};
/* harmony default export */ var ToolboxItemLarge_module_scss = (ToolboxItemLarge_module_scss_styles);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxItem/ToolboxItemLarge.js




function ToolboxItemLarge(props) {
    return (external__react_["createElement"](ToolboxItemBase["a" /* ToolboxItemBase */], tslib_es6["__assign"]({}, props, { titleLineCount: 3, itemClassName: ToolboxItemLarge_module_scss.item, itemStyles: { height: 128 }, flexBoxClassName: ToolboxItemLarge_module_scss.flexBox, iconClassName: ToolboxItemLarge_module_scss.icon, titleClassName: ToolboxItemLarge_module_scss.title, "data-item-size": 'large' })));
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxItem/ToolboxItemSection.js




function ToolboxItemSection(props) {
    return (external__react_["createElement"](ToolboxItemBase["a" /* ToolboxItemBase */], tslib_es6["__assign"]({}, props, { titleLineCount: 2, itemClassName: ToolboxItemSmall_module_scss.item, itemStyles: { height: 88 }, flexBoxClassName: ToolboxItemSmall_module_scss.flexBox, iconClassName: ToolboxItemSmall_module_scss.icon, titleClassName: ToolboxItemSmall_module_scss.title })));
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxItem/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "c", function() { return ToolboxItemSmall; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return ToolboxItemLarge; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return ToolboxItemSection; });





/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var RTE_namespaceObject = {};
__webpack_require__.d(RTE_namespaceObject, "TOOLBOX_ITEM_ID", function() { return TOOLBOX_ITEM_ID; });
__webpack_require__.d(RTE_namespaceObject, "TOOLBOX_ITEM_MAP", function() { return TOOLBOX_ITEM_MAP; });
var Group_namespaceObject = {};
__webpack_require__.d(Group_namespaceObject, "CONNECTOR_GROUP", function() { return CONNECTOR_GROUP; });
__webpack_require__.d(Group_namespaceObject, "OTHER_GROUP", function() { return OTHER_GROUP; });
__webpack_require__.d(Group_namespaceObject, "PREDEFINED_GROUPS", function() { return PREDEFINED_GROUPS; });
__webpack_require__.d(Group_namespaceObject, "FEATURED_GROUP", function() { return FEATURED_GROUP; });
__webpack_require__.d(Group_namespaceObject, "ALPHABETICAL_GROUP", function() { return ALPHABETICAL_GROUP; });
__webpack_require__.d(Group_namespaceObject, "SECTION_GROUP", function() { return SECTION_GROUP; });
__webpack_require__.d(Group_namespaceObject, "FEATURED_ITEM_IDS", function() { return FEATURED_ITEM_IDS; });
__webpack_require__.d(Group_namespaceObject, "RTE_PLUS_FEATURED_ITEM_IDS", function() { return RTE_PLUS_FEATURED_ITEM_IDS; });

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(5);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxModel/index.js + 2 modules
var toolboxModel = __webpack_require__(121);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxData/RTEStrings.resx.js
var key = '_RRzf46hnc4+fBX8RHyocNg';
var allStrings = ( false) ?
    require("../resx-strings/en-us.json") :
    __webpack_require__(7);
var strings = allStrings[key];
/* harmony default export */ var RTEStrings_resx = (strings);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxData/RTE.js



var TOOLBOX_ITEM_ID = 'RTE';
var TOOLBOX_ITEM_MAP = {
    id: TOOLBOX_ITEM_ID,
    item: {
        id: TOOLBOX_ITEM_ID,
        description: RTEStrings_resx.TextWebpartDescription,
        displayName: RTEStrings_resx.TextWebPartDisplayName,
        msIconName: 'Font',
        groupId: 'cf066440-0614-43d6-98ae-0b31cf14c7c3' 
    },
    control: {
        controlType: toolboxModel["a" /* CanvasControlType */].RTE,
        displayMode: sp_core_library_["DisplayMode"].Edit,
        id: TOOLBOX_ITEM_ID,
        position: {
            zoneIndex: -1,
            sectionIndex: -1,
            controlIndex: -1
        }
    },
    manifest: {
        id: TOOLBOX_ITEM_ID,
        isInternal: true
    }
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxData/GroupStrings.resx.js
var GroupStrings_resx_key = '_NS+5Kf9zpnH1/LStsp+Tfw';
var GroupStrings_resx_allStrings = ( false) ?
    require("../resx-strings/en-us.json") :
    __webpack_require__(7);
var GroupStrings_resx_strings = GroupStrings_resx_allStrings[GroupStrings_resx_key];
/* harmony default export */ var GroupStrings_resx = (GroupStrings_resx_strings);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxData/Group.js


var CONNECTOR_GROUP = [
    '507ffa9b-29db-4d59-93fe-0e240510f718',
    GroupStrings_resx.ToolboxCategoryConnectors
];
var OTHER_GROUP = [
    '5c03119e-3074-46fd-976b-c60198311f70',
    GroupStrings_resx.ToolboxCategoryOther
];
var PREDEFINED_GROUPS = [
    [
        'cf066440-0614-43d6-98ae-0b31cf14c7c3',
        GroupStrings_resx.ToolboxCategoryTextMediaAndContent
    ],
    [
        '1edbd9a8-0bfb-4aa2-9afd-14b8c45dd489',
        GroupStrings_resx.ToolboxCategoryDiscovery
    ],
    [
        '75e22ed5-fa14-4829-850a-c890608aca2d',
        GroupStrings_resx.ToolboxCategoryCommunicationAndCollaboration
    ],
    [
        '1bc7927e-4a5e-4520-b540-71305c79c20a',
        GroupStrings_resx.ToolboxCategoryPlanningAndProcess
    ],
    [
        '4aca9e90-eff5-4fa1-bac7-728f5f157b66',
        GroupStrings_resx.ToolboxCategoryBusinessIntelligence
    ],
    [
        '070951d7-94da-4db8-b06e-9d581f1f55b1',
        GroupStrings_resx.ToolboxCategorySiteTools
    ],
    CONNECTOR_GROUP,
    OTHER_GROUP
];
var FEATURED_GROUP = [
    'bff4383a-b0d8-4403-ae06-a49d288cda10',
    GroupStrings_resx.ToolboxGroupNameFeatured
];
var ALPHABETICAL_GROUP = [
    'cb7d0165-c1a5-4869-b988-840e29071e51',
    GroupStrings_resx.ToolboxGroupNameAlphabetical
];
var SECTION_GROUP = [
    '3d729643-8911-485d-8b0e-fc9d4c83acbd',
    GroupStrings_resx.ToolboxGroupNameSection
];
var FEATURED_ITEM_IDS =  true
    ? [
        'd1d91016-032f-456d-98a4-721247c305e8_0',
        'b7dd04e1-19ce-4b24-9132-b60a1c2b910d_0',
        '6410b3b6-d440-4663-8744-378976dc041e_0',
        '490d7c76-1824-45b2-9de3-676421c997fa_0',
        'daf0b71c-6de8-4ef7-b511-faae7c388708_0' 
    ]
    : [
        'd1d91016-032f-456d-98a4-721247c305e8_0',
        'b7dd04e1-19ce-4b24-9132-b60a1c2b910d_0',
        '490d7c76-1824-45b2-9de3-676421c997fa_0',
        'daf0b71c-6de8-4ef7-b511-faae7c388708_0',
        'f92bf067-bc19-489e-a556-7fe95f508720_0' 
    ];
var RTE_PLUS_FEATURED_ITEM_IDS = [TOOLBOX_ITEM_ID].concat(FEATURED_ITEM_IDS);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxData/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return Group_namespaceObject; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return RTE_namespaceObject; });





/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(304);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".toolboxGroup_a2eb712c{clear:both;position:relative}.header_a2eb712c{background-color:\"[theme:neutralLighter, default: #f4f4f4]\";color:\"[theme:neutralPrimary, default: #333333]\";font-weight:600;height:32px;letter-spacing:1px;line-height:32px;padding:0 12px}[dir=ltr] .header_a2eb712c{text-align:left}[dir=rtl] .header_a2eb712c{text-align:right}.seeAllButton_a2eb712c{height:32px;color:\"[theme:blue, default: #0078d4]\";position:absolute;top:0}[dir=ltr] .seeAllButton_a2eb712c{right:0}[dir=rtl] .seeAllButton_a2eb712c{left:0}", ""]);

// exports


/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(306);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".flexGroup_74be201b{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.grid_74be201b{width:128px;height:128px}.eightColumnWide_74be201b{width:1024px}.sevenColumnWide_74be201b{width:896px}.sixColumnWide_74be201b{width:768px}.fiveColumnWide_74be201b{width:640px}.fourColumnWide_74be201b{width:512px}", ""]);

// exports


/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/index.js
var pkg = __webpack_require__(1);
module.exports = {}
for (var key in pkg) {
  if (pkg.hasOwnProperty(key)) {
    module.exports[key] = pkg[key];
  }
}
Object.defineProperty(module.exports, "__esModule", { value: true });

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(309);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".item_c5a10e95{width:33.3%;height:88px}.flexBox_c5a10e95{padding:10px 8px 0}.flexBox_c5a10e95.updatedFlexBox_c5a10e95{padding:10px 6px 0}.flexBox_c5a10e95>*+*{margin-top:10px}.icon_c5a10e95{width:82px;height:28px;min-height:28px;font-size:28px;line-height:28px}.title_c5a10e95{font-size:13px}.title_c5a10e95.updatedTitle_c5a10e95{font-size:12px}", ""]);

// exports


/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(311);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".item_03f7e088{height:100%;width:100%;border-width:2px}.flexBox_03f7e088{padding:23px 8px 0}.flexBox_03f7e088>*+*{margin-top:8px}.icon_03f7e088{width:82px;height:32px;min-height:32px;font-size:32px;line-height:32px}.title_03f7e088{font-size:14px}", ""]);

// exports


/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Modal/Modal.styles.js
module.exports = __webpack_require__(361);

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Layer/Layer.base.js
module.exports = __webpack_require__(371);

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Layer/Layer.notification.js
module.exports = __webpack_require__(373);

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(355);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".error_da0911f0{background-color:#fde7e9;font-weight:600;font-size:12px;letter-spacing:1px;padding:0 12px}", ""]);

// exports


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Modal/Modal.js
module.exports = __webpack_require__(357);

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modal_base__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modal_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Modal_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_styles__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Modal_styles__);



var Modal = Object(__WEBPACK_IMPORTED_MODULE_0__Utilities__["styled"])(__WEBPACK_IMPORTED_MODULE_1__Modal_base__["ModalBase"], __WEBPACK_IMPORTED_MODULE_2__Modal_styles__["getStyles"], undefined, {
    scope: 'Modal'
});


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Modal/Modal.base.js
module.exports = __webpack_require__(359);

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBase", function() { return ModalBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FocusTrapZone_index__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FocusTrapZone_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__FocusTrapZone_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Modal_styles__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Modal_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Modal_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Overlay__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Overlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Overlay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Layer__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Layer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Layer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Popup_index__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Popup_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Popup_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utilities_decorators_withResponsiveMode__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utilities_decorators_withResponsiveMode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__utilities_decorators_withResponsiveMode__);









// @TODO - need to change this to a panel whenever the breakpoint is under medium (verify the spec)
var DefaultLayerProps = {
    eventBubblingEnabled: false
};
var getClassNames = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["classNamesFunction"])();
var ModalBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](ModalBase, _super);
    function ModalBase(props) {
        var _this = _super.call(this, props) || this;
        _this._focusTrapZone = __WEBPACK_IMPORTED_MODULE_1_react__["createRef"]();
        // Allow the user to scroll within the modal but not on the body
        _this._allowScrollOnModal = function (elt) {
            if (elt) {
                Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["allowScrollOnElement"])(elt, _this._events);
            }
            else {
                _this._events.off(_this._scrollableContent);
            }
            _this._scrollableContent = elt;
        };
        _this.state = {
            id: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getId"])('Modal'),
            isOpen: props.isOpen,
            isVisible: props.isOpen,
            hasBeenOpened: props.isOpen
        };
        _this._warnDeprecations({
            onLayerDidMount: 'layerProps.onLayerDidMount'
        });
        return _this;
    }
    ModalBase.prototype.componentWillReceiveProps = function (newProps) {
        clearTimeout(this._onModalCloseTimer);
        // Opening the dialog
        if (newProps.isOpen) {
            if (!this.state.isOpen) {
                // First Open
                this.setState({
                    isOpen: true
                });
            }
            else {
                // Modal has been opened
                // Reopen during closing
                this.setState({
                    hasBeenOpened: true,
                    isVisible: true
                });
                if (newProps.topOffsetFixed) {
                    var dialogMain = document.getElementsByClassName('ms-Dialog-main');
                    var modalRectangle = void 0;
                    if (dialogMain.length > 0) {
                        modalRectangle = dialogMain[0].getBoundingClientRect();
                        this.setState({
                            modalRectangleTop: modalRectangle.top
                        });
                    }
                }
            }
        }
        // Closing the dialog
        if (!newProps.isOpen && this.state.isOpen) {
            this._onModalCloseTimer = this._async.setTimeout(this._onModalClose, parseFloat(__WEBPACK_IMPORTED_MODULE_4__Modal_styles__["animationDuration"]) * 1000);
            this.setState({
                isVisible: false
            });
        }
    };
    ModalBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (!prevProps.isOpen && !prevState.isVisible) {
            this.setState({
                isVisible: true
            });
        }
    };
    ModalBase.prototype.render = function () {
        var _a = this.props, className = _a.className, containerClassName = _a.containerClassName, scrollableContentClassName = _a.scrollableContentClassName, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, firstFocusableSelector = _a.firstFocusableSelector, forceFocusInsideTrap = _a.forceFocusInsideTrap, ignoreExternalFocusing = _a.ignoreExternalFocusing, isBlocking = _a.isBlocking, isClickableOutsideFocusTrap = _a.isClickableOutsideFocusTrap, isDarkOverlay = _a.isDarkOverlay, onDismiss = _a.onDismiss, layerProps = _a.layerProps, responsiveMode = _a.responsiveMode, titleAriaId = _a.titleAriaId, styles = _a.styles, subtitleAriaId = _a.subtitleAriaId, theme = _a.theme, topOffsetFixed = _a.topOffsetFixed, onLayerDidMount = _a.onLayerDidMount;
        var _b = this.state, isOpen = _b.isOpen, isVisible = _b.isVisible, hasBeenOpened = _b.hasBeenOpened, modalRectangleTop = _b.modalRectangleTop;
        var mergedLayerProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, DefaultLayerProps, this.props.layerProps, { onLayerDidMount: layerProps && layerProps.onLayerDidMount ? layerProps.onLayerDidMount : onLayerDidMount });
        if (!isOpen) {
            return null;
        }
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            containerClassName: containerClassName,
            scrollableContentClassName: scrollableContentClassName,
            isOpen: isOpen,
            isVisible: isVisible,
            hasBeenOpened: hasBeenOpened,
            modalRectangleTop: modalRectangleTop,
            topOffsetFixed: topOffsetFixed
        });
        // @temp tuatology - Will adjust this to be a panel at certain breakpoints
        if (responsiveMode >= __WEBPACK_IMPORTED_MODULE_8__utilities_decorators_withResponsiveMode__["ResponsiveMode"].small) {
            return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Layer__["Layer"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, mergedLayerProps),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__Popup_index__["Popup"], { role: isBlocking ? 'alertdialog' : 'dialog', "aria-modal": "true", ariaLabelledBy: titleAriaId, ariaDescribedBy: subtitleAriaId, onDismiss: onDismiss },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: classNames.root },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Overlay__["Overlay"], { isDarkThemed: isDarkOverlay, onClick: isBlocking ? undefined : onDismiss }),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__FocusTrapZone_index__["FocusTrapZone"], { componentRef: this._focusTrapZone, className: classNames.main, elementToFocusOnDismiss: elementToFocusOnDismiss, isClickableOutsideFocusTrap: isClickableOutsideFocusTrap ? isClickableOutsideFocusTrap : !isBlocking, ignoreExternalFocusing: ignoreExternalFocusing, forceFocusInsideTrap: forceFocusInsideTrap, firstFocusableSelector: firstFocusableSelector },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { ref: this._allowScrollOnModal, className: classNames.scrollableContent, "data-is-scrollable": true }, this.props.children))))));
        }
        return null;
    };
    ModalBase.prototype.focus = function () {
        if (this._focusTrapZone.current) {
            this._focusTrapZone.current.focus();
        }
    };
    // Watch for completed animations and set the state
    ModalBase.prototype._onModalClose = function () {
        this.setState({
            isOpen: false
        });
        // Call the onDismiss callback
        if (this.props.onDismissed) {
            this.props.onDismissed();
        }
    };
    ModalBase.defaultProps = {
        isOpen: false,
        isDarkOverlay: true,
        isBlocking: false,
        className: '',
        containerClassName: ''
    };
    ModalBase = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_8__utilities_decorators_withResponsiveMode__["withResponsiveMode"]
    ], ModalBase);
    return ModalBase;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));



/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/FocusTrapZone/index.js
var pkg = __webpack_require__(1);
module.exports = {}
for (var key in pkg) {
  if (pkg.hasOwnProperty(key)) {
    module.exports[key] = pkg[key];
  }
}
Object.defineProperty(module.exports, "__esModule", { value: true });

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationDuration", function() { return animationDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Styling__);

var animationDuration = __WEBPACK_IMPORTED_MODULE_0__Styling__["AnimationVariables"].durationValue2;
var globalClassNames = {
    root: 'ms-Modal',
    main: 'ms-Dialog-main',
    scrollableContent: 'ms-Modal-scrollableContent',
    isOpen: 'is-open'
};
var getStyles = function (props) {
    var className = props.className, containerClassName = props.containerClassName, scrollableContentClassName = props.scrollableContentClassName, isOpen = props.isOpen, isVisible = props.isVisible, hasBeenOpened = props.hasBeenOpened, modalRectangleTop = props.modalRectangleTop, theme = props.theme, topOffsetFixed = props.topOffsetFixed;
    var palette = theme.palette;
    var classNames = Object(__WEBPACK_IMPORTED_MODULE_0__Styling__["getGlobalClassNames"])(globalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                backgroundColor: 'transparent',
                position: 'fixed',
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                pointerEvents: 'none',
                transition: "opacity " + animationDuration
            },
            topOffsetFixed &&
                hasBeenOpened && {
                alignItems: 'flex-start'
            },
            isOpen && classNames.isOpen,
            isVisible && {
                opacity: 1,
                pointerEvents: 'auto'
            },
            className
        ],
        main: [
            classNames.main,
            {
                boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.4)',
                backgroundColor: palette.white,
                boxSizing: 'border-box',
                position: 'relative',
                textAlign: 'left',
                outline: '3px solid transparent',
                maxHeight: '100%',
                overflowY: 'auto'
            },
            topOffsetFixed &&
                hasBeenOpened && {
                top: modalRectangleTop
            },
            containerClassName
        ],
        scrollableContent: [
            classNames.scrollableContent,
            {
                overflowY: 'auto',
                flexGrow: 1
            },
            scrollableContentClassName
        ]
    };
};


/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/Overlay.js
var pkg = __webpack_require__(1);
module.exports = {}
for (var key in pkg) {
  if (pkg.hasOwnProperty(key)) {
    module.exports[key] = pkg[key];
  }
}
Object.defineProperty(module.exports, "__esModule", { value: true });

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/Layer.js
module.exports = __webpack_require__(364);

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__version__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__version___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__version__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layer_index__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layer_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Layer_index__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__components_Layer_index__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__components_Layer_index__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/version.js
module.exports = __webpack_require__(366);

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/set-version/1.1.3/node_modules/@uifabric/set-version/lib/setVersion.js
// A packages cache that makes sure that we don't inject the same packageName twice in the same bundle -
// this cache is local to the module closure inside this bundle
var packagesCache = {};
function setVersion(packageName, packageVersion) {
    if (typeof window !== 'undefined') {
        // tslint:disable-next-line:no-any
        var packages = (window.__packages__ = window.__packages__ || {});
        // We allow either the global packages or local packages caches to invalidate so testing can just clear the global to set this state
        if (!packages[packageName] || !packagesCache[packageName]) {
            packagesCache[packageName] = packageVersion;
            var versions = (packages[packageName] = packages[packageName] || []);
            versions.push(packageVersion);
        }
    }
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/set-version/1.1.3/node_modules/@uifabric/set-version/lib/index.js


setVersion('@uifabric/set-version', '6.0.0');

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/source-map-loader/0.2.4/node_modules/source-map-loader!C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/version.js
// office-ui-fabric-react@6.143.0
// Do not modify this file, the file is generated as part of publish. The checked in version is a placeholder only.

setVersion('office-ui-fabric-react', '6.143.0');


/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Layer/index.js
module.exports = __webpack_require__(368);

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Layer__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Layer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Layer__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__Layer__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__Layer__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layer_base__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layer_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Layer_base__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__Layer_base__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__Layer_base__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LayerHost__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LayerHost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__LayerHost__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_2__LayerHost__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_2__LayerHost__[key]; }) }(__WEBPACK_IMPORT_KEY__));





/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Layer/Layer.js
module.exports = __webpack_require__(370);

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layer_base__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layer_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Layer_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layer_styles__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layer_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Layer_styles__);



var Layer = Object(__WEBPACK_IMPORTED_MODULE_0__Utilities__["styled"])(__WEBPACK_IMPORTED_MODULE_1__Layer_base__["LayerBase"], __WEBPACK_IMPORTED_MODULE_2__Layer_styles__["getStyles"], undefined, {
    scope: 'Layer',
    fields: ['hostId', 'theme', 'styles']
});


/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return LayerBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Fabric__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Fabric___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Fabric__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utilities__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layer_notification__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layer_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Layer_notification__);






var getClassNames = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["classNamesFunction"])();
var LayerBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](LayerBase, _super);
    function LayerBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["createRef"])();
        /**
         * rootElement wrapper for setting virtual parent as soon as root element ref is available.
         */
        _this._handleRootElementRef = function (ref) {
            _this._rootElement(ref);
            if (ref) {
                // TODO: Calling _setVirtualParent in this ref wrapper SHOULD allow us to remove
                //    other calls to _setVirtualParent throughout this class. However,
                //    as this is an immediate fix for a P0 issue the existing _setVirtualParent
                //    calls are left for now to minimize potential regression.
                _this._setVirtualParent();
            }
        };
        /**
         * Helper to stop events from bubbling up out of Layer.
         */
        _this._filterEvent = function (ev) {
            // We should just be able to check ev.bubble here and only stop events that are bubbling up. However, even though mouseenter and
            //    mouseleave do NOT bubble up, they are showing up as bubbling. Therefore we stop events based on event name rather than ev.bubble.
            if (ev.eventPhase === Event.BUBBLING_PHASE && ev.type !== 'mouseenter' && ev.type !== 'mouseleave') {
                ev.stopPropagation();
            }
        };
        _this.state = {
            hasMounted: false
        };
        _this._warnDeprecations({
            onLayerMounted: 'onLayerDidMount'
        });
        if (_this.props.hostId) {
            Object(__WEBPACK_IMPORTED_MODULE_5__Layer_notification__["registerLayer"])(_this.props.hostId, _this);
        }
        return _this;
    }
    LayerBase.prototype.componentWillMount = function () {
        this._layerElement = this._getLayerElement();
    };
    LayerBase.prototype.componentWillUpdate = function () {
        if (!this._layerElement) {
            this._layerElement = this._getLayerElement();
        }
    };
    LayerBase.prototype.componentDidMount = function () {
        // We can safely set state immediately because the ref wrapper will make sure the virtual
        //    parent has been set before componentDidMount is called.
        this.setState({ hasMounted: true });
        this._setVirtualParent();
        var _a = this.props, onLayerDidMount = _a.onLayerDidMount, onLayerMounted = _a.onLayerMounted;
        if (onLayerMounted) {
            onLayerMounted();
        }
        if (onLayerDidMount) {
            onLayerDidMount();
        }
    };
    LayerBase.prototype.componentWillUnmount = function () {
        this._removeLayerElement();
        var _a = this.props, onLayerWillUnmount = _a.onLayerWillUnmount, hostId = _a.hostId;
        if (onLayerWillUnmount) {
            onLayerWillUnmount();
        }
        if (hostId) {
            Object(__WEBPACK_IMPORTED_MODULE_5__Layer_notification__["unregisterLayer"])(hostId, this);
        }
    };
    LayerBase.prototype.componentDidUpdate = function () {
        this._setVirtualParent();
    };
    LayerBase.prototype.render = function () {
        var classNames = this._getClassNames();
        var eventBubblingEnabled = this.props.eventBubblingEnabled;
        var hasMounted = this.state.hasMounted;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: "ms-layer", ref: this._handleRootElementRef }, this._layerElement &&
            hasMounted &&
            __WEBPACK_IMPORTED_MODULE_2_react_dom__["createPortal"](eventBubblingEnabled ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Fabric__["Fabric"], { className: classNames.content }, this.props.children)) : (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Fabric__["Fabric"], { className: classNames.content, onClick: this._filterEvent, onContextMenu: this._filterEvent, onDoubleClick: this._filterEvent, onDrag: this._filterEvent, onDragEnd: this._filterEvent, onDragEnter: this._filterEvent, onDragExit: this._filterEvent, onDragLeave: this._filterEvent, onDragOver: this._filterEvent, onDragStart: this._filterEvent, onDrop: this._filterEvent, onMouseDown: this._filterEvent, onMouseEnter: this._filterEvent, onMouseLeave: this._filterEvent, onMouseMove: this._filterEvent, onMouseOver: this._filterEvent, onMouseOut: this._filterEvent, onMouseUp: this._filterEvent, onKeyDown: this._filterEvent, onKeyPress: this._filterEvent, onKeyUp: this._filterEvent, onFocus: this._filterEvent, onBlur: this._filterEvent, onChange: this._filterEvent, onInput: this._filterEvent, onInvalid: this._filterEvent, onSubmit: this._filterEvent }, this.props.children)), this._layerElement)));
    };
    LayerBase.prototype._getClassNames = function () {
        var _a = this.props, className = _a.className, styles = _a.styles, theme = _a.theme;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            isNotHost: !this.props.hostId
        });
        return classNames;
    };
    LayerBase.prototype._setVirtualParent = function () {
        if (this._rootElement && this._rootElement.current && this._layerElement) {
            Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["setVirtualParent"])(this._layerElement, this._rootElement.current);
        }
    };
    LayerBase.prototype._getLayerElement = function () {
        var host = this._getHost();
        var classNames = this._getClassNames();
        if (host !== this._host) {
            this._removeLayerElement();
        }
        if (host) {
            this._host = host;
            if (!this._layerElement) {
                var doc = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["getDocument"])();
                if (!doc) {
                    return;
                }
                this._layerElement = doc.createElement('div');
                this._layerElement.className = classNames.root;
                Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["setPortalAttribute"])(this._layerElement);
                host.appendChild(this._layerElement);
            }
        }
        return this._layerElement;
    };
    LayerBase.prototype._removeLayerElement = function () {
        if (this._layerElement) {
            this.props.onLayerWillUnmount();
            var parentNode = this._layerElement.parentNode;
            if (parentNode) {
                parentNode.removeChild(this._layerElement);
            }
            this._layerElement = undefined;
        }
    };
    LayerBase.prototype._getHost = function () {
        var hostId = this.props.hostId;
        var doc = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["getDocument"])();
        if (!doc) {
            return undefined;
        }
        if (hostId) {
            return doc.getElementById(hostId);
        }
        else {
            var defaultHostSelector = Object(__WEBPACK_IMPORTED_MODULE_5__Layer_notification__["getDefaultTarget"])();
            return defaultHostSelector ? doc.querySelector(defaultHostSelector) : doc.body;
        }
    };
    LayerBase.defaultProps = {
        onLayerDidMount: function () { return undefined; },
        onLayerWillUnmount: function () { return undefined; }
    };
    LayerBase = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["customizable"])('Layer', ['theme', 'hostId'])
    ], LayerBase);
    return LayerBase;
}(__WEBPACK_IMPORTED_MODULE_4__Utilities__["BaseComponent"]));



/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/Fabric.js
var pkg = __webpack_require__(1);
module.exports = {}
for (var key in pkg) {
  if (pkg.hasOwnProperty(key)) {
    module.exports[key] = pkg[key];
  }
}
Object.defineProperty(module.exports, "__esModule", { value: true });

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["registerLayer"] = registerLayer;
/* harmony export (immutable) */ __webpack_exports__["unregisterLayer"] = unregisterLayer;
/* harmony export (immutable) */ __webpack_exports__["notifyHostChanged"] = notifyHostChanged;
/* harmony export (immutable) */ __webpack_exports__["setDefaultTarget"] = setDefaultTarget;
/* harmony export (immutable) */ __webpack_exports__["getDefaultTarget"] = getDefaultTarget;
var _layersByHostId = {};
var _defaultHostSelector;
/**
 * Register a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */
function registerLayer(hostId, layer) {
    if (!_layersByHostId[hostId]) {
        _layersByHostId[hostId] = [];
    }
    _layersByHostId[hostId].push(layer);
}
/**
 * Unregister a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */
function unregisterLayer(hostId, layer) {
    if (_layersByHostId[hostId]) {
        var idx = _layersByHostId[hostId].indexOf(layer);
        if (idx >= 0) {
            _layersByHostId[hostId].splice(idx, 1);
            if (_layersByHostId[hostId].length === 0) {
                delete _layersByHostId[hostId];
            }
        }
    }
}
/**
 * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
 * care about the specific host.
 */
function notifyHostChanged(id) {
    if (_layersByHostId[id]) {
        _layersByHostId[id].forEach(function (layer) { return layer.forceUpdate(); });
    }
}
/**
 * Sets the default target selector to use when determining the host in which
 * Layered content will be injected into. If not provided, an element will be
 * created at the end of the document body.
 *
 * Passing in a falsey value will clear the default target and reset back to
 * using a created element at the end of document body.
 */
function setDefaultTarget(selector) {
    _defaultHostSelector = selector;
}
/**
 * Get the default target selector when determining a host
 */
function getDefaultTarget() {
    return _defaultHostSelector;
}


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Layer/Layer.styles.js
module.exports = __webpack_require__(375);

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Styling__);

var GlobalClassNames = {
    root: 'ms-Layer',
    rootNoHost: 'ms-Layer--fixed',
    content: 'ms-Layer-content'
};
var getStyles = function (props) {
    var className = props.className, isNotHost = props.isNotHost, theme = props.theme;
    var classNames = Object(__WEBPACK_IMPORTED_MODULE_0__Styling__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            isNotHost && [
                classNames.rootNoHost,
                {
                    position: 'fixed',
                    zIndex: __WEBPACK_IMPORTED_MODULE_0__Styling__["ZIndexes"].Layer,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    visibility: 'hidden'
                }
            ],
            className
        ],
        content: [
            classNames.content,
            {
                visibility: 'visible'
            }
        ]
    };
};


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Layer/LayerHost.js
module.exports = __webpack_require__(377);

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return LayerHost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Layer_notification__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Layer_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Layer_notification__);




var LayerHost = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](LayerHost, _super);
    function LayerHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerHost.prototype.shouldComponentUpdate = function () {
        return false;
    };
    LayerHost.prototype.componentDidMount = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__Layer_notification__["notifyHostChanged"])(this.props.id);
    };
    LayerHost.prototype.componentWillUnmount = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__Layer_notification__["notifyHostChanged"])(this.props.id);
    };
    LayerHost.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, this.props, { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-LayerHost', this.props.className) }));
    };
    return LayerHost;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));



/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Popup/index.js
var pkg = __webpack_require__(1);
module.exports = pkg.workaround_PopupIndex;

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/utilities/decorators/withResponsiveMode.js
var pkg = __webpack_require__(1);
module.exports = pkg.workaround_withResponsiveMode;

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/SearchBox/SearchBox.js
module.exports = __webpack_require__(381);

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return SearchBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SearchBox_base__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SearchBox_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__SearchBox_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchBox_styles__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchBox_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__SearchBox_styles__);



var SearchBox = Object(__WEBPACK_IMPORTED_MODULE_0__Utilities__["styled"])(__WEBPACK_IMPORTED_MODULE_1__SearchBox_base__["SearchBoxBase"], __WEBPACK_IMPORTED_MODULE_2__SearchBox_styles__["getStyles"], undefined, { scope: 'SearchBox' });


/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/SearchBox/SearchBox.base.js
module.exports = __webpack_require__(383);

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxBase", function() { return SearchBoxBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icon__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Icon__);





var getClassNames = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["classNamesFunction"])();
var SearchBoxBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](SearchBoxBase, _super);
    function SearchBoxBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = __WEBPACK_IMPORTED_MODULE_1_react__["createRef"]();
        _this._inputElement = __WEBPACK_IMPORTED_MODULE_1_react__["createRef"]();
        _this._onClickFocus = function () {
            var inputElement = _this._inputElement.current;
            if (inputElement) {
                _this.focus();
                inputElement.selectionStart = inputElement.selectionEnd = 0;
            }
        };
        _this._onFocusCapture = function (ev) {
            _this.setState({
                hasFocus: true
            });
            _this._events.on(ev.currentTarget, 'blur', _this._onBlur, true);
            if (_this.props.onFocus) {
                _this.props.onFocus(ev);
            }
        };
        _this._onClearClick = function (ev) {
            var clearButtonProps = _this.props.clearButtonProps;
            if (clearButtonProps && clearButtonProps.onClick) {
                clearButtonProps.onClick(ev);
            }
            if (!ev.defaultPrevented) {
                _this._onClear(ev);
            }
        };
        _this._onKeyDown = function (ev) {
            switch (ev.which) {
                case __WEBPACK_IMPORTED_MODULE_2__Utilities__["KeyCodes"].escape:
                    _this.props.onEscape && _this.props.onEscape(ev);
                    if (!ev.defaultPrevented) {
                        _this._onClear(ev);
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__Utilities__["KeyCodes"].enter:
                    if (_this.props.onSearch) {
                        _this.props.onSearch(_this.state.value);
                    }
                    break;
                default:
                    _this.props.onKeyDown && _this.props.onKeyDown(ev);
                    if (!ev.defaultPrevented) {
                        return;
                    }
            }
            // We only get here if the keypress has been handled,
            // or preventDefault was called in case of default keyDown handler
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._onBlur = function (ev) {
            _this._events.off(_this._rootElement.current, 'blur');
            _this.setState({
                hasFocus: false
            });
            if (_this.props.onBlur) {
                _this.props.onBlur(ev);
            }
        };
        _this._onInputChange = function (ev) {
            var value = ev.target.value;
            if (value === _this._latestValue) {
                return;
            }
            _this._latestValue = value;
            _this.setState({ value: value });
            _this._callOnChange(value);
        };
        _this._warnDeprecations({
            labelText: 'placeholder',
            defaultValue: 'value'
        });
        _this._latestValue = props.value || '';
        _this.state = {
            value: _this._latestValue,
            hasFocus: false,
            id: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getId"])('SearchBox')
        };
        return _this;
    }
    SearchBoxBase.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.value !== undefined) {
            this._latestValue = newProps.value;
            // If the user passes in null, substitute an empty string
            // (passing null is not allowed per typings, but users might do it anyway)
            this.setState({
                value: newProps.value || ''
            });
        }
    };
    SearchBoxBase.prototype.render = function () {
        var _a = this.props, ariaLabel = _a.ariaLabel, placeholder = _a.placeholder, className = _a.className, disabled = _a.disabled, underlined = _a.underlined, styles = _a.styles, labelText = _a.labelText, theme = _a.theme, clearButtonProps = _a.clearButtonProps, disableAnimation = _a.disableAnimation, iconProps = _a.iconProps;
        var _b = this.state, value = _b.value, hasFocus = _b.hasFocus, id = _b.id;
        var placeholderValue = labelText === undefined ? placeholder : labelText;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            underlined: underlined,
            hasFocus: hasFocus,
            disabled: disabled,
            hasInput: value.length > 0,
            disableAnimation: disableAnimation
        });
        var nativeProps = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getNativeProps"])(this.props, __WEBPACK_IMPORTED_MODULE_2__Utilities__["inputProperties"], ['id', 'className', 'placeholder', 'onFocus', 'onBlur', 'value']);
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { ref: this._rootElement, className: classNames.root, onFocusCapture: this._onFocusCapture },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: classNames.iconContainer, onClick: this._onClickFocus, "aria-hidden": true },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Icon__["Icon"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({ iconName: "Search" }, iconProps, { className: classNames.icon }))),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("input", __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, nativeProps, { id: id, className: classNames.field, placeholder: placeholderValue, onChange: this._onInputChange, onInput: this._onInputChange, onKeyDown: this._onKeyDown, value: value, disabled: disabled, "aria-label": ariaLabel ? ariaLabel : placeholder, ref: this._inputElement })),
            value.length > 0 && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: classNames.clearButton },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Button__["IconButton"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({ styles: { root: { height: 'auto' }, icon: { fontSize: '12px' } }, iconProps: { iconName: 'Clear' } }, clearButtonProps, { onClick: this._onClearClick }))))));
    };
    /**
     * Sets focus to the search box input field
     */
    SearchBoxBase.prototype.focus = function () {
        if (this._inputElement.current) {
            this._inputElement.current.focus();
        }
    };
    /**
     * Returns whether or not the SearchBox has focus
     */
    SearchBoxBase.prototype.hasFocus = function () {
        return !!this.state.hasFocus;
    };
    SearchBoxBase.prototype._onClear = function (ev) {
        this.props.onClear && this.props.onClear(ev);
        if (!ev.defaultPrevented) {
            this._latestValue = '';
            this.setState({
                value: ''
            });
            this._callOnChange('');
            ev.stopPropagation();
            ev.preventDefault();
            this.focus();
        }
    };
    SearchBoxBase.prototype._callOnChange = function (newValue) {
        var _a = this.props, onChange = _a.onChange, onChanged = _a.onChanged;
        // Call @deprecated method.
        if (onChanged) {
            onChanged(newValue);
        }
        if (onChange) {
            onChange(newValue);
        }
    };
    SearchBoxBase.defaultProps = {
        disableAnimation: false,
        clearButtonProps: { ariaLabel: 'Clear text' }
    };
    return SearchBoxBase;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));



/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/SearchBox/SearchBox.styles.js
module.exports = __webpack_require__(385);

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getStyles"] = getStyles;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Styling__);

function getStyles(props) {
    var theme = props.theme, underlined = props.underlined, disabled = props.disabled, hasFocus = props.hasFocus, className = props.className, hasInput = props.hasInput, disableAnimation = props.disableAnimation;
    var palette = theme.palette, fonts = theme.fonts, semanticColors = theme.semanticColors;
    return {
        root: [
            'ms-SearchBox',
            fonts.medium,
            __WEBPACK_IMPORTED_MODULE_0__Styling__["normalize"],
            {
                color: palette.neutralPrimary,
                backgroundColor: semanticColors.inputBackground,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'stretch',
                // The 1px top and bottom padding ensure the input field does not overlap the border
                padding: '1px 0 1px 4px',
                border: "1px solid " + palette.neutralTertiary,
                height: 32,
                selectors: (_a = {},
                    _a[__WEBPACK_IMPORTED_MODULE_0__Styling__["HighContrastSelector"]] = {
                        border: '1px solid WindowText'
                    },
                    _a[':hover'] = {
                        borderColor: palette.neutralDark,
                        selectors: (_b = {},
                            _b[__WEBPACK_IMPORTED_MODULE_0__Styling__["HighContrastSelector"]] = {
                                borderColor: 'Highlight'
                            },
                            _b)
                    },
                    _a[':hover $iconContainer'] = {
                        color: palette.themeDark
                    },
                    _a)
            },
            hasFocus && [
                'is-active',
                {
                    borderColor: palette.themePrimary,
                    selectors: (_c = {
                            ':hover': {
                                borderColor: palette.themePrimary
                            }
                        },
                        _c[__WEBPACK_IMPORTED_MODULE_0__Styling__["HighContrastSelector"]] = {
                            borderColor: 'Highlight'
                        },
                        _c)
                }
            ],
            disabled && [
                'is-disabled',
                {
                    borderColor: palette.neutralLighter,
                    backgroundColor: palette.neutralLighter,
                    pointerEvents: 'none',
                    cursor: 'default'
                }
            ],
            underlined && [
                'is-underlined',
                {
                    borderWidth: '0 0 1px 0',
                    // Underlined SearchBox has a larger padding left to vertically align with the waffle in product
                    padding: '1px 0 1px 8px'
                }
            ],
            underlined &&
                disabled && {
                backgroundColor: 'transparent'
            },
            hasInput && 'can-clear',
            className
        ],
        iconContainer: [
            'ms-SearchBox-iconContainer',
            {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: 16,
                width: 32,
                textAlign: 'center',
                color: palette.themePrimary,
                cursor: 'text'
            },
            hasFocus && {
                width: 4
            },
            disabled && {
                color: palette.neutralTertiary
            },
            !disableAnimation && {
                transition: "width " + __WEBPACK_IMPORTED_MODULE_0__Styling__["AnimationVariables"].durationValue1
            }
        ],
        icon: [
            'ms-SearchBox-icon',
            {
                opacity: 1
            },
            hasFocus && {
                opacity: 0
            },
            !disableAnimation && {
                transition: "opacity " + __WEBPACK_IMPORTED_MODULE_0__Styling__["AnimationVariables"].durationValue1 + " 0s"
            }
        ],
        clearButton: [
            'ms-SearchBox-clearButton',
            {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                cursor: 'pointer',
                flexBasis: '32px',
                flexShrink: 0,
                padding: 1,
                color: palette.themePrimary
            }
        ],
        field: [
            'ms-SearchBox-field',
            __WEBPACK_IMPORTED_MODULE_0__Styling__["normalize"],
            {
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                fontWeight: 'inherit',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                color: palette.neutralPrimary,
                flex: '1 1 0px',
                // The default implicit value of 'auto' prevents the input from shrinking. Setting min-width to
                // 0px allows the input element to shrink to fit the container.
                minWidth: '0px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                // This padding forces the text placement to round up.
                paddingBottom: 0.5,
                // This removes the IE specific clear button in the input since we implimented our own
                selectors: {
                    '::-ms-clear': {
                        display: 'none'
                    },
                    '::placeholder': {
                        color: semanticColors.inputPlaceholderText,
                        opacity: 1
                    },
                    ':-ms-input-placeholder': {
                        color: semanticColors.inputPlaceholderText
                    }
                }
            },
            disabled && {
                color: palette.neutralTertiary
            }
        ]
    };
    var _a, _b, _c;
}


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(387);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".chrome_f43c97bd{height:100%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.chrome_f43c97bd .searchBox_f43c97bd{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;margin-bottom:0;border-width:0;-webkit-box-sizing:border-box;box-sizing:border-box;height:33px;border-bottom:1px solid;border-color:\"[theme:neutralLight, default: #eaeaea]\";width:100%}[dir=ltr] .chrome_f43c97bd .searchBox_f43c97bd{padding-right:32px}[dir=rtl] .chrome_f43c97bd .searchBox_f43c97bd{padding-left:32px}.chrome_f43c97bd .searchBox_f43c97bd:hover{border-color:\"[theme:neutralLight, default: #eaeaea]\"}.chrome_f43c97bd .farButton_f43c97bd{-webkit-box-sizing:border-box;box-sizing:border-box;width:32px;height:32px;position:absolute;top:0}[dir=ltr] .chrome_f43c97bd .farButton_f43c97bd{right:0}[dir=rtl] .chrome_f43c97bd .farButton_f43c97bd{left:0}.chrome_f43c97bd .commandBar_f43c97bd{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.chrome_f43c97bd .content_f43c97bd{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;overflow-y:scroll;height:100%}", ""]);

// exports


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(389);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".noResultFoundContainer_356f5539{height:100%}.noResultFound_356f5539{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.noResultFoundIcon_356f5539{margin-bottom:18px;font-size:32px}[dir=ltr] .noResultFoundIcon_356f5539{margin-right:14px}[dir=rtl] .noResultFoundIcon_356f5539{margin-left:14px}.noResultFoundLabelContainer_356f5539{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.noResultLabel_356f5539{font-size:21px;font-weight:100;margin-bottom:4px}.noResultLabel_356f5539,.tryAgainLabel_356f5539{color:\"[theme:neutralSecondary, default: #666666]\"}.tryAgainLabel_356f5539{font-size:17px;font-weight:300}", ""]);

// exports


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(391);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".toolboxLargeContainer_a7e85f60{margin:24px;height:712px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.modalScrollContent_a7e85f60{height:100%}.screenReaderAlert_a7e85f60{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.menuCommandBar_a7e85f60{height:40px;background-color:\"[theme:neutralLight, default: #eaeaea]\"}.menuCommandBar_a7e85f60 .ms-CommandBar{padding:0}.menuCommandBar_a7e85f60 .ms-CommandBar-primaryCommands{margin:0 4px}.menuCommandBar_a7e85f60 .ms-Button-textContainer{font-size:17px}.selectedItem_a7e85f60{font-weight:600;background-color:\"[theme:neutralLight, default: #eaeaea]\"}", ""]);

// exports


/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(393);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".noResults_b7f82eed{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:13px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:13px}", ""]);

// exports


/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: external "@microsoft/office-ui-fabric-react-bundle"
var office_ui_fabric_react_bundle_ = __webpack_require__(1);
var office_ui_fabric_react_bundle__default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_bundle_);

// EXTERNAL MODULE: external "@microsoft/sp-diagnostics"
var sp_diagnostics_ = __webpack_require__(6);
var sp_diagnostics__default = /*#__PURE__*/__webpack_require__.n(sp_diagnostics_);

// EXTERNAL MODULE: external "@ms/sp-telemetry"
var sp_telemetry_ = __webpack_require__(44);
var sp_telemetry__default = /*#__PURE__*/__webpack_require__.n(sp_telemetry_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(2);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxData/index.js + 4 modules
var toolboxData = __webpack_require__(302);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxAnimation/index.js + 2 modules
var toolboxAnimation = __webpack_require__(40);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxCallout/index.js + 2 modules
var toolboxCallout = __webpack_require__(123);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxError/ToolboxError.module.scss.js
__webpack_require__(354);
var styles = {
    error: 'error_da0911f0',
};
/* harmony default export */ var ToolboxError_module_scss = (styles);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxError/ToolboxError.js



function ToolboxError(props) {
    props.a11yManager.alert(props.message);
    return (external__react_["createElement"](toolboxCallout["a" /* ToolboxCallout */], { className: props.className, onDismiss: props.onCloseToolbox, horizontalPosition: props.horizontalPosition, verticalPosition: props.verticalPosition, scrollableParent: props.scrollableParent, canvasElement: props.canvasElement },
        external__react_["createElement"]("p", { className: ToolboxError_module_scss.error }, props.message)));
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxError/ToolboxErrorAnimationLayer.js


var ToolboxErrorAnimationLayer = Object(toolboxAnimation["a" /* animation */])(ToolboxError, 2 );

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxError/index.js


// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/index.js + 7 modules
var lib_toolboxGroup = __webpack_require__(300);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxLoading/index.js + 3 modules
var toolboxLoading = __webpack_require__(130);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxModel/index.js + 2 modules
var toolboxModel = __webpack_require__(121);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxSearch/index.js + 2 modules
var toolboxSearch = __webpack_require__(124);

// EXTERNAL MODULE: external "@microsoft/sp-lodash-subset"
var sp_lodash_subset_ = __webpack_require__(12);
var sp_lodash_subset__default = /*#__PURE__*/__webpack_require__.n(sp_lodash_subset_);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@ms/odsp-utilities-bundle/5.0.3/node_modules/@ms/odsp-utilities-bundle/lib/index.js
var lib = __webpack_require__(10);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/Modal/Modal.js
var Modal = __webpack_require__(356);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/react-dom@16.7.0+react@16.7.0/node_modules/office-ui-fabric-react/lib/components/SearchBox/SearchBox.js
var SearchBox = __webpack_require__(380);
var SearchBox_default = /*#__PURE__*/__webpack_require__.n(SearchBox);

// EXTERNAL MODULE: external "react-dom"
var external__react_dom_ = __webpack_require__(20);
var external__react_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_dom_);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxChrome/ToolboxChrome.module.scss.js
__webpack_require__(386);
var ToolboxChrome_module_scss_styles = {
    chrome: 'chrome_f43c97bd',
    searchBox: 'searchBox_f43c97bd',
    farButton: 'farButton_f43c97bd',
    commandBar: 'commandBar_f43c97bd',
    content: 'content_f43c97bd',
};
/* harmony default export */ var ToolboxChrome_module_scss = (ToolboxChrome_module_scss_styles);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxChrome/ToolboxChromeStrings.resx.js
var key = '_4SOrKBlkyRLkXWcT6txoow';
var allStrings = ( false) ?
    require("../resx-strings/en-us.json") :
    __webpack_require__(7);
var strings = allStrings[key];
/* harmony default export */ var ToolboxChromeStrings_resx = (strings);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxChrome/ToolboxChrome.js








var ToolboxChrome_ToolboxChrome =  (function (_super) {
    tslib_es6["__extends"](ToolboxChrome, _super);
    function ToolboxChrome() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._searchBoxContainer = null; 
        _this._commandBar = external__react_["createRef"]();
        return _this;
    }
    ToolboxChrome.prototype.componentDidMount = function () {
        var _this = this;
        if (this._searchBoxContainer) {
            var inputDOMNode = external__react_dom_["findDOMNode"](this._searchBoxContainer);
            if (inputDOMNode && inputDOMNode instanceof Element) {
                var input = inputDOMNode.querySelector('input');
                if (input) {
                    var valueLength = input.value.length;
                    input.setSelectionRange(valueLength, valueLength);
                }
            }
        }
        setTimeout(function () {
            if (_this._commandBar.current) {
                _this._commandBar.current.remeasure();
            }
        }, 300);
    };
    ToolboxChrome.prototype.render = function () {
        var _this = this;
        var ariaLabel = lib["StringHelper"].format(ToolboxChromeStrings_resx.ToolboxSearchAccessibleLabelTemplate, this.props.searchQuery ? ToolboxChromeStrings_resx.ToolboxSearchEscapeAccessibleLabel : '');
        return (external__react_["createElement"]("div", { className: Object(office_ui_fabric_react_bundle_["css"])(this.props.className, ToolboxChrome_module_scss.chrome), ref: function (instance) { return _this._searchBoxContainer = instance; } },
            external__react_["createElement"](SearchBox["SearchBox"], { ariaLabel: ariaLabel, placeholder: ToolboxChromeStrings_resx.ToolboxSearchLabel, onChange: this.props.onChange, onSearch: this.props.onSearch, onEscape: this._handleEscape, value: this.props.searchQuery, className: ToolboxChrome_module_scss.searchBox, "data-automation-id": 'toolbox-searchBox' }),
            this._renderCommandBar(),
            external__react_["createElement"]("div", { className: ToolboxChrome_module_scss.content, "data-automation-id": 'spPageCanvasLargeToolboxBody' }, this.props.children),
            external__react_["createElement"](office_ui_fabric_react_bundle_["IconButton"], { className: ToolboxChrome_module_scss.farButton, iconProps: this.props.farButton.iconProps, onClick: this.props.farButton.onClick, title: this.props.farButton.title, ariaLabel: this.props.farButton.ariaLabel, ariaDescription: this.props.farButton.ariaDescription, "data-automation-id": 'toolbox-farButton' })));
    };
    ToolboxChrome.prototype._renderCommandBar = function () {
        if (!this.props.commandBar) {
            return null; 
        }
        return (external__react_["createElement"](office_ui_fabric_react_bundle_["CommandBar"], tslib_es6["__assign"]({}, this.props.commandBar, { className: Object(office_ui_fabric_react_bundle_["css"])(this.props.commandBar.className, ToolboxChrome_module_scss.commandBar), componentRef: this._commandBar })));
    };
    ToolboxChrome.prototype._handleEscape = function () {
        if (this.props.searchQuery) {
            this.props.onChange('');
        }
        else if (this.props.onEscape) {
            this.props.onEscape();
        }
    };
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxChrome.prototype, "_handleEscape", null);
    return ToolboxChrome;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxChrome/index.js


// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxItem/index.js + 5 modules
var toolboxItem = __webpack_require__(301);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ViewCategory.js





var ViewCategory_ViewCategory =  (function (_super) {
    tslib_es6["__extends"](ViewCategory, _super);
    function ViewCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewCategory.prototype.render = function () {
        var _this = this;
        var groupIndex = Object(sp_lodash_subset_["findIndex"])(this.props.groups, function (group) { return group.groupId === _this.props.view.groupId; });
        var toolboxGroup = this.props.groups[groupIndex];
        var itemViews = toolboxGroup.items
            .map(function (item) {
            return external__react_["createElement"](toolboxItem["a" /* ToolboxItemLarge */], { key: item.id, item: item, onClick: _this.props.onClickItem });
        });
        return (external__react_["createElement"](lib_toolboxGroup["a" /* ToolboxGroupLarge */], { groupName: toolboxGroup.title, hasHeader: false }, itemViews));
    };
    return ViewCategory;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ViewHome.js




var ViewHome_ViewHome =  (function (_super) {
    tslib_es6["__extends"](ViewHome, _super);
    function ViewHome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewHome.prototype.render = function () {
        return (external__react_["createElement"]("div", null, this._renderGroups()));
    };
    ViewHome.prototype._renderGroups = function () {
        var _this = this;
        return this.props.groups.map(function (group) {
            return external__react_["createElement"](lib_toolboxGroup["a" /* ToolboxGroupLarge */], { groupName: group.title, hasHeader: true, key: group.groupId, onClickSeeAll: function () { return _this._switchToCategoryView(group.groupId); } }, _this._renderItems(group.items));
        });
    };
    ViewHome.prototype._renderItems = function (items) {
        var _this = this;
        return items.map(function (item) {
            return external__react_["createElement"](toolboxItem["a" /* ToolboxItemLarge */], { key: item.id, item: item, onClick: _this.props.onClickItem });
        });
    };
    ViewHome.prototype._switchToCategoryView = function (groupId) {
        this.props.onSwitchView({
            type: "Category" ,
            groupId: groupId,
            previousView: this.props.view
        });
    };
    return ViewHome;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ToolboxLargeStrings.resx.js
var ToolboxLargeStrings_resx_key = '_WVn4QXYnL8WpGCqr2C9ySA';
var ToolboxLargeStrings_resx_allStrings = ( false) ?
    require("../resx-strings/en-us.json") :
    __webpack_require__(7);
var ToolboxLargeStrings_resx_strings = ToolboxLargeStrings_resx_allStrings[ToolboxLargeStrings_resx_key];
/* harmony default export */ var ToolboxLargeStrings_resx = (ToolboxLargeStrings_resx_strings);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ViewSearch.module.scss.js
__webpack_require__(388);
var ViewSearch_module_scss_styles = {
    noResultFoundContainer: 'noResultFoundContainer_356f5539',
    noResultFound: 'noResultFound_356f5539',
    noResultFoundIcon: 'noResultFoundIcon_356f5539',
    noResultFoundLabelContainer: 'noResultFoundLabelContainer_356f5539',
    noResultLabel: 'noResultLabel_356f5539',
    tryAgainLabel: 'tryAgainLabel_356f5539',
};
/* harmony default export */ var ViewSearch_module_scss = (ViewSearch_module_scss_styles);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ViewSearch.js






function ViewSearch(props) {
    if (props.items.length === 0) {
        return (external__react_["createElement"]("div", { className: ViewSearch_module_scss.noResultFoundContainer },
            external__react_["createElement"](lib_toolboxGroup["a" /* ToolboxGroupLarge */], { groupName: 'empty', hasHeader: false, key: 'toolboxGroup-empty' }),
            external__react_["createElement"](EmptySearchResultComponent, null)));
    }
    var itemViews = props.items
        .map(function (item) {
        return external__react_["createElement"](toolboxItem["a" /* ToolboxItemLarge */], { key: item.id, item: item, onClick: props.onClickItem });
    });
    return (external__react_["createElement"](lib_toolboxGroup["a" /* ToolboxGroupLarge */], { groupName: ToolboxLargeStrings_resx.ToolboxCategorySearchResults, hasHeader: false }, itemViews));
}
function EmptySearchResultComponent() {
    return (external__react_["createElement"]("div", { className: ViewSearch_module_scss.noResultFound },
        external__react_["createElement"](office_ui_fabric_react_bundle_["Icon"], { iconName: 'Search', className: ViewSearch_module_scss.noResultFoundIcon }),
        external__react_["createElement"]("div", { className: ViewSearch_module_scss.noResultFoundLabelContainer },
            external__react_["createElement"]("div", { className: ViewSearch_module_scss.noResultLabel }, ToolboxLargeStrings_resx.NoResultLabel),
            external__react_["createElement"]("div", { className: ViewSearch_module_scss.tryAgainLabel }, ToolboxLargeStrings_resx.TryAgainLabel))));
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ViewSort.js




var ViewSort_ViewSort =  (function (_super) {
    tslib_es6["__extends"](ViewSort, _super);
    function ViewSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewSort.prototype.render = function () {
        var _this = this;
        var itemViews = this.props.items
            .map(function (item) {
            return external__react_["createElement"](toolboxItem["a" /* ToolboxItemLarge */], { key: item.id, item: item, onClick: _this.props.onClickItem });
        });
        return (external__react_["createElement"](lib_toolboxGroup["a" /* ToolboxGroupLarge */], { groupName: '', hasHeader: false }, itemViews));
    };
    return ViewSort;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ToolboxLarge.module.scss.js
__webpack_require__(390);
var ToolboxLarge_module_scss_styles = {
    toolboxLargeContainer: 'toolboxLargeContainer_a7e85f60',
    modalScrollContent: 'modalScrollContent_a7e85f60',
    screenReaderAlert: 'screenReaderAlert_a7e85f60',
    menuCommandBar: 'menuCommandBar_a7e85f60',
    selectedItem: 'selectedItem_a7e85f60',
};
/* harmony default export */ var ToolboxLarge_module_scss = (ToolboxLarge_module_scss_styles);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ToolboxLargeViewLayer.js














var ALL_BY_CATEGORY_KEY = 'allByCategory';
var ALL_A_TO_Z_KEY = 'allAToZ';
var ToolboxLargeViewLayer_ToolboxLargeViewLayer =  (function (_super) {
    tslib_es6["__extends"](ToolboxLargeViewLayer, _super);
    function ToolboxLargeViewLayer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            view: {
                type: "Home" ,
                previousView: undefined
            }
        };
        return _this;
    }
    ToolboxLargeViewLayer.prototype.render = function () {
        var _this = this;
        var titleAriaId = Math.random().toString().substr(2);
        var title = ToolboxLargeStrings_resx.LargeToolboxAriaTitle;
        var collapseButtonProps = {
            iconProps: { iconName: 'BackToWindow' },
            onClick: this.props.onCollapseToolbox,
            title: ToolboxLargeStrings_resx.ToolboxCollapseButtonDescription,
            ariaLabel: ToolboxLargeStrings_resx.ToolboxCollapseButtonAriaLabel,
            ariaDescription: ToolboxLargeStrings_resx.ToolboxCollapseButtonDescription
        };
        var commandBarProps = {
            items: this._commandBarItems,
            className: ToolboxLarge_module_scss.menuCommandBar
        };
        return (external__react_["createElement"](Modal["Modal"], { onDismiss: function () { return _this.props.onCloseToolbox(true ); }, containerClassName: Object(office_ui_fabric_react_bundle_["css"])(ToolboxLarge_module_scss.toolboxLargeContainer, this.props.className), isOpen: true, isBlocking: false, titleAriaId: titleAriaId, scrollableContentClassName: ToolboxLarge_module_scss.modalScrollContent },
            external__react_["createElement"](ToolboxChrome_ToolboxChrome, { searchQuery: this.props.query, farButton: collapseButtonProps, onChange: function (query) { return _this.props.onFilterItems(query,  true, 'Large'); }, onSearch: function (query) { return _this.props.onFilterItems(query,  false, 'Large'); }, onEscape: function () { return _this.props.onCloseToolbox(true ); }, commandBar: commandBarProps }, this._toolboxBody),
            external__react_["createElement"]("p", { id: titleAriaId, className: ToolboxLarge_module_scss.screenReaderAlert }, title)));
    };
    Object.defineProperty(ToolboxLargeViewLayer.prototype, "_commandBarItems", {
        get: function () {
            var _this = this;
            var _a, _b;
            var _c = this._selectedCategory, selectedCategoryKey = _c[0], selectedCategoryName = _c[1];
            var subMenuForGroup = this.props.groups
                .map(function (toolboxLargeGroup) {
                var _a;
                return ({
                    key: toolboxLargeGroup.groupId,
                    name: toolboxLargeGroup.title,
                    className: Object(office_ui_fabric_react_bundle_["css"])((_a = {},
                        _a[ToolboxLarge_module_scss.selectedItem] = toolboxLargeGroup.groupId === selectedCategoryKey,
                        _a)),
                    onClick: _this._handleChangeCategoryMenu
                });
            });
            var subMenuForView = [{
                    key: ALL_BY_CATEGORY_KEY,
                    name: ToolboxLargeStrings_resx.ToolboxCategoryAllCategory,
                    className: Object(office_ui_fabric_react_bundle_["css"])((_a = {},
                        _a[ToolboxLarge_module_scss.selectedItem] = ALL_BY_CATEGORY_KEY === selectedCategoryKey,
                        _a)),
                    onClick: this._handleChangeCategoryMenu
                }, {
                    key: ALL_A_TO_Z_KEY,
                    name: ToolboxLargeStrings_resx.ToolboxCategorySortingCategory,
                    className: Object(office_ui_fabric_react_bundle_["css"])((_b = {},
                        _b[ToolboxLarge_module_scss.selectedItem] = ALL_A_TO_Z_KEY === selectedCategoryKey,
                        _b)),
                    onClick: this._handleChangeCategoryMenu
                }];
            var backButton = {
                key: 'BackButton',
                ariaLabel: ToolboxLargeStrings_resx.BackButtonAriaLabel,
                iconProps: { iconName: 'ChromeBack' },
                disabled: !this.props.query && this.state.view.previousView === undefined,
                onClick: this._handleBackClick,
                'data-automation-id': 'toolbox-back-button'
            };
            var commandBarMenus = [
                backButton,
                {
                    key: 'CategoryContextualMenu',
                    name: selectedCategoryName,
                    subMenuProps: {
                        items: subMenuForView.concat(subMenuForGroup),
                        beakWidth: 10,
                        isBeakVisible: true
                    },
                    role: 'navigation',
                    ariaLabel: lib["StringHelper"].format(ToolboxLargeStrings_resx.DropDownMenuAriaLabel, selectedCategoryName)
                }
            ];
            return commandBarMenus;
        },
        enumerable: true,
        configurable: true
    });
    ToolboxLargeViewLayer.prototype._handleChangeCategoryMenu = function (ev, item) {
        if (!item) {
            return;
        }
        switch (item.key) {
            case ALL_BY_CATEGORY_KEY: {
                this._switchView({
                    type: "Home" ,
                    previousView: this.state.view
                });
                var message = lib["StringHelper"].format(ToolboxLargeStrings_resx.SwitchCategoryAlert, ToolboxLargeStrings_resx.ToolboxCategoryAllCategory);
                this.props.a11yManager.alert(message);
                break;
            }
            case ALL_A_TO_Z_KEY: {
                this._switchView({
                    type: "Sort" ,
                    sortBy: 'alphabet',
                    previousView: this.state.view
                });
                var message = lib["StringHelper"].format(ToolboxLargeStrings_resx.SwitchCategoryAlert, ToolboxLargeStrings_resx.ToolboxCategorySortingCategory);
                this.props.a11yManager.alert(message);
                break;
            }
            default: {
                this._switchView({
                    type: "Category" ,
                    groupId: item.key,
                    previousView: this.state.view
                });
                var message = lib["StringHelper"].format(ToolboxLargeStrings_resx.SwitchCategoryAlert, this._getCategoryName(item.key));
                this.props.a11yManager.alert(message);
            }
        }
    };
    Object.defineProperty(ToolboxLargeViewLayer.prototype, "_selectedCategory", {
        get: function () {
            var selectedCategoryKey;
            var selectedCategoryName;
            if (this.props.query) {
                selectedCategoryKey = '';
                selectedCategoryName = ToolboxLargeStrings_resx.ToolboxCategorySearchResults;
            }
            else if (this.state.view.type === "Home" ) {
                selectedCategoryKey = ALL_BY_CATEGORY_KEY;
                selectedCategoryName = ToolboxLargeStrings_resx.ToolboxCategoryAllCategory;
            }
            else if (this.state.view.type === "Sort" ) {
                selectedCategoryKey = ALL_A_TO_Z_KEY;
                selectedCategoryName = ToolboxLargeStrings_resx.ToolboxCategorySortingCategory;
            }
            else {
                selectedCategoryKey = this.state.view.groupId;
                selectedCategoryName = this._getCategoryName(this.state.view.groupId);
            }
            return [selectedCategoryKey, selectedCategoryName];
        },
        enumerable: true,
        configurable: true
    });
    ToolboxLargeViewLayer.prototype._getCategoryName = function (groupId) {
        var groupIndex = Object(sp_lodash_subset_["findIndex"])(this.props.groups, function (group) { return group.groupId === groupId; });
        if (groupIndex >= 0) {
            return this.props.groups[groupIndex].title;
        }
        else {
            sp_diagnostics_["_TraceLogger"].logError(ToolboxLargeViewLayer._logSource, new Error("Something went wrong with categorizing groups, group not found by given id: " + groupId));
            return '';
        }
    };
    ToolboxLargeViewLayer.prototype._handleBackClick = function () {
        if (this.props.query) {
            this.props.onFilterItems('',  false);
        }
        else if (this.state.view.previousView) {
            this._switchView(this.state.view.previousView);
        }
    };
    Object.defineProperty(ToolboxLargeViewLayer.prototype, "_toolboxBody", {
        get: function () {
            if (this.props.query) {
                return (external__react_["createElement"](ViewSearch, { items: this.props.items, onClickItem: this._clickItemInToolboxLarge }));
            }
            switch (this.state.view.type) {
                case "Home" :
                    return (external__react_["createElement"](ViewHome_ViewHome, { view: this.state.view, groups: this.props.groups, onClickItem: this._clickItemInToolboxLarge, onSwitchView: this._switchView }));
                case "Sort" :
                    return (external__react_["createElement"](ViewSort_ViewSort, { view: this.state.view, items: this.props.items, onClickItem: this._clickItemInToolboxLarge }));
                case "Category" :
                    return (external__react_["createElement"](ViewCategory_ViewCategory, { view: this.state.view, groups: this.props.groups, onClickItem: this._clickItemInToolboxLarge }));
                default: {
                    return null; 
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ToolboxLargeViewLayer.prototype._switchView = function (view) {
        this.props.onFilterItems('',  false);
        if (view.previousView !== undefined && this._isSameView(view, view.previousView)) {
            this.setState({ view: view.previousView });
        }
        else {
            this.setState({ view: view });
        }
    };
    ToolboxLargeViewLayer.prototype._isSameView = function (view1, view2) {
        if (view1.type === "Category"  && view2.type === "Category" ) {
            return view1.groupId === view2.groupId;
        }
        else {
            return view1.type === view2.type;
        }
    };
    ToolboxLargeViewLayer.prototype._clickItemInToolboxLarge = function (toolboxItemId) {
        this.props.onClickItem(toolboxItemId, {
            size: "Large" ,
            query: this.props.query,
            view: this.state.view
        });
    };
    ToolboxLargeViewLayer._logSource = sp_diagnostics_["_LogSource"].create('Toolbox');
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxLargeViewLayer.prototype, "_handleChangeCategoryMenu", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxLargeViewLayer.prototype, "_handleBackClick", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxLargeViewLayer.prototype, "_switchView", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxLargeViewLayer.prototype, "_clickItemInToolboxLarge", null);
    return ToolboxLargeViewLayer;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ToolboxLargeSearchLayer.js




function ToolboxLargeSearchLayer(props) {
    return (external__react_["createElement"](toolboxSearch["a" /* SearchConsumer */], null, function (searchContext) { return external__react_["createElement"](ToolboxLargeViewLayer_ToolboxLargeViewLayer, tslib_es6["__assign"]({}, props, searchContext)); }));
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ToolboxLargeAnimationLayer.js


var ToolboxLargeAnimationLayer = Object(toolboxAnimation["a" /* animation */])(ToolboxLargeSearchLayer, 4 );

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/index.js


// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxSmall/ToolboxSmall.module.scss.js
__webpack_require__(392);
var ToolboxSmall_module_scss_styles = {
    noResults: 'noResults_b7f82eed',
};
/* harmony default export */ var ToolboxSmall_module_scss = (ToolboxSmall_module_scss_styles);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxSmall/ToolboxSmallStrings.resx.js
var ToolboxSmallStrings_resx_key = '_CZsUWMvZilAKKAfwQSdzKQ';
var ToolboxSmallStrings_resx_allStrings = ( false) ?
    require("../resx-strings/en-us.json") :
    __webpack_require__(7);
var ToolboxSmallStrings_resx_strings = ToolboxSmallStrings_resx_allStrings[ToolboxSmallStrings_resx_key];
/* harmony default export */ var ToolboxSmallStrings_resx = (ToolboxSmallStrings_resx_strings);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxSmall/ToolboxSmall.js









var ToolboxSmall_ToolboxSmall =  (function (_super) {
    tslib_es6["__extends"](ToolboxSmall, _super);
    function ToolboxSmall(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this._getState(props.items, props.query);
        return _this;
    }
    ToolboxSmall.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.items !== this.props.items) {
            this.setState(this._getState(nextProps.items, nextProps.query));
        }
    };
    ToolboxSmall.prototype.render = function () {
        var _this = this;
        var itemsNotFound = (this.state.featuredGroup.items.length === 0 &&
            this.state.alphabeticalGroup.items.length === 0);
        var expandButtonProps = {
            iconProps: { iconName: 'fullScreen' },
            onClick: this.props.onExpandToolbox,
            title: ToolboxSmallStrings_resx.ToolboxExpandButtonTitle
        };
        return (external__react_["createElement"](toolboxCallout["a" /* ToolboxCallout */], { onDismiss: function (isKeyboard) { return _this.props.onCloseToolbox(isKeyboard ); }, horizontalPosition: this.props.horizontalPosition || 0, verticalPosition: this.props.verticalPosition || 0, className: this.props.className, scrollableParent: this.props.scrollableParent, canvasElement: this.props.canvasElement },
            external__react_["createElement"](ToolboxChrome_ToolboxChrome, { onSearch: this.props.onFilter, onChange: this.props.onFilterDebounce, onEscape: function () { return _this.props.onCloseToolbox(true ); }, searchQuery: this.props.query, farButton: expandButtonProps },
                external__react_["createElement"](office_ui_fabric_react_bundle_["FocusZone"], { direction: office_ui_fabric_react_bundle_["FocusZoneDirection"].horizontal, isCircularNavigation: true },
                    this._renderGroup(this.state.featuredGroup),
                    this._renderGroup(this.state.alphabeticalGroup),
                    itemsNotFound && this._itemsNotFound))));
    };
    ToolboxSmall.prototype._renderGroup = function (group) {
        var _this = this;
        if (group.items.length === 0) {
            return false;
        }
        var items = group.items.map(function (item) {
            return external__react_["createElement"](toolboxItem["c" /* ToolboxItemSmall */], { key: item.id, item: item, onClick: _this._handleClickItem });
        });
        return (external__react_["createElement"](lib_toolboxGroup["b" /* ToolboxGroupSmall */], { key: group.groupId, groupName: group.title, hasHeader: true }, items));
    };
    Object.defineProperty(ToolboxSmall.prototype, "_itemsNotFound", {
        get: function () {
            return (external__react_["createElement"]("span", { className: ToolboxSmall_module_scss.noResults }, ToolboxSmallStrings_resx.ToolboxNoItemsFound));
        },
        enumerable: true,
        configurable: true
    });
    ToolboxSmall.prototype._handleClickItem = function (toolboxItemId) {
        this.props.onClickItem(toolboxItemId, {
            size: "Small" ,
            query: this.props.query
        });
    };
    ToolboxSmall.prototype._getState = function (items, query) {
        var featuredGroup = Object(lib_toolboxGroup["e" /* getFeaturedGroup */])(items);
        var alphabeticalGroup = Object(lib_toolboxGroup["d" /* getAlphabeticalGroup */])(items);
        return {
            alphabeticalGroup: alphabeticalGroup,
            featuredGroup: featuredGroup
        };
    };
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxSmall.prototype, "_handleClickItem", null);
    return ToolboxSmall;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxSmall/ToolboxSmallSearchLayer.js




function renderToolbox(props, searchContext) {
    return (external__react_["createElement"](ToolboxSmall_ToolboxSmall, tslib_es6["__assign"]({}, props, { ref: undefined, query: searchContext.query, items: searchContext.items, onFilter: function (query) { return searchContext.onFilterItems(query,  false, 'Small'); }, onFilterDebounce: function (query) { return searchContext.onFilterItems(query,  true, 'Small'); } })));
}
function ToolboxSmallSearchLayer(props) {
    return (external__react_["createElement"](toolboxSearch["a" /* SearchConsumer */], null, function (searchContext) { return renderToolbox(props, searchContext); }));
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxSmall/ToolboxSmallAnimationLayer.js


var ToolboxSmallAnimationLayer = Object(toolboxAnimation["a" /* animation */])(ToolboxSmallSearchLayer, 3 );

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxSmall/index.js


// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolbox/ToolboxSizeLayer.js







var ToolboxSizeLayer_ToolboxSizeLayer =  (function (_super) {
    tslib_es6["__extends"](ToolboxSizeLayer, _super);
    function ToolboxSizeLayer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            size: "Small" 
        };
        return _this;
    }
    ToolboxSizeLayer.prototype.render = function () {
        switch (this.state.size) {
            case "Small" :
                return (external__react_["createElement"](ToolboxSmallAnimationLayer, { className: '', items: this.props.items, controller: this.props.controller, verticalPosition: this.props.verticalPosition, horizontalPosition: this.props.horizontalPosition, canvasElement: this.props.canvasElement, scrollableParent: this.props.scrollableParent, onExpandToolbox: this._expandToolbox, onCloseToolbox: this.props.onCloseToolbox, onClickItem: this.props.onClickItem }));
            case "Large" :
                return (external__react_["createElement"](ToolboxLargeAnimationLayer, { className: '', controller: this.props.controller, items: this.props.items, groups: this.props.groups, onCollapseToolbox: this._collapseToolbox, onCloseToolbox: this.props.onCloseToolbox, onClickItem: this.props.onClickItem, a11yManager: this.props.a11yManager }));
            default:
                throw new Error('Unknown toolbox mode');
        }
    };
    ToolboxSizeLayer.prototype._expandToolbox = function () {
        sp_telemetry_["_EngagementLogger"].logEventWithLogEntry(new sp_diagnostics_["_LogEntry"]('Toolbox', 'ExpandToolbox', sp_diagnostics_["_LogType"].Event, {
            itemCount: this.props.items.length.toString()
        }));
        this.setState({
            size: "Large" 
        });
    };
    ToolboxSizeLayer.prototype._collapseToolbox = function () {
        sp_telemetry_["_EngagementLogger"].logEventWithLogEntry(new sp_diagnostics_["_LogEntry"]('Toolbox', 'CollapseToolbox', sp_diagnostics_["_LogType"].Event, {
            itemCount: this.props.items.length.toString()
        }));
        this.setState({
            size: "Small" 
        });
    };
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxSizeLayer.prototype, "_expandToolbox", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxSizeLayer.prototype, "_collapseToolbox", null);
    return ToolboxSizeLayer;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolbox/ToolboxProviderLayer.js




function ToolboxProviderLayer(props) {
    return (external__react_["createElement"](toolboxSearch["b" /* SearchProvider */], { items: props.items, a11yManager: props.a11yManager },
        external__react_["createElement"](ToolboxSizeLayer_ToolboxSizeLayer, tslib_es6["__assign"]({}, props))));
}

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolbox/ToolboxItemsLayer.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxItemsLayer", function() { return ToolboxItemsLayer_ToolboxItemsLayer; });











var ToolboxItemsLayer_ToolboxItemsLayer =  (function (_super) {
    tslib_es6["__extends"](ToolboxItemsLayer, _super);
    function ToolboxItemsLayer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this._getState(props.items);
        return _this;
    }
    ToolboxItemsLayer.prototype.componentDidMount = function () {
        this._markStageToolboxRenderEnd();
    };
    ToolboxItemsLayer.prototype.componentDidUpdate = function () {
        this._markStageToolboxRenderEnd();
    };
    ToolboxItemsLayer.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.items !== this.props.items) {
            this.setState(this._getState(nextProps.items));
        }
    };
    ToolboxItemsLayer.prototype.render = function () {
        var items = this.state.items;
        if (items === undefined) {
            return (external__react_["createElement"](toolboxLoading["a" /* ToolboxLoading */], { className: '', controller: this.props.controller, horizontalPosition: this.props.horizontalPosition, verticalPosition: this.props.verticalPosition, scrollableParent: this.props.scrollableParent, canvasElement: this.props.canvasElement, onCloseToolbox: this.props.onCloseToolbox }));
        }
        else if (Array.isArray(items)) {
            var groups = Object(lib_toolboxGroup["c" /* categorizeGroups */])(items);
            this._logWebPartSource(groups);
            return (external__react_["createElement"](ToolboxProviderLayer, { controller: this.props.controller, items: items, groups: groups, a11yManager: this.props.a11yManager, horizontalPosition: this.props.horizontalPosition, verticalPosition: this.props.verticalPosition, scrollableParent: this.props.scrollableParent, canvasElement: this.props.canvasElement, onCloseToolbox: this.props.onCloseToolbox, onClickItem: this._clickItem }));
        }
        else {
            return (external__react_["createElement"](ToolboxErrorAnimationLayer, { className: '', controller: this.props.controller, message: items.message, a11yManager: this.props.a11yManager, horizontalPosition: this.props.horizontalPosition, verticalPosition: this.props.verticalPosition, scrollableParent: this.props.scrollableParent, canvasElement: this.props.canvasElement, onCloseToolbox: this.props.onCloseToolbox }));
        }
    };
    ToolboxItemsLayer.prototype._getState = function (itemShims) {
        var _this = this;
        if (Array.isArray(itemShims)) {
            var itemMaps = itemShims
                .map(toolboxModel["b" /* mapToolboxItem */])
                .concat(this.props.disableRTE ? [] : toolboxData["b" /* RTE */].TOOLBOX_ITEM_MAP)
                .filter(function (map) { return (_this.props.siteSupportsFullWidth || map.id !== 'FullWidthSectionToolboxItem'); });
            var items = itemMaps
                .map(function (map) { return map.item; })
                .sort(function (a, b) { return a.displayName.localeCompare(b.displayName, _this.props.cultureName); });
            return {
                items: items,
                mapToolboxItemIdToCanvasControl: new Map(itemMaps.map(function (map) { return [map.id, map.control]; })),
                mapToolboxItemIdToWebPartManifest: new Map(itemMaps.map(function (map) { return [map.id, map.manifest]; }))
            };
        }
        else {
            return {
                items: itemShims,
                mapToolboxItemIdToCanvasControl: undefined,
                mapToolboxItemIdToWebPartManifest: undefined
            };
        }
    };
    ToolboxItemsLayer.prototype._clickItem = function (toolboxItemId, info) {
        if (!this.state.mapToolboxItemIdToCanvasControl || !this.state.mapToolboxItemIdToWebPartManifest) {
            return;
        }
        var control = this.state.mapToolboxItemIdToCanvasControl.get(toolboxItemId);
        var manifest = this.state.mapToolboxItemIdToWebPartManifest.get(toolboxItemId);
        if (!control || !manifest) {
            return;
        }
        this.props.onClickItem(tslib_es6["__assign"]({}, control, { position: this.props.position }));
        if (control.controlType === toolboxModel["a" /* CanvasControlType */].WebPartZone) {
            sp_telemetry_["_EngagementLogger"].logEventWithLogEntry(new sp_diagnostics_["_LogEntry"]('Toolbox', 'AddWebPart', sp_diagnostics_["_LogType"].Event, tslib_es6["__assign"]({ manifestId: manifest.id }, this._convertClickItemInfo(info))));
        }
        else if (control.controlType === toolboxModel["a" /* CanvasControlType */].RTE) {
            sp_telemetry_["_EngagementLogger"].logEventWithLogEntry(new sp_diagnostics_["_LogEntry"]('Toolbox', 'AddRTE', sp_diagnostics_["_LogType"].Event, tslib_es6["__assign"]({ source: info.size }, this._convertClickItemInfo(info))));
        }
        this.props.onCloseToolbox(false );
    };
    ToolboxItemsLayer.prototype._convertClickItemInfo = function (info) {
        if (info.size === "Small" ) {
            return {
                source: info.size,
                view: '',
                queryLength: info.query.length.toString()
            };
        }
        else {
            return {
                source: info.size,
                view: info.query ? 'Search' : info.view.type,
                queryLength: info.query.length.toString()
            };
        }
    };
    ToolboxItemsLayer.prototype._logWebPartSource = function (groups) {
        var _this = this;
        var map = this.state.mapToolboxItemIdToWebPartManifest;
        if (ToolboxItemsLayer._isWebPartSourceLogged || !map) {
            return;
        }
        var countMap = groups
            .filter(function (group) { return group.groupId !== toolboxData["a" /* Group */].FEATURED_GROUP[0]; })
            .reduce(function (accumulator, group) {
            var firstPartyCount = group.items
                .map(function (item) { return map.get(item.id); })
                .filter(function (manifest) { return manifest && manifest.isInternal; })
                .length;
            var thirdPartyCount = group.items.length - firstPartyCount;
            _this._accumulate(accumulator, _this._shortenGuid(group.groupId) + '_1', firstPartyCount);
            _this._accumulate(accumulator, _this._shortenGuid(group.groupId) + '_3', thirdPartyCount);
            _this._accumulate(accumulator, 'All_1', firstPartyCount);
            _this._accumulate(accumulator, 'All_3', thirdPartyCount);
            _this._accumulate(accumulator, 'All', group.items.length);
            return accumulator;
        }, new Map());
        var countLog = {};
        countMap.forEach(function (value, key) {
            countLog[key] = value.toString();
        });
        sp_telemetry_["_EngagementLogger"].logEventWithLogEntry(new sp_diagnostics_["_LogEntry"]('Toolbox', 'ItemsSource', sp_diagnostics_["_LogType"].Event, countLog));
        ToolboxItemsLayer._isWebPartSourceLogged = true;
    };
    ToolboxItemsLayer.prototype._shortenGuid = function (guid) {
        return guid.replace(/-/g, '');
    };
    ToolboxItemsLayer.prototype._accumulate = function (map, key, value) {
        var base = map.get(key) || 0;
        map.set(key, base + value);
    };
    ToolboxItemsLayer.prototype._markStageToolboxRenderEnd = function () {
        if (this.props.componentPerfLogger && this.state.items !== undefined) {
            this.props.componentPerfLogger.end('ToolboxRender');
        }
    };
    ToolboxItemsLayer._isWebPartSourceLogged = false;
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxItemsLayer.prototype, "_clickItem", null);
    return ToolboxItemsLayer;
}(external__react_["PureComponent"]));



/***/ })

});
//# sourceMappingURL=1.1_0dab2b9dfb8e13a8978f.js.map