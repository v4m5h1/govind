import { Guid, Version } from '@microsoft/sp-core-library';
export default function normalizeComponentId(id, version) {
    id = (typeof id === 'string') ? Guid.parse(id) : id;
    version = (typeof version === 'string') ? Version.parse(version) : version;
    return id.toString() + "_" + version.toString();
}
