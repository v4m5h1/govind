/// <reference types="react" />
import * as React from 'react';
import { IListViewProps, IListViewState } from './IListView';
/**
 * File type icon component
 */
export declare class ListView extends React.Component<IListViewProps, IListViewState> {
    private _selection;
    private originalItems;
    private originalGroups;
    private originalColumns;
    constructor(props: IListViewProps);
    /**
     * Lifecycle hook when component is mounted
     */
    componentDidMount(): void;
    /**
     * Lifecycle hook when component did update after state or property changes
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate(prevProps: IListViewProps, prevState: IListViewState): void;
    /**
     * Select all the items that should be selected by default
     */
    private _setSelectedItems();
    /**
     * Specify result grouping for the list rendering
     * @param items
     * @param groupByFields
     */
    private _getGroups(items, groupByFields, level?, startIndex?);
    /**
     * Process all the component properties
     */
    private _processProperties();
    /**
     * Flatten all objects in every item
     * @param items
     */
    private _flattenItems(items);
    /**
     * Flatten all object in the item
     * @param item
     */
    private _flattenItem(item);
    /**
     * Create an icon column rendering
     * @param iconField
     */
    private _createIconColumn(iconFieldName);
    /**
     * Returns required set of columns for the list view
     * @param viewFields
     */
    private _createColumns(viewFields, crntColumns);
    /**
     * Check how field needs to be rendered
     * @param field
     */
    private _fieldRender(field);
    /**
     * Check if sorting needs to be set to the column
     * @param ev
     * @param column
     */
    private _columnClick;
    /**
     * Method updates the controlled value of the filter field
     * @param newValue
     */
    private _updateFilterValue;
    /**
     * Sort the list of items by the clicked column
     * @param items
     * @param columnName
     * @param descending
     */
    private _sortItems(items, columnName, descending?);
    /**
     * Executes filtering. Method tries to indicate if filtering should be executed on a single or all columns.
     * @param filterValue
     * @param items
     * @param columns
     */
    private _executeFiltering(filterValue, items, columns);
    /**
     * Execute filtering on the provided data set and columns
     * @param filterValue
     * @param items
     * @param columns
     */
    private _getFilteredItems(filterValue, items, columns);
    /**
     * Check if the item contains property with proper value
     * @param item
     * @param property
     * @param filterValue
     */
    private _doesPropertyContainsValue(item, property, filterValue);
    /**
     * Default React component render method
     */
    render(): React.ReactElement<IListViewProps>;
}
