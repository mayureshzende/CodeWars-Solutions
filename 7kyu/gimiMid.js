function gimme(triplet) {
  const or = triplet.slice(0);
  const mid = triplet.sort((a, b) => a - b);
  //   console.log(mid);
  //   console.log(or);
  return or.indexOf(mid[1]);
}

console.log(gimme([2, 3, 1], 0));
console.log(gimme([5, 10, 14], 1));
console.log(gimme([2.1, 3.2, 1.4], 0));
console.log(gimme([5.9, 10.4, 14.2], 1));
console.log(gimme([-2, -3, -1], 0));
console.log(gimme([-5, -10, -14], 1));
console.log(gimme([-2, -3.2, 1], 0));
console.log(gimme([-5.2, -10.6, 14], 0));
