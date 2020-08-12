"use strict";
exports.__esModule = true;
exports.PoliticianImport = void 0;
var UrlParser_1 = require("./UrlParser");
var PoliticianImport = /** @class */ (function () {
  function PoliticianImport(politicianWebsiteInfo) {
    var _this = this;
    this.politicianWebsiteInfo = politicianWebsiteInfo;
    this.importPoliticians = function () {
      // if (
      //   this.politicianWebsiteInfo.politiciansUrl &&
      //   this.politicianWebsiteInfo.politicianListElement &&
      //   this.politicianWebsiteInfo.politicianDetailObject
      // ) {
      //   let urls = this.getPoliticianUrls(
      //     this.politicianWebsiteInfo.politiciansUrl,
      //     this.politicianWebsiteInfo.politicianListElement
      //   );
      //   for (const url in urls) {
      //     let politicianUrl = urls.href;
      //     let politicianInfo = this.getPoliticianInformation(
      //       politicianUrl,
      //       this.politicianWebsiteInfo.politicianDetailObject
      //     );
      //     let politicianCleanedInfo = this.cleanPoliticianInfo(politicianInfo);
      //     let politician = Politician.buildPolitician(politicianCleanedInfo);
      //     politician.save();
      //   }
      // }
    };
    this.getPoliticianUrls = function (politiciansUrl, politicianListElement) {
      var politiciansParser = new UrlParser_1.UrlParser(
        politiciansUrl,
        politicianListElement
      );
      // go through each url and parse it
      return politiciansParser.urlParse();
    };
    this.getPoliticianInformation = function (
      politicianUrl,
      politicianDetailObject
    ) {
      var politicianParser = new UrlParser_1.UrlParser(
        politicianUrl,
        politicianDetailObject
      );
      return politicianParser.urlParse();
    };
    this.cleanPoliticianInfo = function (politicianObj) {
      if (politicianObj.href) {
        politicianObj.link =
          _this.politicianWebsiteInfo.baseUrl + politicianObj.href;
      }
      if (politicianObj.title) {
        delete Object.assign(politicianObj, {
          name: politicianObj.title,
        })["title"];
      }
      if (politicianObj["class"]) {
        delete politicianObj["class"];
      }
      return politicianObj;
    };
  }
  return PoliticianImport;
})();
exports.PoliticianImport = PoliticianImport;
