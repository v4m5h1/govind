/// <reference types="react" />
import * as React from "react";
import { IListItemPickerProps, IListItemPickerState } from ".";
export declare class ListItemPicker extends React.Component<IListItemPickerProps, IListItemPickerState> {
    private _spservice;
    private selectedItems;
    constructor(props: IListItemPickerProps);
    componentDidUpdate(prevProps: IListItemPickerProps, prevState: IListItemPickerState): void;
    /**
     * Render the field
     */
    render(): React.ReactElement<IListItemPickerProps>;
    /**
     * Get text from Item
     */
    private getTextFromItem(item);
    /**
     * On Selected Item
     */
    private onItemChanged;
    /**
     * Filter Change
     */
    private onFilterChanged;
    /**
     * Function to load List Items
     */
    private loadListItems;
}
