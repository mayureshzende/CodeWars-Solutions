function modifiedSum(a, n) {
  return (
    a.map((ele) => ele ** n).reduce((acc, cur) => (cur += acc), 0) -
    a.reduce((acc, curr) => (acc += curr), 0)
  );
}

console.log(modifiedSum([1, 2, 3], 3), 30);
console.log(modifiedSum([1, 2], 5), 30);
