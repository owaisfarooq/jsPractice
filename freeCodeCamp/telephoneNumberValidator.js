function telephoneCheck(str) {

    let noofNo = 0;
    let lastBracket = "";

    for (let index = 0; index < str.length; index++) {
        const digit = str[index];
        if (digit == ")" || digit == "(") {
            if (lastBracket !== "(" && digit == ")") {
                return false;
            }
            lastBracket = digit;
        }
        
    }

    for (let index = str.length-1; index >= 0; index--) {
        const digit = str[index];
        if (digit == "(" || digit == ")") {
            if (lastBracket !== ")" && digit == "(") {
                return false;
            }
            lastBracket = digit;
        }
        
    }
    if (str[0] == "-" || str[0] == ")") {
        return false;
    }
    
    for (let i = 0; i < str.length; i++) {
        const v = str.split("")[i];
        if (Number(v)) {
            noofNo++;
        } else if (v == "-" || v == "(" || v == ")" || v == " ") {
            
        } else {
            return false;
        }
    }
    
    let filteredStr = str.split("").filter( v => {
        if (Number(v)) {
            return true
        } 
        return false
    }).join("");

    if (filteredStr.length == 10) {
        return true;

    } else if (filteredStr.length == 11 && filteredStr[0] == '1' ){
        return true
    }
    return false
}

telephoneCheck("1 555-555-5555");