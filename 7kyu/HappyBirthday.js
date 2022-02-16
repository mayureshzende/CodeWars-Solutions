function wrap(height, width, length) {
  return 2 * (height + width + length + Math.min(height, width, length) + 10);
}

// 2(h × W) + 2(h × L) + 2(W × L)

console.log(wrap(13, 13, 13), 124);
console.log(wrap(1, 3, 1), 32);
console.log(wrap(17, 32, 11), 162);
