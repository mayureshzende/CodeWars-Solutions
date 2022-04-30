function digitSum(num) {
  let res = [];
  let mul = 0;
  while ((mul < 100) & (mul + num <= 100)) {
    mul += num;
    res.push(mul);
  }
  return res.reduce((acc, curr) => (acc += sum(curr)), 0);
}
function sum(n) {
  if (n < 9) return n;
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

// console.log(digitSum(25), 25);
console.log(digitSum(30), 18);
console.log(digitSum(12), 72);
console.log(digitSum(49), 30);
console.log(digitSum(17), 48);
console.log(digitSum(10), 46);
