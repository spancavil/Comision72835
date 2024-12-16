//Los dynamic imports se utilizan en tiempo de ejecución de manera asíncrona y no de manera estática arriba de todo como los import tradicionales.
//Además los dynamic no requieren los "type" = "module" que veremos más adelante y pueden ser utilizados en archivos common (contextos no modulares)

(async ()=> {
    const {default: Calculator} = await import('./modules/Calculadora.js')
    const calculator = new Calculator()
    const suma1 = calculator.sumar(1, 3)
    const resta1 = calculator.restar(7, 10)
    console.log(suma1);
    
})()