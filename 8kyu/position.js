function position(char) {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < alphabets.length; i++) {
    if (char === alphabets[i]) {
      return `Position of alphabet: ${i + 1}`;
    }
  }
}

//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   return "Position of alphabet: " + (alphabet.indexOf(letter) + 1);
console.log(position("a"), "Position of alphabet: 1");
console.log(position("z"), "Position of alphabet: 26");
console.log(position("e"), "Position of alphabet: 5");
console.log(position("m"), "Position of alphabet: 26");
