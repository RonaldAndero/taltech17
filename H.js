var CharCounter = /** @class */ (function () {
    function CharCounter(adder) {
        this.adder = adder;
    }
    CharCounter.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length);
    };
    CharCounter.prototype.addWords = function (words) {
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var word = words_1[_i];
            this.addWordCharacters(word);
        }
    };
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum();
    };
    return CharCounter;
}());
var SimpleAdder = /** @class */ (function () {
    function SimpleAdder() {
        this.sum = 0;
    }
    SimpleAdder.prototype.add = function (nr) {
        this.sum += nr;
    };
    SimpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    return SimpleAdder;
}());
var adder1 = new SimpleAdder();
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount()); // Output: 13
counter1.addWords(["hello", "world", "typescript"]);
console.log(counter1.getCharacterCount()); // Output: 32
