function splitAndMerge(string, separator) {
  let strArr = string.split(" ");
  let resStr = "";
  for (const ele of strArr) {
    resStr += ele.split("").join(separator) + " ";
  }
  return string
    .split(" ")
    .map((ele) => ele.split("").join(separator))
    .join(" ");
}

console.log(splitAndMerge("My name is John", " "), "M y n a m e i s J o h n");
console.log(splitAndMerge("My name is John", "-"), "M-y n-a-m-e i-s J-o-h-n");
console.log(splitAndMerge("Hello World!", "."), "H.e.l.l.o W.o.r.l.d.!");
// console.log(splitAndMerge("Hello World!", ","), "H,e,l,l,o W,o,r,l,d,!");

// function splitAndMerge(str, sp) {
//   return str
//     .split(" ")
//     .map((word) => word.split("").join(sp))
//     .join(" ");
// }
