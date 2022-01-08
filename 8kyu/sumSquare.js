function sumSquares(array) {
  return array.reduce((acc, curr) => {
    acc += Math.pow(curr, 2);
    return acc;
  }, 0);
}

console.log(sumSquares([1, 2, 3, 4, 5]), 55);
// console.log(sumSquares([7, 3, 9, 6, 5]), 200);
