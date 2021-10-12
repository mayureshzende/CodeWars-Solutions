function isNice(arr) {
  if (arr.length <= 0) {
    return false;
  }

  const result = arr.every((item) => {
    return arr.some((current) => {
      return item === current + 1 || item === current - 1;
    });
  });

  return result;
}

console.log(isNice([2, 10, 9, 3]), true);
