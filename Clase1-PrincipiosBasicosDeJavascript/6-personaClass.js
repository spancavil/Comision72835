//Completar
class Persona {

    static isHuman = true

    constructor (name, surName) {
        this.name = name
        this.surName = surName
    }

    saludar () {
        return `Hola, me llamo ${this.name} ${this.surName}`
    }

}

const persona1 = new Persona ("Nicolas", "Cicchini")
const persona2 = new Persona("Juan", "Barbat")

console.log(persona1.saludar());

console.log(persona2.saludar())

console.log(Persona.isHuman);

