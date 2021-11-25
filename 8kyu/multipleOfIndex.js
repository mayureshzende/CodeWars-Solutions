function multipleOfIndex(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % i === 0) {
      res.push(arr[i]);
    }
  }
  return res;
}

//   return array.filter((num, i) => num % i === 0);
