function nextId(ids) {
  let sortArr = ids.sort((a, b) => a - b);

  if (sortArr[0] !== 0) {
    return 0;
  }

  for (let i = 0; i < sortArr.length; i++) {
    if ((sortArr[i] + 1 != sortArr[i + 1]) & (sortArr[i] != sortArr[i + 1])) {
      return sortArr[i] + 1;
    }
  }

  return sortArr[sortArr.length - 1] + 1;
}

//  function nextId(ids) {
//    var x = 0;
//    while (ids.includes(x)) x++;
//    return x;
//  }

// console.log(nextId([0, 1, 1, 2, 3, 5]), 4);
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);
