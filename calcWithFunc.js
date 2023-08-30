const { log } = require('console');
const assert = require('./functionTesting');
let result = "";
assert.strictEqual(seven(times    (five ())), 35);
assert.strictEqual(four (plus     (nine ())), 13);
assert.strictEqual(eight(minus    (three())),  5);
assert.strictEqual(six  (dividedBy(two  ())),  3);

function zero(passedFunction) {
    return passedFunction ? passedFunction(0) : 0;
}
function one(passedFunction) {
    return passedFunction ? passedFunction(1) : 1;
}
function two(passedFunction) {
    return passedFunction ? passedFunction(2) : 2;
}
function three(passedFunction) {
    return passedFunction ? passedFunction(3) : 3;
}
function four(passedFunction) {
    return passedFunction ? passedFunction(4) : 4;
}
function five(passedFunction) {
    return passedFunction ? passedFunction(5) : 5;
}
function six(passedFunction) {
    // passedFunction = times (five)
    return passedFunction ? passedFunction(6) : 6;
}
function seven(passedFunction) {
    return passedFunction ? passedFunction(7) : 7;
}
function eight(passedFunction) {
    return passedFunction ? passedFunction(8) : 8;
}
function nine(passedFunction) {
    return passedFunction ? passedFunction(9) : 9;
}


function plus(func) {
     
}
function minus(func) {
    result += '-';
    func();
}
function times(func) {
    result += '*';
    func();
}
function dividedBy(func) {
    result += '/';
    func();
}