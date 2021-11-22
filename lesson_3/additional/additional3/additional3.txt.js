// 1. Створити пустий масив та :
let array = []
//     a. заповнити масив 50 парними числами за допомоги циклу.
console.log("---50 парних---")
document.write(' <hr/> <b> - заповнити його 50 парними числами за допомоги циклу </b> <br/> ')

for (let i = 1; i < 50; i++) {

    array.push(i * 2)
}
console.log(array)
document.write(`  ${array} `)


//     b. заповнити масив 50 непарними числами за допомоги циклу.
console.log("---50 непарних---")
document.write('<hr/> <b> - заповнити його 50 непарними числами за допомоги циклу </b> <br/> ')
let array_1 = []
for (let i = 0; i < 50; i++) {

    array_1.push((i * 2) + 1)
}
console.log(array_1)
document.write(`  ${array_1} `)


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
console.log("---20 рандомних---")
document.write('<hr/> <b> - заповнити масив 20ма рандомними числами </b> <br/> ')
let number20 = [];
for (let i = 0; i < 20; i++) {
    number20.push(Math.round(Math.random() * 100))
}
document.write(`${number20}`)
console.log(number20)


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
console.log("---20 рандомних  від від 8 до 732 ---")
document.write('<hr/> <b> - заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732</b> <br/> ')

let numberArr = [];
for (let i = 0; i < 20; i++) {
    numberArr[i] = Math.floor(Math.random(i) * (732 - 8) + 8)
}
document.write(`${numberArr}`)
console.log(numberArr)

// 2. Вивести за допомогою console.log кожен третій елемен
console.log("---кожен третій елемент---")
document.write('<hr/> <b> - кожен третій елемент</b> <br/> ')

for (let i = 2; i < numberArr.length; i += 3) {
    let numArray = numberArr[i];
    document.write(`${numArray} `)
    console.log(numArray)
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
console.log("---кожен третій парний елемент---")
document.write('<hr/> <b> - кожен третій парний елемент</b> <br/> ')

for (let i = 2; i < numberArr.length; i += 3) {
    let numArray = numberArr[i];
    if (numArray % 2 === 0) {
        document.write(`${numArray} `)
        console.log(numArray)
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
console.log("---кожен третій парний елемент, записать в новый массив---")
document.write('<hr/> <b> - кожен третій парний елемент, записать в новый массив</b> <br/> ')

let numArr = [];
for (let i = 2; i < 20; i += 3) {
    if (numberArr[i] % 2 === 0) {
        numArr.push(numberArr[i]);
    }
}
document.write(`${numArr} `)
console.log(numArr);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
console.log("---кожен елемент масиву, сусід справа якого є парним---")
document.write('<hr/> <b> ---кожен елемент масиву, сусід справа якого є парним---</b> <br/> ')

let arrNeighbor = [1, 2, 3, 5, 7, 9, 56, 8, 67, 35, 82, 15, 14, 67]
document.write(`${arrNeighbor} <br/> Результат дивись в консолі`)

document.write(`<br/>`)
for (let i = 0; i < arrNeighbor.length; i++) {
    if (arrNeighbor[++i] % 2 === 0) {
        console.log(arrNeighbor[--i]);

    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
console.log("---середнє арифметичне---")
document.write('<hr/> <b> ---середнє арифметичне---</b> <br/> ')
let arrBuy = [100, 250, 50, 168, 120, 345, 188]
let sum = 0;
for (let i = 0; i < arrBuy.length; i++) {
    sum += arrBuy[i];
}
let result =Math.round (sum / arrBuy.length)
console.log(result)
document.write(`${result}`)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
console.log("---масив з рондомними значеннями * 5---")
document.write('<hr/> <b> ---масив з рондомними значеннями * 5---</b> <br/> ')

let randomArr = [];
let ranArray = [];
for (let i = 0; i < 10; i++) {
    randomArr.push(Math.round(Math.random() * 10))
    ranArray.push(randomArr[i]*5 ); // перемістив у новий масив та * елементи на 5
}
document.write(`-рондомні значення масива: ${randomArr} <br/> `)
console.log(randomArr)
document.write(`-помножені на 5 :${ranArray}<br/> `)
console.log(ranArray)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
//     і якщо елемент є числом - додати його в інший масив.

console.log("---змішанний массив, вивести числа в інший массив---")
document.write('<hr/> <b> ---змішанний массив, вивести числа в інший массив---</b> <br/> ')

let mixArr = ['cat', 5, 8, 'boy', true, 1, 'dog', 4, 'fox', 54, 32, 'pig', 33, false, 3]
let mixArray = [];
for (let i = 0; i < mixArr.length; i++) {
    const mix = mixArr[i];
    if (typeof mix === 'number') {
        mixArray.push(mixArr[i]);
    }
}
console.log(mixArray)
document.write(`Весь перший массив: ${mixArr} <br/>`)
document.write(`Числа додані в інший массив: ${mixArray}`)

// - Дано 2 масиви з рівною кількістю об'єктів.


let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
console.log("---Зєднати два масива об'єктів---")

for (let i = 0; i < usersWithId.length; i++) {
    let user = usersWithId[i];
    for (let j = 0; j < citiesWithId.length; j++) {
        let city = citiesWithId[j];
        if ( user.id ===  city.user_id) {
            user.address = city;
        }
    }
}
console.log(usersWithId);

// Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

console.log("---створити масив. Вивести парны значення---")
document.write('<hr/> <b> ---створити масив. Вивести парны значення---</b> <br/> ')

let arrayNew = [];

for (let i = 0; i <= 19; i++) {
    arrayNew[i] = i +1;
}
console.log(arrayNew);
document.write(`Створили новий масив: ${arrayNew} <br/> Парні значення:`)

for (let c = 0; c < arrayNew.length; c++) {
    let arr = arrayNew[c];
    if (arr % 2 === 0) {
        document.write(` ${arr} `)
        console.log(arr)
    }
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
console.log("--- За допомогою циклу for of зібрати всі букви в слово --")
document.write('<hr/><b> За допомогою циклу for of зібрати всі букви в слово </b><br/> ')
let wordArr = ['a', 'b', 'c']
// console.log(wordArr.join(''));
let wordFor = ''
for (let i = 0; i < wordArr.length; i++) {
    wordFor += wordArr[i];
}
console.log(`${wordFor}`)
document.write(`${wordFor}`)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
console.log("--- За допомогою циклу while зібрати всі букви в слово --")
document.write('<hr/><b> За допомогою циклу while зібрати всі букви в слово </b><br/> ')

let wordWhile = []
let i = 0;
while (i < wordArr.length) {
    wordWhile += wordArr[i];
    i++;
}
console.log(wordWhile)
document.write(`${wordWhile}`)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
console.log("--- За допомогою циклу for of зібрати всі букви в слово --")
document.write('<hr/><b> За допомогою циклу for of зібрати всі букви в слово </b><br/> ')
let wordOf = []
for (let i of wordArr) {
    wordOf +=i;
}
console.log(wordOf)
document.write(`${wordOf}`)
