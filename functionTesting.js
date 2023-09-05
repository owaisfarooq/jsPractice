const chalk = require('chalk');

function strictEqual (functionReturnedValue, expectedValue, problem = "") {
    if (functionReturnedValue == expectedValue) {
        console.log(chalk.green("Passed"));
    }else {
        console.log(chalk.red("Failed") + `    expected: ${expectedValue} instead got ${functionReturnedValue}      ${problem}`);
    }

}
function assertEquals (functionReturnedValue, expectedValue, problem = ""){
    if (expectedValue === functionReturnedValue) {
        console.log(chalk.green("Passed"));
    }else {
        console.log(chalk.red("Failed") + `    expected: ${expectedValue} instead got ${functionReturnedValue}      ${problem}`);
    }

}
function strictEqualArray (functionReturnedValue, expectedValue, problem = "") {
    if (JSON.stringify(functionReturnedValue) == JSON.stringify(expectedValue)) {
        console.log(chalk.green("Passed"));
    }else {
        console.log(chalk.red("Failed") + `    expected: ${expectedValue} instead got ${functionReturnedValue}      ${problem}`);
    }
}
function strictEqualObjects(functionReturnedValue, expectedValue, problem = "") {
    if (JSON.stringify(functionReturnedValue) === JSON.stringify(expectedValue)) {
        console.log(chalk.green("Passed"));
    }else {
        console.log(chalk.red("Failed") + `    expected: ${JSON.stringify(expectedValue)} instead got ${JSON.stringify(functionReturnedValue)}      ${problem}`);
    }
}
module.exports = { strictEqual, strictEqualArray, assertEquals, strictEqualObjects };


// function assertEquals (functionReturnedValue, expectedValue, problem = ""){
//     if (expectedValue === functionReturnedValue) {
//         console.log(("Passed"));
//     }else {
//         console.log(("Failed") + `    expected: ${expectedValue} instead got ${functionReturnedValue}      ${problem}`);
//     }

// }
module.exports = { assertEquals, strictEqualArray, strictEqual, strictEqualObjects };