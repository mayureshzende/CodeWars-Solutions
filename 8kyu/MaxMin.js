var min = function (list) {
  let small = list[0];
  list.forEach((element) => {
    if (element < small) {
      small = element;
    }
  });
  return small;
};

var max = function (list) {
  let large = list[0];
  list.forEach((element) => {
    if (element > large) {
      large = element;
    }
  });
  return large;
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
