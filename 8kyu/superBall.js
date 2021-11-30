var Ball = function (ballType) {
  if (!ballType) {
    this.ballType = "regular";
  } else {
    this.ballType = "super";
  }
  return this.ballType;
};

console.log(new Ball().ballType, "regular");
console.log(new Ball("super").ballType, "super");
