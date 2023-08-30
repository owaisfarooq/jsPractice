console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) == "(123) 456-7890" ? "Passed" : `Failed: shouldve been \"(123) 456-7890\" instead got ${createPhoneNumber(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])}`)

function createPhoneNumber(numbers){
    return numbers.map((val, i) => i == 0 ? "(" + val : i == 3 ? ") " + val : i == 6 ? "-" + val : val).join("");
    
}