function printerError(s) {
  let str = s.replace(/[a-m]/gi, "");

  return `${str.length}/${s.length}`;
}

var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
console.log(printerError(s), "3/56");
