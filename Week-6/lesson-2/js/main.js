// Святосла

// let arr1 = arr1[0].concat(arr1[1], arr1[2]);
// console.log(arr1);
// for (i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// }

// Зухра

// const arr3 = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ];
//   let arr4 = arr3.flat();
//   for (let i = 0; i < arr4.length; i++) {
//     console.log(arr4[i]);
//   }

// let names = ["maria", "nikita", "andrey", "azret"];
//  for (let name of names) {
//   name = name.charAt(0).toUpperCase() + name.substr(1);
//   console.log(name);
//  }

// ! = = = == = = break/ contniue  == = = = = ==
// ?  спомощю break,  можно преждевременно
// остановить цикл, не дожидаясь пока условие вернет
//  false

//  let arr = [ 2, 3, 4, 0, 5, 6, 7];
//  for (let i = 0; i < arr.length; i++){
//      if (arr[i]=== 0) {
//       console.log("мы нашли нолик");
//       break;
//      }
//      console.log(arr[i]);
//  }

// let arr = ["Misha", "Alexs", "maria",
// "Azret"];

// for (let i = 0; i < arr.length; i++ ){
//   let letter = arr[i][0].toUpperCase();
//    console.log(letter);
//    "M" !== "m"
//   if (letter === arr [i][0]){
//     console.log("В массиве есть первая буква маленькая");
//      break;
//   }
//   console.log(arr[i]);
// }

// ? continue
// Используя continue, можно остановить текущий круг цикла, но перейти к следующему кругу

// let nums = [-3,-2,-10,1,2,3,4,5,];
// for (let i = 0; i < nums.length;i++){
//   if (nums[i]< 0){
//     continue;
//   }
//   console.log(nums[i]);
// }

// let arr = ["a", "bc", "bcd", "hello", "goodbuy"];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length >= 3) {
//     console.log(arr[i]); 
//   }
// }

// ! = = = = = = =  while = = = = =
// Цикл while также может использоваться для многократного повторения одного участка кода.
// Если в цикле for мы примерно знаем сколько раз отработает код, т.к там есть шаг и условие зависящее от шага, то в цикле while это может быть не таким очевидным. К примеру цикл while, можно написать так: "пока пользователь вводит неправильный пароль выводи такое-то сообщение", т.е здесь пользователь может совершить действие как 10 так и 1000 раз и цикл for для такой работы не подойдет.

// Синтаксис цикла while, выглядит данным образом:
// while (условие) {
// тело цикла
// }

// let password = null;
// let count = 0;
// while (password !== "qwerty"){
//   count++;
//   if (count> 3){
//     console.log("Вы три раза не правильно ввели пароль, повторите через час ! ")
//     break;
//   }
//    password = prompt ("Enter password");
//    password !=="qwerty" ? alert ("Пароль не верный"):null;
// }

// let cars = ["Mers", "Porsh","Bugati",
// "BMW","Golf","Kia","Honda",];

// let i = 1;
// while (i< cars.length){
//   i++;
//   console.log(cars[i]);
// }

// let arr = ["Misha", "Alexs", "maria",
//  "Azret"];

//  let i = 0;
//  let editedArray = [];
//  while (i < array.length){
//    let newArr = array [i].split("");
//    newArr[0] = newArr [0].toUpperCase();
//    newArr = newArr.join("");
//    editedArray.push(newArr);
//    i++;
//  }
//  console.log(editedArray);
