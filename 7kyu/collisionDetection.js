function collision(x1, y1, radius1, x2, y2, radius2) {
  const dist_x = x1 - x2;

  const dist_y = y1 - y2;

  return Math.sqrt(dist_x * dist_x + dist_y * dist_y) <= radius1 + radius2
    ? true
    : false;
}

console.log(collision(1, 1, 1, 1.1, 1.1, 0.1), true, "Expected true.");
console.log(collision(-1, 1, 10, -10.1, 1.1, 1), true, "Expected true.");
console.log(
  collision(-5, 5, 5.0001, 5, -5, 5 * Math.sqrt(5)),
  true,
  "Expected true."
);
