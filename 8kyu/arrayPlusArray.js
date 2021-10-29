function arrayPlusArray(arr1, arr2) {
  return arr2.reduce(
    (curr, acc) => curr + acc,
    arr1.reduce((curr, acc) => curr + acc, 0)
  );
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);

/* 
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}
*/
