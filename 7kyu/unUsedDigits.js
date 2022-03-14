function unusedDigits() {
  let str = "";
  for (let i = 0; i < arguments.length; i++) {
    str += arguments[i];
  }
  let res = "";
  let unq = [...new Set(str)].join("");
  for (let i = 0; i < 10; i++) {
    if (!unq.includes(i)) {
      res += i;
    }
  }

  return res;
}

console.log(unusedDigits(12, 34, 56, 78), "09");
console.log(unusedDigits(2015, 8, 26), "3479");

/* 
function unusedDigits(...args){
  return "0123456789".replace(new RegExp('['+args.join('')+']','g'), '')
}
*/
