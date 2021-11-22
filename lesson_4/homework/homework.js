// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
document.write(' <b> функція яка обчислює та повертає площу прямокутника зі сторонами а і б</b> <br/> ')
console.log('---функція яка обчислює та повертає площу прямокутника зі сторонами а і б---')

function rectangle(a, b) {
    return a * b;
}

let area = rectangle(10, 5);
console.log(area);
document.write(`${area}`)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
document.write('<hr/> <b> функція яка обчислює та повертає площу кола з радіусом r</b> <br/> ')
console.log('---функція яка обчислює та повертає площу кола з радіусом r---')

function circle(π, r) {
    return π * (r ** 2);
}

let area1 = circle(3.14, 7);
console.log(area1);
document.write(`${area1}`);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
document.write('<hr/> <b> функція яка обчислює та повертає площу циліндру висотою h, та радіутом r </b> <br/> ')
console.log('---функція яка обчислює та повертає площу циліндру висотою h, та радіутом r---')

function cylinder(r, h) {
    return 2 * 3.14 * r * (r + h);
}

let area2 = cylinder(5, 12);
console.log(area2);
document.write(`${area2}`);


// - створити функцію яка приймає масив та виводить кожен його елемент
document.write('<hr/> <b> функція яка приймає масив та виводить кожен його елемент</b> <br/> ')
console.log('---функція яка приймає масив та виводить кожен його елемент---')

let array = ['fox', 'dog', 5, true, '55', 33, 'fly', false, 154, 'sun']

function arr(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
        document.write(`<span>${array[i]} <span>`)
    }
}

arr(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

document.write('<hr/> <b> функція яка створює параграф з текстом</b> <br/> ')


function createDiv(header) {

    document.write(`<p>${header}</p>`);
}

createDiv('some text');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write('<hr/> <b> функція яка створює ul з трьома елементами li.</b> <br/> ')


function createOful(header) {
    document.write(`<ul>
          <li>${header}</li>
          <li>${header}</li>
          <li>${header}</li>
    </ul>`);
}

createOful('some text');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write('<hr/> <b> функція яка створює ul з трьома елементами li. Кількість li визначається другим аргументом</b> <br/> ')


function createOfli(header, numOfli) {
    document.write(`<ul>`);

    for (let i = 0; i < numOfli; i++) {
        document.write(`<li>${header}</li>`);
    }

    document.write(`</ul>`);
}

createOfli('hello okten', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write('<hr/> <b> функція яка створює ul з трьома елементами li. Кількість li визначається другим аргументом</b> <br/> ')

let arrayMix = [1, 3, 5, 'hello', true]

function createOf(arrayMix) {
    document.write(`<ul>`);
    for (let i = 0; i < arrayMix.length; i++) {
        const arr = arrayMix[i];
        document.write(`<li>${arr}</li>`);
    }
    document.write(`</ul>`);
}

createOf(arrayMix);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.' +
// ' Для кожного об'єкту окремий блок.
document.write('<hr/> <b> функція яка приймає масив об"єктів з наступними полями id,name,age </b> <br/> ')


let arrayObj = [{id: 1, name: 'Valeriy', age: 39}, {id: 2, name: 'Diana', age: 25}, {id: 3, name: 'Diana', age: 25}]

function objektArrey(array) {
    for (let arr of array) {
        document.write(`<div> ${arr.id} - ${arr.name}- ${arr.age}  </div>`)
    }
}
objektArrey(arrayObj)

