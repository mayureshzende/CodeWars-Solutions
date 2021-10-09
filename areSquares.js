var isSquare = function (arr) {
  if (!arr) return undefined;
  //Your code here
  for (let i = 0; i < arr.length; i++) {
    if (Math.sqrt(arr[i]) % 1 !== 0) {
      return false;
    }
  }
  return true;
};

console.log(isSquare([1, 4, 9, 16, 25, 36]));
