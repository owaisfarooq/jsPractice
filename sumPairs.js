const assert = require('assert');

assert.deepEqual(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
assert.deepEqual(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
assert.deepEqual(sumPairs([20, -13, 40], -7), undefined, "No Match: [20, -13, 40] should return undefined for sum = -7");
assert.deepEqual(sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1], "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2");
assert.deepEqual(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7], "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10");
assert.deepEqual(sumPairs([4, -2, 3, 3, 4], 8), [4, 4], "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8");
assert.deepEqual(sumPairs([0, 2, 0], 0), [0, 0], "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0");
assert.deepEqual(sumPairs([5, 9, 13, -3], 10), [13, -3], "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10");


// function sumPairs(ints, s) {
//     let pairs = [];
    
//     for (let i = 0; i < ints.length; i++) {
//         for (let j = 0; j < ints.length; j++) {
//             if (ints[i] + ints[j] == s && i!=j) {
//                 pairs[pairs.length] = [ints[i], ints[j], i-j];
//             }
//         }
//     }
    
//     if (pairs.length == 0) {
//         return undefined;
//     }
    
//     let smallestPair = pairs[0];

//     for (let i = 0; i < pairs.length; i++) {
//         if (pairs[i][2] < smallestPair[2] || smallestPair[2] < 0) {
//             smallestPair = pairs[i];
//         }
//     }

//     return [smallestPair[0], smallestPair[1]].reverse();
// }




// NOT FAST ENOUGH
// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript