let wrap = document.createElement('div')
wrap.style.background = 'silver'
wrap.style.display = 'flex'
wrap.style.flexWrap = 'wrap'


let lists = JSON.parse(localStorage.getItem('shop'))
console.log(lists);

for (const list of lists) {
    console.log(list)
    let divProd = document.createElement('div');

    divProd.style.border = '2px solid brown'
    divProd.style.margin = '5px'


    divProd.innerHTML = `
       <img src = '${list.picture}' widht = '200px' height = '100px' > <br>
        Наименование:<b> ${list.name} </b> <br>
        Количество:<b>${list.quantity}</b> <br>
        Стоимость за единицу:<b>${list.price}</b> <br>`

    let clearBtn = document.createElement('button')
    clearBtn.innerText = 'clear data'
    wrap.appendChild(divProd)
    divProd.appendChild(clearBtn)

    clearBtn.onclick = (e) => {
        e.preventDefault()
    //         let data = new Date()
    //         let key = JSON.parse(localStorage.getItem('shop'))
    //         if (data.getTime()) {
    //             lists.splice(key, 1);
    //         }
    //
    //         localStorage.setItem('shop', JSON.stringify(lists));
    //     location.reload();
    // }

        let indexDel = lists.indexOf(list);
        lists.splice(indexDel, 1);
        localStorage.setItem('shop', JSON.stringify(lists));
        location.reload();
    }
}

let clearAllBtn = document.createElement('button');
clearAllBtn.style.width = '200px';
clearAllBtn.style.background = 'red';
clearAllBtn.innerHTML = 'Clear all';
clearAllBtn.onclick = (e) => {
    e.preventDefault();
    localStorage.removeItem('shop');
    window.location.reload();
}


document.body.append(wrap, clearAllBtn)

