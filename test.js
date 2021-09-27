function Test(name) {
  this.name = name;
}

Test.prototype.amount = function (amount) {
  this.amount = amount;
};

Test.prototype.getAmount = function () {
  return this.amount++;
};

const user = new Test("rob");

user.amount(1000);

console.log(user);
console.log(" amount is - ", user.amount);
console.log(" calling test = ", user.getAmount());
console.log(" calling test = ", user.getAmount());

console.log(" logging amount = ", user.amount);

console.log(Test.prototype.hasOwnProperty("amount"));
console.log(Test.prototype.hasOwnProperty("test"));
