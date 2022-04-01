function containAllRots(strng, arr) {
  if (strng.length < 1) return true;

  for (let i = 0, length = strng.length; i < length; i++) {
    if (arr.indexOf(strng.slice(i) + strng.slice(0, i)) === -1) return false;
  }
  return true;
}
// let rotations = [];
// for (let i = 0, length = strng.length; i < length; i++) {
//   rotations.push(strng.slice(i) + strng.slice(0, i));
// }
//   let res = [];

//   for (let j = 0, len = rotations.length; j < len; j++) {
//     arr.indexOf(rotations[j]) !== -1 ? res.push(1) : "";
//   }

//   return rotations.length === res.length;

console.log(containAllRots("", []), true);
console.log(containAllRots("", ["bsjq", "qbsj"]), true);
console.log(
  containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]),
  true
);
console.log(
  containAllRots("XjYABhR", [
    "TzYxlgfnhf",
    "yqVAuoLjMLy",
    "BhRXjYA",
    "YABhRXj",
    "hRXjYAB",
    "jYABhRX",
    "XjYABhR",
    "ABhRXjY",
  ]),
  false
);
