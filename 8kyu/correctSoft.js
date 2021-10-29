function correct(string) {
  // your code here
  const obj = {
    5: "S",
    0: "O",
    1: "I",
  };
  let res = "";
  for (const char of string) {
    if (obj[char]) {
      res += obj[char];
    } else {
      res += char;
    }
  }
  return res;
}
console.log(correct("L0ND0N"), "LONDON");
console.log(correct("BUDAPE5T"), "BUDAPEST");
/* 
correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
*/
