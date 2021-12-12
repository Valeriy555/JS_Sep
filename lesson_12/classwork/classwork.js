// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

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
            postDiv.style.alignItems = 'center';
            postDiv.style.cursor = 'pointer';
            postDiv.innerHTML = `
                        <h2>ID: ${post.id} UserId: ${post.userId}</h2>
                        <h3>Title: ${post.title}</h3>
                        <h5><b> Body:</b> ${post.body}</h5>
                        `;


            let btn = document.createElement('button');
            // btn.style.

            btn.innerText = 'Post comments';
            btn.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value => value.json())
                    .then(comments => {
                        for (const comment of comments) {

                            if (post.id === comment.postId) {
                                let divComments = document.createElement('div')
                                divComments.innerHTML = `
                                        <h3>ID: ${comment.id}
                                        PostId: ${comment.postId}</h3>
                                        <h4>Name: ${comment.name}</h4>
                                        <p>Email: ${comment.email}</p>
                                        <p>Body: ${comment.body}</p> <hr/>`;

                                postDiv.append(divComments)
                            }
                        }
                    });
            };
            target.append(postDiv);
            postDiv.append(btn)
            document.body.append(target)
        }
        console.log(posts);
    });
