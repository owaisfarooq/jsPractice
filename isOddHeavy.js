const assert = require('./functionTesting');

// assert.strictEqual(isOddHeavy([0,2,19,4,4]), true);
assert.strictEqual(isOddHeavy([3]), true);

function isOddHeavy(n){
    const oddNumbers = n.filter(val => val % 2 !== 0);
    const evenNumbers = n.filter(val => val % 2 === 0);
    if (!oddNumbers) {
        return false;
    }
    if (evenNumbers.length == 0) {
        return true;
    }
    let lowestOddNumber = oddNumbers[0];
    
    let highestEvenNumber = evenNumbers[0];
    for (let i = 0; i < oddNumbers.length; i++){
        if (lowestOddNumber > oddNumbers[i]){
            lowestOddNumber = oddNumbers[i];
        }
    }

    for (let i = 0; i < evenNumbers.length; i++){
        if (highestEvenNumber < evenNumbers[i]){
            highestEvenNumber = evenNumbers[i];
        }
    }
    return lowestOddNumber > highestEvenNumber ? true : false;
}