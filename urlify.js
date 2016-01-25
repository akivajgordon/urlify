/*jslint es6, node: true */

(function () {
    "use strict";

    module.exports = function (str) {
        return str.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-');
    };
}());
