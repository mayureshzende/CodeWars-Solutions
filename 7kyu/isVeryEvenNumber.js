function isVeryEvenNumber(n) {
  return getSingleValue(n) % 2 === 0;
}

function getSingleValue(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum > 9 ? getSingleValue(sum) : sum;
}

console.log(isVeryEvenNumber(4446));


/* 
function isVeryEvenNumber(n) {
  return !n-- || n % 9 % 2 === 1;
}
*/