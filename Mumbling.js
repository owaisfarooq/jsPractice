console.log(accum("ZpglnRxqenU"));

function accum(s) {
    // ['Z', 'p', 'g', 'l', 'n', 'R', 'x', 'q', 'e', 'n', 'U']
    let result = s.split("").map((val, index) => {
    
        for (let i = 0; i < index; i++){
            console.log("index: " + index + "i: " + i);
            return s[index];
        }
            
        return index < s.length-1 ? "-" : "";
    });

	// for (let n = 0; n < s.length; n++) {
    //     for (let i = 0; i <= n; i++)
    //         result += s[n];
        
    //         result += n < s.length-1 ? "-" : "";
    // }
    return result;
}