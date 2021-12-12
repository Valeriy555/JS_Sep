// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts




let target = document.createElement('div');
target.classList.add('target');
target.style.display = 'flex';
target.style.flexWrap = 'wrap';
target.style.paddingLeft = '40px';

document.body.append(target)

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {

        for (const post of posts) {
            let postDiv = document.createElement('div');
            postDiv.style.width = '18%'
            postDiv.style.border = '2px solid brown'
            postDiv.style.margin = '5px'
            postDiv.style.background = 'silver';
            postDiv.style.paddingLeft = '5px';



            let  number = document.createElement('h2');
            number.innerText = `${post.userId} - ${post.id}`;
            postDiv.append(number);

            let title = document.createElement('h3');
            title.innerText = `${post.title} ` ;
            postDiv.append(title);

            let info = document.createElement('p');
            info.innerText = ` ${post.body}` ;
            postDiv.append(info);

            let message = document.getElementsByClassName('target')[0];
            message.append(postDiv);
        }
        console.log(posts);
    });


// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


let target_1 = document.createElement('div');
target_1.classList.add('target_1');
target_1.style.display = 'flex';
target_1.style.flexWrap = 'wrap';
target_1.style.paddingLeft = '40px';
target_1.style.marginTop = '20px';

document.body.append(target_1)

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(posts => {

        for (const post of posts) {
            let commentDiv = document.createElement('div');
            commentDiv.style.width = '18%'
            commentDiv.style.wordBreak = 'break-all'
            commentDiv.style.border = '2px solid blue'
            commentDiv.style.margin = '5px'
            commentDiv.style.background = 'yellow';
            commentDiv.style.paddingLeft = '5px';

            let number = document.createElement('h2');
            number.innerText = `${post.postId} - ${post.id}`;
            commentDiv.append(number);

            let contact = document.createElement('h3');
            contact.innerText = `${post.name} -${post.email} `;
            commentDiv.append(contact);

            let info = document.createElement('p');
            info.innerText = `${post.body}`;
            commentDiv.append(info);

            let comments = document.getElementsByClassName('target_1')[0];
            comments.appendChild(commentDiv);
        }
        console.log(posts);
    });
