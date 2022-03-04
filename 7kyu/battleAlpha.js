function battle(x, y) {
  let capObj = {};
  let smallObj = {};
  let xSum = 0;
  let ySum = 0;

  for (let i = 1; i <= 26; i++) {
    capObj[String.fromCharCode(64 + i)] = i;
    smallObj[String.fromCharCode(96 + i)] = i / 2;
  }

  xSum = getSumOfChar(x, capObj, smallObj);
  ySum = getSumOfChar(y, capObj, smallObj);

  return xSum > ySum ? x : xSum < ySum ? y : "Tie!";
}

function getSumOfChar(string, capObj, smallObj) {
  let sum = 0;
  [...string].map((ele) => {
    if (ele === ele.toUpperCase()) {
      sum += capObj[ele];
    } else {
      sum += smallObj[ele];
    }
  });
  return sum;
}

console.log(battle("One", "Two"), "Two", "Unfair fight!");
console.log(battle("One", "Neo"), "One", "Unfair fight!");
