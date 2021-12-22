function sumMul(n, m) {
  let sum = 0;
  if (m <= 0) {
    return "INVALID";
  }

  for (let i = 1; i <= Math.floor(m / n); i++) {
    sum += n * i;
  }

  return sum;
}

console.log(sumMul(2, 9), 20);
console.log(sumMul(4, 123), 1480);
