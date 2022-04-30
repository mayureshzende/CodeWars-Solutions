const directions = {
  N: { W: "left", E: "right" },
  S: { W: "right", E: "left" },
  W: { N: "right", S: "left" },
  E: { N: "left", S: "right" },
};

function turn(current, target) {
  return directions[current][target];
}

function turn(current, target) {
  let side = "";
  if (current === "N") {
    switch (target) {
      case "E":
        side = "right";
        break;
      case "W":
        side = "left";
        break;
    }
  }

  if (current === "E") {
    switch (target) {
      case "S":
        side = "right";
        break;
      case "N":
        side = "left";
        break;
    }
  }

  if (current === "S") {
    switch (target) {
      case "W":
        side = "right";
        break;
      case "E":
        side = "left";
        break;
    }
  }
  if (current === "W") {
    switch (target) {
      case "N":
        side = "right";
        break;
      case "S":
        side = "left";
        break;
    }
  }
  return side;
}

console.log(turn("S", "W"), "right");
console.log(turn("N", "E"), "right");
