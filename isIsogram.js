assert = require('./functionTesting');
assert.strictEqual(isIsogram("Dermatoglyphics"), true);
assert.strictEqual(isIsogram("isogram"), true);
assert.strictEqual(isIsogram("aba"), false, "same chars may not be adjacent");
assert.strictEqual(isIsogram("moOse"), false, "same chars may not be same case");
assert.strictEqual(isIsogram("isIsogram"), false);
assert.strictEqual(isIsogram(""), true, "an empty string is a valid isogram");

function isIsogram(str) {
    let lettersUsed = [],
    sameCaseStr = str.toLowerCase();
    for (let i = 0; i < sameCaseStr.length; i++) {
        for (let j = 0; j < lettersUsed.length; j++) {
            if (sameCaseStr[i] == lettersUsed[j]) {
                return false;
            }
        }
        lettersUsed.push(sameCaseStr[i]);
    }
    return true;
}