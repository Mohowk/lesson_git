// FUNCTION DECLARATION
// ! HOISTING работает только с function declaration

// sayHello("Hello JS25"); // Hello JS25
// function sayHello(str) {
//   console.log(str);
// }

// !FUNCTION EXPRESSION
// sayHello("Hello js25"); // error
// let sayHello = function (str) {
//   console.log(str);
// };

// ! ARGUMENTS
// let consoleSmthng = function () {
//   console.log(...arguments); // 1 2 3 4 5
//   console.log(arguments); // Arguments[1,2,3,4,5]
// };
// consoleSmthng(1, 2, 3, 4, 5);

// let name = "Arlen";
// let describePerson = function () {
//   name = "Mirdin";
//   console.log(name);
// };
// describePerson();

// let calcDiscount = function (price, disc) {
//   return (price / 100) * disc;
// };
// let result1 = calcDiscount(1000, 50);
// console.log(result1);

// let ageOfUser = +prompt("Enter age");
// let isAdult = function (age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// };
// let resultOfChecking = isAdult(ageOfUser); //сохранение резуальтата функции

// let letUserPlay = function (result) {
//   if (result) {
//     alert("добро пожаловать в игру!");
//   } else {
//     alert("вы не можете играть");
//   }
// };
// letUserPlay(resultOfChecking);

let result = [17, 20, 15, 22, 40, 55]; // первый запрос на бэk

// for (let i = 0; i < result.length; i++) {
//   console.log(result[i]);
// }

// let result2 = ["Mirdin", "Begimay", "Arlen"];
// for (let i = 0; i < result2.length; i++) {
//    console.log(result2[i]);
//  }

// let consoleUsers = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
  
// };
// consoleUsers(result);
// consoleUsers(result2);




function checkTask(num){
  let array = num.toString().split('')
  for (i of array){
    
  }
}

console.log(checkTask(456));
