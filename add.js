const Test = require ('./functionTesting');

Test.assertEquals(add("1", "1"), "2");
Test.assertEquals(add("123", "456"), "579");
Test.assertEquals(add("888", "222"), "1110");
Test.assertEquals(add("1372", "69"), "1441");
Test.assertEquals(add("12", "456"), "468");
Test.assertEquals(add("101", "100"), "201");
Test.assertEquals(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")

function add(a, b) {
  let digitA = ''
  let digitB = ''
  let carry = 0

  let i = a.length -1
  let j = b.length -1

  while (i >= 0 || j >= 0 || carry > 0) {
    
  }
  return (Number(a) + Number(b)).toString(); // Fix me!
}