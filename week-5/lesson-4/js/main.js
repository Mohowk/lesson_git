// let num = +prompt("Число");

// if (num % 2 ===0){
//   confirm.log("Число четное");
// } else {
//    console.log("Число не четное");
//   }



// ! ========================Обьекты =========================================


// let people1 = {
//   name: "Elvis",
//   lastName:"Prasley",
//   job: "singer",
//   age: 30,
//   nickName: "Elvy",
// }
// console.log(typeof people1[0]);
// console.log(people.lastName);
// console.log(people.lastName);
// console.log(people["lastName"]);


// // todo Задание. Найти разницу между двумя обращениями к ключам обьекта 

// people.nickName = "Elvy";
// people["nickName"] = "Elvy";
// console.log(people);
// delete people.nickName;

//  ? Spread operator

//  todo Найти один минус в spread операторе
//  let people2 = {...people1};
//  people2.name = "Лев";
//  people2.lastName = "Лещенко";
//  console.log(people2);
//  console.log(people1);



//  ! ======= Простые методы массивов === = == = = == 
//  ? ------------------- push /pop --------------


//  cинтаксис для всех методов массива
//  название_массива.метод_массива ()

// let friends = ["Harry", "Rohn", "Germiona", "Hagrid"];
//  console.log(friends.length);
//  friends[5] = "Dambldor";
//  friends[4] = "sdfg";
//  friends[1] = "Мирослав";
//  console.log(friends);

//  push
// friends.push("Mirdin", "Владислав");
// friends.push("Dambldor");

//  pop
// let friends1 = friends.pop();
//  console.log(friends1);



//  ? ========== shift/unshift =========


// friends.unshift("Tobby", "have", "sock");
// let tobby = friends.shift();
// console.log(tobby);

// let have = friends.shift();
// friends.push(have);
// friends.shift(); // have 
// console.log(friends.shift()); // sock

//  friends.shift(); // sock 

// console.log(friends);



//  push 

// friends.push("Mirdin","Владислав",);
// friends.push("Dambldor");


 // pop 

// let friends1 = friends.pop()



// ? === = = = = = = = = =shift/unshift = = = = = = = = = = = =

// friends.unshift("Tobby", "have", "sock",);
// let tobby = friends.shift();
// console.log(tobby);


//  let have = friends.shift();
// friends.push(have);
// friends.shift(); // have 
// friends.push (friends.shift()); sock

// console.log(friends);


// let drink = "vodka";
// switch (drink){
//   case "vodka":
//     case
//     console.log("Алкоголь вреден для здоровья");
//     break ;
// }



// ! = = = == = = = = = == = = = = = slice/splice


// ? //? Метод slice - копирует и возращает новый массив, 
// принимает индексы -  начальную позицию (с какого индекса начать ) 
// и конечную позицию(до какого элемента копировать, не включительно). 
// Синтаксис данного метода будет выглядеть так:

// название_массива.slice(начало, конец)

// let fruit = ["Apple","Pineapple","Banana",
// "Orange"];
// console.log(fruit.length - 1);
// let 

// let result = fruit.slice(1, 2);
// console.log(result);
// let art1 = [true,]


// let fruit = [
//   "Apple",
//   "Pineapple",
//   "Banana",
//   "Orange",
//   "Kiwi",
//   "Granat",
//   "Mango",
//   "Cherry",
// ];
// console.log(fruit.length - 1);
// let index = fruit.length - 1;

// console.log(fruit[5]);
// console.log(fruit[index]);
// let index = fruit.length;

// let result = fruit.slice(1,index);
// let res = fruit.slice();
// console.log(res);

//  let arr1 = [true, ]




//  ? //? Метод splice более функциональный, 
// т.к он может удалять и заменять элементы в произвольной части массива. 
// При этом метод splice изменяет изначальный массив.
//  Синтаксис данного метода выглядит так:
//  название_массива.splice(индекс, кол-во элементов для удаления, 
// элементы которые нужно вставить)
// Т.е если вам нужно просто удалить определенные элементы, 
// то в метод передается индекс, с какой позиции начать удаление, 
// и сколько элементов с этого индекса удалить:

// let fruit = [
//   "Apple",
//   "Pineapple",
//   "Banana",
//   "Orange",
//   "Kiwi",
//   "Granat",
//   "Mango",
//   "Cherry",
// ];
// console.log(fruit);
// fruit.splice(2, 0, "Lemon");
// console.log(fruit);


// ! ====== join/split/reverse/concat=====

// ? join - с помошью этого массива метода 

// можно обьеденить все элементы массива в одну строку

let joinedFruit = fruit.join("и");
console.log(joinedFruit);
let arr = ["m","a","k","e","r","s",];
let newArr = 






// ? split 
// let str = "makers";
// let newStr = str.split("");
// console.log(newStr);


//  ? revers
// let stringNumber = ["Fourth","Third",
// "Second", "First"];
// let reverseNumber = stringNumber


// let str1 = "нелрА";
// console.log()
// let str1 = "Hello";
// let splitStr = str1.split("")
// let str2 = str1.reverse();
// let joinStr = str2.join("");
// console.log(joinStr);


// ? concat 

let arr1 = [1,2,3,];
let arr2 = [4,5,6,];
let arr3 = [7,8,9,];
let allArr = arr1+arr2;
console.log(allArr);


// ! ========================================== Sort ============================ 

// let arr = [1,2,3,4,5,];
// arr.sort((a,b)=>a - b);// сортирует элементы по возрастанию 
// arr.sort((a,b)=> b - a);// сортирует по убыванию 
// console.log(arr);

let arr6 = [1,2,99,100,999,"888"];
arr4.sort((a, b )=> b - a);

let str = "asd";
console.log(typeof + str == "number");


let arr5 = [25, 142, 2, 6, 11, 9];
arr1.sort((a,b)=> a - b);
console.log(arr2);