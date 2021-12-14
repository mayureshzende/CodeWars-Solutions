function elevator(left, right, call) {
  let l = Math.abs(left - call);
  let r = Math.abs(right - cal);

  if (r <= l) {
    return "right";
  }
  return "left";
}

console.log(elevator(1, 2, 2));
