"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var H_1 = require("./H");
test('test1', function () {
    var adder = new H_1.SimpleAdder();
    expect(adder.getSum()).toBe(0);
    adder.add(3);
    expect(adder.getSum()).toBe(3);
    adder.add(5);
    expect(adder.getSum()).toBe(8);
});
test('test2', function () {
    var adder = new H_1.SimpleAdder();
    adder.add(2);
    adder.add(4);
    adder.add(6);
    expect(adder.getSum()).toBe(12);
});
