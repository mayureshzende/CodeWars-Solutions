function blackAndWhite(arr) {
  //coding here...
  return Array.isArray(arr)
    ? (arr.indexOf(5) !== -1) & (arr.indexOf(13) !== -1)
      ? "It's a black array"
      : "It's a white array"
    : "It's a fake array";
}

console.log(blackAndWhite(5, 13), "It's a fake array");
console.log(blackAndWhite([5, 13]), "It's a black array");
console.log(blackAndWhite([5, 12]), "It's a white array");
