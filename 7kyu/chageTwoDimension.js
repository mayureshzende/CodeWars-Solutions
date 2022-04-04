function matrix(array) {
  let res = [];

  for (let i = 0, length = array.length; i < length; i++) {
    const inner = [];
    for (let j = 0, len = array[i].length; j < len; j++) {
      if ((i === j) & (array[i][j] < 0)) {
        inner.push(0);
      } else if ((i === j) & (array[i][j] >= 0)) {
        inner.push(1);
      } else {
        inner.push(array[i][j]);
      }
    }
    res.push(inner);
  }
  return res;
}

console.log(
  matrix([
    [-1, 4, -5, -9, 3],
    [6, 8, -7, 4, -5],
    [3, 5, 1, -9, -1],
    [1, 5, -7, 15, -9],
    [-3, 2, 1, -5, -6],
  ]),
  [
    [0, 4, -5, -9, 3],
    [6, 1, -7, 4, -5],
    [3, 5, 1, -9, -1],
    [1, 5, -7, 1, -9],
    [-3, 2, 1, -5, 0],
  ]
);

/* 
function matrix(array) {
    for (let i=0; i<array.length; i++) {
      array[i][i] = array[i][i] < 0 ? 0 : 1
    }
    return array;
}

function matrix(a) {
    return a.map((a,i)=>a.map((a,j)=>i==j?+!(a<0):a))
}
*/
