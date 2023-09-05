const assert = require('./functionTesting');

assert.assertEquals(findMissingLetter(['a','b','c','d','f']), 'e');
assert.assertEquals(findMissingLetter(['O','Q','R','S']), 'P');

function findMissingLetter(array) {
    const alphabets = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8,
        "i": 9,
        "j": 10,
        "k": 11,
        "l": 12,
        "m": 13,
        "n": 14,
        "o": 15,
        "p": 16,
        "q": 17,
        "r": 18,
        "s": 19,
        "t": 20,
        "u": 21,
        "v": 22,
        "w": 23,
        "x": 24,
        "y": 25,
        "z": 26
    };
    for (let i = 1; i < array.length; i++) {
        if (!(alphabets[array[i]] - 1 === alphabets[array[i - 1]])) {
            return String.fromCharCode(alphabets[array[i]] - 1 + 96); // Convert back to letter
        }
    }

}
// function findMissingLetter (array) {
//     for (let i = 1; i < array.length; i++)
//         if ( !(array[i].charCodeAt() - 1 == array[i-1].charCodeAt()) )
//             return String.fromCharCode(array[i].charCodeAt() - 1);
// }

// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript