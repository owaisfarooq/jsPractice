const assert = require('./functionTesting');

assert.strictEqual(to24hourtime( 1,  0, "am"), "0100", "Input =  1:00 am");
assert.strictEqual(to24hourtime( 1,  0, "pm"), "1300", "Input =  1:00 pm");
assert.strictEqual(to24hourtime(12,  0, "am"), "0000", "Input = 12:00 am");
assert.strictEqual(to24hourtime(12,  0, "pm"), "1200", "Input = 12:00 pm");
assert.strictEqual(to24hourtime( 6, 30, "am"), "0630", "Input =  6:30 am");
assert.strictEqual(to24hourtime( 9, 45, "pm"), "2145", "Input =  9:45 pm");


// Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!

// You will have to define a function, which will be given
// an hour (always in the range of 1 to 12, inclusive),
// a minute (always in the range of 0 to 59, inclusive),
// a period (either a.m. or p.m.) as input.

// Your task is to return a four-digit string that encodes that time in 24-hour time.

// Notes
// By convention, noon is 12:00 pm, and midnight is 12:00 am.
// On 12-hours clock, there is no 0 hour, and time just after midnight is denoted as, for example, 12:15 am. On 24-hour clock, this translates to 0015.



// hour will always range from 1 to 12 (inclusive)
// minute will always range from 0 to 59 (inclusive)
// period will always be either "am" or "pm"



function to24hourtime(hour, minute, period) {
    let result = String(hour)
    if (period !== 'am') {
        result = String(hour+12);
    }               
    if ( result.length < 2 ) {
        result += "0";
    }

    if ( Number(result) > 12) {
        result = result.split("").reverse().join("");
    }

    if ( String(minute).length < 2) {
        result += "0"
    }
    result += minute;
    return result;
}




// Converting 12-hour time to 24-hour time
// https://www.codewars.com/kata/59b0a6da44a4b7080300008a/train/javascript