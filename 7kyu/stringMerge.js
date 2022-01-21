function stringMerge(string1, string2, letter) {
  let str1 = string1.slice(0, string1.indexOf(letter));
  let str2 = string2.slice(string2.indexOf(letter) + 1);
  //   console.log(string1.indexOf(letter));
  //   console.log(string1.slice(0, string1.indexOf(letter)));
  //   console.log(string2.lastIndexOf(letter));
  //   console.log(string2.slice(string2.indexOf(letter) + 1));
  return str1 + letter + str2;
}

console.log(stringMerge("person", "here", "e"), "pere");
console.log(stringMerge("apowiejfoiajsf", "iwahfeijouh", "j"), "apowiejouh");
