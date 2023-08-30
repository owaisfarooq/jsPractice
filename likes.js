console.log(likes([]) == "no one likes this" ? "Passed" : `Failed: shouldve been \"no one likes this\" instead got ${likes([])}`);
console.log(likes(['Peter']) == "Peter likes this" ? "Passed" : `Failed: shouldve been \"Peter likes this\" instead got ${likes(['Peter'])}`);
console.log(likes(['Jacob', 'Alex']) == "Jacob and Alex like this" ? "Passed" : `Failed: shouldve been \"Jacob and Alex like this\" instead got ${likes(['Jacob', 'Alex'])}`);
console.log(likes(['Max', 'John', 'Mark']) == "Max, John and Mark like this" ? "Passed" : `Failed: shouldve been \"Max, John and Mark like this\" instead got ${likes(['Max', 'John', 'Mark'])}`);
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']) == "Alex, Jacob and 2 others like this" ? "Passed" : `Failed: shouldve been \"Alex, Jacob and 2 others like this\" instead got ${likes(['Alex', 'Jacob', 'Mark', 'Max'])}`);

function likes(names) {

    // return names.length == 0 ? "no one likes this" : names.length == 1 ? `${names[0]} likes this` : names.length == 2 ? `${names[0]} and ${names[1]} like this` : names.length == 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` : `${names[0]}, ${names[1]} and ${names.length -2} others like this`;

    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length -2} others like this`;
    }
}