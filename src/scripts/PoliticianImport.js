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
exports.PoliticianImport = void 0;
var Import_1 = require("./Import");
var Politician_1 = require("../models/Politician");
var politicianValueInAttributes = ["link"];
var politicianValueInChild = ["name", "job", "info", "contact"];
var politicianValueString = ["name", "job"];
var PoliticianImport = /** @class */ (function (_super) {
    __extends(PoliticianImport, _super);
    function PoliticianImport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.regexDataIdContext = /"data-id":"\d{6}"/gm;
        _this.saveInfo = function (href, id) {
            var self = _this;
            var info = self.getInformation(href, id);
            info
                .then(function (infoObj) {
                var foundInfo = _this.cleanInfo(infoObj);
                console.log("PoliticianImport -> foundInfo", foundInfo);
                var model = Politician_1.Politician.build(foundInfo);
                // model.save();
            })["catch"](function (error) {
                throw Error("Model Import" + error);
            });
        };
        _this.cleanInfo = function (politicianInfoObj) {
            var _a, _b;
            var politician = Object.create(politicianInfoObj);
            for (var attribute in politicianInfoObj) {
                var attributeName = void 0;
                attributeName = attribute.replace(/ .*/, "");
                if (politicianValueInAttributes.includes(attributeName)) {
                    var value = politicianInfoObj[attribute]
                        .attribs;
                    if (Object.keys(value).length !== 0) {
                        if (value["class"]) {
                            delete value["class"];
                        }
                        if (politician.link) {
                            politician.link.push(value);
                        }
                        else {
                            politician.link = [value];
                        }
                    }
                }
                else if (politicianValueInChild.includes(attributeName)) {
                    var value = politicianInfoObj[attribute];
                    if (typeof value.children[0].data === "string") {
                        var string = value.children[0].data.replace(/\n/g, "").trim();
                        if (politicianValueString.includes(attributeName)) {
                            if (attributeName === "name") {
                                var information = value.children[0].data;
                                politician[attributeName] = information.split(",")[0].trim();
                                politician["party"] = information.split(",")[1].trim();
                            }
                            else {
                                politician[attributeName] = string;
                            }
                        }
                        else {
                            if (politician[attributeName]) {
                                politician[attributeName].push((_a = {},
                                    _a[attributeName] = string,
                                    _a));
                            }
                            else {
                                politician[attributeName] = [(_b = {}, _b[attributeName] = string, _b)];
                            }
                        }
                    }
                }
            }
            return politician;
        };
        return _this;
    }
    return PoliticianImport;
}(Import_1.Import));
exports.PoliticianImport = PoliticianImport;
