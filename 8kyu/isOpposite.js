function isOpposite(s1, s2) {
  //coding here...
  if (!s1.length || !s2.length) return false;
  if (s1.toLowerCase() !== s2.toLowerCase()) return false;
  for (let i = 0; i < s1.length; i++) {
    if (s1.charCodeAt(i) === s2.charCodeAt(i)) {
      return false;
    }
  }
  return true;
}

console.log(isOpposite("ab", "AB"), true);
console.log(isOpposite("aB", "Ab"), true);
console.log(isOpposite("aBcd", "AbCD"), true);
console.log(isOpposite("aBcde", "AbCD"), false);
console.log(isOpposite("AB", "Ab"), false);
console.log(isOpposite("", ""), false);
s1 = "ZADKRkgtpFsFl";
s2 = "zadkrKGTPfSfL";
