for (let i = 0; i < 50; i++) {
    console.log("\n\nSum: " + i);
    // console.log("     2 dice sum = " + rolldiceSumProb(i, 2));
    console.log("     4 dice sum = " + rolldiceSumProb(i, 4));
}

function rolldiceSumProb(sum, dice){
    var prob = 0;
    for (let b = 1; b <= 6; b++) {
        for (let i = 1; i <= 6; i++) {
            for (let n = 1; n <= 6; n++) {
                for (let e = 1; e <= 6; e++) {
                    if (i+n+e+b == sum){
                        prob++;
                    }                 
                }         
            }
        }
    }
    // return (prob/Math.pow(6, dice));
    return (prob);
}