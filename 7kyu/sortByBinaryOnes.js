/* 
n this example you need to implement a function that sort a list of integers based on it's binary representation.

The rules are simple:

sort the list based on the amount of 1's in the binary representation of each number.
if two numbers have the same amount of 1's, the shorter string goes first. (ex: "11" goes before "101" when sorting 3 and 5 respectively)
if the strings have the same length, lower decimal number goes first. (ex: 21 = "10101" and 25 = "11001", then 21 goes first as is lower)
*/

/* function sortByBinaryOnes(list) {
  let obj = {};
  let res = [];
  list.map((ele) => {
    if (!obj[ele]) {
      obj[ele] = ele.toString(2);
    }
  });
  const arr = Object.values(obj).map((value) => {
    return value.split("1").length - 1;
  });
}
 */

const toOnes = (x) => (x.toString(2).match(/1/g) || []).length;
const sortFunction = (a, b) => toOnes(b) - toOnes(a) || a - b;
const sortByBinaryOnes = (list) => list.sort(sortFunction);

// console.log(sortByBinaryOnes([1, 3]), [3, 1]);
console.log(sortByBinaryOnes([1, 2, 3, 4]), [3, 1, 2, 4]);
