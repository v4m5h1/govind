import { Validate } from '@microsoft/sp-core-library';
import ComponentStore from './stores/ComponentStore';
import ManifestStore from './stores/ManifestStore';
import { react16Version, reactComponentId, reactDomComponentId } from './utilities/componentConstants';
var ComponentOverrider =  (function () {
    function ComponentOverrider() {
    }
    ComponentOverrider.overrideComponent = function (componentId, componentModule, serviceScope, moduleLoaderServiceKey) {
        Validate.isNonemptyString(componentId, 'componentId');
        Validate.isNotNullOrUndefined(componentModule, 'componentModule');
        var version = ComponentOverrider.getReactVersionIfNecessary(componentId);
        var manifest = ManifestStore.instance.tryGetManifest(componentId, version);
        if (!manifest) {
            return;
        }
        serviceScope.consume(moduleLoaderServiceKey).ensure(manifest, componentModule);
        ComponentStore.instance.storeLoadedComponent(manifest.id, manifest.version, componentModule);
    };
    ComponentOverrider.getReactVersionIfNecessary = function (componentId) {
        if (componentId === reactComponentId || componentId === reactDomComponentId) {
            return react16Version;
        }
        else {
            return undefined;
        }
    };
    return ComponentOverrider;
}());
export default ComponentOverrider;
