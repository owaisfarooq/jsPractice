function convertToRoman(num, resUntilNow = []) {
    anotherNum = num;
    res = resUntilNow;
    
    if (anotherNum-1000 >= 0) {
        res += "M";
        console.log("asd");
        anotherNum-=1000
    } else if (anotherNum-900 >= 0) {
        res += "CM";
        anotherNum-=900
    } else if (anotherNum-500 >= 0) {
        res += "D";
        anotherNum-=500
    }else if (anotherNum-400 >= 0) {
        res += "CD";
        anotherNum-=400
    } else if (anotherNum-100 >= 0) {
        res += "C";
        anotherNum-=100
    } else if (anotherNum-90 >= 0) {
        res += "XC";
        anotherNum-=90
    } else if (anotherNum-50 >= 0) {
        res += "L";
        anotherNum-=50
    } else if (anotherNum-40 >= 0) {
        res += "XL";
        console.log("asd");
        anotherNum-=40
    } else if (anotherNum-10 >= 0) {
        res += "X";
        anotherNum-=10
    } else if (anotherNum-9 >= 0) {
        res += "IX";
        anotherNum-=9
    } else if (anotherNum-5 >= 0) {
        res += "V";
        anotherNum-=5
    } else if (anotherNum-4 >= 0) {
        res += "IV";
        anotherNum-=4
    } else if (anotherNum-1 >= 0) {
        res += "I";
        anotherNum-=1;
        console.log("asd");
    }
    
    if (anotherNum > 0) {
        res+=convertToRoman(anotherNum, resUntilNow= "")
        console.log("asd");
    }
    console.log("asd");
    console.table(res);
    return res.join("");
}