/// <reference types="react" />
import * as React from 'react';
import { ITermActionsControlProps, ITermActionsControlState } from './ITermsActions';
export default class TermActionsControl extends React.Component<ITermActionsControlProps, ITermActionsControlState> {
    constructor(props: ITermActionsControlProps);
    /**
     * componentWillMount lifecycle hook
     */
    componentWillMount(): void;
    /**
     * Get the available term actions
     */
    private getAvailableActions();
    /**
     * Default React render method
     */
    render(): React.ReactElement<ITermActionsControlProps>;
}
