function waterbombs(fire, w) {
  let arr = fire.split("Y");
  let count = 0;

  for (let ele of arr) {
    count += Math.ceil(ele.length / w);
  }

  return count;
}
// console.log(waterbombs("xxxxxYxYx", 2), 5);
console.log(waterbombs("xxxYx", 1), 4);
// console.log(waterbombs("xxYxx", 3), 2);
// console.log(waterbombs("xxxxYxYx", 4), 3);
