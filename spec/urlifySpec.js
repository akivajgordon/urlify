/*jslint es6, node: true */

(function () {
    "use strict";

    const
        describe = global.describe,
        it = global.it,
        expect = global.expect,
        urlify = require('../urlify.js');

    describe("urlify", function () {
        describe("only alphanumeric characters", function () {
            describe("given hello", function () {
                it("should return hello", function () {
                    expect(urlify('hello')).toBe('hello');
                });
            });

            describe("given world123", function () {
                it("should return world123", function () {
                    expect(urlify('world123')).toBe('world123');
                });
            });
        });
    });
}());
