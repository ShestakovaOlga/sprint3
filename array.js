/*Ejercicio 1*/
const marks = [5, 4, 6, 7, 9];
const inflatedMarks = marks.map(function (num) {
    return num + 1;
});

console.log(inflatedMarks);

/*Ejercicio 2
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const hello = names.map(wel => 'Bienvenida ' + wel)
console.log(hello);*/

/*Ejercicio 3
const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
];

const premium = users.map(user => {
    if (user.isPremium) {
        return `Bienvenida ${user.name}. Gracias por confiar en nosotros.`
    } else {
        return `Bienvenida ${user.name}`
    }
})
console.log(premium);*/

/*Ejercicio 4*/
const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
];
const nameUser = users.filter(premiumUsers => {
    if (premiumUsers.isPremium) {
        console.log(premiumUsers.name)
    }
})


/*Ejercicio 5*/
const pins = [2389, 2384, 2837, 5232, 8998];
pins.filter(pin => {
    if (pin % 2 == 0) {
        console.log(pin)
    }
})


/*Ejercicio 6*/
const users1 = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 }
];
users1.filter(pins => {
    if (pins.pin % 2 == 0) {
        console.log(pins.name);
    }
})
users1.sort((a, b) => a.pin - b.pin)
console.log(users1);


/*Ejercicio 7*/
const times = [56, 9, 45, 28, 35];
const result = times.reduce(
    (total, number) => total + number,
);
console.log(result / times.length);

/*Ejercicio 8*/
const runners = [
    { name: 'Gregory Goyle', time: 56 },
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 }
];
const run = runners.reduce((savedRunner, runner) => {
    if (!savedRunner) {
        return runner
    }
    if (runner.time < savedRunner.time) {
        return runner
    } else {
        return savedRunner
    }
})
console.log(run.name);

/*Ejercicio 10*/
const runners1 = [
    { name: 'Gregory Goyle', time: 56 },
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 }
];
runners1.sort((a, b) => a.time - b.time);
console.log(runners1);
