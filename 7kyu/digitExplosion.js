function explode(num) {
  let res = "";

  [...num].map((ele) => {
    for (let i = 0; i < +ele; i++) {
      res += ele;
    }
  });

  return res;
}

console.log(explode("312"), "333122"),
  console.log(explode("102269"), "12222666666999999999"),
  console.log(explode("0"), ""),
  console.log(explode("000"), ""),
  console.log(explode("123"), "122333");
