function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  let maxs1 = a1.map((ele) => ele.length);
  let maxs2 = a2.map((ele) => ele.length);

  return Math.max(
    Math.max(...maxs1) - Math.min(...maxs2),
    Math.max(...maxs2) - Math.min(...maxs1)
  );
}

var s1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz",
];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2), 13);
