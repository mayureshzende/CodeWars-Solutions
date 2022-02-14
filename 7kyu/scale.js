function scale1(strng, k, n) {
  console.log(strng.split("\n"));
  let strArr = strng.split("\n");
  let res = "";
  for (let j = 0; j < n; j++) {
    let concate = "";
    for (let i = 0; i < strArr.length; i++) {
      let v = k;
      res += [...strng[i]].map((char) => {
        while (v > 0) {
          concate += char;
          v--;
        }
        return concate;
      });
      concate += "\n";
    }
  }
  return res.trim();
}
function scale(strng, k, n) {
  let strArr = strng.split("\n");
  console.log(strArr);
  let concated = "";
  let res = "";

  for (let i = 0; i < strArr.length; i++) {
    let word = [...strArr[i]];
    for (let k = 0; k < n; k++) {}
    console.log(res);
  }

  function repeatStr(ArrStr, n) {
    for (let j = 0; j < word.length; j++) {
      res += getRepeted(word[j]);
    }
  }
  function getRepeted(char) {
    let str = "";
    let n = k;
    while (n > 0) {
      str += char;
      n--;
    }
    return str;
  }

  // console.log(concated.trim());
  // return concated.trim();
}

var a = "abc\nefgh"; //\nijkl\nmnop";
var r = "";
// "aabbcc\naabbcc\naabbcc\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp";

console.log(scale(a, 2, 3), r);
