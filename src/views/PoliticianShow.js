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
exports.PoliticianShow = void 0;
var View_1 = require("./View");
var PoliticianShow = /** @class */ (function (_super) {
    __extends(PoliticianShow, _super);
    function PoliticianShow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PoliticianShow.prototype.template = function () {
        return "\n        <div>\n          <h1> Politician Detail <h1>\n          <div> Politician name: " + this.model.get("name") + "</div>\n          <div> Politician party: " + this.model.get("party") + "</div>\n          <div> Politician job: " + this.model.get("job") + "</div>\n        </div>\n       ";
    };
    return PoliticianShow;
}(View_1.View));
exports.PoliticianShow = PoliticianShow;
