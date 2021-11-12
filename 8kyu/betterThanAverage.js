function betterThanAverage(classPoints, yourPoints) {
  // Your code here

  let avg = classPoints.reduce((cur, acc) => cur + acc, 0);
  //   console.log(avg);
  return Math.floor(avg / classPoints.length) <= yourPoints;
}
// console.log(betterThanAverage([2, 3], 5), true);
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
