// console.log("HEllo world");
// console.log("JS is FUN!!");
// let x = 10;
// // let X = 12;
// /* helo.
// lsdflkdsjf
// s
// sdfs
// dfsd*/

// const pi = 3.14159;
// let radius = 4.2;
// let area;

// area = pi * radius * radius;
// console.log("Area = " + area);

// let x = 10;
// console.log(x++);
// console.log(++x);
// console.log(x--);
// console.log(--x);//10

// let x = 10;
// while (x++ > 10) {
//   console.log("Hello");
// }

// console.log(x);

// let x = 0;
// let name1 = [];

// name1[x++] = 10;
// name1[++x] = 20;

// console.log(name1);

// let age = "20";

// // if (age === 20) {
// //   console.log("Welcome");
// // } else {
// //   console.log("Bye");
// // }

// console.log(typeof age);
// age = 12;
// console.log(typeof age);

// let name1 = "Alan";
// let age = 20;

// console.log("Welcome " + name1 + " Your age is " + age + " !!!!");
// console.log(`Welcome ${name1.toUpperCase()} Your age is ${age} !!!!`);

// Function declarations..
// function foo() {}

// function square(n) {
//   return n * n;
// }

// function add(a, b) {
//   return a + b;
// }

// Function expressions: Expresssion?
// let foo = function () {}; //anonymous...

// let square = function (n) {
//   return n * n;
// };

// let add = function (a, b) {
//   return a + b;
// };

// let foo = () => {};

// let square = (n) => n * n;
// let add = (a, b) => a + b;

// console.log(foo());
// console.log(square(5));
// console.log(add(4, 5));

// function myLog(a) {
//   console.log(a);
// }

// myLog();
// myLog("Hello");
// myLog("Hello", "World");

// arguments:

// function myLog(a) {
//   let count = arguments.length;
//   for (let i = 0; i < count; i++) {
//     console.log(a, count, arguments[i]);
//   }
// }

// // myLog();
// // myLog("Hello");
// myLog("Hello", "World", "Some", "Text", "More");

// rest operator ... (three dots...)

function myLog(a, b, ...numbers) {
  let count = numbers.length;
  for (let i = 0; i < count; i++) {
    console.log(numbers[i]);
  }
}

myLog(1, 2, 3, 4);
