function palindrome(num) {
  if (typeof num !== "number" || num < 0) return "Not vaild";
  let n = num;
  let res = "",
    rem = "";

  while (n > 0) {
    rem = n % 10;
    res += "" + rem;
    n = Math.floor(n / 10);
  }
  return Number(res) === num;
}

console.log(palindrome(1221), true);
// console.log(palindrome(123322), false);
// console.log(palindrome("ACCDDCCA"), "Not valid");
// console.log(palindrome("1221"), "Not valid");
// console.log(palindrome(-450), "Not valid");
