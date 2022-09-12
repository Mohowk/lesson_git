// ! Глубокая и поверхностное копирование 
// при создании обьекта выделяется отдельная ячейка памяти 
// при копировани обьекта копируется ссылка на него 

// ? Поверхностное копирование 

// let user = {
//   name:"John",
// };

// let admin = user; // Копируется ссылка на обьект
// admin.age = 24;
// admin.name = "Arlen";
// console.log(admin,user); 


// ? => ... <= это спред оператор Копирует 

// const itemsInCart = [
//   {product: "Носки", quantity: 3 },
//   {product: "Штаны", quantity: 1 },
//   {product: "Кепка", quantity: 1 },
// ];

// const clonedCart = [...itemsInCart]; 
// console.log(clonedCart, "исходный массив");
// console.log(clonedCart, "копия");


// clonedCart[1].quantity = 5;
//! Глубокое копирование 

// JSON - JAVASCRIPT object Notation
// JSON.srtingify() - Преобразует в строковый формат
// JSON.parse () - преобразует из строки обратно в 
// исходное состояние

// let jsonArr = JSON.stringify(itemsInCart);
// console.log(jsonArr);

// let parseArr = JSON.parse(jsonArr);
// console.log(parseArr);


// const itemsInCart = [
//   {product: "Носки", quantity: 3 },
//   {product: "Штаны", quantity: 1 },
//   {product: "Кепка", quantity: 1 },
// ];

// const deep = JSON.parse(JSON.stringify
//   (itemsInCart));
//   deep[1].quantity = 5;

//   console.log(itemsInCart, "исходный массив");
//  console.log(deep, "копия");
//  console.log(deep[0] == itemsInCart[0]);

  // const deep = JSON.parse(JSON.stringify(itemsInCart));
  // const deepparse = JSON.parse(deep);

  // ? // У этого метода есть ограничение — копируемые 
  // ? данные должны быть сериализуемыми. 
  // ? Если объект содержит методы или массив содержит функции, 
  // ? то копирование с помощью JSON-преобразования не сработает:

  // const fns = [
  //   function(){
  //     console.log("asd");
  //   },
  //   function(){
  //     console.log("bbb");
  //   }
  // ];

  // const copyFns = JSON.parse(JSON.stringify(fns));
  // console.log(copyFns);

  // !  Копировние с помощю цикла

//   const itemsInCart = [
//   {product: "Носки", quantity: 3 },
//   {product: "Штаны", quantity: 1 },
//   {product: "Кепка", quantity: 1 },
// ];

//   let copy = [];
//   for (let i of itemsInCart){
//     let obj = {};
//     for (let key in element){
//       obj[key] = element[key];
//     }
//      console.log(obj);
//     copy.push(obj);
//   }
  
//   console.log(copy[1]== itemsInCart[1]);
//   copy[1].quantity = 7;
//   console.log(copy,itemsInCart);

// const obj = {
//   name:"Erkinbek",
// };

// obj.name = "Kylym";
// obj = "asdf"; // error
// console.log(obj);


