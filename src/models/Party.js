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
exports.Party = void 0;
/**
 * Internal imports
 */
var Attributes_1 = require("./Attributes");
var ApiSync_1 = require("./ApiSync");
var Collection_1 = require("./Collection");
var Eventing_1 = require("./Eventing");
var Model_1 = require("./Model");
var Party = /** @class */ (function (_super) {
    __extends(Party, _super);
    function Party() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Party.build = function (attrs) {
        return new Party(new Attributes_1.Attributes(attrs), new Eventing_1.Eventing(), new ApiSync_1.ApiSync(this.rootUrl));
    };
    Party.buildCollection = function () {
        var _this = this;
        return new Collection_1.Collection(this.rootUrl, function (json) {
            return _this.build(json);
        });
    };
    Party.prototype.markerContent = function () {
        if (this.get("name")) {
            return "Party name: " + this.get("name");
        }
        return "Party name unknown";
    };
    Party.rootUrl = "http://localhost:3000/partys";
    return Party;
}(Model_1.Model));
exports.Party = Party;
