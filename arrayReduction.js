function dirReduc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1] && arr[i].length == arr[i + 1].length) {
      arr.splice(i, 2);
      i = -1;
    }
  }
  return arr;
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]),
  ["WEST"]
);
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), [
  "NORTH",
  "WEST",
  "SOUTH",
  "EAST",
]);
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), []);
