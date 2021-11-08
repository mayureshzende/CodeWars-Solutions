function array1(arr) {
  let trans = arr.replace(/,+/g, " ").trim();
  //   console.log(trans);
  let str = "";
  if (trans.length <= 3) {
    return null;
  }
  for (let i = 2; i < trans.length - 2; i++) {
    str += trans[i];
  }
  return str;
}

function array(arr) {
  return arr.split(",").slice(1, -1).join(" ") || null;
}

console.log(array("1,2,3"), "2");
console.log(array("1,2,3,4"), "2 3");
console.log(array("1,2,3,4,5"), "2 3 4");

console.log(array(""), null);
console.log(array("1"), null);
console.log(array("1,2"), null);
