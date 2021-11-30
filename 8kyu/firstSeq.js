function first(arr, n) {
  // return arr;
  return n === 0 ? [] : !n ? [arr[0]] : arr.slice(0, n);
}
var arr = ["a", "b", "c", "d", "e"];

console.log(first(arr), ["a"]);
console.log(first(arr, 2), ["a", "b"]);
