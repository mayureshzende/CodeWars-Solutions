function distanceBetweenPoints(a, b) {
  // your code here
  return Math.abs([...a][0] + [...b][0] - ([...a][1] + [...b][1]));
}
console.log(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)), 0);
console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)), 5);
