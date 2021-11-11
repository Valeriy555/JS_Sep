// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
console.log("*** Створити масив з 10 чисел. Скласти результат цих чисел в змінній result.***")
document.write('<b><hr/> Створити масив з 10 чисел. Скласти результат цих чисел в змінній result.</b><br/> ')

let array = []
let result = 0;
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 20))
    result += array[i];
}
document.write(`массив: ${array} </br>`)
console.log(array)

document.write(`результат додавання: ${result}`)
console.log(result)

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
    title: "Мнемоскан",
    number_of_pages: 1790,
    genre: 'фантастика',
   };
console.log(book);

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book_ = {
    title: "Скотный Двор",
    number_of_pages: 165,
    genre: 'антиутопия',
    author: 'Джордж Оруэлл'
};
console.log(book_);


// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.' +
// ' Вивести кожну книгу як окремий об'єкт

console.log("*** Вивести кожну книгу як окремий об'єкт.***")

let books = [
   {
        title: "Скотный Двор",
        number_of_pages: 165,
        genre: 'антиутопия',
        author: 'Джордж Оруэлл',
    },
     {
        title: "Мнемоскан",
        number_of_pages: 1790,
        genre: 'фантастика',
        author: 'Роберт Сойер'
    },
]

console.log(books[0]);
console.log(books[1]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
console.log("*** Напишіть код, який вираховує площу прямокутника.***")

function squares(height,width) {

    return (height*width);
}
let s = squares (23,10);
console.log(s)

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
console.log("*** Напишіть код, який знаходить об'єм циліндра.***")

function volume(heightC, dC) {

    return  3.14 * ((dC / 2) ** 2) * heightC;
}
let v = volume(10, 4);
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4). Знайдіть гіпотенузу k
// за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
console.log("*** Знайдіть гіпотенузу k за теоремою Піфагора***")

function cathetus(n, m) {

    return ((n)**2)+((m)**2);
}
let k = cathetus(3, 4);
console.log(Math.sqrt(k)); // 5