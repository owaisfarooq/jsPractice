const Test = require("./functionTesting");

Test.assertEquals(palindrome(8),11);
Test.assertEquals(palindrome(281),282);
Test.assertEquals(palindrome(1029),1001); 
Test.assertEquals(palindrome(1221),1221);
Test.assertEquals(palindrome("BGHHGB"),"Not valid");
Test.assertEquals(palindrome("11029"),"Not valid");
Test.assertEquals(palindrome(-1029),"Not valid");

function isPalindrome ( num ) { 
    num+="";
    if ( num.length == 1) {
        return false;
    }
    for ( let i = 0; i < Math.floor( num.length/2 ); i++ ) {
        if ( num[i] !== num[num.length-1-i] ) {
        return false;
        }
    }
    return true;
}

function palindrome ( num ) {
    if ( typeof num === "string" || num < 0 ) {
        return "Not valid";
    }

    if ( isPalindrome( num ) ) {
        return num;
    }

    for ( let i = 1; true; i++ ) {
        if ( isPalindrome( num+i ) ) {
            return num+i;
        }
        if ( isPalindrome( num-i ) ) {
            return num-i;
        }
    }
}

// https://www.codewars.com/kata/58df8b4d010a9456140000c7/train/javascript/6543940e181a490cb3c4e018
// Numerical Palindrome #4