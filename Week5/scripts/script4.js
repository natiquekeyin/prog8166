// const pi = 3.14159;
// let radius = 4.2;
// let area;

// area = pi * radius * radius;
// console.log("Area = " + area);

// let x = 10;
// console.log(x++);
// console.log(++x);

// let x = 1;
// while (x++ > 10) {
//   console.log("hi");
// }

// let x = [1, 2, 3];
// let i = 0;
// console.log(x[i++]);
// console.log(x[i]);

// coercion

// let age = "20";
// if (age === 20) {
//   console.log("hi");
// } else {
//   console.log("Bye");
// }

// let age = 10;
// console.log(typeof age);
// age = "ten";
// console.log(typeof age);

// let age = 10;
// age > 18 ? console.log("Welcome") : console.log("Underage");

// let name1 = "Alan Smith";
// let age = 20;

// console.log("Welcome " + name1 + " Your age is " + age + "!!!");
// console.log(`Welcome ${name1} Your age is ${age}!!!`);

// declarations

// function foo() {} // a function implicitly returns undefined if no return is used..

// function square(n) {
//   return n * n;
// }

// function add(a, b) {
//   return a + b;
// }

// Function expressions

// let foo = function () {}; //anonymous...

// let square = function (n) {
//   return n * n;
// };

// let add = function (a, b) {
//   return a + b;
// };

// Arrow functions...
// let foo1 = () => {};

// let square1 = (n) => n * n;

// let add1 = (a, b) => a + b;

// console.log(foo1());
// console.log(square1(5));
// console.log(add1(4, 5));

// function myLog(a) {
//   console.log(a);
// }

// myLog();
// myLog("Hello");
// myLog("Hello", "World");

// function myLog(a) {
//   let count = arguments.length;
//   for (let i = 0; i <= count; i++) {
//     console.log(a, count, arguments[1]);
//   }
// }

// myLog(); //no output
// myLog("Hello");
// myLog("Hello", "World");

// ... is calle "rest" operator...
// function myLog(a, ...numbers) {
//   let count = numbers.length;
//   //   console.log(a);
//   for (let i = 0; i < count; i++) {
//     console.log(numbers[i]);
//   }
// }

// myLog(10, 2, 3, 4, 5);

/* 
Practice Question:
Write a function findMatches() that accepts one argument and a list of numbers... and prints how many times the number has appeared in the list...

findMatches(2,1,2,3,2) will print 2
findMatches(2,1,2,3,2,6,2,4,2) will print 4

When you submit it .. on my private chat...This will be attendance for today :)

*/
