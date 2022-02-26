function reverseWords(str) {
  return str
    .split(" ")
    .map((ele) => {
      return [...ele].reverse().join("");
    })
    .join(" ");
}

console.log(reverseWords("double  spaced  words"), "elbuod  decaps  sdrow");
