function grid(N) {
  if (N < 0) return null;
  const grid = [];
  for (let row = 0; row < N; row++) {
    const cells = [];
    for (let cell = 0; cell < N; cell++) {
      cells.push(String.fromCharCode(97 + ((row + cell) % 26)));
    }
    grid.push(cells.join(" "));
  }
  return grid.join("\n");
}
console.log(grid(27), "");
// console.log(grid(1), "a");
// console.log(grid(2), "a b\nb c");
// console.log(grid(4), "a b c d\nb c d e\nc d e f\nd e f g");
// console.log(
//   grid(6),
//   "a b c d e f\nb c d e f g\nc d e f g h\nd e f g h i\ne f g h i j\nf g h i j k"
// );
