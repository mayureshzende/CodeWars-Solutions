function maxDiff(list) {
  //Gurad Clause
  if (list.length < 2) return 0;
  let min = list[0];
  let max = list[0];

  for (let i = 0, len = list.length; i < len; i++) {
    if (list[i] < min) {
      min = list[i];
    }
    if (list[i] > max) {
      max = list[i];
    }
  }

  return max - min;
}

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
console.log(maxDiff([16]), 0);
console.log(maxDiff([]), 0);
