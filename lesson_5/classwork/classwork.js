// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log("--функція яка приймає три числа та виводить найменьше-")
document.write(' <hr/><b> функція яка приймає три числа та виводить найменьше </b> <br/> ')

let numMin = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a)
        document.write(a)

    } else if (b < a && b < c) {
        console.log(b)
        document.write(b)

    } else if (c < a && c < b) {
        console.log(c)
        document.write(c)
    }
}
numMin(17, 200, 19)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log("--функція яка приймає три числа та виводить найбільше-")
document.write(' <hr/> <b> функція яка приймає три числа та виводить найбільше </b> <br/> ')

let numMax = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a)
        document.write(a)

    } else if (b > a && b > c) {
        console.log(b)
        document.write(b)

    } else if (c > a && c > b) {
        console.log(c)
        document.write(c)
    }
}
numMax(17, 200, 19)

// - створити функцію яка повертає найбільше число з масиву
console.log("--функція яка повертає найбільше число з масиву-")
document.write(' <hr/> <b> функція яка повертає найбільше число з масиву</b> <br/> ')

let number = [3, 42, 25, 4, 10, 6, 8, 7, 9]

let arrNum = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num > max) {
            max = num
        }
    }
    return max;
}
    console.log(arrNum(number));
    document.write(`найбільший число: ${arrNum(number)} `)


// - створити функцію яка повертає найменьше число з масиву
console.log("--функція яка повертає найменьше число з масиву-")
document.write(' <hr/> <b> функція яка повертає найменьше число з масиву</b> <br/> ')

let arrNumMin = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num < min)
            min = num
    }
    return min
}

console.log(arrNumMin(number));
document.write(` найменьше число: ${arrNumMin(number)} `)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
console.log("--функція яка сумує значення елементів масиву та повертає його-")
document.write(' <hr/> <b> функція яка сумує значення елементів масиву та повертає його</b> <br/> ')

let addition = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}

console.log(addition(number));
document.write(` сумма чисел масиву: ${addition(number)} `)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log("--функція яка приймає масив чисел та повертає середнє арифметичне його значень-")
document.write(' <hr/> <b> функція яка приймає масив чисел та повертає середнє арифметичне його значень</b> <br/> ')

let average = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / number.length;
}

console.log(average(number));
document.write(` сумма чисел масиву: ${average(number)} `)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
console.log("--функція яка приймає будь-яку кількість чисел, повертає найменьше,а виводить найбільше-")
document.write(' <hr/><b> функція яка приймає будь-яку кількість чисел, повертає найменьше,а виводить найбільше</b> <br/> ')


let Num = (...arg) => {
    let min = arg[0];
    let max = arg[0];
    for (const argEl of arg) {
        if (argEl > max) {
            max = argEl;
        }
        if (argEl < min) {
            min = argEl;
        }
    }
    document.write(`Максимальне: ${max} <br/>`);
    console.log(`Максимальне: ${max} `)
    return min;
}

document.write(`Мінімальне: ${Num(50, 20, 120,10,14)}`)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
console.log("--функція яка заповнює масив рандомними числами (діапазон від 0 до 100)-")
document.write(' <hr/> <b> функція яка заповнює масив рандомними числами (діапазон від 0 до 100)</b> <br/> ')

let random = (ran) =>  {
    let randomArr = [];
    for (let i = 0; i < ran; i++) {
        randomArr.push(Math.round(Math.random() * 100))
    }
    return randomArr
}
console.log(random(8));
document.write(`массив рандомних значеннь: ${random(8)} `)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
console.log("--функція яка заповнює масив рандомними числами в діапазоні від 0 до limit-")
document.write(' <hr/> <b> функція яка заповнює масив рандомними числами в діапазоні від 0 до limit</b> <br/> ')

let random2 = (length,limit) =>  {
    let emptyArray = [];
    for (let i = 0; i < length; i++) {
        emptyArray.push(Math.round(Math.random() * limit));
    }
    return emptyArray;
}
console.log(random2(10,20));
document.write(`${random2(10,20)}`);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
console.log("--Функція приймає масив та робить з нього новий масив в зворотньому порядку.-")
document.write(' <hr/> <b>Функція приймає масив та робить з нього новий масив в зворотньому порядку.</b> <br/> ')

let oldArr = [1,2,3];
let newArr = [];

let revers = (arr) =>  {
    for (let i = arr.length - 1; i >= 0; i--) {
        const elem = arr[i];
        newArr.push(elem);
    }
    console.log(newArr);
    document.write(`${newArr}`)
}
revers(oldArr);
