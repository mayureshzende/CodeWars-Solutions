function union(s1, s2) {
  const newSet = new Set();

  s1.forEach((element) => {
    newSet.add(element);
  });
  s2.forEach((element) => {
    newSet.add(element);
  });

  return newSet;
}

let A = new Set([1, 2]),
  B = new Set([2, 3]),
  C = new Set([1, 2, 3]);

console.log(union(A, B), C);
