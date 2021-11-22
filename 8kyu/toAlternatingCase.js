String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  let str = this;
  let res = "";
  //   console.log(this.slice(0));

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toLowerCase()) {
      res += str.charAt(i).toUpperCase();
    } else {
      res += str.charAt(i).toLowerCase();
    }
  }
  return res;
};

/* String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
} */
console.log("hello world".toAlternatingCase(), "HELLO WORLD");
console.log("HELLO WORLD".toAlternatingCase(), "hello world");
console.log("hello WORLD".toAlternatingCase(), "HELLO world");
console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
console.log("12345".toAlternatingCase(), "12345");
console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
