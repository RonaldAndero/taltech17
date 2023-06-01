var TimeCalculation = /** @class */ (function () {
    function TimeCalculation(difference, inputType, outputType, descriptionstr) {
        this.difference = difference;
        this.inputType = inputType;
        this.outputType = outputType;
        this.descriptionstr = descriptionstr;
    }
    TimeCalculation.prototype.calculate = function (input) {
        var result = input + this.difference;
        if (result < 0) {
            result += 24;
        }
        if (result > 23) {
            result -= 24;
        }
        return result;
    };
    TimeCalculation.prototype.inputUnit = function () {
        return this.inputType;
    };
    TimeCalculation.prototype.outputUnit = function () {
        return this.outputType;
    };
    TimeCalculation.prototype.description = function () {
        return this.descriptionstr;
    };
    return TimeCalculation;
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
        var result = [this.calculator.description()];
        for (var index in this.inputs) {
            result.push(this.inputs[index] + " " + this.calculator.inputUnit() + " - " +
                this.outputs[index] + " " + this.calculator.outputUnit());
        }
        return result.join("\n");
    };
    return CalculationsStore;
}());
var converter = new TimeCalculation(-1, "h Tallinn", "h Stockholm", "Kellaajad linnades");
var store1 = new CalculationsStore(converter);
store1.addInput(0);
store1.addInput(1);
store1.addInput(5);
store1.addInput(10);
console.log(store1.getResult());
