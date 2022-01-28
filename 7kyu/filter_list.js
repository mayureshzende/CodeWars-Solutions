function filter_list(l) {
  return l.filter((ele) => typeof ele === "number");
}

console.log(filter_list([1, 2, "a", "b"]), [1, 2]);
