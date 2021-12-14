// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let target_1 = document.createElement('div');
target_1.classList.add('target_1');

target_1.style.padding = '10px';
target_1.style.border = '3px solid darkblue'
target_1.style.background = 'yellow'

document.body.append(target_1)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {

        for (const user of users) {
            let userGenDiv = document.createElement('div');
            userGenDiv.classList.add('userGenDiv');
            userGenDiv.style.display = 'flex';
            userGenDiv.style.flexWrap = 'wrap';


            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');
            userDiv.style.width = '50%'
            userDiv.style.border = '2px solid brown'
            userDiv.style.margin = '5px'
            userDiv.style.background = 'silver';
            userDiv.style.paddingLeft = '5px';
            userDiv.style.alignItems = 'center';


            userDiv.innerHTML = `
           <h2>ID: ${user.id} Name: ${user.name} Username: ${user.username}</h2>
           <h3>Email: ${user.email}</h3> <hr/>
           <h3>Address: </h3>
                      <b> street:</b>${user.address.street}<br/>
                      <b> suite:</b> ${user.address.suite}<br/>
                      <b> city:</b> ${user.address.city}<br/>
                      <b> zipcode:</b> ${user.address.zipcode}<br/>
           <b> Geo:</b> latitude: ${user.address.geo.lat}, longitude: ${user.address.geo.lng} <hr/> 
           <h3>Phone: ${user.phone} </h3>          
           <h3>Website: ${user.website} </h3> <hr/>         
           <h3>Company:</h3>
                      <b> Company name:</b>${user.company.name}<br/>
                      <b> Tagline:</b> ${user.company.catchPhrase}<br/>
                      <b> Bs:</b> ${user.company.bs}<br/> <hr/>`;


            // кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.

            let btn = document.createElement('button');
            btn.style.width = '300px'
            btn.style.height = '30px'
            btn.style.fontSize = '20px'
            btn.style.background = 'paleturquoise'
            btn.style.marginBottom = '10px'
            btn.style.cursor = 'pointer';
            btn.innerText = 'Display posts of user ';

            btn.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(value => value.json())
                    .then(posts => {
                        let genPostDiv = document.createElement('div')
                        genPostDiv.classList.add('genPostDiv');
                        genPostDiv.style.border = '2px solid brown'
                        genPostDiv.style.width = '47%'
                        genPostDiv.style.margin = '5px'

                        userGenDiv.append(genPostDiv)

                        for (const post of posts) {
                            if (user.id === post.userId) {

                                let postDiv = document.createElement('div')
                                postDiv.classList.add('postDiv');
                                postDiv.style.background = 'olive'
                                postDiv.style.border = '2px solid brown'
                                postDiv.style.margin = '10px';
                                postDiv.innerHTML = `
                                        <h3>UserId: ${post.userId} ID: ${post.id}</h3>
                                        <p><b>title:</b> ${post.title}</h4>
                                        <p><b> body:</b> ${post.body}</p> `;
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
                                let btnCom = document.createElement('button');
                                btnCom.innerText = 'Display post comments'
                                btnCom.style.background = 'brown'
                                btnCom.style.marginBottom = '10px'
                                btnCom.style.cursor = 'pointer';

                                btnCom.onclick = () => {
                                    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                        .then(value => value.json())
                                        .then(comments => {
                                            for (const comment of comments) {
                                                if (post.id === comment.postId) {
                                                    let divComments = document.createElement('div')
                                                    divComments.style.background = 'lime'
                                                    divComments.style.border = '2px solid mediumblue'
                                                    divComments.style.margin = '20px';
                                                    divComments.innerHTML = `
                                       <h3> PostId: ${comment.postId}
                                        ID: ${comment.id}</h3>
                                        <h4>Name: ${comment.name}</h4>
                                        <p>Email: ${comment.email}</p>
                                        <p>Body: ${comment.body}</p> `;

                                                    genPostDiv.append(divComments)

                                                }
                                                btnCom.disabled = true;
                                            }

                                        })
                                }
                                userDiv.append(postDiv)
                                postDiv.append(btnCom)
                            }
                            btn.disabled = true;
                        }
                    })
            }
            target_1.appendChild(userGenDiv);
            userGenDiv.append(userDiv)
            userDiv.append(btn)

        }
        console.log(users);
    });


