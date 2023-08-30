// console.log(eval("24- 13"));
console.log(evalString("12 + 12 - 13 * 14"));
function evalString(evalStr) {
    let operands = evalStr.split(/[+\-*/]/g);
    let operators = evalStr.match(/[+\-*/]/g);
    calculatedValue = 0;

    for (let i = 0; i < operators.length; i++) {
        let evaluationString = calculatedValue ? calculatedValue : operands[i];
        evaluationString += operators[i] + operands[i + 1];
        calculatedValue = eval(evaluationString)
    }
    return calculatedValue
}