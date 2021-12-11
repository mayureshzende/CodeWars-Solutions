isValid = (a) =>
  !(a.includes(1) && a.includes(2)) &&
  !(a.includes(3) && a.includes(4)) &&
  a.includes(5) === a.includes(6) &&
  (a.includes(7) || a.includes(8));

console.log(isValid([1, 3, 7]), true);
console.log(isValid([7, 1, 2, 3]), false);
console.log(isValid([1, 3, 5, 7]), false);
console.log(isValid([1, 5, 6, 7, 3]), true);
console.log(isValid([5, 6, 7]), true);
console.log(isValid([5, 6, 7, 8]), true);
