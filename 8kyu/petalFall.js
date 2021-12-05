function sakuraFall(v) {
  // your code here
  let dist = (5 * 80) / v;

  return v > 0 ? dist : 0;
}

console.log(sakuraFall(5), 80);
console.log(sakuraFall(15), 40);

console.log(sakuraFall(-1), 0);
