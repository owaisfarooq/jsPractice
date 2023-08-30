const assert = require('./functionTesting');

assert.strictEqual(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 30);

function sumEvenNumbers(input) {
    return input.map(v => { return v % 2 == 0 ? v : 0}).reduce((x, y) => { return x + y });
}