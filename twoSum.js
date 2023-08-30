// function twoSum(numbers, target) {
//     for (let n = 0; n < numbers.length; n++) {
//         for (let i = n+1; i < numbers.length; i++) {
//             if (numbers[n] + numbers[i] == target) {
//                 return [n, i];
//             }
//         }
//     }
// }
// twoSum([1, 2, 3], 4)
// function twoSum(numbers, target) {
//     let result = numbers.map((val, i) => {
//         for (let n = 0; n < numbers.length; n++) {
//             if (val + numbers[n] == target && n != i) {
//                 return [n, i];
//             }
//             return ;
//         }
//     });
//     console.log(result.filter( element => {return element !== undefined;})[0]);
// }

function twoSum(numbers, target) {
    let result = numbers.map((val, i) => {
        for (let n = 0; n < numbers.length; n++) {
            if (val + numbers[n] == target && n != i) {
                return [n, i];
            }
            return ;
        }
    });
    console.log(result.filter( element => {return element !== undefined;})[0]);
}