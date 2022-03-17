function partlist(arr) {
  let res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    res.push([arr.slice(0, i + 1).join(" "), arr.slice(i + 1).join(" ")]);
  }
  return res;
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"]), [
  ["I", "wish I hadn't come"],
  ["I wish", "I hadn't come"],
  ["I wish I", "hadn't come"],
  ["I wish I hadn't", "come"],
]);
