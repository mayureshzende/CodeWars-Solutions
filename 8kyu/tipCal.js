function calculateTip(amount, rating) {
  if (rating.toLowerCase() === "terrible") {
    return amount * 0;
  }
  if (rating.toLowerCase() === "poor") {
    return Math.ceil(amount * 0.5);
  }

  if (rating.toLowerCase() === "good") {
    return Math.ceil(amount * 0.1);
  }

  if (rating.toLowerCase() === "great") {
    return Math.ceil(amount * 0.15);
  }

  if (rating.toLowerCase() === "excellent") {
    return Math.ceil(amount * 0.2);
  } else {
    return "Rating not recognised";
  }
}

console.log(calculateTip(20, "Excellent"), 4);
console.log(calculateTip(26.95, "good"), 3);
