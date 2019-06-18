/// <reference types="react" />
import * as React from 'react';
import { ITermProps, ITermState } from './ITaxonomyPicker';
/**
 * Term component
 * Renders a selectable term
 */
export default class Term extends React.Component<ITermProps, ITermState> {
    constructor(props: ITermProps);
    /**
     * Handle the checkbox change trigger
     */
    private _handleChange(ev, isChecked);
    /**
     * Lifecycle event hook when component retrieves new properties
     * @param nextProps
     * @param nextContext
     */
    componentWillReceiveProps?(nextProps: ITermProps, nextContext: any): void;
    /**
     * Get the right class name for the term
     */
    private getClassName();
    private termActionCallback;
    /**
     * Default React render
     */
    render(): JSX.Element;
}
