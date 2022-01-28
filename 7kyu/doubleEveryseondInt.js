function doubleEveryOther(a) {
  return a.map((ele, i) => {
    if (i % 2 === 1) {
      return ele * 2;
    } else {
      return ele;
    }
  });
}

console.log(doubleEveryOther([1, 2, 3, 4]), [1, 4, 3, 8]);
