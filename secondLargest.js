function getSecondLargest(nums) {
  // Complete the function
  console.log(nums.sort());
  let max = nums[nums.length - 1];
  let value;
  console.log(max);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < max) {
      value = nums[i];
      break;
    }
  }
  console.log(value);
}

getSecondLargest([8, 8, 7, 1, 2, 2, 3, 4, 6, 6]);
