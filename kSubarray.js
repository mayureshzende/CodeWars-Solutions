function divideArray(n, k, arr) {
  // Dp to store the values
  var dp = Array.from(Array(500), () => Array(500).fill(0));

  k -= 1;

  // Fill up the dp table
  for (var i = n - 1; i >= 0; i--) {
    for (var j = 0; j <= k; j++) {
      // Intitilize maximum value
      dp[i][j] = 1000000000;

      // Max element and the sum
      var max_ = -1,
        sum = 0;

      // Run a loop from i to n
      for (var l = i; l < n; l++) {
        // Find the maximum number
        // from i to l and the sum
        // from i to l
        max_ = Math.max(max_, arr[l]);
        sum += arr[l];

        // Find the sum of difference
        // of every element with the
        // maximum element
        var diff = (l - i + 1) * max_ - sum;

        // If the array can be divided
        if (j > 0) dp[i][j] = Math.min(dp[i][j], diff + dp[l + 1][j - 1]);
        else dp[i][j] = diff;
      }
    }
  }

  // Returns the minimum sum
  // in K parts
  return dp[0][k];
}

let arr = [1, 5, 2, 4, 1, 4, 8, 6];
let n = 8;
let k = 3;

console.log(divideArray(n, k, arr));
console.log(divideArray(5, 5, [1, 2, 3, 4, 5]));
