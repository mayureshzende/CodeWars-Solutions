function squareOrSquareRoot(array) {
  return array.map((ele) => {
    if (Math.sqrt(ele) % 1 === 0) {
      return Math.sqrt(ele);
    } else {
      return ele * ele;
    }
  });
}

var input = [4, 3, 9, 7, 2, 1];
var expected = [2, 9, 3, 49, 4, 1];
console.log(squareOrSquareRoot(input), expected);

input = [100, 101, 5, 5, 1, 1];
expected = [10, 10201, 25, 25, 1, 1];
console.log(squareOrSquareRoot(input), expected);
