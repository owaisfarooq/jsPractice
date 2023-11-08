const Test = require('./functionTesting');

Test.assertEquals(differentiate("12x+2", 3), 12);
Test.assertEquals(differentiate("x^2-x", 3), 5);
Test.assertEquals(differentiate("-5x^2+10x+4", 3), -20);

function differenciateX ( equation ) {
  let coefficient;
  let wasLastLetterADigit = false;
  let arrayOfEquation = equation.split("");

  for ( let i = 0; i < arrayOfEquation.length; i ++ ) {
    const digit = arrayOfEquation[i];
    if ( !wasLastLetterADigit ) {}
  }
}

function putValues ( equation, valueOfX ) {
  
}

function differentiate ( equation, point ) {
    return putValues( differenciateX( equation ), point );
}