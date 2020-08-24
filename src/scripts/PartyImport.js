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
exports.PartyImport = void 0;
var Import_1 = require("./Import");
var Party_1 = require("../models/Party");
var partyValueInAttributes = ["link"];
var partyValueInChild = ["info", "contact"];
var partyValueString = ["name", "leader", "phoneNumber", "address"];
var PartyImport = /** @class */ (function (_super) {
    __extends(PartyImport, _super);
    function PartyImport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.regexDataIdContext = /"data-id":"\d{6}"/gm;
        _this.saveInfo = function (href, id) {
            var self = _this;
            var info = self.getInformation(href, id);
            info
                .then(function (infoObj) {
                var foundInfo = _this.cleanInfo(infoObj);
                console.log("PartyImport -> foundInfo", foundInfo);
                var model = Party_1.Party.build(foundInfo);
                // model.save();
            })["catch"](function (error) {
                throw Error("Model Import" + error);
            });
        };
        _this.cleanInfo = function (partyInfoObj) {
            var _a, _b;
            var party = Object.create(partyInfoObj);
            for (var attribute in partyInfoObj) {
                var attributeName = void 0;
                attributeName = attribute.replace(/ .*/, "");
                if (partyValueInAttributes.includes(attributeName)) {
                    var value = partyInfoObj[attribute].attribs;
                    if (Object.keys(value).length !== 0) {
                        if (value["class"]) {
                            delete value["class"];
                        }
                        if (party.link) {
                            party.link.push(value);
                        }
                        else {
                            party.link = [value];
                        }
                    }
                }
                else if (partyValueInChild.includes(attributeName)) {
                    var value = partyInfoObj[attribute];
                    if (typeof value.children[0].data === "string") {
                        var string = value.children[0].data.replace(/\n/g, "").trim();
                        if (partyValueString.includes(attributeName)) {
                            if (attributeName === "name") {
                                var information = value.children[0].data;
                                party[attributeName] = information.split(",")[0].trim();
                                party["party"] = information.split(",")[1].trim();
                            }
                            else {
                                party[attributeName] = string;
                            }
                        }
                        else {
                            if (party[attributeName]) {
                                party[attributeName].push((_a = {},
                                    _a[attributeName] = string,
                                    _a));
                            }
                            else {
                                party[attributeName] = [(_b = {}, _b[attributeName] = string, _b)];
                            }
                        }
                    }
                }
            }
            return party;
        };
        return _this;
    }
    return PartyImport;
}(Import_1.Import));
exports.PartyImport = PartyImport;
