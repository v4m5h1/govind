"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOCICONURL_XLSX = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/xlsx.png";
exports.DOCICONURL_DOCX = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/docx.png";
exports.DOCICONURL_PPTX = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/pptx.png";
exports.DOCICONURL_MPPX = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/mpp.png";
exports.DOCICONURL_PHOTO = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/photo.png";
exports.DOCICONURL_PDF = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/pdf.png";
exports.DOCICONURL_TXT = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/txt.png";
exports.DOCICONURL_EMAIL = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/email.png";
exports.DOCICONURL_CSV = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/csv.png";
exports.DOCICONURL_ONE = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/one.png";
exports.DOCICONURL_VSDX = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/vsdx.png";
exports.DOCICONURL_VSSX = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/vssx.png";
exports.DOCICONURL_PUB = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/pub.png";
exports.DOCICONURL_ACCDB = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/accdb.png";
exports.DOCICONURL_ZIP = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/zip.png";
exports.DOCICONURL_GENERIC = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/genericfile.png";
exports.DOCICONURL_CODE = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/code.png";
exports.DOCICONURL_HTML = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/html.png";
exports.DOCICONURL_XML = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/xml.png";
exports.DOCICONURL_SPO = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/spo.png";
exports.DOCICONURL_VIDEO = "https://static2.sharepointonline.com/files/fabric/assets/item-types/96/video.png";
var utilities = (function () {
    function utilities() {
    }
    /**
     * GetFileImageUrl
     */
    utilities.prototype.GetFileImageUrl = function (_file) {
        var _fileImageUrl = exports.DOCICONURL_GENERIC;
        var _fileTypes = _file.FileName.split('.');
        var _fileExtension = _fileTypes[1];
        if (!_fileExtension) {
            return Promise.resolve(_fileImageUrl);
        }
        switch (_fileExtension.toLowerCase()) {
            case 'xlsx':
                _fileImageUrl = exports.DOCICONURL_XLSX;
                break;
            case 'xls':
                _fileImageUrl = exports.DOCICONURL_XLSX;
                break;
            case 'docx':
                _fileImageUrl = exports.DOCICONURL_DOCX;
                break;
            case 'doc':
                _fileImageUrl = exports.DOCICONURL_DOCX;
                break;
            case 'pptx':
                _fileImageUrl = exports.DOCICONURL_PPTX;
                break;
            case 'ppt':
                _fileImageUrl = exports.DOCICONURL_PPTX;
                break;
            case 'mppx':
                _fileImageUrl = exports.DOCICONURL_MPPX;
                break;
            case 'mpp':
                _fileImageUrl = exports.DOCICONURL_MPPX;
                break;
            case 'csv':
                _fileImageUrl = exports.DOCICONURL_CSV;
                break;
            case 'pdf':
                _fileImageUrl = exports.DOCICONURL_PDF;
                break;
            case 'txt':
                _fileImageUrl = exports.DOCICONURL_TXT;
                break;
            case 'jpg':
                _fileImageUrl = exports.DOCICONURL_PHOTO;
                break;
            case 'msg':
                _fileImageUrl = exports.DOCICONURL_EMAIL;
                break;
            case 'jpeg':
                _fileImageUrl = exports.DOCICONURL_PHOTO;
                break;
            case 'png':
                _fileImageUrl = exports.DOCICONURL_PHOTO;
                break;
            case 'ico':
                _fileImageUrl = exports.DOCICONURL_PHOTO;
                break;
            case 'tiff':
                _fileImageUrl = exports.DOCICONURL_PHOTO;
                break;
            case 'eml':
                _fileImageUrl = exports.DOCICONURL_EMAIL;
                break;
            case 'pub':
                _fileImageUrl = exports.DOCICONURL_PUB;
                break;
            case 'accdb':
                _fileImageUrl = exports.DOCICONURL_ACCDB;
                break;
            case 'zip':
                _fileImageUrl = exports.DOCICONURL_ZIP;
                break;
            case '7z':
                _fileImageUrl = exports.DOCICONURL_ZIP;
                break;
            case 'tar':
                _fileImageUrl = exports.DOCICONURL_ZIP;
                break;
            case 'js':
                _fileImageUrl = exports.DOCICONURL_CODE;
                break;
            case 'html':
                _fileImageUrl = exports.DOCICONURL_HTML;
                break;
            case 'xml':
                _fileImageUrl = exports.DOCICONURL_XML;
                break;
            case 'aspx':
                _fileImageUrl = exports.DOCICONURL_SPO;
                break;
            case 'mp4':
                _fileImageUrl = exports.DOCICONURL_VIDEO;
                break;
            case 'mov':
                _fileImageUrl = exports.DOCICONURL_VIDEO;
                break;
            case 'wmv':
                _fileImageUrl = exports.DOCICONURL_VIDEO;
                break;
            case 'ogg':
                _fileImageUrl = exports.DOCICONURL_VIDEO;
                break;
            case 'webm':
                _fileImageUrl = exports.DOCICONURL_VIDEO;
                break;
            default:
                _fileImageUrl = exports.DOCICONURL_GENERIC;
                break;
        }
        return Promise.resolve(_fileImageUrl);
    };
    return utilities;
}());
exports.default = utilities;

//# sourceMappingURL=utilities.js.map
