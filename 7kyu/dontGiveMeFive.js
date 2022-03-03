function dontGiveMeFive(start, end) {
  const res = [];
  for (let i = start; i <= end; i++) {
    if (i.toString().indexOf("5") === -1) res.push(i);
  }
  return res.length;
}

console.log(dontGiveMeFive(1, 9), 8);
console.log(dontGiveMeFive(4, 17), 12);
