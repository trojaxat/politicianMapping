"use strict";
exports.__esModule = true;
exports.UrlParser = void 0;
var axios_1 = require("axios");
var cheerio = require("cheerio");
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
                var _a, _b;
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
                        if (key === "url") {
                            var stuffScraped = $(element)[i].attribs;
                            Object.assign(informationObj, (_a = {}, _a[key + i] = stuffScraped, _a));
                        }
                        else if (key === "contact") {
                            var stuffScraped = $(element)[i].attribs.href;
                            Object.assign(informationObj, (_b = {}, _b[key] = stuffScraped, _b));
                        }
                        else {
                            // let stuffScraped = $(element)[i].text().trim();
                            // Object.assign(informationObj, { [key]: stuffScraped });
                        }
                    }
                }
                return informationObj;
            })["catch"](function (error) {
                throw new Error("this is an error in urlparse" + error);
            });
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
