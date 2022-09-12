//! ---------------Коллбэк функции-----------------------
// Для того, чтобы работать с более продвинутыми методами массивов нужно понять что такое функция-коллбэк. 
// Коллбэк это функция, которая передается как аргумент другой функции и вызывается внутри этой функции. 
// Ключевая идея в том, что мы передаём функцию и ожидаем, что она вызовется обратно когда-нибудь позже, 
// если это будет необходимо(от англ. «call back» – обратный вызов).
// Рассмотрим такой простой пример:

// function callBack(x){
//   console.log("Коллбек начал работать")
//   console.log(x);
//   console.log("Коллбек завершил свою работу");
// }

// function main (y){
//   console.log("Основная функция начала работать");
//   callBack(y);
//   console.log("Основная функция завершила свою работу");
// }

// main("Hello");


// ! = = = = Сложные методы массива  = = = = = = = = 


// let arr = ["Gulnara","Myrza","Jakshylyk","Arman","Zuhra","Azamat",];

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// for (let i of arr ){
//   console.log(i);
// }

// ? forEach - выполняет указанную функцию один раз для каждого элемента в массиве.
 // Ничего не возвращает (не создает новый массив)

 // синтаксис:
 // название_массива.forEach((element,index,)=>{код})


 // !  = = = = elem, index Соблюдать порядок надо = = = == 
 
 
//  arr.forEach((elem,index,array)=>{
  // console.log(`Элемент-${elem},{индек-$}`);
  // console.log(array);
//  });


// !  = = = == Return внутри не работает = = = = =

//  let newArr = arr.forEach((elem,index)=>){
//   return elem; 
//  };

//  console.log(newArr); 


// ! = = = = = = = Функция выссшего порядка  = = = = = ==

// ? map - создает новый массив,с результатом вызова указанный 
// функции для каждого элемента массива 

// let arr = ["Gulnara","Myrza","Jakshylyk",
// "Arman","Zuhra","Azamat",];

// let newArr = arr.map((elem,index,array)=> {
//  return elem;
// })
// console.log(newArr);


// newArr[0] = "Arlen";
// console.log(newArr);
// console.log(arr);

// let arr2 = arr;
// arr2[0] = "Azamat";
// console.log(arr);
// console.log(arr2);

// let personAge = [
//   { name: "Joly", age: 50 },
//   { name: "Antonio", age: 55 },
//   { name: "Bred", age: 40 },
//   { name: "Zoya", age: 25 },
// ];


// let newPerson= personAge.map((person)=>{
//   if (person.age >= 50){
//     return person;
//   } else {
//    return "возраст меньше 50";
//   }
// });

// console.log(newPerson);

// let newPerson1 = [];
// personAge.forEach((elem)=>{
//   if (elem.age >= 50){
//     newPerson1.push(elem);
//   }
// });

// ? filter - создает новый массив со всеми элементами,котрые прошли проверку 

// let newAge = personAge.filter((elem) => {
// return elem.name[0] >= 50; 
// });
// console.log(newAge);


// ? reduce - применяет функцию reduce к 
// каждому элемнту массива (слева-направо),
// возвращая одно значение.

// let amount = 0;
// for (let i = 0; i <= 10; i++){
//   amount = amount +1;
// }

// console.log(amount);


let personAge = [
  { name: "Joly", age: 50 },
  { name: "Antonio", age: 55 },
  { name: "Bred", age: 40 },
  { name: "Zoya", age: 25 },
];

let amount = personAge.reduce((acc,current,
  index,array) => {
    // console.log("acc",acc);
    // acc = acc + current.age;
    // acc.push(current);
    acc[`obj${index}`]= current;
    return acc;
  }, {});

  console.log(amount);




