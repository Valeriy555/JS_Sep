// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".

let textDiv = document.createElement('div')
textDiv.id = 'text'
textDiv.innerText = 'Этот текс должен исчезнуть!!!'
textDiv.style.fontSize = '20px'
textDiv.style.height = '50px'
textDiv.style.width = '200px'
textDiv.style.background = 'silver'
textDiv.style.border = '2px solid brown'
textDiv.style.boxSizing = 'border-box'


let button = document.createElement('button');
button.innerText = 'Что бы скрыть текс, нажмите сюда'
button.style.height = '50px'
button.style.width = '200px'
button.style.marginTop = '5px'
button.style.color = 'red'


button.onclick = () => {
    textDiv.style.display = 'none';
}

document.body.append(textDiv,button)

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let dIv = document.createElement('div');
let but = document.createElement('button');
but.innerText = 'Что бы скрыть эту кнопку, нажмите на нее!'
but.style.height = '50px'
but.style.width = '200px'
but.style.marginTop = '20px'
but.style.color = 'red'

but.onclick = () => {
    but.style.display = 'none';
}
dIv.appendChild(but)
document.body.append(dIv)

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let inputAge = document.createElement('input')
inputAge.placeholder = 'Введите свой возраст'
inputAge.style.marginTop ='20px'
inputAge.type='number'
let butAge = document.createElement('button')
butAge.innerText = 'Enter'
butAge.onclick = () => {
    if (inputAge.value >= 18) {
        alert('Добро пожаловать !!')
    } else if (!inputAge.value ) {
        alert('Вы не указали возраст!!!')

    } else {
        alert('Несовершеннолетним вход воспрещен !!')
    }
}
document.body.append(inputAge,butAge )

// - Создайте меню, которое раскрывается/сворачивается при клике
let menuH1 = document.createElement('h3')
menuH1.innerText = 'Меню'

let content = document.createElement('ul')
let dish_1 = document.createElement('li')
dish_1.innerText = 'Первое блюдо'
let dish_2 = document.createElement('li')
dish_2.innerText = 'Второе блюдо'
let dish_3 = document.createElement('li')
dish_3.innerText = 'Десерт'
let dish_4 = document.createElement('li')
dish_4.innerText = 'Напитки'


menuH1.addEventListener('click', () => {
   if (content.style.display === 'none'){
       content.style.display = 'block'
   }else {
       content.style.display = 'none'
   }
})

content.append(dish_1,dish_2,dish_3,dish_4)
document.body.append(menuH1,content)

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title : 'Politics', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {title : 'Sport', body:'Architecto aspernatur assumenda at blanditiis deleniti exercitationem harum hic laboriosam.'},
    {title : 'Art', body:'Maxime molestias odio, perferendis placeat praesentium quibusdam.'}
]

for (const comment of comments) {
    let comDiv = document.createElement('div')
    comDiv.style.border = '1px solid brown'
    comDiv.style.background = 'silver'
    comDiv.style.marginBottom = '3px'

    let titelH = document.createElement('h3');
    titelH.innerHTML =`Title: <b>${comment.title} </b>`

    let contents = document.createElement('h4');
    contents.innerHTML =`Content: <b>${comment.body} </b>`

    let btn = document.createElement('button');
    btn.innerHTML = 'Свернуть/развернуть содержание'
    btn.style.color = 'red'

    btn.addEventListener('click', () => {
        if (contents.style.display === 'none'){
            contents.style.display = 'block'
        }else {
            contents.style.display = 'none'
        }
    })
    comDiv.append(titelH, contents,btn )
    document.body.append(comDiv)
}
