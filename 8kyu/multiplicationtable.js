function multiTable(number) {
  let str = "";
  for (let i = 1; i <= 10; i++) {
    str += `${i} * ${number} = ` + +(i * number) + "\n";
  }
  console.log(str.slice(0, str.length - 1));
  return str.slice(0, str.length - 1);
}

console.log(multiTable(4));
