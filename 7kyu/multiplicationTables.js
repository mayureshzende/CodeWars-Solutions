function multiplicationTable(row, col) {
  let numbers = [];
  for (let i = 1; i <= row; i++) {
    let arr = new Array(col).fill(1).map((ele, index) => {
      return (ele + index) * i;
    });
    numbers.push(arr);
  }

  //   console.log(numbers);
  return numbers;
}

// multiplicationTable(3, 4);
console.log(multiplicationTable(3, 4), [
  [1, 2, 3, 4],
  [2, 4, 6, 8],
  [3, 6, 9, 12],
]);
