function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}

function MaxGCD(n, a) {
  var Prefix = Array(n + 2).fill(0);
  var Suffix = Array(n + 2).fill(0);
  var i;
  Prefix[1] = a[0];
  for (i = 2; i <= n; i++) {
    Prefix[i] = gcd(Prefix[i - 1], a[i - 1]);
  }
  Suffix[n] = a[n - 1];
  for (i = n - 1; i >= 1; i--) {
    Suffix[i] = gcd(Suffix[i + 1], a[i - 1]);
  }
  var ans = Math.max(Suffix[2], Prefix[n - 1]);
  for (i = 2; i < n; i++) {
    ans = Math.max(ans, gcd(Prefix[i - 1], Suffix[i + 1]));
  }

  return ans;
}

console.log(MaxGCD(2, [6, 12]));
console.log(MaxGCD(3, [1, 4, 8]));
console.log(MaxGCD(4, [2, 4, 6, 8]));
