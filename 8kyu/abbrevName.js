function abbrevName(name) {
  let arr = name.split(" ");
  return arr[0].charAt(0).toUpperCase() + "." + arr[1].charAt(0).toUpperCase();
}
console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
// return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
