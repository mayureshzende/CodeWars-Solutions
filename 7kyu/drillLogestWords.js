function longest(words) {
  let max = 0;

  words.map((word) => {
    if (word.length > max) max = word.length;
  });

  return max; //code here
}
console.log(longest(["simple", "is", "better", "than", "complex"]), 7);
console.log(longest(["explicit", "is", "better", "than", "implicit"]), 8);
console.log(longest(["beautiful", "is", "better", "than", "ugly"]), 9);
