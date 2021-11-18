function bloodAlcoholContent(drinks, weight, sex, time) {
  const A = drinks.ounces * drinks.abv;
  const bap = (
    ((A * 5.14) / weight) * (sex === "male" ? 0.73 : 0.66) -
    0.015 * time
  ).toFixed(4);
  return +bap;
}

// console.log(
//   (bloodAlcoholContent({ ounces: 12.5, abv: 0.4 }, 190, "male", 1), 0.0837)
// );

console.log(
  bloodAlcoholContent({ ounces: 180, abv: 0.05 }, 160, "female", 1),
  0.1758
);
