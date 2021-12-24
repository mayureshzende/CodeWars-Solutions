function remove(s) {
  //coding and coding....
  //   let str = s.slice(0, -1);
  //   console.log(str);
  return s.replace(/!/g, "") + "!";
}

console.log(remove("Hi!"), "Hi!");
console.log(remove("Hi!!!"), "Hi!");
console.log(remove("!Hi"), "Hi!");
console.log(remove("!Hi!"), "Hi!");
console.log(remove("Hi! Hi!"), "Hi Hi!");
