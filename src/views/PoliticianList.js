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
exports.PoliticianList = void 0;
var CollectionView_1 = require("./CollectionView");
var PoliticianShow_1 = require("./PoliticianShow");
var PoliticianList = /** @class */ (function (_super) {
    __extends(PoliticianList, _super);
    function PoliticianList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PoliticianList.prototype.renderItem = function (model, itemParent) {
        new PoliticianShow_1.PoliticianShow(itemParent, model).render();
    };
    return PoliticianList;
}(CollectionView_1.CollectionView));
exports.PoliticianList = PoliticianList;
