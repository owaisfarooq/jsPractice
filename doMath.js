// Your task is to write a function named do_math that receives a single argument.
// This argument is a string that contains multiple whitespace delimited numbers.
// Each number has a single alphabet letter somewhere within it.

// Example : "24z6 1x23 y369 89a 900b"
// As shown above, this alphabet letter can appear anywhere within the number.
// You have to extract the letters and sort the numbers according to their corresponding letters.

// Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)
// Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.

// The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in exactly this order.
// This has to work for any size of numbers sent in (after division, go back to addition, etc).
// In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the input string.
// Remember to also round the final answer to the nearest integer.

// Examples :
// "24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
// "24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
// "10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60

// Good luck and may the CODE be with you!

const Test = require('./functionTesting');

Test.assertEquals(doMath("24z6 1z23 y369 89z 900b "),1414);
Test.assertEquals(doMath("24z6 1x23 y369 89a 900b"),1299);
Test.assertEquals(doMath("10a 90x 14b 78u 45a 7b 34y"),60);
Test.assertEquals(doMath("111a + 222c - 444y * 777u / 999a + 888p"),1459);
Test.assertEquals(doMath("1z 2t 3q 5x 6u 8a 7b"),8);

function doMath(s) {
    let numbersWithoutLetters = [];
    s.split(" ").forEach(numberPlusLetter => {
        
        let letterExtracted = "";
        let numberValue = "";
        numberPlusLetter.split("").map( a => {
            if (Number(a) || Number(a) == 0) {
                numberValue += a;
            } else {
                letterExtracted = a;
            }
        })
        if (Number(numberValue)) {
            numbersWithoutLetters.push({
                numberValue: Number(numberValue),
                letter: letterExtracted
            })            
        }
        
    })
    numbersWithoutLetters.sort((a, b) => a.letter.localeCompare(b.letter));
    let total = 0;
    for (let index = 0; index < numbersWithoutLetters.length; index+=4) {
        total += numbersWithoutLetters[index].numberValue;
    }
    for (let index = 1; index < numbersWithoutLetters.length; index+=4) {
        total -= numbersWithoutLetters[index].numberValue;
    }
    for (let index = 2; index < numbersWithoutLetters.length; index+=4) {
        total *= numbersWithoutLetters[index].numberValue;
    }
    for (let index = 3; index < numbersWithoutLetters.length; index+=4) {
        total /= numbersWithoutLetters[index].numberValue;
    }

    return Math.round(total);
}

// https://www.codewars.com/kata/5782dd86202c0e43410001f6/train/javascript