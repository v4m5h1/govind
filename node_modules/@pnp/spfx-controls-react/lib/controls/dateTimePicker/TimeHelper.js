"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var TimeHelper = (function () {
    function TimeHelper() {
    }
    /**
     * Check if value is a valid date
     *
     * @param value
     */
    TimeHelper.isValidDate = function (value) {
        return Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime());
    };
    /**
     * Clone the date
     *
     * @param date
     */
    TimeHelper.cloneDate = function (date) {
        return this.isValidDate(date) ? new Date(date.getTime()) : null;
    };
    /**
     * Suffix number with zero
     */
    TimeHelper.suffixZero = function (value, size) {
        if (size === void 0) { size = 2; }
        while (value.length < size) {
            value = "0" + value;
        }
        return value;
    };
    /**
     * Format the hours value
     *
     * @param hours
     * @param timeConvention
     */
    TimeHelper.hoursValue = function (hours, timeConvention) {
        if (timeConvention === _1.TimeConvention.Hours24) {
            // 24 hours time convention
            return this.suffixZero(hours.toString());
        }
        else {
            // 12 hours time convention
            if (hours === 0) {
                return "12 AM";
            }
            else if (hours < 12) {
                return this.suffixZero(hours.toString()) + " AM";
            }
            else {
                if (hours === 12) {
                    return "12 PM";
                }
                else {
                    return this.suffixZero((hours % 12).toString()) + " PM";
                }
            }
        }
    };
    return TimeHelper;
}());
exports.TimeHelper = TimeHelper;

//# sourceMappingURL=TimeHelper.js.map
