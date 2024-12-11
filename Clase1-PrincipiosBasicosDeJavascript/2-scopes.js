//Transformarlo en arrow function
function funcion1 (param1) {
    return param1 + 2
}

function funcion2 (param2) {
    return funcion1(param2 + 2)
}

//IIFE (función autoinvocada)
//Verlo con debug
(()=> {
    const result = funcion2(5)
    console.log(result);
})()