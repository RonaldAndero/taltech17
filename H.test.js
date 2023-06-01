"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var H_1 = require("./H");
var B_1 = require("./B");
var adder = null;
var counter = null;
beforeEach(function () {
    adder = new H_1.StoringAdder();
    counter = new B_1.CharCounter(adder);
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
test('two values range', function () {
    adder.add(3);
    adder.add(5);
    expect(adder.getRange()).toBe(2);
});
test('reset', function () {
    adder.add(3);
    adder.add(5);
    expect(adder.getSum()).toBe(8);
    adder.reset();
    expect(adder.getSum()).toBe(0);
});
test('charCounter', function () {
    counter.addWordCharacters("Juku");
    counter.addWordCharacters("tuli");
    counter.addWordCharacters("kooli");
    expect(counter.getCharacterCount()).toBe(13);
});
test('charCounter reset', function () {
    counter.addWordCharacters("Juku");
    counter.addWordCharacters("tuli");
    expect(counter.getCharacterCount()).toBe(8); // Update expected value to 8
    adder.reset();
    expect(counter.getCharacterCount()).toBe(0);
});
test('charCounter longest word', function () {
    counter.addWordCharacters("Juku");
    counter.addWordCharacters("tuli");
    counter.addWordCharacters("kooli");
    expect(counter.getLongestWordLength()).toBe(5); // Update expected value to 5
});
