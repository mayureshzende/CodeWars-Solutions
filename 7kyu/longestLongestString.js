function longest(s1, s2) {
  let ResSet = [...new Set([...s1].concat([...s2]))].sort().join("");

  //   console.log([...ResSet].join(""));
  //   console.log([...ResSet].sort().join(""));
  console.log(ResSet);
}

console.log((longest("aretheyhere", "yestheyarehere"), "aehrsty"));

/*
function longest(s1, s2) {
  return [...new Set([...s1].concat([...s2]))].sort().join("");
}
*/
