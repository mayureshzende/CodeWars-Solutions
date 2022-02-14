function getSlope(p1, p2) {
  let x1 = p1[0],
    x2 = p2[0];
  let y1 = p1[1],
    y2 = p2[1];

  if ((p2[0] == p1[0] && p2[1] == p1[1]) || p2[0] == p1[0]) return null;
  return Math.floor((y2 - y1) / (x2 - x1));
}

console.log(getSlope([1, 1], [2, 2]), 1);
console.log(getSlope([11, 1], [1, 11]), -1);
console.log(getSlope([1, 1], [1, 2]), null);
