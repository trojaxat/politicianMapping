"use strict";
exports.__esModule = true;
exports.ScriptExecutor = void 0;
var PoliticianImport_1 = require("./PoliticianImport");
var PartyImport_1 = require("./PartyImport");
/**
 * This class exists as a switch only in order to call the subtypes of the import class in an easy and pretty way
 */
var ScriptExecutor = /** @class */ (function () {
    function ScriptExecutor(selector, websiteInfo) {
        var _this = this;
        this.scriptSelector = function () {
            switch (_this.selector) {
                case "Politician": {
                    var politicianImporter = new PoliticianImport_1.PoliticianImport(_this.websiteInfo);
                    politicianImporter.getMultipleModels();
                    break;
                }
                case "Party": {
                    var partyImporter = new PartyImport_1.PartyImport(_this.websiteInfo);
                    partyImporter.getMultipleModels();
                    break;
                }
                case "Voter": {
                    console.log("Fair");
                    break;
                }
                default: {
                    console.log("Invalid choice");
                    break;
                }
            }
        };
        this.selector = selector;
        this.websiteInfo = websiteInfo;
    }
    return ScriptExecutor;
}());
exports.ScriptExecutor = ScriptExecutor;
