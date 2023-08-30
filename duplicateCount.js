const assert = require('./functionTesting');

assert.strictEqual(duplicateCount(""), 0);
assert.strictEqual(duplicateCount("abcde"), 0);
assert.strictEqual(duplicateCount("aabbcde"), 2);
assert.strictEqual(duplicateCount("aabBcde"), 2,"should ignore case");
assert.strictEqual(duplicateCount("Indivisibility"), 1)
assert.strictEqual(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")


function duplicateCount(text){
    input = text.split("").map(val => val.toLowerCase());

    let Repeaters = [];
    for (let i = 0; i < input.length; i++) {
        
        for (let n = i+1; n < input.length; n++) {
            
            if (input[i] == input[n] && Repeaters.indexOf(input[i]) == -1) {
                Repeaters += input[i];
                i++;
            }
        }
    }
    return Repeaters.length;
}