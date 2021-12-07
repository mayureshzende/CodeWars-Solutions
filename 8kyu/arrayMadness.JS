function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  return getSum(a, 2) > getSum(b, 3);
}

const getSum = (arr, pow) => {
  return arr.reduce((acc, curr) => (acc += curr ** pow), 1);
};

console.log(arrayMadness([4, 5, 6], [1, 2, 3]), true);
console.log(arrayMadness([5, 6, 7], [4, 5, 6]), false);
console.log(arrayMadness([4, 5, 6], [3, 4, 5]), false);
