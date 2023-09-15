const Test = require('./functionTesting');

Test.assertEquals(tacofy("Alex is Super Cool"), ['shell', 'beef', 'lettuce', 'beef', 'beef', 'salsa', 'salsa', 'beef', 'beef', 'cheese', 'beef', 'beef', 'lettuce', 'shell'],)
Test.assertEquals(tacofy("abtlcgs"), ['shell', 'beef', 'tomato', 'lettuce', 'cheese', 'guacamole', 'salsa', 'shell'])
Test.assertEquals(tacofy("dG"), ['shell', 'guacamole', 'shell'])
Test.assertEquals(tacofy("NftYUKkjjMUFs"), ['shell', 'tomato', 'beef', 'beef', 'salsa', 'shell'])
Test.assertEquals(tacofy("undefinedSCEWTWmivKqtBuOU"), ['shell', 'beef', 'beef', 'beef', 'beef', 'salsa', 'cheese', 'beef', 'tomato', 'beef', 'tomato', 'beef', 'beef', 'beef', 'shell'])
Test.assertEquals(tacofy("SsBiundefined"), ['shell', 'salsa', 'salsa', 'beef', 'beef', 'beef', 'beef', 'beef', 'shell'])

function checkKey(letter) {
    switch (letter.toLowerCase()) {
        case 't':
            return 'tomato';

        case 'l':
            return 'lettuce';

        case 'c':
            return 'cheese';

        case 'g':
            return 'guacamole';

        case 's':
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return 'beef'
        default:
            console.log("error finding key of letter: " + letter);
    }
}

function tacofy(word) {
    let arr = ['shell'];
    arr += word.map( (letter) => {
        if (checkKey(letter)) {
            return checkKey(letter)
        }
    });
    // for (let index = 0; index < word.length; index++) {
    //     const letter = word[index];
    //     if (checkKey(letter)) {
    //         arr.push(checkKey(letter))
    //     }
    // }
    arr.push('shell')
    console.log(arr);
    return arr;
}