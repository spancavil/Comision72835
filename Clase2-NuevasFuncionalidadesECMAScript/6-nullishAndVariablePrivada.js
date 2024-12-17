//Operador nullish
const variablePorDefault = {}

// || representa un OR
// 0, "", null, undefined => falsies ... Todo lo que no es falsy, es truthy
const nombre = variablePorDefault || "Pepito"
console.log(nombre)

// Nullish devuelve el segundo valor sólo en caso de que sea null o undefined
const nombreConNullishOperator = variablePorDefault ?? "Jose"
console.log(nombreConNullishOperator);

//Variables privadas, se declara con #
class Persona {
    #nombre
    #apellido
    constructor (nombre, apellido) {
        this.#nombre = nombre
        this.#apellido = apellido
    }

    getNombre = () => this.#nombre
    modificarNombre = (nombreModificado) => {
        //Logica con validaciones para verificar el nombre 
        this.#nombre = nombreModificado
    }
}

const persona1 = new Persona("Roberto", "Galan")
console.log(persona1.getNombre());
persona1.modificarNombre("Hector")
console.log(persona1.getNombre());

