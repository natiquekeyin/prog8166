// const pi = 3.14159;
// let radius = 4.2;
// let area;

// area = pi * radius * radius;
// console.log("Area = " + area);

// let x = 0;
// console.log(x++); //0
// console.log(++x); //2

// let x = 0;
// while (x++ > 0) {
//   console.log("hello");
// }

// let x = 10;
// console.log(typeof x);
// if (x === 10) {
//   console.log("Hello");
// } else {
//   console.log("Bye");
// }

// let age = 20;
// age > 18 ? console.log("Welcome") : console.log("Underage");

// let age = 20;
// console.log("Welcome your age is " + age + "!!");
// console.log(`Welcome your age is ${age}!!`);

// function foo() {
//   return;
// }

// function square(n) {
//   return n * n;
// }

// function add(a, b) {
//   return a + b;
// }

// console.log(foo());
// console.log(square(5));
// console.log(add(4, 2));

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

// function myLog(n) {
//   console.log(n);
// }

// myLog();
// myLog("Hello");
// myLog("Hello", "world");

// function myLog(a) {
//   let count = arguments.length;
//   for (let i = 0; i < count; i++) {
//     console.log(a, count, arguments[1]);
//   }
// }

// myLog("Hello", "World");

// ... "rest" operator...
function myLog(a, ...numbers) {
  let count = numbers.length;
  for (let i = 0; i < count; i++) {
    console.log(numbers[i]);
  }
}

myLog(1, 2, 3);
