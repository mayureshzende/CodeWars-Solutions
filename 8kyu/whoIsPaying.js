function whoIsPaying(name) {
  //your code here
  if (name.length < 3) return [name];

  return [name, name.slice(0, 2)];
}

console.log(whoIsPaying("Mexico"), ["Mexico", "Me"]);
console.log(whoIsPaying("Melania"), ["Melania", "Me"]);
console.log(whoIsPaying("Melissa"), ["Melissa", "Me"]);
console.log(whoIsPaying("Me"), ["Me"]);
