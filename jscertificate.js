"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
  inputString += chunk;
});
process.stdin.on("end", function () {
  inputString = inputString.split("\n");
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function Activity(amount) {
  // constructor(){
  //     amount = amount;
  // }
  const newUser = Object.create(UserFunction);
  newUser.amount = amount;
  return newUser;
}

const UserFunction = {
  setAmount: function (amount) {
    if (this.amount <= 0) {
      return false;
    } else {
      this.amount = amount;
      return true;
    }
  },
  getAmount: function () {
    return this.amount;
  },
};

function Payment(amount, receiver) {
  const user = Activity(amount);
  Object.setPrototypeOf(user, PaymentFunc);
  user.receiver = receiver;
  return user;
}

const PaymentFunc = {
  setReceiver: function (receiver) {
    this.receiver = receiver;
  },
  getReceiver: function () {
    return this.receiver;
  },
};

Object.setPrototypeOf(PaymentFunc, UserFunction);

function Refund(amount, sender) {
  const refundUser = Payment(amount, sender);
  Object.setPrototypeOf(refundUser, refundFunc);
  refundUser.sender = sender;
  return refundUser;
}

const refundFunc = {
  setSender: function (sender) {
    this.sender = sender;
  },
  getSender: function () {
    return this.sender;
  },
};

Object.setPrototypeOf(refundFunc, PaymentFunc);

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const objectType = readLine().trim();

  const inputsForObjectCreation = readLine().trim().split(" ");
  const updatedAmount = parseInt(readLine().trim());
  const updatedSenderReceiver = readLine().trim();
  switch (objectType) {
    case "Payment":
      const paymentObj = new Payment(
        parseInt(inputsForObjectCreation[0]),
        inputsForObjectCreation[1]
      );
      ws.write(
        `Payment object created with amount ${paymentObj.getAmount()} and receiver ${paymentObj.getReceiver()}\n`
      );
      if (paymentObj.setAmount(updatedAmount)) {
        ws.write(`Amount updated to ${updatedAmount}\n`);
      } else {
        ws.write(`Amount not updated\n`);
      }
      paymentObj.setReceiver(updatedSenderReceiver);
      ws.write(`Receiver updated to ${updatedSenderReceiver}\n`);
      ws.write(
        `Payment object details - amount is ${paymentObj.getAmount()} and receiver is ${paymentObj.getReceiver()}\n`
      );
      ws.write(
        `Payment.prototype has property setAmount: ${Payment.prototype.hasOwnProperty(
          "setAmount"
        )}\n`
      );
      ws.write(
        `Payment.prototype has property getAmount: ${Payment.prototype.hasOwnProperty(
          "getAmount"
        )}\n`
      );
      ws.write(
        `Payment.prototype has property setReceiver: ${Payment.prototype.hasOwnProperty(
          "setReceiver"
        )}\n`
      );
      ws.write(
        `Payment.prototype has property getReceiver: ${Payment.prototype.hasOwnProperty(
          "getReceiver"
        )}\n`
      );
      break;
    case "Refund":
      const refundObj = new Refund(
        parseInt(inputsForObjectCreation[0]),
        inputsForObjectCreation[1]
      );
      ws.write(
        `Refund object created with amount ${refundObj.getAmount()} and sender ${refundObj.getSender()}\n`
      );
      if (refundObj.setAmount(updatedAmount)) {
        ws.write(`Amount updated to ${updatedAmount}\n`);
      } else {
        ws.write(`Amount not updated\n`);
      }
      refundObj.setSender(updatedSenderReceiver);
      ws.write(`Sender updated to ${updatedSenderReceiver}\n`);
      ws.write(
        `Refund object details - amount is ${refundObj.getAmount()} and sender is ${refundObj.getSender()}\n`
      );
      ws.write(
        `Refund.prototype has property setAmount: ${Refund.prototype.hasOwnProperty(
          "setAmount"
        )}\n`
      );
      ws.write(
        `Refund.prototype has property getAmount: ${Refund.prototype.hasOwnProperty(
          "getAmount"
        )}\n`
      );
      ws.write(
        `Refund.prototype has property setSender: ${Refund.prototype.hasOwnProperty(
          "setSender"
        )}\n`
      );
      ws.write(
        `Refund.prototype has property getSender: ${Refund.prototype.hasOwnProperty(
          "getSender"
        )}\n`
      );
      break;
    default:
      break;
  }
}

main();
