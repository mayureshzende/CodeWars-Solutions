function squareSum(arr) {
  return arr.map((ele) => ele * ele).reduce((acc, curr) => acc + curr, 0);
}
