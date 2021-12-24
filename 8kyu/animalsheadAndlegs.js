function animals(heads, legs) {
  let ckickens, cows;

  if (heads === 0 && legs === 0) return [0, 0];
  if (heads <= 0 || legs <= 0) return "No solutions";

  cows = legs / 2 - heads;
  ckickens = heads - cows;

  if (cows < 0 || ckickens < 0) return "No solutions";
  if (cows % 1 !== 0) {
    return "No solutions";
  }

  return [ckickens, cows];
}

console.log(animals(72, 200), [44, 28]);
console.log(animals(116, 282), [91, 25]);
console.log(animals(12, 24), [12, 0]);
console.log(animals(6, 24), [0, 6]);
console.log(animals(344, 872), [252, 92]);

console.log(animals(12, 25), "No solutions");
console.log(animals(25, 555), "No solutions");
console.log(animals(0, 0), [0, 0]);
console.log(animals(-1, -1), "No solutions");
console.log(animals(-45, 5), "No solutions");
console.log(animals(500, 0), "No solutions");
