// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage

let form = document.createElement('form');
form.setAttribute('name', 'firstForm');
document.body.appendChild(form);

let input_1 = document.createElement('input');
input_1.setAttribute('name', 'firstInput')
input_1.placeholder = 'enter name'

let input_2 = document.createElement('input');
input_2.setAttribute('name', 'secondInput')
input_2.placeholder = 'enter age'

form.append(input_1, input_2);

let btn = document.createElement('button');
btn.innerText = 'Send form!!!'
btn.style.marginTop = '2px'

document.body.append(btn);

btn.addEventListener('click', () => {
    // console.log(`${input_1.value}, ${input_2.value}`);

    localStorage.setItem('user', JSON.stringify({name:input_1.value, age:input_2.value}))
})

// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let formCar = document.createElement('form');
formCar.setAttribute('name', 'carForm');
formCar.style.marginTop ='15px'

document.body.appendChild(formCar);

let inputModel = document.createElement('input');
inputModel.setAttribute('name', 'firstInput')
inputModel.placeholder = 'enter model'

let inputType = document.createElement('input');
inputType.setAttribute('name', 'secondInput')
inputType.placeholder = 'enter type'

let inputVolume= document.createElement('input');
inputVolume.setAttribute('name', 'thirdInput')
inputVolume.placeholder = 'enter volume'

formCar.append(inputModel, inputType, inputVolume );

let btnCar = document.createElement('button');
btnCar.innerText = 'Send form!!!'
btnCar.style.marginTop = '2px'

document.body.append(btnCar);

btnCar.addEventListener('click', () => {
    let carObj = ({model: inputModel.value, type: inputType.value, volume: inputVolume.value})
    let cars = JSON.parse(localStorage.getItem('carsKey')) || [];
    // let cars =  [];
    cars.push(carObj);
    localStorage.setItem('carsKey', JSON.stringify(cars))
})

