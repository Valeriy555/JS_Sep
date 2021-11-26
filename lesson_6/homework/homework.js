// - Знайти та вивести довижину настипних стрінгових значень
console.log("--- Довжина стрінгових значень  --")

let str_1 ='hello world'

console.log(str_1.length);

let str_2 = 'lorem ipsum'
console.log(str_2.length);

let str_3 ='javascript is cool'
console.log(str_3.length);

// - Перевести до великого регістру наступні стрінгові значення
console.log("--- Верхній регістр стрінгових значень  --")

console.log(str_1 .toLocaleUpperCase());
console.log(str_2.toLocaleUpperCase());
console.log(str_3 .toLocaleUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
console.log("--- Нижній регістр стрінгових значень  --")
let strVr_1 ='HELLO WORLD'
console.log(strVr_1.toLowerCase());

let strVr_2 = 'LOREM IPSUM'
console.log(strVr_2.toLowerCase());

let strVr_3 = 'JAVASCRIPT IS COOL'
console.log(strVr_3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log("--- Почистити 'брудну' стрінгу від зайвих пробілів.  --")

let filthyString = ' dirty string                   ';
console.log(filthyString.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr);  ['Каждый', 'охотник', 'желает', 'знать']
console.log("---  Функція stringToarray(str), яка перетворює рядок на масив слів.  --")
let stringToarray = (str) => {
    return str.split( ' ');
}
let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
console.log(arr);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
console.log("---  Функція, яка повертає підрядок, що складається із зазначеної кількості символів  --")

let delete_characters=(str, index)=>{
    return str.substr(0, index );
}
let str_d = 'Каждый охотник желает знать'
console.log(delete_characters(str_d,7 ))

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//     При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
console.log("---  Функція, яка приймає рядок str як аргумент і вставляє тире (-) між словами," +
    "всі символи рядка необхідно перевести у верхній регістр.  --")

let insert_dash = (str) => {

    return str.split(' ').join('-').toUpperCase();
}
let str_4= "HTML JavaScript PHP";
console.log(insert_dash(str_4));// 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
console.log("---  Функція, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній  --")
let arrApp_1 = (str) => {
    return str[0].toUpperCase() + str.slice(1)
}
console.log(arrApp_1('охотник'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
console.log("---  Функція, яка повертає рядок, у якому кожне слово починається з великої літери  --")

let capitalize = (str) => {
    return str.split(' ').map(string=>string.charAt(0).toUpperCase()+string.slice(1)).join(' ');
}
console.log(capitalize('каждый охотник желает знать'));