const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test for decoding", () => {
        u = "I should have known that you would have a perfect answer for me!!!"
        v = ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"]
        Test.assertDeepEquals(decode(v), u)
    });
    it("test for encoding", () => {
        u = "O CAPTAIN! my Captain! our fearful trip is done;"
        v = ["opP DBQUBJ", "O! nz Dbqu", "bjo! pvs g", "fbsgvm usj", "q jt epof;"]
        Test.assertDeepEquals(encodeStr(u, 1), v)
    });
});

function encodeStr( s = "", shift = 0 ) {
    let result = "";
    for (let index = 0; index < s.length; index++) {
        s.charCodeAt(index);
        String().codePointAt()
        const element = s[index];
        
    }
}

function decode(arr) {
    // your code
}