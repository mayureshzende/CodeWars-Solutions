class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args[0];
    for (const ele of args) {
      if (min > ele) {
        min = ele;
      }
    }
    return min;
  }
}
let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78, 56, 232, 12, 8]), 8);
console.log(sif.findSmallestInt([78, 56, 232, 12, 18]), 12);
console.log(sif.findSmallestInt([78, 56, 232, 412, 228]));
console.log(sif.findSmallestInt([78, 56, 232, 12, 0]), 0);
console.log(sif.findSmallestInt([1, 56, 232, 12, 8]), 1);
