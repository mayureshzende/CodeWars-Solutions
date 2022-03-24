function hydrate(s) {
  let countstr = s.replace(/[^\d]/gi, "");
  let glassCOunt = [...countstr].reduce((acc, curr) => (acc += +curr), 0);
  return glassCOunt > 1
    ? glassCOunt + " glasses of water"
    : glassCOunt + " glass of water";
}

console.log(hydrate("1 beer"), "1 glass of water");
console.log(hydrate("2 glasses of wine and 1 shot"), "3 glasses of water");
console.log(
  hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"),
  "10 glasses of water"
);
