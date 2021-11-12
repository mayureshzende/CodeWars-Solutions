function findDifference(a, b) {
  //loading...

  let vol1 = a.reduce((ele, acc) => ele * acc, 1);
  let vol2 = b.reduce((ele, acc) => ele * acc, 1);
  return Math.abs(vol1 - vol2);
}

console.log(findDifference([3, 2, 5], [1, 4, 4]), 14);
console.log(findDifference([9, 7, 2], [5, 2, 2]), 106);
console.log(findDifference([11, 2, 5], [1, 10, 8]), 30);
