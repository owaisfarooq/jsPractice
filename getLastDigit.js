const Test = require('./functionTesting');

// Test.assertEquals(addTwoNumbers("893427328497983427893248932498034289324", "234859234879342897893427893274"), "893427328732842662772591830391462182598");

// Test.assertEquals(getLastDigit(193150), 5);
Test.assertEquals(getLastDigit(300), 0);
Test.assertEquals(getLastDigit(20001), 6);
// Test.assertEquals(getLastDigit(15), 0);

// As you probably know, Fibonacci sequence are the numbers in the following integer
// sequence: 1, 1, 2, 3, 5, 8, 13... 
// Write a method that takes the index as an argument and returns last digit from fibonacci number. 
// Example: getLastDigit(15) - 610. Your method must return 0 because the last digit of 610 is 0.
// Fibonacci sequence grows very fast and value can take very big numbers (bigger than integer type can contain),
// so, please, be careful with overflow.

function addTwoNumbers(num1, num2) {
    let carry = 0;
    let result = [];

    // Convert num1 and num2 to strings
    num1 = num1.toString();
    num2 = num2.toString();

    // Make sure both numbers have the same length by padding with leading zeros if necessary
    const maxLength = Math.max(num1.length, num2.length);
    num1 = num1.padStart(maxLength, '0');
    num2 = num2.padStart(maxLength, '0');

    for (let i = maxLength - 1; i >= 0; i--) {
        const digit1 = parseInt(num1[i]);
        const digit2 = parseInt(num2[i]);

        const sum = digit1 + digit2 + carry;
        const newDigit = sum % 10;
        carry = Math.floor(sum / 10);

        result.unshift(newDigit); // Add the new digit to the beginning of the result array
    }

    if (carry > 0) {
        result.unshift(carry); // If there's a final carry, add it to the result
    }

    return result.join(''); // Convert the result array to a string
}

function getLastDigit(index) {
    // const sequence = [ '0', '1', '1', '2', '3', '5', '8', '13'];
    const sequence = [ '0', '1'];

    for (let i = 0; sequence.length <= index; i++) {
        console.clear()
        console.log(sequence.length, " done out of ", index);
        sequence.push(addTwoNumbers(sequence[sequence.length-1], sequence[sequence.length-2]));
    }
    return Number(sequence[sequence.length-1][sequence[sequence.length-1].length-1]);
}





// Find Fibonacci last digit
// https://www.codewars.com/kata/56b7251b81290caf76000978/train/javascript