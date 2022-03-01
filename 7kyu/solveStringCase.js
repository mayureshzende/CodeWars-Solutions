function solve(s) {
  let lowerCount = 0;
  let upperCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      lowerCount++;
    } else {
      upperCount++;
    }
  }

  return lowerCount >= upperCount ? s.toLowerCase() : s.toUpperCase();
}

console.log(solve("code"), "code");
console.log(solve("CODe"), "CODE");
console.log(solve("COde"), "code");
console.log(solve("Code"), "code");
