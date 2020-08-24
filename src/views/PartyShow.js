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
exports.PartyShow = void 0;
var View_1 = require("./View");
var PartyShow = /** @class */ (function (_super) {
    __extends(PartyShow, _super);
    function PartyShow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // create here a method to return PartyShow as a type, so that it can pass on the property R into generic List
    PartyShow.prototype.template = function () {
        return "\n        <div>\n          <h1> Party Detail <h1>\n          <div> Party name: " + this.model.get("name") + "</div>\n          <div> Party age: " + this.model.get("leader") + "</div>\n        </div>\n       ";
    };
    return PartyShow;
}(View_1.View));
exports.PartyShow = PartyShow;
