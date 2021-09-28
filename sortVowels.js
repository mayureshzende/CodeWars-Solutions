function sortVowels(s) {
  //code
  //   console.log(typeof s);
  if (typeof s != "string") return "";
  let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  let str = s;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (!vowels.includes(str.charAt(i))) {
      res += str.charAt(i) + "|" + "\\n";
      //   console.log(str.charAt(i) + "|");
    } else {
      res += "|" + str.charAt(i) + "\\n";
      //   console.log("|" + str.charAt(i));
    }
  }
  //   console.log(res.split("\\n"));
  return res.slice(0, -2);
}

console.log(sortVowels("Codewars"), "C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|");
// console.log(sortVowels(1234)); //, "C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|");

// console.log(sortVowels("Codewars"));
/* function sortVowels(s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  if (typeof s === "string")
    return [...s]
      .map((letter) => (vowels.includes(letter) ? `|${letter}` : `${letter}|`))
      .join("\n");
  return "";
} */
