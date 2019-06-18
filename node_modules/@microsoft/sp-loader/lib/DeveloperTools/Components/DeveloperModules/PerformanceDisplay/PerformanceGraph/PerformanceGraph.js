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
import styles from './PerformanceGraph.module.scss';
import PerformanceGraphItem from './PerformanceGraphItem/PerformanceGraphItem';
import strings from './../PerformanceDisplay.resx';
var PerformanceGraph =  (function (_super) {
    __extends(PerformanceGraph, _super);
    function PerformanceGraph(props) {
        var _this = _super.call(this, props) || this;
        _this._scale = Math.ceil(_this.props.overallDuration / 100) * 100;
        return _this;
    }
    PerformanceGraph.prototype.render = function () {
        var _this = this;
        var graphBars = [];
        this.props.perfItems.map(function (item) {
            graphBars.push(React.createElement(PerformanceGraphItem, { key: item.id, perfItem: item, startTime: _this.props.startTime, overallDuration: _this._scale }));
        });
        var delimiters = [];
        for (var i = 1; i <= 10; i++) {
            delimiters.push(React.createElement("th", { key: i, className: styles.thDelimiter }, i * (this._scale / 10)));
        }
        var nameStyle = [
            styles.tableRowPerfList,
            styles.tableRowRightLight,
            styles.tableRowName
        ].join(' ');
        var durationStyle = [styles.tableRowPerfList, styles.tableRowDuration].join(' ');
        return (React.createElement("div", { className: styles.container },
            React.createElement("table", { className: styles.tableDelimiter },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { className: nameStyle }, strings.ItemsColumnHeader),
                        React.createElement("th", { className: durationStyle }, strings.DurationColumnHeader),
                        delimiters)),
                React.createElement("tbody", null, graphBars))));
    };
    return PerformanceGraph;
}(React.Component));
export default PerformanceGraph;
