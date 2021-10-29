function freqSeq(str, sep) {
  let res = [...str].reduce((curr, freq) => {
    if (curr.hasOwnProperty(freq)) {
      curr[freq] += 1;
    } else {
      curr[freq] = 1;
    }

    return curr;
  }, {});

  //   [...str].map((char) => (op += res[char] + sep));
  let op = [...str].map((char) => res[char]).join(sep);

  return op;
}

console.log(freqSeq("hello world", "-"));
// console.log(freqSeq("19999999", ":"));
// console.log(freqSeq("^^^**$", "x"), "3x3x3x2x2x1");

/* 
[...word].reduce((charSeen, char) => {
charSeen.hasOwnProperty(char)
      ? (charSeen[char] = 1)
      : (charSeen[char] += 1);W
    return charSeen;
  }, {});
*/
