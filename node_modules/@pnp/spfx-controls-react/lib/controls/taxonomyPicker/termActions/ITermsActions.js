"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Specifies the display mode of the term actions.
 */
var TermActionsDisplayMode;
(function (TermActionsDisplayMode) {
    TermActionsDisplayMode[TermActionsDisplayMode["buttons"] = 1] = "buttons";
    TermActionsDisplayMode[TermActionsDisplayMode["dropdown"] = 2] = "dropdown";
})(TermActionsDisplayMode = exports.TermActionsDisplayMode || (exports.TermActionsDisplayMode = {}));
/**
 * Specifies the style which is applied to display actions.
 */
var TermActionsDisplayStyle;
(function (TermActionsDisplayStyle) {
    TermActionsDisplayStyle[TermActionsDisplayStyle["text"] = 1] = "text";
    TermActionsDisplayStyle[TermActionsDisplayStyle["icon"] = 2] = "icon";
    TermActionsDisplayStyle[TermActionsDisplayStyle["textAndIcon"] = 3] = "textAndIcon";
})(TermActionsDisplayStyle = exports.TermActionsDisplayStyle || (exports.TermActionsDisplayStyle = {}));
/**
 * Specifies the action that should be applied after executing the action callback.
 */
var UpdateType;
(function (UpdateType) {
    UpdateType[UpdateType["updateTermLabel"] = 1] = "updateTermLabel";
    UpdateType[UpdateType["updateTermsTree"] = 2] = "updateTermsTree";
})(UpdateType = exports.UpdateType || (exports.UpdateType = {}));

//# sourceMappingURL=ITermsActions.js.map
