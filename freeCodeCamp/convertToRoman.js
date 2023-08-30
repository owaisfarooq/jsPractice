const assert = require('../functionTesting');

assert.strictEqual(convertToRoman(2), "II");
assert.strictEqual(convertToRoman(3), "III");
assert.strictEqual(convertToRoman(4), "IV");
assert.strictEqual(convertToRoman(5), "V");
assert.strictEqual(convertToRoman(9), "IX");
assert.strictEqual(convertToRoman(12), "XII");
assert.strictEqual(convertToRoman(16), "XVI");
assert.strictEqual(convertToRoman(29), "XXIX");
assert.strictEqual(convertToRoman(44), "XLIV");
assert.strictEqual(convertToRoman(45), "XLV");
assert.strictEqual(convertToRoman(68), "LXVIII");
assert.strictEqual(convertToRoman(83), "LXXXIII");
assert.strictEqual(convertToRoman(97), "XCVII");
assert.strictEqual(convertToRoman(99), "XCIX");
assert.strictEqual(convertToRoman(400), "CD");
assert.strictEqual(convertToRoman(500), "D");
assert.strictEqual(convertToRoman(501), "DI");
assert.strictEqual(convertToRoman(649), "DCXLIX");
assert.strictEqual(convertToRoman(798), "DCCXCVIII");
assert.strictEqual(convertToRoman(891), "DCCCXCI");
assert.strictEqual(convertToRoman(1000), "M");
assert.strictEqual(convertToRoman(1004), "MIV");
assert.strictEqual(convertToRoman(1006), "MVI");
assert.strictEqual(convertToRoman(1023), "MXXIII");
assert.strictEqual(convertToRoman(2014), "MMXIV");
assert.strictEqual(convertToRoman(3999), "MMMCMXCIX");

function convertToRoman(num, resUntilNow= "") {
    let anotherNum = num;
    let res = resUntilNow;
    
    if (anotherNum-1000 >= 0) {
        res += "M";
        anotherNum-=1000
    } else if (anotherNum-900 >= 0) {
        res += "CM";
        anotherNum-=900
    } else if (anotherNum-500 >= 0) {
        res += "D";
        anotherNum-=500
    }else if (anotherNum-400 >= 0) {
        res += "CD";
        anotherNum-=400
    } else if (anotherNum-100 >= 0) {
        res += "C";
        anotherNum-=100
    } else if (anotherNum-90 >= 0) {
        res += "XC";
        anotherNum-=90
    } else if (anotherNum-50 >= 0) {
        res += "L";
        anotherNum-=50
    } else if (anotherNum-40 >= 0) {
        res += "XL";
        anotherNum-=40
    } else if (anotherNum-10 >= 0) {
        res += "X";
        anotherNum-=10
    } else if (anotherNum-9 >= 0) {
        res += "IX";
        anotherNum-=9
    } else if (anotherNum-5 >= 0) {
        res += "V";
        anotherNum-=5
    } else if (anotherNum-4 >= 0) {
        res += "IV";
        anotherNum-=4
    } else if (anotherNum-1 >= 0) {
        res += "I";
        anotherNum-=1
    }

    if (anotherNum > 0) {
        res+=convertToRoman(anotherNum, resUntilNow= "")
    }

    return res;
    
}