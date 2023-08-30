const assert = require('./functionTesting');

assert.assertEquals(rot13("Test"), "Grfg");
assert.assertEquals(rot13("test"), "grfg");
assert.assertEquals(rot13("TpXPOo$y^"), "GcKCBb$l^");
assert.assertEquals(rot13("Ruby is cool!"), "Ehol vf pbby!");

// function rot13(message){
//   return message.split("").map( v => {
//     let acctualCode = v.charCodeAt();
//     let ASCIICODE = acctualCode
//     if ( acctualCode <= 90 && acctualCode >= 65 || acctualCode <= 122 && acctualCode >= 97 ) {
//       console.log("asd")
//       ASCIICODE += 13
//       if ( ASCIICODE > 90 && acctualCode <= 90 && acctualCode >= 65 || ASCIICODE > 122  && acctualCode <= 122 && acctualCode >= 97) {
//         console.log("overloaded")
//         ASCIICODE -= 26
//       }
//     }
//     return(String.fromCharCode(ASCIICODE))
//   }).join("")
// }



function rot13(message){

  return message.split("").map( v => {
    let acctualCode = v.charCodeAt();

    if (acctualCode <= 90 && acctualCode >= 65) {
      acctualCode+=13
      if (!(acctualCode <= 90 && acctualCode >= 65)) {
        acctualCode-=26
      }
      return(String.fromCharCode(acctualCode))

    }
    if (acctualCode <= 122 && acctualCode >= 97 ) {
      acctualCode+=13
      if (!(acctualCode <= 122 && acctualCode >= 97)) {
        acctualCode-=26
      }
      return(String.fromCharCode(acctualCode))

    }
    return(String.fromCharCode(acctualCode))
  }).join("")
}


// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript