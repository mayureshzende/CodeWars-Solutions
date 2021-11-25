function generateRange(min, max, step) {
  const res = [];
  for (let i = min; i <= max; i += step) {
    res.push(i);
  }
  return res;
}

console.log(generateRange(2, 10, 2), [2, 4, 6, 8, 10]);
console.log(generateRange(1, 10, 3), [1, 4, 7, 10]);
