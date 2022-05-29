function divisibleCount(x, y, k) {
  return Math.floor(y / k) - Math.floor((x - 1) / k);
}

console.log(divisibleCount(6, 11, 2), 3);

/* 
Given x = 6, y = 11, k = 2 the function should return 3, because there are three numbers divisible by 2 between 6 and 11: 6, 8, 10

Note: The test cases are very large. You will need a O(log n) solution or better to pass. (A constant time solution is possible.)

*/
