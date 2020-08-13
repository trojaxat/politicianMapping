"use strict";
exports.__esModule = true;
exports.PoliticianImport = void 0;
var UrlParser_1 = require("./UrlParser");
var PoliticianImport = /** @class */ (function () {
    function PoliticianImport(politicianWebsiteInfo) {
        var _this = this;
        this.politicianWebsiteInfo = politicianWebsiteInfo;
        this.importPoliticians = function () {
            var self = _this;
            _this.getPoliticianUrls().then(function (urls) {
                for (var url in urls) {
                    var object = urls[url];
                    var politicianInfo = self.getPoliticianInformation(object.href);
                    politicianInfo.then(function (politicianInfoObj) {
                        console.log("PoliticianImport -> importPoliticians -> politicianInfoObj", politicianInfoObj);
                        // let politicianCleanedInfo = self.cleanPoliticianInfo(
                        //   politicianInfoObj
                        // );
                        // let politician = Politician.buildPolitician(politicianCleanedInfo);
                        // console.log(
                        //   "PoliticianImport -> importPoliticians -> politician",
                        //   politician
                        // );
                        // politician.save();
                    });
                }
            });
        };
        this.getPoliticianUrls = function () {
            var politiciansParser = new UrlParser_1.UrlParser(_this.politicianWebsiteInfo.politiciansUrl, { url: _this.politicianWebsiteInfo.politicianListElement });
            return politiciansParser.urlParse();
        };
        this.getPoliticianInformation = function (politicianUrl) {
            var politicianFullUrl = _this.politicianWebsiteInfo.baseUrl + politicianUrl;
            var politicianParser = new UrlParser_1.UrlParser(politicianFullUrl, _this.politicianWebsiteInfo.politicianDetailObject);
            return politicianParser.urlParse();
        };
        this.cleanPoliticianInfo = function (object) {
            // let politicianObj = object as PoliticianBase;
            // if (politicianObj.href) {
            //   politicianObj.link =
            //     this.politicianWebsiteInfo.baseUrl + politicianObj.href;
            // }
            // if (politicianObj.title) {
            //   delete Object.assign(politicianObj, {
            //     name: politicianObj.title,
            //   })["title"];
            // }
            // if (politicianObj.class) {
            //   delete politicianObj.class;
            // }
            // return politicianObj;
        };
    }
    return PoliticianImport;
}());
exports.PoliticianImport = PoliticianImport;
