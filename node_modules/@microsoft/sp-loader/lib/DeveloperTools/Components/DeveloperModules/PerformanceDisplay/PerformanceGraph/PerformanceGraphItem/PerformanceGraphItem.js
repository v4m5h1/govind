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
import * as React from 'react';
import { Text } from '@microsoft/sp-core-library';
import styles from './PerformanceGraphItem.module.scss';
import legendStyles from './../../PerformanceHeader/PerformanceLegend/PerformanceLegend.module.scss';
import strings from './../../PerformanceDisplay.resx';
var PerformanceGraphItem =  (function (_super) {
    __extends(PerformanceGraphItem, _super);
    function PerformanceGraphItem(props) {
        var _this = _super.call(this, props) || this;
        _this._drawGraphBar = _this._drawGraphBar.bind(_this);
        return _this;
    }
    PerformanceGraphItem.prototype.render = function () {
        var nameStyle = [
            styles.tableRowPerfList,
            styles.tableRowBottomLight,
            styles.tableRowRightLight
        ].join(' ');
        var durationStyle = [styles.tableRowPerfList, styles.tableRowBottomLight].join(' ');
        var graphBar = [];
        var perfItem = this.props.perfItem;
        if (perfItem.breakdown) {
            graphBar.push(this._drawGraphBar(perfItem.breakdown.render.startVal, perfItem.breakdown.render.duration, legendStyles.msBlueMid, strings.RenderTimeLegendLabel + " " + perfItem.breakdown.render.duration + " ms"));
            if (perfItem.breakdown.modulesLoaded) {
                graphBar.push(this._drawGraphBar(perfItem.breakdown.modulesLoaded.startVal, perfItem.breakdown.modulesLoaded.duration, legendStyles.msBlue, strings.ModuleLoadingTimeLabel + " " + perfItem.breakdown.modulesLoaded.duration + " ms"));
            }
            if (perfItem.breakdown.lazyLoading) {
                graphBar.push(this._drawGraphBar(perfItem.breakdown.lazyLoading.startVal, perfItem.breakdown.lazyLoading.duration, legendStyles.msLightGreen, strings.ModuleLazyLoadingDelayLabel + " " + perfItem.breakdown.lazyLoading.duration + " ms"));
            }
            if (perfItem.breakdown.init) {
                graphBar.push(this._drawGraphBar(perfItem.breakdown.init.startVal, perfItem.breakdown.init.duration, legendStyles.msPurpleLight, strings.InitializationTimeLabel + " " + perfItem.breakdown.init.duration + " ms"));
            }
            if (perfItem.breakdown.dataFetch) {
                for (var _i = 0, _a = perfItem.breakdown.dataFetch; _i < _a.length; _i++) {
                    var apiCall = _a[_i];
                    graphBar.push(this._drawGraphBar(apiCall.startVal, apiCall.duration, legendStyles.msTealLight, strings.DataFetchTimeLabel + " " + apiCall.duration + " ms"));
                }
            }
        }
        else {
            graphBar.push(this._drawGraphBar(perfItem.startVal, perfItem.duration, legendStyles.msThemeTertiary, perfItem.name + " " + perfItem.duration + " ms"));
        }
        return (React.createElement("tr", null,
            React.createElement("td", { className: nameStyle }, this.props.perfItem.name),
            React.createElement("td", { className: durationStyle }, Text.format(strings.MillisecondsUnitLabel, this.props.perfItem.duration)),
            React.createElement("td", { className: styles.tdDelimiter }, graphBar),
            React.createElement("td", { className: styles.tdDelimiter }),
            React.createElement("td", { className: styles.tdDelimiter }),
            React.createElement("td", { className: styles.tdDelimiter }),
            React.createElement("td", { className: styles.tdDelimiter }),
            React.createElement("td", { className: styles.tdDelimiter }),
            React.createElement("td", { className: styles.tdDelimiter }),
            React.createElement("td", { className: styles.tdDelimiter }),
            React.createElement("td", { className: styles.tdDelimiter }),
            React.createElement("td", { className: styles.tdDelimiter })));
    };
    PerformanceGraphItem.prototype._drawGraphBar = function (startVal, duration, barColor, tooltip) {
        var leftVal = ((startVal - this.props.startTime) / this.props.overallDuration);
        var widthVal = (duration / this.props.overallDuration);
        var nameTableWidth = '320px';
        var barStyling = {
            left: "calc(" + leftVal + " * (100% - " + nameTableWidth + ") + " + nameTableWidth + ")",
            width: "calc(" + widthVal + " * (100% - " + nameTableWidth + "))"
        };
        var barClass = [styles.bar, barColor].join(' ');
        return React.createElement("div", { key: "" + leftVal + widthVal, className: barClass, style: barStyling, title: tooltip });
    };
    return PerformanceGraphItem;
}(React.Component));
export default PerformanceGraphItem;
