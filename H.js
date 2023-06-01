"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoringAdder = void 0;
var StoringAdder = /** @class */ (function () {
    function StoringAdder() {
        this.store = [];
    }
    StoringAdder.prototype.add = function (nr) {
        this.store.push(nr);
    };
    StoringAdder.prototype.getSum = function () {
        var sum = 0;
        for (var _i = 0, _a = this.store; _i < _a.length; _i++) {
            var amount = _a[_i];
            sum += amount;
        }
        return sum;
    };
    StoringAdder.prototype.getRange = function () {
        if (this.store.length === 0) {
            return 0;
        }
        var minimum = this.store[0];
        var maximum = minimum;
        for (var _i = 0, _a = this.store; _i < _a.length; _i++) {
            var amount = _a[_i];
            if (amount < minimum) {
                minimum = amount;
            }
            if (amount > maximum) {
                maximum = amount;
            }
        }
        return maximum - minimum;
    };
    StoringAdder.prototype.reset = function () {
        this.store = [];
    };
    return StoringAdder;
}());
exports.StoringAdder = StoringAdder;
