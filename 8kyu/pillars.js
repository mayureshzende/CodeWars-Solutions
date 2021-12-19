function pillars(num_pill, dist, width) {
  if (num_pill === 1) {
    return 0;
  }
  if (num_pill <= 2) {
    return dist * 100;
  }

  return (num_pill - 1) * (100 * dist) + (num_pill - 2) * width;
}

console.log(pillars(1, 10, 10), 0);
console.log(pillars(2, 20, 25), 2000);
console.log(pillars(11, 15, 30), 15270);
