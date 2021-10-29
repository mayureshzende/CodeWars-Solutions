function expressionMatter(a, b, c) {
  let max = Math.max(a, b, c);
  console.log("mac is ", max * (a + b + c - max));
  return 0; // highest achievable result
}

console.log(expressionMatter(2, 1, 2), 6);
console.log(expressionMatter(2, 1, 1), 4);
console.log(expressionMatter(1, 1, 1), 3);
console.log(expressionMatter(1, 2, 3), 9);
console.log(expressionMatter(1, 3, 1), 5);
console.log(expressionMatter(2, 2, 2), 8);
