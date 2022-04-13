function findSum() {
  let sum = 0;
  for (let i = 0, len = arguments.length; i < len; i++) {
    if (arguments[i] >= 0) {
      sum += arguments[i];
    } else {
      return -1;
    }
  }
  return sum;
}

console.log(findSum(1, 3, 5), 9, "1 + 3 + 5 = 9");
console.log(findSum(0, 3, 9, 2), 14, "0+3+9+2 = 14");
console.log(findSum(), 0, "If no arguments, function should return 0");
console.log(
  findSum(1, -2, 4),
  -1,
  "If negative arguments are passed, function should return -1"
);
console.log(findSum(0), 0, "The sum of 0 is 0");
