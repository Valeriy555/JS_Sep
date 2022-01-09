let postInfoDiv = document.createElement('div');
postInfoDiv.classList.add('postInfoDiv');
postInfoDiv.style.width = '1260px';
postInfoDiv.style.padding = '30px';
postInfoDiv.style.fontSize = '25px';
postInfoDiv.style.background = 'green';
postInfoDiv.style.border = '3px solid black';

const JOSINPost = new URL(location).searchParams.get('post');
const post = JSON.parse(JOSINPost);

postInfoDiv.innerText =
    `userId:${post.userId},
    id:${post.id},
    title:${post.title},
    body:${post.body}`

document.body.append(postInfoDiv);

let com = document.createElement('div');
com.classList.add('com');
com.style.width = '1307px';
com.style.background = 'silver';
com.style.border = '3px solid black';
com.style.marginTop = '5px';
com.style.display = 'flex';
com.style.flexWrap = 'wrap';
com.style.padding = '5px';

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {

        for (const comment of comments) {

            let comDiv = document.createElement('div');

            comDiv.style.fontSize = '20px';
            comDiv.style.width = '24%';
            comDiv.style.border = '1px solid black';
            comDiv.style.margin = '5px';
            comDiv.style.background = 'brown';


            comDiv.innerText =
                `postId:${comment.postId},
                id:${comment.id},
                name:${comment.name},
                email:${comment.email},
                body:${comment.body}`;


            com.append(comDiv);

        }
    });
document.body.append(com);