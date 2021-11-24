console.log("--- Дано натуральное число n. Выведите все числа от 1 до n. --")
document.write('<hr/><b> Дано натуральное число n. Выведите все числа от 1 до n. </b><br/> ')

let nFun = (n) => {
    let arrN = [];
    for (let i = 1; i <= n; i++) {
        console.log(i)
        arrN.push([i]);
    }
    return arrN
}
document.write(`${nFun(10)}`)
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
//     если A < B, или в порядке убывания в противном случае.
console.log("--- Даны два целых числа A и В......  --")
document.write('<hr/><b> Даны два целых числа A и В......  </b><br/> ')
let upDown = (a, b) => {
    if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
            document.write(`<span>${i} </span>`);}
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
            document.write(`<span>${i} </span>`);}
    } else {
        console.log('Числа равны');
        document.write('Числа равны');}
}
upDown(20, 15)


//  -   функція Приймає масив [9,8,0,4] та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
document.write('<hr/><b>  Функція Приймає масив [9,8,0,4] : </b><br/> ')
console.log("--- Должен быть результат [ 8, 9, 0, 4 ] --")
document.write('<hr/><b> Должен быть результат [ 8, 9, 0, 4 ] </b><br/> ')
let array_1 = [9, 8, 0, 4]

let arrFun = (i) => {
    let temp = array_1[i];
    array_1[i] = array_1[i + 1];
    array_1[i + 1] = temp;

    return temp
}
arrFun(0)
console.log(array_1)
document.write(`${array_1}`)


console.log("--- Должен быть результат [ 9 ,0, 8, 4 ] --")
document.write('<hr/><b> Должен быть результат [ 9 ,0, 8, 4 ] </b><br/> ')
let array_2 = [9, 8, 0, 4]

let arrFun_1 = (i) => {
    let temp = array_2[i];
    array_2[i] = array_2[i + 1];
    array_2[i + 1] = temp;

    return temp
}

arrFun_1(1)
console.log(array_2)
document.write(`${array_2}`)

console.log("--- Должен быть результат [ 9, 8, 4, 0 ] --")
document.write('<hr/><b> Должен быть результат [ 9, 8, 4, 0 ] </b><br/> ')
let array_3 = [9, 8, 0, 4]

let arrFun_2 = (i) => {
    let temp = array_3[i];
    array_3[i] = array_3[i + 1];
    array_3[i + 1] = temp;

    return temp
}
arrFun_2(2)
console.log(array_3)
document.write(`${array_3}`)


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100

console.log("---EXAMPLE: [1,0,6,0,3] => [1,6,3,0,0]--")
document.write('<hr/><b> EXAMPLE:[1,0,6,0,3] => [1,6,3,0,0]</b><br/> ')

let arrTrail = [1,0,6,0,3]

let trailingZeros = () => {
    for (let i = 0; i < arrTrail.length; i++) {
        if (arrTrail[i] === 0) {
            arrTrail.push(0);
            arrTrail.splice(i, 1);
        }
    }
    return arrTrail;
}
trailingZeros()
console.log(arrTrail);
document.write(`${arrTrail}`)

console.log("---EXAMPLE: [0,1,2,3,4] => [1,2,3,4,0]--")
document.write('<hr/><b>EXAMPLE: [0,1,2,3,4] => [1,2,3,4,0]</b><br/> ')

let arrTrail_1 = [0,1,2,3,4,0]

let trailingZeros_1 = () => {
    for (let i of arrTrail_1) {
        if (arrTrail_1[i] === 0) {
            arrTrail_1.push(0);
            arrTrail_1.splice(i, 1);
        }
    }
    return arrTrail_1;
}
trailingZeros_1()
console.log(arrTrail_1);
document.write(`${arrTrail_1}`)

console.log("---EXAMPLE: [0,0,1,0]   => [1,0,0,0]--")
document.write('<hr/><b>EXAMPLE: [0,0,1,0]   => [1,0,0,0]</b><br/> ')

let arrTrail_2 = [0,0,1,0]

let trailingZeros_2 = () => {
    for (let i of arrTrail_2 ) {
        if (arrTrail_2[i]===0){
            arrTrail_2.push(0);
            arrTrail_2.splice(i,1)
        }
    }
    return arrTrail_2
}
trailingZeros_2()
console.log(arrTrail_2);
document.write(`${arrTrail_2}`)

