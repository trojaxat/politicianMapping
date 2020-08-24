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
/**
 * External imports
 */
var faker = require("faker");
// import faker from "faker";
// const faker = require("faker");
/**
 * Internal imports
 */
var Attributes_1 = require("./Attributes");
var Collection_1 = require("./Collection");
var Eventing_1 = require("./Eventing");
var Model_1 = require("./Model");
var ApiSync_1 = require("./ApiSync");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fake = function () {
            _this.set({ name: faker.name.firstName() });
            _this.set({ age: Math.floor(Math.random() * 101) });
            _this.set({ lat: parseFloat(faker.address.latitude()) });
            _this.set({ lng: parseFloat(faker.address.longitude()) });
            _this.set({ totalNumberOfVotes: Math.random() * 11 });
        };
        return _this;
    }
    User.build = function (attrs) {
        return new User(new Attributes_1.Attributes(attrs), new Eventing_1.Eventing(), new ApiSync_1.ApiSync(this.rootUrl));
    };
    User.buildCollection = function () {
        var _this = this;
        return new Collection_1.Collection(this.rootUrl, function (json) {
            return _this.build(json);
        });
    };
    User.prototype.markerContent = function () {
        if (this.get("name")) {
            return "User name: " + this.get("name");
        }
        return "User name anonymous";
    };
    User.rootUrl = "http://localhost:3000/users";
    return User;
}(Model_1.Model));
exports.User = User;
