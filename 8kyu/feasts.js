function feast(beast, dish) {
  return (beast.charAt(0) === dish.charAt(0)) &
    (beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1))
    ? true
    : false;
}

console.log(feast("great blue heron", "garlic naan"), true);
console.log(feast("chickadee", "chocolate cake"), true);
console.log(feast("brown bear", "bear claw"), false);
