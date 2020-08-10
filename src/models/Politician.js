"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Politician = void 0;
/**
 * link to specific profile <a title="Abercron, Dr. Michael von" href="https://www.bundestag.de/en/members/517818-517818" data-id="517818" class="bt-open-in-overlay" tabindex="0" data-language="de">
 * name <div class="bt-teaser-person-text"><h3>
 * party <p class="bt-person-fraktion">
 * implement mappable later?
 */
var ApiSync_1 = require("./ApiSync");
var Attributes_1 = require("./Attributes");
var Eventing_1 = require("./Eventing");
var Model_1 = require("./Model");
var rootUrl = "http://localhost:3000/politicians";
var Politician = /** @class */ (function (_super) {
    __extends(Politician, _super);
    function Politician() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Politician.buildPolitician = function (attrs) {
        return new Politician(new Attributes_1.Attributes(attrs), new Eventing_1.Eventing(), new ApiSync_1.ApiSync(rootUrl));
    };
    Politician.prototype.markerContent = function () {
        if (this.get("name")) {
            return "User name: " + this.get("name");
        }
        return "User name anonymous";
    };
    return Politician;
}(Model_1.Model));
exports.Politician = Politician;
