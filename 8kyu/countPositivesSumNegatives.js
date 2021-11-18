function countPositivesSumNegatives(numbers) {
  if (!numbers) return [];
  let postive = numbers.filter((ele) => ele >= 1).length;
  let negative = numbers
    .filter((ele) => ele < 1)
    .reduce((curr, acc) => curr + acc, 0);

  return !postive & !negative ? [] : [postive, negative];
}

console.log(countPositivesSumNegatives([]));
