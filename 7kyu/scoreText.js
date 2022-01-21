function scoreTest(str, right, omit, wrong) {
  let obj = {
    0: 0,
    1: 0,
    2: 0,
  };
  const sumCount = str.reduce((acc, curr) => {
    if (!obj[curr]) {
      obj[curr] = 1;
    } else {
      obj[curr] += 1;
    }
    return obj;
  }, {});
  return sumCount[0] * right + sumCount[1] * omit - sumCount[2] * wrong;
}

// console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1), 9);
console.log(
  scoreTest([0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0], 1, 4, 7),
  43
);

function scoreTest(str, right, omit, wrong) {
  var grades = [right, omit, -wrong];
  return str.reduce(function (sum, score) {
    return sum + grades[score];
  }, 0);
}
