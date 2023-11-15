const Test = require('@codewars/test-compat');

describe("Basic Tests", function(){
it("It should works for basic tests.", function(){

Test.assertEquals(middlePermutation("abc"),"bac")

Test.assertEquals(middlePermutation("abcd"),"bdca")

Test.assertEquals(middlePermutation("abcdx"),"cbxda")

Test.assertEquals(middlePermutation("abcdxg"),"cxgdba")

Test.assertEquals(middlePermutation("abcdxgz"),"dczxgba")

})})

function permute ( str, l, r ) {
    if (l == r) {
        document.write(str+"<br>"); 
        return;
    }
    for (let i = l; i <= r; i++) {
        str = swap(str, l, i); 
        permute(str, l + 1, r); 
        str = swap(str, l, i);  
    } 
}
function middlePermutation(s) {
    // Convert the string to an array of characters
    const chars = s.split('');
  
    // Sort the characters in ascending order
    chars.sort();
  
    // Initialize variables
    const len = chars.length;
    let result = '';
  
    // Calculate the index of the middle permutation
    const middleIndex = Math.floor(len / 2);
  
    // If the length is even, decrement the middle index
    if (len % 2 === 0) {
      middleIndex--;
    }
  
    // Swap the middle character with the first character
    const temp = chars[0];
    chars[0] = chars[middleIndex];
    chars[middleIndex] = temp;
  
    // Join the characters to form the result string
    result = chars.join('');
  
    return result;
  }