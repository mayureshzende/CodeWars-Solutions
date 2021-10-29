function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count = 0;
  for (let ele of arrayOfSheep) {
    if (ele) {
      count++;
    }
  }
  return count;
}

// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheeps(array1), 17);
