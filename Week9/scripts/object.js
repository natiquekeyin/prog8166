// function User(f, l, a) {
//   this.firstName = f;
//   this.lastName = l;
//   this.age = a;
//   this.loggedIn = false;
//   this.login = function () {
//     this.loggedIn = true;
//   };
//   this.logout = function () {
//     this.loggedIn = false;
//   };
// }

// let user1 = new User("Alan", "Smith", 22);
// let user2 = new User("Bob", "Smith", 23);
// let user1000 = new User("Zackary", "Hulan", 33);
// // console.log(user1);
// console.log(user2);

// console.log(user2);

// // console.log(user1000);

function User(f, l, a) {
  this.firstName = f;
  this.lastName = l;
  this.age = a;
}
User.prototype.loggedIn = false;

User.prototype.login = function () {
  this.loggedIn = true;
};

User.prototype.logout = function () {
  this.loggedIn = false;
};

let user1 = new User("Alan", "Smith", 20);
console.log(user1);
user1.loggedIn = true;
console.log(user1);

// Prototypal inheritance!
