import * as tslib_1 from "tslib";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { A11yManager } from '@ms/sp-a11y';
import { BaseApplication } from '@microsoft/sp-application-base';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { Text } from '@microsoft/sp-core-library';
import ErrorDialog from './components/error/ErrorDialog';
import { WorkBench } from './components/workbench/Workbench';
import { PageStore } from './stores/PageStore';
import strings from './spWebpartWorkbench.resx';
import './workbench.module.scss';
var DEBUG_MANIFESTS_URLS_TO_TRY = [
    'https://localhost:4321/temp/manifests.js',
    'http://localhost:4321/temp/manifests.js'
];
var SpWebpartWorkbench =  (function (_super) {
    tslib_1.__extends(SpWebpartWorkbench, _super);
    function SpWebpartWorkbench() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpWebpartWorkbench.prototype.onLoad = function () {
        var _this = this;
        this._pageStore = new PageStore(this.context.serviceScope);
        if (window.ENVIRONMENTTYPE !== 'Local') { 
            var debugManifestsPromise = SPComponentLoader._loadDebugManifestsForWorkbench(DEBUG_MANIFESTS_URLS_TO_TRY[0]);
            var _loop_1 = function (i) {
                debugManifestsPromise.catch(function (error) {
                    return SPComponentLoader._loadDebugManifestsForWorkbench(DEBUG_MANIFESTS_URLS_TO_TRY[i]);
                });
            };
            for (var i = 1; i < DEBUG_MANIFESTS_URLS_TO_TRY.length; i++) {
                _loop_1(i);
            }
            debugManifestsPromise.then(function () {
                console.debug(strings.SuccessfullyLoadedText); 
                _this._pageStore.setPageReady();
            }).catch(function (error) {
                var errorMessage = Text.format(strings.ErrorLoadingText, error.toString());
                console.error(errorMessage); 
                _this._renderErrorDialog();
                _this._pageStore.setPageReady();
            });
        }
        else {
            this._pageStore.setPageReady();
        }
        return Promise.resolve();
    };
    SpWebpartWorkbench.prototype.onRender = function () {
        var a11yManager = A11yManager.create(this.domElement);
        ReactDOM.render(
        React.createElement("div", null,
            React.createElement(WorkBench, { pageStore: this._pageStore, a11yManagerId: a11yManager.id })), this.domElement);
    };
    SpWebpartWorkbench.prototype._renderErrorDialog = function () {
        if (!this._errorDialog) {
            var div = document.createElement('div');
            this._errorDialog = ReactDOM.render(React.createElement(ErrorDialog, null), div);
            document.body.insertBefore(div, document.body.lastChild.nextSibling);
        }
        this._errorDialog.open();
    };
    return SpWebpartWorkbench;
}(BaseApplication));
export { SpWebpartWorkbench as application };
export default new SpWebpartWorkbench();
