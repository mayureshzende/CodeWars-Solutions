function largestPairSum(numbers) {
  const sortArr = numbers.sort((a, b) => a - b);
  return sortArr[sortArr.length - 1] + sortArr[sortArr.length - 2];
}

console.log(largestPairSum([10, 14, 2, 23, 19], 42));
