const Test = require("./functionTesting");

Test.assertEquals(sumStrings('123','456'),'579');
Test.assertEquals(sumStrings('00103', '08567'),'8670');

Test.assertEquals(sumStrings('712569312664357328695151392', '8100824045303269669937'),'712577413488402631964821329');
Test.assertEquals(sumStrings('800', '9567'),'10367');

function sumStrings ( a, b ) {
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

// Sum Strings as Numbers
// https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript