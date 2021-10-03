const add = function (x) {
  return function (y) {
    return x + y;
  };
};

console.log(add(2)(5));
