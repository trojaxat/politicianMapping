"use strict";
exports.__esModule = true;
exports.PoliticianImport = void 0;
var UrlParser_1 = require("./UrlParser");
var PoliticianImport = /** @class */ (function () {
    function PoliticianImport(politicianWebsiteInfo) {
        this.politicianWebsiteInfo = politicianWebsiteInfo;
        // importPoliticians = () => {
        //   let urls = this.getPoliticianUrls(
        //     this.politiciansUrl,
        //     this.politicianListElement
        //   );
        //   // urls.foreach() {
        //   let politicianUrl = urls.href;
        //   let politicianInfo = this.getPoliticianInformation(
        //     politicianUrl,
        //     politicianIndividualElement
        //   );
        //   let politicianCleanedInfo = this.cleanPoliticianInfo(politicianInfo);
        //   let politician = Politician.buildPolitician(politicianCleanedInfo);
        //   politician.save();
        //   // }
        // };
        this.getPoliticianUrls = function (politiciansUrl, politicianListElement) {
            var politiciansParser = new UrlParser_1.UrlParser(politiciansUrl, politicianListElement);
            // go through each url and parse it
            return politiciansParser.urlParse();
        };
        this.getPoliticianInformation = function (politicianUrl, politicianDetailElement) {
            var politicianParser = new UrlParser_1.UrlParser(politicianUrl, politicianDetailElement);
            return politicianParser.urlParse();
        };
        this.cleanPoliticianInfo = function (politicianObj) {
            // if (politicianObj.href) {
            //   let politicianDetailPage = this.baseUrl + politicianObj.href;
            // }
            if (politicianObj.title) {
                delete Object.assign(politicianObj, {
                    name: politicianObj.title
                })["title"];
            }
            if (politicianObj["class"]) {
                delete politicianObj["class"];
            }
            return politicianObj;
        };
    }
    return PoliticianImport;
}());
exports.PoliticianImport = PoliticianImport;
