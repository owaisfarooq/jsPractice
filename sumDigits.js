// const { assert } = require("chai")

const assert = require('./functionTesting');

assert.strictEqual(sumDigits(10), 1);
assert.strictEqual(sumDigits(99), 18);
assert.strictEqual(sumDigits(-32), 5);


function sumDigits (number) {
  let sum = 0;
  let arr = Array.from(String(number), num => Number(num));

  if (isNaN(arr[0]))
    arr[0] = 0;

  arr.forEach (num => sum+=num);
  return sum;
}
