console.log(insertDash(4126464578779790));

function insertDash(num) {
    num = num.toString();
    let output = "";

    for(let i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            output += num[i];

        } else {
            output+= num[i-1] % 2 ? '-' + num[i] : num[i];

        }

    }
    return output;
    
}