function disariumNumber(n) {
  let sum = 0;

  for (let [index, char] of Object.entries("" + n)) {
    sum += Math.pow(char, +index + 1);
  }
  return sum === n ? "Disarium !!" : "Not !!";
}

console.log(disariumNumber(89), "Disarium !!");

/* 
const disariumNumber = n => `${n === n
  .toString()
  .split``
  .reduce((r, e, i) => r + e ** (i + 1), 0) ?
  'Disarium' : 
  'Not'} !!`;

*/
