function pattern(n) {
  var output = "";
  for (let i = 0; i < n; i++) {
    let c = 0;
    output += "1";
    while (c < i) {
      output += "*";
      c++;
    }
    output += i > 0 ? i + 1 : "";
    output += "\n";
  }

  return output.trim();
}

function pattern(n) {
  let output = "";
  for (let i = 0; i < n; i++) {
    output += 1 + "*".repeat(i) + (i >= 1 ? i + 1 : "") + "\n";
  }
  return output.trim();
}
// console.log(pattern(3), "1\n1*2\n1**3");
console.log(pattern(7), "1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7");
