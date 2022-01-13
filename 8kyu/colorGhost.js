var Ghost = function () {
  const arr = ["white", "yellow", "purple", "red"];

  return (this.color = arr[Math.floor(Math.random() * 4)]);
};

const g = new Ghost();
console.log(g.color);
