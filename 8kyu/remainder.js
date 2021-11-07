function remainder(a, b) {
  // Divide the larger argument by the smaller argument and return the remainder
  if (a === 0 || b === 0) {
    return NaN;
  }

  return a > b ? a % b : b % a;
}

console.log(remainder(17, 5), 2);
console.log(remainder(13, 72));
console.log(remainder(1, 0));
console.log(remainder(0, 0));
