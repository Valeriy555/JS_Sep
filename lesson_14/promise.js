// Promise_then
function awakening() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Подъем!!!');
            resolve()
        }, 100)
    })
}

function gymnastics() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Утренняя зарядка!!!');
            resolve()
        }, 700)
    })
}

function shower() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Душ');
            resolve()
        }, 400)
    })
}

function breakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Завтрак');
            resolve()
        }, 300)
    })
}

function dressed() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Одется');
            resolve()
        }, 400)
    })
}

function goingToWork() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Дорога на работу');
            resolve()
        }, 1000)
    })
}

function job() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Начинаю работать');
            resolve()
        }, 5000)
    })
}

function dinner() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Обедаю');
            resolve()
        }, 600)
    })
}

function work() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Продолжаю работать');
            resolve()
        }, 500)
    })
}

function going_home() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Еду домой, слушать лекции по JS');
            resolve()
        }, 3000)
    })
}

awakening()
    .then(value => {
        return gymnastics();
    })
    .then(value => {
        return shower();
    })
    .then(value => {
        return breakfast();
    })
    .then(value => {
        return dressed();
    })
    .then(value => {
        return goingToWork();
    })
    .then(value => {
        return job();
    })
    .then(value => {
        return dinner();
    })
    .then(value => {
        return work();
    })
    .then(value => {
        return going_home();
    })


