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
var HoverCard_1 = require("office-ui-fabric-react/lib/HoverCard");
var FieldUserRenderer_module_scss_1 = require("./FieldUserRenderer.module.scss");
/**
 * Component to render User name with related Hover Card
 */
var FieldUserHoverCard = (function (_super) {
    __extends(FieldUserHoverCard, _super);
    function FieldUserHoverCard(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            contentRendered: undefined
        };
        return _this;
    }
    FieldUserHoverCard.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: FieldUserRenderer_module_scss_1.default.user, style: this.props.cssProps },
            React.createElement("span", { ref: function (c) { return !_this.state.contentRendered && _this.setState({ contentRendered: c }); }, "data-is-focusable": true }, this.props.displayName),
            this.state.contentRendered && this.props.expandingCardProps.onRenderCompactCard &&
                React.createElement(HoverCard_1.HoverCard, { expandingCardProps: this.props.expandingCardProps, target: this.state.contentRendered, cardDismissDelay: 0 })));
    };
    return FieldUserHoverCard;
}(React.Component));
exports.default = FieldUserHoverCard;

//# sourceMappingURL=FieldUserHoverCard.js.map
