function comes_after(str, l) {
  let res = "";
  const strArr = [...str];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].toLowerCase() === l.toLowerCase()) {
      res += !strArr[i + 1] ? "" : strArr[i + 1];
    }
  }
  return res.replace(/[^a-zA-Z]/gi, "");
}

console.log(comes_after("Pirates say arrrrrrrrr.", "r"), "arrrrrrrr");

console.log(comes_after("Free coffee for all office workers!", "F"), "rfeofi");
console.log(
  comes_after("king kUnta is the sickest rap song ever kNown k!", "k"),
  "iUeN"
);

console.log(comes_after("p8tice makes pottery p0rfect!", "p"), "o");
console.log(comes_after("d8u d._ rly 2d1s", "D"), "");
console.log(comes_after("nothing to be found here", "z"), "");
