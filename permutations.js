const Test = require('./functionTesting');

Test.doTest(permutations('a'), ['a']);
Test.doTest(permutations('ab'), ['ab', 'ba']);
Test.doTest(permutations('aabb'), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);


function permutations(string) {
    let allPermutations = [];
    let currentString = string;
    for (let index = 0; index < string.length; index++) {
        const variableCharacter = string[index];
        
    }
    return ['a'];
}


// https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript