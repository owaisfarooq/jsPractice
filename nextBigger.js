const Test = require('./functionTesting');
Test.assertEquals(nextBigger(12),21)
Test.assertEquals(nextBigger(513),531)
Test.assertEquals(nextBigger(2017),2071)
Test.assertEquals(nextBigger(414),441)
Test.assertEquals(nextBigger(144),414)


function nextBigger(n){
    let sorted = Number(n.toString().split('').sort((a, b) => {
        return a > b ? -1 : 1;
    }).join(''));

    return sorted == n ? -1 : sorted;
}

// not completed
// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript