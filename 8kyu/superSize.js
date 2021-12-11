function superSize(num) {
  let n = num;
  const res = [];
  while (n > 0) {
    res.push(n % 10);
    n = Math.floor(n / 10);
  }

  return +res.sort((a, b) => b - a).join("");
}

console.log(superSize(69), 96);
console.log(superSize(513), 531);
// console.log(superSize(2017), 7210);
// console.log(superSize(414), 441);
// console.log(superSize(608719), 987610);
// console.log(superSize(123456789), 987654321);
// console.log(superSize(700000000001), 710000000000);
// console.log(superSize(666666), 666666);
// console.log(superSize(2), 2);
