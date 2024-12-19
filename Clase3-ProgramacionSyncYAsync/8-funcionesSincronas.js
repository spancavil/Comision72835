//Programación sicrona
//Callstack => se ejecuta como si fuera una pila de platos (LIFO last in first out)
const funcA = (paramA) => {
    return paramA + 2
}

const funcB = (paramB) => {
    return funcA(paramB)
}

console.log(funcB(10));

console.log("20");
