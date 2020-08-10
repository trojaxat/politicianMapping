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
exports.UserList = void 0;
var CollectionView_1 = require("./CollectionView");
var UserShow_1 = require("./UserShow");
var UserList = /** @class */ (function (_super) {
    __extends(UserList, _super);
    function UserList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserList.prototype.renderItem = function (model, itemParent) {
        new UserShow_1.UserShow(itemParent, model).render();
    };
    return UserList;
}(CollectionView_1.CollectionView));
exports.UserList = UserList;
