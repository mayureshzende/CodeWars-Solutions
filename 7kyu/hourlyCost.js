function cost(mins) {
  //   return;
  let hrs = Math.floor(mins / 60);
  let min = (mins / 60) % 1 > 0.3 ? 10 : 0;
  //   console.log(Math.floor(mins / 60));
  //   console.log((mins / 60) % 1);

  return hrs < 1 ? 30 : hrs * 30 + min;
}

console.log(cost(45), 30);
console.log(cost(63), 30);
console.log(cost(84), 40);
console.log(cost(102), 50);
console.log(cost(273), 100);
