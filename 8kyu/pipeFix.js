function pipeFix(numbers) {
  let start = numbers[0];
  let end = numbers[numbers.length - 1];
  const res = [];
  for (let i = start; i <= end; i++) {
    res.push(i);
  }

  return res;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(pipeFix([1, 2, 3, 12]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(pipeFix([6, 9]), [6, 7, 8, 9]);
console.log(pipeFix([-1, 4]), [-1, 0, 1, 2, 3, 4]);
console.log(pipeFix([1, 2, 3]), [1, 2, 3]);
