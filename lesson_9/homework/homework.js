// Все робити за допомоги js.

// - створити блок,
let divka = document.createElement("div")
// - додати йому класи wrap, collapse, alpha, beta
divka.classList.add('wrap', 'collapse', 'alpha', 'beta')
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
divka.innerText = 'hello okten'
divka.style.background = 'silver'
divka.style.height = '150px'
divka.style.fontSize = '20px'
divka.style.color = 'red'
divka.style.border = '3px solid black'
divka.style.margin = '10px'
// - додати цей блок в body.
document.body.appendChild(divka)
// - клонувати його повністю, та додати клон в body.
// let clonDivka = divka.cloneNode(true);
// document.body.appendChild(clonDivka)
document.body.appendChild(divka.cloneNode(true))

// - Є масив:

let array = ['Main', 'Products', 'About us', 'Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let menu = document.getElementsByClassName('menu')[0];
for (const arr of array) {
    let comli = document.createElement('li');
    comli.innerText = arr
    menu.appendChild(comli);

}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const item of coursesAndDurationArray) {
    let coursDiv = document.createElement('div');
    coursDiv.innerText = `title: ${item.title}, monthDuration: ${item.monthDuration},`
    document.body.appendChild(coursDiv);
}

// - Є масив

// Взяв попередній масив!!!


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
document.write('<br/> ')

for (const elem of coursesAndDurationArray) {
    let divElem = document.createElement('div');
    divElem.classList.add('item');

    let h1 = document.createElement('h1');
    h1.innerText = `title: ${elem.title}`;
    h1.classList.add('heading');

    let p = document.createElement('p');
    p.innerText = `monthDuration: ${elem.monthDuration}`;
    p.classList.add('description');

    divElem.appendChild(h1);
    divElem.appendChild(p);
    document.body.appendChild(divElem);
}

