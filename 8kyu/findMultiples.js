function findMultiples(integer, limit) {
  const res = [];
  // for (let i = int; i <= limit; i += int)
  for (let i = 1; i <= Math.floor(limit / integer); i++) {
    res.push(integer * i);
  }
  return res;
}

console.log(findMultiples(5, 25), [5, 10, 15, 20, 25]);
console.log(findMultiples(1, 2), [1, 2]);
console.log(findMultiples(5, 7), [5]);
