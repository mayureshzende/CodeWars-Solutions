function highestRank(arr) {
  let countMap = new Map();
  let max = 0;
  let high = -1;
  for (let i = 0; i < arr.length; i++) {
    if (!countMap.has(arr[i])) {
      countMap.set(arr[i], 1);
    } else {
      countMap.set(arr[i], countMap.get(arr[i]) + 1);
    }
  }

  for (let [key, values] of countMap.entries()) {
    // console.log(key, " == ", values);
    if (values > max) {
      max = values;
      high = key;
    }
  }
  //   console.log(" higest occuring is = ", high);
  return high;

  //Your Code logic should written here
}

var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
console.log(highestRank(arr), 12);
