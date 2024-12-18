const valoresOriginales = [1,2,3,4,5]

const callBackFunction = (iterator) => {
    if (iterator%2 === 0) return iterator
    else return "no es par"
}

const evaluacionDePares = valoresOriginales.map(callBackFunction)

console.log(evaluacionDePares);
