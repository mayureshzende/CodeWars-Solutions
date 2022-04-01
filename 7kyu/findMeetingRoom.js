function meeting(x) {
  for (let i = 0, len = x.length; i < len; i++) {
    if (x[i] === "O") {
      return i;
    }
  }
  return "None available!";
}

console.log(meeting(["X", "O", "X"]), 1);
console.log(meeting(["O", "X", "X", "X", "X"]), 0);
console.log(meeting(["X", "X", "X", "X", "X"]), "None available!");
