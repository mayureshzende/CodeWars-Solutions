function defineSuit(card) {
  switch (card.charAt(card.length - 1)) {
    case "♣":
      return "clubs";
    case "♠":
      return "spades";
    case "♦":
      return "diamonds";
    case "♥":
      return "hearts";
  }
}

console.log(defineSuit("3♣"), "clubs");
console.log(defineSuit("Q♠"), "spades");
console.log(defineSuit("9♦"), "diamonds");
console.log(defineSuit("J♥"), "hearts");
