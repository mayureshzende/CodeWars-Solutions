const closestMultiple10 = (num) => {
  let mul = num % 10;
  return mul < 5 ? num - mul : num + (10 - mul);
};

// console.log(closestMultiple10(54), 50);
console.log(closestMultiple10(54), 60);
