function compress(sentence) {
  const res = [];
  let str = "";
  let strArr = sentence.toLowerCase().split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (!res.includes(strArr[i])) {
      res.push(strArr[i]);
    }
  }

  strArr.map((ele) => {
    str += res.indexOf(ele);
  });

  return str;
}

// console.log(compress("The bumble bee"), "012");
// console.log(compress("SILLY LITTLE BOYS silly little boys"), "012012");
console.log(
  compress(
    "The number 0 is such a strange number Strangely it has zero meaning"
  ),
  "012345617891011"
);

/* 
function compress(sentence) {
  sentence = sentence.toLowerCase()
  let arr = [...new Set(sentence.split` `)]
  return sentence.split` `.map(x => arr.indexOf(x)).join``
}
*/
