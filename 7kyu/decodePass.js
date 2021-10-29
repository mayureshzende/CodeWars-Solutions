function decodePass(passArr, bin) {
  let Is = "";
  let str = BinaryToStr(bin);
  if (passArr.includes(str)) return str;
  return false;
}

function BinaryToStr(str) {
  return str
    .split(" ")
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join("");
  //   console.log(typeof output);
}
// 1234567890
// console.log(
//   decodePass(
//     ["password123", "admin", "admin1"],
//     "01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011"
//   )
// );

console.log(
  decodePass(
    ["password123", "admin", "admin1"],
    "01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011"
  )
);
/*  
  //   let binArr = bin.split(" ");
  //   let arrElementBin = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     arrElementBin.push(getBinary(arr[i]));
  //     }

  //   for (let i = 0; i < arrElementBin.length; i++) {
  //     let len = arrElementBin[i].length;
  //     console.log(arrElementBin[i], " and bin ", bin);
  //     if (arrElementBin[i] === bin) {
  //       console.log("found");
  //     } else {
  //       console.log("not found");
  //     }
  //   }

  function getBinary(str) {
  return str
    .split("")
    .map((char) => "0" + char.charCodeAt(0).toString(2))
    .join(" ");
}
*/
