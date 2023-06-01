"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleAdder = void 0;
var SimpleAdder = /** @class */ (function () {
    function SimpleAdder() {
        this.sum = 0;
    }
    SimpleAdder.prototype.add = function (nr) { this.sum += nr; };
    SimpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    return SimpleAdder;
}());
exports.SimpleAdder = SimpleAdder;
