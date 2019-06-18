import { default as SPComponentLoader } from './../SPComponentLoaderProxy';
import * as componentConstants from './../utilities/componentConstants';
var F12_KEYCODE = 123;
var MAC_PLATFORM_IDENTIFIER = 'MacIntel';
var _listenerHasBeenRegistered = false;
var _developerTools;
var _developerToolsTabsBacklog = [];
export function initialize() {
    if (!_listenerHasBeenRegistered) {
        document.documentElement.addEventListener('keydown', function (event) {
            var isMac = navigator.platform === MAC_PLATFORM_IDENTIFIER;
            if (((event.ctrlKey && !event.metaKey) || (isMac && event.metaKey && !event.ctrlKey)) &&
                !event.altKey &&
                event.keyCode === F12_KEYCODE) {
                toggleDeveloperTools();
                event.preventDefault();
            }
        });
        _listenerHasBeenRegistered = true;
    }
}
export function registerDeveloperToolsTab(developerToolsTab) {
    if (_developerTools) {
        _developerTools.registerDeveloperToolsTab(developerToolsTab);
    }
    else {
        _developerToolsTabsBacklog.push(developerToolsTab);
    }
}
export function toggleDeveloperTools() {
    if (_developerTools) {
        _developerTools.toggleDeveloperTools();
    }
    else {
        if (NPM_BUILD) {
            require.include('react');
            require.include('react-dom');
            var reactPromise = SPComponentLoader.loadComponentById(componentConstants.reactComponentId);
            var reactDomPromise = SPComponentLoader.loadComponentById(componentConstants.reactDomComponentId);
            Promise.all([reactPromise, reactDomPromise])
                .then(function (results) {
                var react = results[0];
                var reactDom = results[1];
                _injectReactIntoCache(react, reactDom);
                require.ensure(['./DeveloperTools'], function (require) {
                    _initializeDeveloperTools(require('./DeveloperTools').default);
                }, 'developer-tools');
            });
        }
        else {
            require.ensure(['./DeveloperTools'], function (require) {
                _initializeDeveloperTools(require('./DeveloperTools').default);
            }, 'developer-tools');
        }
    }
}
function _injectReactIntoCache(react, reactDom) {
    var reactId = require.resolveWeak('react');
    var reactDomId = require.resolveWeak('react-dom');
    if (!require.cache[reactId]) {
        require.cache[reactId] = {
            exports: react
        };
    }
    else {
        require.cache[reactId].exports = react;
    }
    if (!require.cache[reactDomId]) {
        require.cache[reactDomId] = {
            exports: reactDom
        };
    }
    else {
        require.cache[reactDomId].exports = reactDom;
    }
}
function _initializeDeveloperTools(developerToolsClass) {
    _developerTools = developerToolsClass.instance;
    _developerTools.initialize();
    _developerToolsTabsBacklog.forEach(function (developerToolsTab) {
        _developerTools.registerDeveloperToolsTab(developerToolsTab);
    });
    _developerTools.showHideDeveloperTools(true);
}
