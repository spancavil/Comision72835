/*
Definir clase Contador:
    La clase se creará con un nombre, representando al responsable del contador.
    El contador debe inicializarse en 0.
    Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.
    Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
    Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
    Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
    Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
    Realizar prueba de individualidad entre las instancias.
*/

class Counter {

    static quantityOfCounters = 0
    static globalCount = 0

    constructor (responsable) {
        const nombreLoco = "Yair"
        this.count = 0
        this.responsable = responsable
    }

    getResponsable = () => this.responsable

    contar = () => {
        this.count += 1
        Counter.globalCount += 1
    }

    getCuentaIndividual = () => {
        return this.count
    }

    static getCuentaGlobal = () => Counter.globalCount
}

const counter1 = new Counter("Jose")

counter1.contar()
counter1.contar()
counter1.contar()

const counter2 = new Counter("Nicolas")

counter2.contar()
counter2.contar()

console.log(counter1.getCuentaIndividual());

console.log(counter2.getCuentaIndividual());

console.log(Counter.getCuentaGlobal());



