function halvingSum(n) {
  let sum = 0;
  let num = n;
  let i = 2;
  while (num >= 1) {
    sum += num;
    num = Math.floor(num / 2);
    i *= 2;
  }
  return sum;
}

console.log(halvingSum(25), 47);
console.log(halvingSum(127), 247);
