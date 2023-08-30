const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

// 1
assert.deepEqual(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]), {
    pos: [3, 7],
    peaks: [6, 3]
});
// 2
assert.deepEqual(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]), {
    pos: [3, 7],
    peaks: [6, 3]
});
// 3
assert.deepEqual(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]), {
    pos: [3, 7, 10],
    peaks: [6, 3, 2]
});
// 4
assert.deepEqual(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1]), {
    pos: [2, 4],
    peaks: [3, 2]
});
// 5
assert.deepEqual(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]), {
    pos: [2],
    peaks: [3]
});
// 6
assert.deepEqual(pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6]), {
    pos: [2],
    peaks: [3]
});
// 7
assert.deepEqual(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1]), {
    pos: [2],
    peaks: [3]
});
// problem
// 8
assert.deepEqual(pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3]), {
    pos: [2, 7, 14, 20],
    peaks: [5, 6, 5, 5]
});
// 9
assert.deepEqual(pickPeaks([]), {
    pos: [],
    peaks: []
});
// 10
assert.deepEqual(pickPeaks([1, 1, 1, 1]), {
    pos: [],
    peaks: []
});


function pickPeaks(arr) {
    let position = [],
        allPeaks = []

    for (let i = 0; i < arr.length; i++) {

        if (!(arr[i - 1] < arr[i] && arr[i] >= arr[i + 1])) {
            continue;
        }
        if (!(arr[i] == arr[i + 1])) {
            position.push(i);
            allPeaks.push(arr[i]);
            continue;
        }

        let isEqualToLastValueOfArray = false;

        for (let j = i; j < arr.length; j++) {

            if (arr[i] < arr[j]) {
                isEqualToLastValueOfArray = false;
                break;
            }

            if (arr[i] !== arr[j]) {
                isEqualToLastValueOfArray = true;
            }

        }

        if (isEqualToLastValueOfArray) {
            position.push(i);
            allPeaks.push(arr[i]);

        }
    }

    return {
        pos: position,
        peaks: allPeaks
    }
}

// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript