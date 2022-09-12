// !  = = = = = = = Цикл for. . . in ? for . .. of  = = = = = =


// ? - ------------ for .. in -----------
// Цикл for .. in выполняет итерацию( перебор) 
// по свойствам обьекта (по ключам  у обьекта, по индексам у массива)

// синтаксис for .. in 

// for (let i in название_обьекта ){
//  код, который будет повторятся 
// }

// let obj = {
//   nqme: "John",
//   lastName:"Johns",
//   status:"alive",
//   age:56,
//  i:78,  
// };
// console.log(obj);
// console.log(obj["name"]);

// for ( let i in obj) {
//   console.log(obj);
//   console.log(obj[i]);
// }                                          


// let arr = [23, true, "text","56","Hello",890];
// for (let i in arr){
//   console.log(arr[i]);
// }


// ?  ---------------------for...of  -------------------------


// Цикл for .. of перебирает итерируемые(упорядоченные)
// обьекты

// синтаксис 
//for (let i of название_массива){
//  код,котрый будет повторятся
// }


// let arr = [12,34,56,78,90];

// let obj = {
//   name:"UX/I",
//   status:"start",
// }


// for (i of arr ){
//   console.log(i);
// }


// !    =========== do ... while = = = = = = = =


// Цикл do...while вначале выполняет тело цикла, а затем проводит проверку условия.
// Представить данный цикл можно так, вы можете зайти в автобус(действие цикла), и только потом оплатить поездку(проверка условия).
// Синтаксис выглядит таким образом:
// do {
// тело цикла
// } while (условие);
// То есть, такой цикл вам будет удобно использовать если вы хотите, чтобы тело цикла выполнилось хотя бы один раз, даже если условие возвратит false.
// Допустим, мы должны проехать путь в 3 км, мы в любом случае, в начале выедем в путь, и только потом мы начнем проверять сколько проехали, чтобы не пропустить свой поворот:


// let km = o;

// do {
//   console.log("Ещё едем");
//   km++;
// } while (km < 5);

// do {
//   console.log("Сработает");
// } while (false === true);

// while (fauls === true){
//   console.log("Не Сработает");
// }

// ! = = == = = = tsak  = = = === = 
   

// task 6 
let str = "#";
for (let i = 0; i < 7; i++);{
  console.log(str);
  if (str.length === 0){
    str = str +" # ";
    }
}

// шаг 1 - str = "#"
// шаг 2 - str = "##"
// шаг 3 - str = "###"
// шаг 4 - str = "####"
// шаг 5 - str = "#####"
// шаг 6 - str = "######"
// шаг 7 - str = "#######"


// let arr = [1000,1000,1000,1000,1000,1000,1000,
//   1000,1000,1000,];

//   for (i of arr){
//     if(i !==1000){
//       break;
//     }
//     console.log(arr)
//   }


// [
//       {name: 'Jack', age: 15},
//       {name: 'Helen', age: 34},
//       {name: 'Tom', age: 20},
//       {name: 'Bob', age: 54},
//       {name: 'Jessica', age: 13}
// ]

// console.log(arr[0].arr1)


// let arr = [
//   { model: "Iphone", price: 10000, arr1: [{ color: "black", memory: 256 }] },
//   { model: "Samsung", price: 20000 },
//   { model: "Xiaomi", price: 30000 },
//   { model: "Nokia", price: 1000 },
// ];

// console.log(arr[0].arr1[0]);


let arr = [[1, 2], [3, 4], 

true, "World", [5, 6], [7, 8], 
"Hello",

{name: "Kani", age: 23 },
];

// let str ="asfs";
// console.log(Array.isArray(str));

for (i in arr){
  if (Array.isArray(arr[i])){
  console.log(arr[i]);
  for (j of arr [i]){
    console.log(j);
  }
} 
}
