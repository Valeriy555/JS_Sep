// - Дано список імен.


let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
console.log("---  Функція, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд  --")
let name = (str) => {
    return  str
        .replaceAll('..', ' ')
        .replaceAll('---',' ')
        .replaceAll('__',' ')


}
console.log(name(n1))
console.log(name(n2))
console.log(name(n3))

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
console.log("--функція яка заповнює масив рандомними числами-")


let random = (ran) => {
    let randomArr = [];
    for (let i = 0; i < ran; i++) {
       randomArr.push(Math.round(Math.random()*100))
    }
    return randomArr
}
console.log (random(15))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     Відсортувати його за допомоги sort
console.log("-- Відсортувати  масив за допомоги sort --")

let arrSort =random(15); // используется предыдущая функция для создания нового массива
// let arrSort =[1,15,20,35,14,10] // или создается новый массив
arrSort.sort((a, b) => a-b); // сортировка по порядку возростания
arrSort.sort((a, b) => b-a); // сортировка по порядку убывания
console.log (arrSort)


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log("-- Відфільтрувати  масив за допомоги filter, залишивши тільки парні числа --")

let arrfilt = random(15); // используется предыдущая функция для создания нового массива
// let arrfilt =[1,15,20,35,14,10] // или создается новый массив
let result= arrfilt.filter(value => !(value % 2))
console.log (result)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
console.log("-- За допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.--")

let arrMap = random(15);
let arrCall = arrMap.map(value => value + ' ')
console.log (arrCall)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
console.log("--функція, яка прймає масив чисел, та сортує його від більшого до меньшого,або навпаки в залежності від " +
    "значення аргументу  --")

let sortNums = (numbers, direction) => {
    let nums = [];
    if(direction === 'ascending'){
        return numbers.sort((a,b) => a-b)
    }else if (direction === 'descending'){
        return numbers.sort((a,b) => b-a)
    }
    return nums
}
console.log(sortNums([11,21,3],'descending'))



// - є масив
console.log("-----Фільтрація та сортування масиву------")

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) =>
    a.monthDuration -b.monthDuration))
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5));

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
console.log("-----Функція яка ділить строку на підстроки , які складаються з n символів---")

let cutString = (str, n) => {
    let strArr = [];
    while (str.length) {
        strArr.push(str.substr(0, n))
        str = str.slice(n)
    }
    console.log(strArr)
    return strArr
};
document.writeln(cutString('наслаждение', 3))