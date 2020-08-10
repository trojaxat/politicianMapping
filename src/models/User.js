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
exports.User = void 0;
var Attributes_1 = require("./Attributes");
var Collection_1 = require("./Collection");
var Eventing_1 = require("./Eventing");
var faker_1 = require("faker");
var Model_1 = require("./Model");
var ApiSync_1 = require("./ApiSync");
var rootUrl = "http://localhost:3000/users";
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fake = function () {
            _this.set({ name: faker_1["default"].name.firstName() });
            _this.set({ age: Math.floor(Math.random() * 101) });
            _this.set({ lat: parseFloat(faker_1["default"].address.latitude()) });
            _this.set({ lng: parseFloat(faker_1["default"].address.longitude()) });
            _this.set({ totalNumberOfVotes: Math.random() * 11 });
        };
        return _this;
    }
    User.buildUser = function (attrs) {
        return new User(new Attributes_1.Attributes(attrs), new Eventing_1.Eventing(), new ApiSync_1.ApiSync(rootUrl));
    };
    User.buildUserCollection = function () {
        return new Collection_1.Collection(rootUrl, function (json) {
            return User.buildUser(json);
        });
    };
    User.prototype.markerContent = function () {
        if (this.get("name")) {
            return "User name: " + this.get("name");
        }
        return "User name anonymous";
    };
    return User;
}(Model_1.Model));
exports.User = User;
