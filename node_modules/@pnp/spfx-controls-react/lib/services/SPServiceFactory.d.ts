import { ExtensionContext } from '@microsoft/sp-extension-base';
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ISPService } from "./ISPService";
export declare class SPServiceFactory {
    static createService(context: WebPartContext | ExtensionContext, includeDelay?: boolean, delayTimeout?: number): ISPService;
}
