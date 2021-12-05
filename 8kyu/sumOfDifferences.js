function sumOfDifferences(arr) {
  let sum = 0;
  const rev = arr.sort((a, b) => b - a);
  console.log(rev);
  for (let i = 0; i < rev.length - 1; i++) {
    sum += rev[i] - rev[i + 1];
  }
  return sum;
}

// console.log(sumOfDifferences([1, 2, 10]), 9);
// console.log(sumOfDifferences([-3, -2, -1]), 2);
console.log(sumOfDifferences([11, -14, -5, -22, -3, -8, -5, 16, 11, 20]), 42);
/* 
const sumOfDifferences = (arr) =>
  arr
    .sort((a, b) => b - a)
    .map((a, i) => a - arr[i + 1] || 0)
    .reduce((a, b) => a + b, 0); */
