"use strict";
exports.__esModule = true;
exports.Model = void 0;
var Model = /** @class */ (function () {
    function Model(attributes, events, sync) {
        var _this = this;
        this.attributes = attributes;
        this.events = events;
        this.sync = sync;
        this.on = this.events.on;
        this.trigger = this.events.trigger;
        this.get = this.attributes.get;
        this.save = function () {
            _this.sync
                .save(_this.attributes.getAll())
                .then(function (response) {
                _this.trigger("save");
            })["catch"](function () {
                _this.trigger("error");
            });
        };
    }
    Model.prototype.set = function (update) {
        this.attributes.set(update);
        this.events.trigger("change");
    };
    Model.prototype.fetch = function () {
        var _this = this;
        var id = this.attributes.get("id");
        if (typeof id !== "number") {
            throw new Error("Can not fetch without an id");
        }
        this.sync.fetch(id).then(function (response) {
            _this.set(response.data);
        });
    };
    return Model;
}());
exports.Model = Model;
