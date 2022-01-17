function remove(string) {
  return string.replace(/!+([^!])/g, "$1");
}

console.log(remove("Hi!"), "Hi!");
console.log(remove("Hi!!!"), "Hi!!!");
console.log(remove("!Hi"), "Hi");
console.log(remove("!Hi!"), "Hi!");
console.log(remove("Hi! Hi!"), "Hi Hi!");
console.log(remove("Hi"), "Hi");
