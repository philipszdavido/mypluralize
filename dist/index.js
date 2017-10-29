"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pluralize = require("pluralize");
/**
 * @Method: Returns the Plural form of any noun.
 * @Param {string}
 * @Return {string}
 */
function getPlural(str) {
    return pluralize.plural(str);
}
exports.getPlural = getPlural;
/**
 * @Method: Returns the Singular form of any noun.
 * @Param {string}
 * @Return {string}
 */
function getSingular(str) {
    return pluralize.singular(str);
}
exports.getSingular = getSingular;
