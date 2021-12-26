function addLength(str) {
  const res = [];
  str.split(" ").map((ele) => res.push(ele + " " + ele.length));
  return res;
}

console.log(addLength("apple ban"), ["apple 5", "ban 3"]);
console.log(addLength("you will win"), ["you 3", "will 4", "win 3"]);
