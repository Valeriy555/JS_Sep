// - Імітуємо наповнення інтернет магазину товарами :
//  Створити форму з наступними полями :
// - назва товару,кількість товару ,ціна товару, картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html,
// при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let form = document.createElement('form');
form.setAttribute('name', 'firstForm');
document.body.appendChild(form);

let nameProduct = document.createElement('input');
nameProduct.setAttribute('name', 'inputName')
nameProduct.placeholder = 'enter title'

let quantityProduct = document.createElement('input');
quantityProduct.setAttribute('name', 'inputQuantity')
quantityProduct.placeholder = 'enter quantity'

let priceProduct = document.createElement('input');
priceProduct.setAttribute('name', 'inputPrice')
priceProduct.placeholder = 'enter price'

let pictureProduct = document.createElement('input');
pictureProduct.setAttribute('name', 'inputPicture')
pictureProduct.placeholder = 'enter link'

let btn = document.createElement('button');
btn.setAttribute('name', 'inputButton')
btn.innerText = 'Push!!!'
btn.style.marginLeft= '4px'

form.append(nameProduct, quantityProduct, priceProduct, pictureProduct, btn);

btn.onclick = (e) =>{
// e.preventDefault()
let prodObj = ({name:nameProduct.value, quantity:quantityProduct.value, price:priceProduct.value, picture:pictureProduct.value})
let prod = JSON.parse(localStorage.getItem('shop')) || [];
prod.push(prodObj);
localStorage.setItem('shop', JSON.stringify(prod))
}

let link = document.createElement('a');
link.innerHTML = "<a href='list.html'>product list</a>"
document.body.appendChild(link)