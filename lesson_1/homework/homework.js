// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log("*** Створити змінні, присвоїти значення, переприсвоїти значення, вивести ***")
document.write('<b> Створити змінні, присвоїти значення, переприсвоїти значення, вивести</b><br/> ')

let num1 = 'hello';
console.log(num1);
alert(num1);
document.write(`<p>${num1}</p>`);
num1 = 'bye';
console.log(num1);
alert(num1);
document.write(`<p>${num1}</p>`);

let num2 = 'owu';
console.log(num2);
alert(num2);
document.write(`<p>${num2}</p>`);
num2 = 'uow';
console.log(num2);
alert(num2);
document.write(`<p>${num2}</p>`);

let num3 = 'com';
console.log(num3);
alert(num3);
document.write(`<p>${num3}</p>`);
num3 = 'moc';
console.log(num3);
alert(num3);
document.write(`<p>${num3}</p>`);

let num4 = 'ua';
console.log(num4);
alert(num4);
document.write(`<p>${num4}</p>`);
num4 = 'gb';
console.log(num4);
alert(num4);
document.write(`<p>${num4}</p>`);

let num5 = 1;
console.log(num5);
alert(num5);
document.write(`<p>${num5}</p>`);
num5 = 3;
console.log(num5);
alert(num5);
document.write(`<p>${num5}</p>`);

let num6 = 10;
console.log(num6);
alert(num6);
document.write(`<p>${num6}</p>`);
num6 = 15;
console.log(num6);
alert(num6);
document.write(`<p>${num6}</p>`);

let num7 = -999;
console.log(num7);
alert(num7);
document.write(`<p>${num7}</p>`);
num7 = -1000;
console.log(num7);
alert(num7);
document.write(`<p>${num7}</p>`);

let num8 = 123;
console.log(num8);
alert(num8);
document.write(`<p>${num8}</p>`);
num8 = 321;
console.log(num8);
alert(num8);
document.write(`<p>${num8}</p>`);

let num9 = 3.14;
console.log(num9);
alert(num9);
document.write(`<p>${num9}</p>`);
num9 = 4.5;
console.log(num9);
alert(num9);
document.write(`<p>${num9}</p>`);

let num10 = 2.7;
console.log(num10);
alert(num10);
document.write(`<p>${num10}</p>`);
num10 = 3.5;
console.log(num10);
alert(num10);
document.write(`<p>${num10}</p>`);

let num11 = 16;
console.log(num11);
alert(num11);
document.write(`<p>${num11}</p>`);
num11 = 20;
console.log(num11);
alert(num11);
document.write(`<p>${num11}</p>`);

let num12 = true;
console.log(num12);
alert(num12);
document.write(`<p>${num12}</p>`);
num12 = false;
console.log(num12);
alert(num12);
document.write(`<p>${num12}</p>`);

let num13 = false;
console.log(num13);
alert(num13);
document.write(`<p>${num13}</p>`);
num13 = true;
console.log(num13);
alert(num13);
document.write(`<p>${num13}</p>`);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
console.log("*** Створити 3 змінних firstName, middleName, lastName ***")
document.write('<hr/><b>Створити 3 змінних firstName, middleName, lastName </b><br/> ')

let firstName = 'Valery';
let middleName = 'Yurievich';
let lastName = 'Holenko';

let person = 'Holenko' + 'Valery' + 'Yurievich';
let person1 = `${firstName} ${middleName} ${lastName}` ;

document.write(person);
document.write(`<p>${ person1 }</p>`);
console.log(person1);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
console.log("*** За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками***")
document.write('<hr/><b>За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками </b><br/> ')

let name =prompt('Імя', 'Валерій');
let midName = prompt('По-Батькові', 'Юрійович');
let old = prompt('Вік', 39 );

document.write(`<h3>"Вітаю, ${name} ${midName}. Тобі ${old} років"</h3>`);
console.log(`<h3>"Вітаю, ${name} ${midName}. Тобі ${old} років"</h3>`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
console.log("*** За допомогою оператора typeof визначити типи***")
document.write('<hr/><b>За допомогою оператора typeof визначити типи</b><br/> ')

let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
console.log("Визначити відповідний оператор в виразах що б вийшов відповідний результат***")

let express = true;

express = 5 < 6;
console.log (express); //true

express = 5 > 6;
console.log (express); // false

express = 5 === 6;
console.log (express); //false

express = 5 >= 6;
console.log (express); //false

express = 10 === 10;
console.log (express); //true

express = 10 >=  10;
console.log (express); //true

express = 10 > 10;
console.log (express); //false

express = 10 < 10;
console.log (express); //false

express = 10 !== 10;
console.log (express); //false

express = 123 === '123';
console.log (express); // false

express = 123 !=='123';
console.log (express); //true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a_ = 5;
document.write(str + a_ + "<br/>"); // 205 один из операндов является строкой, оператор + вызывает преобразование к строке для числа а
document.write(str - a_ + "<br/>"); // 15 Арифметический оператор вычетания, -, вызывает преобразование к числу для строки
document.write(str * "2" + "<br/>");// 40 Арифметический оператор умножения, *, вызывает преобразование к числу для строки
document.write(str / 2 + "<br/>"); // 10 Арифметический оператор деления, /, вызывает преобразование к числу для строки
