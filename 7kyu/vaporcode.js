function vaporcode(string) {
  //   console.log(string.replace(/\s/gi, ""));
  return string
    .replace(/\s/gi, "")
    .split("")
    .map((char) => char.toUpperCase())
    .join("  ");
}

console.log(
  vaporcode("Lets go to the movies"),
  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
);
console.log(
  vaporcode("Why isnt my code working"),
  "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G"
);
