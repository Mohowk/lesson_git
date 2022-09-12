// ! Методы обьекта 

let obj = {
  name: "Billy",
  lastName: "Jean",
  zero: null,
  bool: false,
};

// ? object.keys()- создаем массив ключей обьекта 

// let keyArr = object.keys(obj);
// console.log(keyArr);

// ? object.values()- создает массив значении обьекта 

// let valArr = obj.values(obj);
// console.log(valArr);



// ? Object.assign() - копирует ключ/значение из одного объекта в другой, но не считается поверхностным копированием

// let obj1 = {
//   car: "Kia",
//   model: "Rio",
//   year: 2018,
// };

// let obj2 = {
//   color: "grey",
//   country: "KG",
// };




// let obj3 = { ...obj1, ...obj2 };
// let obj3 = Object.assign(obj1, obj2);
// obj3.car = "Hyndai";
// console.log(obj1);
// console.log(obj3);

// ? object.enries()- выдает массив пары ключ/значение

// let keyVal = object.entries(obj);
// console.log(keyVal);


// ? object.hasOwnProperty()- возвращяет логическое значение (true|fale),
//указывающее, содержит ли обьект указанное свойство

let home = {
  address:"Bishkek",
  street:"Chuy",
  number:"29",
};

// let bool = home.hasOwnProperty("street");
// console.log(bool);

// ? object.freeze()-   замораживает обьект,
// после применения этого свойства,
// в обьект нельзя ничего добавить и изменить  

// Object.freeze(home);
// home.street = "Moscow";
// console.log(home);

// Аргументы

// function func(a,b,c,d,){
// for (let i of arguments);
// console.log(i);
// }
// func(2,3,4,5,6,7,8,9,);

// let func2 = function(){
//   console.log(arguments);
// };

// func2 ( "h", "f", "g", "g", "e",);


// function def (a = 1, b = 1){
//   return a + b;
// }

// console.log(def(5,5));

// ! = = = = = =makers  task 10  = = == = 

function checkTask(word) 
  //   let newWord = word.split("");
  //   newWord = newWord.reverse();
  //   newWord = newWord.join("");
//   let newWord = word.split("").reverse().join
//   ("");
//   if (newWord.toLowercase) {
//     toLowercase(())
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkTask(str));
// checkTask("lol");


//TODO 2. Дан объект user. 
// Напишите метод byTicket для этого объекта. 
// При вызове метода количество билетов должно увеличиваться на единицу, 
// при условии, что у пользователя будет достаточно средств на балансе. Также, 
// с баланса должна сниматься стоимость билета (400).
// Если на счету недостаточно средств вывести соответствующее сообщение.

// let user = {
//   name: "Sam",
//   age: 17,
//   balans: 700,
//   tickets: 0,
// };

// user.buyTicket = function(){
//   if (this.balans >= 400){
//     this.balans -= 400;
//     this.tickets++;
//     console.log("Вы успешно приобрели билет")
//   } else {
//     console.error("У вас не достаточно средств на балансе");
//   }
// };

// user.getBalanse = function(){
//   let sum = +prompt("Enter money");
//   this.balans += 150;
// }


// console.log(user.tickets);
// console.log(user.balans);
// user.buyTicket()
// console.log(user.tickets);
// console.log(user.balans);
// user.getBalance();
// user.buyTicket()
// console.log(user.tickets);
// console.log(user.balans);



//TODO 1. Дан объект passenger. Напишите метод для этого объекта,
// который возвращает информацию о пассажире. Также, 
// напишите второй метод, который меняет 
// значение свойства baggage на то значение, 
// которое получает в качестве параметра.

let passenger = {
  firstName: "Sam",
  lastName: "Winchester",
  passportNum: "US12345678",
  baggage: 20,
};
// Пример
passenger.getInfo(); // Passenger Sam Winchester. 
// Passport number is US12345678. Maximum luggage weight is 20kg

passenger.setBaggage(30);
passenger.getInfo(); // Passenger Sam Winchester. 
// Passport number is US12345678. Maximum luggage weight is 30k


passenger.getInfo = function () {
  console.log(
    `Passenger ${this.firstName}. Password number is ${this.passportNum}
    . Maximum baggage weight is ${this.baggage}`
  );
};

passenger.setBaggage = function () {
  let baggage = +prompt("Enter your weight");
  this.baggage = baggage;
};

passenger.getInfo();
passenger.setBaggage(30);
passenger.getInfo();




