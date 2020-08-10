"use strict";
exports.__esModule = true;
exports.PoliticianImport = void 0;
var UrlScraper_1 = require("./UrlScraper");
var PoliticianImport = /** @class */ (function () {
    function PoliticianImport() {
        this.baseUrl = "https://www.bundestag.de";
        this.politicianListElement = ".bt-open-in-overlay";
        this.url = "https://www.bundestag.de/ajax/filterlist/de/abgeordnete/525246-525246/h_e3c112579919ef960d06dbb9d0d44b67";
    }
    PoliticianImport.prototype.importPoliticians = function () {
        var scraper = new UrlScraper_1.UrlScraper(this.url, this.politicianListElement);
        var politicianUrls = scraper.urlParse();
        return politicianUrls;
    };
    return PoliticianImport;
}());
exports.PoliticianImport = PoliticianImport;
// politiciansDetailPage.forEach(function (value) {
//   rp(politiciansDetailPage.value);
//   let politicianObj = value;
//   let politicianDetailPage = baseUrl + politicianObj.href;
//   delete Object.assign(politicianObj, {
//     name: politicianObj.title,
//   })["title"];
//   delete politicianObj.class;
//   let politician = Politician.buildPolitician(politicianObj);
//   politician.save();
