// testing
var assert = require('chai').assert

assert.equal(toWeirdCase('This'), 'ThIs', "should return the correct value for a single word");
assert.equal(toWeirdCase('is'), 'Is', "should return the correct value for a single word");
assert.equal(toWeirdCase('This is a test'), 'ThIs Is A TeSt', "should return the correct value for multiple words");


function toWeirdCase(string){
    let words = []
    
}