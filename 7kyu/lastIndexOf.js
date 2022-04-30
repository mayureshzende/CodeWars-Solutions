function lastIndexOf(head, value) {
  if (!head) return -1;

  console.log(head.arguments[0]);
  //   for (let len = head.length, i = len; i >= 0; i--) {
  //     if (head[i] === value) {
  //       return i;
  //     }
  //   }
  return -1;
}

// console.log(lastIndexOf(null, 17), -1);
console.log(lastIndexOf(listFromArray([1, 2, 3]), 2), 1);
// console.log(lastIndexOf(listFromArray(["aaa", "b", "abc"]), "aaa"), 0);
// console.log(lastIndexOf(listFromArray([17, "17", 1.2]), 17), 0);
// console.log(lastIndexOf(listFromArray([17, "17", 1.2]), "17"), 1);
// console.log(lastIndexOf(listFromArray([1, 2, 3, 3]), 3), 3);

/* 
function lastIndexOf(head, value) {
  let found = -1
  for (let i = 0, node = head; node; i++, node = node.next) {
    if (node.data === value) {
      found = i
    }
  }
  return found
}
*/
