/// <reference types="react" />
import * as React from 'react';
import { IPropertyFieldSwatchColorPickerHostProps, IPropertyFieldSwatchColorPickerHostState } from './IPropertyFieldSwatchColorPickerHost';
export default class PropertyFieldSwatchColorPickerHost extends React.Component<IPropertyFieldSwatchColorPickerHostProps, IPropertyFieldSwatchColorPickerHostState> {
    constructor(props: IPropertyFieldSwatchColorPickerHostProps, state: IPropertyFieldSwatchColorPickerHostState);
    render(): JSX.Element;
    private renderSwatchColorPicker();
    private onTogglePicker();
    private selectedColorId();
}
