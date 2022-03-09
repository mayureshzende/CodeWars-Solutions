function divisibleByThree(str) {
  console.log([...str].reduce((acc, curr) => (acc += +curr), 0) % 3);
  return [...str].reduce((acc, curr) => (acc += +curr), 0) % 3 === 0;
}
console.log(divisibleByThree("88"), false);

console.log(
  divisibleByThree("123"),
  true,
  "Should return true if the sum of the given digits is divisible by 3."
);
console.log(
  divisibleByThree("19254"),
  true,
  "Should return true if the sum of the given digits is divisible by 3."
);
