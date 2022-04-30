const xMarksTheSpot = (input) => {
  let str = input.map((char) => char.join(""));
  let count = 0,
    first = [];
  str.map((s, i) => {
    if (s.indexOf("x") >= 0) {
      if (
        count === 0 &&
        first.length === 0 &&
        s.indexOf("x") === s.lastIndexOf("x")
      ) {
        first = [i, s.indexOf("x")];
      }
      count++;
    }
  });
  console.log(count);
  return count === 1 ? first : [];
};

let nox = [
  ["o", "o"],
  ["o", "o"],
];

console.log(xMarksTheSpot(nox), []);

let multipleX = [
  ["x", "o"],
  ["o", "x"],
];
console.log(xMarksTheSpot(multipleX), []);

let topLeft = [
  ["x", "o"],
  ["o", "o"],
];
console.log(xMarksTheSpot(topLeft), [0, 0]);
