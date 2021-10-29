function caseUnification(s) {
  //coding and coding..

  let up = 0;
  let low = 0;
  for (const char of s) {
    if (char === char.toLowerCase()) {
      low++;
    } else {
      up++;
    }
  }
  return up > low ? s.toUpperCase() : s.toLowerCase();
}

// console.log(caseUnification("Aba"), "aba");
console.log(caseUnification("ABa"), "ABA");
console.log(caseUnification("ZZZZZ"), "ZZZZZ");
