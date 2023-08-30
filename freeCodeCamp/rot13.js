function rot13(str) {
  return str.split("").map( (v,i) => {
    let reqVal = str.codePointAt(i);
    if (reqVal > 90 || reqVal < 65) {
      return v;
    }
    reqVal+=13
    reqVal =  reqVal > 90 ? reqVal - 26 : reqVal;
    return String.fromCharCode(reqVal);
  }).join("");
}