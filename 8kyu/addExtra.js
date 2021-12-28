function addExtra(listOfNumbers) {
  const arrList = [].concat(listOfNumbers);
  arrList.push(1);
  return arrList;
}

console.log(addExtra([1, 2, 3]).length, 4);
console.log(addExtra([1, 2]).length, 3);
console.log(addExtra([]).length, 1);
