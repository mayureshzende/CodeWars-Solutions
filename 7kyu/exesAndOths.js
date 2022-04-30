function XO(str) {
  //code here
  let s = str.toLowerCase();
  if ((s.indexOf("x") === -1) & (s.indexOf("o") === -1)) return false;
  //   return s.replace(/[xo]/gi, "").length === 0 ? true : false;
  //   console.log(s.replace(/[xo]/gi, "").length === 0 ? true : false);
  let xcount = 0;
  let ocount = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === "x") {
      xcount++;
    } else if (s[i] === "o") {
      ocount++;
    }
  }

  return xcount === ocount;
}

console.log(XO("xo"), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);
/* 
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

*/
