//Operador ** con map

//Array con includes
const paises = ["Arg", "Bol", "Chi"]
if (paises.includes("Arg")) {}

const impuestos = {
    impuesto1: 2341,
    impuesto2: 341,
    impuesto3: 4611,
    impuesto4: 111,
}

//Transforma el objeto en un array, contiendo arrays con las claves (string) y valores (en el formato que estén)
console.log(Object.entries(impuestos))
console.log(Object.values(impuestos))
console.log(Object.keys(impuestos))

const onlyValues = Object.values(impuestos)

const sumFunction = (acc, current) => (acc += current)
const resultReduce = onlyValues.reduce(sumFunction, 0)

console.log(resultReduce);
