// 1. По координатам двух точек, которые вводит пользователь, определить уравнение прямой, проходящей через эти точки.
// Общий вид уравнения: y = kx + b; где k = (y1 - y2) / (x1 - x2), b = y2 - k*x2.
console.log("1. Уравнение");
var x1 = prompt("1.1. Введите координату Х для 1-ой точки","2");
var y1 = prompt("1.2. Введите координату Y для 1-ой точки","3");
var x2 = prompt("1.3. Введите координату Х для 2-ой точки","4");
var y2 = prompt("1.4. Введите координату Y для 2-ой точки","5");
console.log("x1 = " + x1);
console.log("y1 = " + y1);
console.log("x2 = " + x2);
console.log("y2 = " + y2);
var k = (y1 - y2) / (x1 - x2);
console.log("k = " + k);
var b = y2 - k*x2;
console.log("b = " + b);
console.log("y = " +k +"*x + " +b);
alert("Уравнение прямой: y = " +k +"*x + " +b);

// 2. Обменять значения двух переменных, используя третью (буферную) переменную.
console.log("2. Обменять значения переменных");
var x = 100;
var y = 200;
console.log("Было");
console.log("x ="+x);
console.log("y ="+y);
var z = x;
var x = y;
var y = z;
console.log("Стало");
console.log("x ="+x);
console.log("y ="+y);

// 3. Объявите две переменные: admin и name. Запишите в name строку "Василий". Замените значение из name в admin. Выведите admin.
console.log("3. Объявите две переменные");
var admin;
console.log("admin = " +admin);
var name = "Василий";
console.log("name = " +name);
admin = name;
console.log("admin = " +admin);
alert("3. Выведите admin: " +admin);

// 4. Получить от пользователя данные о пользователе: имя, фамилию, возраст. Обработать их и вывести на экран.
console.log("4. Получить от пользователя данные о пользователе");
var firstName = prompt("4.1. Введите Ваше имя","Павел");
console.log("firstName = " +firstName);
var lastName = prompt("4.2. Введите Вашу фамилию","Морозов");
console.log("lastName = " +lastName);
var age = prompt("4.3. Введите Ваш возраст","24");
console.log("age = " +age);
alert("Приветствую " +firstName +" " +lastName +", Ваш возраст " +age +" лет");

// 5. Запросите у пользователя его возраст, после чего выведите на экран модальное окно с вопросом: "Ваш возраст ...(введеное пользователем число) лет?". Далее в зависимости от выбора пользователя выводится модальное окно с информацией true или false.
console.log("5. Окно подтверждения");
var age = +prompt("5. Введите Ваш возраст","24");
var answer = confirm("Ваш возраст " +age +" лет?");
alert(answer);





