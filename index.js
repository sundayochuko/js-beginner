// For beginners learning JavaScript, it's important to understand some fundamental functions and concepts. Here are a few key JavaScript functions and concepts that beginners should focus on:

// 1: console.log(): This function is used to log information to the console, which is useful for debugging.

console.log("Hello, world!");

// 2: Variables and Data Types: Learn how to declare variables and understand different data types.

const name = "John";
// let age = 25;
var email = "john";

// Examples of Data Types

// Strings "John"
// int ""
// number 330
// double => 970.00
// float
// boolean => true or false

// 3: Functions: Functions allow you to group code into reusable blocks.

function toCapitalLetter(name) {
  return "Hello, " + name + "!";
}

console.log("====================================");
console.log(toCapitalLetter("John"));
console.log("====================================");

// 4: Conditional Statements (if, else if, else): These statements control the flow of your program based on conditions.

// if (age < 18) {
//   console.log("You are a minor.");
// } else {
//   console.log("You are an adult.");
// }

let age = 31;

if (age < 19 || age === 19) {
  console.log("You are a minor.");
} else if (age === 20 || (age > 20 && age < 30)) {
  console.log("You are an adult.");
} else {
  console.log("You are too old to apply.");
}

// 5: Loops (for, while): Loops allow you to execute a block of code multiple times.

// for (let i = 0; i < 5; i++) {
//   console.log("Iteration " + i);
// }

let i = 0;

// while (i < 10) {
//   i++;
//   console.log(i);
// }

// 6: Arrays: Learn how to work with arrays, which are used to store lists of data.

// let colors = ["red", "green", "blue"];

// // Reasign a new value to colors array
// colors = ["red", "purple", "blue"];

// // colors.push("White");
// colors.pop("purple");

// console.log("====================================");
// console.log(colors);
// console.log("====================================");

// 7: Objects: Objects allow you to store and organize data using key-value pairs.

// let person = {
//   name: "Alice",
//   age: 30,
//   email: "alice@example.com",
// };

// 8: String Methods: Strings are a fundamental data type, and learning string methods is crucial.

let greeting = "Hello, world!";
// console.log(greeting);
// console.log(greeting.length);
// console.log(greeting.toUpperCase());
// console.log(greeting.toLowerCase());

// 9: Array Methods: Understand common array methods like push(), pop(), shift(), unshift(), slice(), etc.

let numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// numbers.pop(3);
// numbers.shift();
// numbers.unshift(0);
// numbers.slice(1, 2);
// console.log(numbers.slice(1, 3));

// 10: Event Handling: Learn how to handle events in the browser using functions.

document.getElementById("myButton").addEventListener("click", function () {
  alert("Button clicked!");
});
