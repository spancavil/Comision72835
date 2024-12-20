/* ¿Cómo lo hacemos? Se crearán un conjunto de funciones gestionadas por promesas y un entorno ASÍNCRONO donde podremos ponerlas a prueba.
1. Definir función SUMA:
    Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea 0.
    En caso de que algún sumando sea 0, rechazar la promesa indicando “Operación innecesaria”.
    En caso de que la suma sea negativa, rechazar la promesa indicando “La calculadora sólo debe devolver valores positivos.
2. Definir función RESTA:
    Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
    En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando “Operación inválida
    En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando “La calculadora sólo puede devolver valores positivos” 
3. Definir una función MULTIPLICACION:
    Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo
    Si el producto es negativo, rechazar la oferta indicando “La calculadora sólo puede devolver valores positivos
4. Definir la misma función DIVISION utilizada en esta clase.
5. Definir una función asíncrona CALCULOS, y realizar pruebas utilizando async/await y try/catch
*/

const suma = (sumando1, sumando2) => {
    //NO
    // return sumando1 + sumando2

    return new Promise((res, rej) => {
        //Rechazo temprano
        if (sumando1 === 0 || sumando2 === 0) rej("Operación innecesaria")
        const operacion = sumando1 + sumando2
        if (operacion < 0) rej("La calculadora sólo debe devolver valores positivos")
        res(operacion)
    })
}


const division = (dividend, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) reject("No se puede dividir entre cero")
        else resolve(dividend / divisor)
    })
}

const calculos = async () => {
    try {
        // const sumaRes = await suma(0, 10)
        // const sumaRes = await suma(10, 0)
        // const sumaRes = await suma(10, -100)
        const sumaRes = await suma(10, 20)
        console.log(sumaRes);
        
    } catch (error) {
        console.log(error)
    }
}

calculos()