// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
//  которая имеет детальную информацию про объект на который кликнули

let users = document.createElement('div')
users.id = 'users'
users.style.width = '97%'
users.style.minHeight = '330px'
users.style.background = 'silver'
users.style.display = 'flex'
users.style.flexWrap ='wrap'
users.style.marginLeft = '20px'
users.style.border = '2px solid brown'
document.body.append(users)


fetch('https://jsonplaceholder.typicode.com/users')

    .then(value => value.json())
    .then(value => {
        for (const user of value) {
            let userDiv = document.createElement('div');
            userDiv.innerText = `${user.id} : ${user.name}`;
            userDiv.style.width = '46%'
            userDiv.style.height = '50px'
            userDiv.style.background = 'brown'
            userDiv.style.border = '1px solid black'
            userDiv.style.margin = '10px'
            userDiv.style.paddingLeft = '30px'
            userDiv.style.fontSize = '30px'
            userDiv.style.position = 'relative'

            let btn = document.createElement('button');
            btn.innerText = 'Get user information';
            btn.style.width= '230px';
            btn.style.height= '30px';
            btn.style.fontSize= '20px';
            btn.style.position= 'absolute';
            btn.style.top= '5px';
            btn.style.right= '5px';
            btn.style.cursor= 'pointer';
            btn.style.background= 'aqua';
            btn.style.border= '1px solid black';

            btn.onclick = function () {

                fetch(window.location.href =`user-details.html?user=${JSON.stringify(user)}`);


            }
            userDiv.appendChild(btn);
            users.appendChild(userDiv)

        }
    });



