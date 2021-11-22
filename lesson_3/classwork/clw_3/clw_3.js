// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

// 1. перебрати його циклом while
document.write('<b>Перебор циклом while </b><br/>');
console.log('---Перебор циклом while---')

let a = 0;
while (a < array.length) {
    let arr = array[a];
    console.log(arr)
    document.write(`${arr}, `)
    a++;
}

// 2. перебрати його циклом for
document.write('<hr/> <b>Перебор циклом for </b><br/>');
console.log('---Перебор циклом for---')
for (let a = 0; a < array.length; a++) {
    let arr = array[a];
    console.log(arr)
    document.write(`${arr}, `)
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
document.write('<hr/> <b>Перебор циклом while, вивести  числа тільки з непарним індексом  </b><br/>');
console.log('---Перебор циклом while, вивести  числа тільки з непарним індексом ---')

let b = 0;
while (b < array.length) {
    let arr = array[b];
    if (array.indexOf(arr) % 2 !== 0) {
        document.write(`<div> index: ${array.indexOf(arr)}, number: ${arr}  </div> `)
        console.log(arr)
    }
    b++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
document.write('<hr/> <b>Перебор циклом for, вивести  числа тільки з непарним індексом  </b><br/>');
console.log('---Перебор циклом for, вивести  числа тільки з непарним індексом ---')

for (let b = 0; b < array.length; b++) {
    let arr = array[b];
    if (array.indexOf(arr) % 2 !== 0) {
        document.write(`<div> index: ${array.indexOf(arr)}, number: ${arr}  </div> `)
        console.log(arr)
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
document.write('<hr/> <b>Перебор циклом while, вивести  числа тільки парні  значення  </b><br/>');
console.log('---Перебор циклом while, вивести  числа тільки парні  значення ---')

let c = 0;
while (c < array.length) {
    let arr = array[c];
    if (arr % 2 === 0) {
        document.write(`<div> index: ${array.indexOf(arr)}, number: ${arr}  </div> `)
        console.log(arr)
    }
    c++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
document.write('<hr/> <b>Перебор циклом for, вивести  числа тільки парні  значення  </b><br/>');
console.log('---Перебор циклом for, вивести  числа тільки парні  значення ---')

for (let c = 0; c < array.length; c++) {
    let arr = array[c];
    if (arr % 2 === 0) {
        document.write(`<div> index: ${array.indexOf(arr)}, number: ${arr}  </div> `)
        console.log(arr)
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
document.write('<hr/> <b> замінити кожне число кратне 3 на слово "okten" </b><br/>');
console.log('---замінити кожне число кратне 3 на слово "okten"---')
let array1  = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
for (let c = 0; c < array1.length; c++) {
    if (array1[c] % 3 === 0) {
        array1[c] = " okten "

    }
}
console.log(array1)
document.write(`${array1}`)

// 8. вивести масив в зворотньому порядку.
document.write('<hr/> <b> вивести масив в зворотньому порядку" </b><br/>');
console.log('---вивести масив в зворотньому порядку---')

// a = array.reverse()
// document.write(`${a} `)
// console.log(`${a} `)

let array2 = [2,17,13,6,22,31,45,66,100,-18];
for (let i = array2.length-1; i >= 0; i--){
    document.write(`${i} `)
    console.log(array2[i])

}


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

document.write('<hr/>  <b> 1) перебрати масив зворотнім циклом while </b> <br/>')
console.log('---перебрати масив зворотнім циклом while---')
let backArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
let d = backArray.length - 1;
while (d >= 0) {
    let arr = backArray[d];
    document.write(`${arr}, `)
    console.log (arr)
    d--;
}

document.write('<hr/> <b> 2) перебрати масив зворотнім циклом for</b> <br/>')
console.log('---перебрати масив зворотнім циклом for---')
for (let d = backArray.length - 1; d >= 0; d--) {
    let arr = backArray[d];
    console.log(arr)
    document.write(`${arr}, `)
}

document.write('<hr/> <b> 3) перебрати зворотнім циклом while та вивести  числа тільки з непарним індексом</b> <br/>')
console.log('---перебрати зворотнім циклом while та вивести  числа тільки з непарним індексом---')
let e = backArray.length - 1;
while (e >= 0) {
    let arr = backArray[e];
    if (backArray.indexOf(arr) % 2 !== 0) {
        document.write(`<div> index: ${backArray.indexOf(arr)}, number: ${arr}  </div> `)
        console.log(`index: ${backArray.indexOf(arr)}, number: ${arr}` )
    }
    e--;
}

document.write('<hr/> <b> 4) перебрати зворотнім циклом for та вивести  числа тільки з непарним індексом</b> <br/>')
console.log('---перебрати зворотнім циклом for та вивести  числа тільки з непарним індексом---')
for (let e = backArray.length - 1; e >= 0; e--) {
    let arr = backArray[e];
    if (backArray.indexOf(arr) % 2 !== 0) {
        document.write(`<div> index: ${backArray.indexOf(arr)}, number: ${arr}  </div> `)
        console.log(`index: ${backArray.indexOf(arr)}, number: ${arr}` )
    }
}

document.write('<hr/> <b> 5) перебрати зворотнім циклом while та вивести  числа тільки парні  значення</b> <br/> ')
console.log('---перебрати зворотнім циклом while та вивести  числа тільки парні  значення---')
let f = backArray.length - 1;
while (f >= 0) {
    let arr = backArray[f];
    if (arr % 2 === 0) {
        document.write(`<div>  number: ${arr}  </div> `)
        console.log(`number: ${arr} ` )
    }
    f--;
}

document.write('<hr/> <b> 6) перебрати зворотнім циклом for та вивести  числа тільки парні  значення</b> <br/> ')
console.log('---перебрати зворотнім циклом for та вивести  числа тільки парні  значення---')

for (let f = backArray.length - 1; f >= 0; f--) {
    let arr = backArray[f];
    if (arr % 2 === 0) {
        document.write(`<div> number: ${arr}  </div> `)
    }
}

document.write('<hr/> <b> 7) перебрати зворотнім циклом for та замінити кожне число кратне 3 на слово "okten</b> <br/> ')
console.log('---перебрати зворотнім циклом for та замінити кожне число кратне 3 на слово "okten---')

for (let d = backArray.length - 1; d >= 0; d--) {
    if (backArray[d] % 3 === 0) {
        backArray[d]= " okten "
//
    }
}
console.log(backArray)
document.write(`${backArray}`)

