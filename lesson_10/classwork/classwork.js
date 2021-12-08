// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let boxDiv_1 = document.createElement('div');
boxDiv_1.innerText = 'Перша форма';

let boxDiv_2 = document.createElement('div');
boxDiv_2.innerText = 'Друга форма';
boxDiv_2.style.marginTop = '5px'

document.body.append(boxDiv_1, boxDiv_2);

let form_1 = document.createElement('form');
form_1.setAttribute('name', 'firstForm');
boxDiv_1.appendChild(form_1);

let form_2 = document.createElement('form');
form_2.setAttribute('name', 'secondForm ');
boxDiv_2.appendChild(form_2);

let input_1_1 = document.createElement('input');
input_1_1.setAttribute('name', 'firstInput')
input_1_1.placeholder = 'Введіть данні'

let input_1_2 = document.createElement('input');
input_1_2.setAttribute('name', 'secondInput')
input_1_2.placeholder = 'Введіть данні'

form_1.append(input_1_1, input_1_2);

let input_2_1 = document.createElement('input');
input_2_1.setAttribute('name', 'thirdInput')
input_2_1.placeholder = 'Введіть данні'

let input_2_2 = document.createElement('input');
input_2_2.setAttribute('name', 'fourthInput')
input_2_2.placeholder = 'Введіть данні'

form_2.append(input_2_1, input_2_2);


let btn = document.createElement('button');
btn.innerText = 'Натискай сюди!!!'
btn.style.marginTop = '8px'

document.body.append(btn);

btn.addEventListener('click', () => {


    console.log(`${input_1_1.value}`);
    console.log(`${input_1_2.value}`);
    console.log(`${input_2_1.value}`);
    console.log(`${input_2_2.value}`);

})


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let wrap = document.createElement('div')
wrap.style.marginTop = '20px'
document.body.append(wrap)

let input_1 = document.createElement('input');
let input_2 = document.createElement('input');
let input_3 = document.createElement('input');
let button = document.createElement('button');


button.innerText = 'Зчитати інформацію';
document.body.append(input_1, input_2, input_3, button)

button.addEventListener('click', () => {

    let tr = input_1.value;
    let td = input_2.value;
    let content = input_3.value;

    let tabFun = (line, column, cont) => {

        let tab = document.createElement('table');
        tab.style.border = '2px solid brown';

        let tabDiv = document.createElement('div');
        document.body.append(tabDiv)
        tabDiv.append(tab)

        for (let i = 0; i < line; i++) {
            let tr = document.createElement('tr')
            tr.style.border = '1px solid red';

            for (let j = 0; j < column; j++) {
                let td = document.createElement('td')
                td.style.border = '1px solid orange';
                td.innerText = `${cont}`;
                tab.append(tr);
                tr.append(td)
            }
        }
    }
    tabFun(tr, td, content)
})

// - Сворити масив не цензцрних слів.Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.Перевірку робити при натисканні на кнопку

let censor = document.createElement('div')
censor.style.marginTop = '20px'
document.body.append(censor)

let indecent = ['козел', 'придурок', 'дурак', 'скотина', 'блядун']
let inp = document.createElement('input');
let but = document.createElement('button');
but.innerText = 'Проверить цензуру'
censor.append(inp, but)

but.addEventListener('click', () => {
    let censorValue = inp.value;

    for (const ind of indecent) {
        if (ind === censorValue) {
            alert('Это оскорбительно, фууу!!')
            inp.value = '';
            return;
        }
    }
    if (censorValue){
        alert('Вы культурный человек!!!')
    }
})

// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
let censor_1 = document.createElement('div')
censor_1.style.marginTop = '20px'
document.body.append(censor_1)

let indecent_1 = ['козел', 'придурок', 'дурак', 'скотина', 'блядун']

let inp_1 = document.createElement('input');
let but_1 = document.createElement('button');
but_1.innerText = 'Проверить предложение на наличие цензуры'
censor_1.append(inp_1, but_1)

but_1.addEventListener('click', () => {
    let censorValue = inp_1.value;

    for (const ind of indecent_1) {
        if (censorValue.includes(ind)) {
            alert('Это оскорбительно, фууу!!')
            inp_1.value = '';
            return;
        }
    }
    if (censorValue){
        alert('Вы культурный человек!!!')
    }
})