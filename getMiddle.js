const Test = require('./functionTesting');

Test.assertEquals(getMiddle("test"),"es");
Test.assertEquals(getMiddle("testing"),"t");
Test.assertEquals(getMiddle("middle"),"dd");
Test.assertEquals(getMiddle("A"),"A");

function getMiddle(s) {
    let len = Math.round(s.length);
    if (len % 2 == 0){
        return [s[len/2 - 1], s[len/2]].join("");
    }else{
        return s[Math.round(len/2)-1];
    }
}

// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript