/*jslint es6, node: true */
/*global window*/

(function () {
    "use strict";

    var urlify = function (str) {
        return str
            .toLowerCase()
            .replace(/[^a-z0-9]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .split(' ')
            .join('-');
    };

    if (module) {
        module.exports = urlify;
    } else {
        window.urlify = urlify;
    }
}());
