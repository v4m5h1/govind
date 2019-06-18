import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export interface IActionItemSliderWebPartProps {
    description: string;
    lists: any;
    multiSelect: string[];
    fieldsFetched: boolean;
    fieldsArray: {
        key: any;
        text: any;
    }[];
}
export default class ActionItemSliderWebPart extends BaseClientSideWebPart<IActionItemSliderWebPartProps> {
    onInit(): Promise<void>;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    getListFields(): void;
    private onListPickerChange;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ActionItemSliderWebPart.d.ts.map