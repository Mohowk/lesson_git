// !  = = =  Деструктуризация  = = = = == = = 

/**
 * Деструктурирующее присваивание – это специальный синтаксис,
 * который позволяет нам «распаковать» массивы или объекты
 * в кучу переменных, так как иногда они более удобны.
 *
 * Пример с инструментами, удобнее вытащить все инструменты
 * и работать. Нежели каждый раз открывать коробку с ними.
 */

// ? деструктуризация массива (по порядку)

/**
 * В массивах переменные можно называть
 * как угодно, но нужно задавать их
 * по правильному порядку.
 */




// let arr = [100,200,300,400,500];
//  let a = arr [0];
//  let b = arr [1];
//  let c = arr [2];
//  let d = arr [3];
//  let e = arr [4];
// let [a,b,c,d,e,] = arr;
// console.log(a,b,c,d,e);
// a = 800;
// console.log(arr);


// let newArr = ["Mirdin","Frontend Dev",
// "Bishkek","Toktogula",30];[
// let [name,job,adress] = newArr;
// ]

// name = "Aidana";
// adress [1] = "Bokonbaeva";
// console.log(adress);
// console.log(newArr);

// let str = ["T","r","o","b","l","m",];
// let [t,,,o,f] =str;
// console.log(t,r,l,m,);

// let food = ["eggs","butter","milk",
// "bread","irun","Shoro",];
// let [eggs, butter, milk,  ...all] = food;
// console.log(eggs,butter,milk);
// console.log(all);

/**
 * Переменная rest является массивом из оставшихся элементов.
 * Вместо rest можно использовать любое другое название
 * переменной, просто убедитесь, что перед переменной
 * есть три точки и она стоит на последнем месте в
 * деструктурирующем присваивании.
 */


// ? подмена переменных 

// let a = 1;
// let b = 2;
// console.log("a =", a);
// console.log("b",b); 
// let temp = a;
//  a = b;
//  b = temp;
// [a,b] = [b,a];
// console.log("==================")
// console.log("a =", a);
// console.log("b",b); 

// let name = 56 
// let lastName = "Michael";
// let age = "Jordan";


// [name, lastName, age] = [lastName, age, name];
// console.log("name =",name,"lastName",
// lastName,"age =", age);


// ? Деструктуризация обьекта 
// Обьекты нужно деструктуризовать по ключам.
// Порядок не имеет значения 

// let artist = {
//   starName: "Jackie",
//   lastName: "Chan",
//   job: "kostolom",
// };

// let {name, lastName, job} = artist;
// job = "artist";
// console.log(starName, lastName,job);
// console.log(artist);

let singer = {
  imya: "Elvis",
  familie: "Presley",
  position: "singer 1970",

};

// ? Перезапись ключей 

// let {imya: name, familie: lastName,
// position} = singer;
// console.log(name,lastName,position);

//? Перезапись в том случае, если вам нужно произвести 
//? деструктуризацию нескольких обьектов с одним и тем же ключами.
// ?В этом случае нельзя ппеременную с одним и тем же названием. 


// let obj1 = {
//   name:"Genri",
//   age:40
// };


// let obj1 = { 
//   name: "Genri", 
//   age: 40, 
// }; 
// let obj2 = { 
//   name: "Kris",
//   age:30,
// };
// let { name:name1, age:age1 } = obj1; 
// console.log(name1, age1); 
// let {name:name2,age:age2}= obj2; 
// console.log(name1.age2); 
// age1 = 56

// let trip = {
//   tripName: "Issyk-Kol",
//   date: "30.09.2022",
//   details: {
//     baggage: "10kg",
//     drink: "vodka, beer",
//     teplo: "obogrevatel",
//   },
// };
// let {
//   tripName,
//   date,
//   details: { baggage, drink, teplo },
// } = trip;
// console.log(tripName, date, baggage, drink, teplo);
// console.log(details);

// todo get:lagman and manty,sharik, KSTU,
// todo literature, Bishkek, mail index

let person1 = {
  name: 'Jack',
  age: 19,
  favoriteFood: ['Lagman', 'Manty'],
  pet: {
    name: 'Sharik',
    age: 2,
  },
  study: {
    university: 'KSTU',
    subjects: ['Math', 'Literature'],
    location: {
      str: 'Manas str 66',
      city: 'Bishkek',
    },
  },
};
