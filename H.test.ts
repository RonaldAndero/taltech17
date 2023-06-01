import {Adder, SimpleAdder} from "./H";

let adder:Adder=null;

beforeEach(() => {
    adder = new SimpleAdder();
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

test('reset', () => {
    adder.add(3);
    adder.add(5);
    expect(adder.getSum()).toBe(8);

    adder.reset();
    expect(adder.getSum()).toBe(0);
});