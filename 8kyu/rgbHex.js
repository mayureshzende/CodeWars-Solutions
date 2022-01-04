function colorOf(r, g, b) {
  //coding here
  let rhex = r.toString(16).length < 2 ? "0" + r.toString(16) : r.toString(16);
  let ghex = g.toString(16).length < 2 ? "0" + g.toString(16) : g.toString(16);
  let bhex = b.toString(16).length < 2 ? "0" + b.toString(16) : b.toString(16);
  return `#${rhex}${ghex}${bhex}`;
}

console.log(colorOf(255, 0, 0), "#ff0000");
console.log(colorOf(0, 111, 0), "#006f00");
console.log(colorOf(1, 2, 3), "#010203");
