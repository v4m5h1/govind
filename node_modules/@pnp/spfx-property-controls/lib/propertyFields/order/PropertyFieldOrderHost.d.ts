/// <reference types="react" />
import * as React from 'react';
import { IPropertyFieldOrderHostProps, IPropertyFieldOrderHostState } from './IPropertyFieldOrderHost';
export default class PropertyFieldOrderHost extends React.Component<IPropertyFieldOrderHostProps, IPropertyFieldOrderHostState> {
    private _draggedItem;
    private _selection;
    private _ddHelper;
    private _refs;
    private _ddSubs;
    private _lastBox;
    constructor(props: IPropertyFieldOrderHostProps, state: IPropertyFieldOrderHostState);
    render(): JSX.Element;
    private renderItem(item, index);
    private renderDisplayValue(item, index);
    private renderArrows(index);
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUpdate(nextProps: IPropertyFieldOrderHostProps): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private registerRef;
    private setupSubscriptions;
    private cleanupSubscriptions;
    private insertBeforeItem;
    private onMoveUpClick;
    private onMoveDownClick;
    private moveItemAtIndexToTargetIndex;
}
