function getLargerNumbers(a, b) {
  return a.map((ele, index) => {
    if (ele > b[index]) {
      return ele;
    } else {
      return b[index];
    }
  });
}

let a = [13, 64, 15, 17, 88];
let b = [23, 14, 53, 17, 80];
console.log(
  getLargerNumbers(a, b),
  [23, 64, 53, 17, 88],
  `Wrong result for a = ${a}, b = ${b}`
);
a = [34, -64, 15, 17, 88];
b = [23, 14, 53, 17, 80];
console.log(
  getLargerNumbers(a, b),
  [34, 14, 53, 17, 88],
  `Wrong result for a = ${a}, b = ${b}`
);
