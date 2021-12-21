// Callback
function awakening2(cb) {

    setTimeout(() => {
        console.log('Подъем!!!');
        cb(null);
    }, 100)
}

function gymnastics2(cb) {

    setTimeout(() => {
        console.log('Утренняя зарядка!!!');
        cb(null);
    }, 700)
}

function shower2(cb) {

    setTimeout(() => {
        console.log('Душ');
        cb(null);
    }, 400)
}

function breakfast2(cb) {

    setTimeout(() => {
        console.log('Завтрак');
        cb(null);
    }, 300)
}

function dressed2(cb) {

    setTimeout(() => {
        console.log('Одется');
        cb(null);
    }, 400)
}

function goingToWork2(cb) {

    setTimeout(() => {
        console.log('Дорога на работу');
        cb(null);
    }, 1000)

}

function job2(cb) {

    setTimeout(() => {
        console.log('Начинаю работать');
        cb(null);
    }, 5000)
}

function dinner2(cb) {

    setTimeout(() => {
        console.log('Обедаю');
        cb(null);
    }, 600)

}

function work2(cb) {

    setTimeout(() => {
        console.log('Продолжаю работать');
        cb(null);
    }, 500)
}

function going_home2(cb) {

    setTimeout(() => {
        console.log('Еду домой, слушать лекции по JS');
        cb(null);
    }, 3000)
}

// awakening2(value,(awakening2))

awakening2((awakening2) => {
    gymnastics2((gymnastics2) => {
        shower2((shower2) => {
            breakfast2((breakfast2) => {
                dressed2((dressed2) => {
                    goingToWork2((goingToWork2) => {
                        job2((job2) => {
                            dinner2((dinner2) => {
                                work2((work2) => {
                                    going_home2((going_home2) => {
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

