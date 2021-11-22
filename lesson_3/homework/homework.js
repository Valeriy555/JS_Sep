// --створити масив з:
//     - з 5 числових значень
let num = [1, 2, 20, 30, 45]

// - з 5 стрічкових значень
let str = ['name', 'surname', 'age', 'height', 'weight']

// - з 5 значень стрічкового, числового та булевого типу
let mix = ['height', true, 'weight', 55, false]

// - та вивести його в консоль
console.log('----Массив з 5 числових значень ----')
console.log(num)
console.log('----Массив з 5 стрічкових значень ----')
console.log(str)
console.log('----Массив з 5 змішаних значень ----')
console.log(mix)


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
console.log('----array index----')
let skills = []
skills[0] = 'html'
skills[1] = 'js'
skills[2] = 'react'
skills[3] = 'angular'
skills[4] = 'node.js'
skills[5] = 'TypeScript'
skills[6] = 'MYSQL'
skills[7] = 'VUE.JS'
skills[8] = 'GIT'
skills[9] = 'IONIC'
//     Вивести в консоль
console.log(skills)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write('<hr/><b> За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині </b><br/> ')
for (let i = 0; i < skills.length; i++) {
    let skill = skills[i];
    document.write(`<div> ${skill} </div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write('<hr/><b> За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом  всередині </b><br/> ')
for (let i = 0; i < skills.length; i++) {
    let skill = skills[i];
    document.write(`<div> <b>индекс:</b> ${skills.indexOf(skill)} <b>текст:</b> ${skill} </div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write('<hr/><b>За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.</b><br/>')
document.write('<div class = "row"> ')
let array = ['fox', 'dog', 'cat', 'sea', 55, 'sun', 108, 'sky', false, true, 'js', 'GIT', 48, '56', 92, 5, 7, 2, 9, 'fly']
let i = 0;
while (i < array.length) {
    let arr = array[i];
    document.write(`<h1> ${arr} </h1>`)
    i++;
}
document.write('</div>')

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write('<hr/><b>За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.</b><br/>')
document.write('<div class = "row_1">')
let z = 0;
while (z < array.length) {
    let arr = array[z];
    document.write(`<h1> <b>индекс:</b> ${array.indexOf(arr)} <b>текст:</b> ${arr} </h1>`)
    z++;
}
document.write('</div>')

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log('----Масив з 10 числових елементів. Виведені в консоль всі його елементи в циклі ----')
let numbers = [5, 2, 3, 4, 1, 6, 7, 8, 9, 10]
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    console.log(num)
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log('----Масив з 10 строкрових елементів. Виведені в консоль всі його елементи в циклі ----')
let string = ['name', 'surname', 'age', 'height', 'weight', 'color', 'eyes', 'hands', 'legs', 'hair']
for (let str of string) {
    console.log(str)
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log('----Масив з 10 елементів будь-якого типу. Виведені в консоль всі його елементи в циклі ----')
let mixing = ['name', 4, 1, 6, 'age', false,  55, 'eyes', true, 'legs']
for (let mix of mixing) {
    console.log(mix)
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
document.write('<hr/><b> За допомогою if та typeof вивести тільки булеві елементи.</b><br/>')

for (let y = 0; y < mixing.length; y++) {
    let bool = mixing[y]
    if (typeof bool === 'boolean')
        document.write(`<span> ${bool} </span>`)
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
document.write('<hr/><b> За допомогою if та typeof вивести тільки числові елементи.</b><br/>')
for (let y = 0; y < mixing.length; y++) {
    let num = mixing[y]
    if (typeof num === 'number')
        document.write(`<span> ${num} </span>`)
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
document.write('<hr/><b> За допомогою if та typeof вивести тільки рядкові елементи.</b><br/>')
for (let y = 0; y < mixing.length; y++) {
    let num = mixing[y]
    if (typeof num === 'string')
        document.write(`<span> ${num} </span>`)
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.

console.log('-----Наповнити порожній масив 10 елементами через звернення до конкретних індексів ----')

let types= []
types[0] = 'owl'
types[1] = 'js'
types[2] = 'react'
types[3] = 5
types[4] = 76
types[5] = false
types[6] = 777
types[7] = 888
types[8] = true
types[9] = 'IONIC'

for (let i = 0; i < types.length; i++) {
    let type = types[i];
    console.log(type)
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

console.log('-------10 итераций з кроком 1----')
document.write('<hr/><b> 10 итераций з кроком 1.</b><br/>')

for (let i = 0; i <= 10; i++) {
    document.write(`<span> ${i} <span>`)
    console.log(`${i}`)
}

// - Створити цикл for на 100  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

console.log('-------100 итераций з кроком 1----')
document.write('<hr/><b> 100 итераций з кроком 1.</b><br/>')

for (let i = 0; i <= 100; i++) {
    document.write(`<span> ${i} <span>`)
    console.log(`${i}`)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

console.log('-------100 итераций з кроком 2----')
document.write('<hr/><b> 100 итераций з кроком 2.</b><br/>')

for (let i = 0; i <= 100; i += 2) {
    document.write(`<span> ${i} <span>`)
    console.log(`${i}`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log('-------100 итераций c парным шагом----')
document.write('<hr/><b> 100 итераций c парным шагом.</b><br/>')
for (let a = 0; a <= 100; a++) {
    if (a % 2 === 0) {
        document.write(`<span>${a} <span>`)
        console.log(a)
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

console.log('-------100 итераций c не парным шагом----')
document.write('<hr/><b> 100 итераций c не парным шагом.</b><br/>')
for (let b = 0; b <= 100; b++) {
    if (b % 2 !== 0) {
        document.write(`<span>${b} <span>`)
        console.log(b)
    }
}