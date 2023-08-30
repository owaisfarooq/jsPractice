const Test = require('./functionTesting');

Test.assertEquals(isInteresting(3, [1337, 256]),     0);
Test.assertEquals(isInteresting(1336, [1337, 256]),  1);
Test.assertEquals(isInteresting(1337, [1337, 256]),  2);
Test.assertEquals(isInteresting(11208, [1337, 256]), 0);
Test.assertEquals(isInteresting(11209, [1337, 256]), 1);
Test.assertEquals(isInteresting(11211, [1337, 256]), 2);

function areTheDigitsAPalindrome (number) {
    let arrOfNum = Array.from(String(number), num => Number(num));
    
    if (arrOfNum.reverse() !== arrOfNum) {
        return false;
    }
    
    return true;
}

function areTheDigitsIncrementing (number) {
    let areDecrementing = false;
    let arrOfNum = Array.from(String(number), num => Number(num));

    arrOfNum.forEach( (number, index) => {
        if (number != arrOfNum[index -1]-1 && index != 0) {
            areDecrementing = true;
        }
    });

    return !areDecrementing;
}

function areTheDigitsDecrementing (number) {
    let areIncrementing = false;
    let arrOfNum = Array.from(String(number), num => Number(num));
    
    arrOfNum.forEach( (number, index) => {
        if (number != arrOfNum[index -1]+1 && index != 0) {
            areIncrementing = true;
        }
    });
    
    return !areIncrementing;
    
}

function isEveryDigitIsTheSame (number) {
    let isAllSame = false;
    let arrOfNum = Array.from(String(number), num => Number(num));
    
    arrOfNum.forEach( (number, index) => {
        if (arrOfNum[index-1] !== number) {
            isAllSame = true;
        }
    });
    
    return !isAllSame;
}

function isDigitFollowedByallZeros (number) {
    let isNumberFound = false;
    let arrOfNum = Array.from(String(number), num => Number(num));

    arrOfNum.forEach( (number, index) => {
        if (index !== 0 && number !== 0) {
            isNumberFound = true;
        }
    });

    return !isNumberFound;
}

function isInteresting(number, awesomePhrases) {
    if (number < 100) return 0;

    for (let i = number; i < number+2; i++) {
        isDigitFollowedByallZeros (100000) || isEveryDigitIsTheSame (number) || areTheDigitsDecrementing (number) || areTheDigitsIncrementing (number) || areTheDigitsAPalindrome (number)
    }
    return isDigitFollowedByallZeros (100000) || isEveryDigitIsTheSame (number) || areTheDigitsDecrementing (number) || areTheDigitsIncrementing (number) || areTheDigitsAPalindrome (number) ? 2 : 0;
}

// https://codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript