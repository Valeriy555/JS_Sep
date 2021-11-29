// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let usersArr = [
    new User(2,'Diana','Petrova', 'petrova@gmail.com', '734-28-52'),
    new User(5,'Sergey','Kravchuck', 'kravchuck@gmail.com', '734-28-55'),
    new User(8,'Valeriy','Holenko','holenko@gmail.com','734 - 28 - 58'),
    new User(4,'Sveta','Ivanova', 'ivanova@gmail.com', '734-28-54'),
    new User(9,'Dasha','Koval', 'koval@gmail.com', '734-28-59'),
    new User(10,'Olya','Kof', 'kof@gmail.com', '734-28-10'),
    new User(1,'Oleg','Rush', 'rush@gmail.com', '734-28-01'),
    new User(3,'Petr','Poroh', 'potoh@gmail.com', '734-29-03'),
    new User(6,'Jack','Kusto', 'kusto@gmail.com', '734-28-06'),
    new User(7,'Bred','Pit', 'pit@gmail.com', '734-28-07'),
]

console.log(usersArr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(usersArr.filter((User => (User.id) % 2===0)));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(usersArr.sort((min, max) => min.id - max.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// -створити пустий масив, наповнити його 10 об'єктами Client

let clientsArr = [
    new Client(1,'Diana','Petrova', 'petrova@gmail.com', '734-28-52',['pen', 'pencil', 'notepad']),
    new Client(2,'Sergey','Kravchuck', 'kravchuck@gmail.com', '734-28-55',['headphones']),
    new Client(3,'Valeriy','Holenko','holenko@gmail.com','734 - 28 - 58',['table', 'chair']),
    new Client(4,'Sveta','Ivanova', 'ivanova@gmail.com', '734-28-54',['knife', 'fork','spoon','plate']),
    new Client(5,'Dasha','Koval', 'koval@gmail.com', '734-28-59',['car','pen','bag','toy','oil','bed']),
    new Client(6,'Olya','Kof', 'kof@gmail.com', '734-28-10',['milk','meat','cup','bottle']),
    new Client(7,'Oleg','Rush', 'rush@gmail.com', '734-28-01',['vodka','wine', 'cognac']),
    new Client(8,'Petr','Poroh', 'potoh@gmail.com', '734-29-03',['juice','water']),
    new Client(9,'Jack','Kusto', 'kusto@gmail.com', '734-28-06',['painting','paints']),
    new Client(10,'Bred','Pit', 'pit@gmail.com', '734-28-07',['bread']),
]


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clientsArr.sort((min, max) => min.order.length - max.order.length));


