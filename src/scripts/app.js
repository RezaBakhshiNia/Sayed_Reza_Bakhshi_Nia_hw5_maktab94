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

// 3
const people = [
  { name: "Milad", age: 35 },
  { name: "Reza", age: 24 },
  { name: "Sayed Reza", age: 20 },
  { name: "Jane", age: 30 },
  { name: "Mike", age: 28 },
  { name: "Sarah", age: 40 },
  { name: "David", age: 22 },
  { name: "Emily", age: 27 },
  { name: "Tom", age: 33 },
  { name: "Linda", age: 29 },
];

for (let i = 0; i < people.length; i++) {
  for (let j = i + 1; j < people.length; j++) {
    if (people[i].age < people[j].age) {
      const temp = people[i];
      people[i] = people[j];
      people[j] = temp;
    }
  }
}

// people.sort((a,b) => a.age - b.age);
console.log(people);

// 4
/* Write a notification function with JavaScript that will display the message in the desired location by getting the message and position (note that it takes four setting options from the user and the class setting is optional.) */
// show an element with the text 'Hello' near the right-top of the window
function showNotification({
  top = 0,
  right = 0,
  html = "",
  className = "",
} = {}) {
  const div = document.createElement("div");
  div.innerHTML = html;
  div.className = `notification ${className}`;
  Object.assign(div.style, {
    position: "fixed",
    top: `${top}px`,
    right: `${right}px`,
  });
  document.body.append(div);
}
showNotification({
  top: 100, // 10px from the top of the window (by default 0px)
  right: 100, // 10px from the right edge of the window (by default 0px)
  html: "Hello!", // the HTML of notification
  className: "welcome", // an additional class for the div (optional)
});

//-------------------------
// 5
const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};
// -----------
const ask2 = (question) => (yes) => (no) => {
  if (confirm(question)) yes();
  else no();
};
// -----------
