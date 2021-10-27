function reverseList(list) {
  const res = [];
  for (let i = list.length - 1; i >= 0; i--) {
    res.push(list[i]);
  }
  return res;
}

console.log(reverseList([3, 1, 5, 4]), [4, 5, 1, 3]);
