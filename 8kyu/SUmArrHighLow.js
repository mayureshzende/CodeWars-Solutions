function sumArray(array) {
  let min = array[0];
  let max = array[0];
  console.log(...array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  return array.reduce((acc, curr) => (curr += acc), 0) - (max + min);
}
console.log(sumArray([6, 2, 1, 8, 10]), 16);
