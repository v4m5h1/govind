/// <reference types="react" />
import * as React from 'react';
import { BasePicker, IBasePickerProps, IPickerItemProps } from 'office-ui-fabric-react/lib/Pickers';
import { IPickerTerm, IPickerTerms } from './ITermPicker';
import { ITaxonomyPickerProps } from './ITaxonomyPicker';
import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
export declare class TermBasePicker extends BasePicker<IPickerTerm, IBasePickerProps<IPickerTerm>> {
}
export interface ITermPickerState {
    terms: IPickerTerms;
}
export interface ITermPickerProps {
    termPickerHostProps: ITaxonomyPickerProps;
    context: IWebPartContext | ApplicationCustomizerContext;
    disabled: boolean;
    value: IPickerTerms;
    allowMultipleSelections: boolean;
    isTermSetSelectable?: boolean;
    disabledTermIds?: string[];
    disableChildrenOfDisabledParents?: boolean;
    onChanged: (items: IPickerTerm[]) => void;
}
export default class TermPicker extends React.Component<ITermPickerProps, ITermPickerState> {
    private allTerms;
    /**
     * Constructor method
     */
    constructor(props: any);
    /**
     * componentWillReceiveProps method
     */
    componentWillReceiveProps(nextProps: ITermPickerProps): void;
    /**
     * Renders the item in the picker
     */
    protected onRenderItem(term: IPickerItemProps<IPickerTerm>): JSX.Element;
    /**
     * Renders the suggestions in the picker
     */
    protected onRenderSuggestionsItem(term: IPickerTerm): JSX.Element;
    /**
     * When Filter Changes a new search for suggestions
     */
    private onFilterChanged(filterText, tagList);
    /**
     * gets the text from an item
     */
    private onGetTextFromItem(item);
    /**
   * Render method
   */
    render(): JSX.Element;
}
