interface Adder {
    add(nr: number): void;
    getSum(): number;
    reset(): void;
}

class SimpleAdder implements Adder {
    protected sum: number = 0;

    add(nr: number) {
        this.sum += nr;
    }

    getSum(): number {
        return this.sum;
    }

    reset() {
        this.sum = 0;
    }
}

let adder1: Adder = new SimpleAdder();
adder1.add(3);
adder1.add(5);
adder1.add(5);
console.log(adder1.getSum()); // Output: 13

adder1.reset();
console.log(adder1.getSum()); // Output: 0
