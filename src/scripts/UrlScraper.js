"use strict";
exports.__esModule = true;
exports.UrlScraper = void 0;
var rp = require("request-promise");
var $ = require("cheerio");
var UrlScraper = /** @class */ (function () {
    function UrlScraper(url, htmlElementIdentifier) {
        this.url = url;
        this.htmlElementIdentifier = htmlElementIdentifier;
    }
    UrlScraper.prototype.urlParse = function () {
        var htmlElementIdentifier = this.htmlElementIdentifier;
        return rp(this.url)
            .then(function (html) {
            var totalPositionsOfInterest = $(htmlElementIdentifier, html).length;
            var informationArray = [];
            for (var i = 0; i < totalPositionsOfInterest; i++) {
                if ($(htmlElementIdentifier, html)[i].attribs) {
                    var individualObj = $(htmlElementIdentifier, html)[i].attribs;
                    if (individualObj) {
                        informationArray.push(individualObj);
                    }
                }
            }
            return informationArray;
        })["catch"](function (err) {
            throw new Error(err);
        });
    };
    return UrlScraper;
}());
exports.UrlScraper = UrlScraper;
