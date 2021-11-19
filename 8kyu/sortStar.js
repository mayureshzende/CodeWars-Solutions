function twoSort(arr) {
  return [...arr.sort()[0]].join("***");
}

//   return s.sort()[0].split('').join('***');
console.log(
  twoSort([
    "turns",
    "out",
    "random",
    "test",
    "cases",
    "are",
    "easier",
    "than",
    "writing",
    "out",
    "basic",
    "ones",
  ]),
  "a***r***e"
);
