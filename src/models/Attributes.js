"use strict";
exports.__esModule = true;
exports.Attributes = void 0;
var Attributes = /** @class */ (function () {
    function Attributes(data) {
        var _this = this;
        this.data = data;
        this.get = function (key) {
            return _this.data[key];
        };
    }
    Attributes.prototype.getAll = function () {
        return this.data;
    };
    Attributes.prototype.set = function (update) {
        Object.assign(this.data, update);
    };
    return Attributes;
}());
exports.Attributes = Attributes;
