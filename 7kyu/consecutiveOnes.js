function consecutiveOnes(nums) {
  let count = 0;
  let max = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 1) {
      count = 0;
    } else {
      count++;
      max = Math.max(max, count);
    }
  }
  return max;
}

console.log(consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]), 3);
console.log(consecutiveOnes([1, 1, 0, 0, 1]), 2);
console.log(consecutiveOnes([1, 1, 1, 1, 1]), 5);
