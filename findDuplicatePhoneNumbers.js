// const assert = require('./functionTesting');
// testarr = ["4873279", "ITS-EASY", "888-4567", "3-10-10-10", "888-GLOP", "TUT-GLOP", "967-11-11", "310-GINO", "F101010", "888-1200", "-4-8-7-3-2-7-9-", "487-3279"];
// result = ["310-1010:2", "487-3279:4", "888-4567:3"];

// // assert.strictEqual(findDuplicatePhoneNumbers(testarr), result);
// console.log(findDuplicatePhoneNumbers(testarr));




// // A, B, and C map to 2
// // D, E, and F map to 3
// // G, H, and I map to 4
// // J, K, and L map to 5
// // M, N, and O map to 6
// // P, R, and S map to 7
// // T, U, and V map to 8
// // W, X, and Y map to 9

// function convertInNumbersIfInCharacters(characters) {
//     return characters.split('').map(char => {
//         if (Number(char) != NaN) {
            
//             return char;
//         }
//         if (char == '-') {
//             return "";
//         }
//         switch (char.toUpperCase()) {
//             case 'A' || 'B' || 'C':
//                 return 2;
//             case 'D' || 'E' || 'F':
//                 return 3;
//             case 'G' || 'H' || 'I':
//                 return 4;
//             case 'J' || 'K' || 'L':
//                 return 5;
//             case 'M' || 'N' || 'O':
//                 return 6;
//             case 'P' || 'R' || 'S':
//                 return 7;
//             case 'T' || 'U' || 'V':
//                 return 8;
//             case 'W' || 'X' || 'Y':
//                 return 9;
//         }
//     }).join('');
// }

// function findDuplicatePhoneNumbers(phoneNumbers) {
//     if (!phoneNumbers) {
//         return [];
//     }
    
//     let result = [];
    
//     let sameFormat = phoneNumbers.map(number => {
//         return convertInNumbersIfInCharacters(number);
//     });

//     for (let  i= 0; i < sameFormat.length; i++) {
//         let repitations = 0;
//         for (let n = i+1; n < sameFormat.length; n++) {
//             repitations += sameFormat[i] == sameFormat[n] ? 1 : 0;
//         }
//         result += (sameFormat[i] + ':' + repitations + "   ");
//     }
//     return result;
// }

// module.exports = { convertInNumbersIfInCharacters };

console.log(convertToNumbersIfInCharacters("bar"));
let mappings = [{3: "ABC"}, {4: "DEF"}]
function convertToNumbersIfInCharacters(str) {
    let output = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toUpperCase();
        switch (char) {
            case 'A' || 'B' || 'C':
                output += "2";
                break;
            case 'D' || 'E' || 'F':
                output += "3";
                break;
            case 'G' || 'H' || 'I':
                output += "4";
                break;
            case 'J' || 'K' || 'L':
                output += "5";
                break;
            case 'M' || 'N' || 'O':
                output += "6";
                break;
            case 'P' || 'Q' || 'R' || 'S':
                output += "7";
                break;
            case 'T' || 'U' || 'V':
                output += "8";
                break;
            case 'W' || 'X' || 'Y' || 'Z':
                output += "9";
                break;
        }

    }
    return Number(output);
}