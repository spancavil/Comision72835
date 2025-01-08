const timer = (callback) => {
  console.log('Ejecutando...')
  setTimeout(callback, 5000)
}

const operation = () => console.log('Se ejecutó la operación')

console.log('Inicio')
timer(operation)
console.log('Fin')
