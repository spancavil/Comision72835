//Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20. Indicar por consola la finalización de esta operación con un mensaje.
//Mediante el uso de Promesas, crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

const moment = require('moment')

//Get random number between range
function getRandomArbitrary(min, max) {
    //Math.floor | Math.ceil | Math.round
    return Math.round(Math.random() * (max - min) + min);
}

function getNumbers () {
    return new Promise((acc, rej) => {
        //...logic here
        const numbers = []
        for (let index = 0; index < 10000; index++) {
            numbers.push(getRandomArbitrary(1,20))
        }
        console.log("Termino el loop");
        console.log(numbers.length)
        acc()
    })
}

getNumbers().then(result => console.log(result))

