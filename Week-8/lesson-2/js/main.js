// main (()=> {}) CallBack - Функция 



// let str = ["m", "a", "k", "e", "r", "s"];

// let newForEach = str.forEach((elem) => elem);

// let newMap = str.map((elem) => elem);

// console.log(newForEach);
// console.log(newMap);

// let newFilter = str.filter((elem) => elem !== "a");
// console.log(newFilter);

// let arrowFunc = (prev, current, index, array)=>{

// }

// let str = ["m", "a", "k", "e", "r", "s"];

// let newReduce = str.reduce((prev, current) => {
//   prev = prev + current;
//   return prev;
// }, "Hello ");
// console.log(newReduce);

// 1 круг - prev = "Hello ", current = "m", "Hello m"
// 2 круг - prev - "Hello m", current = "a", "Hello ma"
// 3 круг - prev - "Hello ma", current = "k", "Hello mak"
// 4 круг - prev = "Hello mak", current = "e", "Hello make"
// 5 круг - prev - "Hello make", current = "r", "Hello maker"
// 6 круг - prev - "Hello maker", current = "s", "Hello makers"

//TODO У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// let users = [
//   { name: "Kim", age: 41 },
//   { name: "Kortney", age: 42 },
//   { name: "Khloe", age: 37 },
//   { name: "Kendall", age: 26 },
//   { name: "Kylie", age: 24 },
// ];


// let userName = users.map((elem) => {
//   return elem.name;
// });

// console.log(userName);

// let sum = users.reduce((prev,current) => {
//   prev += current.age / users.length;
//   return prev;
// },0);

// console.log(sum);

//TODO  Дан массив с числами. Оставьте в нем только отрицательные числа.
// let arr = [1, -3, 5, 6, -7, 8, 9, -11];



// ? find - возвращает значение первого найденного в массиве,которое удовлетворяет условию переданному в CallBack
// функцию. Если не находит то возвращает undifined


//   let users = [
//   { name: "Kim", age: 41, status: female },
//   { name: "Kortney", age: 42, status: female},
//   { name: "Khloe", age: 37, status: female},
//   { name: "Kendall", age: 26,status: female },
//   { name: "Kylie", age: 24, status: female},
//   { name: "Kim", age: 52,status: female },
// ]; 

// let findName = users.find((elem) => elem.name == "Kim");
// console.log(findName);

// ? findIndex - возвращает индекс в массиве, если элемент 
// ? совпадает с условием проверяющей функции. В противном случае вернет-1 

// let findIndexRes = users.findIndex((elem) => {
//   return elem.name === "Kendall";
// });

// console.log(findIndexRes);

// let strName = "Hello"
// strName = strName.split("");
// let notLetter = strName.findIndex((elem) =>{
//   return elem === "e";
// });

// strName.splice(notLetter,1);
// console.log(strName.join(""));

// ? EVERY - проверяет удовлетворяет ли все элементы 
//? массива условию,заданному в передаваемой функции. 

// let everyRes = users.every(elem => {
//   return elem.status === "female";
// });

// console.log(someRes);

// let someRes = users.some((elem) => {
//   return elem.status === "male";
// });
// console.log(someRes);

// ? indexOf - возвращает первый индекс,по которому данный элемент может быть найден в массиве или - 1,
 // ? если такого нет Разница между indexOf  в том что indexOf не принимает в качестве аргумента CallBack функцию

//  let numbers = [ 1999,2000, 2001, 2002, 2003,];
//  let showIndex = numbers.indexOf (2001);
//  console.log(showIndex);

// ? includes - определяет, содержит ли массив определенный элемент, 
//? возвращая в зависимости от этого true или false

// let person = ["Azret","Mirdin","Aliya","Aidana"];
// let happyBirthday = person.includes("Aliya");
// console.log(happyBirthday);