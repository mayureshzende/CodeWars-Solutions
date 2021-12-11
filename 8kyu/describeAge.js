function describeAge(age) {
  let str = "You're a(n) ";
  return age <= 12
    ? str + "kid"
    : age >= 13 && age <= 17
    ? str + "teenager"
    : age >= 18 && age <= 64
    ? str + "adult"
    : str + "elderly";
}

/* 
function describeAge(age) {
  return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
}
*/
