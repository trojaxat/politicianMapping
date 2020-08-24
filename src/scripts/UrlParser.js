"use strict";
exports.__esModule = true;
exports.UrlParser = void 0;
var axios_1 = require("axios");
var cheerio = require("cheerio");
/**
 *  This works by calling urlparser with a url string and a type of selector from the html of the page,
 *  url example "https://stackoverflow.com/questions/36607979/how-to-get-around-property-does-not-exist-on-object/45090885"
 *
 *  Selector example { picture: "#left-sidebar > div.left-sidebar--sticky-container.js-sticky-leftnav"}
 *  multiple selectors can be given into the object
 *
 *  The selector can be generated found in dev tools of chrome, right click on html element, copy, copy selector
 *  then calling .urlParse(), which returns a promise, then() can be used to see the results
 *
 * */
var UrlParser = /** @class */ (function () {
    function UrlParser(url, htmlElementIdentifier) {
        var _this = this;
        if (htmlElementIdentifier === void 0) { htmlElementIdentifier = {}; }
        this.htmlElementIdentifier = {};
        this.urlParse = function () {
            var htmlElementIdentifiers = _this.htmlElementIdentifier;
            var informationObj = {};
            var promise = _this.fetch();
            return promise
                .then(function (response) {
                var _a;
                var html = response.data;
                var $ = cheerio.load(html, {
                    xmlMode: true
                });
                // For each different html that we want to find
                for (var key in htmlElementIdentifiers) {
                    var totalPositionsOfInterest = $(htmlElementIdentifiers[key], html)
                        .length;
                    // For each time we found the individual html
                    for (var i = 0; i < totalPositionsOfInterest; i++) {
                        var element = htmlElementIdentifiers[key];
                        var stuffScraped = $(element)[i];
                        Object.assign(informationObj, (_a = {}, _a[key + " " + i] = stuffScraped, _a));
                    }
                }
                return informationObj;
            })["catch"](function (error) {
                throw Error("Urlparse error: " + error);
            });
        };
        this.url = url;
        this.htmlElementIdentifier = htmlElementIdentifier;
    }
    UrlParser.prototype.fetch = function () {
        return axios_1["default"].get("" + this.url)["catch"](function (error) {
            throw Error(error);
        });
    };
    return UrlParser;
}());
exports.UrlParser = UrlParser;
