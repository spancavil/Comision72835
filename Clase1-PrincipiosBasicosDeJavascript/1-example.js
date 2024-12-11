const people = [
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

//Copia por referencia
let people2 = people

//Por qué podemos cambiar la age si la declaramos con const?
people[1].age = 12

console.log(people2);
