interface CalculatingFunction {
    calculate(x: number): number;
    inputUnit(): string;
    outputUnit(): string;
}

class InchesToCm implements CalculatingFunction {
    calculate(inches: number): number {
        return inches * 2.54;
    }
    inputUnit(): string {
        return "in";
    }
    outputUnit(): string {
        return "cm";
    }
}

class CalculationsStore {
    protected inputs: number[] = [];
    protected outputs: number[] = [];

    constructor(protected calculator: CalculatingFunction) {}

    addInput(x: number) {
        this.inputs.push(x);
        this.outputs.push(this.calculator.calculate(x));
    }

    getResult(): string {
        let result: string[] = [];
        for (let index in this.inputs) {
            result.push(
                this.inputs[index] +
                " " +
                this.calculator.inputUnit() +
                " - " +
                this.outputs[index] +
                " " +
                this.calculator.outputUnit()
            );
        }
        return result.join("\n");
    }
}

let converter = new InchesToCm();
let store1: CalculationsStore = new CalculationsStore(converter);
store1.addInput(0);
store1.addInput(1);
store1.addInput(5);
store1.addInput(10);
store1.addInput(20);
store1.addInput(50);

console.log(store1.getResult());

class CmToInches implements CalculatingFunction {
    calculate(cm: number): number {
        return cm / 2.54;
    }
    inputUnit(): string {
        return "cm";
    }
    outputUnit(): string {
        return "in";
    }
}

let cmToInchesConverter = new CmToInches();
let store2: CalculationsStore = new CalculationsStore(cmToInchesConverter);
store2.addInput(10);
store2.addInput(20);
store2.addInput(30);

console.log(store2.getResult());

class CustomMultiplier implements CalculatingFunction {
    constructor(
        protected multiplier: number,
        protected input: string,
        protected output: string
    ) {}

    calculate(x: number): number {
        return x * this.multiplier;
    }

    inputUnit(): string {
        return this.input;
    }

    outputUnit(): string {
        return this.output;
    }
}

let decimetersToMillimetersConverter = new CustomMultiplier(
    10,
    "dm",
    "mm"
);
let store3: CalculationsStore = new CalculationsStore(
    decimetersToMillimetersConverter
);
store3.addInput(1);
store3.addInput(2);
store3.addInput(3);

console.log(store3.getResult());

let inchesToDecimetersConverter = new CustomMultiplier(
    0.254,
    "in",
    "dm"
);
let store4: CalculationsStore = new CalculationsStore(
    inchesToDecimetersConverter
);
store4.addInput(1);
store4.addInput(2);
store4.addInput(3);

console.log(store4.getResult());

class TaxiRidePriceCalculator implements CalculatingFunction {
    constructor(
        protected boardingFee: number,
        protected pricePerKilometer: number
    ) {}

    calculate(kilometers: number): number {
        return this.boardingFee + kilometers * this.pricePerKilometer;
    }

    inputUnit(): string {
        return "km";
    }

    outputUnit(): string {
        return "€";
    }
}

let taxiRidePriceCalculator = new TaxiRidePriceCalculator(2, 0.8);
let store5: CalculationsStore = new CalculationsStore(taxiRidePriceCalculator);
store5.addInput(5);
store5.addInput(10);
store5.addInput(20);

console.log(store5.getResult());

class CelsiusToFahrenheit implements CalculatingFunction {
    calculate(celsius: number): number {
        return (celsius * 9) / 5 + 32;
    }

    inputUnit(): string {
        return "°C";
    }

    outputUnit(): string {
        return "°F";
    }
}

let celsiusToFahrenheitConverter = new CelsiusToFahrenheit();
let store6: CalculationsStore = new CalculationsStore(
    celsiusToFahrenheitConverter
);
store6.addInput(0);
store6.addInput(10);
store6.addInput(20);

console.log(store6.getResult());
