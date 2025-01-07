/* 
Realizar un programa que utilice la  dependencia momentjs  (deberá instalarse por npm install).
Debe contar con una variable que almacene la fecha actual (utilizar moment())
Debe contar con una variable que almacene sólo la fecha de tu nacimiento (utilizar moment).
Validar con un if que la variable contenga una fecha válida (utilizar el método isValid());
Finalmente, mostrar por consola cuántos días han pasado desde que naciste hasta el día de hoy. (utilizar el método diff()
Extra: Cambia tu moment a la versión 1.6.0, al no ser la misma versión mayor, nota el cambio al correr el programa.
*/

const moment = require('moment')

class AgeManager {
    #time
    constructor () {
        this.#time = moment().format('LL')
    }

    getYourBday = ({year, month, day}) => {
        const date = moment(`${month}-${day}-${year}`, 'MM/DD/YYYY')
        if (!date.isValid()) return 'Date not valid!'
        return moment(`${month}-${day}-${year}`, 'MM/DD/YYYY').format('L')
    }

    getSpawnTime = () => this.#time

    getRelativeTimeFromYourBday = () => {

    }

}

const ageManager = new AgeManager()
const spawnTime = ageManager.getSpawnTime()
console.log(spawnTime);

const bday = ageManager.getYourBday({year: 1989, month: 5, day:13})

console.log(bday);

