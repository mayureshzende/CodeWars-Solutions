function vowelIndices(word) {
  //your code here
  let res = [];
  const str = word.toLowerCase();
  [...str].map((ele, i) => {
    if (
      ele === "a" ||
      ele === "e" ||
      ele === "i" ||
      ele === "o" ||
      ele === "u" ||
      ele === "y"
    ) {
      res.push(i + 1);
    }
  });
  return res;
}

console.log(vowelIndices("mmm"), []);
console.log(vowelIndices("apple"), [1, 5]);
console.log(vowelIndices("super"), [2, 4]);
console.log(vowelIndices("orange"), [1, 3, 6]);
console.log(vowelIndices("UeOY"), [1, 3, 6]);
console.log(vowelIndices("MojVtjxzuKgNHyvjMBsVzAoN"), [2, 9, 14, 22, 23]);
