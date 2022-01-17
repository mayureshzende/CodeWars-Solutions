const prevMultOfThree = (n) => {
  let num = n;
  while (num > 0) {
    if (num % 3 !== 0) {
      num = Math.floor(num / 10);
    }
    if (num % 3 === 0 && num > 0) {
      return num;
    }
  }
  return null;
};

console.log(prevMultOfThree(1), null);
console.log(prevMultOfThree(25), null);
console.log(prevMultOfThree(952406), 9);
console.log(prevMultOfThree(1244), 12);
console.log(prevMultOfThree(36), 36);

/* 
1 % 10 = 1 % 3 == 1 - null 
25 % 10 = 5 % 3 == 2 - 
*/
