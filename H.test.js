"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var H_1 = require("./H");
var adder = null;
beforeEach(function () {
    adder = new H_1.SimpleAdder();
});
test('start', function () {
    expect(adder.getSum()).toBe(0);
});
test('one value', function () {
    adder.add(3);
    expect(adder.getSum()).toBe(3);
});
test('two values', function () {
    adder.add(3);
    adder.add(5);
    expect(adder.getSum()).toBe(8);
});
test('reset', function () {
    adder.add(3);
    adder.add(5);
    expect(adder.getSum()).toBe(8);
    adder.reset();
    expect(adder.getSum()).toBe(0);
});
