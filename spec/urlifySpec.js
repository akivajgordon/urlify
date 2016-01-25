/*jslint es6, node: true */

(function () {
    "use strict";

    const
        describe = global.describe,
        it = global.it,
        expect = global.expect,
        urlify = require('../urlify.js');

    describe("urlify", function () {
        describe("only lowercase alphanumeric characters", function () {
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

            describe("given HeLlO", function () {
                it("should return 'hello'", function () {
                    expect(urlify('HeLlO')).toBe('hello');
                });
            });
        });


        describe("space-separated alphanumeric words", function () {
            describe("given 'hello world'", function () {
                it("should return 'hello-world'", function () {
                    expect(urlify('hello world')).toBe('hello-world');
                });
            });
        });

        describe("punctuation marks", function () {
            describe("given 'hello.world'", function () {
                it("should return 'hello-world'", function () {
                    expect(urlify('hello.world')).toBe('hello-world');
                });
            });

            describe("given 'hell.o.world'", function () {
                it("should return 'hell-o-world'", function () {
                    expect(urlify('hell.o.world')).toBe('hell-o-world');
                });
            });

            describe("given 'hell!o.world'", function () {
                it("should return 'hell-o-world'", function () {
                    expect(urlify('hell!o.world')).toBe('hell-o-world');
                });
            });
        });

        describe("consecutive non-alphanumeric characters", function () {
            describe("given 'hello. -world'", function () {
                it("should return 'hello-world'", function () {
                    expect(urlify('hello. -world')).toBe('hello-world');
                });
            });

            describe("given 'hell...o- !world'", function () {
                it("should return 'hell-o-world'", function () {
                    expect(urlify('hell...o- !world')).toBe('hell-o-world');
                });
            });
        });

        describe("trimming", function () {
            describe("given '&%hello world'", function () {
                it("should return 'hello-world'", function () {
                    expect(urlify('&%hello world')).toBe('hello-world');
                });
            });

            describe("given 'hello world&%'", function () {
                it("should return 'hello-world'", function () {
                    expect(urlify('hello world&%')).toBe('hello-world');
                });
            });
        });
    });
}());
