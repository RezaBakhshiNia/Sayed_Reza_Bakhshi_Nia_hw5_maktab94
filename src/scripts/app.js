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
