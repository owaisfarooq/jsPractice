const Test = require('./functionTesting');


// Test.assertEquals(isInAwesomePhrases('123', [123, 412]), true);
// Test.assertEquals(isInAwesomePhrases('123', [124, 412]), false);
// Test.assertEquals(isInAwesomePhrases('321', [321, 412]), true);
// Test.assertEquals(isInAwesomePhrases( 321, [321, 412]), true);
// Test.assertEquals(isInAwesomePhrases( 123, ['123', 412]), true);

// Test.assertEquals(sumBigIntegers('123','456'),'579');
// Test.assertEquals(sumBigIntegers('00103', '08567'),'8670');
// Test.assertEquals(sumBigIntegers('712569312664357328695151392', '8100824045303269669937'),'712577413488402631964821329');
// Test.assertEquals(sumBigIntegers('800', '9567'),'10367');

// Test.assertEquals(areTheDigitsAPalindrome ( 12321 ), true );
// Test.assertEquals(areTheDigitsAPalindrome ( 1 ), true );
// Test.assertEquals(areTheDigitsAPalindrome ( 512 ), false );
// Test.assertEquals(areTheDigitsAPalindrome ( 41214 ), true );
// Test.assertEquals(areTheDigitsAPalindrome ( 1221 ), true );
// Test.assertEquals(areTheDigitsAPalindrome ( 1111 ), true );
// Test.assertEquals(areTheDigitsAPalindrome ( 412351 ), false );



// problem here
// Test.assertEquals(areTheDigitsDecrementing ( 65432109 ), true );

// Test.assertEquals(areTheDigitsDecrementing ( 654321 ), true );
// Test.assertEquals(areTheDigitsDecrementing ( 41243 ), false );
// Test.assertEquals(areTheDigitsDecrementing ( 6543421 ), false );
// Test.assertEquals(areTheDigitsDecrementing ( 26543212 ), false );
// Test.assertEquals(areTheDigitsDecrementing ( 8654321 ), false );
// Test.assertEquals(areTheDigitsDecrementing ( 7654321 ), true );

// Test.assertEquals(areTheDigitsIncrementing ( 7890 ), true );



// main function testing:

// Basic inputs
// should handle boring numbers

Test.assertEquals(isInteresting(7382, []), 0);
Test.assertEquals(isInteresting(99919911, []), 0);


// should handle ordered yet still boring numbers

Test.assertEquals(isInteresting(7540, []), 0);
Test.assertEquals(isInteresting(1590, []), 0);

// should handle incrementing sequences

Test.assertEquals(isInteresting(123, []), 2);
Test.assertEquals(isInteresting(1234, []), 2);
Test.assertEquals(isInteresting(67890, []), 2);
Test.assertEquals(isInteresting(234567890, []), 2);


// should handle palindromic numbers

Test.assertEquals(isInteresting(101, []), 2);
Test.assertEquals(isInteresting(11011, []), 2);
Test.assertEquals(isInteresting(7473747, []), 2);

// should handle awesome phrases

Test.assertEquals(isInteresting(1337, [1337,256]), 2);
Test.assertEquals(isInteresting(80085, [80085]), 2);
Test.assertEquals(isInteresting(256, [1337,256,376006]), 2);

// should handle decrementing sequences

Test.assertEquals(isInteresting(3210, []), 2);
Test.assertEquals(isInteresting(654, []), 2);
Test.assertEquals(isInteresting(8765, []), 2);
Test.assertEquals(isInteresting(987654321, []), 2);


// should handle monotone numbers

Test.assertEquals(isInteresting(111, []), 2);
Test.assertEquals(isInteresting(444, []), 2);
Test.assertEquals(isInteresting(9999999, []), 2);


// should handle big numbers

Test.assertEquals(isInteresting(100, []), 2);
Test.assertEquals(isInteresting(7000, []), 2);
Test.assertEquals(isInteresting(800000, []), 2);


// Upcoming inputs
// should handle upcoming big numbers

Test.assertEquals(isInteresting(98, []), 1);

// should handle upcoming palindromic numbers

Test.assertEquals(isInteresting(119, []), 1);
Test.assertEquals(isInteresting(120, []), 1);
Test.assertEquals(isInteresting(7473745, []), 1);


// should handle upcoming decrementing sequences

Test.assertEquals(isInteresting(3208, []), 1);
Test.assertEquals(isInteresting(3209, []), 1);
Test.assertEquals(isInteresting(987654319, []), 1);
Test.assertEquals(isInteresting(987654320, []), 1);

// should handle upcoming incrementing sequences

Test.assertEquals(isInteresting(122, []), 1);
Test.assertEquals(isInteresting(1232, []), 1);
Test.assertEquals(isInteresting(67888, []), 1);
Test.assertEquals(isInteresting(234567889, []), 1);

// should handle upcoming monotone numbers

Test.assertEquals(isInteresting(109, []), 1);
Test.assertEquals(isInteresting(110, []), 1);
Test.assertEquals(isInteresting(442, []), 1);
Test.assertEquals(isInteresting(9999997, []), 1);

// should handle upcoming awesome phrases

Test.assertEquals(isInteresting(1335, [1337,256]), 1);
Test.assertEquals(isInteresting(255, [1337,256]), 1);
Test.assertEquals(isInteresting(80083, [80085]), 1);
Test.assertEquals(isInteresting(254, [1337,256,376006]), 1);




function sumBigIntegers ( a, b ) {
    a = a.toString()
    b = b.toString()
    // finding which number has max number of digits
    let maxNoOfDigits = Math.max(a.length, b.length);

    // adding extra zeros at the start of each number
    let num1 = a.padStart(maxNoOfDigits, '0');
    let num2 = b.padStart(maxNoOfDigits, '0');

    let sum = "";
    let carry = 0;
    for ( let i = maxNoOfDigits-1 ; i >= 0 ; i-- ) {
        let sumOfDigits = String(Number(num1[i]) + Number(num2[i]) + Number(carry)/10);
        carry = 0;

        if ( Number(sumOfDigits) > 9 ) {
            carry = 10;
            sumOfDigits = Number(sumOfDigits) - 10;
        }

        sum = sumOfDigits + sum;
    }

    if ( carry ) {
        sum = '1' + sum;
    }

    return sum.replace(/^0+/, '');
}

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
    let arrOfNum = Array.from(String(number), num => Number(num));

    for (let index = 1; index < arrOfNum.length; index++) {
        const digit = arrOfNum[index];
        const digitBefore = arrOfNum[index - 1];

        if ( digit == 0 ) {
            if ( digitBefore == 9 ) {
                continue;
            }
            return false;
        }

        if ( digit-1 != digitBefore ) {
            return false;
        }
    }
    return true;
    // arrOfNum.forEach( (number, index) => {
    //     if ( number != arrOfNum[index -1]+1 && index != 0) {
    //         areIncrementing = true;
    //     }
    // });
    
    // return areIncrementing;
    
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

function isInAwesomePhrases ( num, awesomePhrases = [] ) {
    return Boolean(awesomePhrases.filter( v => String(v) === String(num)).length)
}

function isNumberInteresting ( num, awesomePhrases ) {
    return isDigitFollowedByallZeros (num) || isEveryDigitIsTheSame (num) || areTheDigitsDecrementing (num) || areTheDigitsIncrementing (num) || areTheDigitsAPalindrome (num) || isInAwesomePhrases(num, awesomePhrases);
}

function isInteresting(number, awesomePhrases) {
    if ( number+2 < 100 ) return 0;
    if ( number < 100 ) return 1;
    if ( isNumberInteresting( number, awesomePhrases ) ) {
        
        return 2;
    }

    if ( isNumberInteresting ( sumBigIntegers(number, 1), awesomePhrases ) || isNumberInteresting ( sumBigIntegers(number, 2), awesomePhrases ) ) {
        return 1;
    }
    return 0;

}
// https://codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript