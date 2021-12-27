// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


document.addEventListener('click', function (e) {

// document.onclick = function (e) {
    console.log(`tagName =` + e.target.tagName);
    console.log(`classList =` + e.target.classList);
    console.log(`className =` + e.target.className);
    console.log(`ID =` + e.target.id);
    console.log(`size :` + `висота=` + e.target.clientHeight + 'px' + ' ' + `ширина=` + e.target.clientWidth + 'px');
})

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


let popup = document.createElement('div');

popup.style.width = '200px';
popup.style.height = '100px';
popup.style.background = 'red';
popup.style.position = 'absolute';
popup.style.top = '-1000px';
popup.style.transition = '2s';


document.body.append(popup);


document.addEventListener('click', function (e) {

    popup.style.top = '400px';

    popup.style.position = 'fixed';
    popup.innerHTML =
        `tagName: ${e.target.tagName}  <br>
         classList: ${e.target.classList} <br>
         className:  ${e.target.className} <br>
         ID: ${e.target.id} <br>
         size: висота= ${e.target.clientHeight}px
               ширина= ${e.target.clientWidth}px `;

});