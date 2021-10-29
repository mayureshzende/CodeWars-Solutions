function swapVowelCase(str) {
  let arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let strArr = str.split("");

  for (let [index, char] of strArr.entries()) {
    // console.log(arr.includes(char));
    if (arr.includes(char) & (char === char.toLowerCase())) {
      //   console.log(" lower ", index);

      strArr[index] = char.toUpperCase();
    }
    if (arr.includes(char) & (char === char.toUpperCase())) {
      //   console.log(" here on ", index);
      strArr[index] = char.toLowerCase();
    }
  }
  return strArr.join("");
}

// console.log(swapVowelCase("C Is AlIvE!"));
// console.log(swapVowelCase(" "));
console.log(swapVowelCase("The"));
// console.log(swapVowelCase("to"));

/* 
function swapVowelCase(str) {
  const swapCase = l => l === l.toLowerCase() ? l.toUpperCase() : l.toLowerCase();
  return str
    .split('')
    .map(l => "aeouiAEOUI".includes(l) ? swapCase(l) : l)
    .join('');
}
*/
