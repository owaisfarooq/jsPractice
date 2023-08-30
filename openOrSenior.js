// data = [[45, 12],[55,21],[19, -2],[104, 20]];
console.log(openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20]
]));

function openOrSenior(data) {
    let eligable = [];

    for (let i = 0; i < data.length; i++)
        eligable[i] = (data[i][0] >= 55 && data[i][1] > 7) ? "Senior" : "Open";

    return eligable;
}

// my one liner :
// return data.map(x => x = (x[0] >= 55 && x[1] > 7) ? "Senior" : "Open")


// function openOrSenior(data) {
//     function determineMembership(member) {
//         return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
//     }
//     return data.map(determineMembership);
// }