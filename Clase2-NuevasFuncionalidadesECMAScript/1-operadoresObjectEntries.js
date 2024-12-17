//Operador ** con map
const notas = [7, 2, 4, 5]

const notasAlCuadrado = notas.map(nota => nota ** 2)

console.log(notasAlCuadrado[2]);

//Array con includes
const paises = ["Arg", "Bol", "Chi"]
if (paises.includes("Arg")) {
    //Variable de scope local
    const a = 2
    console.log("Entra al bloque de includes");
}

// console.log(a);

// console.log("Hola!");


const impuestos = {
    impuesto1: 2341,
    impuesto2: 341,
    impuesto3: 4611,
    impuesto4: 111,
}

//Iteración con objetos
for (const key in impuestos) {
        console.log(key);
        const element = impuestos[key];
        console.log(element);
}

const impuesto3 = {
    impuesto3: impuestos['impuesto3']
}


//Transforma el objeto en un array, contiendo arrays con las claves (string) y valores (en el formato que estén)
console.log(Object.entries(impuestos))
console.log(Object.values(impuestos))
console.log(Object.keys(impuestos))

const onlyValues = Object.values(impuestos)

const sumFunction = (acc, current) => (acc *= current)
const resultReduce = onlyValues.reduce(sumFunction, 1)

console.log(resultReduce);
