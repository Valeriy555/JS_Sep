// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

console.log("***-- вивести максимальне,врахувати коли введені рівні числа --***")
document.write('<hr/><b> вивести максимальне,врахувати коли введені рівні числа </b><br/> ')

let nam_1 = +prompt('Введіть перше число',)
let nam_2 = +prompt('Введіть друге число',)

if (nam_1 > nam_2) {
    console.log(`Число ${nam_1} більше ніж ${nam_2}`)
    document.write(`Число ${nam_1} більше ніж ${nam_2}`)
} else if (nam_1 < nam_2) {
    console.log(`Число ${nam_2} більше ніж ${nam_1}`)
    document.write(`Число ${nam_2} більше ніж ${nam_1}`)
} else if (nam_1 === nam_2) {
    console.log(`Число ${nam_2} дорівнює числу ${nam_1}`)
    document.write(`Число ${nam_2} дорівнює числу ${nam_1}`)
} else {
    console.log(`Не пішіть фігню, будь ласка`)
    document.write(`Не пішіть фігню, будь ласка`)
}

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

console.log("***-- Задача про підїзди та квартири))--***")
document.write('<hr/><b> Задача про підїзди та квартири))</b><br/> ')

let apartment = +prompt('Введить номер квартири');
if (  apartment > 0  && apartment <= 20 ) {
    console.log(`Квартира знаходиться в першій парадній`)
    document.write(`Квартира знаходиться в першій парадній`)
} else if ( apartment >=  21  && apartment <= 48 ) {
    console.log(`Квартира знаходиться в другій парадній`)
    document.write(`Квартира знаходиться в другій парадній`)
} else if ( apartment >= 49  && apartment <= 90 ) {
    console.log(`Квартира знаходиться в третій парадній`)
    document.write(`Квартира знаходиться в третій парадній`)
} else  {
    console.log(`В цьому будинку не має квартири з таким номером`)
    document.write(`В цьому будинку не має квартири з таким номером`)
}

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
//     якщо змінна не рівна 10 - тоді НЕВІРНО
console.log("***-- якщо змінна number рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО--***")
document.write('<hr/><b> якщо змінна number рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10-тоді НЕВІРНО</b><br/> ')

let number = +prompt('Введіть число');
if (number === 10){
    console.log(`ВІРНО`)
    document.write(`ВІРНО`)
}else  {
    console.log(`НЕВІРНО`)
    document.write(`НЕВІРНО`)
}

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1, якщо в змінну записали
// стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 4.якщо в змінну записали щось інше, спрацьовує else

console.log("***-- змінну x в яку користувач задає  значення--***")
document.write('<hr/><b> змінну x в яку користувач задає  значення</b><br/> ')

let x = [5,8,9,false];
if (typeof x === 'number'){
    console.log(`Відповідь 1. Це числове значення`)
    document.write(`Відповідь 1. Це числове значення`)
}else if (typeof x === 'string'){
    console.log(`Відповідь 2. Це строкове значення`)
    document.write(`Відповідь 2. Це строкове значення`)
}else if (typeof x === 'boolean'){
    console.log(`Відповідь 3. Це булеве значення`)
    document.write(`Відповідь 3. Це булеве значення`)
}else if (typeof x === 'object'){
    console.log(`Відповідь 4. Це обєкт або массив`)
    document.write(`Відповідь 4. Це обєкт або массив`)
}else  {
    console.log(`Не пішіть фігню, будь ласка`)
    document.write(`Не пішіть фігню, будь ласка`)
}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".Змінна, яка характеризує температуру.Якщо температура
// від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .Якщо інша темпаретура, тоді виводимо повідомлення
// що сидимо вдома і вчимося ОНЛАЙН
console.log("***-- Йти в OKTEN, чи ну його на фіг --***")
document.write('<hr/><b> Йти в OKTEN, чи ну його на фіг</b><br/> ')
let studies = +prompt('Ми йдемо сьогодні в OKTEN на навчання? А яка температура на вулиці?');
if (  studies >= 10  && studies <= 22 ) {
    console.log(`Ми йдемо ВЧИТИСЯ`)
    document.write(`Ми йдемо ВЧИТИСЯ`)
} else  {
    console.log(`Сидимо вдома і вчимося ОНЛАЙН`)
    document.write(`Сидимо вдома і вчимося ОНЛАЙН`)}

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

console.log("***-- Виграємо приз --***")
document.write('<hr/><b> Виграємо приз</b><br/> ')

let game = +prompt('Виберіть число від 1 до 5, щоб виграти приз!!')
switch (game) {
    case 1:
        console.log('Ви виграли автомобіль!!!');
        document.write('Ви виграли автомобіль!!!')
        break;
    case 2:
        console.log('Ви виграли мопед!!!');
        document.write('Ви виграли мопед!!!')
        break;
    case 3:
        console.log('Ви виграли телефон!!!');
        document.write('Ви виграли телефон!!!')
        break;
    case 4:
        console.log('Ви на жаль нічого не виграли!!!');
        document.write('Ви на жаль нічого не виграли!!!')
        break;
    case 5:
        console.log('Ви виграли телевізор!!!');
        document.write('Ви виграли телевізор!!!');
        break;

    default:
        console.log('Число не вірне!!!');
        document.write('Число не вірне!!!');
}