var paintLetterboxes = function (start, end) {
  let countObj = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  for (let i = start; i <= end; i++) {
    i.toString()
      .split("")
      .map((num) => {
        countObj[num] += 1;
      });
  }
  return Object.values(countObj);
};

console.log(paintLetterboxes(125, 132), [1, 9, 6, 3, 0, 1, 1, 1, 1, 1]);
