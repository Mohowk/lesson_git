// ! ===========Переменные ==========
// ? Переменная - это именованное хранилище данных.
// ? Три ключевых слова для создания переменных - let, const, var

// ? let - современный способ создания переменной. В будущем можно изменить информацию внутри переменной.

// * После ключевого слова, записывается название переменной
// TODO Правило написания названия переменной:
// 1) должно содержать только буквы и цифры;
// 2) первый символ не должен быть цифрой;
// 3) запрещено писать символы, кроме $ (знака доллара) и _ (нижнего подчеркивания)
// 4) желательно писать на латинице;
// 5) не должно совпадать с зарезервированным словом (let const);
// 6) переменные из нескольких слов пишутся через camelCase или snake_case;
// 7) записываем подходящее по логике название;
// 8) регистр имеет значение

let age; // Обьявление переменной, но не сохранение инфы.(Инициализация)

let name1;
//let 1name;//
let $name;
let _name;
let имя;
let Name;

//* После название переменной ставится знак =
// (равно)-это не сравнение. Это присваивание.
// Затем помешаем какую-то информацию.

let title = "JavaScript";
// todo повторно обьявлять переменную с одним и тем же названием Запрещено !
let Title = "Python";
console.log(title);
console.log(Title);
console.log("Hello World");
let lastName;
lastName = "Jackson";
lastName = "Michael";
console.log(lastName);

//const
const variable = "Trouble Makers";
// variable = "JS25";
console.log(variable);

// var
var model = "Apple";
model = "Samsung";
var model = "Xiaomi";
console.log(model);

// ! ========== Типы данных =======
// typeof-с помощю этого оператора, можно узнать тип данных переменной (и информации)

let id = "Строка";
//  console.log(typeof id); //String

id = 2022;
console.log(typeof id); // Number

id = true;
id = false;
console.log(typeof id); //Boolean

id = Symbol();
console.log(typeof id); //Symbol

id = 234982370480n;
console.log(typeof id); // BigInt;

id = null;
console.log(typeof id); // Null (Пустота) Для значения null оператор typeof возвращает значение object, несмотря на то, что null отдельный тип данных

id = undefined;
console.log(typeof id); // Undefined

id = {
  name: "Tom",
  null1: null,
  bull: false,
  num: 123456,
};
//  Объект создаётся при помощи {}, внутри пишется ключ: значение
console.log(typeof id); // object

// ! =======null vs undifined=======
let home;
console.log(home);

home = null;
console.log(home);

// Если обявили

// ! ===== Коприрование данных ====
let Student = "Mike";
// let Student2; = Student1;
// console.log("Студент-1:", "Студент-2:,"Student1, student2);

// !==== Hoisting=======

// todo Хойстинг - это поднятие Название Переменной var( но не значение ) до её обьявление
// let upVariable = "C переменной let хойстинг не работает";

var upVariable;
//  console.log(upVariable);
var upVariable = "Хойстинг работает только на переменной var";

// ! ======= Обьекты ======
const person = {
  name: "Anton",
  age: 23,
  job: "FrontEnd Dev",
  bull: false,
  salary: 30000n,
  nickName: Symbol("Antoxa"),
  girlfriend: null,
  car: {
    model: "Mersedes",
    color: "silver",
    year: 1994,
  },
  "last name ": "Washington",
};

console.log(person.name);
console.log(person.age);
console.log(person.car.model);
person.age = 24;
console.log(person["job"]);

// ! =======Массивы ========
// Array, или массив это специальный тип данных который также как 
//и объект может хранить в себе другие типы данных(на самом деле array
// является родственником объекта). Массивы в JS обозначаются квадратными скобками [].
// Особенностью массива является то что он упорядочен, т.е при его создании JS автоматически дает порядковые номера элементам внутри массива.
// Эти порядковые номера начинаются с нуля и называются "индексами".

// 0       1                   2                        3

let mentors = ["Nargiza", "Azret", "Aliya", [20, 21, 22]];
//   0    1    2
console.log(mentors.length);
console.log(mentors[3][1]);
console.log(typeof mentors);

// ! ====== Арифметические операции ========

// для сложения
console.log(25 + 25);

// Вычитание

console.log(20 - 5);

// Умножение

console.log(2 * 2);

// Деление
console.log(20 / 5);

// Возвеление в степени
console.log(2 ** 2);

// Oстаток от деления
console.log(10 % 7);

// Конкатенация
console.log("2" + 2);
let str1 = "Hello ";
let str2 = "World";
let str3 = str1 + str2;
// console.log(str3);
// console.log("100" - 50);

// ! ==== Интерполяция ===========

// * Для того чтобы отобразить в консоли текст и переменную, нужно написать текст в кривых кавычках, а переменную обернуть в знак доллара с фигурными скобками. Это называется интерполяция.

let phone = "Iphone 13 Pro Max";
console.log(`Я купил себе ${phone}`);
  
// alert, propmt, confirm
// alert("Здравствуйте Mirdin!");
// confirm("Вам есть 18?");
// let agePerson = prompt("Сколько вам лет?");
// console.log(agePerson); 


