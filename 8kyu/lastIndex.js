function remove(s) {
  //coding and coding....
  let reverse = [...s].reverse().join("");
  console.log("rev is ", reverse);
  //   let rep = reverse.replace(reverse.charAt(reverse.lastIndexOf("!")), "");
  let rep = reverse.substr(
    reverse.charAt(reverse.indexOf("!"), reverse.lastIndexOf("!"))
  );
  console.log(rep);
  //   return s.replace(s.charAt(s.lastIndexOf("!")), "");
}
// console.log(remove("Hi!"), "Hi");
console.log(remove("Hi!!!"), "Hi");
// console.log(remove("!Hi"), "!Hi");
// console.log(remove("!Hi!"), "!Hi");
