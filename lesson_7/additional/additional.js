// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// let user = {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }




class Users {

    constructor(id, name, email, street, suite, city, zipcode,latitude,longitude, phone, website, nameCom,catchPhrase,bs) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = {street:street,suite:suite,city:city,zipcode:zipcode,geo: {
            lat: latitude,
            lng: longitude
        }};
        this.phone = phone;
        this.website = website;
        this.company = {
        name: nameCom,
        catchPhrase: catchPhrase,
        bs: bs
    };

    }
}

let user = new Users(1, 'Bret', 'Sincere@april.biz',
    'Kulas Light', 'Apt. 556',
    'Gwenborough', '92998-3874','-37.3159','81.1496',
    '1-770-736-8031 x56442', 'hildegard.org','Romaguera-Crona',
    'Multi-layered client-server neural-net','harness real-time e-markets')




console.log(user)
