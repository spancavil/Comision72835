/* 
Escribir un programa ejecutable bajo node.js que realice las siguientes acciones:
Abra una terminal en el directorio del archivo y ejecute la instrucción: 
    npm init -y

Esto creará un archivo especial (lo veremos más adelante) de nombre package.json
Lea el archivo package.json y declare un objeto con el siguiente formato y datos:
    const info = {
        contenidoStr: (contenido del archivo leído en formato string),
        contenidoObj: (contenido del archivo leído en formato objeto),
        size: (tamaño en bytes del archivo)
    }

Requisitos:
    Muestre por consola el objeto info luego de leer el archivo
    Guardar el objeto info en un archivo llamado info.json dentro de la misma carpeta de package.json
    Incluir el manejo de errores (con throw new Error)
    Utilizar el módulo promises de fs dentro de una función async/await y utilizar JSON.stringify + JSON.parse para poder hacer las transformaciones json->objeto y viceversa
*/
const fs = require('fs')
const relativePath = './package.json'
const outputPath = './info.json'

const fn = async () => {
  try {
    let packageString = await fs.promises.readFile(relativePath, 'utf-8')
    const packageObj = JSON.parse(packageString)
    const info = {
      contenidoStr: packageString,
      contenidoObj: packageObj,
      size: packageString.length,
    }
    const infoStrinfied = JSON.stringify(info, null, '\t')
    await fs.promises.writeFile(outputPath, infoStrinfied)
  } catch (error) {
    console.log(`Error en la operación de archivos: ${error.message}`)
  }
}

console.log('No se afecta ')
fn()
console.log('el main thread')
