const Test = require('../functionTesting');

Test.assertEquals(palindrome("e.ye"), true);

function palindrome(str) {
  let punctuations = ["_", "$", "#", ".", ",", ":", "!", "?", "!", "@", "%", "^", "&", "*", "(", ")", "\\", "/", " ", "-"];

  let filteredString = str.split("").filter( v => {
    if (punctuations.includes(v)) {
      return false;
    }
    return true;
  }).join("").toLowerCase();

  return filteredString.split("").reverse().join("") === filteredString;
}