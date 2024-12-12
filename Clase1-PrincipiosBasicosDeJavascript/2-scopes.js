//Transformarlo en arrow function
const funcion1 = (param1) => param1 + 2

console.log([1, 2, 3].map(element => element + 1))

function funcion2 (param2) {
    return funcion1(param2 + 2)
}

//IIFE (función autoinvocada)
//Verlo con debug

//Call stack LIFO (last in, first out)
(()=> {
    const paramGlobal = 7
    const result = funcion2(paramGlobal)
    console.log(result);
})()

// console.log(paramGlobal);

const nombre = "Rodrigo"

//const no deja cambiar valores del tipo primitivo
// nombre = "Rodri"

const arrayNombres= ["Rodrigo", "José"]
arrayNombres.push("Mateo")

//Error
//arrayNombres = 3

const persona1 = {
    nombre: "Pepe"
}

persona1.apellido = "Vargas"

