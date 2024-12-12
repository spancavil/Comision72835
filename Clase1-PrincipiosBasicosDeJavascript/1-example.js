const personas = [
    {
        id: 1,
        firstName: "Luz", 
        lastName: "Escalante",
        age: 25,
        gender: "F"
    },
    {
        id: 2,
        firstName: "Florencia",
        lastName: "Gómez",
        age: 46,
        gender: "F"
    },
    {
        id: 3,
        firstName: "Franco",
        lastName: "Buenaventura",
        age: 53,
        gender: "M"
    }
]

const verduras = ["Kiwi", "pera"]

//Mediante spread operator estamos generando un nuevo array en una nueva posición de memorioa
const verduras2 = [...verduras]

verduras.push("alcaucil")

console.log(verduras2);


//Copia por referencia
// let people2 = people

//Por qué podemos cambiar la age si la declaramos con const?
// people[1].age = 12

// console.log(people2);

//No podemos hacer un spread si tenemos objetos dentro del array. Consider hacer un bucñe
const people3 = []

for (const persona of personas) {
    people3.push({...persona})
}

personas[1].age = 12

console.log({people3: people3});
