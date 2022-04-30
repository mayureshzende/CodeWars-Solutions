function nthFloyd(n) {
  let lastNum = 1;
  let row = 1;

  while (lastNum < n) {
    ++row;
    lastNum += row;
  }

  return row;
}
