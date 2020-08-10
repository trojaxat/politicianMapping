"use strict";
exports.__esModule = true;
exports.ApiSync = void 0;
var axios_1 = require("axios");
var ApiSync = /** @class */ (function () {
    function ApiSync(rootUrl) {
        this.rootUrl = rootUrl;
    }
    ApiSync.prototype.fetch = function (id) {
        return axios_1["default"].get(this.rootUrl + "/" + id);
    };
    ApiSync.prototype.save = function (data) {
        var id = data.id;
        if (id) {
            return axios_1["default"].put(this.rootUrl + "/" + id, data);
        }
        else {
            return axios_1["default"].post(this.rootUrl, data);
        }
    };
    return ApiSync;
}());
exports.ApiSync = ApiSync;
