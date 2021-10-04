function vowelsAndConsonants(s) {
  let arr = new Array(s);
  arr.forEach((str, index) => {
    if (
      str[index] === "a" ||
      str[index] === "e" ||
      str[index] === "i" ||
      str[index] === "o" ||
      str[index] == "u"
    ) {
      console.log(str[index]);
    }
  });

  arr.forEach((str, index) => {
    if (
      str[index] !== "a" ||
      str[index] !== "e" ||
      str[index] !== "i" ||
      str[index] !== "o" ||
      str[index] !== "u"
    ) {
      console.log(str[index]);
    }
  });
}

// vowelsAndConsonants("mayur");
print("mayur");

function print(s) {
  let arr = s.split("");
  //   console.log(arr.slice(""));
  console.log(arr);
  arr.forEach((element) => {
    console.log(element);
  });
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(arr[i]);
  //   }
}
