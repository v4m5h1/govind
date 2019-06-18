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
import styles from './TraceListItem.module.scss';
import { LogLevel } from '../../../../../Stores/TraceDisplayStore';
import { formatTimestamp } from './../traceFormatting';
var TraceListItem =  (function (_super) {
    __extends(TraceListItem, _super);
    function TraceListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TraceListItem.prototype.render = function () {
        var styleDeclarations;
        var message;
        styleDeclarations = [styles.container];
        if (this.props.id % 2 === 0) {
            styleDeclarations.push(styles.blueBackground);
        }
        if (Number(this.props.trace.level) === LogLevel.error) {
            message = this.props.trace.error ? this.props.trace.error.message : this.props.trace.message;
            styleDeclarations.push(styles.redText);
        }
        else {
            message = this.props.trace.message;
        }
        return (React.createElement("li", { key: this.props.id, className: styleDeclarations.join(' ') },
            React.createElement("ul", { className: styles.itemDetails },
                React.createElement("li", { className: styles.timestamp }, formatTimestamp(this.props.trace.timestamp)),
                React.createElement("li", { className: styles[LogLevel[this.props.trace.level]] }, LogLevel[this.props.trace.level]),
                React.createElement("li", { className: styles.scope }, this.props.trace.scope ? this.props.trace.scope.id : undefined),
                React.createElement("li", { className: styles.source }, this.props.trace.source),
                React.createElement("li", { className: styles.message }, message))));
    };
    return TraceListItem;
}(React.Component));
export default TraceListItem;
