/// <reference types="react" />
import * as React from 'react';
import { IFileTypeIconProps } from './IFileTypeIcon';
/**
* File type icon component
*/
export declare class FileTypeIcon extends React.Component<IFileTypeIconProps, {}> {
    constructor(props: IFileTypeIconProps);
    /**
    * Function which returns the font icon
    */
    private _getIconClassName();
    /**
    * Function which returns the image icon
    */
    private _getIconImageName();
    /**
    * Function to retrieve the file extension from the path
    *
    * @param value File path
    */
    private _getFileExtension(value);
    /**
    * Find the icon name for the provided extension
    *
    * @param extension File extension
    */
    private _getIconByExtension(extension, iconType);
    /**
    * Find the icon name for the application
    *
    * @param application
    */
    private _getIconByApplicationType(application, iconType);
    /**
    * Return the right image size for the provided value
    *
    * @param value Image size value
    */
    private _getFileSizeName(value);
    /**
    * Default React component render method
    */
    render(): React.ReactElement<IFileTypeIconProps>;
}
