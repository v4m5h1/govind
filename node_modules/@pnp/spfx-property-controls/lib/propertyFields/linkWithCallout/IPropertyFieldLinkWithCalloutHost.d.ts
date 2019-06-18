import { IPlaceholderWithCalloutProps } from '../../common/placeholderWithCallout/IPlaceholderWithCallout';
import { IPopupWindowProps } from '@microsoft/sp-webpart-base/lib/propertyPane/propertyPaneFields/propertyPaneLink/IPropertyPaneLink';
import { ILinkProps } from 'office-ui-fabric-react/lib/components/Link';
/**
 * PropertyFieldLinkWithCalloutHost properties interface
 */
export interface IPropertyFieldLinkWithCalloutHostProps extends ILinkProps, IPlaceholderWithCalloutProps {
    text: string;
    popupWindowProps?: IPopupWindowProps;
}
