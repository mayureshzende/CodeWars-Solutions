function center(strng, width, fill = " ") {
  return strng.length > width
    ? strng
    : strng
        .padStart(Math.ceil((width + strng.length) / 2), fill)
        .padEnd(width, fill);
}
console.log(center("a", 3, " "), " a ");
console.log(center("abc", 10, "_"), "____abc___");
console.log(center("a", 3, "="), "=a=");
console.log(center("", 3, "_"), "___");
console.log(center("____abc___", 10, "_"), "____abc___");

console.log(center("a", 2, "_"), "_a");
