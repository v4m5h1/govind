import normalizeComponentId from '../utilities/normalizeComponentId';
export default function normalizeName(manifest, name) {
    if (name) {
        return _normalizeManifestId(manifest) + "/" + name;
    }
    else {
        return _normalizeManifestId(manifest);
    }
}
function _normalizeManifestId(manifest) {
    return normalizeComponentId(manifest.id, manifest.version);
}
export function normalizeFailoverPathName(name) {
    return name;
}
