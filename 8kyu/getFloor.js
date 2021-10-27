function getRealFloor(n) {
  if ((n > 0) & (n < 13)) {
    return n - 1;
  } else if (n > 13) {
    return n - 2;
  } else {
    return n;
  }
}

console.log(getRealFloor(1), 0);
console.log(getRealFloor(5), 4);
console.log(getRealFloor(13), 13);
/* 
function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}
*/
