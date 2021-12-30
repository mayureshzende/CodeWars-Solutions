function reverse(string) {
  const arr = string.split(" ");
  let str = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    str += arr[i] + " ";
  }

  return !string.length ? "" : str.trim();
}

// string.split(" ").reverse().join(" ");

console.log(reverse("no one cares"), "cares one no");
console.log(reverse(""), "");
console.log(reverse("CodeWars"), "CodeWars");
