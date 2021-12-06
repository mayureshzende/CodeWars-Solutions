function quadratic(x1, x2) {
  // Answer in array

  return [1, -x1 + -x2, x1 * x2];
}

console.log(quadratic(0, 1), [1, -1, 0]);
console.log(quadratic(1, 1), [1, -2, 1]);
console.log(quadratic(-4, -9), [1, 13, 36]);
