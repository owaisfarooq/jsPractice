const chai = require('chai');
chai.config.truncateThreshold = 0;
const { deepEqual } = chai.assert;

function doTest (string, expected) {
    const actual = permutations(string);
	deepEqual(actual.sort(), expected.sort(), `for string "${string}"\n`);
}

doTest('a', ['a']);
// doTest('ab', ['ab', 'ba']);
// doTest('aabb', ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);


function permutations(string) {
    let unfilteredPermutations = [];
    let stringAsArray = string.split('');
    
    for (let i = 0; i < stringAsArray.length; i++) {
        const letter = stringAsArray[i];
        chai
    }
    
    return ['a'];
}


// https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript