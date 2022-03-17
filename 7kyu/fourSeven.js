function fourSeven(n) {
  // Your Code Here

  const res = {
    4: 7,
    7: 4,
  };
  return res[n] || 0;
}

console.log(fourSeven(4), 7, "n = 4 should return 7");
console.log(fourSeven(7), 4, "n = 7 should return 4");
