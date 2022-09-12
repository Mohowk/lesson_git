// ! ----------------- Параметры и аргументы ---------------

// Параметры функции — это имена , перечисленные в определении функции. шаблон
// Аргументы функции — это реальные значения , передаваемые (и получаемые) функцией.
// function exampleFunc(параметры){

// }
// exampleFunc(аргументы)

// !  Стрелочные фунции

// Синтаксис
// let arraowFunc = (параметры) =>{
//  блок кода 
// }

//  let consoleFunc () => console.log("Hello");

//  function func1(localFunc){
//   localFunc();
//  }
//  func1(() => console.log("Hello"));

// function homeFunc(func){
//   func();
// }
// homeFunc(()=> console.log("Welcome!!!"));

// homeFunc(function(){
//   console,log("Goodbuy").
// });

// function calc (a, b){
//   return a + b;
// }
//  let sum = calc(3,4);
//  console.log(sum);


// let arrowF = (a,b)=>{
//   return a + b;
// }

// let arrowSum = arrowF (2, 5);
// console.log(arrowSum);


// ! = = = = = == =This = == = == 
// ? ключевое слово  this - это обращение к данным, родителя(обьекта)

// let obj = {
//   name: "Kani",
//   age: 23,
//   job:"Devops",
//   sayName: function(){
//     console.log(obj.name);
//   },
//   sayAge:() => obj.age,
//   sayJob: function work(){
//     return obj.sayJob;
//   }
// };

// console.log(obj2.sayName());
// console.log(obj.sayAge());

// let obj = {
//   name: "Kani",
//   age: 23,
//   job: "DevOps",
//   sayName: function () {
//     return this.name;
//   },
//   sayAge: () => this.age,
//   sayJob() {
//     return this.job;
//   },
// };
// console.log(obj.sayName());
// console.log(obj.sayAge());
// console.log(obj.job);

// let obj2 = { ...obj };
// obj2.name = "Mirdin";
// obj2.age = 23;
// obj2.job = "FrontEnd Dev";

// console.log(obj);
// console.log(obj2);
// console.log(obj2.sayName());
// console.log(obj.sayName());


// console.log(this);


// let global = {
//   name:"Lamborgini",
//   year: 2020,
//   obj:{
//     name:"Porshe",
//     sayCar:() => this.car,
//   }
// };

// console.log(global.sayCar());


// todo object.key(), todo object.values(), object.Assign, object.Enries(),object.hasOnProporitys



let myStr = "Hello";
let myNewStr = myStr.replace("H","$");
let myNewStr1 = myNewStr.replace("o","$");
console.log(myNewStr1);