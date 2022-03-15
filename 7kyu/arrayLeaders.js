function arrayLeaders(numbers) {
  let res = [];
  for (let i = 0; i < numbers.length; i++) {
    let right = numbers.slice(i + 1).reduce((acc, curr) => (acc += curr), 0);
    if (numbers[i] > right) {
      res.push(numbers[i]);
    }
  }
  return res;
}

console.log(arrayLeaders([1, 2, 3, 4, 0]), [4]);
console.log(arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]);
console.log(arrayLeaders([-1, -29, -26, -2]), [-1]);
console.log(arrayLeaders([-36, -12, -27]), [-36, -12]);
console.log(arrayLeaders([5, -2, 2]), [5, 2]);
console.log(arrayLeaders([0, -1, -29, 3, 2]), [0, -1, 3, 2]);
