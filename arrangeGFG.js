let assert = require('./functionTesting');
assert.strictEqualArray(arrange([1, 0], 2), [0, 1]);
assert.strictEqualArray(arrange([4, 0, 2, 1, 3], 5), [4, 2, 1, 6, 0, 5, 3]);
[4, 5, 6, 2, 0, 1, 2, 3]

/*
    if we go to index N/3, and find the value V/0, we will find N/3 at arr[v/0]
    [4, 0, 2, 1, 3], [3, 4, 2, 0, 1]
*/

// newArr[i] = arr[arr[i]]

// [0, 1, 2, 3, 4]

function arrange(arr, n) {
    let newArr = [];
    
    for (let i = 0; i < n; i++) {
        newArr[arr[i]] = arr[i];
    }
    console.log(newArr);
    return newArr;
}

// https://practice.geeksforgeeks.org/problems/rearrange-an-array-with-o1-extra-space3142/1