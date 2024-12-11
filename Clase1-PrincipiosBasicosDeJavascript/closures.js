//Increment, decrement y getCount siguen teniendo acceso a la variable externa count, es como que queda guardada.
//Es decir no se borra la variable una vez ejecutada la función createCounter, las funciones internas increment, decrement y getCount siguen teniendo acceso a esta variable para poder modificarla.

const createCounter = () => {
    //Count forma parte del lexical scope de las funciones internas increment, decrement y getCount
    //Es como una variable "privada" a la cual sólo tienen acceso las funciones internas (se forma la closure)
    let count = 0
    return {
        increment: () => count++,
        decrement: () => count--,
        getCount: () => count,
    }
}

const counter = createCounter()
counter.increment() // count = 1
counter.increment() // count = 2
console.log(counter.getCount()) // Output: 2
counter.decrement()
console.log(counter.getCount());