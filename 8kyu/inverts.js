function invert(array) {
  return array.map((ele) => ele * -1); //(ele < 0 ? ele * -1 : ele * -1));
}
console.log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
console.log(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
console.log(invert([]), []);
