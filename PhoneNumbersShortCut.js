let AccPhoneNumber = "3662277";
let AccWords = ["foo", "bar", "baz", "foobar", "emo", "cap", "car", "cat"];
let AccOutput = ["bar", "cap", "car", "emo", "foo", "foobar"];
const assert = require('./functionTesting');
const PhoneNumbers  = require('./findDuplicatePhoneNumbers')
assert.strictEqual(shortListWordsWRTNumber(AccPhoneNumber, AccWords), AccOutput);
let lettersMapping = ["", "", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];

function shortListWordsWRTNumber(number, words) {
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let element = words[i]; // "foo"
        console.log(PhoneNumbers.convertInNumbersIfInCharacters(element))
        
    }
    return []
}