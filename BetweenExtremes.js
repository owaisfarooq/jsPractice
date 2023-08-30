const assert = require('./functionTesting');

assert.strictEqual(betweenExtremes([21, 34, 54, 43, 26, 12]), 42);
// assert.strictEqual(betweenExtremes([-1, -41, -77, -100]), 99);

function betweenExtremes(numbers) {
    let sorted = numbers.sort((a, b) => a - b);
    let biggest = sorted.pop();
    let lowest = sorted[0];
    return biggest - lowest;
}

    function betweenExtremes(numbers) {
        return numbers.sort((a, b) => a - b).pop() - numbers.sort((a, b) => a - b)[0];
    }