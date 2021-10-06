function connotation(str) {
  let line = str.toLowerCase().replace(/\s+/g, " ").trim();
  let arr = line.split(" ");
  console.log(line);
  let positive = 0;
  let negative = 0;
  for (const word of arr) {
    if (word != " ") {
      if (word.charAt(0).match(/[a-m]+/g)) {
        positive++;
      } else {
        negative++;
      }
    }
  }
  console.log(positive, " == ", negative);
  return positive >= negative;
}

// connotation("     A big brown fox    caught a bad   bunny");
console.log(connotation("    g c w   rrhv   wpacb g "));
/* 

function connotation(str) {
  let positiveMatches = str.match(/\b[a-m]/ig) || []
  let negativeMatches = str.match(/\b[n-z]/ig) || []
  return positiveMatches.length >= negativeMatches.length
}
*/
