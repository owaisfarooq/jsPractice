const chalk = require('chalk');

function getResult (isPassed = true, functionReturnedValue, expectedValue, problem = "") {
    if (isPassed) {
        console.log(chalk.green("Passed"));
    }else {
        console.log(chalk.red("Failed") + `    expected: ${expectedValue} instead got ${functionReturnedValue}      ${problem}`);
    }
}

function strictEqual (functionReturnedValue, expectedValue, problem = "") {
    return getResult(functionReturnedValue == expectedValue, functionReturnedValue, expectedValue, problem)
}
function doTest (functionReturnedValue, expectedValue, problem = ""){
    return getResult(functionReturnedValue.sort() === expectedValue.sort(), functionReturnedValue, expectedValue, problem)
}
function assertEquals (functionReturnedValue, expectedValue, problem = ""){
    return getResult(functionReturnedValue === expectedValue, functionReturnedValue, expectedValue, problem)
}
function test(functionReturnedValue, expectedValue, problem) {
    return getResult(JSON.stringify(functionReturnedValue) === JSON.stringify(expectedValue), functionReturnedValue, expectedValue, problem)
}
function strictEqualArray (functionReturnedValue, expectedValue, problem) {
    return getResult(JSON.stringify(functionReturnedValue) === JSON.stringify(expectedValue), functionReturnedValue, expectedValue, problem)
}
function strictEqualObjects(functionReturnedValue, expectedValue, problem = "") {
    return getResult(JSON.stringify(functionReturnedValue) === JSON.stringify(expectedValue), functionReturnedValue, expectedValue, problem)
}
function expect (functionReturnedValue, expectedValue, problem = "") {
    return getResult(functionReturnedValue === expectedValue, functionReturnedValue, expectedValue, problem)
}

module.exports = { strictEqual, strictEqualArray, assertEquals, strictEqualObjects, expect, test };