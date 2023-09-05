let assert = require('./functionTesting');

const coins1= [1,5,10,25];
const coins2= [1,2,5,10,20,50];

assert.assertEquals(coinsNeeded(75, coins1), 3, "75 is 25+25+25");
assert.assertEquals(coinsNeeded(123, coins1), 9, "123 is 25+25+25+25+10+10+1+1");
assert.assertEquals(coinsNeeded(75, coins2), 3, "75 is 50+20+5");
assert.assertEquals(coinsNeeded(123, coins2), 5, "123 is 50+50+20+2+1");

function coinsNeeded(amount, coinDenominations) {
    coinDenominations.sort((a, b) => b-a)

    let noOfCoinsUsed = 0;
    let total = 0;

    while (total !== amount) {

        for (let i = 0; i < coinDenominations.length; i++) {
            const coin = coinDenominations[i];

            if (coin <= amount-total) {
                total += coin;
                noOfCoinsUsed++;
                break;
            }

        }

    }
    return noOfCoinsUsed;
}


// https://www.codewars.com/kata/58dfc0d8ca6895cb4e00005c/train/javascript