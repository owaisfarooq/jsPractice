const assert = require("./functionTesting");

assert.strictEqual(formatDuration(1), "1 second");
assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
assert.strictEqual(formatDuration(120), "2 minutes");
assert.strictEqual(formatDuration(3600), "1 hour");
assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");

function formatDuration (seconds) {
    if (!seconds) {
        return 'now';
    }
    let years = 0, days = 0, hours = 0, minutes = 0, noOfseconds = seconds, result = "";
    while (noOfseconds >= 60) {
        minutes += 1;
        noOfseconds -= 60;
        while (minutes >= 60) {
            hours += 1;
            minutes -= 60;
            while (hours >= 24) {
                days += 1;
                hours -= 24;
                while (days >= 365) {
                    years += 1;
                    days -= 365;
                }
            }
        }
    }
    myDateJoined = (years+"-"+days+"-"+hours+"-"+minutes+"-"+noOfseconds).split("-");
    
    let noSpace = false;
    if (years != 0) {
        if (years > 1) {
            result += years + " years";
        } else {
            result += years + " year";
        }
        noSpace = true;
    }
    if (days != 0) {
        if (noSpace) {
            result += ", ";
        }
        if (days > 1) {
            result += days + " days";
        } else {
            result += days + " day";
        }
        noSpace = true;
    }
    if (hours != 0) {
        if (noSpace) {
            result += ", ";
        }
        if (hours > 1) {
            result += hours + " hours";
        } else {
            result += hours + " hour";
        }
        noSpace = true;
    }
    if (minutes != 0) {
        
        if (noOfseconds == 0 && (hours != 0 || days != 0 || years != 0 )){
            result += " and ";
        }else if (noSpace) {
            result += ", ";
        }
        if (minutes > 1) {
            result += minutes + " minutes";
        } else {
            result += minutes + " minute";
        }
        noSpace = true;
    }
    if (noOfseconds != 0) {
        if (hours != 0 || days != 0 || years != 0){
            result += " and ";
        }else if (myDateJoined[3] != 0) {
            result += " and ";
        }else if (noSpace) {
            result += ", ";
        }
        if (noOfseconds > 1) {
            result += noOfseconds + " seconds";
        } else {
            result += noOfseconds + " second";
        }
        noSpace = true;
    }
    return result;
}