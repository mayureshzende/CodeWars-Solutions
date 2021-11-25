function uniTotal(chars) {
  let total = 0;
  //   total = [...chars].reduce((curr, acc) =>  curr.charCodeAt(0) + acc, 0);
  //   [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0); this works
  for (let i = 0; i < chars.length; i++) total += chars.charCodeAt(i);
  return total;
}

console.log(uniTotal("a"), 97);
console.log(uniTotal("b"), 98);
console.log(uniTotal("c"), 99);
console.log(uniTotal("d"), 100);
console.log(uniTotal("e"), 101);
