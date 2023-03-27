// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями'
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Cars(model, manufacturer, year, maxspeed, volume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.volume = volume;

    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    };
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    this.info = function () {
        for (let key in this) {
            if (typeof this[key] !== 'function')


                console.log(`${key} - ${this[key]}`)
        }
    };

    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {

        console.log(`Збільшили швидкість до: ${this.maxspeed = this.maxspeed + newSpeed}`)
    };
    // -- changeYear (newValue) - змінює рік випуску на значення newValue

    this.changeYear = function (newValue) {
        this.year = newValue
        console.log(`Новий рік випуску: ${newValue}`)
    };

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.newDriver = function (driver) {
        this.driver = driver
        console.log(`Водій :${driver}`)
    }


}

let car = new Cars('Toyota', 'Japan', 2014, 230, 1.8)
console.log(car)
car.drive()
car.info()
car.increaseMaxSpeed(20)
car.changeYear(2020)
car.info()
car.newDriver('Valera')


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
console.log(`-------Через клас-------`)

class CarsInClass {
    constructor(model, manufacturer, year, maxspeed, volume) {

        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.volume = volume;
    }

    // -- drive () - виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)

    }

    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    inform() {
        for (let key in this) {
            console.log(`${key} - ${this[key]}`)

        }
    }

    // -- increaseMaxSpeed (newSpeed) - підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {

        console.log(`Збільшили швидкість до: ${this.maxspeed = this.maxspeed + newSpeed}`)
    };

    // -- changeYear (newValue) - змінює рік випуску на значення newValue

    changeYear(newValue) {
        this.year = newValue
        console.log(`Новий рік випуску: ${newValue}`)
    };

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    newDriver(driver) {
        this.driver = driver
        console.log(`Водій :${driver}`)
    }


}

let carInClass = new CarsInClass('Toyota', 'Japan', 2014, 230, 1.8)
console.log(carInClass)

carInClass.drive()
carInClass.inform()
carInClass.increaseMaxSpeed(50)
carInClass.changeYear(2019)
carInClass.inform()
carInClass.newDriver('Diana')


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
class Cinderellas {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}
// Створити масив з 10 попелюшок.
let arrCinderella = [
    new Cinderellas('Diana',24, 36),
    new Cinderellas('Olga',32, 38),
    new Cinderellas('Sveta',18, 37),
    new Cinderellas('Masha',20, 35),
    new Cinderellas('Dasha',19, 40),
    new Cinderellas('Marina',26, 39),
    new Cinderellas('Yulya',28, 41),
    new Cinderellas('Ira',25, 42),
    new Cinderellas('Katya',27, 34),
    new Cinderellas('Polina',28, 34)
]
console.log(arrCinderella)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince{
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

let princ = new Prince('Shrek',52,36)

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let love = (arrCinderella,princ ) => {
    for (let i = 0; i < arrCinderella.length; i++) {
        let cell = arrCinderella[i];

        if (cell.footsize === princ.slipper){
            return `Принц нашел Золушку: ${cell.name}`
        }
    }
}
console.log (love(arrCinderella,princ))

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let cinderella = arrCinderella.find(value => value.footsize === princ.slipper)
console.log(`Принц нашел Золушку, через find и колбэк:${cinderella.name}`)