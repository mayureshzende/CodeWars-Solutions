function tripleX(str) {
  let res = str.indexOf("x");

  let chr = str.charAt(res);

  return chr === str.charAt(res + 1) && chr === str.charAt(res + 2);
}

console.log(tripleX("abraxxxas"));
console.log(tripleX("soft kitty, warm kitty, xxxxx"));
console.log(tripleX("softx kitty, warm kitty, xxxxx"));

// const tripleX = str => /^[^x]*xxx/.test(str);
