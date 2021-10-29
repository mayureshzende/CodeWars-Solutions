function oddOrEven(array) {
  let sum = array.reduce((curr, acc) => curr + acc, 0);
  //   console.log(sum);
  return sum % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0]));
