"use strict";

// 1
const user = {
  name: "john",
  age: 30,
  sayHello() {
    console.log(`Hello dear ${this.name}`);
  },
};

user.sayHello();

// 2
const pedometer = {
  steps: 0,
  increase() {
    this.steps++;
  },
  decrease() {
    this.steps--;
  },
  reset() {
    this.steps = 0;
  },
  read() {
    console.log(`Number of steps: ${this.steps}`);
  },
};

pedometer.increase();
pedometer.increase();
pedometer.read(); // Output: "Number of steps: 2"

pedometer.decrease();
pedometer.read(); // Output: "Number of steps: 1"

pedometer.reset();
pedometer.read(); // Output: "Number of steps: 0"
