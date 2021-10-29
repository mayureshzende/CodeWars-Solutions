function save(sizes, hd) {
  let sum = 0;

  for (let i = 0; i < sizes.length; i++) {
    sum += sizes[i];
    if (sum > hd) {
      return i;
    }
  }

  return sizes.length;
}

console.log(save([4, 4, 4, 3, 3], 12));
console.log(save([4, 4, 4, 3, 3], 11));
console.log(save([1, 2, 3, 4], 250), 4);
console.log(save([11, 13, 15, 17, 19], 8), 0);
console.log(save([13], 13), 1);
console.log(save([4, 8, 15, 16, 23, 42], 108), 6);

/* 
function save(sizes, hd) {
  let result = 0;
  sizes.reduce((acc, curr) => {
    if ((acc += curr) <= hd) result += 1;
    return acc;
  }, 0);
  return result;
}
--------------------------
function save(sizes, hd) {
  let i = -1;
  while (hd >=0) {
    hd -= sizes.shift();
    i++;
  }
  return i;
}

*/
