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
var ChartControl_module_scss_1 = require("./ChartControl.module.scss");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var AccessibleChartTable = (function (_super) {
    __extends(AccessibleChartTable, _super);
    function AccessibleChartTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccessibleChartTable.prototype.render = function () {
        var _a = this.props, onRenderTable = _a.onRenderTable, data = _a.data;
        if (data === undefined || data.datasets === undefined || data.datasets.length < 1) {
            // tslint:disable-next-line:no-null-keyword
            return null;
        }
        if (onRenderTable !== undefined) {
            return (React.createElement("div", { className: ChartControl_module_scss_1.default.accessibleTable }, onRenderTable()));
        }
        var tableBody = this._renderTableBody();
        return (React.createElement("div", { className: Utilities_1.css(ChartControl_module_scss_1.default.accessibleTable, this.props.className) }, tableBody && tableBody.length > 0 ?
            React.createElement("table", null,
                this._renderCaption(),
                React.createElement("thead", null, this._renderTableHeader()),
                React.createElement("tbody", null, tableBody))
            : undefined));
    };
    /**
     * Adds a caption to the top of the accessible table
     */
    AccessibleChartTable.prototype._renderCaption = function () {
        var summary = this.props.summary;
        var title = this._getAccessibleTitle();
        var summaryElement = summary && React.createElement("span", null, sp_lodash_subset_1.escape(summary));
        return title || summary ?
            React.createElement("caption", null,
                sp_lodash_subset_1.escape(title),
                title && summaryElement && React.createElement("br", null),
                summaryElement) : undefined;
    };
    /**
     * Renders the table's headers for X and Y axes
     */
    AccessibleChartTable.prototype._renderTableHeader = function () {
        var _a = this.props, chartOptions = _a.chartOptions, data = _a.data;
        var datasets = data.datasets;
        // See if there are labels; we'll need them for the headers
        var hasLabels = true;
        datasets.forEach(function (dataSet) {
            if (dataSet.label === undefined) {
                hasLabels = false;
            }
        });
        // If there are no labels, there is no need to render headers
        if (!hasLabels) {
            return undefined;
        }
        // Get the Y Axis label
        var yAxisLabel = chartOptions
            && chartOptions.scales
            && chartOptions.scales.yAxes
            && chartOptions.scales.yAxes[0].scaleLabel
            && chartOptions.scales.yAxes[0].scaleLabel.labelString;
        // Generate the Y header row
        var yHeaderRow = yAxisLabel
            && React.createElement("tr", { key: "yHeader-" + sp_core_library_1.Guid.newGuid().toString() },
                React.createElement("th", null),
                React.createElement("th", { colSpan: datasets.length }, sp_lodash_subset_1.escape(yAxisLabel)));
        // Get the X axis label
        var xAxisLabel = chartOptions
            && chartOptions.scales
            && chartOptions.scales.xAxes
            && chartOptions.scales.xAxes[0].scaleLabel
            && chartOptions.scales.xAxes[0].scaleLabel.labelString;
        // Generate the X asix table cells
        var xHeaderCells = datasets.map(function (dataSet) {
            return React.createElement("th", { scope: 'col', key: "colHeading-" + sp_core_library_1.Guid.newGuid().toString() }, sp_lodash_subset_1.escape(dataSet.label));
        });
        // Generate the X axis header row
        var xHeaderRow = React.createElement("tr", { key: "xHeader-" + sp_core_library_1.Guid.newGuid().toString() },
            React.createElement("th", null, sp_lodash_subset_1.escape(xAxisLabel)),
            xHeaderCells);
        return [
            yHeaderRow,
            xHeaderRow
        ];
    };
    /**
     * Renders an accessible table body with data from the chart
     */
    AccessibleChartTable.prototype._renderTableBody = function () {
        var data = this.props.data;
        // The data must have matching labels to render
        // otherwise this is pointless
        return data.labels && data.labels.map(function (labelValue, rowIndex) {
            var cells = data.datasets.map(function (dataSet, dsIndex) {
                return React.createElement("td", { key: "dataCell-" + sp_core_library_1.Guid.newGuid().toString() }, dataSet.data[rowIndex]);
            });
            return React.createElement("tr", { key: "dataRow-" + sp_core_library_1.Guid.newGuid().toString() },
                React.createElement("th", { key: "dataCellHEader-" + sp_core_library_1.Guid.newGuid().toString() }, sp_lodash_subset_1.escape(labelValue)),
                cells);
        });
    };
    /**
     * Gets the caption for the table.
     * If no caption, gets the title.
     */
    AccessibleChartTable.prototype._getAccessibleTitle = function () {
        var _a = this.props, chartOptions = _a.chartOptions, caption = _a.caption;
        // Is there a caption?
        if (caption !== undefined) {
            // Let's use it!
            return caption;
        }
        // No caption. Look for the title
        if (chartOptions && chartOptions.title && chartOptions.title.text) {
            // ChartJs supports titles in a string array to make them multiline
            if (chartOptions.title.text instanceof Array) {
                // If we're using an array, join them into a single string
                return chartOptions.title.text.join(' ');
            }
            else {
                // Return the title
                return chartOptions.title.text;
            }
        }
        // If all else fails, no titles for you
        return undefined;
    };
    return AccessibleChartTable;
}(React.Component));
exports.AccessibleChartTable = AccessibleChartTable;

//# sourceMappingURL=AccessibleChartTable.js.map
