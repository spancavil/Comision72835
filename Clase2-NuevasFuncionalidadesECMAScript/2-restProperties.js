const originalArray = [{a: 1, b: 2}, {a: 3, b: "Hola"}]

//Spread => shallow copy
const copyShallow = [...originalArray]
originalArray[0].b = 10
console.log(copyShallow);

//structuredClone => deep copy
const copyStructured = structuredClone(originalArray)
originalArray[1].b = "Chau"
console.log(copyStructured);

//También JSON.parse(JSON.stringify())
const copyJson = JSON.parse(JSON.stringify(originalArray))
originalArray[1].b = "Qué tal"
console.log(copyJson);

let object1 = {
    prop1: 2,
    prop2: "b",
    prop3: true
}

let object2 = {
    prop1: "c",
    prop2: [2,3,5,6,7]
}

let object4 = {
    a: 1,
    b: 2,
    c: 3
}

//Asignamos propiedades restantes
let {a, ...restoProps} = object4

console.log(restoProps);
