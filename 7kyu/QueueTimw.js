function queue(queuers, pos) {
  let count = 0;

  for (let i = 0; i < queuers.length; i++) {
    if (queuers[pos] > 0) {
      count++;
    } else {
    }
  }
}

console.log(queue([2, 5, 3, 6, 4], 0), 6);
console.log(queue([2, 5, 3, 6, 4], 1), 18);
console.log(queue([2, 5, 3, 6, 4], 2), 12);
/* 
[2, 5, 3, 6, 4]
[5, 3, 6, 4, 1]
[3, 6, 4, 1, 4]
[6, 4, 1, 4, 2]
[4, 1, 4, 2, 5]
[1, 4, 2, 5, 3]







*/
