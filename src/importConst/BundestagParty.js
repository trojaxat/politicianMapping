"use strict";
exports.__esModule = true;
exports.BundestagParty = void 0;
/**
 * This is a placeholder class which exists to hold the current known info for the bundestag website,
 * it accepts a url parameter in order to use this on different pages for all the Partys (current url gives 20-40 Partys)
 */
var BundestagParty = /** @class */ (function () {
    function BundestagParty() {
    }
    BundestagParty.getBundestagPartyWebsiteInfo = function (urlParam) {
        var url = urlParam !== null && urlParam !== void 0 ? urlParam : BundestagParty.url;
        var baseUrl = BundestagParty.baseUrl;
        var listElement = BundestagParty.listElement;
        var detailObject = BundestagParty.detailObject;
        var websiteInfo = {
            baseUrl: baseUrl,
            listElement: listElement,
            url: url,
            detailObject: detailObject
        };
        return websiteInfo;
    };
    BundestagParty.baseUrl = "https://www.bundestag.de/";
    BundestagParty.listElement = ".bt-open-in-overlay";
    BundestagParty.url = "https://www.bundestag.de/parlament/fraktionen";
    BundestagParty.detailObject = {
        contact: "#bt-beschluss-collapse_251442 > div > div > p:nth-child(2) > a:nth-child(1)",
        name: "#bt-beschluss-collapse_251442 > div > div > p:nth-child(1) > strong",
        link: "#bt-beschluss-collapse_251442 > div > div > p:nth-child(2) > a:nth-child(1)",
        info: "#ptv1 > div > div:nth-child(1) > p",
        leader: "#mod485836 > div.bt-module-overlay > div > div.bt-overlay-content > div > div > div.row > article > div.bt-standard-content > div > p:nth-child(2) > a"
    };
    return BundestagParty;
}());
exports.BundestagParty = BundestagParty;
