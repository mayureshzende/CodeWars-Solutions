var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array

  let str = [...iterable];

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      str.splice(i, 1);
      i = -1;
    }
  }
  return str;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"]);
