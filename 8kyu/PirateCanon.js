const cannonsReady = (gunners) => {
  return Object.values(gunners).filter((ele) => ele === "nay").length === 0
    ? "Fire!"
    : "Shiver me timbers!";
};

var a = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" },
  b = { Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" };

console.log(cannonsReady(a));
console.log(cannonsReady(b));
