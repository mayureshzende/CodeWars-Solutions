function product(string) {
  //coding and coding....
  let countques = 0,
    countex = 0;
  [...string].map((char) => {
    if (char === "?") countques++;
    if (char === "!") countex++;
  });
  return countex * countques;
}

console.log(product("", 0));
console.log(product("!", 0));
console.log(product("!!", 0));
console.log(product("!??", 2));
console.log(product("!???", 3));
console.log(product("!!"), 0);
