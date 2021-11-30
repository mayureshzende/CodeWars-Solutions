function stringy(size) {
  let str = "";
  for (let i = 0; i < size; i++) {
    i % 2 === 0 ? (str += "1") : (str += "0");
  }
  return str;
}

console.log(stringy(5));
