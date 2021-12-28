function contamination(text, char) {
  return text.length === 0 || char.length < 0 ? "" : getEncded(text, char);
}
function getEncded(text, char) {
  let res = "";

  for (let i = 0; i < text.length; i++) {
    res += char;
  }
  return res;
}

console.log(contamination("abc", "z"), "zzz");
console.log(contamination("", "z"), "");
console.log(contamination("abc", ""), "");
console.log(contamination("_3ebzgh4", "&"), "&&&&&&&&");
console.log(contamination("//case", " "), "      ");

/* 
function contamination(text, char){
  return char.repeat(text.length)
}
*/
