interface Adder {
    add(nr: number): void;
    getSum(): number;
    getRange(): number;
    reset(): void;
}

export class StoringAdder implements Adder {
    protected store: number[] = [];

    add(nr: number) {
        this.store.push(nr);
    }

    getSum(): number {
        let sum: number = 0;
        for (let amount of this.store) {
            sum += amount;
        }
        return sum;
    }

    getRange(): number {
        if (this.store.length === 0) {
            return 0;
        }
        let minimum: number = this.store[0];
        let maximum: number = minimum;
        for (let amount of this.store) {
            if (amount < minimum) {
                minimum = amount;
            }
            if (amount > maximum) {
                maximum = amount;
            }
        }
        return maximum - minimum;
    }

    reset() {
        this.store = [];
    }
}
