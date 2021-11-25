function well(x) {
  return x.filter((ele) => ele === "good").length > 2
    ? "I smell a series!"
    : x.filter((ele) => ele === "good").length >= 1
    ? "Publish!"
    : "Fail!";
}

console.log(well(["good", "bad", "bad", "bad", "bad"]), "Publish!");
console.log(well(["bad", "bad", "bad"]), "Fail!");
