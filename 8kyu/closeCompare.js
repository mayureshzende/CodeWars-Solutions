function closeCompare(a, b, margin) {
  // ...
  if (a - b >= margin) {
    return 0;
  }

  return a < b ? -1 : 1;
}
