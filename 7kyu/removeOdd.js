function removeOrAdd(string) {
  let strArr = string.split(" ");

  let out = strArr.map((str) => {
    if ((str[str.length - 1] === "!") & (str[str.length - 2] !== "!")) {
      return str.slice(0, str.length - 1);
    } else {
      return str[str.length - 2] === "!" ? str : str + "!";
    }
  });
  return out.join(" ");
}

console.log(removeOrAdd("Hi!"), "Hi");
console.log(removeOrAdd("Hi! Hi!"), "Hi Hi");
console.log(removeOrAdd("Hi! Hi"), "Hi Hi!");
console.log(removeOrAdd("Hi! Hi Hi!!"), "Hi Hi! Hi!!");
console.log(removeOrAdd("!Hi! !Hi !Hi!!"), "!Hi !Hi! !Hi!!");
