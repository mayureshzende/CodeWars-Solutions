function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - (col - 1)) * (nRows - row);
}
console.log(seatsInTheater(16, 11, 5, 3), 96);
console.log(seatsInTheater(1, 1, 1, 1), 0);
console.log(seatsInTheater(13, 6, 8, 3), 18);
