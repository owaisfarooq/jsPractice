const Test = require('./functionTesting');

Test.assertEquals(getLastDigit(193150), 5);
Test.assertEquals(getLastDigit(300), 0);
Test.assertEquals(getLastDigit(20001), 6);

// As you probably know, Fibonacci sequence are the numbers in the following integer
// sequence: 1, 1, 2, 3, 5, 8, 13... 
// Write a method that takes the index as an argument and returns last digit from fibonacci number. 
// Example: getLastDigit(15) - 610. Your method must return 0 because the last digit of 610 is 0.
// Fibonacci sequence grows very fast and value can take very big numbers (bigger than integer type can contain),
// so, please, be careful with overflow.

function addTwoNumbers(num1, num2) {
    for (let i = num1.length-1; i >= 0; i--) {
        // if ()
        const digit1 = num1[i];
        const digit2 = num2[i];
    }
}

function getLastDigit(index) {
    const sequence = [ '1', '1', '2', '3', '5', '8', '13'];
    for (let i = 1; i < index; i++) {
        sequence.push(addTwoNumbers(sequence.length-1, sequence.length-2));
    }
    return Number(sequence.pop());
}





// Find Fibonacci last digit
// https://www.codewars.com/kata/56b7251b81290caf76000978/train/javascript