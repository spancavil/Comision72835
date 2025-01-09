const fs = require('fs')

//Write file sobreescribe todo. Append file agrega al final
/**
 * Voy a adicionar contenido al archivo test.txt
 */
const variable1 = 'hola'
fs.appendFile('./test.txt', 'Hola desde el callback', (error) => {
  if (error) return console.log('Error al escribir el archivo')
  fs.readFile('./test.txt', 'utf-8', (err, data) => {
    if (err) return console.log('Error al leer el archivo')
    console.log(data)
  })
})
