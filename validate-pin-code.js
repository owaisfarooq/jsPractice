console.log("expected: false      ans: " + validatePIN ("a1234") + "    reason: not characters");
console.log("expected: false      ans: " + validatePIN ("234") + "     reason: number limit");
console.log("expected: true       ans: " + validatePIN ('1234') + "     reason: everything is ok");
console.log("expected: false       ans: " + validatePIN ('-1.234') + "     reason: should return False for pins with length other than 4 or 6");
console.log("expected: false       ans: " + validatePIN ('1.234') + "     reason: should return False for pins with length other than 4 or 6");
console.log("expected: false       ans: " + validatePIN ('12.0') + "     reason: should handle all edge cases");
console.log("expected: false       ans: " + validatePIN ('-12345') + "     reason: should return False for pins with length other than 4 or 6");

function validatePIN (pin) {
    if (Number.isInteger(Number(pin))) {
        console.log(pin + " passed is integer test");
        if (pin.toString().length == 4 || pin.toString().length == 6) {
            return true;
        }
    }
    return false; 
    // return !Number.isInteger(Number(pin)) ? false : (pin.toString().length == 4 || pin.toString().length == 6) ? true : false;
}