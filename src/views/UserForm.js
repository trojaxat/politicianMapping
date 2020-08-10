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
exports.UserForm = void 0;
var View_1 = require("../views/View");
var UserForm = /** @class */ (function (_super) {
    __extends(UserForm, _super);
    function UserForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSetGivenInformationClick = function () {
            var inputs = _this.parent.querySelectorAll("input");
            inputs.forEach(function (input) {
                var _a;
                _this.model.set((_a = {}, _a[input.className] = input.value, _a));
            });
        };
        _this.onSetRandomInformationClick = function () {
            _this.model.fake();
        };
        _this.onSaveClick = function () {
            _this.model.save();
        };
        return _this;
    }
    UserForm.prototype.eventsMap = function () {
        return {
            "click:.set-info": this.onSetGivenInformationClick,
            "click:.set-random": this.onSetRandomInformationClick,
            "click:.save-model": this.onSaveClick
        };
    };
    UserForm.prototype.template = function () {
        return "\n        <div>\n            <input class=\"age\" type=\"number\" placeholder=\"Age\"/>\n            <input class=\"name\" type=\"text\" placeholder=\"Name\"/>\n            <button class=\"set-info\">Set given information</button>\n            <button class=\"set-random\">Set random information</button>\n            <button class=\"save-model\">Save</button>\n        <div>\n        ";
    };
    return UserForm;
}(View_1.View));
exports.UserForm = UserForm;
