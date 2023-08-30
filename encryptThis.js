let assert = require('./functionTesting');
assert.strictEqual(encryptThis("A"), "65");
assert.strictEqual(encryptThis("A wise old owl lived in an oak"), "65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
assert.strictEqual(encryptThis("The more he saw the less he spoke"), "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp");
assert.strictEqual(encryptThis("The less he spoke the more he heard"), "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare");
assert.strictEqual(encryptThis("Why can we not all be like that wise old bird"), "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");

// encryptThis("A");

function encryptThis (text) {
    return text.split(' ').map(e => {
        return e.split('').map ((val, i) => {return i == 0 ? val.charCodeAt(0) : (i == 1) ? e[e.length - 1] : (i == e.length - 1) ? e[1] : val;}).join('');
    }).join(" ");
}