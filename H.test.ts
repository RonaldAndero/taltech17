import { Adder, SimpleAdder } from "./H";

test('test1', () => {
    let adder: Adder = new SimpleAdder();
    expect(adder.getSum()).toBe(0);
    adder.add(3);
    expect(adder.getSum()).toBe(3);
    adder.add(5);
    expect(adder.getSum()).toBe(8);
});

test('test2', () => {
    let adder: Adder = new SimpleAdder();
    adder.add(2);
    adder.add(4);
    adder.add(6);
    expect(adder.getSum()).toBe(12);
});
