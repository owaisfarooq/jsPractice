const Test = require("./functionTesting");

Test.assertEquals(nextBigger(12),21)
Test.assertEquals(nextBigger(513),531)
Test.assertEquals(nextBigger(2017),2071)
Test.assertEquals(nextBigger(414),441)
Test.assertEquals(nextBigger(144),414)

function nextBigger(n) {
    let b = String(n).split('');
    if (b.length < 2) {
        return n;
    }
    if (b.length === 2) {
        let reverse = Number(b.reverse().join(''));
        return n > reverse ? n : reverse;
    }
    let allPossibleCombinations = [];
    for (let i = 0; i < b.length; i++) {
        const digitBeingMoved = b[i];
        for (let innerIndex = i; innerIndex < b.length; innerIndex++) {
            let newNumber = "";
            let tempArr = b;
            tempArr[i] = 
            const temp = digitBeingMoved;
            

        }
    }
}