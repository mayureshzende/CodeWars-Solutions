function differenceInAges(ages) {
  let arr = ages.sort((a, b) => a - b);
  return [arr[0], arr[arr.length - 1], arr[arr.length] - arr[0]];
}
