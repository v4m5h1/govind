"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FieldTextRenderer_1 = require("../../controls/fields/fieldTextRenderer/FieldTextRenderer");
var FieldDateRenderer_1 = require("../../controls/fields/fieldDateRenderer/FieldDateRenderer");
var SPHelper_1 = require("./SPHelper");
var FieldTitleRenderer_1 = require("../../controls/fields/fieldTitleRenderer/FieldTitleRenderer");
var GeneralHelper_1 = require("./GeneralHelper");
var FieldLookupRenderer_1 = require("../../controls/fields/fieldLookupRenderer/FieldLookupRenderer");
var FieldUrlRenderer_1 = require("../../controls/fields/fieldUrlRenderer/FieldUrlRenderer");
var FieldTaxonomyRenderer_1 = require("../../controls/fields/fieldTaxonomyRenderer/FieldTaxonomyRenderer");
var FieldUserRenderer_1 = require("../../controls/fields/fieldUserRenderer/FieldUserRenderer");
var FieldFileTypeRenderer_1 = require("../../controls/fields/fieldFileTypeRenderer/FieldFileTypeRenderer");
var FieldAttachmentsRenderer_1 = require("../../controls/fields/fieldAttachmentsRenderer/FieldAttachmentsRenderer");
var FieldNameRenderer_1 = require("../../controls/fields/fieldNameRenderer/FieldNameRenderer");
/**
 * Field Renderer Helper.
 * Helps to render fields similarly to OOTB SharePoint rendering
 */
var FieldRendererHelper = (function () {
    function FieldRendererHelper() {
    }
    /**
     * Returns JSX.Element with OOTB rendering and applied additional props
     * @param fieldValue Value of the field
     * @param props IFieldRendererProps (CSS classes and CSS styles)
     * @param listItem Current list item
     * @param context Customizer context
     */
    FieldRendererHelper.getFieldRenderer = function (fieldValue, props, listItem, context) {
        return new Promise(function (resolve) {
            var field = context.field;
            var listId = context.pageContext.list.id.toString();
            var fieldType = field.fieldType;
            var fieldName = field.internalName; //SPHelper.getFieldNameById(field.id.toString());
            var result = null;
            var fieldValueAsEncodedText = fieldValue ? GeneralHelper_1.GeneralHelper.encodeText(fieldValue.toString()) : '';
            switch (fieldType) {
                case 'Text':
                case 'Choice':
                case 'Boolean':
                case 'MultiChoice':
                case 'Computed':
                    var fieldStoredName = SPHelper_1.SPHelper.getStoredFieldName(fieldName);
                    if (fieldStoredName === 'Title') {
                        resolve(React.createElement(FieldTitleRenderer_1.FieldTitleRenderer, __assign({ text: fieldValueAsEncodedText, isLink: fieldName === 'LinkTitle' || fieldName === 'LinkTitleNoMenu', listId: listId, id: listItem.getValueByName('ID'), baseUrl: context.pageContext.web.absoluteUrl }, props)));
                    }
                    else if (fieldStoredName === 'DocIcon') {
                        var path = listItem.getValueByName('FileLeafRef');
                        resolve(React.createElement(FieldFileTypeRenderer_1.FieldFileTypeRenderer, __assign({ path: path, isFolder: SPHelper_1.SPHelper.getRowItemValueByName(listItem, 'FSObjType') === '1' }, props)));
                    }
                    else if (fieldStoredName === 'FileLeafRef') {
                        resolve(React.createElement(FieldNameRenderer_1.FieldNameRenderer, __assign({ text: fieldValueAsEncodedText, isLink: true, filePath: SPHelper_1.SPHelper.getRowItemValueByName(listItem, 'FileRef'), isNew: SPHelper_1.SPHelper.getRowItemValueByName(listItem, 'Created_x0020_Date.ifnew') === '1', hasPreview: true }, props)));
                    }
                    else if (fieldStoredName === 'URL') {
                        resolve(React.createElement(FieldUrlRenderer_1.FieldUrlRenderer, __assign({ isImageUrl: false, url: fieldValue.toString(), text: SPHelper_1.SPHelper.getRowItemValueByName(listItem, "URL.desc") || fieldValueAsEncodedText }, props)));
                    }
                    else {
                        resolve(React.createElement(FieldTextRenderer_1.FieldTextRenderer, __assign({ text: fieldValueAsEncodedText, isSafeForInnerHTML: false, isTruncated: false }, props)));
                    }
                    break;
                case 'Integer':
                case 'Counter':
                case 'Number':
                case 'Currency':
                    resolve(React.createElement(FieldTextRenderer_1.FieldTextRenderer, __assign({ text: fieldValueAsEncodedText, isSafeForInnerHTML: true, isTruncated: false }, props)));
                    break;
                case 'Note':
                    SPHelper_1.SPHelper.getFieldProperty(field.id.toString(), "RichText", context, false).then(function (richText) {
                        var isRichText = richText === true || richText === 'TRUE';
                        var html = '';
                        if (isRichText) {
                            html = fieldValue.toString();
                        }
                        else {
                            html = fieldValueAsEncodedText.replace(/\n/g, "<br>");
                        }
                        // text is truncated if its length is more that 255 symbols or it has more than 4 lines
                        var isTruncated = html.length > 255 || html.split(/\r|\r\n|\n|<br>/).length > 4;
                        resolve(React.createElement(FieldTextRenderer_1.FieldTextRenderer, __assign({ text: html, isSafeForInnerHTML: true, isTruncated: isTruncated }, props)));
                    });
                    break;
                case 'DateTime':
                    var friendlyDisplay = SPHelper_1.SPHelper.getRowItemValueByName(listItem, fieldName + ".FriendlyDisplay");
                    resolve(React.createElement(FieldDateRenderer_1.FieldDateRenderer, __assign({ text: friendlyDisplay ? GeneralHelper_1.GeneralHelper.getRelativeDateTimeString(friendlyDisplay) : fieldValueAsEncodedText }, props)));
                    break;
                case "Lookup":
                case "LookupMulti":
                    //
                    // we're providing fieldId and context. In that case Lookup values will be rendered right away
                    // without additional lag of waiting of response to get dispUrl.
                    // The request for DispUrl will be sent only if user click on the value
                    //
                    var lookupValues = fieldValue;
                    resolve(React.createElement(FieldLookupRenderer_1.FieldLookupRenderer, __assign({ lookups: lookupValues, fieldId: field.id.toString(), context: context }, props)));
                    break;
                case 'URL':
                    SPHelper_1.SPHelper.getFieldProperty(field.id.toString(), 'Format', context, true).then(function (format) {
                        var isImage = format === 'Image';
                        var text = SPHelper_1.SPHelper.getRowItemValueByName(listItem, fieldName + ".desc");
                        resolve(React.createElement(FieldUrlRenderer_1.FieldUrlRenderer, __assign({ isImageUrl: isImage, url: fieldValue.toString(), text: text }, props)));
                    });
                    break;
                case 'Taxonomy':
                case 'TaxonomyFieldType':
                case 'TaxonomyFieldTypeMulti':
                    var terms = Array.isArray(fieldValue) ? fieldValue : [fieldValue];
                    resolve(React.createElement(FieldTaxonomyRenderer_1.FieldTaxonomyRenderer, __assign({ terms: terms }, props)));
                    break;
                case 'User':
                case 'UserMulti':
                    resolve(React.createElement(FieldUserRenderer_1.FieldUserRenderer, __assign({ users: fieldValue, context: context }, props)));
                    break;
                case 'Attachments':
                    resolve(React.createElement(FieldAttachmentsRenderer_1.FieldAttachmentsRenderer, __assign({ count: parseInt(fieldValue) }, props)));
                    break;
                default:
                    resolve(React.createElement(FieldTextRenderer_1.FieldTextRenderer, __assign({ text: fieldValueAsEncodedText, isSafeForInnerHTML: false, isTruncated: false }, props)));
                    break;
            }
        });
    };
    return FieldRendererHelper;
}());
exports.FieldRendererHelper = FieldRendererHelper;

//# sourceMappingURL=FieldRendererHelper.js.map
