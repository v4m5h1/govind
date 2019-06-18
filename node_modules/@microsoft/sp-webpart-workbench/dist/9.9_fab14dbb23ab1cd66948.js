webpackJsonp8be81a5c_af38_4bb2_af97_afa3b64dfbed_1_8_2([9],{

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: external "@microsoft/office-ui-fabric-react-bundle"
var office_ui_fabric_react_bundle_ = __webpack_require__(1);
var office_ui_fabric_react_bundle__default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_bundle_);

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(5);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// EXTERNAL MODULE: external "@microsoft/sp-diagnostics"
var sp_diagnostics_ = __webpack_require__(6);
var sp_diagnostics__default = /*#__PURE__*/__webpack_require__.n(sp_diagnostics_);

// EXTERNAL MODULE: external "@microsoft/sp-lodash-subset"
var sp_lodash_subset_ = __webpack_require__(12);
var sp_lodash_subset__default = /*#__PURE__*/__webpack_require__.n(sp_lodash_subset_);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@ms/odsp-utilities-bundle/5.0.3/node_modules/@ms/odsp-utilities-bundle/lib/index.js
var lib = __webpack_require__(10);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas/lib/sp-canvas/canvas/canvasControl/CanvasControlType.js
var CanvasControlType = __webpack_require__(9);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas/lib/sp-canvas/canvas/canvasStore/index.js + 7 modules
var canvasStore = __webpack_require__(69);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas/lib/sp-canvas/canvas/canvasLayout/CanvasLayout.js + 4 modules
var CanvasLayout = __webpack_require__(13);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas/lib/sp-canvas/a11y/CanvasA11yConstants.js
var CanvasA11yConstants = __webpack_require__(41);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas/lib/sp-canvas/canvas/canvasLayout/undefinedControlPosition.js
var undefinedControlPosition = __webpack_require__(42);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas/lib/sp-canvas/canvas/canvasComponent/index.js + 9 modules
var canvasComponent = __webpack_require__(68);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas/lib/sp-canvas/canvas/editChunk/canvasStore/shouldExcludeFromToolbox.js
var CONNECTORS_ID = '893a257e-9c92-49bc-8a36-2f6bb058da34';
var O365_VIDEO_ID = '275c0095-a77e-4f6d-a2a0-6a7626911518';
var LINK_PREVIEW_ID = '6410b3b6-d440-4663-8744-378976dc041e';
var PLANNER_ID = '39c4c1c2-63fa-41be-8cc2-f6c0b49b253d';
var ONPREM_EXCLUDE_WEBPART_FROM_TOOLBOX = new Set([O365_VIDEO_ID, LINK_PREVIEW_ID]);
var GROUP_ONLY_PARTS = new Set([CONNECTORS_ID, PLANNER_ID]);
function shouldExcludeFromToolbox(manifest, pageContext) {
    if (false) {
        return true;
    }
    return manifest.hiddenFromToolbox ||
        missingRequiredGroup(manifest, pageContext) ||
        _missingSupportSharePointWebPart(manifest);
}
function missingRequiredGroup(manifest, pageContext) {
    var hasGroup = Boolean(pageContext && pageContext.site && pageContext.site.group && pageContext.site.group.id);
    return !hasGroup && GROUP_ONLY_PARTS.has(manifest.id);
}
function _missingSupportSharePointWebPart(manifest) {
    if (!manifest.supportedHosts) {
        return false;
    }
    var missingSupportedHost = true;
    for (var _i = 0, _a = manifest.supportedHosts; _i < _a.length; _i++) {
        var supportedHost = _a[_i];
        if (supportedHost === 'SharePointWebPart') {
            missingSupportedHost = false;
            break;
        }
    }
    return missingSupportedHost;
}

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas/lib/sp-canvas/canvas/canvasSection/index.js + 15 modules
var canvasSection = __webpack_require__(28);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas/lib/sp-canvas/common/ComponentPerfLogger.js
var ComponentPerfLogger = __webpack_require__(127);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas/lib/sp-canvas/common/Flights.js
var Flights = __webpack_require__(8);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas/lib/sp-canvas/loc/CanvasStrings.resx.js
var CanvasStrings_resx = __webpack_require__(14);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-canvas/lib/sp-canvas/canvas/editChunk/canvasStore/CanvasStoreEditActions.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasStoreEditActions", function() { return CanvasStoreEditActions_CanvasStoreEditActions; });

















var SECTION_ITEM_GROUPID = '19ede092-2988-4759-9b2f-5396b160ce68';
var CanvasStoreEditActions_CanvasStoreEditActions =  (function () {
    function CanvasStoreEditActions() {
    }
    CanvasStoreEditActions._isWebPartSerializationV1Enabled = function () {
        return sp_core_library_["_SPFlight"].isEnabled(974 );
    };
    CanvasStoreEditActions.openToolbox = function (canvasFields, type, position, verticalPosition, horizontalPosition, onClose) {
        if (canvasFields.toolboxProps &&
            Object(sp_lodash_subset_["isEqual"])(canvasFields.toolboxProps.position, position) 
        ) {
            CanvasStoreEditActions.closeToolbox(canvasFields);
        }
        else {
            ComponentPerfLogger["a" /* ComponentPerfLogger */].getInstance().start('ToolboxRender', 'ToolboxComponentDownload');
            var items = [];
            var errorMessage = void 0;
            try {
                items = CanvasStoreEditActions.getToolboxItems(canvasFields, type, position);
            }
            catch (e) {
                errorMessage = CanvasStrings_resx["a" /* default */].ToolboxErrorMessage;
            }
            canvasFields.toolboxProps = {
                type: type,
                items: items,
                errorMessage: errorMessage,
                position: position,
                verticalPosition: verticalPosition,
                horizontalPosition: horizontalPosition,
                isOpen: true,
                onClose: function () { return setTimeout(function () {
                    if (canvasFields.toolboxProps && Object(sp_lodash_subset_["isEqual"])(canvasFields.toolboxProps.position, position)) {
                        canvasFields.toolboxProps = undefined;
                        if (onClose) {
                            onClose();
                        }
                    }
                }); },
                onClickItem: function (itemProps) { return CanvasStoreEditActions.handleToolboxItemClick(canvasFields, itemProps); }
            };
            canvasFields.deferredOpenCallback = function (toolbox) { return setTimeout(function () {
                ComponentPerfLogger["a" /* ComponentPerfLogger */].getInstance().markStage('ToolboxRender', 'ToolboxChunkDownload');
                if (type === "Section" ) {
                    toolbox.openSectionToolbox(position, verticalPosition, horizontalPosition);
                }
                else {
                    toolbox.openToolbox(position, verticalPosition, horizontalPosition);
                }
            }); };
            canvasFields.render();
        }
    };
    CanvasStoreEditActions.closeToolbox = function (canvasFields) {
        canvasFields.toolboxProps = undefined;
        canvasFields.render();
    };
    CanvasStoreEditActions.handleConfigureButtonClicked = function (canvasFields, id) {
        sp_diagnostics_["_EngagementLogger"].logEvent(CanvasStoreEditActions.getEventName('ConfigureControl'));
        var isCurrentlySelected = canvasFields.selectedControlIdInternal === id;
        var controlComponent = canvasStore["b" /* CanvasStoreCommonActions */].getControlComponentById(canvasFields, id);
        if (controlComponent) {
            controlComponent.handleConfigureButtonClicked(isCurrentlySelected);
            canvasFields.selectedControlIdInternal = id;
            canvasFields.editedZoneIndex = undefined; 
            canvasFields.render();
        }
    };
    CanvasStoreEditActions.handleDuplicateControlButtonClicked = function (canvasFields, id) {
        sp_diagnostics_["_EngagementLogger"].logEvent(CanvasStoreEditActions.getEventName('DuplicateControl'));
        var duplicateControlData = CanvasStoreEditActions._cloneControl(canvasFields.canvasLayout.fetchControlComponentById(id));
        var newLayoutIndex = CanvasLayout["a" /* CanvasLayout */].generateNewLayoutIndex(canvasFields.canvasLayout
            .fetchZone(duplicateControlData.position.zoneIndex)
            .fetchAllControls()
            .map(function (control) {
            return { index: control.position.controlIndex };
        }), duplicateControlData.position.controlIndex, true);
        duplicateControlData.position = tslib_es6["__assign"]({}, duplicateControlData.position, { controlIndex: newLayoutIndex });
        canvasStore["b" /* CanvasStoreCommonActions */].addControlToCanvas(canvasFields, duplicateControlData, true);
    };
    CanvasStoreEditActions.handleDuplicateZoneButtonClicked = function (canvasFields, id) {
        sp_diagnostics_["_EngagementLogger"].logEvent(CanvasStoreEditActions.getEventName('DuplicateZone'));
        var originalZone = canvasFields.canvasLayout.fetchZone(+id);
        var newLayoutIndex = CanvasLayout["a" /* CanvasLayout */].generateNewLayoutIndex(canvasFields.canvasLayout.zones, originalZone.index, true);
        originalZone.fetchAllControls(true).forEach(function (control) {
            var duplicateControlData = CanvasStoreEditActions._cloneControl(canvasFields.canvasLayout.fetchControlComponentById(control.id));
            duplicateControlData.position = tslib_es6["__assign"]({}, duplicateControlData.position, { zoneIndex: newLayoutIndex });
            canvasStore["b" /* CanvasStoreCommonActions */].addControlToCanvas(canvasFields, duplicateControlData, false);
        });
        canvasFields.render();
    };
    CanvasStoreEditActions.handleConfigureZoneButtonClicked = function (canvasFields, id, zoneFocusHandler) {
        sp_diagnostics_["_EngagementLogger"].logEvent(CanvasStoreEditActions.getEventName('ConfigureZone'));
        var isCurrentlySelected = canvasFields.editedZoneIndex === id;
        void canvasFields.propertyPaneLoader
            .propertyPane
            .then(function (propertyPaneController) {
            propertyPaneController.requestAction(id, isCurrentlySelected ? 3  : 1 );
        });
        canvasFields.editedZoneIndex = id;
        canvasFields.editedZoneFocusHandler = zoneFocusHandler;
    };
    CanvasStoreEditActions.handleDeleteControlButtonClicked = function (canvasFields, layout) {
        sp_diagnostics_["_EngagementLogger"].logEvent(CanvasStoreEditActions.getEventName('DeleteControl'));
        canvasFields.positionCandidateForDeletion = layout;
        var selectedControl = canvasFields.getControl(canvasFields.positionCandidateForDeletion);
        canvasFields.selectedControlIdInternal = selectedControl.id;
        void canvasFields.propertyPaneLoader
            .propertyPane
            .then(function (propertyPaneController) {
            var consumerId = selectedControl.controlType === CanvasControlType["a" /* CanvasControlType */].WebPartZone
                ? canvasFields.selectedControlIdInternal
                : undefined;
            propertyPaneController.requestAction(consumerId);
        });
        CanvasStoreEditActions._openDialogMessage(canvasFields, CanvasStrings_resx["a" /* default */].DeleteConfirmationDialogTitle, CanvasStrings_resx["a" /* default */].DeleteConfirmationDialogMessage, CanvasStoreEditActions.handleDeleteControlDialogConfirmation.bind(CanvasStoreEditActions, canvasFields), CanvasStoreEditActions.handleDeleteControlDialogDismiss.bind(CanvasStoreEditActions, canvasFields), true);
    };
    CanvasStoreEditActions.handleDeleteControlDialogConfirmation = function (canvasFields) {
        var qos = canvasStore["b" /* CanvasStoreCommonActions */].createQosScope('DeleteWebPart');
        var selectedControl;
        try {
            selectedControl = canvasFields.getControl(canvasFields.positionCandidateForDeletion);
            if (selectedControl.controlType === CanvasControlType["a" /* CanvasControlType */].WebPartZone) {
                var controlComponent = canvasStore["b" /* CanvasStoreCommonActions */].getControlComponentById(canvasFields, selectedControl.id, selectedControl.position);
                controlComponent.handleDeleteButtonClicked();
            }
            CanvasStoreEditActions.closeDialogMessage(canvasFields, false, CanvasStrings_resx["a" /* default */].WebPartAriaLabel);
            var qosData = void 0;
            if (!sp_core_library_["_SPKillSwitch"].isActivated(sp_core_library_["Guid"].parse('c2f3c612-9a07-441d-ab4e-f06d2b5268af'), '02/26/2019', 'Log web part delete extra info.')) {
                var control = canvasFields.getControl(canvasFields.positionCandidateForDeletion);
                if (control && CanvasControlType["a" /* CanvasControlType */].WebPartZone === control.controlType) {
                    var webPartData = control.webPartData;
                    qosData = { alias: webPartData.id };
                }
            }
            CanvasStoreEditActions.deleteControl(canvasFields, canvasFields.positionCandidateForDeletion);
            qos.writeSuccess(qosData);
        }
        catch (err) {
            canvasStore["b" /* CanvasStoreCommonActions */].handleMonitoredException(qos, err, selectedControl);
        }
    };
    CanvasStoreEditActions.deleteControl = function (canvasFields, layout) {
        canvasFields.deletedControlLayout = layout;
        var control = canvasFields.getControl(canvasFields.deletedControlLayout);
        if (control && CanvasControlType["a" /* CanvasControlType */].WebPartZone === control.controlType) {
            canvasFields.webPartsCount--;
            var webPartData = control.webPartData;
            if (webPartData && canvasStore["c" /* EUPL_APPROVED_WEB_PARTS */].has(webPartData.id)) {
                canvasFields.euplApprovedWebpartCount--;
            }
        }
        canvasFields.canvasLayout.removeControl(canvasFields.deletedControlLayout);
        if (canvasFields.canvasControls.length === 0) {
            void canvasFields.propertyPaneLoader
                .propertyPane
                .then(function (propertyPaneController) {
                propertyPaneController.requestAction(undefined, 2 );
            });
        }
        canvasFields.render();
        canvasStore["b" /* CanvasStoreCommonActions */].notifyChanged(canvasFields);
    };
    CanvasStoreEditActions.handleDeleteControlDialogDismiss = function (canvasFields) {
        canvasFields.positionCandidateForDeletion = undefinedControlPosition["a" /* undefinedControlPosition */];
        CanvasStoreEditActions.closeDialogMessage(canvasFields, true);
    };
    CanvasStoreEditActions.handleDeleteZoneButtonClicked = function (canvasFields, layout) {
        sp_diagnostics_["_EngagementLogger"].logEvent(CanvasStoreEditActions.getEventName('DeleteZone'));
        canvasFields.zoneDeleteQos = canvasStore["b" /* CanvasStoreCommonActions */].createQosScope('DeleteZone');
        canvasFields.selectedControlIdInternal = undefined;
        canvasFields.positionCandidateForDeletion = layout;
        CanvasStoreEditActions._openDialogMessage(canvasFields, CanvasStrings_resx["a" /* default */].DeleteConfirmationDialogTitle, CanvasStrings_resx["a" /* default */].DeleteZoneConfirmationDialogMessage, CanvasStoreEditActions.handleDeleteZoneDialogConfirmation.bind(CanvasStoreEditActions, canvasFields), CanvasStoreEditActions.handleDeleteZoneDialogDismiss.bind(CanvasStoreEditActions, canvasFields), true);
    };
    CanvasStoreEditActions.handleDeleteZoneDialogConfirmation = function (canvasFields) {
        try {
            canvasFields.canvasLayout.removeZone(canvasFields.positionCandidateForDeletion.zoneIndex);
            CanvasStoreEditActions.closeDialogMessage(canvasFields, true, CanvasStrings_resx["a" /* default */].SectionAriaLabel);
            canvasFields.zoneDeleteQos.writeSuccess();
        }
        catch (err) {
            canvasStore["b" /* CanvasStoreCommonActions */].handleMonitoredException(canvasFields.zoneDeleteQos, err);
        }
    };
    CanvasStoreEditActions.handleDeleteZoneDialogDismiss = function (canvasFields) {
        try {
            canvasFields.positionCandidateForDeletion = undefinedControlPosition["a" /* undefinedControlPosition */];
            CanvasStoreEditActions.closeDialogMessage(canvasFields, true);
            canvasFields.zoneDeleteQos.writeSuccess();
        }
        catch (err) {
            canvasStore["b" /* CanvasStoreCommonActions */].handleMonitoredException(canvasFields.zoneDeleteQos, err);
        }
    };
    CanvasStoreEditActions.closeDialogMessage = function (canvasFields, shouldRender, label) {
        canvasFields.dialogProps.isOpen = false;
        if (canvasFields.positionCandidateForDeletion &&
            canvasFields.positionCandidateForDeletion !== undefinedControlPosition["a" /* undefinedControlPosition */]) {
            canvasFields.dialogProps.elementToFocusOnDismiss = CanvasStoreEditActions._findHintBeforePosition(canvasFields);
        }
        if (shouldRender) {
            canvasFields.render();
        }
        if (label) {
            var confirmationMessage = lib["StringHelper"].format(CanvasStrings_resx["a" /* default */].DeleteConfirmationLabel, label);
            canvasFields.a11yManager.alert(confirmationMessage);
        }
    };
    CanvasStoreEditActions.handleToolboxItemClick = function (canvasFields, itemProps) {
        var qos = canvasStore["b" /* CanvasStoreCommonActions */].createQosScope('ToolboxItemClicked');
        var isZone = !(itemProps.controlType === CanvasControlType["a" /* CanvasControlType */].RTE || itemProps.controlType === CanvasControlType["a" /* CanvasControlType */].WebPartZone);
        if (canvasFields.displayMode === sp_core_library_["DisplayMode"].Edit) {
            canvasFields.selectedControlIdInternal = itemProps.id = sp_core_library_["Guid"].newGuid().toString();
            canvasStore["b" /* CanvasStoreCommonActions */].addControlToCanvas(canvasFields, itemProps);
            if (isZone) {
                canvasFields.selectedZoneIndex = itemProps.position.zoneIndex;
            }
            canvasFields.render();
            canvasStore["b" /* CanvasStoreCommonActions */].notifyChanged(canvasFields);
            CanvasStoreEditActions.closeToolbox(canvasFields);
            qos.writeSuccess();
        }
        else {
            qos.writeUnexpectedFailure('ReadMode');
        }
    };
    CanvasStoreEditActions.getToolBoxItem = function (canvasFields, id) {
        var toolboxItems = CanvasStoreEditActions
            .getToolboxItems(canvasFields, "WebPart" , undefinedControlPosition["a" /* undefinedControlPosition */]);
        var currentIndex = Object(sp_lodash_subset_["findIndex"])(toolboxItems, function (toolboxItem) {
            return id === toolboxItem.itemProps.webPartId;
        });
        if (currentIndex !== -1) {
            return Object(sp_lodash_subset_["clone"])(toolboxItems[currentIndex].itemProps);
        }
        return undefined;
    };
    CanvasStoreEditActions.pollActiveElement = function (canvasFields) {
        var activeElement = document.activeElement;
        if (activeElement && activeElement.tagName !== 'IFRAME') {
            window.clearInterval(canvasFields.pollId);
        }
        else if (canvasFields.oldActiveElement !== activeElement && canvasFields.hoveredControlId) {
            canvasFields.oldActiveElement = activeElement;
            canvasFields.selectedControlIdInternal = canvasFields.hoveredControlId;
        }
    };
    CanvasStoreEditActions.scrollIntoView = function (canvasFields, type, element, duration, margin, allowScrollUp) {
        if (margin === void 0) { margin = 0; }
        if (!canvasFields.scrollableParent || !element) {
            return;
        }
        var parentClientRect = canvasFields.scrollableParent.getBoundingClientRect();
        var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var frameBottom = Math.min(viewportHeight, parentClientRect.bottom);
        var elementClientRect = element.getBoundingClientRect();
        if ((type === 'partial' ? elementClientRect.bottom : elementClientRect.top) > frameBottom ||
            (allowScrollUp && frameBottom > elementClientRect.top)) {
            CanvasStoreEditActions._scrollElementIntoView(canvasFields, frameBottom, element, duration, margin, parentClientRect, elementClientRect);
        }
    };
    CanvasStoreEditActions.reclaimFocus = function (canvasFields) {
        var selectedControlId = canvasFields.selectedControlIdInternal;
        if (selectedControlId) {
            var controlComponent = canvasStore["b" /* CanvasStoreCommonActions */].getControlComponentById(canvasFields, selectedControlId);
            if (controlComponent) {
                controlComponent.focus();
            }
        }
        else if (canvasFields.editedZoneIndex && canvasFields.editedZoneFocusHandler) {
            canvasFields.editedZoneFocusHandler();
        }
    };
    CanvasStoreEditActions.handleWindowBlur = function (canvasFields, e) {
        if (canvasFields.displayMode === sp_core_library_["DisplayMode"].Edit &&
            canvasFields.hoveredControlId &&
            document.activeElement &&
            document.activeElement.tagName === 'IFRAME') {
            canvasFields.selectedControlIdInternal = canvasFields.hoveredControlId;
            canvasFields.oldActiveElement = document.activeElement;
            window.clearInterval(canvasFields.pollId);
            canvasFields.pollId = window.setInterval(CanvasStoreEditActions.pollActiveElement.bind(CanvasStoreEditActions, canvasFields), 250);
        }
    };
    CanvasStoreEditActions.getEventName = function (eventName) {
        return "Canvas." + eventName + ".Click";
    };
    CanvasStoreEditActions.getSectionToolboxItems = function (canvasFields, position) {
        var items = [
            {
                description: CanvasStrings_resx["a" /* default */].ToolboxOneColumnPart,
                displayName: CanvasStrings_resx["a" /* default */].ToolboxOneColumnPart,
                itemProps: CanvasStoreEditActions._createSectionItemProps(CanvasControlType["a" /* CanvasControlType */].OneColumn, position),
                key: 'SingleColumnSectionToolboxItem',
                msIconName: 'SingleColumn',
                groupId: SECTION_ITEM_GROUPID
            },
            {
                description: CanvasStrings_resx["a" /* default */].ToolboxTwoColumnPart,
                displayName: CanvasStrings_resx["a" /* default */].ToolboxTwoColumnPart,
                itemProps: CanvasStoreEditActions._createSectionItemProps(CanvasControlType["a" /* CanvasControlType */].TwoColumns, position),
                key: 'DoubleColumnSectionToolboxItem',
                msIconName: 'DoubleColumn',
                groupId: SECTION_ITEM_GROUPID
            },
            {
                description: CanvasStrings_resx["a" /* default */].ToolboxThreeColumnPart,
                displayName: CanvasStrings_resx["a" /* default */].ToolboxThreeColumnPart,
                itemProps: CanvasStoreEditActions._createSectionItemProps(CanvasControlType["a" /* CanvasControlType */].ThreeColumns, position),
                key: 'TripleColumnSectionToolboxItem',
                msIconName: 'TripleColumn',
                groupId: SECTION_ITEM_GROUPID
            },
            {
                description: CanvasStrings_resx["a" /* default */].ToolboxOneThirdLeftColumnPart,
                displayName: CanvasStrings_resx["a" /* default */].ToolboxOneThirdLeftColumnPart,
                itemProps: CanvasStoreEditActions._createSectionItemProps(CanvasControlType["a" /* CanvasControlType */].OneThirdColumnLeft, position),
                key: 'ColumnRightTwoThirdsSectionToolboxItem',
                msIconName: 'ColumnRightTwoThirds',
                groupId: SECTION_ITEM_GROUPID
            },
            {
                description: CanvasStrings_resx["a" /* default */].ToolboxOneThirdRightColumnPart,
                displayName: CanvasStrings_resx["a" /* default */].ToolboxOneThirdRightColumnPart,
                itemProps: CanvasStoreEditActions._createSectionItemProps(CanvasControlType["a" /* CanvasControlType */].OneThirdColumnRight, position),
                key: 'ColumnLeftTwoThirdsSectionToolboxItem',
                msIconName: 'ColumnLeftTwoThirds',
                groupId: SECTION_ITEM_GROUPID
            }
        ];
        if (canvasFields.siteSupportsFullWidth) {
            items.push({
                description: !canvasFields.canAddFullWidthSection ? CanvasStrings_resx["a" /* default */].ToolboxFullWidthColumnTooltipText : '',
                displayName: CanvasStrings_resx["a" /* default */].ToolboxFullWidthColumnPart,
                itemProps: CanvasStoreEditActions._createSectionItemProps(CanvasControlType["a" /* CanvasControlType */].FullWidth, position),
                key: 'FullWidthSectionToolboxItem',
                msIconName: 'FullWidth',
                groupId: SECTION_ITEM_GROUPID,
                disabled: !canvasFields.canAddFullWidthSection
            });
        }
        if (Flights["a" /* Flights */].isCanvasVerticalSectionCreationFlightEnabled()) {
            items.push({
                description: !canvasFields.canAddVerticalSection ? CanvasStrings_resx["a" /* default */].ToolboxVerticalColumnToolTipText : '',
                displayName: CanvasStrings_resx["a" /* default */].ToolboxVerticalColumnPart,
                itemProps: this._createSectionItemProps(CanvasControlType["a" /* CanvasControlType */].OneColumn, CanvasStoreEditActions._verticalSectionToolboxPosition),
                key: 'VerticalSectionToolboxItem',
                msIconName: 'ColumnVerticalSection',
                groupId: SECTION_ITEM_GROUPID,
                disabled: !canvasFields.canAddVerticalSection
            });
        }
        return items;
    };
    CanvasStoreEditActions.getToolboxItems = function (canvasFields, type, position) {
        if (type === "Section" ) {
            return CanvasStoreEditActions.getSectionToolboxItems(canvasFields, position);
        }
        var qos = canvasStore["b" /* CanvasStoreCommonActions */].createQosScope('LoadWebPartsInToolbox');
        try {
            var toolboxItems_1 = [];
            canvasStore["b" /* CanvasStoreCommonActions */].getManifestMap(canvasFields).forEach(
            function (manifest, cid) {
                if (shouldExcludeFromToolbox(manifest, canvasFields.pageContext)) {
                    return;
                }
                var i = 0;
                for (var _i = 0, _a = manifest.preconfiguredEntries; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    var itemProps = {
                        controlType: CanvasControlType["a" /* CanvasControlType */].WebPartZone,
                        displayMode: sp_core_library_["DisplayMode"].Edit,
                        id: undefined,
                        position: undefinedControlPosition["a" /* undefinedControlPosition */],
                        webPartId: cid,
                        webPartData: CanvasStoreEditActions._extractWebPartData(manifest, entry),
                        webPartManifest: manifest
                    };
                    var iconUrl = entry.iconImageUrl;
                    if (iconUrl && !sp_core_library_["UrlUtilities"].isDataUrl(iconUrl)) {
                        iconUrl = sp_core_library_["UrlUtilities"].resolve(iconUrl, manifest.loaderConfig.internalModuleBaseUrls[0]);
                    }
                    var displayName = entry.title.default;
                    if (Flights["a" /* Flights */].isYammerToolboxRenameFlightEnabled() &&
                        itemProps.webPartManifest &&
                        itemProps.webPartManifest.id === '31e9537e-f9dc-40a4-8834-0e3b7df418bc') {
                        displayName = CanvasStrings_resx["a" /* default */].YammerHighlightsWebpartTitle;
                    }
                    var toolboxItem = {
                        itemProps: itemProps,
                        description: entry.description.default,
                        displayName: displayName,
                        msIconName: entry.officeFabricIconFontName,
                        imageSrc: iconUrl,
                        key: manifest.id + "_" + i++,
                        groupId: entry.groupId
                    };
                    if (type !== "FullWidth"  || canvasSection["a" /* CanvasFullWidthSection */].isFullWidthControl(itemProps)) {
                        toolboxItems_1.push(toolboxItem);
                    }
                }
            });
            qos.writeSuccess();
            return toolboxItems_1;
        }
        catch (err) {
            canvasStore["b" /* CanvasStoreCommonActions */].handleMonitoredException(qos, err);
            return [];
        }
    };
    CanvasStoreEditActions._extractWebPartData = function (manifest, 
    entry 
    ) {
        var webPartData = {
            id: manifest.id,
            instanceId: undefined,
            title: entry.title.default,
            description: entry.description.default,
            dataVersion: entry.dataVersion,
            properties: entry.properties
        };
        return webPartData;
    };
    CanvasStoreEditActions._createSectionItemProps = function (controlType, position) {
        return {
            controlType: controlType,
            position: position,
            displayMode: sp_core_library_["DisplayMode"].Edit,
            id: undefined 
        };
    };
    CanvasStoreEditActions._scroll = function (canvasFields, start, end, duration, time) {
        if (time === void 0) { time = 0; }
        var diff = end - start;
        var deltaTime = 20;
        if (time < duration) {
            requestAnimationFrame(function () {
                time += deltaTime;
                canvasFields.scrollableParent.scrollTop = CanvasStoreEditActions._calculateEasing(time, start, diff, duration);
                CanvasStoreEditActions._scroll(canvasFields, start, end, duration, time);
            });
        }
    };
    CanvasStoreEditActions._scrollElementIntoView = function (canvasFields, frameBottom, element, duration, margin, parentClientRect, elementClientRect) {
        var scrollPosition = elementClientRect.bottom - canvasFields.canvasElement.getBoundingClientRect().top;
        var frameTop = Math.max(0, parentClientRect.top);
        var offset = frameTop - frameBottom + canvasFields.scrollThreshold + margin;
        var newScrollTop = scrollPosition + offset + canvasFields.scrollThreshold;
        CanvasStoreEditActions._scroll(canvasFields, canvasFields.scrollableParent.scrollTop, newScrollTop, duration);
    };
    CanvasStoreEditActions._findHintBeforePosition = function (canvasFields) {
        var position = canvasFields.positionCandidateForDeletion;
        var isZone = position.controlIndex === undefined && position.zoneIndex !== undefined;
        var elementToDelete;
        if (isZone) {
            elementToDelete = canvasFields.a11yManager.getElementByA11yId(Object(CanvasA11yConstants["b" /* getCanvasZoneA11yId */])(position.zoneIndex.toString()));
        }
        else {
            var control = Flights["a" /* Flights */].isCanvasVerticalSectionFlightEnabled()
                ? canvasFields.getControl(position)
                : canvasFields.canvasLayout.fetchControl(position);
            elementToDelete = control
                ? canvasFields.a11yManager.getElementByA11yId(Object(CanvasA11yConstants["c" /* getControlZoneA11yId */])(control.id))
                : undefined;
        }
        if (elementToDelete) {
            var hints = canvasFields.a11yManager.getElementsByA11yClass(CanvasA11yConstants["a" /* canvasA11yClasses */].toolboxHint);
            for (var i = 0; i < hints.length - 1; i++) {
                var isHintBeforeZone = (elementToDelete.compareDocumentPosition(hints[i]) & Node.DOCUMENT_POSITION_PRECEDING) !== 0;
                var isNextHintAfterZone = (elementToDelete.compareDocumentPosition(hints[i + 1]) &
                    (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY)) !==
                    0;
                if (isHintBeforeZone && isNextHintAfterZone) {
                    return hints[i];
                }
            }
        }
        return undefined;
    };
    CanvasStoreEditActions._openDialogMessage = function (canvasFields, title, message, onConfirmation, onDismiss, shouldRender) {
        canvasFields.dialogProps = {
            message: message,
            onConfirmation: onConfirmation,
            onDismiss: onDismiss,
            title: title,
            isOpen: true
        };
        if (shouldRender) {
            canvasFields.render();
        }
    };
    CanvasStoreEditActions._calculateEasing = function (time, start, diff, duration) {
        time /= duration / 2;
        if (time < 1) {
            return (diff / 2) * time * time + start;
        }
        else {
            --time;
            return (-diff / 2) * (time * (time - 2) - 1) + start;
        }
    };
    CanvasStoreEditActions._cloneControl = function (control) {
        var duplicateControlData = control.serialize();
        duplicateControlData.addedFromPersistedData = true;
        var newId = sp_core_library_["Guid"].newGuid().toString();
        duplicateControlData.id = newId;
        if (duplicateControlData.controlType === CanvasControlType["a" /* CanvasControlType */].WebPartZone) {
            duplicateControlData.webPartData.instanceId = newId;
        }
        return duplicateControlData;
    };
    CanvasStoreEditActions._verticalSectionToolboxPosition = Object(canvasComponent["b" /* CreateEmptyZoneLayout */])(1, 
    1, 
    undefined, 
    CanvasLayout["a" /* CanvasLayout */].verticalLayoutIndex);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "openToolbox", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "closeToolbox", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "handleConfigureButtonClicked", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "handleDuplicateControlButtonClicked", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "handleDuplicateZoneButtonClicked", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "handleConfigureZoneButtonClicked", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "handleDeleteControlButtonClicked", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "handleDeleteControlDialogConfirmation", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "deleteControl", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "handleDeleteControlDialogDismiss", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "handleDeleteZoneButtonClicked", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "handleDeleteZoneDialogConfirmation", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "handleDeleteZoneDialogDismiss", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "handleToolboxItemClick", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "pollActiveElement", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "scrollIntoView", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "reclaimFocus", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], CanvasStoreEditActions, "handleWindowBlur", null);
    return CanvasStoreEditActions;
}());



/***/ })

});
//# sourceMappingURL=9.9_fab14dbb23ab1cd66948.js.map