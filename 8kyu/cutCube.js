function cutCube(volume, n) {
  //coding here...
  return isCube(volume) && isCube(volume / n);
}

function isCube(num) {
  return Math.cbrt(num) % 1 === 0;
}

console.log(cutCube(27, 27), true);
console.log(cutCube(512, 8), true);
console.log(cutCube(512, 64), true);
console.log(cutCube(50000, 50), false);
