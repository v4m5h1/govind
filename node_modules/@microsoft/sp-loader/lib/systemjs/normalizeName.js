import normalizeComponentId from '../utilities/normalizeComponentId';
var _componentBaseUrl = 'https://component-id.invalid/';
export default function normalizeName(manifest, name) {
    if (name) {
        return _componentBaseUrl + [normalizeManifestId(manifest), name].join('/');
    }
    else {
        return _componentBaseUrl + normalizeManifestId(manifest);
    }
}
function normalizeManifestId(manifest) {
    return normalizeComponentId(manifest.id, manifest.version);
}
export function normalizeFailoverPathName(name) {
    return _componentBaseUrl + name;
}
