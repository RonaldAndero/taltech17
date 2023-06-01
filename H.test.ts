import { StoringAdder } from "./H";
import { CharCounter } from "./B";

let adder: StoringAdder = null;
let counter: CharCounter = null;

beforeEach(() => {
    adder = new StoringAdder();
    counter = new CharCounter(adder);
});

test('start', () => {
    expect(adder.getSum()).toBe(0);
});

test('one value', () => {
    adder.add(3);
    expect(adder.getSum()).toBe(3);
});

test('two values', () => {
    adder.add(3);
    adder.add(5);
    expect(adder.getSum()).toBe(8);
});

test('two values range', () => {
    adder.add(3);
    adder.add(5);
    expect(adder.getRange()).toBe(2);
});

test('reset', () => {
    adder.add(3);
    adder.add(5);
    expect(adder.getSum()).toBe(8);

    adder.reset();
    expect(adder.getSum()).toBe(0);
});

test('charCounter', () => {
    counter.addWordCharacters("Juku");
    counter.addWordCharacters("tuli");
    counter.addWordCharacters("kooli");
    expect(counter.getCharacterCount()).toBe(13);
});

test('charCounter reset', () => {
    counter.addWordCharacters("Juku");
    counter.addWordCharacters("tuli");
    expect(counter.getCharacterCount()).toBe(8); // Update expected value to 8

    adder.reset();
    expect(counter.getCharacterCount()).toBe(0);
});

test('charCounter longest word', () => {
    counter.addWordCharacters("Juku");
    counter.addWordCharacters("tuli");
    counter.addWordCharacters("kooli");
    expect(counter.getLongestWordLength()).toBe(5); // Update expected value to 5
});


