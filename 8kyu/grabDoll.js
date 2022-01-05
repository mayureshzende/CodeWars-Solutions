function grabDoll(dolls) {
  var bag = [];
  let count = 3;
  //coding here

  for (let ele of dolls) {
    if (ele === "Hello Kitty" || ele === "Barbie doll") {
      bag.push(ele);
      break;
    }
    if (count > 0) {
      count--;
      continue;
    }
  }

  return bag;
}

console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]), [
  "Hello Kitty",
]);
