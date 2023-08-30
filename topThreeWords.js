const chalk = require('chalk');

const Test = require('./functionTesting');

Test.strictEqualArray(topThreeWords("a a a  b  c c  d d d d  e e e e e"), ['e','d','a'])

Test.strictEqualArray(topThreeWords("a a c b b"), ['a','b','c'])

Test.strictEqualArray(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),['e','ddd','aa'])

Test.strictEqualArray(topThreeWords("  //wont won't won't"), ["won't", "wont"])

Test.strictEqualArray(topThreeWords("  , e   .. "), ["e"])

Test.strictEqualArray(topThreeWords("  ...  "), [])

Test.strictEqualArray(topThreeWords("'"), [])

Test.strictEqualArray(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`), ['a','of','on']);

function checkIfWord(letter) {
    if(letter == '#' || letter == '.' || letter == ',' || letter == '/' || letter == '\\' || letter == '' || letter == ' ' || letter == undefined){ 
        return false;
    }
    return true;
}

function topThreeWords(text) {

    // filter words

    let words = text.split(" ");
    let filteredWords = [];

    for (let i = 0; i < words.length; i++) {

        const word = words[i];
        let filteredWord = [];

        if (word.length == 0 || word == undefined) {
            continue;
        }

        for (let j = 0; j < word.length; j++) {

            const letter = word[j];

            if (checkIfWord(letter)) {

                if (letter == "\'") {
                    if (checkIfWord(word[j-1]) || checkIfWord(word[j+1])) {
                        filteredWord[filteredWord.length] = letter.toLowerCase();
                    }

                } else {

                    filteredWord[filteredWord.length] = letter.toLowerCase();

                }

            }
        }
        if (filteredWord.length > 0) {
            filteredWords[filteredWords.length] = filteredWord.join("");
        }
    }

    words = filteredWords;

    if (filteredWords.length == 1) {

        return filteredWords;

    }

    if (filteredWords.length == 0) {

        return [];

    }

    // add words with no of occurrences

    let noOfWordsWithNoOfOccurrences = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (word == " " || word == "") {
            continue;

        }

        let wordFound = false;

        for (let j = 0; j < noOfWordsWithNoOfOccurrences.length; j++) {
            const ObjOfWord = noOfWordsWithNoOfOccurrences[j];

            if (ObjOfWord.word == word) {

                ObjOfWord.noOfOccurrences++;
                wordFound = true;

            }

        }

        if (!wordFound) {

            noOfWordsWithNoOfOccurrences.push({word: word, noOfOccurrences: 1});

        }

    }

    // return words in correct order
    noOfWordsWithNoOfOccurrences.sort((a, b) => b.noOfOccurrences - a.noOfOccurrences);

    let result = [];

    for (let i = 0; i < 3 && i < noOfWordsWithNoOfOccurrences.length; i++) {

        const wordObj = noOfWordsWithNoOfOccurrences[i];
        result[result.length] = wordObj.word;

    }

    return result;

}