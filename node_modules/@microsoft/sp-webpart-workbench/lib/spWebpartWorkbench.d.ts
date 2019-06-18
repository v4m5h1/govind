import { BaseApplication } from '@microsoft/sp-application-base';
import './workbench.module.scss';
/**
 * Web part workbench.
 */
declare class SpWebpartWorkbench extends BaseApplication {
    private _pageStore;
    private _errorDialog;
    protected onLoad(): Promise<void>;
    protected onRender(): void;
    private _renderErrorDialog;
}
export { SpWebpartWorkbench as application };
declare const _default: BaseApplication;
export default _default;
//# sourceMappingURL=spWebpartWorkbench.d.ts.map