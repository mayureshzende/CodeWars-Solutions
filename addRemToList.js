function solve(nums, div) {
  let quot = 0;
  const res = [];
  if (!nums.length) {
    return [];
  }

  for (let i = 0; i < nums.length; i++) {
    quot = nums[i] % div;
    if (quot) {
      res.push(nums[i] + quot);
    } else {
      res.push(nums[i]);
    }
  }
  return res;
}
// nums.map(x => x + x % div)
console.log(
  solve([2, 7, 5, 9, 100, 34, 32, 0], 3),
  [4, 8, 7, 9, 101, 35, 34, 0]
);
