const assert = require('./functionTesting');

assert.expect(isSolved([[0,2,2],[2,1,1],[0,0,1]]), -1);
assert.expect(isSolved([[2,2,2],[0,1,1],[1,0,0]]), 2);
assert.expect(isSolved([[0,0,2],[0,0,0],[1,0,1]]), -1);
assert.expect(isSolved([[1,2,1],[1,1,2],[2,2,0]]), -1);
assert.expect(isSolved([[1,1,1],[0,2,2],[0,0,0]]), 1);
assert.expect(isSolved([[0,1,1],[2,0,2],[2,1,0]]), -1);
assert.expect(isSolved([[2,1,1],[0,1,1],[2,2,2]]), 2);
assert.expect(isSolved([[2,1,2],[2,1,1],[1,2,1]]), 0);
assert.expect(isSolved([[1,2,0],[0,1,2],[0,0,1]]), 1);
assert.expect(isSolved([[1,2,1],[1,1,2],[2,1,2]]), 0);
assert.expect(isSolved([[2,0,2],[2,1,1],[1,2,1]]), -1);

function isSolved(board) {
    for (let i = 0; i < board.length; i++) {
        const row = array[i];
        for (let col = 0; col < array[i].length; col++) {
            const column = array[i][col];
            if (column === 0) {
                return -1
            }
        }
    }
}