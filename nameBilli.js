function billboard(name, price = 30) {
  let total = 0;

  //   name.split("").map((char) => {
  //     total += price;
  //   });

  return name.split("").reduce((sum) => sum + price, 0);

  //   return total;
}

console.log(billboard("Abishai Charalampos"), 570);
console.log(billboard("Idwal Augustin"), 420);
console.log(billboard("Jeong-Ho Aristotelis"), 600);
console.log(billboard("Hadufuns John", 20), 260);
console.log(billboard("Zoroaster Donnchadh"), 570);

console.log(769 % 2 === 1);

// return flower1 % 2 !== flower2 % 2;
