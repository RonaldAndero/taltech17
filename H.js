var CharCounter = /** @class */ (function () {
    function CharCounter(adder) {
        this.adder = adder;
    }
    CharCounter.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length);
    };
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum();
    };
    return CharCounter;
}());
var CountingAdder = /** @class */ (function () {
    function CountingAdder() {
        this.sum = 0;
        this.count = 0;
        this.largestValue = Number.NEGATIVE_INFINITY;
    }
    CountingAdder.prototype.add = function (nr) {
        this.sum += nr;
        this.count++;
        if (nr > this.largestValue) {
            this.largestValue = nr;
        }
    };
    CountingAdder.prototype.getSum = function () {
        return this.sum;
    };
    CountingAdder.prototype.getAverage = function () {
        if (this.count > 0) {
            return this.sum / this.count;
        }
        return 0;
    };
    CountingAdder.prototype.getLargestValue = function () {
        return this.largestValue;
    };
    return CountingAdder;
}());
var adder1 = new CountingAdder();
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
console.log(adder1.getLargestValue());
