function barTriang(p1, p2, p3) {
  let x = (p1[0] + p2[0] + p3[0]) / 3;
  let y = (p1[1] + p2[1] + p3[1]) / 3;
  return [+x.toFixed(4), +y.toFixed(4)];
}

console.log(barTriang([4, 6], [12, 4], [10, 10]), [8.6667, 6.6667]);
console.log(barTriang([4, 2], [12, 2], [6, 10]), [7.3333, 4.6667]);
