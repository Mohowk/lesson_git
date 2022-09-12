// !  = = = == = = = function declaration  = = = = = = =
// ? Функция это именованный блок кода, 
//который вызывается в нужных местах программы по имени. 
//Можно вызывать сколько угодно раз.
//Функции нам нужны, для того что бы не повторять 
//один и тот же код несколько раз.

// синтаксис function declaration:
// function название_функции(список_параметров){
//   блок кода, который будет отрабатыватся при каждом вызове функции
// }

// название_функции()


// function funcName(){
//   console.log("Hello JS 25!");
// }
// funcName();
// funcName();
// funcName();
// funcName();

// function func(name){
//   console.log(`Hello ${name}`);
// }
// func("Azamat");
// func("Azamat");
// func("Azamat");



// function calc(num1,num2){
//   let sum = num1 + num2;
//   console.log(eamfcnwecaC);
//   console.log(aвымыам);
//   return sum;
//   console.log(231241);
// }
// console.log(calc);
// calc(25,25);
// calc(30,15);
// calc(40,102);


// function checkTask(elem){
//   if (elem !== false) {
//     return;
//   }
//   console.log(`У этого значения тип данных ${typeof elem}`);
// }

// checkTask ("stroka");
// checkTask ("142421");
// checkTask ([3,4,4,5,]);
// checkTask ("true");
// checkTask ("false");

// function home(adress = "Kyrgizstan"){
//   console.log(`Адрес моего дома ${adress}`);
// }
// home ("Bishkek");


// !  = = = = Области видимости  = = = = = 

// let message = "А я в глобальной области "; // Глобальная область 

// function showMessage(){
//   let message = "Привет, я JavaScript";
//   console.log(message);
//   message= " А теперь в локальной";
// }
// console.log(message);
// showMessage();
// console.log(message);


// function nameFunc(){
//   console.log("world");
// }
// nameFunc();