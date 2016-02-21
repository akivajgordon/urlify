/*jslint es6, node: true */

(function () {
    "use strict";

    const
        describe = global.describe,
        it = global.it,
        expect = global.expect,
        urlify = require('../urlify.js');

    describe("urlify", function () {
        describe("no input at all", function () {
            it("should return an empty string", function () {
                expect(urlify()).toBe('');
            });
        });

        describe("only lowercase alphanumeric characters", function () {
            describe("given a simple word", function () {
                it("should return that word", function () {
                    expect(urlify('hello')).toBe('hello');
                });
            });

            describe("given a simple word with numbers", function () {
                it("should return that word", function () {
                    expect(urlify('world123')).toBe('world123');
                });
            });

            describe("given a word with uppercase letters", function () {
                it("should return that word lowercased", function () {
                    expect(urlify('HeLlO')).toBe('hello');
                });
            });
        });


        describe("given space-separated alphanumeric words", function () {
            it("should return the same words separated by a hyphen", function () {
                expect(urlify('hello world')).toBe('hello-world');
            });
        });

        describe("punctuation marks", function () {
            describe("given period-separated words", function () {
                it("should return the same words separated by a hyphen", function () {
                    expect(urlify('hello.world')).toBe('hello-world');
                });
            });

            describe("given multiple period-separated words", function () {
                it("should return the same words separated by hyphens", function () {
                    expect(urlify('hell.o.world')).toBe('hell-o-world');
                });
            });

            describe("given words separated by multiple punctuation marks", function () {
                it("should return the words with hyphens instead of the punctuation marks", function () {
                    expect(urlify('hell!o.world')).toBe('hell-o-world');
                });
            });
        });

        describe("consecutive non-alphanumeric characters", function () {
            describe("given two words separated by multiple bad characters", function () {
                it("should return the words separated by one hyphen", function () {
                    expect(urlify('hello. -world')).toBe('hello-world');
                });
            });

            describe("given multiple words separated by multiple bad characters", function () {
                it("should return the words separated by one hyphen", function () {
                    expect(urlify('hell...o- !world')).toBe('hell-o-world');
                });
            });
        });

        describe("trimming", function () {
            describe("given words that start with bad characters", function () {
                it("should return hyphen-separated words without a leading hyphen", function () {
                    expect(urlify('&%hello world')).toBe('hello-world');
                });
            });

            describe("given words that end with bad characters", function () {
                it("should return hyphen-separated words without a trailing hyphen", function () {
                    expect(urlify('hello world&%')).toBe('hello-world');
                });
            });
        });

        describe("apostrophes", function () {
            it("should remove all apostrophes before hyphenating", function () {
                expect(urlify("He said, 'Don\'t do that!' to him."))
                    .toBe('he-said-dont-do-that-to-him');
            });
        });
    });
}());
