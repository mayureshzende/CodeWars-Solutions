function arrayDiff(a, b) {
  let arr1 = a;
  let arr2 = b;

  let res = [];

  for (let i = 0; i < arr1.lenght; i++) {
    if (!arr2.includes(arr1[i])) {
      res.push(arr[i]);
    }
  }

  return res;
}

console.log(arrayDiff([4], [4, 5]));
arrayDiff([], [4, 5]); //, [], "a was [], b was [4,5]";
arrayDiff([3, 4], [3]); // , [4], "a was [3,4], b was [3]";
arrayDiff([1, 8, 2], []); // , [1, 8, 2], "a was [1,8,2], b was []";
arrayDiff([1, 2, 3], [1, 2]); //, [3], "a was [1,2,3], b was [1,2]";
