function positiveSum(arr) {
  return arr.filter((ele) => ele > 0).reduce((curr, accu) => curr + accu, 0);
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
