console.log(sortMyString("CodeWars"));

function sortMyString(S) {
    const output = [];
    
    let i;

    for (i = 0 ; i < S.length; i+= 2) {
        output [i] =  S[i];
        
    }
    
    output [i++] = ' ';

    for (i = 1; i < S.length; i+= 2) {
        output [i] =  S[i];
        
    }
    
    return output;
}