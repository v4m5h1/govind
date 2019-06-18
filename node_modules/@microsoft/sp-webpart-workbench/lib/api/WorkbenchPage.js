"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fsx = require("fs-extra");
const node_core_library_1 = require("@microsoft/node-core-library");
const Resolve_1 = require("@microsoft/sp-build-core-tasks/lib/utilities/Resolve");
const ASSEMBLY_MANIFEST_ID = '44bae1a2-d2eb-4e10-8c21-a1dbdce1036f'; // loader assembly
const REACT_MANIFEST_ID = '0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d';
const REACT_DOM_MANIFEST_ID = 'aa0a46ec-1505-43cd-a44a-93f3a5aa460a';
class WorkbenchPage {
    constructor() {
        this._packageNameSymlinks = new Map();
        this._projectRootPath = process.cwd();
        this._tempFolderPath = path.join(this._projectRootPath, 'temp');
        this._workbenchPackagesTempPath = path.join(this._tempFolderPath, 'workbench-packages');
        this._workbenchRootPath = path.resolve(__dirname, '..', '..');
        this.handleWorkbenchRequest = this.handleWorkbenchRequest.bind(this);
        fsx.ensureDirSync(this._workbenchPackagesTempPath);
        fsx.emptyDirSync(this._workbenchPackagesTempPath);
    }
    /* tslint:disable-next-line:no-any */
    handleWorkbenchRequest(request, response) {
        const workbenchFilePath = path.join(this._tempFolderPath, 'workbench.html');
        fsx.ensureDirSync(path.dirname(workbenchFilePath));
        fsx.writeFileSync(workbenchFilePath, this._generateWorkbenchPageContent());
        const redirectPath = this._getUrlForPath(workbenchFilePath);
        response.redirect(redirectPath);
    }
    _generateWorkbenchPageContent() {
        // Get the manifests.js URL.
        const manifestsJsPath = path.join(this._tempFolderPath, 'manifests.js');
        const manifestJsUrl = this._getUrlForPath(manifestsJsPath);
        const workbenchInitUrl = this._getUrlForPackagePath('@microsoft/sp-webpart-workbench', path.join('lib', 'api', 'workbenchInit.js'));
        const assemblyUrl = this._assemblyUrl;
        let head;
        let body;
        if (!assemblyUrl) {
            // This doesn't need to be localized because this string can only show up when the workbench
            //  has been NPM installed, and we only ship English modules to NPM
            body = this._getErrorBody('The script containing the initialization code could not be resolved. Unable to load workbench');
        }
        else {
            head = `
    <script type="text/javascript" src="${manifestJsUrl}"></script>
    <script type="text/javascript" src="${assemblyUrl}"></script>
    <script type="text/javascript">
      // The workbenchInit.js script is commonJS and expects an "exports" object
      var exports = {};

      var syntheticManifests = ${JSON.stringify(this._generateSyntheticManifests(), undefined, 2)}
    </script>
    <script type="text/javascript" src="${workbenchInitUrl}"></script>
    <script type="text/javascript">
      // Clean up the "exports" object
      exports = undefined;
    </script>`;
            body = `
    <script type="text/javascript">
      window.spModuleLoader.start(window.preloadedData);
    </script>`;
        }
        return this._getPageWithBodyAndHead(body, head);
    }
    /**
     * Generate a favicon URL. Chrome will request one if we don't give a URL, so in order to avoid an error in the
     * console we'll give a URL.
     */
    get _faviconUrl() {
        return this._getUrlForPackagePath('@microsoft/sp-webpart-workbench', path.join('lib', 'api', 'assets', 'server-icon.png'));
    }
    /**
     * Find the assembly.
     */
    get _assemblyUrl() {
        try {
            const assemblyPath = this._getAssemblyPath();
            return this._getUrlForPackagePath('@microsoft/sp-loader', assemblyPath);
        }
        catch (e) {
            // Unable to get the assembly URL. We'll inform the user if they try to load the workbench page.
            return undefined;
        }
    }
    /**
     * Get the running project's serve.json
     */
    get _serveConfig() {
        if (!this._cachedServeConfig) {
            try {
                this._cachedServeConfig = node_core_library_1.JsonFile.load(path.join(this._projectRootPath, 'config', 'serve.json'));
            }
            catch (e) {
                // Could not load serve config, setting defaults.
                this._cachedServeConfig = {
                    port: 4321,
                    initialPage: ''
                };
            }
        }
        return this._cachedServeConfig;
    }
    _getErrorBody(errorMessage) {
        return `
    <span style="font-weight:bold;color:red;font-size:20px;">
      ${errorMessage}
    </span>`;
    }
    _getPageWithBodyAndHead(body, head) {
        return `<!doctype html>
  <html dir="ltr">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>SharePoint Web Part Workbench</title>

    <link rel="shortcut icon" href="${this._faviconUrl}" />
  ${head || ''}
  </head>
  <body>
  ${body}
  </body>
  </html>
  `;
    }
    _getAssemblyPath() {
        const loaderRootPath = Resolve_1.resolvePackage('@microsoft/sp-loader', this._workbenchRootPath);
        const distFolder = path.join(loaderRootPath, 'dist');
        const assemblyManifestPath = path.join(distFolder, `${ASSEMBLY_MANIFEST_ID}.manifest.json`);
        const assemblyManifest = node_core_library_1.JsonFile.load(assemblyManifestPath);
        const assemblyEntryModuleConfig = assemblyManifest.loaderConfig.scriptResources[assemblyManifest.loaderConfig.entryModuleId];
        if (!assemblyEntryModuleConfig) {
            throw 'Unable to find assembly entrypoint';
        }
        let foundPath;
        switch (assemblyEntryModuleConfig.type) {
            case 'path':
                foundPath = this._disambiguateManifestPath(assemblyEntryModuleConfig.path);
                break;
            case 'localizedPath':
                foundPath = this._disambiguateManifestPath(assemblyEntryModuleConfig.defaultPath);
                break;
            default:
                throw `Invalid module assembly manifest found at ${assemblyManifestPath}`;
        }
        if (!foundPath) {
            throw 'Unable to find assembly path';
        }
        return foundPath;
    }
    _disambiguateManifestPath(pathToDisambiguate) {
        if (typeof pathToDisambiguate === 'string') {
            return pathToDisambiguate;
        }
        else {
            return pathToDisambiguate.debug || pathToDisambiguate.default;
        }
    }
    _getUrlForPackagePath(packageName, pathInsidePackage) {
        const normalizedPackageName = packageName.toUpperCase();
        if (!this._packageNameSymlinks.has(normalizedPackageName)) {
            const packagePath = Resolve_1.resolvePackage(packageName, this._workbenchRootPath);
            const symlinkPath = path.join(this._workbenchPackagesTempPath, packageName.replace(/\//g, '_') // Replace slashes with underscores so we don't create nested directories
            );
            fsx.symlinkSync(packagePath, symlinkPath, 'junction');
            this._packageNameSymlinks.set(normalizedPackageName, symlinkPath);
        }
        const linkedPackagePath = this._packageNameSymlinks.get(normalizedPackageName);
        const filePath = path.join(linkedPackagePath, pathInsidePackage);
        return this._getUrlForPath(filePath);
    }
    _getUrlForPath(filePath) {
        const relativePath = path.relative(this._projectRootPath, filePath);
        return (this._serveConfig.https ? 'https' : 'http') +
            `://localhost:${this._serveConfig.port}/${relativePath.replace(/\\/g, '/')}`;
    }
    _generateSyntheticManifests() {
        // Figure out where React is
        const reactPackagePath = Resolve_1.resolvePackage('react', __dirname);
        const reactPackage = node_core_library_1.JsonFile.load(path.join(reactPackagePath, 'package.json'));
        const reactUrl = this._getUrlForPackagePath('react', path.join('umd', 'react.development.js'));
        // Figure out where React-DOM is
        const reactDomPackagePath = Resolve_1.resolvePackage('react-dom', __dirname);
        const reactDomPackage = node_core_library_1.JsonFile.load(path.join(reactDomPackagePath, 'package.json'));
        const reactDomUrl = this._getUrlForPackagePath('react-dom', path.join('umd', 'react-dom.development.js'));
        const reactManifest = {
            id: REACT_MANIFEST_ID,
            manifestVersion: 2,
            componentType: 'Library',
            alias: 'react',
            version: reactPackage.version,
            loaderConfig: {
                internalModuleBaseUrls: [],
                entryModuleId: 'react',
                scriptResources: {
                    'react': {
                        type: 'path',
                        path: reactUrl
                    }
                }
            }
        };
        const reactDomManifest = {
            id: REACT_DOM_MANIFEST_ID,
            manifestVersion: 2,
            componentType: 'Library',
            alias: 'react-dom',
            version: reactDomPackage.version,
            loaderConfig: {
                internalModuleBaseUrls: [],
                entryModuleId: 'react-dom',
                scriptResources: {
                    'react-dom': {
                        type: 'path',
                        path: reactDomUrl
                    },
                    'react': {
                        type: 'component',
                        id: REACT_MANIFEST_ID,
                        version: reactPackage.version
                    }
                }
            }
        };
        return [
            reactManifest,
            reactDomManifest
        ];
    }
}
exports.WorkbenchPage = WorkbenchPage;
//# sourceMappingURL=WorkbenchPage.js.map