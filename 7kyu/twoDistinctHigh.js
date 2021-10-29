function twoHighest(arr) {
  if (arr.length === 0) return [];

  let min = arr[0];
  if (arr.length === 1) return [min];

  let max = arr[0];
  // console.log(
  //   ` min is ${min} and max ${max} and array length is ${arr.length}`
  // );

  for (let [index, ele] of arr.entries()) {
    if (max < ele || ele > min) {
      min = max;
      max = ele;
    }
    console.log(
      `max is ${max} and min is ${min} ==== ${ele} ------------- ${index} `
    );
  }
  // console.log(`max is ${max} and min is ${min}`);
  //   if (min == max) return [min];
  return [max, min].sort((a, b) => b - a);
}

// console.log(twoHighest([4, 10, 10, 9]));
// console.log(twoHighest([15]));
console.log(twoHighest([15, 20, 20, 17]));
// console.log(twoHighest([1, 1, 1]));

// console.log(
//   twoHighest([
//     4099, 72307, 13049, 45882, 90120, 67717, 14687, 78719, 22507, 33049, 24972,
//     93532, 56820, 32570, 1886, 27844, 98212, 52019, 70808, 67203, 17949, 66668,
//     20931, 38665, 49686, 36174, 83634, 7485, 44883, 13674, 48029, 74225, 53872,
//     71022, 54073, 40888, 6292, 86075, 99386, 22759, 27716, 52073,
//   ])
// );
[
  4099, 72307, 13049, 45882, 90120, 67717, 14687, 78719, 22507, 33049, 24972,
  93532, 56820, 32570, 1886, 27844, 98212, 52019, 70808, 67203, 17949, 66668,
  20931, 38665, 49686, 36174, 83634, 7485, 44883, 13674, 48029, 74225, 53872,
  71022, 54073, 40888, 6292, 86075, 99386, 22759, 27716, 52073,
];
// expected[52073, 27716]; to deeply equal[99386, 98212]
