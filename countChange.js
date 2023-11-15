const { assert } = require('chai');

const test = (money, coins, expected) => {
  assert.strictEqual(countChange(money, coins), expected, `Test failed for input (money = ${money}, coins = [${coins}])`);
};

describe('Tests', () => {
  it('Sample Tests', () => {
    test(0, [1, 2], 1);
    test(4, [1, 2], 3);
    test(10, [5, 2, 3], 4);
    test(11, [5, 7], 0);
    test(300, [5, 10, 20, 50, 100, 200, 500], 1022);
  });
});
Test failed for input (money = 98, coins = [3,14,8]): expected 1 to equal 19
Test failed for input (money = 1945, coins = [447,350,120,373,173,482]): expected 1 to equal 4 

function countChange (money = 0, coins = []) {
  if ( !money ) return 1;

  coins = coins.filter( x => x <= money).sort();
  if ( !coins.length ) return 0;


  return 1;
}