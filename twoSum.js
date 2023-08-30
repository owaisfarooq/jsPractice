// console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,3], 6));

function twoSum (nums, target) {
    const keyValuePairs = new Map()

    for (let i = 0; i < nums.length; i++) {
        keyValuePairs[target - nums[i]] = i
    }

    for (let i = 0; i < nums.length; i++) {
        if (keyValuePairs[target - nums[i]]) {
            return [keyValuePairs[target - nums[i]], keyValuePairs[nums[i]]]
        }        
    }
}