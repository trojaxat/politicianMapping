"use strict";
exports.__esModule = true;
exports.Import = void 0;
var UrlParser_1 = require("./UrlParser");
var Import = /** @class */ (function () {
    function Import(websiteInfo) {
        var _this = this;
        this.websiteInfo = websiteInfo;
        /**
         * This is the main calling process of the Imports class, which will find the urls of a future model,
         * then it will cycle through the urls, going to each one to get the information from that page,
         * it uses an id identifier, if its required, this also saves each individual model into the db
         */
        this.getMultipleModels = function () {
            _this.getUrls()
                .then(function (urls) {
                for (var url in urls) {
                    var urlObject = urls[url].attribs;
                    var stringValues = JSON.stringify(urlObject);
                    var id = _this.getIdInfo(stringValues);
                    if (typeof id === "number") {
                        _this.saveInfo(urlObject.href, id);
                    }
                    else {
                        _this.saveInfo(urlObject.href);
                    }
                }
            })["catch"](function (error) {
                throw Error(error);
            });
        };
        /**
         * This gets an id based on the regex specific to only the bundestag style atm,
         * E.g. "data-id":"512388" in the attributes, this is set in each PoliticianImportClass
         * I am not sure whether I want to make something like "BundestagPoliticianImport" subclasses
         * or whether I want to make this a parameter that can be given to import, unclear what future needs will be
         *
         * @param jsonString
         * @param href
         */
        this.getIdInfo = function (jsonString) {
            var foundArray = jsonString.match(_this.regexDataIdContext);
            if (foundArray !== null && foundArray[0]) {
                // This solution removes everything thats not a number, other solution with regex possible: /\d{6}/gm;
                var id = Number(foundArray[0].replace(/\D/g, ""));
                if (typeof id === "number") {
                    return id;
                }
            }
            return false;
        };
        /**
         * This method uses the urlParser to return a promise of the main page,
         * which has links for each specific future model page
         */
        this.getUrls = function () {
            var parser = new UrlParser_1.UrlParser(_this.websiteInfo.url, {
                url: _this.websiteInfo.listElement
            });
            return parser.urlParse();
        };
        /**
         * This is for each individual model page adding specific identifiers,
         * these are page specific and have been found by the getIdInfo method
         *
         * @param url
         * @param identifier
         */
        this.getInformation = function (url, identifier) {
            var fullUrl = _this.websiteInfo.baseUrl + url;
            var object = Object.create(_this.websiteInfo.detailObject);
            if (identifier) {
                // Make html identifier specific to this name
                object.name = identifier + _this.websiteInfo.detailObject.name;
                // Make html identifier specific to this job
                object.job = identifier + _this.websiteInfo.detailObject.job;
            }
            var parser = new UrlParser_1.UrlParser(fullUrl, object);
            return parser.urlParse();
        };
    }
    return Import;
}());
exports.Import = Import;
