function dropCap(n) {
  return n
    .split(" ")
    .map((word) =>
      word.length > 2
        ? word[0].toUpperCase() + word.slice(1).toLowerCase()
        : word
    )
    .join(" ");
}

// console.log(dropCap("Apple Banana"), "Apple Banana");
// console.log(dropCap("Apple"), "Apple");
// console.log(dropCap(""), "");
// console.log(dropCap("of"), "of");
// console.log(
//   dropCap(
//     "Revelation of the contents outraged American public opinion, and helped generate"
//   ),
//   "Revelation of The Contents Outraged American Public Opinion, And Helped Generate"
// );
// console.log(
//   dropCap("more  than    one space between words"),
//   "More  Than    One Space Between Words"
// );
console.log(dropCap("  leading spaces"), "  Leading Spaces");
