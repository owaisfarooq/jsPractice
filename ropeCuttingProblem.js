const arr = [5, 1, 1, 2, 3, 5];
let assert = require('./functionTesting');
assert.strictEqual(ropeCutting(arr), "432");

function ropeCutting(arr) {
    
    let result = "";
    let reducedArray = arr;
    
    do {
        
        // find smallest element
        let smallest = reducedArray[0];
        for (let i = 0; i < reducedArray.length; i++) {
            smallest = (smallest > reducedArray[i]) ? reducedArray[i] : smallest;
        }
        
        // reduce the length of each element acc to the smallest
        for (let i = 0; i < reducedArray.length; i++) {
            reducedArray[i] -= smallest;
        }

        // remove  all the zero elements
        reducedArray = reducedArray.filter(element => element != 0);
        
        // update the result
        if (reducedArray.length) {
            result += reducedArray.length + "";
        }

    } while (reducedArray.length);

    return result;
}