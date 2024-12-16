const originalArray = [{a: 1, b: 2}, {a: 3, b: "Hola"}]

//Spread => shallow copy

//structuredClone => deep copy

//También JSON.parse(JSON.stringify())

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

let {a, ...restoProps} = object4

console.log(restoProps);
