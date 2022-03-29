function processData(data) {
  //   let sumOfSingle = [];

  //   for (let i = 0; i < data.length; i++) {
  //     sumOfSingle.push(data[i][0] - data[i][1]);
  //   }

  return data.reduce((acc, [a, b]) => (acc *= a - b), 1);
}

console.log(
  processData([
    [2, 5],
    [3, 4],
    [8, 7],
  ]),
  3,
  `For [[2, 5], [3, 4], [8, 7]]`
);
console.log(
  processData([
    [2, 9],
    [2, 4],
    [7, 5],
  ]),
  28,
  `For [[2, 9], [2, 4], [7, 5]]`
);
