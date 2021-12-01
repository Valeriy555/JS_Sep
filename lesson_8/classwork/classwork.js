// 1) Напишіть код, який :
// a) змінює назву  елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

const mainEl = document.getElementById('main_header');
console.log(mainEl);

mainEl.classList.add('september-2021')
console.log(mainEl.classList);

// b) робить шириниу елементу ul 400px

const ulEl = document.getElementsByTagName('ul');
for (const ulElElement of ulEl) {
    ulElElement.style.width = '400px'
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

const liEl = document.getElementsByTagName('li');
for (const liElElement of liEl) {
    liElElement.style.width = '50%'
}
// d) отримує текст який зберігається в елементі з класом listElement2

const liEle = document.getElementsByClassName('listElement2')
console.log(liEle.innerText = 'JavaScript');


// e) отримує всі елементи li та змінює ім колір фону на сірий

const liBackground = document.getElementsByTagName('li');
for (const liElElement of liBackground) {
    liElElement.style.background = 'silver'
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let aEl = document.getElementsByTagName('a')
for (const aElElement of aEl) {
    aElElement.classList.add('anchor');
}
console.log(aEl);
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів

let aEltext = document.getElementsByTagName('a')
for (const aEltextEl of aEltext) {
    if (aEltextEl.innerText === 'link3') {
        aEltextEl.style.fontSize = '40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX.
// Де XXX - текстовий контент елементу a


let aEll = document.getElementsByTagName('a')
for (const aEllElement of aEll) {
    aEllElement.classList.add(aEllElement.innerText)

}
console.log(aEll);

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

const subEl = document.getElementsByClassName('sub-header');
for (const subElElement of subEl) {
    subElElement.style.background = prompt('Enter background color')
}
console.log(subEl);

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
//     Колір отримати з prompt()

const headerEl = document.getElementsByClassName('sub-header');
for (const headerElElement of headerEl) {
    if (headerElElement.innerText === 'content 2 segment') {
        headerElElement.style.color = prompt('Enter background color')
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
//     Текст отримати з prompt()
let contEll = document.getElementsByClassName('content_1')
for (const ell of contEll) {
    ell.innerText = prompt('Зміни текст в content_1 ');
}

// document.getElementsByClassName('content_1').innerText = prompt();

// l) отримати елементи p та змінити їм padding на 20px

const pEl = document.getElementsByTagName('p');
for (const pElElement of pEl) {
    pElElement.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

const text2El = document.getElementsByClassName ('text2');
for (const text2ElElement of text2El) {
    text2ElElement.innerText = 'sep-2021'
}








