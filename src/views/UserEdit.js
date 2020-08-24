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
exports.UserEdit = void 0;
var UserForm_1 = require("./UserForm");
var UserShow_1 = require("./UserShow");
var View_1 = require("./View");
var UserEdit = /** @class */ (function (_super) {
    __extends(UserEdit, _super);
    function UserEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserEdit.prototype.regionsMap = function () {
        return {
            userShow: ".user-show",
            userForm: ".user-form"
        };
    };
    UserEdit.prototype.onRender = function () {
        new UserShow_1.UserShow(this.regions.userShow, this.model).render();
        new UserForm_1.UserForm(this.regions.userForm, this.model).render();
    };
    UserEdit.prototype.template = function () {
        return "\n        <div>\n            <div class=\"user-show\"></div>\n            <div class=\"user-form\"></div>\n        </div>\n        ";
    };
    return UserEdit;
}(View_1.View));
exports.UserEdit = UserEdit;
