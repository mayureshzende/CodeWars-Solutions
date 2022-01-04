function howManySmaller(arr, n) {
  let fixedPoint = arr.map((ele) => ele.toFixed(2));
  return fixedPoint.filter((ele) => ele < n).length;
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24), 2);
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19), 1);
