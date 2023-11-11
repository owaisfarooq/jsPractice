const Test = require('./functionTesting');

// Test.assertEquals(areTheDigitsAPalindrome ( 12321 ), true );
// Test.assertEquals(areTheDigitsAPalindrome ( 1 ), true );
// Test.assertEquals(areTheDigitsAPalindrome ( 512 ), false );
// Test.assertEquals(areTheDigitsAPalindrome ( 41214 ), true );
// Test.assertEquals(areTheDigitsAPalindrome ( 1221 ), true );
// Test.assertEquals(areTheDigitsAPalindrome ( 1111 ), true );
// Test.assertEquals(areTheDigitsAPalindrome ( 412351 ), false );



// problem here
Test.assertEquals(areTheDigitsDecrementing ( 65432109 ), true );

// Test.assertEquals(areTheDigitsDecrementing ( 654321 ), true );
// Test.assertEquals(areTheDigitsDecrementing ( 41243 ), false );
// Test.assertEquals(areTheDigitsDecrementing ( 6543421 ), false );
// Test.assertEquals(areTheDigitsDecrementing ( 26543212 ), false );
// Test.assertEquals(areTheDigitsDecrementing ( 8654321 ), false );
// Test.assertEquals(areTheDigitsDecrementing ( 7654321 ), true );

Test.assertEquals(areTheDigitsIncrementing ( 7890 ), true );


// Test.assertEquals(isInteresting(3, [1337, 256]),     0);
// Test.assertEquals(isInteresting(1336, [1337, 256]),  1);
// Test.assertEquals(isInteresting(1337, [1337, 256]),  2);
// Test.assertEquals(isInteresting(11208, [1337, 256]), 0);
// Test.assertEquals(isInteresting(11209, [1337, 256]), 1);
// Test.assertEquals(isInteresting(11211, [1337, 256]), 2);

function areTheDigitsAPalindrome (num, reversedNum = String(num).split('').reverse().join("") ) {
    return String(num) === reversedNum;
}

function areTheDigitsDecrementing (number) {
    let areDecrementing = false;
    let arrOfNum = Array.from(String(number), num => Number(num));

    arrOfNum.forEach( (number, index) => {
        if (number != arrOfNum[index -1]-1 && index != 0) {
            areDecrementing = true;
        }
    });

    return !areDecrementing;
}

function areTheDigitsIncrementing (number) {
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

function isInAwesomePhrases ( num, awesomePhrases ) {
    return awesomePhrases.includes(num);
}

function isNumberInteresting ( num, awesomePhrases ) {
    isDigitFollowedByallZeros (num) || isEveryDigitIsTheSame (num) || areTheDigitsDecrementing (num) || areTheDigitsIncrementing (num) || areTheDigitsAPalindrome (num) || isInAwesomePhrases(num, awesomePhrases);
}

function isInteresting(number, awesomePhrases) {
    if (number < 100) return 0;
    
    if ( isNumberInteresting( number, awesomePhrases ) ) {
        return 2;
    }
    if ( isNumberInteresting ( number + 1, awesomePhrases ) || isNumberInteresting ( number + 2, awesomePhrases ) ) {
        return 1;
    }
    return 0;

}

// https://codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript