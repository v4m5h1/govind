var _debugComponentsPromise;
export default function ensureDebugComponents() {
    if (!_debugComponentsPromise) {
        _debugComponentsPromise = import( './debugComponents');
    }
    return _debugComponentsPromise;
}
