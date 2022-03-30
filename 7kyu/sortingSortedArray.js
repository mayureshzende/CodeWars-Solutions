function sort(initialArray, sortingArray) {
  let obj = {};
  let res = [];
  for (i = 0; i < initialArray.length; i++) {
    obj[sortingArray[i]] = initialArray[i];
  }
  for (let i = 0; i < initialArray.length; i++) {
    res.push(obj[i]);
  }
  return res;
}

console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3]), [1, 3, 2, 5, 4]);

/* 
const sort = (initialArray, sortingArray) =>
  initialArray.map((_, idx) => initialArray[sortingArray.indexOf(idx)]);
*/
