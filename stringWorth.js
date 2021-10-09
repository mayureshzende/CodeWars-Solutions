function highestValue(a, b) {
  let astr = a.split("");
  let bstr = b.split("");

  return score(astr) >= score(bstr) ? a : b;
}

function score(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].charCodeAt(0);
  }
  return sum;
}

// console.log(
//   highestValue("AaBbCcXxYyZz0189", "KkLlMmNnOoPp4567"),
//   "KkLlMmNnOoPp4567"
// );

console.log(highestValue("ABcd", "0123"), "ABcd");

/* 
function highestValue(a, b) {
  const getSum = (str) => {
    return str.split('').reduce((acc, cur) => acc + Number(cur.codePointAt(0)), 0);
  }
  return getSum(b) > getSum(a) ? b : a;
}
*/
