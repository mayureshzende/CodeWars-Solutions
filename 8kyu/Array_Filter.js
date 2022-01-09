Array.prototype.filter = function (func) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) res.push(this[i]);
  }
  return res;
};

console.log(
  [1, 2, 3, 4].filter((num) => {
    return num > 3;
  }),
  [4]
);
