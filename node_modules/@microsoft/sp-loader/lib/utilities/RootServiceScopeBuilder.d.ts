import { ServiceScope } from '@microsoft/sp-core-library';
import { IPreloadedData } from '../IPreloadedData';
/**
 * Builds a new root service scope, initialized with the preloaded data.
 *
 * @remarks
 * This should only be created once, at the initialization of SPFx.
 */
export default class RootServiceScopeBuilder {
    /**
     * Log source for the root service scope
     */
    private static readonly _logSource;
    private static readonly oboFlowKillSwitchGuid;
    private static readonly PRELOAD_DIGEST_EXPIRATION_SLOP_MS;
    /**
     * Creates a root service scope and it initializes with SPFx services (page context, http clients)
     */
    static build(preloadedData: IPreloadedData): ServiceScope;
    private static _initializeGraphHttpClient;
    private static _initializeDigestCache;
}
//# sourceMappingURL=RootServiceScopeBuilder.d.ts.map