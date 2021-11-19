function ensureQuestion(s) {
  // Code here
  return s.charAt(s.length - 1) === "?" ? s : s + "?";
}

console.log(ensureQuestion(""), "?", "Expected: '?'");
console.log(ensureQuestion("Yes"), "Yes?", "Expected: '?'");
console.log(ensureQuestion("No?"), "No?", "Expected: '?'");
