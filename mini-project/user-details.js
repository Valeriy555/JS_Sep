// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
//     которая имеет детальную информацию про текущий пост.

let userInfoDiv = document.createElement('div')
userInfoDiv.classList.add('userInfoDiv');
userInfoDiv.style.width = '1260px';
userInfoDiv.style.height = '500px';
userInfoDiv.style.padding = '30px';
userInfoDiv.style.fontSize = '25px';
userInfoDiv.style.background = 'brown';
userInfoDiv.style.border = '3px solid black';

const JOSINUSer = new URL(location).searchParams.get('user');
const user = JSON.parse(JOSINUSer);
userInfoDiv.innerText =
    `id: ${user.id},
     name: ${user.name},
     username: ${user.username},
     email: ${user.email},
     address:
         street: ${user.address.street},
         suite: ${user.address.suite},
         city: ${user.address.city},
         zipcode:${user.address.zipcode},
            geo: 
            lat: ${user.address.geo.lat},
            lng: ${user.address.geo.lng}
  phone: ${user.phone},
  website: ${user.website},
  company: 
    name: ${user.company.name},
    catchPhrase:${user.company.catchPhrase},
    bs: ${user.company.bs}`

document.body.append(userInfoDiv)


let pos = document.createElement('div')
pos.classList.add('pos');
pos.style.width = '1322px';
pos.style.height = '50px';
pos.style.background = '#334aff';
pos.style.border = '2px solid black';
pos.style.marginTop = '5px';
pos.style.display = 'flex';
pos.style.justifyContent = 'center';
pos.style.alignItems = 'center';

let detailsBtn = document.createElement('button');
detailsBtn.innerText = 'post of current user'
detailsBtn.style.width = '90%';
detailsBtn.style.height = '40px';
detailsBtn.style.fontSize = '25px';
detailsBtn.style.cursor = 'pointer';
detailsBtn.style.background = 'aqua';
detailsBtn.style.border = '1px solid black';

let postBox = document.createElement('div')
postBox.style.width = '1307px';
postBox.style.height = '380px';
postBox.style.background = 'silver';
postBox.style.border = '3px solid black';
postBox.style.marginTop = '5px';
postBox.style.display = 'flex';
postBox.style.flexWrap = 'wrap';
postBox.style.paddingLeft = '15px';

postBox.innerHTML = '';

detailsBtn.onclick = function () {


    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {

            for (const post of posts) {

                let divPost = document.createElement('div');
                divPost.innerText = post.title;
                divPost.style.fontSize = '20px';
                divPost.style.height = '150px';
                divPost.style.width = '18%';
                divPost.style.border = '1px solid black';
                divPost.style.margin = '10px';
                divPost.style.background = 'brown';
                divPost.style.position = 'relative';
                divPost.style.textAlign = 'justify';

                let btn = document.createElement('a');
                btn.style.width = '120px';
                btn.style.height = '25px';
                btn.style.border = '1px solid black';
                btn.style.background = 'aqua';
                btn.style.position = 'absolute';
                btn.style.bottom = '15px';
                btn.style.left = '50px';
                btn.style.cursor = 'pointer';
                btn.style.borderRadius = '48%';
                btn.style.textAlign = 'center';

                btn.innerText = 'Get info post';
                btn.onclick = function () {

                    fetch(window.location.href = `post-details.html?post=${JSON.stringify(post)}`);

                }

                postBox.append(divPost);
                divPost.append(btn);

            }

        });

};

pos.append(detailsBtn);
document.body.append(pos)
document.body.append(postBox)





