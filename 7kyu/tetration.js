function tetration(x, y) {
  if (y < 1) return 1;
  let sum = 0;
  while (y >= 0) {
    sum = Math.pow(x, sum);
    y--;
  }
  return sum;
}

// 2, 3  -->    16  (2^(2^2))
// const tetration = (x, y) => !y ? 1 : x ** tetration(x, y-1);

console.log(tetration(4, 0), 1);
console.log(tetration(7, 1), 7);
console.log(tetration(5, 2), 3125);
console.log(tetration(2, 3), 16);
