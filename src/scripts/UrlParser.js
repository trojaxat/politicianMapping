"use strict";
exports.__esModule = true;
exports.UrlParser = void 0;
var axios_1 = require("axios");
var rp = require("request-promise");
var $ = require("cheerio");
var UrlParser = /** @class */ (function () {
    function UrlParser(url, htmlElementIdentifier) {
        var _this = this;
        this.urlParse = function () {
            var htmlElementIdentifier = _this.htmlElementIdentifier;
            var informationArray = [];
            var promise = _this.fetch();
            console.log("UrlParser -> urlParse -> promise", promise);
            promise.then(function (html) {
                var totalPositionsOfInterest = $(htmlElementIdentifier, html).length;
                console.log("UrlParser -> urlParse -> totalPositionsOfInterest", totalPositionsOfInterest);
                for (var i = 0; i < totalPositionsOfInterest; i++) {
                    if ($(htmlElementIdentifier, html)[i].attribs) {
                        var individualObj = $(htmlElementIdentifier, html)[i].attribs;
                        if (individualObj) {
                            console.log("UrlParser -> urlParse -> individualObj", individualObj);
                            informationArray.push(individualObj);
                        }
                    }
                }
                return informationArray;
            });
            console.log("UrlParser -> urlParse -> informationArray", informationArray);
        };
        this.url = url;
        this.htmlElementIdentifier = htmlElementIdentifier;
    }
    UrlParser.prototype.fetch = function () {
        return axios_1["default"].get("" + this.url);
    };
    return UrlParser;
}());
exports.UrlParser = UrlParser;
