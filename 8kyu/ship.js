function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
  let wght = this.draft - this.crew * 1.5;
  if (wght > 20) {
    return true;
  }
  return false;
};
