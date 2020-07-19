"use strict";
exports.__esModule = true;
var Decision = /** @class */ (function () {
    function Decision(id, decision, userId, lawId, parliamentId) {
        this.id = id;
        this.decision = decision;
        this.userId = userId;
        this.lawId = lawId;
        this.parliamantId = parliamentId;
    }
    return Decision;
}());
exports["default"] = Decision;
