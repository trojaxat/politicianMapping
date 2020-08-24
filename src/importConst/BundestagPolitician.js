"use strict";
exports.__esModule = true;
exports.BundestagPolitician = void 0;
/**
 * This is a placeholder class which exists to hold the current known info for the bundestag website,
 * it accepts a url parameter in order to use this on different pages for all the politicians (current url gives 20-40 politicians)
 */
var BundestagPolitician = /** @class */ (function () {
    function BundestagPolitician() {
    }
    BundestagPolitician.getBundestagPoliticianWebsiteInfo = function (urlParam) {
        var url = urlParam !== null && urlParam !== void 0 ? urlParam : BundestagPolitician.url;
        var baseUrl = BundestagPolitician.baseUrl;
        var listElement = BundestagPolitician.listElement;
        var detailObject = BundestagPolitician.detailObject;
        var websiteInfo = {
            baseUrl: baseUrl,
            listElement: listElement,
            url: url,
            detailObject: detailObject
        };
        return websiteInfo;
    };
    BundestagPolitician.baseUrl = "https://www.bundestag.de";
    BundestagPolitician.listElement = ".bt-open-in-overlay";
    BundestagPolitician.url = "https://www.bundestag.de/ajax/filterlist/de/abgeordnete/525246-525246/h_e3c112579919ef960d06dbb9d0d44b67";
    BundestagPolitician.detailObject = {
        contact: "#bt-kontakt-collapse > div > div:nth-child(3) > ul > li > a",
        job: " > div > div.bt-profil.row > div.col-xs-8.col-md-9.bt-biografie-name > div > p",
        name: " > div > div.bt-profil.row > div.col-xs-8.col-md-9.bt-biografie-name > h3",
        link: "#bt-kontakt-collapse > div > div:nth-child(3) > ul > li > a",
        info: "#ptv1 > div > div:nth-child(1) > p"
    };
    return BundestagPolitician;
}());
exports.BundestagPolitician = BundestagPolitician;
