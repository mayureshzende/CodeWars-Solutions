function list(names) {
  const arr = [];

  let str = "";

  for (let ele of names) {
    arr.push(ele.name);
  }

  if (!arr.length) return "";

  if (arr.length === 1) {
    return arr[0];
  }

  for (let i = 0; i < arr.length - 2; i++) {
    str = str + arr[i] + ", ";
  }

  str += arr[arr.length - 2] + " & " + arr[arr.length - 1];

  return str;
}

// console.log(
//   list([
//     { name: "Bart" },
//     { name: "Lisa" },
//     { name: "Maggie" },
//     { name: "mayur" },
//   ])
// );

// console.log(list([{ name: "Bart" }, { name: "Lisa" }]), "Bart & Lisa");

console.log(list([]));
