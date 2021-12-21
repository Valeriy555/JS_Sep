// Async_await
function awakening1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Подъем!!!');
            resolve()
        }, 100)
    })
}

function gymnastics1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Утренняя зарядка!!!');
            resolve()
        }, 700)
    })
}

function shower1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Душ');
            resolve()
        }, 400)
    })
}

function breakfast1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Завтрак');
            resolve()
        }, 300)
    })
}

function dressed1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Одется');
            resolve()
        }, 400)
    })
}

function goingToWork1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Дорога на работу');
            resolve()
        }, 1000)
    })
}

function job1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Начинаю работать');
            resolve()
        }, 5000)
    })
}

function dinner1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Обедаю');
            resolve()
        }, 600)
    })
}

function work1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Продолжаю работать');
            resolve()
        }, 500)
    })
}

function going_home1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Еду домой, слушать лекции по JS');
            resolve()
        }, 3000)
    })
}


async function goodDay() {
    const day =await awakening1();
    await gymnastics1();
    await shower1();
    await breakfast1();
    await dressed1();
    await goingToWork1();
    await job1();
    await dinner1();
    await work1();
    await going_home1();

}

goodDay().then();

