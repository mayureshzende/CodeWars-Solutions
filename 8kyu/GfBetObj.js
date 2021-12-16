solution = (j, s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "kg") j[i] = j[i];
    if (s[i] == "g") j[i] = j[i] / 1000;
    if (s[i] == "mg") j[i] = j[i] / 1e6;
    if (s[i] == "μg") j[i] = j[i] / 1e9;
    if (s[i] == "lb") j[i] = j[i] / 2.205;
    if (s[i] == "m") j[i] = j[i];
    if (s[i] == "cm") j[i] = j[i] / 100;
    if (s[i] == "mm") j[i] = j[i] / 1000;
    if (s[i] == "μm") j[i] = j[i] / 1e6;
    if (s[i] == "ft") j[i] = j[i] / 3.281;
  }
  g = 6.67e-11;
  mass1 = j[0];

  mass2 = j[1];

  dis = j[2];

  return (g * (mass1 * mass2)) / dis ** 2;
};
