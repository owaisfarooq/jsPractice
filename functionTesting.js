const chalk = require('chalk');

function getResult (isPassed = true, functionReturnedValue, expectedValue, problem = "") {
    if (isPassed) {
        console.log(chalk.green("Passed"));
    }else {
        console.log(chalk.red("Failed") + `    expected: ${expectedValue} instead got ${functionReturnedValue}      ${problem}`);
    }
}
/**
 * ==
 * @param {Object} functionReturnedValue
 * @param {Object} expectedValue
 * @param {string} problem 
 */
function strictEqual (functionReturnedValue, expectedValue, problem = "") {
    return getResult(functionReturnedValue == expectedValue, functionReturnedValue, expectedValue, problem)
}

/**
 * functionReturnedValue.sort() === expectedValue.sort()
 * Test for arrays in any order
 * sorts before checking for equality
 * @param {Object} functionReturnedValue
 * @param {Object} expectedValue
 * @param {string} problem 
 */
function doTest (functionReturnedValue, expectedValue, problem = ""){
    
    return getResult(new Array(functionReturnedValue.sort()) === new Array(expectedValue.sort()), functionReturnedValue, expectedValue, problem)
}

/**
 * functionReturnedValue === expectedValue
 * @param {Object} functionReturnedValue
 * @param {Object} expectedValue
 * @param {string} problem 
 */
function assertEquals (functionReturnedValue, expectedValue, problem = ""){
    return getResult(functionReturnedValue === expectedValue, functionReturnedValue, expectedValue, problem)
}

/**
 * JSON.stringify(functionReturnedValue) === JSON.stringify(expectedValue)
 * testing for objects
 * @param {Object} functionReturnedValue
 * @param {Object} expectedValue
 * @param {string} problem 
 */
function test(functionReturnedValue, expectedValue, problem) {
    return getResult(JSON.stringify(functionReturnedValue) === JSON.stringify(expectedValue), functionReturnedValue, expectedValue, problem)
}

/**
 * JSON.stringify(functionReturnedValue) === JSON.stringify(expectedValue)
 * testing for objects
 * @param {Object} functionReturnedValue
 * @param {Object} expectedValue
 * @param {string} problem 
 */
function strictEqualArray (functionReturnedValue, expectedValue, problem) {
    return getResult(JSON.stringify(functionReturnedValue) === JSON.stringify(expectedValue), functionReturnedValue, expectedValue, problem)
}

/**
 * JSON.stringify(functionReturnedValue) === JSON.stringify(expectedValue)
 * testing for objects
 * @param {Object} functionReturnedValue
 * @param {Object} expectedValue
 * @param {string} problem 
 */
function strictEqualObjects(functionReturnedValue, expectedValue, problem = "") {
    return getResult(JSON.stringify(functionReturnedValue) === JSON.stringify(expectedValue), functionReturnedValue, expectedValue, problem)
}

/**
 * functionReturnedValue === expectedValue
 * @param {Object} functionReturnedValue
 * @param {Object} expectedValue
 * @param {string} problem 
 */
function expect (functionReturnedValue, expectedValue, problem = "") {
    return getResult(functionReturnedValue === expectedValue, functionReturnedValue, expectedValue, problem)
}

module.exports = { strictEqual, strictEqualArray, assertEquals, strictEqualObjects, expect, test, doTest };