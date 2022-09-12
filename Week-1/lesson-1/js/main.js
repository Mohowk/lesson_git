// ! ====== Модальные окна ====

// alert("Hello User");

// let age = prompt("Сколько вам лет?",20);
// console.log(age);

// let name = prompt("enter your name:");
// alert('Здавствуйте,${Azamat}');

// let bull = confirm("Вам есть 18?");
// console.log(bull);


// ! ======== Операторы сравнения ======
// Операторы всегда возвращяют тип данных boolean

// 20<15;
// console.log(20>15);
// console.log(20>15);
// console.log(20 <= 20);
// console.log("20" >= 20); // не строгое 
// равенство,приводит к обшему типу ланных, 
// а потом сравнивает 
// значение 
// console.log("20" == 20);
// console.log("20 == "21);
// равенство === не приводит к обшему типу данных, 
// cравнивает и тип данных и сравнивает значения 

let answer = prompt("Солько вам лет?");
console.log(typeof answer);
console.log(answer === 18);


// todo Найти все операторы, которые меняют тип данных
// в number и найти в раздичии 

// Bolean
// console.log(Bolean("Mirdin")); // true
// console.log(Bolean("")); // false
// console.log(Bolean("")); // true
// console.log(Bolean("")); //false
// console.log(Bolean("-2")); // true
// console.log(Bolean("undifined")); // false
// console.log(Bolean({})); // true
// console.log(Bolean([])); // true 


// todo ===== Ложные значения ======
// 0 
// null
// undifined
// ""
// false


// ! ======= Логические операторы  ======

// todo ===== && (и) - возвращает если оба значения true если 
// оба значения true
// let age = +prompt("Введите ваш возраст:");
// console.log(age >=5 && age <= 14);

// console.log(true && false);
// console.log("" && "");
// console.log(-5 && "Hello");
// console.log(true && false && true);

// todo ==== ||(или)- если хоть одно условие true,то весь резултат будет true

// console.log(flae || true);
// console.log(flase || );
// console.log(false || true || false );
// let age1 = 19;
// console.log(age1 > 21 || age1 < 30);


console.log(""|| 22 || null || true || undefined );


// todo Комбинирование логических операторов

console.log(true || false && true)
console.log(true || true && false || (true && false|| true));

console.log( "hello" && 0 || -5 && 997 >= 654);
// 1 - ("hello" && 0) = false 
// 2 - (-5  && 997 >= 654) 
// 2.1 - 997 >= 654 = true
// 2.2 - (-5 && true )= true 


// false || true 

// todo ==== Оператор ! (не) - отрицание. сначало приводит значение к логическому типу данных (true/false), затем превращает противополжное значение 

console.log(!true);//
console.log(!"");// false
 console.log(!-0);

// let age2 = 50; 
//  console.log( age2  != 30);
//  console.log(!null || (-0 && !"" undefined && 30 !== "25" )|| "hello");


console.log(!!false);
console.log(!!" ");
console.log(!!" ");










