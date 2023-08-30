let assert = require('./functionTesting');
assert.strictEqual(persistence(39),3);
assert.strictEqual(persistence(4),0);
assert.strictEqual(persistence(25),2);

function multilpy (nums){
    let total = 1;
    for (let i = 0; i < nums.length; i++) {
        total *= Number(nums[i]);
    }
    return total;
}

function persistence(num) {
    
    let chars = num.toString();
    let iterations = 0;

    while (chars.length > 1) {    
        chars = multilpy(chars).toString();
        iterations++;
    }
    return iterations;
}