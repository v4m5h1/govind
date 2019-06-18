var key = '_NAR8NFw8cblGJm9t5CjqOw';
var allStrings = (typeof DEPRECATED_UNIT_TEST === 'undefined' || DEPRECATED_UNIT_TEST) ?
    require("./resx-strings/en-us.json") :
    require("resx-strings");
var strings = allStrings[key];
export default strings;
