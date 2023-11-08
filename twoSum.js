const assert = require('./functionTesting');

assert.strictEqual(twoSum([3,3], 6), [0, 1]);
assert.strictEqual(twoSum([2,7,11,15], 9), [0, 1]);

function twoSum (nums, target) {
    const keyValuePairs = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) {
            continue;
        }
        if (nums[i] <= target) {
            keyValuePairs.set(target - nums[i], i);
        }
    }

    for (let i = 0; i < nums.length; i++) {

        if (keyValuePairs.has(target - nums[i])) {
            return new Array([keyValuePairs.get(target - nums[i]), keyValuePairs.get(nums[i])])
        }
    }
}