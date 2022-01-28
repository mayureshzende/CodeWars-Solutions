function remove(string) {
  let arr = string.split(" ");
  let format = /!$/;
  if (arr.length === 1) return !format.test(arr[0]) ? arr[0] : "";
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes("!")) res += arr[i] + " ";
  }

  return res.trim();
}

// console.log(remove("Hi!"));
// console.log(remove("Hi! Hi!! Hi!"));

// console.log(remove("Hi! Hi Hi!"));

let format = /!$/;
console.log(format.test("Hi"));
