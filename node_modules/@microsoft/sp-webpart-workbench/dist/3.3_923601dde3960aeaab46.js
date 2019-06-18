webpackJsonp8be81a5c_af38_4bb2_af97_afa3b64dfbed_1_8_2([3],{

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

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(395);
var loader = __webpack_require__(4);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".sectionCallout_970d6b1e{height:auto}", ""]);

// exports


/***/ }),

/***/ 405:
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

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxModel/index.js + 2 modules
var toolboxModel = __webpack_require__(121);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxCallout/index.js + 2 modules
var toolboxCallout = __webpack_require__(123);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/index.js + 7 modules
var toolboxGroup = __webpack_require__(300);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxItem/index.js + 5 modules
var toolboxItem = __webpack_require__(301);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxSection/ToolboxSectionCore.module.scss.js
__webpack_require__(394);
var styles = {
    sectionCallout: 'sectionCallout_970d6b1e',
};
/* harmony default export */ var ToolboxSectionCore_module_scss = (styles);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxSection/ToolboxSectionCore.js







var ToolboxSectionCore_ToolboxSectionCore =  (function (_super) {
    tslib_es6["__extends"](ToolboxSectionCore, _super);
    function ToolboxSectionCore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolboxSectionCore.prototype.render = function () {
        var _this = this;
        return (external__react_["createElement"](toolboxCallout["a" /* ToolboxCallout */], { onDismiss: function (isKeyboard) { return _this.props.onCloseToolbox(isKeyboard ); }, horizontalPosition: this.props.horizontalPosition || 0, verticalPosition: this.props.verticalPosition || 0, className: Object(office_ui_fabric_react_bundle_["css"])(this.props.className, ToolboxSectionCore_module_scss.sectionCallout), scrollableParent: this.props.scrollableParent, canvasElement: this.props.canvasElement, _workaroundRenderPosition: 'down' },
            external__react_["createElement"](office_ui_fabric_react_bundle_["FocusZone"], { direction: office_ui_fabric_react_bundle_["FocusZoneDirection"].horizontal, isCircularNavigation: true }, this._renderGroup(Object(toolboxGroup["f" /* getSectionGroup */])(this.props.items)))));
    };
    ToolboxSectionCore.prototype._renderGroup = function (group) {
        var _this = this;
        if (group.items.length === 0) {
            return false;
        }
        var items = group.items.map(function (item) {
            return external__react_["createElement"](toolboxItem["b" /* ToolboxItemSection */], { key: item.id, item: item, onClick: _this.props.onClickItem });
        });
        return (external__react_["createElement"](toolboxGroup["b" /* ToolboxGroupSmall */], { key: group.groupId, groupName: group.title, hasHeader: true }, items));
    };
    return ToolboxSectionCore;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxSection/ToolboxItemsLayer.js







var ToolboxItemsLayer_ToolboxItemsLayer =  (function (_super) {
    tslib_es6["__extends"](ToolboxItemsLayer, _super);
    function ToolboxItemsLayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolboxItemsLayer._getSectionItemMaps = function (itemShims) {
        return itemShims.map(toolboxModel["b" /* mapToolboxItem */]);
    };
    ToolboxItemsLayer.prototype.componentDidMount = function () {
        this._markStageToolboxRenderEnd();
    };
    ToolboxItemsLayer.prototype.componentDidUpdate = function () {
        this._markStageToolboxRenderEnd();
    };
    ToolboxItemsLayer.prototype.render = function () {
        var _this = this;
        var items = ToolboxItemsLayer._getSectionItemMaps(this.props.items).map(function (m) { return m.item; });
        return (external__react_["createElement"](ToolboxSectionCore_ToolboxSectionCore, { items: items, a11yManager: this.props.a11yManager, horizontalPosition: this.props.horizontalPosition, verticalPosition: this.props.verticalPosition, scrollableParent: this.props.scrollableParent, canvasElement: this.props.canvasElement, onCloseToolbox: function () { return _this.props.onCloseToolbox(true ); }, onClickItem: this._handleClickItem }));
    };
    ToolboxItemsLayer.prototype._handleClickItem = function (sectionItemId) {
        var control = ToolboxItemsLayer._getSectionItemMaps(this.props.items)
            .filter(function (m) { return m.id === sectionItemId; })
            .map(function (m) { return m.control; })[0];
        if (!control) {
            return;
        }
        this.props.onClickItem(control);
        sp_telemetry_["_EngagementLogger"].logEventWithLogEntry(new sp_diagnostics_["_LogEntry"]('Toolbox', 'AddZone', sp_diagnostics_["_LogType"].Event, {
            layout: toolboxModel["a" /* CanvasControlType */][control.controlType]
        }));
        this.props.onCloseToolbox(false );
    };
    ToolboxItemsLayer.prototype._markStageToolboxRenderEnd = function () {
        if (this.props.componentPerfLogger) {
            this.props.componentPerfLogger.end('ToolboxRender');
        }
    };
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxItemsLayer.prototype, "_handleClickItem", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["memoize"]
    ], ToolboxItemsLayer, "_getSectionItemMaps", null);
    return ToolboxItemsLayer;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas-toolbox/lib/toolboxSection/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ToolboxSection", function() { return ToolboxItemsLayer_ToolboxItemsLayer; });



/***/ })

});
//# sourceMappingURL=3.3_923601dde3960aeaab46.js.map