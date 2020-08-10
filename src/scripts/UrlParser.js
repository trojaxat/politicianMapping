"use strict";
exports.__esModule = true;
exports.UrlParser = void 0;
var rp = require("request-promise");
var $ = require("cheerio");
var UrlParser = /** @class */ (function () {
  function UrlParser(url, htmlElementIdentifier) {
    var _this = this;
    this.urlParse = function () {
      var htmlElementIdentifier = _this.htmlElementIdentifier;
      var parsed = rp(_this.url)
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
        })
        .then(function (values) {
          return values;
        })
        ["catch"](function (err) {
          throw new Error(err);
        });
      return parsed;
    };
    this.url = url;
    this.htmlElementIdentifier = htmlElementIdentifier;
  }
  return UrlParser;
})();
exports.UrlParser = UrlParser;
