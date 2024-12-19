let data = [1,2,3,4,5]

const myMapFunction = (array, callback) => {
    let newArray = []
    for (let index = 0; index < array.length; index++) {
        let newValue = callback(array[index])
        newArray.push(newValue)
    }
    return newArray
}

let newOwnArray = myMapFunction(data, x => x + 2)
let newOwnArrayWithMap = data.map(x => x + 2)



Array.prototype.myOwnMapFunction = function (callback) {
    let newArray = []
    //This hace referencia al nuevo array
    for (let index = 0; index < this.length; index++) {
        let newValue = callback(this[index])
        newArray.push(newValue)
    }
    return newArray
}

let newOwnArrayModifyingPrototype = data.myOwnMapFunction(x => x**2)
console.log({newOwnArrayModifyingPrototype});
