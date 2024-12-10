console.log("Hola!")
console.warn("Esto es un warn")

/* Esto es un bloque de
comentario */
//Variables primitas
let variable
const nombre = "Jose"
const edad = 29
const esMayorDeEdad = edad >= 18 ? true : false
console.log(variable) //Undefined

//Variables no primitivas
const persona = {
    nombre: "Micaela",
    edad: 32,
    sexo: "f",
    apellido: "Gómez"
}

console.log(persona.apellido);

persona.domicilio = "Corrientes 2453 3° C"

console.log(persona.domicilio);

const frutas = ["kiwi", "melon", "sandía", "limón", "pera"]

console.log(frutas[frutas.length - 1])

const persona2 = persona

persona.edad = 40

//Veremos la clase que viene
console.log(persona2);


