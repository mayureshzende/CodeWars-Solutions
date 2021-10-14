function oddOnesOut(nums) {
  // your code here
  let obj = {};

  for (const ele of nums) {
    if (!obj[ele]) {
      obj[ele] = 1;
    } else {
      obj[ele] += 1;
    }
  }

  //   let res = [];
  //   for (const value of nums) {
  //     if (obj[value] % 2 === 0) {
  //       res.push(value);
  //     }
  //   }
  return nums.filter((ele) => obj[ele] % 2 === 0);
}

// console.log(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
console.log(oddOnesOut([75, 68, 75, 47, 68]), [75, 68, 75, 68]);

/* 
function oddOnesOut(nums) {
  return nums.filter(n => nums.filter(x => x === n).length % 2 === 0);
}
*/
