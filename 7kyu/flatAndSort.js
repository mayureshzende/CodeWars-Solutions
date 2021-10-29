function flattenAndSort(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    array[i].map((ele) => res.push(ele));
  }
  console.log(res);
  return res.sort((a, b) => a - b);
}

// console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));
console.log(
  flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5],
  ])
);

/* 
function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}
*/
