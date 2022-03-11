function leastLarger(a, i) {
  // console.log(a.includes(a[i] + 1) ? a.indexOf(a[i] + 1) : -1);
  return a.indexOf(Math.min(...a.filter((ele) => ele > a[i])));
}

// const leastLarger = (a, i) =>
// a.indexOf(Math.min(...a.filter(val => val > a[i])));
console.log(leastLarger([4, 1, 3, 5, 6], 0), 3);
console.log(leastLarger([4, 1, 3, 5, 6], 4), -1);
console.log(leastLarger([1, 3, 5, 2, 4], 0), 3);
