/*global window*/

(function () {
    "use strict";

    window.urlify = window.urlify || function (str) {
        return str
            .toLowerCase()
            .replace(/[^a-z0-9]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .split(' ')
            .join('-');
    };
}());
