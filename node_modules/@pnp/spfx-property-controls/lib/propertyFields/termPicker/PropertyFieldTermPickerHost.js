"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var Spinner_1 = require("office-ui-fabric-react/lib/Spinner");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var TermPicker_1 = require("./TermPicker");
var PropertyFieldTermPickerHost_module_scss_1 = require("./PropertyFieldTermPickerHost.module.scss");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var TermGroup_1 = require("./TermGroup");
var FieldErrorMessage_1 = require("../errorMessage/FieldErrorMessage");
var telemetry = require("../../common/telemetry");
var strings = require("PropertyControlStrings");
/**
 * Image URLs / Base64
 */
exports.COLLAPSED_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAUCAYAAABSx2cSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjEwcrIlkgAAAIJJREFUOE/NkjEKwCAMRdu7ewZXJ/EqHkJwE9TBCwR+a6FLUQsRwYBTeD8/35wADnZVmPvY4OOYO3UNbK1FKeUWH+fRtK21hjEG3vuhQBdOKUEpBedcV6ALExFijJBSIufcFBjCVSCEACEEqpNvBmsmT+3MTnvqn/+O4+1vdtv7274APmNjtuXVz6sAAAAASUVORK5CYII='; // /_layouts/15/images/MDNCollapsed.png
exports.EXPANDED_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAUCAYAAABSx2cSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjEwcrIlkgAAAFtJREFUOE9j/P//PwPZAKSZXEy2RrCLybV1CGjetWvX/46ODqBLUQOXoJ9BGtXU1MCYJM0wjZGRkaRpRtZIkmZ0jSRpBgUOzJ8wmqwAw5eICIb2qGYSkyfNAgwAasU+UQcFvD8AAAAASUVORK5CYII='; // /_layouts/15/images/MDNExpanded.png
exports.GROUP_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC9SURBVDhPY2CgNXh1qEkdiJ8D8X90TNBuJM0V6IpBhoHFgIxebKYTIwYzAMNpxGhGdsFwNoBgNEFjAWsYgOSKiorMgPgbEP/Hgj8AxXpB0Yg1gQAldYuLix8/efLkzn8s4O7du9eAan7iM+DV/v37z546der/jx8/sJkBdhVOA5qbm08ePnwYrOjQoUOkGwDU+AFowLmjR4/idwGukAYaYAkMgxfPnj27h816kDg4DPABoAI/IP6DIxZA4l0AOd9H3QXl5+cAAAAASUVORK5CYII='; // /_layouts/15/Images/EMMGroup.png
exports.TERMSET_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACaSURBVDhPrZLRCcAgDERdpZMIjuQA7uWH4CqdxMY0EQtNjKWB0A/77sxF55SKMTalk8a61lqCFqsLiwKac84ZRUUBi7MoYHVmAfjfjzE6vJqZQfie0AcwBQVW8ATi7AR7zGGGNSE6Q2cyLSPIjRswjO7qKhcPDN2hK46w05wZMcEUIG+HrzzcrRsQBIJ5hS8C9fGAPmRwu/9RFxW6L8CM4Ry8AAAAAElFTkSuQmCC'; // /_layouts/15/Images/EMMTermSet.png
/**
 * Renders the controls for PropertyFieldTermPicker component
 */
var PropertyFieldTermPickerHost = (function (_super) {
    __extends(PropertyFieldTermPickerHost, _super);
    /**
     * Constructor method
     */
    function PropertyFieldTermPickerHost(props) {
        var _this = _super.call(this, props) || this;
        _this.previousValues = [];
        _this.cancel = true;
        telemetry.track('PropertyFieldTermPicker', {
            allowMultipleSelections: props.allowMultipleSelections,
            excludeSystemGroup: props.excludeSystemGroup,
            limitByTermsetNameOrID: !!props.limitByTermsetNameOrID,
            limitByGroupNameOrID: !!props.limitByGroupNameOrID,
            disabled: props.disabled
        });
        _this.termsService = props.termService;
        _this.state = {
            activeNodes: typeof _this.props.initialValues !== 'undefined' ? _this.props.initialValues : [],
            termStores: [],
            loaded: false,
            openPanel: false,
            errorMessage: ''
        };
        _this.onOpenPanel = _this.onOpenPanel.bind(_this);
        _this.onClosePanel = _this.onClosePanel.bind(_this);
        _this.onSave = _this.onSave.bind(_this);
        _this.termsChanged = _this.termsChanged.bind(_this);
        _this.async = new Utilities_1.Async(_this);
        _this.validate = _this.validate.bind(_this);
        _this.termsFromPickerChanged = _this.termsFromPickerChanged.bind(_this);
        _this.notifyAfterValidate = _this.notifyAfterValidate.bind(_this);
        _this.delayedValidate = _this.async.debounce(_this.validate, _this.props.deferredValidationTime);
        return _this;
    }
    /**
     * Loads the list from SharePoint current web site
     */
    PropertyFieldTermPickerHost.prototype.loadTermStores = function () {
        var _this = this;
        this.termsService.getTermStores().then(function (response) {
            // Check if a response was retrieved
            if (response !== null) {
                _this.setState({
                    termStores: response,
                    loaded: true
                });
            }
            else {
                _this.setState({
                    termStores: [],
                    loaded: true
                });
            }
        });
    };
    /**
     * Validates the new custom field value
     */
    PropertyFieldTermPickerHost.prototype.validate = function (value) {
        var _this = this;
        if (this.props.onGetErrorMessage === null || this.props.onGetErrorMessage === undefined) {
            this.notifyAfterValidate(this.props.initialValues, value);
            return;
        }
        var result = this.props.onGetErrorMessage(value || []);
        if (typeof result !== 'undefined') {
            if (typeof result === 'string') {
                if (result === '') {
                    this.notifyAfterValidate(this.props.initialValues, value);
                }
                this.setState({
                    errorMessage: result
                });
            }
            else {
                result.then(function (errorMessage) {
                    if (typeof errorMessage === 'undefined' || errorMessage === '') {
                        _this.notifyAfterValidate(_this.props.initialValues, value);
                    }
                    _this.setState({
                        errorMessage: errorMessage
                    });
                });
            }
        }
        else {
            this.notifyAfterValidate(this.props.initialValues, value);
        }
    };
    /**
     * Notifies the parent Web Part of a property value change
     */
    PropertyFieldTermPickerHost.prototype.notifyAfterValidate = function (oldValue, newValue) {
        if (this.props.onPropertyChange && newValue !== null) {
            this.props.properties[this.props.targetProperty] = newValue;
            this.props.onPropertyChange(this.props.targetProperty, oldValue, newValue);
            // Trigger the apply button
            if (typeof this.props.onChange !== 'undefined' && this.props.onChange !== null) {
                this.props.onChange(this.props.targetProperty, newValue);
            }
        }
    };
    /**
     * Open the right Panel
     */
    PropertyFieldTermPickerHost.prototype.onOpenPanel = function () {
        if (this.props.disabled === true) {
            return;
        }
        // Store the current code value
        this.previousValues = sp_lodash_subset_1.cloneDeep(this.state.activeNodes);
        this.cancel = true;
        this.loadTermStores();
        this.setState({
            openPanel: true,
            loaded: false
        });
    };
    /**
     * Close the panel
     */
    PropertyFieldTermPickerHost.prototype.onClosePanel = function () {
        var _this = this;
        this.setState(function () {
            var newState = {
                openPanel: false,
                loaded: false
            };
            // Check if the property has to be reset
            if (_this.cancel) {
                newState.activeNodes = _this.previousValues;
            }
            return newState;
        });
    };
    /**
     * On save click action
     */
    PropertyFieldTermPickerHost.prototype.onSave = function () {
        this.cancel = false;
        this.delayedValidate(this.state.activeNodes);
        this.onClosePanel();
    };
    /**
     * Clicks on a node
     * @param node
     */
    PropertyFieldTermPickerHost.prototype.termsChanged = function (term, termGroup, checked) {
        var activeNodes = this.state.activeNodes;
        if (typeof term === 'undefined' || term === null) {
            return;
        }
        // Term item to add to the active nodes array
        var termItem = {
            name: term.Name,
            key: term.Id,
            path: term.PathOfTerm,
            termSet: term.TermSet.Id,
            termGroup: termGroup,
            labels: term.Labels
        };
        // Check if the term is checked or unchecked
        if (checked) {
            // Check if it is allowed to select multiple terms
            if (this.props.allowMultipleSelections) {
                // Add the checked term
                activeNodes.push(termItem);
                // Filter out the duplicate terms
                activeNodes = sp_lodash_subset_1.uniqBy(activeNodes, 'key');
            }
            else {
                // Only store the current selected item
                activeNodes = [termItem];
            }
        }
        else {
            // Remove the term from the list of active nodes
            activeNodes = activeNodes.filter(function (item) { return item.key !== term.Id; });
        }
        // Sort all active nodes
        activeNodes = sp_lodash_subset_1.sortBy(activeNodes, 'path');
        // Update the current state
        this.setState({
            activeNodes: activeNodes
        });
    };
    /**
   * Fires When Items Changed in TermPicker
   * @param node
   */
    PropertyFieldTermPickerHost.prototype.termsFromPickerChanged = function (terms) {
        this.delayedValidate(terms);
        this.setState({
            activeNodes: terms
        });
    };
    /**
     * Gets the given node position in the active nodes collection
     * @param node
     */
    PropertyFieldTermPickerHost.prototype.getSelectedNodePosition = function (node) {
        for (var i = 0; i < this.state.activeNodes.length; i++) {
            if (node.key === this.state.activeNodes[i].key) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Called when the component will unmount
     */
    PropertyFieldTermPickerHost.prototype.componentWillUnmount = function () {
        if (typeof this.async !== 'undefined') {
            this.async.dispose();
        }
    };
    /**
     * Renders the SPListpicker controls with Office UI  Fabric
     */
    PropertyFieldTermPickerHost.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            this.props.label && React.createElement(Label_1.Label, null, this.props.label),
            React.createElement("table", { className: PropertyFieldTermPickerHost_module_scss_1.default.termFieldTable },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement(TermPicker_1.default, { context: this.props.context, termPickerHostProps: this.props, disabled: this.props.disabled, value: this.state.activeNodes, onChanged: this.termsFromPickerChanged, allowMultipleSelections: this.props.allowMultipleSelections, isTermSetSelectable: this.props.isTermSetSelectable, disabledTermIds: this.props.disabledTermIds, termsService: this.termsService, resolveDelay: this.props.resolveDelay === undefined ? 500 : this.props.resolveDelay })),
                        React.createElement("td", { className: PropertyFieldTermPickerHost_module_scss_1.default.termFieldRow },
                            React.createElement(Button_1.IconButton, { disabled: this.props.disabled, iconProps: { iconName: 'Tag' }, onClick: this.onOpenPanel }))))),
            React.createElement(FieldErrorMessage_1.default, { errorMessage: this.state.errorMessage }),
            React.createElement(Panel_1.Panel, { isOpen: this.state.openPanel, hasCloseButton: true, onDismiss: this.onClosePanel, isLightDismiss: true, type: Panel_1.PanelType.medium, headerText: this.props.panelTitle, onRenderFooterContent: function () {
                    return (React.createElement("div", { className: PropertyFieldTermPickerHost_module_scss_1.default.actions },
                        React.createElement(Button_1.PrimaryButton, { iconProps: { iconName: 'Save' }, text: strings.SaveButtonLabel, value: strings.SaveButtonLabel, onClick: _this.onSave }),
                        React.createElement(Button_1.DefaultButton, { iconProps: { iconName: 'Cancel' }, text: strings.CancelButtonLabel, value: strings.CancelButtonLabel, onClick: _this.onClosePanel })));
                } },
                /* Show spinner in the panel while retrieving terms */
                this.state.loaded === false ? React.createElement(Spinner_1.Spinner, { type: Spinner_1.SpinnerType.normal }) : '',
                /* Once the state is loaded, start rendering the term store, group, term sets */
                this.state.loaded === true ? this.state.termStores.map(function (termStore, index) {
                    return (React.createElement("div", { key: termStore.Id },
                        !_this.props.hideTermStoreName ? React.createElement("h3", null, termStore.Name) : null,
                        termStore.Groups && termStore.Groups._Child_Items_ && termStore.Groups._Child_Items_.map(function (group) {
                            return React.createElement(TermGroup_1.default, { key: group.Id, group: group, termstore: termStore.Id, termsService: _this.termsService, activeNodes: _this.state.activeNodes, changedCallback: _this.termsChanged, multiSelection: _this.props.allowMultipleSelections, isTermSetSelectable: _this.props.isTermSetSelectable, disabledTermIds: _this.props.disabledTermIds });
                        })));
                }) : '')));
    };
    return PropertyFieldTermPickerHost;
}(React.Component));
exports.default = PropertyFieldTermPickerHost;

//# sourceMappingURL=PropertyFieldTermPickerHost.js.map
