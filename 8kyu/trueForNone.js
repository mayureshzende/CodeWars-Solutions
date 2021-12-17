// function none(arr, fun) {
//   if (!arr.length) return true;

//   let a = arr.map((ele) => fun(ele)).includes(true);
//   console.log(a);
//   return a ? false : true;

//   for (const ele in arr) {
//     if (fun(ele)) {
//       return false;
//     }
//   }
//   return true;
function none(arr, fun) {
  for (var i = 0; i < arr.length; i++) {
    if (fun(arr[i])) return false;
  }
  return true;
}

console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 5;
  }),
  true
);
console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 4;
  }),
  false
);
