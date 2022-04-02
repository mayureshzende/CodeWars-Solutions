function removeSmallest(numbers) {
  if (numbers.length < 1) return [];
  let min = numbers[0];
  numbers.map((ele) => {
    if (ele < min) {
      min = ele;
    }
  });
  let idx = numbers.indexOf(min);
  return new Array(...numbers.slice(0, idx), ...numbers.slice(idx + 1));
}
console.log(
  removeSmallest([1, 2, 3, 4, 5]),
  [2, 3, 4, 5],
  "Wrong result for [1, 2, 3, 4, 5]"
);
console.log(
  removeSmallest([5, 3, 2, 1, 4]),
  [5, 3, 2, 4],
  "Wrong result for [5, 3, 2, 1, 4]"
);
console.log(
  removeSmallest([2, 2, 1, 2, 1]),
  [2, 2, 2, 1],
  "Wrong result for [2, 2, 1, 2, 1]"
);
console.log(removeSmallest([]), [], "Wrong result for []");
