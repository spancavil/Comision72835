const fs = require('fs')
try {
  if (fs.existsSync('./test.txt')) {
    fs.unlinkSync('./test.txt')
    console.log('Termino de borrar el archivo')
  }
} catch (error) {
  console.log('Error')
} finally {
  console.log('Fin del programa')
}
