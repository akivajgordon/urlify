/*jslint es6, node: true */

(function () {
    "use strict";

    module.exports = function (str) {
        const joinedAlphaNumeric = str
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '-')
            .replace(/-+/g, '-');

        const startIndex = joinedAlphaNumeric.startsWith('-')
            ? 1
            : 0;

        const endIndex = joinedAlphaNumeric.endsWith('-')
            ? -1
            : Infinity;

        return joinedAlphaNumeric.slice(startIndex, endIndex);
    };
}());
