"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DetailsList_1 = require("office-ui-fabric-react/lib/DetailsList");
var IListView_1 = require("./IListView");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var index_1 = require("../fileTypeIcon/index");
var strings = require("ControlStrings");
var telemetry = require("../../common/telemetry");
var TextField_1 = require("office-ui-fabric-react/lib/components/TextField");
var lodash_1 = require("lodash");
/**
 * File type icon component
 */
var ListView = (function (_super) {
    __extends(ListView, _super);
    function ListView(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Check if sorting needs to be set to the column
         * @param ev
         * @param column
         */
        _this._columnClick = function (ev, column) {
            // Find the field in the viewFields list
            var columnIdx = sp_lodash_subset_1.findIndex(_this.props.viewFields, function (field) { return field.name === column.key; });
            // Check if the field has been found
            if (columnIdx !== -1) {
                var field = _this.props.viewFields[columnIdx];
                // Check if the field needs to be sorted
                if (sp_lodash_subset_1.has(field, 'sorting')) {
                    // Check if the sorting option is true
                    if (field.sorting) {
                        var sortDescending_1 = typeof column.isSortedDescending === 'undefined' ? false : !column.isSortedDescending;
                        var sortedItems = _this._sortItems(_this.state.items, column.key, sortDescending_1);
                        // Update the columns
                        var sortedColumns = _this.state.columns.map(function (c) {
                            if (c.key === column.key) {
                                c.isSortedDescending = sortDescending_1;
                                c.isSorted = true;
                            }
                            else {
                                c.isSorted = false;
                                c.isSortedDescending = false;
                            }
                            return c;
                        });
                        // Update the grouping
                        var groupedItems = _this._getGroups(sortedItems, _this.props.groupByFields);
                        // Update the items and columns
                        _this.setState({
                            items: groupedItems.groups.length > 0 ? groupedItems.items : sortedItems,
                            columns: sortedColumns,
                            groups: groupedItems.groups.length > 0 ? groupedItems.groups : null,
                        });
                    }
                }
            }
        };
        /**
         * Method updates the controlled value of the filter field
         * @param newValue
         */
        _this._updateFilterValue = function (filterValue) {
            var items = sp_lodash_subset_1.cloneDeep(_this.originalItems);
            var groups = sp_lodash_subset_1.cloneDeep(_this.originalGroups);
            var columns = sp_lodash_subset_1.cloneDeep(_this.originalColumns);
            // Check if a value is provided, otherwise revert back to the original list of items
            if (filterValue && items && items.length > 0) {
                items = _this._executeFiltering(filterValue, items, columns);
                var grouping = _this._getGroups(items, _this.props.groupByFields);
                // Update grouping
                if (grouping.groups.length > 0) {
                    groups = grouping.groups;
                    // Update the items
                    items = grouping.items;
                }
                else {
                    groups = null;
                }
            }
            _this.setState({
                filterValue: filterValue,
                items: items,
                groups: groups
            });
        };
        telemetry.track('ReactListView', {
            viewFields: !!props.viewFields,
            groupByFields: !!props.groupByFields,
            selectionMode: !!props.selectionMode,
            selection: !!props.selection,
            defaultSelection: !!props.defaultSelection
        });
        // Initialize state
        _this.state = {
            items: [],
            filterValue: _this.props.defaultFilter
        };
        if (_this.props.selection) {
            // Initialize the selection
            _this._selection = new DetailsList_1.Selection({
                // Create the event handler when a selection changes
                onSelectionChanged: function () { return _this.props.selection(_this._selection.getSelection()); }
            });
        }
        return _this;
    }
    /**
     * Lifecycle hook when component is mounted
     */
    ListView.prototype.componentDidMount = function () {
        this._processProperties();
    };
    /**
     * Lifecycle hook when component did update after state or property changes
     * @param prevProps
     * @param prevState
     */
    ListView.prototype.componentDidUpdate = function (prevProps, prevState) {
        // select default items
        this._setSelectedItems();
        if (!sp_lodash_subset_1.isEqual(prevProps, this.props)) {
            // Reset the selected items
            if (this._selection) {
                this._selection.setItems(this.props.items, true);
            }
            // Process list view properties
            this._processProperties();
        }
    };
    /**
     * Select all the items that should be selected by default
     */
    ListView.prototype._setSelectedItems = function () {
        if (this.props.items &&
            this.props.items.length > 0 &&
            this.props.defaultSelection &&
            this.props.defaultSelection.length > 0) {
            for (var _i = 0, _a = this.props.defaultSelection; _i < _a.length; _i++) {
                var index = _a[_i];
                if (index > -1) {
                    this._selection.setIndexSelected(index, true, false);
                }
            }
        }
    };
    /**
     * Specify result grouping for the list rendering
     * @param items
     * @param groupByFields
     */
    ListView.prototype._getGroups = function (items, groupByFields, level, startIndex) {
        if (level === void 0) { level = 0; }
        if (startIndex === void 0) { startIndex = 0; }
        // Group array which stores the configured grouping
        var groups = [];
        var updatedItemsOrder = [];
        // Check if there are groupby fields set
        if (groupByFields) {
            var groupField_1 = groupByFields[level];
            // Check if grouping is configured
            if (groupByFields && groupByFields.length > 0) {
                // Create grouped items object
                var groupedItems_1 = {};
                items.forEach(function (item) {
                    var groupName = item[groupField_1.name];
                    // Check if the group name exists
                    if (typeof groupName === "undefined") {
                        // Set the default empty label for the field
                        groupName = strings.ListViewGroupEmptyLabel;
                    }
                    // Check if group name is a number, this can cause sorting issues
                    if (typeof groupName === "number") {
                        groupName = groupName + ".";
                    }
                    // Check if current group already exists
                    if (typeof groupedItems_1[groupName] === "undefined") {
                        // Create a new group of items
                        groupedItems_1[groupName] = [];
                    }
                    groupedItems_1[groupName].push(item);
                });
                // Sort the grouped items object by its key
                var sortedGroups_1 = {};
                var groupNames = Object.keys(groupedItems_1);
                groupNames = groupField_1.order === IListView_1.GroupOrder.ascending ? groupNames.sort() : groupNames.sort().reverse();
                groupNames.forEach(function (key) {
                    sortedGroups_1[key] = groupedItems_1[key];
                });
                // Loop over all the groups
                for (var groupItems in sortedGroups_1) {
                    // Retrieve the total number of items per group
                    var totalItems = groupedItems_1[groupItems].length;
                    // Create the new group
                    var group = {
                        name: groupItems === "undefined" ? strings.ListViewGroupEmptyLabel : groupItems,
                        key: groupItems === "undefined" ? strings.ListViewGroupEmptyLabel : groupItems,
                        startIndex: startIndex,
                        count: totalItems,
                    };
                    // Check if child grouping available
                    if (groupByFields[level + 1]) {
                        // Get the child groups
                        var subGroup = this._getGroups(groupedItems_1[groupItems], groupByFields, (level + 1), startIndex);
                        subGroup.items.forEach(function (item) {
                            updatedItemsOrder.push(item);
                        });
                        group.children = subGroup.groups;
                    }
                    else {
                        // Add the items to the updated items order array
                        groupedItems_1[groupItems].forEach(function (item) {
                            updatedItemsOrder.push(item);
                        });
                    }
                    // Increase the start index for the next group
                    startIndex = startIndex + totalItems;
                    groups.push(group);
                }
            }
        }
        return {
            items: updatedItemsOrder,
            groups: groups
        };
    };
    /**
     * Process all the component properties
     */
    ListView.prototype._processProperties = function () {
        var _a = this.props, items = _a.items, iconFieldName = _a.iconFieldName, viewFields = _a.viewFields, groupByFields = _a.groupByFields, showFilter = _a.showFilter;
        var tempState = sp_lodash_subset_1.cloneDeep(this.state);
        var columns = null;
        // Check if a set of items was provided
        if (typeof items !== 'undefined' && items !== null) {
            tempState.items = this._flattenItems(items);
        }
        // Check if an icon needs to be shown
        if (iconFieldName) {
            if (columns === null) {
                columns = [];
            }
            var iconColumn = this._createIconColumn(iconFieldName);
            columns.push(iconColumn);
        }
        // Check if view fields were provided
        if (viewFields) {
            if (columns === null) {
                columns = [];
            }
            columns = this._createColumns(viewFields, columns);
        }
        // Add the columns to the temporary state
        tempState.columns = columns;
        // Add grouping to the list view
        var grouping = this._getGroups(tempState.items, groupByFields);
        if (grouping.groups.length > 0) {
            tempState.groups = grouping.groups;
            // Update the items
            tempState.items = grouping.items;
        }
        else {
            tempState.groups = null;
        }
        // Store the original items and groups objects
        this.originalItems = tempState.items;
        this.originalGroups = tempState.groups;
        this.originalColumns = tempState.columns;
        // Check if component needs to be filtered
        var filterValue = this.state.filterValue;
        if (filterValue && showFilter) {
            this.setState({
                columns: tempState.columns
            });
            this._updateFilterValue(filterValue);
        }
        else {
            // Update the current component state with the new values
            this.setState(tempState);
        }
    };
    /**
     * Flatten all objects in every item
     * @param items
     */
    ListView.prototype._flattenItems = function (items) {
        var _this = this;
        // Flatten items
        var flattenItems = items.map(function (item) {
            // Flatten all objects in the item
            return _this._flattenItem(item);
        });
        return flattenItems;
    };
    /**
     * Flatten all object in the item
     * @param item
     */
    ListView.prototype._flattenItem = function (item) {
        var flatItem = {};
        for (var parentPropName in item) {
            // Check if property already exists
            if (!item.hasOwnProperty(parentPropName))
                continue;
            // Check if the property is of type object
            if ((typeof item[parentPropName]) === 'object') {
                // Flatten every object
                var flatObject = this._flattenItem(item[parentPropName]);
                for (var childPropName in flatObject) {
                    if (!flatObject.hasOwnProperty(childPropName))
                        continue;
                    flatItem[parentPropName + "." + childPropName] = flatObject[childPropName];
                }
            }
            else {
                flatItem[parentPropName] = item[parentPropName];
            }
        }
        return flatItem;
    };
    /**
     * Create an icon column rendering
     * @param iconField
     */
    ListView.prototype._createIconColumn = function (iconFieldName) {
        return {
            key: 'fileType',
            name: 'File Type',
            iconName: 'Page',
            isIconOnly: true,
            fieldName: 'fileType',
            minWidth: 16,
            maxWidth: 16,
            onRender: function (item) {
                return (React.createElement(index_1.FileTypeIcon, { type: index_1.IconType.image, path: item[iconFieldName] }));
            }
        };
    };
    /**
     * Returns required set of columns for the list view
     * @param viewFields
     */
    ListView.prototype._createColumns = function (viewFields, crntColumns) {
        var _this = this;
        viewFields.forEach(function (field) {
            crntColumns.push({
                key: field.name,
                name: field.displayName || field.name,
                fieldName: field.name,
                minWidth: field.minWidth || 50,
                maxWidth: field.maxWidth,
                isResizable: field.isResizable,
                onRender: _this._fieldRender(field),
                onColumnClick: _this._columnClick
            });
        });
        return crntColumns;
    };
    /**
     * Check how field needs to be rendered
     * @param field
     */
    ListView.prototype._fieldRender = function (field) {
        // Check if a render function is specified
        if (field.render) {
            return field.render;
        }
        // Check if the URL property is specified
        if (field.linkPropertyName) {
            return function (item, index, column) {
                return React.createElement("a", { href: item[field.linkPropertyName] }, item[column.fieldName]);
            };
        }
    };
    /**
     * Sort the list of items by the clicked column
     * @param items
     * @param columnName
     * @param descending
     */
    ListView.prototype._sortItems = function (items, columnName, descending) {
        var _this = this;
        if (descending === void 0) { descending = false; }
        // Sort the items
        var ascItems = sp_lodash_subset_1.sortBy(items, [columnName]);
        var sortedItems = descending ? ascItems.reverse() : ascItems;
        // Check if selection needs to be updated
        if (this._selection) {
            var selection_1 = this._selection.getSelection();
            if (selection_1 && selection_1.length > 0) {
                // Clear selection
                this._selection.setItems([], true);
                setTimeout(function () {
                    // Find new index
                    var idxs = selection_1.map(function (item) { return sp_lodash_subset_1.findIndex(sortedItems, item); });
                    idxs.forEach(function (idx) { return _this._selection.setIndexSelected(idx, true, false); });
                }, 0);
            }
        }
        // Return the sorted items list
        return sortedItems;
    };
    /**
     * Executes filtering. Method tries to indicate if filtering should be executed on a single or all columns.
     * @param filterValue
     * @param items
     * @param columns
     */
    ListView.prototype._executeFiltering = function (filterValue, items, columns) {
        var filterSeparator = ":";
        var filterColumns = columns.slice();
        if (filterValue && filterValue.indexOf(filterSeparator) >= 0) {
            var columnName_1 = filterValue.split(filterSeparator)[0];
            filterValue = filterValue.split(filterSeparator)[1];
            filterColumns = lodash_1.filter(columns, function (column) { return column.fieldName === columnName_1 || column.name === columnName_1; });
        }
        return this._getFilteredItems(filterValue, items, filterColumns);
    };
    /**
     * Execute filtering on the provided data set and columns
     * @param filterValue
     * @param items
     * @param columns
     */
    ListView.prototype._getFilteredItems = function (filterValue, items, columns) {
        if (!filterValue) {
            return items;
        }
        var result = [];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            var addItemToResultSet = false;
            for (var _a = 0, columns_1 = columns; _a < columns_1.length; _a++) {
                var viewField = columns_1[_a];
                if (this._doesPropertyContainsValue(item, viewField.fieldName, filterValue)) {
                    addItemToResultSet = true;
                    break;
                }
                if (this._doesPropertyContainsValue(item, viewField.name, filterValue)) {
                    addItemToResultSet = true;
                    break;
                }
            }
            if (addItemToResultSet) {
                result.push(item);
            }
        }
        return result;
    };
    /**
     * Check if the item contains property with proper value
     * @param item
     * @param property
     * @param filterValue
     */
    ListView.prototype._doesPropertyContainsValue = function (item, property, filterValue) {
        var propertyValue = item[property];
        var result = false;
        if (propertyValue) {
            // Case insensitive
            result = propertyValue.toString().toLowerCase().indexOf(filterValue.toLowerCase()) >= 0;
        }
        return result;
    };
    /**
     * Default React component render method
     */
    ListView.prototype.render = function () {
        var groupProps = {};
        var _a = this.props, showFilter = _a.showFilter, filterPlaceHolder = _a.filterPlaceHolder;
        var _b = this.state, filterValue = _b.filterValue, items = _b.items;
        // Check if selection mode is single selection,
        // if that is the case, disable the selection on grouping headers
        if (this.props.selectionMode === DetailsList_1.SelectionMode.single) {
            groupProps = {
                headerProps: {
                    onToggleSelectGroup: function () { return null; },
                    onGroupHeaderClick: function () { return null; },
                }
            };
        }
        return (React.createElement("div", null,
            showFilter && React.createElement(TextField_1.TextField, { placeholder: filterPlaceHolder || strings.ListViewFilterLabel, onChanged: this._updateFilterValue, value: filterValue }),
            React.createElement(DetailsList_1.DetailsList, { key: "ListViewControl", items: items, columns: this.state.columns, groups: this.state.groups, selectionMode: this.props.selectionMode || DetailsList_1.SelectionMode.none, selection: this._selection, layoutMode: DetailsList_1.DetailsListLayoutMode.justified, compact: this.props.compact, setKey: "ListViewControl", groupProps: groupProps })));
    };
    return ListView;
}(React.Component));
exports.ListView = ListView;

//# sourceMappingURL=ListView.js.map
