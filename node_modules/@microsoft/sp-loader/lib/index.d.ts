/**
 * The SharePoint Framework loader
 *
 * @remarks
 * Built on familiar standards such as SystemJS and WebPack,
 * the loader is the first part of the SharePoint Framework to load on a page.
 * It manages versioning and loading of client-side components, web parts,
 * and other assets.  It also implements the developer dashboard.
 *
 * @packagedocumentation
 */
export { default as SPComponentLoader } from './SPComponentLoaderProxy';
export { default as DeveloperTools } from './DeveloperTools/DeveloperToolsProxy';
export { ISPComponentLoader } from './ISPComponentLoader';
export { ILoadScriptOptions } from './ILoadScriptOptions';
export { default as _SPStarter, IErrorInformation as _IErrorInformation } from './SPStarter';
export { IPreloadedData as _IPreloadedData, IPreloadedCustomAction as _IPreloadedCustomAction } from './IPreloadedData';
export { IDebugData as _IDebugData } from './debug/DebugManager';
export { default as _SPLoaderFlights } from './utilities/SPLoaderFlights';
export { default as _ManifestStore, IManifestStoreEntry as _IManifestStoreEntry } from './stores/ManifestStore';
export { default as _ManifestProvider } from './stores/ManifestProvider';
export { IDeveloperTools } from './DeveloperTools/IDeveloperTools';
export { IDeveloperToolsTab } from './DeveloperTools/IDeveloperToolsTab';
//# sourceMappingURL=index.d.ts.map