function lowercaseCount(str) {
  return [...str].filter((char) => {
    console.log(char === char.toLowerCase());
    return char === char.toLowerCase();
  }).length;
}

// console.log(lowercaseCount("abc"), 3);
console.log(lowercaseCount("abcABC123"), 3);
