// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
//     якщо два аргументи - складає або конкатенує їх між собою.
document.write('<hr/> <b> Функція, яка приймає один аргумент і виводить його, два аргумента складає їх" </b><br/>');
console.log('---Функція, яка приймає один аргумент і виводить його, два аргумента складає їх---')

function arguments(x, y) {
    if (x !== null && y == null) {
        console.log(`${x}`);
        document.write(`Один аргумент: ${x} <br/>`)
    } else if (x !== null && y !== null) {
        console.log(`${x}` + " " + `${y}`)
        document.write(`Конкатенація аргументів: ${x}` + " " + `${y}`)
    }
}
arguments('hello');
arguments('hello', 'people');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
document.write('<hr/><b> функція яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив</b><br/> ')
console.log("--функція яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив-")

let arr = [1, 2, 3, 4,]
document.write(`Перший массив: ${arr} <br/>`)
let arr_1 = [2, 3, 4, 5,]
document.write(`Другий массив: ${arr_1} <br/>`)
let res = []; // 3, 5, 7 ,9

function sumIndex() {
    for (let i = 0; i < arr.length; ++i) {
        res.push((arr[i] + arr_1[i]));
    }
    return res;
}

sumIndex()
console.log(res);
document.write(`Результат: ${res}`)

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
console.log("--функція яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів-")
document.write('<hr/><b> функція яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів</b><br/> ')

let users = [{name: 'Diana', age: 24}, {model: 'Citroen'}]
let arrKey = []

function objArr() {
    for (const userKey of users) {
        for (const key in userKey) {
            arrKey.push(key)
        }
    }
    return arrKey
}
objArr()
console.log(arrKey)
document.write(`${arrKey}`)

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
console.log("--функція яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів-")
document.write('<hr/><b> функція яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів</b><br/> ')
let arrValue = []
function valArr() {
    for(let key of users){
        for(let val in key){
            arrValue.push(key[val])
        }
    }
    return arrValue
}
valArr()
console.log(arrValue);
document.write(`${arrValue}`)