function hero(bullets, dragons) {
  return dragons * 2 <= bullets;
}

console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);
