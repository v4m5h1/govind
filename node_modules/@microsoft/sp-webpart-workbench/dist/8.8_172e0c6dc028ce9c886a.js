webpackJsonp8be81a5c_af38_4bb2_af97_afa3b64dfbed_1_8_2([8],{

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: external "@microsoft/office-ui-fabric-react-bundle"
var office_ui_fabric_react_bundle_ = __webpack_require__(1);
var office_ui_fabric_react_bundle__default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_bundle_);

// EXTERNAL MODULE: external "@microsoft/sp-lodash-subset"
var sp_lodash_subset_ = __webpack_require__(12);
var sp_lodash_subset__default = /*#__PURE__*/__webpack_require__.n(sp_lodash_subset_);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@ms/odsp-utilities-bundle/5.0.3/node_modules/@ms/odsp-utilities-bundle/lib/index.js
var lib = __webpack_require__(10);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-a11y/lib/index.js + 7 modules
var sp_a11y_lib = __webpack_require__(15);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/libraries/sp-dragzone/lib/css/DragZone.module.scss.js
var DragZone_module_scss = __webpack_require__(122);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-dragzone/lib/DragZoneKeyboard.js






var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["Enter"] = 13] = "Enter";
    KeyCodes[KeyCodes["Escape"] = 27] = "Escape";
    KeyCodes[KeyCodes["Space"] = 32] = "Space";
    KeyCodes[KeyCodes["LeftArrow"] = 37] = "LeftArrow";
    KeyCodes[KeyCodes["UpArrow"] = 38] = "UpArrow";
    KeyCodes[KeyCodes["RightArrow"] = 39] = "RightArrow";
    KeyCodes[KeyCodes["DownArrow"] = 40] = "DownArrow";
})(KeyCodes || (KeyCodes = {}));
var DRAG_ZONE = 'DragZone';
var DragZoneKeyboard_DragZoneKeyboard =  (function () {
    function DragZoneKeyboard(options) {
        var _this = this;
        this._isMovingForward = false;
        options.strings = options.strings || {
            handleTitle: '',
            moveStarted: '',
            moveComplete: '',
            moveCancelled: '',
            moveNotAllowed: '',
            moveInsideLevel: []
        }; 
        this._options = options;
        var handles = options.handles;
        var host = options.host, strings = options.strings;
        if (handles) {
            handles.forEach(function (handle) {
                handle.addEventListener('keydown', _this._viewModeKeyDown);
                handle.title = strings.handleTitle;
            });
        }
        else {
            host.addEventListener('keydown', this._viewModeKeyDown);
            handles = [];
        }
    }
    DragZoneKeyboard.prototype.dispose = function () {
        var _this = this;
        var _a = this._options, handles = _a.handles, host = _a.host;
        if (handles) {
            handles.forEach(function (handle) {
                handle.removeEventListener('keydown', _this._viewModeKeyDown);
            });
        }
        else {
            host.removeEventListener('keydown', this._viewModeKeyDown);
        }
    };
    DragZoneKeyboard.prototype.addHandles = function (handles) {
        var _this = this;
        handles.forEach(function (handle) {
            handle.addEventListener('keydown', _this._viewModeKeyDown);
            handle.title = _this._options.strings.handleTitle;
            _this._options.handles.push(handle);
        });
    };
    DragZoneKeyboard.prototype._viewModeKeyDown = function (evt) {
        var _a = this._options, disallowedTag = _a.disallowedTag, disallowedClassName = _a.disallowedClassName, changeIconVisibility = _a.changeIconVisibility, onMoveStart = _a.onMoveStart, moveIcon = _a.moveIcon, removeLine = _a.removeLine, strings = _a.strings, host = _a.host, tree = _a.tree;
        if (!this._isMoving && (evt.keyCode === KeyCodes.Enter || evt.keyCode === KeyCodes.Space)) {
            this._isMoving = true;
            sp_a11y_lib["d" /* ScreenReader */].alert(DRAG_ZONE, strings.moveStarted);
            host.addEventListener('keydown', this._moveModeKeyDown);
            this._draggedElement = tree.getLeafElementFromHandle(evt.target);
            this._draggedPosition = tree.getHoverOverItemPosition(this._draggedElement);
            this._treeMatrix = tree.refreshPositionMatrix();
            this._currentLocationIndex = tree.getIndexInPositionMatrix(this._draggedPosition);
            if (disallowedTag && disallowedClassName) {
                tree.addDisallowedStyles(disallowedTag, disallowedClassName, this._draggedElement);
            }
            if (onMoveStart) {
                onMoveStart(this._draggedPosition);
            }
            var iconPosition = this._getIconPosition(this._draggedElement);
            if (iconPosition) {
                moveIcon(iconPosition.iconLeft, iconPosition.iconTop);
            }
            changeIconVisibility(true);
            evt.stopPropagation();
            evt.preventDefault();
        }
        else if (evt.keyCode === KeyCodes.Escape) {
            removeLine();
            changeIconVisibility(false);
            sp_a11y_lib["d" /* ScreenReader */].alert(DRAG_ZONE, strings.moveCancelled);
            this._isMoving = false;
            this._setFocusOnHandle(this._draggedElement);
            host.removeEventListener('keydown', this._moveModeKeyDown);
            this._removeStylesFromDisallowedArea();
        }
    };
    DragZoneKeyboard.prototype._moveModeKeyDown = function (evt) {
        var _a = this._options, removeLine = _a.removeLine, host = _a.host, moveItem = _a.moveItem, strings = _a.strings, supportHorizontalReorder = _a.supportHorizontalReorder, tree = _a.tree, disallowedTag = _a.disallowedTag, changeIconVisibility = _a.changeIconVisibility;
        if (evt.keyCode === KeyCodes.Enter) {
            removeLine();
            changeIconVisibility(false);
            if (tree.isDragAllowed(this._draggedElement, this._dropOverElement, disallowedTag)) {
                moveItem(this._draggedPosition, this._dropPosition);
                var draggedElement = tree.getElementFromPosition(this._dropPosition, true);
                sp_a11y_lib["d" /* ScreenReader */].alert(DRAG_ZONE, lib["StringHelper"].format(strings.moveComplete, this._formatFullPosition(this._draggedPosition), this._formatFullPosition(this._dropPosition)));
                this._setFocusOnHandle(draggedElement);
            }
            else {
                sp_a11y_lib["d" /* ScreenReader */].alert(DRAG_ZONE, strings.moveNotAllowed);
            }
            this._isMoving = false;
            var dropPosition = Object(sp_lodash_subset_["clone"])(this._dropPosition);
            if (this._isMovingForward && dropPosition && !dropPosition[1] && !dropPosition[2]) {
                dropPosition[0]--;
            }
            var newDraggedElement = tree.getElementFromPosition(dropPosition, true);
            sp_a11y_lib["d" /* ScreenReader */].alert(DRAG_ZONE, lib["StringHelper"].format(strings.moveComplete, this._formatFullPosition(this._draggedPosition), this._formatFullPosition(this._dropPosition)));
            this._setFocusOnHandle(newDraggedElement);
            host.removeEventListener('keydown', this._moveModeKeyDown);
            this._removeStylesFromDisallowedArea();
        }
        else if (evt.keyCode === KeyCodes.DownArrow ||
            supportHorizontalReorder && KeyCodes.RightArrow === Object(office_ui_fabric_react_bundle_["getRTLSafeKeyCode"])(evt.keyCode)) {
            this._moveForward();
            this._isMovingForward = true;
        }
        else if (evt.keyCode === KeyCodes.UpArrow ||
            supportHorizontalReorder && KeyCodes.LeftArrow === Object(office_ui_fabric_react_bundle_["getRTLSafeKeyCode"])(evt.keyCode)) {
            this._moveBack();
            this._isMovingForward = false;
        }
        evt.stopPropagation();
        evt.preventDefault();
    };
    DragZoneKeyboard.prototype._removeStylesFromDisallowedArea = function () {
        var _a = this._options, disallowedTag = _a.disallowedTag, disallowedClassName = _a.disallowedClassName, tree = _a.tree;
        if (disallowedTag && disallowedClassName) {
            tree.applyRemoveCssToDataDragDisallowed(disallowedTag, false, disallowedClassName);
        }
    };
    DragZoneKeyboard.prototype._setFocusOnHandle = function (element) {
        var _a = this._options, handleTag = _a.handleTag, tree = _a.tree;
        var dragHandle = tree.getHandleFromLeafElement(element, handleTag);
        if (dragHandle) {
            var tabIndex = dragHandle.getAttribute('tabindex');
            if (tabIndex !== '0') {
                dragHandle.setAttribute('tabindex', '0');
                dragHandle.focus();
                if (!isNaN(+tabIndex)) {
                    dragHandle.setAttribute('tabindex', tabIndex);
                }
            }
            else {
                dragHandle.focus();
            }
        }
    };
    DragZoneKeyboard.prototype._moveForward = function () {
        var _a = this._options, tree = _a.tree, moveLine = _a.moveLine, strings = _a.strings, scrollIntoView = _a.scrollIntoView, moveIcon = _a.moveIcon, onMoving = _a.onMoving, disallowedTag = _a.disallowedTag;
        var line;
        if (this._currentLocationIndex < this._treeMatrix.length - 1) {
            var newIndex = this._currentLocationIndex + 1;
            var newTentativeElement = tree.getElementFromPosition(this._treeMatrix[newIndex]);
            this._dropPosition = Object(sp_lodash_subset_["clone"])(this._treeMatrix[newIndex]);
            this._dropOverElement = newTentativeElement && newTentativeElement.parentElement;
            if (!tree.isLeafElement(newTentativeElement)) {
                this._dropPosition[0]++;
                line = moveLine(newTentativeElement, false, false, true);
                this._currentLocationIndex++;
                sp_a11y_lib["d" /* ScreenReader */].alert(DRAG_ZONE, this._formatFullPosition(this._dropPosition));
            }
            else {
                if (this._indexNotChanged) {
                    this._indexNotChanged = false;
                    this._dropPosition[0]++;
                    line = moveLine(newTentativeElement, true, false, true);
                    this._currentLocationIndex++;
                    sp_a11y_lib["d" /* ScreenReader */].alert(DRAG_ZONE, this._formatPosition(this._dropPosition));
                }
                else if (this._upperLevelChange(this._treeMatrix[this._currentLocationIndex], this._treeMatrix[newIndex])) {
                    line = moveLine(newTentativeElement, true, true, true);
                    this._indexNotChanged = true;
                    sp_a11y_lib["d" /* ScreenReader */].alert(DRAG_ZONE, this._formatFullPosition(this._dropPosition));
                }
                else {
                    line = moveLine(newTentativeElement, true, true, true);
                    this._currentLocationIndex++;
                    sp_a11y_lib["d" /* ScreenReader */].alert(DRAG_ZONE, this._formatPosition(this._dropPosition));
                }
            }
            scrollIntoView('partial', line, 500, 0);
            var iconPosition = this._getIconPosition(line);
            if (iconPosition) {
                if (onMoving) {
                    onMoving(!tree.isDragAllowed(this._draggedElement, this._dropOverElement, disallowedTag));
                }
                moveIcon(iconPosition.iconLeft, iconPosition.iconTop);
            }
        }
        else {
            sp_a11y_lib["d" /* ScreenReader */].alert(DRAG_ZONE, strings.moveNotAllowed);
        }
        this._checkMoveAllowed(line);
    };
    DragZoneKeyboard.prototype._moveBack = function () {
        var _a = this._options, tree = _a.tree, moveLine = _a.moveLine, strings = _a.strings, scrollIntoView = _a.scrollIntoView, moveIcon = _a.moveIcon, onMoving = _a.onMoving, disallowedTag = _a.disallowedTag;
        var line;
        if (this._currentLocationIndex > 0) {
            var newIndex = this._currentLocationIndex - 1;
            var newTentativeElement = tree.getElementFromPosition(this._treeMatrix[newIndex]);
            this._dropPosition = Object(sp_lodash_subset_["clone"])(this._treeMatrix[newIndex]);
            this._dropOverElement = newTentativeElement && newTentativeElement.parentElement;
            if (!tree.isLeafElement(newTentativeElement)) { 
                this._dropPosition[0]++;
                line = moveLine(newTentativeElement, false, false, true);
                this._currentLocationIndex--;
                sp_a11y_lib["d" /* ScreenReader */].alert(DRAG_ZONE, this._formatFullPosition(this._dropPosition));
            }
            else {
                if (this._indexNotChanged) {
                    this._indexNotChanged = false;
                    line = moveLine(newTentativeElement, true, true, true);
                    this._currentLocationIndex--;
                    sp_a11y_lib["d" /* ScreenReader */].alert(DRAG_ZONE, this._formatPosition(this._dropPosition));
                }
                else if (this._upperLevelChange(this._treeMatrix[this._currentLocationIndex], this._treeMatrix[newIndex])) {
                    this._dropPosition[0]++;
                    line = moveLine(newTentativeElement, true, false, true);
                    this._indexNotChanged = true;
                    sp_a11y_lib["d" /* ScreenReader */].alert(DRAG_ZONE, this._formatFullPosition(this._dropPosition));
                }
                else {
                    line = moveLine(newTentativeElement, true, true, true);
                    this._currentLocationIndex--;
                    sp_a11y_lib["d" /* ScreenReader */].alert(DRAG_ZONE, this._formatPosition(this._dropPosition));
                }
            }
            scrollIntoView('partial', line, 500, 0, true);
            var iconPosition = this._getIconPosition(line);
            if (iconPosition) {
                if (onMoving) {
                    onMoving(!tree.isDragAllowed(this._draggedElement, this._dropOverElement, disallowedTag));
                }
                moveIcon(iconPosition.iconLeft, iconPosition.iconTop);
            }
        }
        else {
            sp_a11y_lib["d" /* ScreenReader */].alert(DRAG_ZONE, strings.moveNotAllowed);
        }
        this._checkMoveAllowed(line);
    };
    DragZoneKeyboard.prototype._checkMoveAllowed = function (line) {
        var _a = this._options, tree = _a.tree, strings = _a.strings, disallowedTag = _a.disallowedTag;
        if (disallowedTag && !tree.isDragAllowed(this._draggedElement, this._dropOverElement, disallowedTag) && line) {
            line.classList.add(DragZone_module_scss["a" /* default */].hideLine);
            sp_a11y_lib["d" /* ScreenReader */].alert(DRAG_ZONE, strings.moveNotAllowed);
        }
    };
    DragZoneKeyboard.prototype._upperLevelChange = function (oldPosition, newPosition) {
        if (oldPosition.length !== newPosition.length || oldPosition.length < 2 || newPosition.length < 2) {
            return false;
        }
        for (var i = 1; i < oldPosition.length; i++) {
            if (oldPosition[i] !== newPosition[i]) {
                return true;
            }
        }
        return false;
    };
    DragZoneKeyboard.prototype._formatFullPosition = function (position) {
        var moveInsideLevel = this._options.strings.moveInsideLevel;
        if (moveInsideLevel.length === 0 || position.length === 0) {
            return;
        }
        return lib["StringHelper"].format.apply(lib["StringHelper"], [moveInsideLevel[moveInsideLevel.length - 1]].concat(position.reverse().map(function (val) {
            return val + 1;
        })));
    };
    DragZoneKeyboard.prototype._getIconPosition = function (element) {
        var boundingRect = element && element.getBoundingClientRect();
        if (boundingRect) {
            var position = {
                iconLeft: boundingRect.left + boundingRect.width / 2,
                iconTop: boundingRect.top
            };
            return position;
        }
        return undefined;
    };
    DragZoneKeyboard.prototype._formatPosition = function (position) {
        var moveInsideLevel = this._options.strings.moveInsideLevel;
        if (moveInsideLevel.length === 0 || position.length === 0) {
            return;
        }
        return lib["StringHelper"].format(moveInsideLevel[0], position[0] + 1);
    };
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], DragZoneKeyboard.prototype, "_viewModeKeyDown", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], DragZoneKeyboard.prototype, "_moveModeKeyDown", null);
    return DragZoneKeyboard;
}());
/* harmony default export */ var lib_DragZoneKeyboard = (DragZoneKeyboard_DragZoneKeyboard);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-dragzone/lib/DragZoneUtilities.js


var DragZoneUtilities_DragZoneUtilities =  (function () {
    function DragZoneUtilities() {
    }
    DragZoneUtilities.getElementsWithAttribute = function (parent, tag, value) {
        if (!parent) {
            return [];
        }
        var querySelector = "[" + tag + (value ? "=\"" + value + "\"" : "") + "]";
        var tempEls = parent.querySelectorAll(querySelector);
        var elements = [];
        for (var index = 0; index < tempEls.length; index++) {
            elements.push(tempEls[index]);
        }
        return elements;
    };
    DragZoneUtilities.hasAttributeValue = function (elem, attribute, value) {
        return elem && elem.getAttribute(attribute) === value;
    };
    DragZoneUtilities.shouldInsertBeforeElement = function (element, x, y, isHorizontalReorder) {
        var rectangle = element.getBoundingClientRect();
        var center;
        if (isHorizontalReorder) {
            center = ((rectangle.left + rectangle.right) / 2);
            return Object(office_ui_fabric_react_bundle_["getRTL"])() ? x > center : x < center;
        }
        else {
            center = ((rectangle.bottom + rectangle.top) / 2);
            return y < center;
        }
    };
    DragZoneUtilities.getDefaultIcon = function () {
        var icon = document.createElement('div');
        icon.innerText = 'icon';
        icon.className = DragZone_module_scss["a" /* default */].defaultIconClass;
        icon.hidden = true;
        document.body.appendChild(icon);
        return icon;
    };
    DragZoneUtilities.elementArrayEquals = function (array1, array2) {
        if (!array1 || !array2) {
            return false;
        }
        if (array1.length !== array2.length) {
            return false;
        }
        for (var i = 0; i < array1.length; i++) {
            if (!array1[i].isEqualNode(array2[i])) {
                return false;
            }
        }
        return true;
    };
    DragZoneUtilities.getElementsNotInFirstArray = function (array1, array2) {
        if (!array1 || !array2 || array2.length === 0) {
            return [];
        }
        var addedElements = array2.filter(function (el) { return array1.indexOf(el) === -1; });
        return addedElements;
    };
    return DragZoneUtilities;
}());


// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-dragzone/lib/DragZoneTree.js


var DATA_ATTRIBUTE = 'data-drag-tag';
var DATA_DISALLOWED_AREA_ATTRIBUTE = 'data-drag-disallowed-area-tag';
var DATA_DISALLOWED_ATTRIBUTE = 'data-drag-disallowed-tag';
var DATA_DRAG_HANDLE = 'data-drag-handle';
var DragZoneTree_DragZoneTree =  (function () {
    function DragZoneTree(treeLevelTagsBottomUp, host) {
        this._bottomElements = new Map();
        this._positionMatrix = [];
        this._treeLevelTagsBottomUp = treeLevelTagsBottomUp;
        this._treeDepth = treeLevelTagsBottomUp.length;
        this._host = host;
        this._currentPosition = { x: undefined, y: undefined };
        this._startPosition = { x: undefined, y: undefined };
    }
    Object.defineProperty(DragZoneTree.prototype, "currentPosition", {
        get: function () {
            return this._currentPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragZoneTree.prototype, "startPosition", {
        get: function () {
            return this._startPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragZoneTree.prototype, "depth", {
        get: function () {
            return this._treeDepth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragZoneTree.prototype, "getDraggedItem", {
        get: function () {
            return this._getLeafElementFromMousePosition(this._startPosition.x, this._startPosition.y);
        },
        enumerable: true,
        configurable: true
    });
    DragZoneTree.prototype.getHoverOverItemPosition = function (el) {
        var element = el ||
            this.getBottomMostElementFromMousePosition();
        if (element) {
            return this._getElementPosition(element);
        }
        else {
            return undefined;
        }
    };
    DragZoneTree.prototype.getDraggedItemPosition = function () {
        var draggedElement = this._getLeafElementFromMousePosition(this._startPosition.x, this._startPosition.y);
        if (draggedElement) {
            return this._getElementPosition(draggedElement);
        }
        else {
            return undefined;
        }
    };
    DragZoneTree.prototype.getLeafElementFromMousePosition = function () {
        return this._getLeafElementFromMousePosition(this._currentPosition.x, this._currentPosition.y);
    };
    DragZoneTree.prototype.getDraggedOverElement = function () {
        return document.elementFromPoint(this._currentPosition.x, this._currentPosition.y);
    };
    DragZoneTree.prototype.isDragAllowed = function (draggedItem, dragOverElement, dataDragDisallowed) {
        var hoverOverItemWithDisallowedTag;
        if (dragOverElement) {
            hoverOverItemWithDisallowedTag =
                this.getElementWithDataDisallowedAreaTag(dragOverElement, dataDragDisallowed);
        }
        if (!draggedItem ||
            !dragOverElement ||
            (hoverOverItemWithDisallowedTag &&
                DragZoneUtilities_DragZoneUtilities.hasAttributeValue(draggedItem, DATA_DISALLOWED_ATTRIBUTE, dataDragDisallowed))) {
            return false;
        }
        return true;
    };
    DragZoneTree.prototype.getBottomMostElementFromMousePosition = function (draggedItem, dataDragDisallowed) {
        var _this = this;
        var parents = [];
        var elem = document.elementFromPoint(this._currentPosition.x, this._currentPosition.y);
        if (!elem || (draggedItem && !this.isDragAllowed(draggedItem, elem, dataDragDisallowed))) {
            return undefined;
        }
        do {
            parents.push(elem);
            elem = elem.parentElement;
        } while (elem && elem !== this._host);
        var _loop_1 = function (i) {
            var candidates = parents.filter(function (element) {
                return DragZoneUtilities_DragZoneUtilities.hasAttributeValue(element, DATA_ATTRIBUTE, _this._treeLevelTagsBottomUp[i]);
            });
            if (candidates && candidates.length > 0) {
                var lastLeaf = this_1._getLastLeaf(candidates[0]);
                if (lastLeaf) {
                    var rect = lastLeaf.getBoundingClientRect();
                    if (rect.bottom < this_1._currentPosition.y) {
                        return { value: lastLeaf };
                    }
                    return { value: undefined };
                }
                return { value: candidates[0] };
            }
        };
        var this_1 = this;
        for (var i = 0; i < this._treeDepth; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return undefined;
    };
    DragZoneTree.prototype.isLeafElement = function (element) {
        return DragZoneUtilities_DragZoneUtilities.hasAttributeValue(element, DATA_ATTRIBUTE, this._treeLevelTagsBottomUp[0]);
    };
    DragZoneTree.prototype.addDisallowedStyles = function (dataDragDisallowed, dataDragDisallowedCss, draggedItem) {
        if (!draggedItem) {
            draggedItem = this._getLeafElementFromMousePosition(this._startPosition.x, this._startPosition.y);
        }
        if (DragZoneUtilities_DragZoneUtilities.hasAttributeValue(draggedItem, DATA_DISALLOWED_ATTRIBUTE, dataDragDisallowed)) {
            this.applyRemoveCssToDataDragDisallowed(dataDragDisallowed, true, dataDragDisallowedCss);
        }
    };
    DragZoneTree.prototype.applyRemoveCssToDataDragDisallowed = function (dataDragDisallowedTag, apply, cssClass) {
        var elements = DragZoneUtilities_DragZoneUtilities.getElementsWithAttribute(this._host, DATA_DISALLOWED_AREA_ATTRIBUTE, dataDragDisallowedTag);
        for (var i = 0; i < elements.length; i++) {
            if (apply) {
                elements[i].classList.add(cssClass);
            }
            else {
                elements[i].classList.remove(cssClass);
            }
        }
    };
    DragZoneTree.prototype.getElementWithDataDisallowedAreaTag = function (elem, value) {
        var tempElement = elem;
        while (tempElement && tempElement !== this._host) {
            if (DragZoneUtilities_DragZoneUtilities.hasAttributeValue(tempElement, DATA_DISALLOWED_AREA_ATTRIBUTE, value)) {
                return tempElement;
            }
            tempElement = tempElement.parentElement;
        }
        return undefined;
    };
    DragZoneTree.prototype.getIndexInPositionMatrix = function (position) {
        for (var i = 0; i < this._positionMatrix.length; i++) {
            var equals = true;
            for (var j = 0; j < position.length; j++) {
                if (position[j] !== this._positionMatrix[i][j]) {
                    equals = false;
                    break;
                }
            }
            if (equals) {
                return i;
            }
        }
        return -1;
    };
    DragZoneTree.prototype.getElementFromPosition = function (position, refreshMatrix) {
        if (refreshMatrix || this._bottomElements.size === 0) {
            this.refreshPositionMatrix();
        }
        var index = this.getIndexInPositionMatrix(position);
        if (index > -1 && index < this._bottomElements.size) {
            return this._bottomElements.get(index);
        }
        else {
            return undefined;
        }
    };
    DragZoneTree.prototype.getLeafElementFromHandle = function (handle) {
        var element = handle;
        while (element && element !== this._host) {
            if (DragZoneUtilities_DragZoneUtilities.hasAttributeValue(element, DATA_ATTRIBUTE, this._treeLevelTagsBottomUp[0])) {
                return element;
            }
            element = element.parentElement;
        }
        return undefined;
    };
    DragZoneTree.prototype.getHandleFromLeafElement = function (draggedElement, value) {
        var dragHandles = DragZoneUtilities_DragZoneUtilities.getElementsWithAttribute(draggedElement, DATA_DRAG_HANDLE, value);
        return dragHandles && dragHandles[0];
    };
    DragZoneTree.prototype.refreshPositionMatrix = function () {
        var currentPosition = [];
        this._positionMatrix = [];
        this._bottomElements = new Map();
        this._traverse(this._host, this._treeDepth - 1, currentPosition);
        this._fixMatrix(this._positionMatrix);
        return this._positionMatrix;
    };
    DragZoneTree.prototype._traverse = function (parent, tagLevel, currentPosition) {
        var children = DragZoneUtilities_DragZoneUtilities.getElementsWithAttribute(parent, DATA_ATTRIBUTE, this._treeLevelTagsBottomUp[tagLevel]);
        if (children.length === 0 || tagLevel < 0) {
            this._positionMatrix.push(Object(sp_lodash_subset_["clone"])(currentPosition));
            this._bottomElements.set(this._positionMatrix.length - 1, parent);
            return;
        }
        for (var i = 0; i < children.length; i++) {
            currentPosition.push(i);
            this._traverse(children[i], tagLevel - 1, currentPosition);
            currentPosition.pop();
        }
    };
    DragZoneTree.prototype._fixMatrix = function (positionMatrix) {
        for (var i = 0; i < positionMatrix.length; i++) {
            for (var j = 0; j < this._treeDepth; j++) {
                if (positionMatrix[i].length <= j) {
                    positionMatrix[i].push(-1);
                }
            }
            positionMatrix[i] = positionMatrix[i].reverse();
        }
    };
    DragZoneTree.prototype._getElementPosition = function (element) {
        var treeIndeces = [];
        var tempElement = element;
        var tagLevel = this._getElementTagLevel(tempElement);
        for (var i = 0; i < this._treeDepth - 1; i++) {
            if (i < tagLevel) {
                treeIndeces[i] = 0;
                continue;
            }
            var thisLevelElement = tempElement;
            while (tempElement.parentElement && tempElement !== this._host) {
                tempElement = tempElement.parentElement;
                if (DragZoneUtilities_DragZoneUtilities.hasAttributeValue(tempElement, DATA_ATTRIBUTE, this._treeLevelTagsBottomUp[i + 1])) {
                    break;
                }
            }
            var siblings = DragZoneUtilities_DragZoneUtilities.getElementsWithAttribute(tempElement, DATA_ATTRIBUTE, this._treeLevelTagsBottomUp[i]);
            treeIndeces[i] = siblings.indexOf(thisLevelElement);
            if (tempElement === this._host) {
                break;
            }
        }
        if (tempElement !== this._host) {
            var tagListLastIndex = this._treeDepth - 1;
            var siblings = DragZoneUtilities_DragZoneUtilities.getElementsWithAttribute(this._host, DATA_ATTRIBUTE, this._treeLevelTagsBottomUp[tagListLastIndex]);
            treeIndeces[tagListLastIndex] = siblings.indexOf(tempElement);
        }
        return treeIndeces;
    };
    DragZoneTree.prototype._getElementTagLevel = function (element) {
        var tag = element.getAttribute(DATA_ATTRIBUTE);
        if (!tag) {
            return undefined;
        }
        return this._treeLevelTagsBottomUp.indexOf(tag);
    };
    DragZoneTree.prototype._getLeafElementFromMousePosition = function (x, y) {
        var elem = document.elementFromPoint(x, y);
        while (elem.parentElement && elem.parentElement !== this._host) {
            if (DragZoneUtilities_DragZoneUtilities.hasAttributeValue(elem, DATA_ATTRIBUTE, this._treeLevelTagsBottomUp[0])) {
                return elem;
            }
            elem = elem.parentElement;
        }
        return undefined;
    };
    DragZoneTree.prototype._getLastLeaf = function (element) {
        var leaves = DragZoneUtilities_DragZoneUtilities.getElementsWithAttribute(element, DATA_ATTRIBUTE, this._treeLevelTagsBottomUp[0]);
        if (leaves.length === 0) {
            return undefined;
        }
        else {
            return leaves[leaves.length - 1];
        }
    };
    return DragZoneTree;
}());


// CONCATENATED MODULE: C:/agent/1/_work/9/s/libraries/sp-dragzone/lib/DragZoneControl.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragZoneControl", function() { return DragZoneControl_DragZoneControl; });






var DragZoneControl_DATA_DRAG_HANDLE = 'data-drag-handle';
var DRAGSTART_TIMEOUT_MS = 100;
var ICON_MARGIN_PX = -25;
var DRAGOVER_INTERVAL_MS = 200;
var LINE_WIDTH_PX = 3;
var DragZoneControl_DragZoneControl =  (function () {
    function DragZoneControl(options) {
        if (!options.host) {
            throw Error('Need to specify a host control for the DropZone');
        }
        if (!(options.treeLevelTagsBottomUp && options.treeLevelTagsBottomUp.length > 0)) {
            throw Error('Need to have at least one level of tags for the DropZone');
        }
        this._options = options;
        if (options.icon) {
            this._icon = options.icon;
        }
        else {
            this._icon = DragZoneUtilities_DragZoneUtilities.getDefaultIcon();
            this._icon.classList.add(DragZone_module_scss["a" /* default */].iconCollapsed);
            this._icon.classList.add(DragZone_module_scss["a" /* default */].iconAdditionalStyle);
        }
        this._tree = new DragZoneTree_DragZoneTree(options.treeLevelTagsBottomUp, options.host);
    }
    DragZoneControl.prototype.activate = function () {
        var _this = this;
        var _a = this._options, host = _a.host, dragHandleTag = _a.dragHandleTag, scrollIntoView = _a.scrollIntoView, disallowedTag = _a.disallowedTag, disallowedClassName = _a.disallowedClassName, onMoveStart = _a.onMoveStart, onMoving = _a.onMoving;
        this._async = new office_ui_fabric_react_bundle_["Async"]();
        if (dragHandleTag) {
            this._dragHandles =
                DragZoneUtilities_DragZoneUtilities.getElementsWithAttribute(host, DragZoneControl_DATA_DRAG_HANDLE, dragHandleTag);
            this._dragHandles.forEach(function (handle) {
                handle.addEventListener('mousedown', _this._onMouseDown);
                handle.addEventListener('touchstart', _this._onMouseDown);
                handle.classList.add(DragZone_module_scss["a" /* default */].handleGrab);
            });
        }
        else {
            host.addEventListener('mousedown', this._onMouseDown);
            host.addEventListener('touchstart', this._onMouseDown);
        }
        var dragZoneKeyboardOptions = {
            host: host,
            tree: this._tree,
            supportHorizontalReorder: this._supportHorizontalReorder,
            moveLine: this._moveLine,
            removeLine: this._removeLine,
            moveItem: this._triggerOnMoved,
            handles: this._dragHandles,
            strings: this._options.dragZoneStrings,
            handleTag: dragHandleTag,
            scrollIntoView: scrollIntoView,
            disallowedTag: disallowedTag,
            disallowedClassName: disallowedClassName,
            moveIcon: this._moveIcon,
            changeIconVisibility: this._changeIconVisibility,
            onMoveStart: onMoveStart,
            onMoving: onMoving
        };
        if (this._supportKeyboardAlternative) {
            this._dragZoneKeyboard = new lib_DragZoneKeyboard(dragZoneKeyboardOptions);
        }
        host.addEventListener('mouseup', this._internalMouseUp);
        host.addEventListener('touchend', this._internalMouseUp);
        host.addEventListener('mouseout', this._onMouseOut);
        host.addEventListener('touchout', this._onMouseOut);
    };
    DragZoneControl.prototype.deactivate = function () {
        var _this = this;
        var _a = this._options, host = _a.host, dragHandleTag = _a.dragHandleTag;
        this._async.dispose();
        if (this._supportKeyboardAlternative && this._dragZoneKeyboard) {
            this._dragZoneKeyboard.dispose();
        }
        if (dragHandleTag) {
            this._dragHandles =
                DragZoneUtilities_DragZoneUtilities.getElementsWithAttribute(host, DragZoneControl_DATA_DRAG_HANDLE, dragHandleTag);
            this._dragHandles.forEach(function (handle) {
                handle.removeEventListener('mousedown', _this._onMouseDown);
                handle.removeEventListener('touchstart', _this._onMouseDown);
                handle.classList.remove(DragZone_module_scss["a" /* default */].handleGrab);
            });
        }
        else {
            host.removeEventListener('mousedown', this._onMouseDown);
            host.removeEventListener('touchstart', this._onMouseDown);
        }
        host.removeEventListener('mouseup', this._internalMouseUp);
        host.removeEventListener('touchend', this._internalMouseUp);
        host.removeEventListener('mouseout', this._onMouseOut);
        host.removeEventListener('touchout', this._onMouseOut);
    };
    DragZoneControl.prototype.refreshHandles = function () {
        var _this = this;
        var _a = this._options, host = _a.host, dragHandleTag = _a.dragHandleTag;
        if (dragHandleTag) {
            var dragHandles = DragZoneUtilities_DragZoneUtilities.getElementsWithAttribute(host, DragZoneControl_DATA_DRAG_HANDLE, dragHandleTag);
            var itemsAdded = DragZoneUtilities_DragZoneUtilities.getElementsNotInFirstArray(this._dragHandles, dragHandles);
            if (itemsAdded.length > 0) {
                itemsAdded.forEach(function (handle) {
                    _this._dragHandles.push(handle);
                    handle.addEventListener('mousedown', _this._onMouseDown);
                    handle.addEventListener('touchstart', _this._onMouseDown);
                    handle.classList.remove(DragZone_module_scss["a" /* default */].handleGrab);
                });
            }
            if (this._supportKeyboardAlternative && this._dragZoneKeyboard) {
                this._dragZoneKeyboard.addHandles(itemsAdded);
            }
        }
    };
    DragZoneControl.prototype._onMouseMove = function (evt) {
        this._mouseOut = false;
        this._tree.currentPosition.x = evt.clientX;
        this._tree.currentPosition.y = evt.clientY;
    };
    DragZoneControl.prototype._onTouchMove = function (evt) {
        this._mouseOut = false;
        if (evt.touches.length === 1) {
            var touch = evt.touches[0];
            this._tree.currentPosition.x = touch.clientX;
            this._tree.currentPosition.y = touch.clientY;
            evt.preventDefault();
        }
    };
    DragZoneControl.prototype._onMouseOut = function () {
        this._mouseOut = true;
    };
    DragZoneControl.prototype._onMouseDown = function (evt) {
        this._mouseDown = true;
        this._async.setTimeout(this._startDrag, DRAGSTART_TIMEOUT_MS);
        if (evt instanceof MouseEvent) {
            evt.preventDefault();
            var mouseEvent = evt;
            this._tree.startPosition.x = mouseEvent.clientX;
            this._tree.startPosition.y = mouseEvent.clientY;
            this._tree.currentPosition.x = mouseEvent.clientX;
            this._tree.currentPosition.y = mouseEvent.clientY;
        }
        else if (evt instanceof TouchEvent) {
            var touchEvent = evt;
            if (touchEvent && touchEvent.touches.length > 0) {
                this._tree.startPosition.x = touchEvent.touches[0].clientX;
                this._tree.startPosition.y = touchEvent.touches[0].clientY;
                this._tree.currentPosition.x = touchEvent.touches[0].clientX;
                this._tree.currentPosition.y = touchEvent.touches[0].clientY;
            }
        }
    };
    DragZoneControl.prototype._onDragStart = function () {
        var _a = this._options, disallowedTag = _a.disallowedTag, disallowedClassName = _a.disallowedClassName;
        this._isDragging = true;
        if (window.getSelection()) {
            window.getSelection().removeAllRanges();
        }
        document.body.classList.add(DragZone_module_scss["a" /* default */].noselect);
        this._animationFrameHandle = window.requestAnimationFrame(this._emulateMouseMove);
        this._dragOverInterval = this._async.setInterval(this._emulateDragOver, DRAGOVER_INTERVAL_MS);
        this._options.host.addEventListener('mousemove', this._onMouseMove);
        this._options.host.addEventListener('touchmove', this._onTouchMove);
        window.addEventListener('mouseup', this._onMouseUp);
        window.addEventListener('touchend', this._onMouseUp);
        this._autoScroll = new office_ui_fabric_react_bundle_["AutoScroll"](this._options.host);
        this._changeIconVisibility(true);
        this._options.host.classList.add(DragZone_module_scss["a" /* default */].cursorDragging);
        this._draggedItemPosition = this._tree.getDraggedItemPosition();
        this._draggedElement = this._tree.getDraggedItem;
        this._tree.addDisallowedStyles(disallowedTag, disallowedClassName);
        if (this._options.onMoveStart) {
            this._options.onMoveStart(this._draggedItemPosition);
        }
    };
    DragZoneControl.prototype._changeIconVisibility = function (visible) {
        this._icon.classList.remove(visible ? DragZone_module_scss["a" /* default */].iconCollapsed : DragZone_module_scss["a" /* default */].iconVisible);
        this._icon.classList.add(visible ? DragZone_module_scss["a" /* default */].iconVisible : DragZone_module_scss["a" /* default */].iconCollapsed);
    };
    DragZoneControl.prototype._internalMouseUp = function () {
        this._mouseDown = false;
    };
    DragZoneControl.prototype._onMouseUp = function () {
        if (!this._isDragging) {
            return;
        }
        this._isDragging = false;
        this._changeIconVisibility(false);
        document.body.classList.remove(DragZone_module_scss["a" /* default */].noselect);
        if (this._mouseOut || !this._draggedElement || !this._dragOverElement) {
            this._resetCursorEvents();
            this._reset();
            return;
        }
        this._resetCursorEvents();
        this._triggerOnMoved(this._draggedItemPosition, this._hoverOverPosition);
    };
    DragZoneControl.prototype._triggerOnMoved = function (draggedItemPosition, dropPosition) {
        if (this._options.onMoved) {
            if (draggedItemPosition &&
                draggedItemPosition.length === this._tree.depth &&
                dropPosition && dropPosition.length === this._tree.depth) {
                this._options.onMoved(draggedItemPosition, dropPosition);
            }
        }
        this._reset();
    };
    DragZoneControl.prototype._emulateDragOver = function () {
        var disallowedTag = this._options.disallowedTag;
        var plainElement = this._options.canDropOnEmptyParent ?
            this._tree.getBottomMostElementFromMousePosition(this._draggedElement, disallowedTag) :
            this._tree.getLeafElementFromMousePosition();
        var element = plainElement;
        if (!element) {
            return;
        }
        this._hoverOverPosition = this._tree.getHoverOverItemPosition(element);
        var shouldInsertBefore = DragZoneUtilities_DragZoneUtilities.shouldInsertBeforeElement(element, this._tree.currentPosition.x, this._tree.currentPosition.y, this._supportHorizontalReorder);
        var isLeaf = this._tree.isLeafElement(element);
        if (!shouldInsertBefore && isLeaf) {
            this._hoverOverPosition[0]++;
        }
        this._moveLine(element, isLeaf, shouldInsertBefore);
    };
    DragZoneControl.prototype._moveLine = function (adjacentElement, isLeaf, shouldInsertBefore) {
        this._removeLine();
        this._line = document.createElement('div');
        this._line.className = DragZone_module_scss["a" /* default */].dropLocation;
        var supportHorizontalReorder = this._options.supportHorizontalReorder;
        if (supportHorizontalReorder) {
            this._line.classList.add(DragZone_module_scss["a" /* default */].verticalLine);
        }
        else {
            this._line.classList.add(DragZone_module_scss["a" /* default */].horizontalLine);
        }
        if (isLeaf) {
            this._line.classList.add(DragZone_module_scss["a" /* default */].linePositionAbsolute);
            if (supportHorizontalReorder) {
                if (Object(office_ui_fabric_react_bundle_["getRTL"])()) {
                    if (!shouldInsertBefore) {
                        this._line.style.marginRight =
                            this._getLineRightPosition(adjacentElement.parentElement, adjacentElement) + "px";
                    }
                    else {
                        this._line.style.marginRight =
                            -LINE_WIDTH_PX - this._options.dropPositionOffsetLeftPx + "px";
                    }
                }
                else {
                    if (!shouldInsertBefore) {
                        this._line.style.marginLeft =
                            this._getLineRightPosition(adjacentElement.parentElement, adjacentElement) + "px";
                    }
                    else {
                        this._line.style.marginLeft =
                            -LINE_WIDTH_PX - this._options.dropPositionOffsetLeftPx + "px";
                    }
                }
            }
            else {
                if (!shouldInsertBefore) {
                    this._line.style.marginTop =
                        this._getLineBottomPosition(adjacentElement.parentElement, adjacentElement) + "px";
                }
                else {
                    this._line.style.marginTop =
                        -LINE_WIDTH_PX - this._options.dropPositionOffsetTopPx + "px";
                }
            }
            adjacentElement.parentElement.insertBefore(this._line, adjacentElement);
        }
        else {
            if (this._supportHorizontalReorder) {
                this._line.classList.add(DragZone_module_scss["a" /* default */].verticalLine);
            }
            else {
                this._line.classList.add(DragZone_module_scss["a" /* default */].horizontalLine);
            }
            adjacentElement.appendChild(this._line);
        }
        this._dragOverElement = adjacentElement;
        return this._line;
    };
    DragZoneControl.prototype._emulateMouseMove = function () {
        var _a = this._options, disallowedTag = _a.disallowedTag, onMoving = _a.onMoving;
        this._moveIcon(this._tree.currentPosition.x, this._tree.currentPosition.y);
        if (onMoving && this._isDragging) {
            onMoving(!this._tree.isDragAllowed(this._draggedElement, this._tree.getDraggedOverElement(), disallowedTag));
        }
        window.requestAnimationFrame(this._emulateMouseMove);
    };
    DragZoneControl.prototype._moveIcon = function (x, y) {
        this._icon.style.top = y + ICON_MARGIN_PX + "px";
        if (Object(office_ui_fabric_react_bundle_["getRTL"])()) {
            this._icon.style.right = x + ICON_MARGIN_PX + "px";
        }
        else {
            this._icon.style.left = x + ICON_MARGIN_PX + "px";
        }
    };
    DragZoneControl.prototype._startDrag = function () {
        if (this._mouseDown) {
            this._onDragStart();
        }
    };
    DragZoneControl.prototype._resetCursorEvents = function () {
        this._removeLine();
        this._tree.startPosition.x = undefined;
        this._tree.startPosition.y = undefined;
        window.cancelAnimationFrame(this._animationFrameHandle);
        this._async.clearInterval(this._dragOverInterval);
        this._options.host.removeEventListener('mousemove', this._onMouseMove);
        this._options.host.removeEventListener('touchmove', this._onTouchMove);
        window.removeEventListener('mouseup', this._onMouseUp);
        window.removeEventListener('touchend', this._onMouseUp);
        this._options.host.classList.remove(DragZone_module_scss["a" /* default */].cursorDragging);
        this._autoScroll.dispose();
    };
    DragZoneControl.prototype._reset = function () {
        var _a = this._options, disallowedTag = _a.disallowedTag, disallowedClassName = _a.disallowedClassName;
        this._draggedItemPosition = undefined;
        this._dragOverElement = undefined;
        this._tree.applyRemoveCssToDataDragDisallowed(disallowedTag, false, disallowedClassName);
    };
    DragZoneControl.prototype._removeLine = function () {
        if (this._dragOverElement) {
            if (this._tree.isLeafElement(this._dragOverElement) &&
                this._dragOverElement.parentElement.contains(this._line)) {
                this._dragOverElement.parentElement.removeChild(this._line);
            }
            else if (this._dragOverElement.contains(this._line)) {
                this._dragOverElement.removeChild(this._line);
            }
        }
    };
    DragZoneControl.prototype._getLineRightPosition = function (parent, element) {
        var childRect = element.getBoundingClientRect();
        var rightInsideParent = childRect.width + this._options.dropPositionOffsetRightPx;
        return rightInsideParent || 0;
    };
    DragZoneControl.prototype._getLineBottomPosition = function (parent, element) {
        var childRect = element.getBoundingClientRect();
        var bottomInsideParent = childRect.height + this._options.dropPositionOffsetBottomPx;
        return bottomInsideParent || 0;
    };
    Object.defineProperty(DragZoneControl.prototype, "_supportHorizontalReorder", {
        get: function () {
            return this._options.supportHorizontalReorder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragZoneControl.prototype, "_supportKeyboardAlternative", {
        get: function () {
            return this._options.supportKeyboardAlternative;
        },
        enumerable: true,
        configurable: true
    });
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], DragZoneControl.prototype, "_onMouseMove", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], DragZoneControl.prototype, "_onTouchMove", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], DragZoneControl.prototype, "_onMouseOut", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], DragZoneControl.prototype, "_onMouseDown", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], DragZoneControl.prototype, "_changeIconVisibility", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], DragZoneControl.prototype, "_internalMouseUp", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], DragZoneControl.prototype, "_onMouseUp", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], DragZoneControl.prototype, "_triggerOnMoved", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], DragZoneControl.prototype, "_emulateDragOver", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], DragZoneControl.prototype, "_moveLine", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], DragZoneControl.prototype, "_emulateMouseMove", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], DragZoneControl.prototype, "_moveIcon", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], DragZoneControl.prototype, "_startDrag", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], DragZoneControl.prototype, "_removeLine", null);
    return DragZoneControl;
}());



/***/ })

});
//# sourceMappingURL=8.8_172e0c6dc028ce9c886a.js.map