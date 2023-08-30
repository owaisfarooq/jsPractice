const Test = require('./functionTesting');

Test.assertEquals(tacofy(""), ['shell', 'shell'])
Test.assertEquals(tacofy("a"), ['shell', 'beef', 'shell'])
Test.assertEquals(tacofy("ggg"), ['shell', 'guacamole', 'guacamole', 'guacamole', 'shell'])
Test.assertEquals(tacofy("ogl"), ['shell', 'beef', 'guacamole', 'lettuce', 'shell'])
Test.assertEquals(tacofy("ydjkpwqrzto"), ['shell', 'tomato', 'beef', 'shell'])

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