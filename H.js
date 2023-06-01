var InchesToCm = /** @class */ (function () {
    function InchesToCm() {
    }
    InchesToCm.prototype.calculate = function (inches) {
        return inches * 2.54;
    };
    InchesToCm.prototype.inputUnit = function () {
        return "in";
    };
    InchesToCm.prototype.outputUnit = function () {
        return "cm";
    };
    return InchesToCm;
}());
var CalculationsStore = /** @class */ (function () {
    function CalculationsStore(calculator) {
        this.calculator = calculator;
        this.inputs = [];
        this.outputs = [];
    }
    CalculationsStore.prototype.addInput = function (x) {
        this.inputs.push(x);
        this.outputs.push(this.calculator.calculate(x));
    };
    CalculationsStore.prototype.getResult = function () {
        var result = [];
        for (var index in this.inputs) {
            result.push(this.inputs[index] +
                " " +
                this.calculator.inputUnit() +
                " - " +
                this.outputs[index] +
                " " +
                this.calculator.outputUnit());
        }
        return result.join("\n");
    };
    return CalculationsStore;
}());
var converter = new InchesToCm();
var store1 = new CalculationsStore(converter);
store1.addInput(0);
store1.addInput(1);
store1.addInput(5);
store1.addInput(10);
store1.addInput(20);
store1.addInput(50);
console.log(store1.getResult());
var CmToInches = /** @class */ (function () {
    function CmToInches() {
    }
    CmToInches.prototype.calculate = function (cm) {
        return cm / 2.54;
    };
    CmToInches.prototype.inputUnit = function () {
        return "cm";
    };
    CmToInches.prototype.outputUnit = function () {
        return "in";
    };
    return CmToInches;
}());
var cmToInchesConverter = new CmToInches();
var store2 = new CalculationsStore(cmToInchesConverter);
store2.addInput(10);
store2.addInput(20);
store2.addInput(30);
console.log(store2.getResult());
var CustomMultiplier = /** @class */ (function () {
    function CustomMultiplier(multiplier, input, output) {
        this.multiplier = multiplier;
        this.input = input;
        this.output = output;
    }
    CustomMultiplier.prototype.calculate = function (x) {
        return x * this.multiplier;
    };
    CustomMultiplier.prototype.inputUnit = function () {
        return this.input;
    };
    CustomMultiplier.prototype.outputUnit = function () {
        return this.output;
    };
    return CustomMultiplier;
}());
var decimetersToMillimetersConverter = new CustomMultiplier(10, "dm", "mm");
var store3 = new CalculationsStore(decimetersToMillimetersConverter);
store3.addInput(1);
store3.addInput(2);
store3.addInput(3);
console.log(store3.getResult());
var inchesToDecimetersConverter = new CustomMultiplier(0.254, "in", "dm");
var store4 = new CalculationsStore(inchesToDecimetersConverter);
store4.addInput(1);
store4.addInput(2);
store4.addInput(3);
console.log(store4.getResult());
var TaxiRidePriceCalculator = /** @class */ (function () {
    function TaxiRidePriceCalculator(boardingFee, pricePerKilometer) {
        this.boardingFee = boardingFee;
        this.pricePerKilometer = pricePerKilometer;
    }
    TaxiRidePriceCalculator.prototype.calculate = function (kilometers) {
        return this.boardingFee + kilometers * this.pricePerKilometer;
    };
    TaxiRidePriceCalculator.prototype.inputUnit = function () {
        return "km";
    };
    TaxiRidePriceCalculator.prototype.outputUnit = function () {
        return "€";
    };
    return TaxiRidePriceCalculator;
}());
var taxiRidePriceCalculator = new TaxiRidePriceCalculator(2, 0.8);
var store5 = new CalculationsStore(taxiRidePriceCalculator);
store5.addInput(5);
store5.addInput(10);
store5.addInput(20);
console.log(store5.getResult());
var CelsiusToFahrenheit = /** @class */ (function () {
    function CelsiusToFahrenheit() {
    }
    CelsiusToFahrenheit.prototype.calculate = function (celsius) {
        return (celsius * 9) / 5 + 32;
    };
    CelsiusToFahrenheit.prototype.inputUnit = function () {
        return "°C";
    };
    CelsiusToFahrenheit.prototype.outputUnit = function () {
        return "°F";
    };
    return CelsiusToFahrenheit;
}());
var celsiusToFahrenheitConverter = new CelsiusToFahrenheit();
var store6 = new CalculationsStore(celsiusToFahrenheitConverter);
store6.addInput(0);
store6.addInput(10);
store6.addInput(20);
console.log(store6.getResult());
