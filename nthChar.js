function nthChar(words) {
  let str = "";
  let n = 0;
  return words
    .map((word) => (str += word.charAt(n++)))
    .join("")
    .slice(-words.length);
}

console.log(nthChar(["yoda", "best", "has"]), "yes");
/* 
const nthChar = words => words.reduce((a, b, index) => a + b[index], "")
*/
