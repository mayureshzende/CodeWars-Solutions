function power(x, y) {
  let mul = 1;

  for (let i = 1; i <= y; i++) {
    mul *= x;
  }
  return mul;
}

console.log(power(2, 3), 4);
