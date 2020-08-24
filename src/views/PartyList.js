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
exports.PartyList = void 0;
var CollectionView_1 = require("./CollectionView");
var PartyShow_1 = require("./PartyShow");
var PartyList = /** @class */ (function (_super) {
    __extends(PartyList, _super);
    function PartyList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartyList.prototype.renderItem = function (model, itemParent) {
        new PartyShow_1.PartyShow(itemParent, model).render();
    };
    return PartyList;
}(CollectionView_1.CollectionView));
exports.PartyList = PartyList;
