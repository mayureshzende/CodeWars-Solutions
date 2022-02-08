function digitize(n) {
  return [...n.toString()].map((ele) => +ele);
}

console.log(digitize(123), [1, 2, 3]);
console.log(digitize(1), [1]);
console.log(digitize(0), [0]);
