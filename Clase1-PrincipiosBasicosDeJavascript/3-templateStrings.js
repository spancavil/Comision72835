const returnFullName = (nombre, apellido = "") => {
    //Completar con template string
    // return ("Hola, " + nombre + " " + apellido + ".")

    return (`Hola, ${nombre} ${apellido}`)
}

// console.log(nombre);


console.log(returnFullName("Jose"))
