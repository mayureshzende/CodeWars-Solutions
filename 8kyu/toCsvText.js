function toCsvText(array) {
  return array.join("\\n");
}
/* 
// One-liner with nested maps. 
const toCsvText = arr => arr.map(row => row.map(n => n.toString()).join(',')).join('\n');


// Even shorter, takes advantage of how JS will cast arrays to strings.
const toCsvText = arr => arr.join('\n');
 */

console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ]),
  " ========= ",
  "0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34"
);
