function smaller(nums) {
  //code me
  return nums.map(
    (ele, index) =>
      nums.filter((num, ind) => (num < ele) & (ind > index)).length
  );
}
// const smaller = nums => nums.map((x, i) => nums.slice(i).filter(y => x > y).length);

console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
console.log(smaller([1, 2, 3]), [0, 0, 0]);
console.log(smaller([1, 2, 0]), [1, 1, 0]);
console.log(smaller([1, 2, 1]), [0, 1, 0]);

/* 
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.
*/
