function amIWilson(p) {
  let count = countP(p - 1);

  return ((count + 1) / (p * p)) % 1 === 0;
}

function countP(n) {
  if (n < 2) {
    return 1;
  }
  return n * countP(n - 1);
}

console.log(amIWilson(5), true);
console.log(amIWilson(9), false);
console.log(amIWilson(6), false);
