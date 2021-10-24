function sum(num) {
  let count = 0;
  let res = [];
  while (num > 0) {
    res.push(num--);
    // num--;
  }
  console.log(res);
  return count;
}
console.log(sum(5));
