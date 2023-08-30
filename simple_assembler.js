const assert = require('assert');

assert.deepEqual(simple_assembler(['mov a 5','inc a','dec a','dec a','jnz a -1', 'inc a']), {'a': 1});

function simple_assembler(program) {
    let statementsInArr = program.map(statement => {
        return statement.split(' ');
    })
    console.log(statementsInArr);
	return {'a': 1};
}

// https://www.codewars.com/kata/58e24788e24ddee28e000053/train/javascript